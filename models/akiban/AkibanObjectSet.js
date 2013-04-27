var ObjectSet = require( 'events' ).ObjectSet;
var util = require( 'util' );
var Q = require( 'q' );

/**
 * Represents a typed entity set that is used to perform create, read, update, and delete operations.
 * @lends {AkibanObjectSet}
 * @extends {ObjectSet}
 * @param context
 * @param type
 * @param name
 * @constructor
 */
var AkibanObjectSet = function ( context, type, name ) {
  ObjectSet.call( this, arguments );
};

util.inherits( AkibanObjectSet, ObjectSet );
var p = AkibanObjectSet.prototype;

module.exports = AkibanObjectSet;




