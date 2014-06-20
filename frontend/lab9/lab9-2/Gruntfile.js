module.exports=function(grunt){
	grunt.initConfig({
		compass:{
			dist: {
				options:{
					sassDir:'dev/css/sass',
					cssDir:'dist/css',
					environment:'production'
				}
			},
			dev:{
				options:{
					sassDir:'dev/css/sass',
					cssDir:'dist/css/stylesheets'
				}
			}
		},
		jsdoc:{
			dist:{
				src:['dist/js/*.js','*.js'],
				options:{
					destination:'docs'
				}
			}
		},
		jshint:{
			options:{
				curly: true,
				eqeqeq: true,
				eqnull: true,
				indent:4,
				browser: true,
				globals:{
					jQuery:true
				}
			},
			files:{
				src:['dist/js/lab9-2.js','*.js']
			}
		},
		htmlhint:{
			html1:{
				options:{
					'tag-pair':true,
					'doctype-first':true,
					'id-unique':true,
					'tag-self-close':true
				},
				src:['*.html']
			}
			
		},
		rev:{
			options:{
				encoding:'utf-8',
				algorithm:'md5',
				length: 8
			},
			dist:{
				files:{
					src:['dist/js/lab9-2.js']
				}
			}
		}
	});
	//Cargar todas las tareas
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-rev');
	//Registrar todas las tareas
	grunt.registerTask("default",['compass',"jsdoc","jshint","htmlhint","rev"]);
	grunt.registerTask("docs",["jsdoc"]);
	grunt.registerTask("testjshint",["jshint"]);
	grunt.registerTask("testhtmlhint",["htmlhint"]);
};