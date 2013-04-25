var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'posts';

/**
 * @lends PostModel
 * @extends BaseModel
 * @constructor
 */
var PostModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, PostModel);
util.inherits( PostModel, BaseModel );
var p = PostModel.prototype;

/**
 * Gets or sets the id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | PostModel } Returns property value if getting; 'this' if setting.
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
 * @returns {String | PostModel } Returns property value if getting; 'this' if setting.
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
 * @returns {String | PostModel } Returns property value if getting; 'this' if setting.
 */
p.getSubtitle = function(value) {
  if (arguments.length === 0) {
    return this.__data.subtitle
  }
  this.__data.subtitle = value;
  return this;
};

/**
 * Gets or sets the content
 * @param {String} [value] If provided, set property to value
 * @returns {String | PostModel } Returns property value if getting; 'this' if setting.
 */
p.getContent = function(value) {
  if (arguments.length === 0) {
    return this.__data.content
  }
  this.__data.content = value;
  return this;
};

/**
 * Gets or sets the id_ref
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | PostModel } Returns property value if getting; 'this' if setting.
 */
p.getIdref = function(value) {
  if (arguments.length === 0) {
    return this.__data.id_ref
  }
  this.__data.id_ref = value;
  return this;
};

/**
 * Gets or sets the userId
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | PostModel } Returns property value if getting; 'this' if setting.
 */
p.getUserId = function(value) {
  if (arguments.length === 0) {
    return this.__data.userId
  }
  this.__data.userId = value;
  return this;
};

/**
 * Gets or sets the postTags collection
 * @param {PostTags} [value] If provided, set property to value
 * @returns {PostTags | PostModel } Returns property value if getting; 'this' if setting.
 */
p.getPostTags = function(value) {
  if (arguments.length === 0) {
    return this.__data.postTags
  }
  this.__data.postTags = value;
  return this;
};
module.exports = PostModel