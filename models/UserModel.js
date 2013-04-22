var BaseModel = require( './BaseModel' );
var util = require( 'util' );

/**
 * @lends UserModel
 * @extends BaseModel
 * @param options
 * @constructor
 */
var UserModel = function ( options ) {
  BaseModel.call( this, options );
  this.__entityName = "users";
};

util.inherits( UserModel, BaseModel );
var p = UserModel.prototype;

module.exports = UserModel;