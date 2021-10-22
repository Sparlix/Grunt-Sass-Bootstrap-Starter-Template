module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    // This is the current/working directory
                    'assets/css/style.css': 'assets/scss/style.scss'
                }
            }
        },
        watch: {
            scripts: {
                // this is the directory grunt listens on
                files: ['assets/scss/**', 'assets/js/**'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
        },
        // minfies all images and moves them to dist file
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images/'
                }]
            },


        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }]
            }
        }
    });


    // sass command/plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    // watch commands/plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Image Min commands/plugins
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Css Min commands/plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('local', ['watch']);
    grunt.registerTask('dev', ['sass', 'imagemin', 'cssmin']);
    grunt.registerTask('test', ['sass']);
    grunt.registerTask('live', ['sass']);

};