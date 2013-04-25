var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'emails';

/**
 * @lends EmailModel
 * @extends BaseModel
 * @constructor
 */
var EmailModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, EmailModel);
util.inherits( EmailModel, BaseModel );
var p = EmailModel.prototype;

/**
 * Gets or sets the value
 * @param {String} [value] If provided, set property to value
 * @returns {String | EmailModel } Returns property value if getting; 'this' if setting.
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
 * @returns {String | EmailModel } Returns property value if getting; 'this' if setting.
 */
p.getType = function(value) {
  if (arguments.length === 0) {
    return this.__data.type
  }
  this.__data.type = value;
  return this;
};

/**
 * Gets or sets the primary
 * @param {String} [value] If provided, set property to value
 * @returns {String | EmailModel } Returns property value if getting; 'this' if setting.
 */
p.getPrimary = function(value) {
  if (arguments.length === 0) {
    return this.__data.primary
  }
  this.__data.primary = value;
  return this;
};

/**
 * Gets or sets the _profile_id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | EmailModel } Returns property value if getting; 'this' if setting.
 */
p.getProfile_id = function(value) {
  if (arguments.length === 0) {
    return this.__data._profile_id
  }
  this.__data._profile_id = value;
  return this;
};
module.exports = EmailModel