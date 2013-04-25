var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'users';

/**
 * @lends UserModel
 * @extends BaseModel
 * @constructor
 */
var UserModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, UserModel);
util.inherits( UserModel, BaseModel );
var p = UserModel.prototype;

/**
 * Gets or sets the name
 * @param {String} [value] If provided, set property to value
 * @returns {String | UserModel } Returns property value if getting; 'this' if setting.
 */
p.getName = function(value) {
  if (arguments.length === 0) {
    return this.__data.name
  }
  this.__data.name = value;
  return this;
};

/**
 * Gets or sets the _id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | UserModel } Returns property value if getting; 'this' if setting.
 */
p.getId = function(value) {
  if (arguments.length === 0) {
    return this.__data._id
  }
  this.__data._id = value;
  return this;
};

/**
 * Gets or sets the account collection
 * @param {Account} [value] If provided, set property to value
 * @returns {Account | UserModel } Returns property value if getting; 'this' if setting.
 */
p.getAccount = function(value) {
  if (arguments.length === 0) {
    return this.__data.account
  }
  this.__data.account = value;
  return this;
};

/**
 * Gets or sets the profiles collection
 * @param {Profiles} [value] If provided, set property to value
 * @returns {Profiles | UserModel } Returns property value if getting; 'this' if setting.
 */
p.getProfiles = function(value) {
  if (arguments.length === 0) {
    return this.__data.profiles
  }
  this.__data.profiles = value;
  return this;
};

/**
 * Gets or sets the userBlogs collection
 * @param {UserBlogs} [value] If provided, set property to value
 * @returns {UserBlogs | UserModel } Returns property value if getting; 'this' if setting.
 */
p.getUserBlogs = function(value) {
  if (arguments.length === 0) {
    return this.__data.userBlogs
  }
  this.__data.userBlogs = value;
  return this;
};

/**
 * Gets or sets the userPosts collection
 * @param {UserPosts} [value] If provided, set property to value
 * @returns {UserPosts | UserModel } Returns property value if getting; 'this' if setting.
 */
p.getUserPosts = function(value) {
  if (arguments.length === 0) {
    return this.__data.userPosts
  }
  this.__data.userPosts = value;
  return this;
};
module.exports = UserModel