var EventEmitter = require( 'events' ).EventEmitter;
var util = require( 'util' );
var Q = require( 'q' );
var prop = require( '../../utils/property' );

/**
 * @constructor
 */
var DbEntityEntry = function ( entity ) {
  EventEmitter.call( this );
  prop( this, "entity", {default : entity} );
  prop( this, "state", "detached" );
};

util.inherits( DbEntityEntry, EventEmitter );
var p = DbEntityEntry.prototype;

p.reload = function () {};


