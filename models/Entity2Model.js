var _ = require( 'underscore' );
var counters = require( './counters' );
var fs = require( 'fs' );

function defaultVal( type ) {
  var f;
  switch ( type ) {
    case 'varchar' :
      f = function () {
        return 'required, uninitialized';
      };
      break;
    case  'integer' :
      f = function () {
        return _.random( 1000, 9999999 )
      };
      break;
    case 'datetime' :
      f = function () {
        return new Date();
      };
      break;
    case 'boolean' :
      f = function () {
        return false;
      };
      break;
    default:
      f = function () {
        return '';
      }
  }
  return f();
}

function E2M( entity, parentEntity, parentPrimaryKeyVal ) {
  var model = {};
  var meta = {};
  var query = {"@fields" : "all"};
  var primaryKeyVal;

  /**
   * get fields
   */
  _.each( entity.fields, function ( field ) {
    var required;
    if ( field.validations ) {
      _.each( field.validations, function ( v ) {
        if ( typeof v.required !== 'undefined' ) {
          required = v.required;
        }
      } );
    }
    var primaryKey = entity.identifying && entity.identifying.indexOf( field.name ) >= 0;
    var groupingField = parentEntity && entity.grouping_fields && entity.grouping_fields.indexOf( field.name ) >= 0;

    if ( primaryKey ) {
      model[field.name] = primaryKeyVal = counters.next( entity.name );
    }
    else if ( groupingField ) {
      model[field.name] = parentPrimaryKeyVal;
    }
//    else if ( required ) {
//      model[field.name] = defaultVal( field.type );
//    }

    meta[field.name] = {
      type : field.type,
      properties : field.properties || null,
      validations : field.validations || null
    };
  } );

  /**
   * get collections
   */
  if ( false ) {
    _.each( entity.collections, function ( collection ) {
      var m = E2M( collection, entity, primaryKeyVal );
      model[collection.name] = [m.model];
      query[collection.name] = m.query;
      meta[collection.name] = collection.grouping_fields;
    } );
  }

  /**
   * get primary key(s)
   */
  _.each( entity.identifying, function ( field ) {
    meta[field].primary = true;
  } );

  return {model : model, query : query, meta : meta};
}

module.exports = E2M;