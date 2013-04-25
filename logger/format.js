var moment = require( 'moment' );

module.exports = function ( tag, msg, line ) {
  var t = [tag];

  t.push( '(' );

  if ( typeof line === 'number' ) {
    var s = line.toString();
    if ( s.length < 5 ) {
      t.push( new Array( 5 - s.length + 1 ).join( ' ' ) );
    }
    t.push( s );
  }
  else {
    t.push( '     ' );
  }

  t.push( ')' );

  if ( moment ) {
    t.push( ' ' );
    t.push( moment().format( "MM/DD/YY-HH:mm:ss" ) );
  }

  t.push( ': ' );
  t.push( msg );
  return t.join( '' );
};