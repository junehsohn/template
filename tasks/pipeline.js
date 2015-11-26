/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsBaseFilesToInject = [
  
  // Load sails.io before everything else
  'js/dependencies/sails.io/sails.io.js',
  'js/dependencies/jquery-1.11.3/jquery-1.11.3.min.js',
  'js/dependencies/jquery.transit/jquery.transit.min.js',
  'js/dependencies/underscore/underscore-min.js',
  'js/dependencies/angular.1.4/angular.min.js',
  'js/dependencies/angular-ui-router-0.2.15/angular-ui-router.min.js'

  // 'js/**/*.js'
];

var jsApp01FilesToInject = [
  'app01/comp/**/*.js',
  'app01/svc/**/*.js',
  'app01/app01.js'
];

var jsApp02FilesToInject = [
  'app02/comp/**/*.js',
  'app02/svc/**/*.js',
  'app02/app02.js'
];

var jsApp01AllFilesToInject = jsBaseFilesToInject.concat(jsApp01FilesToInject);
var jsApp02AllFilesToInject = jsBaseFilesToInject.concat(jsApp02FilesToInject);


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.cssFilesPublishToInject = cssFilesToInject.map(function(path) {
  return '../' + path;
});
module.exports.jsBaseFilesToInject = jsBaseFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});

module.exports.jsBaseFilesPublishToInject = jsBaseFilesToInject.map(function(path) {
  return '../' + path;
});

module.exports.jsApp01FilesToInject = jsApp01FilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsApp02FilesToInject = jsApp02FilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsApp01AllFilesToInject = jsApp01AllFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsApp02AllFilesToInject = jsApp02AllFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
