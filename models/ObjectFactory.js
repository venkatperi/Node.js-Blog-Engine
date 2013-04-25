var EventEmitter = require( 'events' ).EventEmitter;
var Q = require( 'q' );
var _ = require( 'underscore' );
var util = require( 'util' );
var deepExtend = require( 'deep-extend' );
var Akiban = require( 'akiban-node' );

var Factory = function ( options ) {
  EventEmitter.call( this );

  this.options = options || {};
  this.init = Q.defer();
  this.registry = [];
};

util.inherits( Factory, EventEmitter );
var p = Factory.prototype;

/**
 * Return the DB entity definition with the given nameß
 * @param name
 * @returns {Promise}
 * @instance
 */
p.getDbEntity = function ( name ) {
};

/**
 * Register the given model for the named entity
 * @param name
 * @param ctor
 * @instance
 */
p.registerModel = function ( name, ctor ) {
};

/**
 * Create a new entity of the derived type. Class method
 * @param type - entity type (name)
 * @param [options] constructor options
 * @param [data] - initial model data
 */
p.createObject = function ( type, options, data ) {
};


module.exports = Factory;