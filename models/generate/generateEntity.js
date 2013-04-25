var _ = require( 'underscore' );
var counters = require( './../counters' );
var fs = require( 'fs' );
var en = require( 'lingo' ).en;
var S = require( 'string' );

var js = {
  defaults : {
    fieldsAsProperties : true, //use c# props, or overloaded functional access
    fieldsAsBeans : false,     //use getter/setter functions exclusive with above
    className : {
      pascalCase : true,
      postfix : "Model"
    }
  },

  /**
   * Given a DB type, return a default value - mostly for create
   * @param {string} type
   * @returns {*}
   */
  defaultVal : function ( type ) {
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
  },

  /**
   * Map DB types to this language's types
   * @param {string} type the DB type
   * @returns {string} the mapped type
   */
  mapType : function ( type ) {
    switch ( type.toLowerCase() ) {
      case 'varchar' :
        return "String";

      case 'double':
      case 'float':
      case 'integer':
        return "Number";

      case 'text':
        return "String";

      case 'boolean':
        return "Boolean";

      case 'date':
      case 'datetime':
        return "Date";

      default:
        return "Object";
    }
  },

  /**
   * Map a db field name to a language field name. Mostly about code style preferences
   * @param {string} prop
   * @returns {string}
   */
  fieldName : function ( prop ) {
    return prop;
  },

  /**
   * For the db entity, return the language class name
   * @param entityName
   * @param options
   */
  className : function ( entityName, options ) {
    var n = entityName;
    options = options || {};

    if ( options.className.singular ) { n = en.singularize( n ); }

    n = S( n );
    if ( options.className.pascalCase ) { n = n.camelize().capitalize(); }
    if ( options.className.camelCase ) { n = n.camelize(); }
    if ( options.className.prefix ) { n = n.ensureLeft( options.className.prefix ); }
    if ( options.className.postfix ) { n = n.ensureLeft( options.className.postfix ); }
    return n.s;
  },

  getterFunction : function ( prop ) {
  }
};

var lang = js;

function toPascalCase( str ) {
  return str.substr( 0, 1 ).toUpperCase() + str.substr( 1 );
}

function fixUnderscores( str ) {
  var s = "";
  var len = str.length - 1;
  for ( var i = 0; i < len; i++ ) {
    if ( str[i] === '_' ) {
    }
  }
}

function cleanPascalCase( str ) {
  return toPascalCase( str.replace( /_/g, '' ) );
}

function camelCase( str ) {
  return toPascalCase( str.replace( /_/g, '' ) );
}

function getModelName( entity ) {
  return cleanPascalCase( entity.name ) + "Model";
}

function getEntityInfo( entity ) {
  var singularName = en.singularize( entity.name );
  return {
    entityName : entity.name,
    modelName : toPascalCase( singularName ) + "Model"
  };
}

function generate( options, entity, parentEntity ) {
  options = options || { LS : "\n"};
  var entities = {};
  var output = [];
  var data = getEntityInfo( entity );
  output.push( templates.header( data ) );

  /**
   * fields
   */
  _.each( entity.fields, function ( field ) {
    data.isCollection = false;
    data["propertyName"] = field.name;
    data["propertyType"] = getTypeName( field.type );
    output.push( templates.accessor( data ) );
  } );

  /**
   * get collections
   */
  _.each( entity.collections, function ( collection ) {
    data.isCollection = true;
    data["propertyName"] = collection.name;
    data["propertyType"] = cleanPascalCase( collection.name );
    output.push( templates.accessor( data ) );
  } );

  output.push( templates.footer( data ) );
  entities[data.modelName] = output.join( options.LS );

  _.each( entity.collections, function ( collection ) {
    _.extend( entities, generate( options, collection, entity ) );
  } );

  return entities;
}

module.exports = {
  generate : generate,
  getEntityInfo : getEntityInfo
};

var templates = {

  accessor : function ( data ) {
    var pn = data.propertyName;
    data.camelName = cleanPascalCase( pn );
    var cString = data.isCollection ? " collection" : "";

    return applyTemplate( [
      "",
      "/**",
      " * Gets or sets the <%= propertyName %>" + cString,
      " * @param {<%= propertyType %>} [value] If provided, set property to value",
      " * @returns {<%= propertyType %> | <%= modelName %> } Returns property value if getting; 'this' if setting.",
      " */",
      "p.get<%= camelName %> = function(value) {",
      "  if (arguments.length === 0) {",
      "    return this.__data.<%= propertyName %>",
      "  }",
      "  this.__data.<%= propertyName %> = value;",
      "  return this;",
      "};"], data );
  },

  header : function ( data ) {
    return applyTemplate( ["var BaseModel = require( './Model' );",
      "var util = require( 'util' );",
      "var _ = require( 'underscore' );",
      "var Factory = require( './factory' );",
      "var entityName = '<%= entityName %>';",
      "",
      "/**",
      " * @lends <%= modelName %>",
      " * @extends BaseModel",
      " * @constructor",
      " */",
      "var <%= modelName %> = function ( options ) {",
      "  BaseModel.call( this, options, entityName );",
      "};",
      "",
      "require( './factory' ).register( entityName, <%= modelName %>);",
      "util.inherits( <%= modelName %>, BaseModel );",
      "var p = <%= modelName %>.prototype;"], data );
  },

  footer : function ( data ) {
    return applyTemplate( ['module.exports = <%= modelName %>'], data );
  }
};

function applyTemplate( arr, data, options ) {
  var LS = options && options.LS || "\n";

  return _.template( arr.join( LS ), data );
}