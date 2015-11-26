/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

	grunt.config.set('sails-linker', {
		devJsBase: {
			options: {
				startTag: '<!--SCRIPTS_BASE-->',
				endTag: '<!--SCRIPTS_BASE END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').jsBaseFilesToInject,
				'views/**/*.html': require('../pipeline').jsBaseFilesToInject,
				'views/**/*.ejs': require('../pipeline').jsBaseFilesToInject
			}
		},

		devJsBaseRelative: {
			options: {
				startTag: '<!--SCRIPTS_BASE-->',
				endTag: '<!--SCRIPTS_BASE END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').jsBaseFilesToInject,
				'views/**/*.html': require('../pipeline').jsBaseFilesToInject,
				'views/**/*.ejs': require('../pipeline').jsBaseFilesToInject
			}
		},
		devJsApp01: {
			options: {
				startTag: '<!--SCRIPTS_APP01-->',
				endTag: '<!--SCRIPTS_APP01 END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').jsApp01FilesToInject,
				'views/**/*.html': require('../pipeline').jsApp01FilesToInject,
				'views/**/*.ejs': require('../pipeline').jsApp01FilesToInject
			}
		},

		devJsApp01Relative: {
			options: {
				startTag: '<!--SCRIPTS_APP01-->',
				endTag: '<!--SCRIPTS_APP01 END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').jsApp01FilesToInject,
				'views/**/*.html': require('../pipeline').jsApp01FilesToInject,
				'views/**/*.ejs': require('../pipeline').jsApp01FilesToInject
			}
		},

		devJsApp01All: {
			options: {
				startTag: '<!--SCRIPTS_APP01_ALL-->',
				endTag: '<!--SCRIPTS_APP01_ALL END-->',
				fileTmpl: '%s',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': ['<!--hello-->'],
				'views/**/*.html': ['<!--hello-->'],
				'views/**/*.ejs': ['<!--hello-->']
			}
		},

		devJsApp01AllRelative: {
			options: {
				startTag: '<!--SCRIPTS_APP01_ALL-->',
				endTag: '<!--SCRIPTS_APP01_ALL END-->',
				fileTmpl: '%s',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': ['<!--hello-->'],
				'views/**/*.html': ['<!--hello-->'],
				'views/**/*.ejs': ['<!--hello-->']
			}
		},

		prodJsBase: {
			options: {
				startTag: '<!--SCRIPTS_BASE-->',
				endTag: '<!--SCRIPTS_BASE END-->',
				fileTmpl: '%s',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': ['<!--hello-->'],
				'views/**/*.html': ['<!--hello-->'],
				'views/**/*.ejs': ['<!--hello-->']
			}
		},

		prodJsBaseRelative: {
			options: {
				startTag: '<!--SCRIPTS_BASE-->',
				endTag: '<!--SCRIPTS_BASE END-->',
				fileTmpl: '%s',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': ['<!--hello-->'],
				'views/**/*.html': ['<!--hello-->'],
				'views/**/*.ejs': ['<!--hello-->']
			}
		},

		prodJsApp01: {
			options: {
				startTag: '<!--SCRIPTS_APP01-->',
				endTag: '<!--SCRIPTS_APP01 END-->',
				fileTmpl: '%s',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': ['<!--hello-->'],
				'views/**/*.html': ['<!--hello-->'],
				'views/**/*.ejs': ['<!--hello-->']
			}
		},

		prodJsApp01Relative: {
			options: {
				startTag: '<!--SCRIPTS_APP01-->',
				endTag: '<!--SCRIPTS_APP01 END-->',
				fileTmpl: '%s',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': ['<!--hello-->'],
				'views/**/*.html': ['<!--hello-->'],
				'views/**/*.ejs': ['<!--hello-->']
			}
		},

		prodJsApp01All: {
			options: {
				startTag: '<!--SCRIPTS_APP01_ALL-->',
				endTag: '<!--SCRIPTS_APP01_ALL END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/dist/production.app01.all.min.js'],
				'views/**/*.html': ['.tmp/public/dist/production.app01.all.min.js'],
				'views/**/*.ejs': ['.tmp/public/dist/production.app01.all.min.js']
			}
		},

		prodJsApp01AllRelative: {
			options: {
				startTag: '<!--SCRIPTS_APP01_ALL-->',
				endTag: '<!--SCRIPTS_APP01_ALL END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/dist/production.all.min.js'],
				'views/**/*.html': ['.tmp/public/dist/production.all.min.js'],
				'views/**/*.ejs': ['.tmp/public/dist/production.all.min.js']
			}
		},

		devStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.ejs': require('../pipeline').cssFilesToInject
			}
		},

		devStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.ejs': require('../pipeline').cssFilesToInject
			}
		},

		prodStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/dist/production.min.css'],
				'views/**/*.html': ['.tmp/public/dist/production.min.css'],
				'views/**/*.ejs': ['.tmp/public/dist/production.min.css']
			}
		},

		prodStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/dist/production.min.css'],
				'views/**/*.html': ['.tmp/public/dist/production.min.css'],
				'views/**/*.ejs': ['.tmp/public/dist/production.min.css']
			}
		},

		// Bring in JST template object
		devTpl: {
			options: {
				startTag: '<!--TEMPLATES-->',
				endTag: '<!--TEMPLATES END-->',
				fileTmpl: '<script type="text/javascript" src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/jst.js'],
				'views/**/*.html': ['.tmp/public/jst.js'],
				'views/**/*.ejs': ['.tmp/public/jst.js']
			}
		},

		devJsJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': require('../pipeline').jsBaseFilesToInject
			}
		},

		devJsRelativeJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/**/*.jade': require('../pipeline').jsBaseFilesToInject
			}
		},

		prodJsJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/dist/production.min.js']
			}
		},

		prodJsRelativeJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/**/*.jade': ['.tmp/public/dist/production.min.js']
			}
		},

		devStylesJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public'
			},

			files: {
				'views/**/*.jade': require('../pipeline').cssFilesToInject
			}
		},

		devStylesRelativeJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/**/*.jade': require('../pipeline').cssFilesToInject
			}
		},

		prodStylesJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/dist/production.min.css']
			}
		},

		prodStylesRelativeJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/**/*.jade': ['.tmp/public/dist/production.min.css']
			}
		},

		// Bring in JST template object
		devTplJade: {
			options: {
				startTag: '// TEMPLATES',
				endTag: '// TEMPLATES END',
				fileTmpl: 'script(type="text/javascript", src="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/jst.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
