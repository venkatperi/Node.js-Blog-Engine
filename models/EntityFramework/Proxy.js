var util = require( 'util' );
var prop = require( '../../utils/property' );

Object.prototype.getConstructor = function () {
  return this.prototype ? this.prototype.constructor : this.constructor;
};

Object.prototype.getConstructorName = function () {
  var str = (this.prototype ? this.prototype.constructor : this.constructor).toString();
  var cname = str.match( /function\s(\w*)/ )[1];
  var aliases = ["", "anonymous", "Anonymous"];
  return aliases.indexOf( cname ) > -1 ? "Function" : cname;
};

var cache = [];

function createProxy( item ) {
  var ctorName = item.getConstructorName()
  if ( ctorName === 'Proxy' && typeof item.entity !== 'undefined' ) {
    return item;
  }

  var ctor = item.getConstructor();

  var Proxy;
  if ( cache.indexOf( ctorName ) >= 0 ) {
    Proxy = cache[ctorName];
  }
  else {
    Proxy = function ( x ) {
      ctor.call( this );
      prop( this, "state", 'detached' );
      prop( this, 'entity', typeof x === 'function' ? x() : x );
      prop(this, 'guid', )
    };

    util.inherits( Proxy, ctor );
    cache[ctor] = Proxy;
  }

  return new Proxy( item );
}

module.exports = createProxy;
