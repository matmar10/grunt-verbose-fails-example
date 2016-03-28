'use strict';

module.exports = function (grunt) {
  // Load grunt tasks automatically
  grunt.loadTasks('./tasks');
  grunt.initConfig({
    example: {
      target: true,
      otherTarget: false
    }
  });

  grunt.registerTask('default', 'example');
};
