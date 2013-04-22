var _ = require( 'underscore' );

function E2M( entity ) {
  var model = {};
  var meta = {};

  /**
   * get fields
   */
  _.each( entity.fields, function ( field ) {
    model[field.name] = null;
    meta[field.name] = {
      type : field.type,
      properties : field.properties || null,
      validations : field.validations || null
    };
  } );

  /**
   * get collections
   */
  _.each( entity.collections, function ( collection ) {
    model[collection.name] = [E2M( collection )];
    meta[collection.name] = collection.grouping_fields;
  } );

  /**
   * get primary key(s)
   */
  _.each( entity.identifying, function ( field ) {
    meta[field].primary = true;
  } );

  //model["__meta"] = meta;
  return model;
}

module.exports = E2M;