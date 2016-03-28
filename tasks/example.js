'use strict';

module.exports = function (grunt) {

  grunt.registerMultiTask('example', 'Simple example multitask', function () {
    grunt.log.writeln('Target is:', this.target);
    grunt.log.writeln('Data is:', this.data);
  });

};
