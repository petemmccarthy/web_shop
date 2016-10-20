/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
  fs = require('fs');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import("bower_components/bootstrap/dist/css/bootstrap.css");
  app.import("bower_components/bootstrap/dist/js/bootstrap.js");
  app.import("vendor/gmaps.js");

  fs.readFile('./config/pre-push', function (err, data) {
      fs.writeFile('./.git/hooks/pre-push', data, function (err) {
        if (err) {
          console.log('error while copying githook');
        } else {
          fs.chmodSync('./.git/hooks/pre-push', '0775');
        }
      });
    });

  return app.toTree();
};
