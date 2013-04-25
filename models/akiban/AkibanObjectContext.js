var ObjectContext = require( './../ObjectContext' );
var util = require( 'util' );
var Akiban = require( 'akiban-node' );
var AkObjectFactory = require( './AkibanObjectFactory' );

/**
 * @extends ObjectContext
 * @lends AkibanObjectContext
 * @param options
 * @constructor
 */
var AkibanObjectContext = function ( options ) {
  ObjectContext.call( this, options );
  this.objectFactory = new AkObjectFactory( options );
};

util.inherits( AkibanObjectContext, ObjectContext );
var p = AkibanObjectContext.prototype;

/**
 * Adds an object to the object context.
 * @param {string} entitySet
 * @param {object} object
 */
p.addObject = function ( entitySet, object ) {
  if ( this.entitySets.indexOf( entitySet ) < 0 ) {
    throw new Error( "entity set not found!" );
  }

  this.entitySets[entitySet].addObject( object );
};

/**
 * Creates and returns an instance of the requested type .
 * @param {string} type - Type of object to be returned.
 */
p.createObject = function ( type, options, data, timeout ) {
  return this.objectFactory.createObject( arguments );
};

/**
 * Creates a new {ObjectSet} instance that is used to query, add, modify, and delete objects of the
 * specified entity type.
 * @param type
 * @param {string} [name] entity set name
 */
p.createObjectSet = function ( type, name ) {
  this.entitySets = null;
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