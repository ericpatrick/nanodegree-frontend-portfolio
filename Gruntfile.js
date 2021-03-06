/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      profile: {
        options: {
          engine: 'im',
          sizes: [
            {
              width: 80,
              height: 80,
              suffix: '_1x',
              quality: 70
            },
            {
              width: 160,
              height: 160,
              suffix: '_2x',
              quality: 70
            },
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['profile.jpg'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      },
      work: {
        options: {
          engine: 'im',
          sizes: [
            {
              /* Change these */
              width: 320,
              height: 196,
              suffix: '_1x',
              quality: 40
            },
            {
              /* Change these */
              width: 640,
              height: 392,
              suffix: '_2x',
              quality: 40
            }
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['em*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
