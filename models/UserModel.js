var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );

var modelName = "users";

/**
 * @lends UserModel
 * @extends BaseModel
 * @param options
 * @constructor
 */
var UserModel = function ( options ) {
  BaseModel.call( this, options, modelName );
};

require( './factory' ).register( modelName, UserModel );
util.inherits( UserModel, BaseModel );
var p = UserModel.prototype;

/**
 * Create a user with the provided profile information
 * @param {object} userProfile - the user profile to use
 * @returns {UserModel}
 * @method
 */
UserModel.createUserWithProfile = function ( userProfile ) {
  var user = Factory.create( modelName );
  user.set( "name", userProfile.displayName );

  var profiles = user.get( "profiles" );
  if ( !profiles ) {
    user.set( 'profiles', [userProfile] );
  }
  else {
    profiles.push( userProfile );
  }

  return user;
};

/**
 * If a user entity exists with the provided email address, return it
 * @param {string} email - email address to search for
 * @returns {UserModel}
 * @method
 */
UserModel.findUserByEmail = function ( email ) {
    return Factory.find( modelName, queries.findByEmail( {email : email} ) );
};

/**
 * Register this user
 * @instance
 * @returns {Promise} which resolves when the user is registered or on error
 */
p.register = function () {
  return Models.Factory.update( this );
};

/**
 * Return list of blogs for this user
 * @returns {Promise} which resolves with the list of this user's blog or on error
 */
p.findUserBlogs = function () {

};

/**
 * List of custom queries
 * @private
 */
queries = {
  'findByEmail' : _.template( "select ** from `users` u where `u`.`_id` in (select `users`.`_id` from `users`, " +
                              "`profiles` as p1 where `users`.`_id`=`p1`.`_users_id` and `p1`.`_id` in " +
                              "(select `profiles`.`_id` from `profiles`, `emails` where " +
                              "`emails`.`_profile_id`=`profiles`.`_id` and `emails`.`value`='<%= email %>'))" )
};

module.exports = UserModel;