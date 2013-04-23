var nconf = require( 'nconf' );
var _ = require( 'underscore' );

nconf.file( {file : './counters.conf'} );

module.exports = {
  next : function ( name ) {
    var c = nconf.get( name );
    if ( typeof c === 'undefined' ) {
      c = _.random( 1000, 99999999 );
    }
    else if ( typeof c === 'string' ) {
      c = parseInt( c );
    }

    nconf.set( name, c + 1 );
    nconf.save();
    return c;
  }
};

