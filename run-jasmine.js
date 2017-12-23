/**
 * Prepares and executes jasmine in the current environment, only if jasmine is
 * not defined. This is useful for having self-executing test files.
 */
'use strict';

module.exports = function(config) {
  var Jasmine = require('jasmine');
  var jasmine = new Jasmine();

  if (typeof config === 'string') {
    jasmine.loadConfigFile(config);
  } else if (typeof config === 'object' && config !== null) {
    jasmine.loadConfig(config);
  } else {
    var jasmineConfigPath = process.env.JASMINE_CONFIG_PATH;
    if (jasmineConfigPath != null) {
      jasmine.loadConfigFile(jasmineConfigPath);
    }
  }

  setTimeout(function() {
    jasmine.execute();
  });
};

if (typeof jasmine !== 'undefined') {
  module.exports = function() {};
}
