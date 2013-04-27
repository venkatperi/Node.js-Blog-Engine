var EventEmitter = require( 'events' ).EventEmitter;
var util = require( 'util' );
var Q = require( 'q' );

var ObjectContext = function ( options ) {
  EventEmitter.call( this );
  this.options = options || {};
  this.init = Q.defer();
  this.entitySets = [];
};

util.inherits( ObjectContext, EventEmitter );
var p = ObjectContext.prototype;

/**
 * Accepts the changes on all associated entries in the ObjectStateManager so their resultant state is either
 * unchanged or detached.
 */
p.acceptAllChanges = function () {
  throw new Error( "abstract method called" );
};

/**
 * Adds an object to the object context.
 * @param {string} entitySet
 * @param {object} object
 */
p.addObject = function ( entitySet, object ) {
  throw new Error( "abstract method called" );
};

/**
 * Creates the entity key for a specific object, or returns the entity key if it already exists.
 *
 * @param entitySet
 * @param object
 */
p.createEntityKey = function ( entitySet, object ) {
  throw new Error( "abstract method called" );
};

/**
 * Creates and returns an instance of the requested type .
 * @param {string} type - Type of object to be returned.
 */
p.createObject = function ( type ) {
  throw new Error( "abstract method called" );
};

/**
 * Creates a new {ObjectSet} instance that is used to query, add, modify, and delete objects of the specified entity type.
 * @param type
 * @param {string} [name] entity set name
 */
p.createObjectSet = function ( type, name ) {
  throw new Error( "abstract method called" );
};

/**
 * Marks an object for deletion
 * @param entity
 */
p.deleteObject = function ( entity ) {
  throw new Error( "abstract method called" );
};

/**
 * Detech object from this context
 * @param {object} entity - the entity to detach
 */
p.detach = function ( entity ) {
  throw new Error( "abstract method called" );
};

/**
 * Returns an object that has the specified entity key.
 * @param key
 */
p.getObjectByKey = function ( key ) {
  throw new Error( "abstract method called" );
};

/**
 * Updates a collection of objects in the object context with data from the data source.
 * @param refreshMode
 * @param items
 */
p.refresh = function ( refreshMode, items ) {
  throw new Error( "abstract method called" );
};

/**
 * Persists all updates to the data source and resets change tracking in the object context.
 */
p.saveChanges = function () {
  throw new Error( "abstract method called" );
};




