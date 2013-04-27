function property( obj, name, options ) {
  options = options || {};

  var propName = (options.prefix || "__") + name;
  var oldValue;

  if ( !options.get ) {
    oldValue = obj[propName] = options.default || undefined;
  }

  var getFn = typeof options.get === 'function' ? options.get.call( obj ) :
              function () { return obj[propName] };

  var setFn = function ( newValue ) {
    if ( oldValue !== newValue ) {
      typeof options.set === 'function'
          ? options.set.call( obj, newValue )
          : function () { obj[propName] = newValue };

      if ( options.notify && obj.emit ) {
        obj.emit( "propertyChanged", name, oldValue, newValue );
      }
      oldValue = newValue;
    }
  };

  var o = {
    enumerable : options.enumerable || true
  };

  function addMethod( method, fn ) {
    switch ( typeof options[method] ) {
      case 'undefined':
        o[method] = fn;
        break;

      case 'boolean':
        if ( options[method] ) {
          o[method] = fn;
        }
        break;

      case 'function':
        o[method] = fn;
        break;
    }
  }

  addMethod( 'get', getFn );

  if ( !options.readonly ) {
    addMethod( 'set', setFn );
  }

  Object.defineProperty( obj, name, o );
}

module.exports = property;