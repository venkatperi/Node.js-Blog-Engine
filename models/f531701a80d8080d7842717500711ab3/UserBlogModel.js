var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'userBlogs';

/**
 * @lends UserBlogModel
 * @extends BaseModel
 * @constructor
 */
var UserBlogModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, UserBlogModel);
util.inherits( UserBlogModel, BaseModel );
var p = UserBlogModel.prototype;

/**
 * Gets or sets the id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | UserBlogModel } Returns property value if getting; 'this' if setting.
 */
p.getId = function(value) {
  if (arguments.length === 0) {
    return this.__data.id
  }
  this.__data.id = value;
  return this;
};

/**
 * Gets or sets the blogId
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | UserBlogModel } Returns property value if getting; 'this' if setting.
 */
p.getBlogId = function(value) {
  if (arguments.length === 0) {
    return this.__data.blogId
  }
  this.__data.blogId = value;
  return this;
};

/**
 * Gets or sets the _id_ref
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | UserBlogModel } Returns property value if getting; 'this' if setting.
 */
p.getId_ref = function(value) {
  if (arguments.length === 0) {
    return this.__data._id_ref
  }
  this.__data._id_ref = value;
  return this;
};
module.exports = UserBlogModel