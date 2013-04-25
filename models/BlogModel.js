var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'blogs';

/**
 * @lends BlogModel
 * @extends BaseModel
 * @constructor
 */
var BlogModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, BlogModel);
util.inherits( BlogModel, BaseModel );
var p = BlogModel.prototype;

/**
 * Gets or sets the id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | BlogModel } Returns property value if getting; 'this' if setting.
 */
p.getId = function(value) {
  if (arguments.length === 0) {
    return this.__data.id
  }
  this.__data.id = value;
  return this;
};

/**
 * Gets or sets the title
 * @param {String} [value] If provided, set property to value
 * @returns {String | BlogModel } Returns property value if getting; 'this' if setting.
 */
p.getTitle = function(value) {
  if (arguments.length === 0) {
    return this.__data.title
  }
  this.__data.title = value;
  return this;
};

/**
 * Gets or sets the subtitle
 * @param {String} [value] If provided, set property to value
 * @returns {String | BlogModel } Returns property value if getting; 'this' if setting.
 */
p.getSubtitle = function(value) {
  if (arguments.length === 0) {
    return this.__data.subtitle
  }
  this.__data.subtitle = value;
  return this;
};

/**
 * Gets or sets the description
 * @param {String} [value] If provided, set property to value
 * @returns {String | BlogModel } Returns property value if getting; 'this' if setting.
 */
p.getDescription = function(value) {
  if (arguments.length === 0) {
    return this.__data.description
  }
  this.__data.description = value;
  return this;
};

/**
 * Gets or sets the posts collection
 * @param {Posts} [value] If provided, set property to value
 * @returns {Posts | BlogModel } Returns property value if getting; 'this' if setting.
 */
p.getPosts = function(value) {
  if (arguments.length === 0) {
    return this.__data.posts
  }
  this.__data.posts = value;
  return this;
};
module.exports = BlogModel
