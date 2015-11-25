module.exports = function (grunt) {
	grunt.registerTask('linkAssetsBuildProd', [
		'sails-linker:prodJsBaseRelative',
		'sails-linker:prodJsApp01Relative',
		'sails-linker:prodJsApp01AllRelative',
		'sails-linker:prodStylesRelative',
		'sails-linker:devTpl',
		'sails-linker:prodJsRelativeJade',
		'sails-linker:prodStylesRelativeJade',
		'sails-linker:devTplJade'
	]);
};
