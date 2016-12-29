
// Register babel to transpile before tests are run
require('babel-register');

// Disable webpack features unknown to Mocha
require.extensions['.css'] = function() {};
