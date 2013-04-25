var ObjectContext = require( './ObjectContext' );
var util = require( 'util' );
var Akiban = require( 'akiban-node' );


/**
 * @extends ObjectContext
 * @lends AkibanObjectContext
 * @param options
 * @constructor
 */
var AkObjectContext = function ( options ) {
  ObjectContext.call( this, options );
  this.connections = {};
  this.connections.entity = new Akiban.Entity( o );
  this.connections.sql = new Akiban.Sql( o );
  this.connections.model = new Akiban.Model( o );

  var me = this;
  this.connections.model.get().then(function ( val ) {
    me.entities = val.entities;
    me.init.resolve();
  } ).done();
};

util.inherits( AkObjectContext, ObjectContext );
var p = AkObjectContext.prototype;

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
p.createObject = function ( type ) {
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


