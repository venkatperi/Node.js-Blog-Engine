var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'name';

/**
 * @lends NameModel
 * @extends BaseModel
 * @constructor
 */
var NameModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, NameModel);
util.inherits( NameModel, BaseModel );
var p = NameModel.prototype;

/**
 * Gets or sets the familyName
 * @param {String} [value] If provided, set property to value
 * @returns {String | NameModel } Returns property value if getting; 'this' if setting.
 */
p.getFamilyName = function(value) {
  if (arguments.length === 0) {
    return this.__data.familyName
  }
  this.__data.familyName = value;
  return this;
};

/**
 * Gets or sets the middleName
 * @param {String} [value] If provided, set property to value
 * @returns {String | NameModel } Returns property value if getting; 'this' if setting.
 */
p.getMiddleName = function(value) {
  if (arguments.length === 0) {
    return this.__data.middleName
  }
  this.__data.middleName = value;
  return this;
};

/**
 * Gets or sets the givenName
 * @param {String} [value] If provided, set property to value
 * @returns {String | NameModel } Returns property value if getting; 'this' if setting.
 */
p.getGivenName = function(value) {
  if (arguments.length === 0) {
    return this.__data.givenName
  }
  this.__data.givenName = value;
  return this;
};

/**
 * Gets or sets the _profile_id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | NameModel } Returns property value if getting; 'this' if setting.
 */
p.getProfile_id = function(value) {
  if (arguments.length === 0) {
    return this.__data._profile_id
  }
  this.__data._profile_id = value;
  return this;
};
module.exports = NameModel