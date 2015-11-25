module.exports = function (grunt) {
	grunt.registerTask('linkAssets', [
		'sails-linker:devJsBase',
		'sails-linker:devJsApp01',
		'sails-linker:devJsApp01All',
		'sails-linker:devStyles',
		'sails-linker:devTpl',
		'sails-linker:devJsJade',
		'sails-linker:devStylesJade',
		'sails-linker:devTplJade'
	]);
};
