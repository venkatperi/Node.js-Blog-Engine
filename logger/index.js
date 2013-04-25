var util = require( 'util' );
var format = require( './format' );
var provider;

function _log( level, tag, msg, meta, line ) {
  if ( !provider ) {
    console.log( "no logger!" );
    return;
  }

  if ( typeof msg === 'object' ) {
    line = meta;
    meta = msg;
    msg = "";
  }

  if ( typeof meta === 'number' ) {
    line = meta;
    meta = null;
  }

  provider.log( level, format( tag, msg, line ), meta );
}

module.exports = function ( options ) {
  provider = require( './winston' )( options );

  return {
    /**
     * Log a DEBUG message
     * @param tag
     * @param msg
     * @param meta
     * @param line
     */
    d : function ( tag, msg, meta, line ) {
      _log( 'D', tag, msg, meta, line );
    },

    i : function ( tag, msg, meta, line ) {
      _log( 'I', tag, msg, meta, line );
    },

    v : function ( tag, msg, meta, line ) {
      _log( 'V', tag, msg, meta, line );
    },

    w : function ( tag, msg, meta, line ) {
      _log( 'W', tag, msg, meta, line );
    },

    e : function ( tag, msg, meta, line ) {
      _log( 'E', tag, msg, meta, line );
    }
  }
};
