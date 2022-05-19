const sass = require('node-sass');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          'src/css/workflowengine.dark.css': 'src/sass/workflowengine.dark.scss',
          'src/css/workflowengine.light.css': 'src/sass/workflowengine.light.scss',
        },
      },
    },
  });

  grunt.registerTask('default', ['sass']);
};
