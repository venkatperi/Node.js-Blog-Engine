var Winston = require( 'winston' );
var defaults = require( './defaults' );
var _ = require( 'underscore' );

var transports = [];

var objs = {
  'console' : Winston.transports.Console,
  'file' : Winston.transports.File
};

module.exports = function ( options ) {
  options = options || {};
  options = _.extend( defaults, options || {} );
  var tx = defaults.transports;
  for ( var t in tx ) {
    transports.push( new objs[t]( tx[t] ) );
  }
  return new (Winston.Logger)( {
    transports : transports,
    levels : options.levels,
    exitOnError : options.exitOnError
  } );
};
