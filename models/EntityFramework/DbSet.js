var EventEmitter = require( 'events' ).EventEmitter;
var util = require( 'util' );
var prop = require( '../../utils/property' );
var Proxy = require( './Proxy' );
/**
 * @constructor
 */
var DbSet = function ( type ) {
  EventEmitter.call( this );
  this.items = [];

  prop( this, "elementType", {default : type} );
};

util.inherits( DbSet, EventEmitter );
var p = DbSet.prototype;

/**
 * Add the entity to the set with the "added" state
 * @param item
 */
p.add = function ( item ) {
  var entry = Proxy( item );
  this.items.push( entry );
};

p.attach = function ( item ) {};

p.create = function ( type ) {
  return Proxy( type || this.elementType );
};

p.find = function ( keys ) {};

p.include = function () {};

p.remove = function () {};

p.sqlQuery = function () {};
