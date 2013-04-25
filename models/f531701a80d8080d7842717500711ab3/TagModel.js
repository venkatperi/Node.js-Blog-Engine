var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'tags';

/**
 * @lends TagModel
 * @extends BaseModel
 * @constructor
 */
var TagModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, TagModel);
util.inherits( TagModel, BaseModel );
var p = TagModel.prototype;

/**
 * Gets or sets the value
 * @param {String} [value] If provided, set property to value
 * @returns {String | TagModel } Returns property value if getting; 'this' if setting.
 */
p.getValue = function(value) {
  if (arguments.length === 0) {
    return this.__data.value
  }
  this.__data.value = value;
  return this;
};

/**
 * Gets or sets the _profile_id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | TagModel } Returns property value if getting; 'this' if setting.
 */
p.getProfile_id = function(value) {
  if (arguments.length === 0) {
    return this.__data._profile_id
  }
  this.__data._profile_id = value;
  return this;
};
module.exports = TagModel