var _ = require( 'underscore' );
//var entities = require( './entities' );
var E2M = require( './Entity2Model' );
var Akiban = require( 'akiban-node' );
var util = require( 'util' );
var deepExtend = require( 'deep-extend' );
var Q = require( 'q' );

var registry = [];
var options = {};
var entities;

var Factory = {};
var init = Q.defer();

Factory.init = function ( o ) {
  options = _.extend( options, o );
  options.connections = {};
  options.connections.entity = new Akiban.Entity( o );
  options.connections.sql = new Akiban.Sql( o );
  options.connections.model = new Akiban.Model( o );

  options.connections.model.get().then(function ( val ) {
    entities = val.entities;
    init.resolve();
  } ).done();
};

Factory.register = function ( name, ctor ) {
  var model;
  var e;

  init.promise.then(function () {
    _.each( entities, function ( entity ) {
      if ( entity.name === name ) {
        e = entity;
        model = E2M( entity );
      }
    } );
    if ( !model ) {
      throw new TypeError( ' bad type ' + name );
    }

    registry[name] = {ctor : ctor, entity : e, model : model};
  } ).done();
};

/**
 * Create a new entity of the derived type. Class method
 * @param name - model's class name
 * @param [options] constructor options
 * @param [data] - initial model data
 */
Factory.create = function ( name, options, data ) {
  if ( !registry ) {
    throw new TypeError( "registry is not ready!" );
  }

  options = options || {};
  data = data || registry[name].model.model;
  if ( typeof registry[name] === 'undefined' ) {
    throw new TypeError( 'bad type ' + name );
  }

  var m = new registry[name].ctor( options );
  _.extend( m.__data, data );
  return m;
};

/**
 * Read entity with given id
 * @param {string} name - model class name
 * @param {string} id - the entity's ID
 * @memberof Model
 */
Factory.findById = function ( name, id ) {
  return options.connections.entity.get( name, id ).then(
      function ( item ) {
        return Factory.create( name, null, item[0] );
      },
      function ( err ) {
        console.log( err );
        throw err;
      } );
};

/**
 * Read entity with given jonquil query
 * @param {string} name - model class name
 * @param {object} [query] - the query
 * @memberof Model
 */
Factory.findJ = function ( name, query ) {
  var obj = registry[name].model.query;
  var q = deepExtend( JSON.parse( JSON.stringify( obj ) ), query );

  return options.connections.entity.jonquilQuery( name, q ).then(
      function ( items ) {
        var models = [];
        _.each( items, function ( item ) {
          models.push( Factory.create( name, null, item ) );
        } );
        return models;
      },
      function ( err ) {
        console.log( err );
        throw err;
      } );
};

/**
 * Find by SQL query
 * @param name
 * @param {string} query
 * @returns {*}
 */
Factory.find = function ( name, query ) {
  return options.connections.sql.query( query ).then(
      function ( items ) {
        var models = [];
        _.each( items, function ( item ) {
          models.push( Factory.create( name, null, item ) );
        } );
        return models;
      },
      function ( err ) {
        console.log( err );
        throw err;
      }
  );
};

/**
 * save to DB
 * @param item
 * @returns {Promise}
 */
Factory.update = function ( item ) {
  return options.connections.entity.update( item );
};

module.exports = Factory;