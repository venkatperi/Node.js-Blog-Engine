var EventEmitter = require( 'events' ).EventEmitter;
var util = require( 'util' );
var Q = require( 'q' );
var prop = require( '../../utils/property' );

/**
 * Represents a combination of the Unit-Of-Work and Repository patterns and enables you to query a database and
 * group together changes that will then be written back to the store as a unit.
 * @param options
 * @constructor
 */
var DbContext = function ( options ) {
  EventEmitter.call( this );
  prop( this, "options" );
  prop( this, "changeTracker", {readonly : true} );

  this.options = options;
};

util.inherits( DbContext, EventEmitter );
var p = DbContext.prototype;

p.entry = function ( obj ) {};

/**
 * Save changes to the db
 */
p.saveChanges = function () {};

/**
 * Returns a DbSet for the specified type, this allows CRUD operations to be performed for the given entity in the context.
 * @param type
 */
p.set = function ( type ) {};

p
