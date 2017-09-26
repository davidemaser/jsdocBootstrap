module.exports = function(grunt) {
    grunt.initConfig({
        jsdoc : {
            dist : {
                src: ['src/*.js','src/x2o_Objects/*.js'],
                options:{
                    destination:'out',
                    configuration:'jsdoc.json'
                }
            }
        },
        watch: {
            tasks: ['jsdoc']
        }
    });

    grunt.loadNpmTasks('grunt-jsdoc-plugin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jsdoc']);

};