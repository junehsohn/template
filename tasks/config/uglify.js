/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		my_target: {
			options: {
	      		mangle: false
	    	},
		    files: {
				// '.tmp/public/dist/production.base.min.js': ['.tmp/public/concat/production.base.js'],
				// '.tmp/public/dist/production.app01.min.js': ['.tmp/public/concat/production.app01.js'],
				'.tmp/public/dist/production.app01.all.min.js': ['.tmp/public/concat/production.app01.all.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
