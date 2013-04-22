module.exports = function ( f, context ) {
  var d = require( 'q' ).defer();

  var args = Array.prototype.slice.call( arguments, 2 );
  f.apply( context, args )
      .success( function () {
        d.resolve( arguments );
      } )
      .failure( function () {
        d.reject( arguments );
      } );
  return d.promise;
};
