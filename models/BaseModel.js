var EventEmitter = require( 'events' ).EventEmitter;
var util = require( 'util' );
var _ = require( 'underscore' );
var entities = require( './entities' );
var E2M = require( './Entity2Model' );

/**
 * Base class for models
 * @lends BaseModel
 * @param {object} options
 * @param {Entity} options.connection
 * @property {string} __entityName
 * @constructor
 */
var BaseModel = function ( options ) {
  EventEmitter.call( this );
  this.__data = {};
  this.__options = options || {};
};

util.inherits( BaseModel, EventEmitter );
var p = BaseModel.prototype;

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

    if ( _.isArray( v[xx[0]] ) && i < k.length - 1) {
      if ( xx.length > 1 ) {
        idx = parseInt( xx[1].split( ']' )[0] );
      }
      v = v[xx[0]];
      x = idx;
    }

    if ( typeof v[x] === 'undefined' ) {
      if ( !setting ) {
        throw new Error( 'no property found at ' + kk.join( '.' ) );
      }
      v[x] = {};
    }
    v = v[x];
  } );
  return setting ? obj : v;
}

/**
 * Getter
 * @param {string} name - can be path (a.b.c)
 */
p.get = function ( name ) {
  return valueAtKey( this.__data, name );
};

/**
 * Property setter
 * @param name can be a path (a.b.c)
 * @param value
 * @returns this
 */
p.set = function ( name, value ) {
  valueAtKey( this.__data, name, value );
  return this;
};

/**
 * Create a new entity of the derived type
 * @param [options]
 */
p.create = function ( options ) {
  var self = this;
  var model;

  _.each( entities, function ( entity ) {
    if ( entity.name === self.__entityName ) {
      model = E2M( entity );
    }
  } );
};

/**
 * Read entity with given id
 * @param {string} id - the entity's ID
 */
p.read = function ( id ) {
  var self = this;
  return this.__options.connection.get( this.__entityName, id ).then(
      function ( item ) {
        _.extend( self.__data, item[0] );
        return self;
      },
      function ( err ) {
        console.log( err );
        throw err;
      } );
};

/**
 * Update value in db
 * @returns {Promise}
 */
p.update = function () {
  var self = this;
  return this.__options.connection.update( this );
};

module.exports = BaseModel;