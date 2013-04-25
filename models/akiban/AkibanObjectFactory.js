var Q = require( 'q' );
var _ = require( 'underscore' );
var util = require( 'util' );
var Akiban = require( 'akiban-node' );
var E2M = require( './../Entity2Model' );
var ObjectFactory = require( '../ObjectFactory' );

var AkObjectFactory = function ( o ) {
  ObjectFactory.call( this, o );

  this.entities = null;
  this.connections = {};
  this.connections.entity = new Akiban.Entity( o );
  this.connections.sql = new Akiban.Sql( o );
  this.connections.model = new Akiban.Model( o );

  var self = this;
  this.connections.model.get().then(function ( val ) {
    self.entities = val.entities;
    self.init.resolve();
  } ).done();

};

util.inherits( AkObjectFactory, ObjectFactory );
var p = AkObjectFactory.prototype;

/**
 * Return the DB entity definition with the given name
 * @param name
 * @returns {Promise}
 * @instance
 */
p.getDbEntity = function ( name ) {
  return this.init.promise.then( function () {
    var e;
    _.each( this.entities, function ( entity ) {
      if ( entity.name === name ) {
        e = entity;
      }
    } );
    if ( !e ) {
      throw new TypeError( ' bad type ' + name );
    }
    return e;
  } );
};

/**
 * Register the given model for the named entity
 * @param name
 * @param ctor
 * @instance
 */
p.registerModel = function ( name, ctor ) {
  var model;
  var e;

  this.init.promise.then(function () {
    _.each( this.entities, function ( entity ) {
      if ( entity.name === name ) {
        e = entity;
        model = E2M( entity );
      }
    } );
    if ( !model ) {
      throw new TypeError( ' bad type ' + name );
    }

    this.registry[name] = {ctor : ctor, entity : e, model : model};
  } ).done();
};

/**
 * Create a new entity of the derived type. Class method
 * @param type - entity type (name)
 * @param [options] constructor options
 * @param [data] - initial model data
 */
p.createObject = function ( type, options, data, timeout ) {
  this.init.promise.timeout( timeout || 10000, "registry is not ready!" );

  if ( typeof this.registry[name] === 'undefined' ) {
    throw new TypeError( 'bad type ' + name );
  }

  var m = new this.registry[name].ctor( options );
  _.extend( m.__data, data || {} );
  return m;
};

module.exports = AkObjectFactory;