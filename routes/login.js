//var Db = require( '../db' );
var Q = require( 'q' );
var _ = require( 'underscore' );
var Models = require( '../models' );
var util = require( 'util' );

/**
 * Login user
 * @param {string} identifier - openID info
 * @param {object} profile - profile info returned by open provider
 * @param {function} done - callback function required by PassportJS
 */
var login = function ( identifier, profile, done ) {
  profile.id = identifier;
  var email = profile.emails[0].value;

  Models.UserModel.findUserByEmail( email ).then(
      function ( items ) {
        if ( items.length === 1 ) {
          done( null, items[0] );
          return;
        }

        if ( items.length > 1 ) {
          done( null, false, {message : "Email is not unique! Can't log in"} );
          return;
        }

        profile.provider = profile.provider || 'google';
        var user = Models.UserModel.createUserWithProfile( profile );

        Models.UserModel.register( user ).then(
            function () {
              //user is registered. Now attempt to login
              login( identifier, profile, done );  //danger! recursive call!
            },
            function ( err ) {
              console.log( err );
              done( err );
            }
        ).done();
      } );
};

module.exports = login;