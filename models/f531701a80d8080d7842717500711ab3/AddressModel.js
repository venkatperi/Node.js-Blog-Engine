var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'addresses';

/**
 * @lends AddressModel
 * @extends BaseModel
 * @constructor
 */
var AddressModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, AddressModel);
util.inherits( AddressModel, BaseModel );
var p = AddressModel.prototype;

/**
 * Gets or sets the type
 * @param {String} [value] If provided, set property to value
 * @returns {String | AddressModel } Returns property value if getting; 'this' if setting.
 */
p.getType = function(value) {
  if (arguments.length === 0) {
    return this.__data.type
  }
  this.__data.type = value;
  return this;
};

/**
 * Gets or sets the streetAddress
 * @param {String} [value] If provided, set property to value
 * @returns {String | AddressModel } Returns property value if getting; 'this' if setting.
 */
p.getStreetAddress = function(value) {
  if (arguments.length === 0) {
    return this.__data.streetAddress
  }
  this.__data.streetAddress = value;
  return this;
};

/**
 * Gets or sets the locality
 * @param {String} [value] If provided, set property to value
 * @returns {String | AddressModel } Returns property value if getting; 'this' if setting.
 */
p.getLocality = function(value) {
  if (arguments.length === 0) {
    return this.__data.locality
  }
  this.__data.locality = value;
  return this;
};

/**
 * Gets or sets the region
 * @param {String} [value] If provided, set property to value
 * @returns {String | AddressModel } Returns property value if getting; 'this' if setting.
 */
p.getRegion = function(value) {
  if (arguments.length === 0) {
    return this.__data.region
  }
  this.__data.region = value;
  return this;
};

/**
 * Gets or sets the postalCode
 * @param {String} [value] If provided, set property to value
 * @returns {String | AddressModel } Returns property value if getting; 'this' if setting.
 */
p.getPostalCode = function(value) {
  if (arguments.length === 0) {
    return this.__data.postalCode
  }
  this.__data.postalCode = value;
  return this;
};

/**
 * Gets or sets the country
 * @param {String} [value] If provided, set property to value
 * @returns {String | AddressModel } Returns property value if getting; 'this' if setting.
 */
p.getCountry = function(value) {
  if (arguments.length === 0) {
    return this.__data.country
  }
  this.__data.country = value;
  return this;
};

/**
 * Gets or sets the formatted
 * @param {String} [value] If provided, set property to value
 * @returns {String | AddressModel } Returns property value if getting; 'this' if setting.
 */
p.getFormatted = function(value) {
  if (arguments.length === 0) {
    return this.__data.formatted
  }
  this.__data.formatted = value;
  return this;
};

/**
 * Gets or sets the _profile_id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | AddressModel } Returns property value if getting; 'this' if setting.
 */
p.getProfile_id = function(value) {
  if (arguments.length === 0) {
    return this.__data._profile_id
  }
  this.__data._profile_id = value;
  return this;
};
module.exports = AddressModel