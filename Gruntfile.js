'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '0.0.0.0'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'app/styles/css/main.css': 'app/styles/main.scss'
                }
            }
        },
        watch: {
            styles: {
                files: ['app/styles/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.registerTask('serve', [
        'connect',
        'watch'
    ]);
};
