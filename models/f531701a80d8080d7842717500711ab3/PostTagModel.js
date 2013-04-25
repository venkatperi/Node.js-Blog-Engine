var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'postTags';

/**
 * @lends PostTagModel
 * @extends BaseModel
 * @constructor
 */
var PostTagModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, PostTagModel);
util.inherits( PostTagModel, BaseModel );
var p = PostTagModel.prototype;

/**
 * Gets or sets the id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | PostTagModel } Returns property value if getting; 'this' if setting.
 */
p.getId = function(value) {
  if (arguments.length === 0) {
    return this.__data.id
  }
  this.__data.id = value;
  return this;
};

/**
 * Gets or sets the tag
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | PostTagModel } Returns property value if getting; 'this' if setting.
 */
p.getTag = function(value) {
  if (arguments.length === 0) {
    return this.__data.tag
  }
  this.__data.tag = value;
  return this;
};

/**
 * Gets or sets the id_ref
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | PostTagModel } Returns property value if getting; 'this' if setting.
 */
p.getIdref = function(value) {
  if (arguments.length === 0) {
    return this.__data.id_ref
  }
  this.__data.id_ref = value;
  return this;
};
module.exports = PostTagModel