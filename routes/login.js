//var Db = require( '../db' );
var Q = require( 'q' );
var _ = require( 'underscore' );
var Sequelize = require( 'sequelize' );
var pCall = require( '../pcall' );
var Akiban = require( 'akiban-node' );

function createUser( user ) {
}

function _findEmail( idx, req, res ) {
  console.log( idx );
  Db.UserEmail.find( { where : {value : req.user.emails[idx].value} } )
      .success( function ( email ) {
        if ( !email ) {
          console.log( 'User does not exist. Creating...' );

          var emails = [];
          var name;
          var profile;
          var user;

          var QC = Sequelize.Utils.QueryChainer;
          var qc = new Sequelize.Utils.QueryChainer();

          _.each( req.user.emails,function ( x ) {
            qc.add( Db.UserEmail.create( x ) );
          } ).runSerially()
              .success( function ( e ) {
                emails = e;

                new QC()
                    .add( Db.UserName.create( req.user.name ) )
                    .add( Db.UserProfile.create( {displayName : req.user.displayName, id : req.user.identifier} ) )
                    .add( Db.User.create( {name : req.user.displayName } ) )
                    .runSerially()
                    .success( function ( n, p, u ) {
                      name = n;
                      profile = p;
                      user = u;

                      new QC()
                          .add( profile.setName( n ) )
                          .add( profile.emails( emails ) )
                          .add( user.addProfile( p ) )
                          .runSerially()
                          .success( function () {

                          } );
                    } );
              } );

          /**req.user.emails.reduce(function ( sofar, e ) {
            return sofar.then( function () {
              return pCall( Db.UserEmail.create, Db.UserEmail, e ).then( function ( ee ) {
                emails.push( ee );
                return ee;
              } );
            } );
          }, Q() ).then(function () {
                return pCall( Db.UserName.create, Db.UserName, req.user.name );
              } ).then(function ( n ) {
                name = n;
                return pCall( Db.UserProfile.create, Db.UserProfile,
                    {displayName : req.user.displayName, id : req.user.identifier} );
              } ).then(function ( p ) {
                profile = p;
                console.log( p );
                return pCall( p.setName, p, name );
              } ).then(function () {
                return pCall( profile.emails, profile, emails );
              } ).then(function () {
                return pCall( Db.User.create, Db.User, {name : req.user.displayName } );
              } ).then(function ( u ) {
                user = u;
                return pCall( u.addUserProfile, u, profile );
              } ).then( function () {
                console.log( 'created user!' );
                req.user = user;
                res.redirect( '/' );
              } )  */

        }
        else {
          email.getUserProfile().success(function ( profile ) {
            profile.getUser().success(function ( user ) {
              console.log( 'found!' );
              req.user = user;
              res.redirect( '/' );
            } ).failure( function () {
                  res.redirect( '/logout' );
                } );
          } ).failure( function () {
                res.redirect( '/logout' );
              } );
        }
      } )
      .failure( function ( err ) {
        Q.delay( 0 ).then( function () {
          if ( idx < req.user.emails.length - 1 ) {
            findEmail( idx + 1, req, res );
          }
          else {
            console.log( 'not found: ' );
            res.redirect( '/logout' );
          }
        } );
      } );
}

function findEmail( idx, req, res ) {

}

module.exports = function ( req, res, next ) {
  if ( req.user ) {
    findEmail( 0, req, res );
  }
  else {
    res.redirect( '/logout' );
  }
};