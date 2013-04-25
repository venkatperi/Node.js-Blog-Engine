var EventEmitter = require( 'events' ).EventEmitter;
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );

/**
 * Base class for models
 * @param {object} options
 * @param {Entity} options.connection
 * @param name Entity class name
 * @param ctor Class constructor
 * @property {string} __entityName
 * @constructor
 */
var Model = function ( options, name ) {
  EventEmitter.call( this );
  this.__data = {};
  this.__options = options || {};
  this.__entityName = name;
};

util.inherits( Model, EventEmitter );
var p = Model.prototype;

/**
 *
 * @param obj
 * @param key
 * @param [val]
 * @returns {*}
 */
function valueAtKey( obj, key, val ) {
  var k = key.split( '.' );
  var kk = [];
  var v = obj;
  var setting = arguments.length === 3;

  _.each( k, function ( x, i ) {
    kk.push( x );

    var xx = x.split( '[' );
    var idx = 0;

    if ( _.isArray( v[xx[0]] ) && i < k.length - 1 ) {
      if ( xx.length > 1 ) {
        idx = parseInt( xx[1].split( ']' )[0] );
      }
      v = v[xx[0]];
      x = idx;
    }

    if ( setting ) {
      var old = v[x];
      v[x] = val;
      if ( typeof obj.emit === 'function' ) {
        obj.emit( "propertyChanged", key, old, val )
      }
    }
    v = v[x];
  } );

  return setting ? obj : v;
}

/**
 * Getter
 * @param {string} name - can be path (a.b.c)
 * @memberof Model#
 */
p.get = function ( name ) {
  return valueAtKey( this.__data, name );
};

/**
 * Property setter
 * @param name can be a path (a.b.c)
 * @param value
 * @returns this
 * @memberof Model#
 */
p.set = function ( name, value ) {
  valueAtKey( this.__data, name, value );
  return this;
};

module.exports = Model;