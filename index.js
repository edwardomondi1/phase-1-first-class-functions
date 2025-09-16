global.receivesAFunction = function(callback) {
  callback();
};

global.returnsANamedFunction = function() {
  return function namedFunction() {
    // This is a named function
  };
};

global.returnsAnAnonymousFunction = function() {
  return function() {
    // This is an anonymous function
  };
};
