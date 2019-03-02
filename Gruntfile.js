module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mkdir: {
      all: {
        options: {
          create: ['img/resp_img']
        }
      }
    },
    imageoptim: {
      myTask: {
        options: {
          jpegMini: false,
          imageAlpha: true,
          quitAfter: true
        },
        src: ['img/resp_img']
      },
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            name: 'small',
            width: 320,
            quality: 85
          }]
        },
      files: [{
        expand: true,
        src: ['**.{jpg,gif,png}'], // Files to be matched for the task.
        cwd: 'img', // Where the files are to be taken from.
        dest: 'img/resp_img' // Where the new files are to be stored.
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('default', ['mkdir', 'responsive_images', 'imageoptim']);
};
