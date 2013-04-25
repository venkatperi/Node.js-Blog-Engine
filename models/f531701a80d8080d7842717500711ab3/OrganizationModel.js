var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'organizations';

/**
 * @lends OrganizationModel
 * @extends BaseModel
 * @constructor
 */
var OrganizationModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, OrganizationModel);
util.inherits( OrganizationModel, BaseModel );
var p = OrganizationModel.prototype;

/**
 * Gets or sets the name
 * @param {String} [value] If provided, set property to value
 * @returns {String | OrganizationModel } Returns property value if getting; 'this' if setting.
 */
p.getName = function(value) {
  if (arguments.length === 0) {
    return this.__data.name
  }
  this.__data.name = value;
  return this;
};

/**
 * Gets or sets the title
 * @param {String} [value] If provided, set property to value
 * @returns {String | OrganizationModel } Returns property value if getting; 'this' if setting.
 */
p.getTitle = function(value) {
  if (arguments.length === 0) {
    return this.__data.title
  }
  this.__data.title = value;
  return this;
};

/**
 * Gets or sets the _profile_id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | OrganizationModel } Returns property value if getting; 'this' if setting.
 */
p.getProfile_id = function(value) {
  if (arguments.length === 0) {
    return this.__data._profile_id
  }
  this.__data._profile_id = value;
  return this;
};
module.exports = OrganizationModel