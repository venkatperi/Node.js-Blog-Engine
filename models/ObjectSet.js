var EventEmitter = require( 'events' ).EventEmitter;
var util = require( 'util' );
var Q = require( 'q' );

/**
 * Represents a typed entity set that is used to perform create, read, update, and delete operations.
 * @lends {ObjectSet}
 * @extends {EventEmitter}
 * @param options
 * @constructor
 * @property commandText
 * @property name
 * @property parameters
 * @property context
 */
var ObjectSet = function ( context, type, name ) {
  EventEmitter.call( this );
  this.options = options || {};
  this.context = context;
  this.name = name;
  this.type = type;

};

util.inherits( ObjectSet, EventEmitter );
var p = ObjectSet.prototype;

p.addObject = function ( object ) {
};

p.attach = function ( object ) {
};

p.createObject = function ( object ) {
};

p.deleteObject = function(object){
};

p.distinct = function(){};

p.except = function(other){}

p.execute = function(mergeOption){};

p.execute = function(){};
p.include = function(){};
p.intersect= function(){};
p.orderBy= function(){};
p.ofType= function(){};
p.select= function(){};
p.skip= function(){};
p.top= function(){};
p.union= function(){};
p.unionAll= function(){};
p.where= function(){};




module.exports = ObjectSet;




