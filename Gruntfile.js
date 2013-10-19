module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
    	server :{
    		options:{
		    	hostname: "localhost",
		    	base: "site",
		    	port: "9999",
		    	keepalive: true
    		}
    	}
    }	
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  

  // Default task(s).
  grunt.registerTask('default', ['express']);

};