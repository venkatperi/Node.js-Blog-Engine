var _ = require( 'underscore' );
var generateEntity = require( './generateEntity' );
var Akiban = require( 'akiban-node' );
var Q = require( 'q' );
var fs = require( 'fs' );

var connections = {};
var entities;
var entitiesHash;

/**
 * {Promise}
 */
var init;

var generateAll = function ( o ) {
  connections.entity = new Akiban.Entity( o );
  connections.sql = new Akiban.Sql( o );
  connections.model = new Akiban.Model( o );

  Q.all( [ connections.model.get(), connections.model.hash() ] ).spread(
      function ( e, h ) {
        entities = e.entities;
        entitiesHash = h.hash;

        var path = __dirname + '/../' + h.hash;
        if ( !fs.existsSync( path ) ) {
          fs.mkdirSync( path );
        }

        _.each( entities, function ( entity ) {
          var eList = generateEntity.generate( null, entity );
          _.each( eList, function ( e, name ) {
            fs.writeFileSync( path + '/' + name + '.js', e );
          } );
        } );
      } ).done();

};

module.exports = generateAll;