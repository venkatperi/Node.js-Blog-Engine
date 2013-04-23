var express = require( 'express' );
var http = require( 'http' );
var path = require( 'path' );
var passport = require( 'passport' );
var fs = require( 'fs' );
var util = require( 'util' );
var moment = require( 'moment' );
var GoogleStrategy = require( 'passport-google' ).Strategy;
var Akiban = require( 'akiban-node' );
var _ = require( 'underscore' );
var Models = require( './models' );

fs.mkdir( 'views', function ( e ) {
  if ( !e || (e.code === 'EEXIST') ) {
    fs.readdir( __dirname + '/default_views/', function ( err, files ) {
      files.forEach( function ( file ) {
        fs.exists( 'views/' + file, function ( exists ) {
          if ( !exists ) {
            fs.createReadStream( __dirname + '/default_views/' + file ).pipe( fs.createWriteStream( 'views/' + file ) );
          }
        } );
      } );
    } );
  }
  else {
    console.log( e );
  }
} );

var app = express();

exports.start = function ( options ) {
  if ( !options.adminGoogleEmail ) {
    console.log( 'Warning! You need to add the "adminGoogleEmail" property to access the administration settings.' );
  }

  if ( !process.env.database ) {
    process.env.database = options.database.database;
    process.env.user = options.database.user;
    process.env.password = options.database.password;
    process.env.host = options.database.host;
    process.env.dbPort = options.database.dbPort;
  }
  Models.Factory.init( options.database );

//  console.log( util.inspect( Models.Factory.create( 'users' ), {depth : 10} ) );
  /*
   Models.Factory.find( 'users', Models.UserModel.queries.findByEmail( {email : 'mhashimoto@plaxo.com'} ) ).then(
   function ( items ) {
   _.each( items, function ( item ) {
   console.log( util.inspect( item.__data, {depth : 10} ) );
   console.log( item.get( 'name' ) );
   console.log( item.get( 'account[0].status' ) );
   var emails = item.get( 'profile.emails' );
   console.log( emails );

   return;
   var email = _.find( emails, function ( e ) {
   return e.value === 'ab@cde.com';
   } );

   email.primary = false;
   //emails.push( {value : 'ab@cde.com', type : 'junk'} );
   Models.Factory.update( item ).then(
   function ( x ) {
   console.log( x );
   } ).done();
   } );
   } ).done();
   */

  var routes = require( './routes/index.js' );
  routes.set( options );

  app.locals.title = options.title || 'No Title Set!';
  app.locals.menu = options.menu || [];
  app.locals.bootstrapPath = options.bootstrapPath || '/stylesheets/bootstrap.min.css';

  passport.serializeUser( function ( user, done ) {
    done( null, user );
  } );

  passport.deserializeUser( function ( obj, done ) {
    done( null, obj );
  } );

  var goHome = function ( req, res ) {
    res.redirect( '/' );
  };

  var logout = function ( req, res ) {
    req.logout();
    res.redirect( '/' );
  };

  app.configure( function () {
    app.set( 'port', process.env.PORT || options.localPort || 8081 );
    app.set( 'views', './views' );
    app.set( 'view engine', 'jade' );
    app.use( express.favicon() );
    app.use( express.logger( 'dev' ) );
    app.use( express.bodyParser() );
    app.use( express.methodOverride() );
    app.use( express.cookieParser( options.cookieSecret || Math.random().toString( 36 ).substring( 7 ) ) );
    app.use( express.session() );
    app.use( passport.initialize() );
    app.use( passport.session() );
    app.use( function ( req, res, next ) {
      res.locals.user = req.user;
      next();
    } );
    app.use( require( 'stylus' ).middleware( __dirname + '/resources' ) );
    app.use( express.static( path.join( __dirname, 'resources' ) ) );
    app.use( express.static( __dirname + '/../../public' ) );
    app.use( app.router );
  } );

  app.configure( 'development', function () {
    app.use( express.errorHandler() );
  } );

  var callbackURL = !options.useLiveDomain ? 'http://localhost:' + app.get( 'port' ) + '/auth/google/return' :
      options.liveDomain + '/auth/google/return';
  var realm = !options.useLiveDomain ? 'http://localhost:' + app.get( 'port' ) : options.liveDomain;

  passport.use( new GoogleStrategy( { returnURL : callbackURL, realm : realm }, require( './routes/login' ) ) );

  var auth = passport.authenticate( 'google', { failureRedirect : '/' } );

  app.get( '/', routes.index );

  app.get( '/login/google', auth, goHome );
  app.get( '/auth/google/return', passport.authenticate( 'google', { successRedirect : '/', failureRedirect : '/' } ) );
  app.get( '/logout', logout );

  app.get( '/post/:title', routes.post );
  app.get( '/newPost', ensureLogin, routes.newPost );
  app.get( '/createPost', routes.createPost );
  app.get( '/post/:title/:mode', ensureLogin, routes.editPost );
  app.get( '/updatePost', ensureLogin, routes.updatePost );

  http.createServer( app ).listen( app.get( 'port' ), function () {
    console.log( 'Blog started on port ' + app.get( 'port' ) + '.' );
  } );

  function ensureLogin( req, res, next ) {
    if ( req.user ) {
      next();
    }
    else {
      res.redirect( '/' );
    }
  }

  if ( options.pages ) {
    options.pages.forEach( function ( page ) {
      app.get( page.path, page.callback );
    } );
  }

}
;
