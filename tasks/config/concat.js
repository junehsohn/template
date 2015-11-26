/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		jsBase: {
			src: require('../pipeline').jsBaseFilesToInject,
			dest: '.tmp/public/concat/production.base.js'
		},
		jsApp01: {
			src: require('../pipeline').jsApp01FilesToInject,
			dest: '.tmp/public/concat/production.app01.js'
		},
		jsApp01All: {
			src: require('../pipeline').jsApp01AllFilesToInject,
			dest: '.tmp/public/concat/production.app01.all.js'
		},
		css: {
			src: require('../pipeline').cssFilesToInject,
			dest: '.tmp/public/concat/production.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
