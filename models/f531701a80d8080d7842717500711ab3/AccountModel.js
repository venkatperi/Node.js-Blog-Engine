var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'accounts';

/**
 * @lends AccountModel
 * @extends BaseModel
 * @constructor
 */
var AccountModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, AccountModel);
util.inherits( AccountModel, BaseModel );
var p = AccountModel.prototype;

/**
 * Gets or sets the domain
 * @param {String} [value] If provided, set property to value
 * @returns {String | AccountModel } Returns property value if getting; 'this' if setting.
 */
p.getDomain = function(value) {
  if (arguments.length === 0) {
    return this.__data.domain
  }
  this.__data.domain = value;
  return this;
};

/**
 * Gets or sets the userid
 * @param {String} [value] If provided, set property to value
 * @returns {String | AccountModel } Returns property value if getting; 'this' if setting.
 */
p.getUserid = function(value) {
  if (arguments.length === 0) {
    return this.__data.userid
  }
  this.__data.userid = value;
  return this;
};

/**
 * Gets or sets the _profile_id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | AccountModel } Returns property value if getting; 'this' if setting.
 */
p.getProfile_id = function(value) {
  if (arguments.length === 0) {
    return this.__data._profile_id
  }
  this.__data._profile_id = value;
  return this;
};
module.exports = AccountModel