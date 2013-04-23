var BaseModel = require( './Model' );
var util = require( 'util' );
var _ = require( 'underscore' );

/**
 * @lends UserModel
 * @extends BaseModel
 * @param options
 * @constructor
 */
var UserModel = function ( options ) {
  BaseModel.call( this, options, "users" );
};

require( './factory' ).register( 'users', UserModel );

util.inherits( UserModel, BaseModel );
var p = UserModel.prototype;

UserModel.queries = {
  'findByEmail' : _.template( "select ** from `users` u where `u`.`_id` in (select `users`.`_id` from `users`, " +
      "`profiles` as p1 where `users`.`_id`=`p1`.`_users_id` and `p1`.`_id` in " +
      "(select `profiles`.`_id` from `profiles`, `emails` where " +
      "`emails`.`_profile_id`=`profiles`.`_id` and `emails`.`value`='<%= email %>'))" )
};

module.exports = UserModel;