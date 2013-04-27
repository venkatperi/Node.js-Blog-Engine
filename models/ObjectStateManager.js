var EventEmitter = require( 'events' ).EventEmitter;
var util = require( 'util' );
var Q = require( 'q' );

/**
 * Maintains object state and identity management for entity type instances and relationship instances.
 * @param context
 * @constructor
 * @emits
 */
var ObjectStateManager = function ( context ) {
  EventEmitter.call( this );
  this.context = context;
};

util.inherits( ObjectStateManager, EventEmitter );
var p = ObjectStateManager.prototype;

/**
 *
 * @param object
 * @param state
 */
p.changeObjectState = function ( object, state ) {};

/**
 *
 * @param src
 * @param dest
 * @param relationship
 * @param state
 */
p.changeRelationshipState = function ( src, dest, relationship, state ) {};

/**
 *
 * @param item
 */
p.getObjectStateEntry = function ( item ) {};

/**
 *
 * @param object
 */
p.getRelationshipManager = function(object){};



