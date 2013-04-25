var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'urls';

/**
 * @lends UrlModel
 * @extends BaseModel
 * @constructor
 */
var UrlModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, UrlModel);
util.inherits( UrlModel, BaseModel );
var p = UrlModel.prototype;

/**
 * Gets or sets the value
 * @param {String} [value] If provided, set property to value
 * @returns {String | UrlModel } Returns property value if getting; 'this' if setting.
 */
p.getValue = function(value) {
  if (arguments.length === 0) {
    return this.__data.value
  }
  this.__data.value = value;
  return this;
};

/**
 * Gets or sets the type
 * @param {String} [value] If provided, set property to value
 * @returns {String | UrlModel } Returns property value if getting; 'this' if setting.
 */
p.getType = function(value) {
  if (arguments.length === 0) {
    return this.__data.type
  }
  this.__data.type = value;
  return this;
};

/**
 * Gets or sets the _profile_id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | UrlModel } Returns property value if getting; 'this' if setting.
 */
p.getProfile_id = function(value) {
  if (arguments.length === 0) {
    return this.__data._profile_id
  }
  this.__data._profile_id = value;
  return this;
};
module.exports = UrlModel