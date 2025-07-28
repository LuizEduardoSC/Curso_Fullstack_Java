module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dist/styles/main.min.css': 'src/styles/estilo.less'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/styles/**/*.less'],
                tasks: ['less', 'uglify'],
                options: {
                    spawn: false,
                }
            }
        },

        uglify: {
            my_target: {
            files: {
            'dist/scripts/scripts.min.js': ['src/scripts/main.js']  
            }
        }
    },

        csslint: {
            strict: {
                options: {
                    "import": false
                },
                src: ['dist/styles/main.min.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify']);
};