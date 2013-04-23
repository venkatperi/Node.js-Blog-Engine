//var Db = require( '../db' );
var Q = require( 'q' );
var _ = require( 'underscore' );
var Models = require( '../models' );
var util = require( 'util' );

/**
 *
 * @param {object} userProfile
 * @param {string} provider
 */
function registerUser( userProfile, provider ) {
  var user = Models.Factory.create( 'users' );
  user.set( "name", userProfile.displayName );
  userProfile.provider = provider;

  var profiles = user.get( "profiles" );
  if ( !profiles ) {
    user.set( 'profiles', [userProfile] );
  }
  else {
    profiles.push( userProfile );
  }

  return Models.Factory.update( user );
}

function findUserByEmail( email ) {
  return Models.Factory.find( 'users', Models.UserModel.queries.findByEmail( {email : email} ) );
}

var login = function ( identifier, profile, done ) {
  profile.id = identifier;
  console.log( "Verifying user: " + util.inspect( profile ) );

  var email = profile.emails[0].value;

  findUserByEmail( email ).then(
      function ( items ) {
        if ( items.length === 1 ) {
          console.log( "user found" );
          done( null, items[0] );
          return;
        }

        if ( items.length > 1 ) {
          console.log( "Email is not unique! Can't log in" );
          done( null, false, {message : "Email is not unique! Can't log in"} );
          return;
        }

//        if ( req.recursive ) {
//          console.log( "previous attempt to register user failed! aborting" );
//          res.redirect( '/logout' );
//          return;
//        }

        console.log( "user not found. Registering new user." );
        var provider = "google";
//        if ( req.url.indexOf( 'google' ) >= 0 ) {
//          provider = "google";
//        }

        registerUser( profile, provider ).then(
            function () {
              console.log( "user registered. Attempting login..." );
//              req.recursive = true;
              login( identifier, profile, done );  //recursive call!
            },
            function ( err ) {
              console.log( err );
              done( err );
            }
        ).done();
      } );
};

module.exports = login;