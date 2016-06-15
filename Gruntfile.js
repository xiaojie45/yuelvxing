'use strict';

module.exports = function(grunt){

	grunt.initConfig({

		uglify:{
			buid:{
				files:{
					'scripts/main.min.js':['scripts/main.js']
				}
			}
		},

		sass:{
			build:{
				files:{
					'css/base.css':['css/base.scss']
				}
			}
		},

		cssmin:{
			build:{
				files:{
					'css/base.min.css':['css/base.css']
				}
			}
		},

		jshint:{
			files:['scripts/main.js']
		},

		imagemin:{
			build:{
				files:[
				{
					expand:true,
					cwd:'images/',
					src:['**/*.{png,jpg,jpeg}'],
					dest:'images/'
				}
				]
			}
		},
		watch: {
      		scripts: {
        		files: ['scripts/main.js'],
        		tasks: ['jshint','uglify']
      				},
      		sass: {
        		files: ['css/base.scss'],
        		tasks: ['sass']
      				},
      		css: {
      			files: ['css/base.css'],
        		tasks: ['cssmin']
      		},
  		},
	});

	 grunt.loadNpmTasks("grunt-contrib-uglify");
	 grunt.loadNpmTasks("grunt-contrib-sass");
	 grunt.loadNpmTasks("grunt-contrib-cssmin");
	 grunt.loadNpmTasks("grunt-contrib-imagemin");
	 grunt.loadNpmTasks("grunt-contrib-watch");
	 grunt.loadNpmTasks("grunt-contrib-jshint");
 	// grunt.loadNpmTasks("grunt-contrib-watch");
 	grunt.registerTask('default', ['uglify','sass','cssmin']);

};

