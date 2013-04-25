var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );
var Factory = require( './factory' );
var entityName = 'profiles';

/**
 * @lends ProfileModel
 * @extends BaseModel
 * @constructor
 */
var ProfileModel = function ( options ) {
  BaseModel.call( this, options, entityName );
};

require( './factory' ).register( entityName, ProfileModel);
util.inherits( ProfileModel, BaseModel );
var p = ProfileModel.prototype;

/**
 * Gets or sets the id
 * @param {String} [value] If provided, set property to value
 * @returns {String | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getId = function(value) {
  if (arguments.length === 0) {
    return this.__data.id
  }
  this.__data.id = value;
  return this;
};

/**
 * Gets or sets the provider
 * @param {String} [value] If provided, set property to value
 * @returns {String | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getProvider = function(value) {
  if (arguments.length === 0) {
    return this.__data.provider
  }
  this.__data.provider = value;
  return this;
};

/**
 * Gets or sets the displayName
 * @param {String} [value] If provided, set property to value
 * @returns {String | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getDisplayName = function(value) {
  if (arguments.length === 0) {
    return this.__data.displayName
  }
  this.__data.displayName = value;
  return this;
};

/**
 * Gets or sets the birthday
 * @param {Date} [value] If provided, set property to value
 * @returns {Date | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getBirthday = function(value) {
  if (arguments.length === 0) {
    return this.__data.birthday
  }
  this.__data.birthday = value;
  return this;
};

/**
 * Gets or sets the gender
 * @param {String} [value] If provided, set property to value
 * @returns {String | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getGender = function(value) {
  if (arguments.length === 0) {
    return this.__data.gender
  }
  this.__data.gender = value;
  return this;
};

/**
 * Gets or sets the _id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getId = function(value) {
  if (arguments.length === 0) {
    return this.__data._id
  }
  this.__data._id = value;
  return this;
};

/**
 * Gets or sets the _users_id
 * @param {Number} [value] If provided, set property to value
 * @returns {Number | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getUsers_id = function(value) {
  if (arguments.length === 0) {
    return this.__data._users_id
  }
  this.__data._users_id = value;
  return this;
};

/**
 * Gets or sets the identifier
 * @param {String} [value] If provided, set property to value
 * @returns {String | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getIdentifier = function(value) {
  if (arguments.length === 0) {
    return this.__data.identifier
  }
  this.__data.identifier = value;
  return this;
};

/**
 * Gets or sets the accounts collection
 * @param {Accounts} [value] If provided, set property to value
 * @returns {Accounts | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getAccounts = function(value) {
  if (arguments.length === 0) {
    return this.__data.accounts
  }
  this.__data.accounts = value;
  return this;
};

/**
 * Gets or sets the addresses collection
 * @param {Addresses} [value] If provided, set property to value
 * @returns {Addresses | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getAddresses = function(value) {
  if (arguments.length === 0) {
    return this.__data.addresses
  }
  this.__data.addresses = value;
  return this;
};

/**
 * Gets or sets the emails collection
 * @param {Emails} [value] If provided, set property to value
 * @returns {Emails | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getEmails = function(value) {
  if (arguments.length === 0) {
    return this.__data.emails
  }
  this.__data.emails = value;
  return this;
};

/**
 * Gets or sets the ims collection
 * @param {Ims} [value] If provided, set property to value
 * @returns {Ims | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getIms = function(value) {
  if (arguments.length === 0) {
    return this.__data.ims
  }
  this.__data.ims = value;
  return this;
};

/**
 * Gets or sets the name collection
 * @param {Name} [value] If provided, set property to value
 * @returns {Name | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getName = function(value) {
  if (arguments.length === 0) {
    return this.__data.name
  }
  this.__data.name = value;
  return this;
};

/**
 * Gets or sets the organizations collection
 * @param {Organizations} [value] If provided, set property to value
 * @returns {Organizations | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getOrganizations = function(value) {
  if (arguments.length === 0) {
    return this.__data.organizations
  }
  this.__data.organizations = value;
  return this;
};

/**
 * Gets or sets the phoneNumbers collection
 * @param {PhoneNumbers} [value] If provided, set property to value
 * @returns {PhoneNumbers | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getPhoneNumbers = function(value) {
  if (arguments.length === 0) {
    return this.__data.phoneNumbers
  }
  this.__data.phoneNumbers = value;
  return this;
};

/**
 * Gets or sets the photos collection
 * @param {Photos} [value] If provided, set property to value
 * @returns {Photos | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getPhotos = function(value) {
  if (arguments.length === 0) {
    return this.__data.photos
  }
  this.__data.photos = value;
  return this;
};

/**
 * Gets or sets the tags collection
 * @param {Tags} [value] If provided, set property to value
 * @returns {Tags | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getTags = function(value) {
  if (arguments.length === 0) {
    return this.__data.tags
  }
  this.__data.tags = value;
  return this;
};

/**
 * Gets or sets the urls collection
 * @param {Urls} [value] If provided, set property to value
 * @returns {Urls | ProfileModel } Returns property value if getting; 'this' if setting.
 */
p.getUrls = function(value) {
  if (arguments.length === 0) {
    return this.__data.urls
  }
  this.__data.urls = value;
  return this;
};
module.exports = ProfileModel