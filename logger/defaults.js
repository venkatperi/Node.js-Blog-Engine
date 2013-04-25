module.exports = {
  provider : 'winston',

  transports : {
    console : {
      level : 'V',
      prettyPrint : true,
      handleExceptions : true
    },

    file : {
      filename : "./app.log",
      prettyPrint : true,
      handleExceptions : true
    }
  },

  exitOnError : true,

  levels : {
    V : 0,
    D : 1,
    I : 2,
    W : 3,
    E : 4
  }
};
