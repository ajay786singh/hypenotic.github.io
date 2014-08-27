module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'style.css': 'sass/style.scss'
        }
      }
    },

    concat: {
      dist: {
        src: [
          'js/libs/*.js',
          'js/global.js'
        ],
        dest: 'js/build/production.js'
      }
    },

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif,ico}'],
          dest: 'images/'
        }]
      }
    },

    jekyll: {
      options: {                          
        src: '.'
      },
      dist: {
        options: {
          dest: './_site',
          config: '_config.yml'
        }
      }
    },

    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            width: 220,
            height: 220,
            aspectRatio: false,
          },
          {
            width: 470,
            height: 470,
            aspectRatio: false,
          },
          {
            width: 470,
            height: 220,
            aspectRatio: false,
          },
          {
            width: 220,
            height: 470,
            aspectRatio: false,
          },
          {
            width: 970,
            height: 470,
            aspectRatio: false,
          },
          {
            width: 610,
            height: 610,
            aspectRatio: false,
          }
          ]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: 'screens/',
          dest: 'img/'
        }]
      },
      browser: {
        options: {
          sizes: [{
            width: 938,
          },
          {
            width: 578,
          }
          ]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: 'browser/',
          dest: 'img/'
        }]
      }
  },

    watch: {
      options: {
        livereload: true,
      },
     sass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['sass', 'jekyll'],
        options: {
          spawn: false,
        }
      },

      html: {
        files: ['*.html', '_includes/*.html', '_layouts/*.html'],
        tasks: ['jekyll'],
        options: {
          spawn: false,
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: './_site'
        }
      }
    },

  });

  require('load-grunt-tasks')(grunt);


  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'jekyll']);

  grunt.registerTask('js', ['concat', 'uglify']);

  grunt.registerTask('server', ['connect', 'watch']);

  grunt.registerTask('image', ['responsive_images', 'imagemin']);

};