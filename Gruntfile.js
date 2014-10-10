module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-jade");

    grunt.initConfig({
        coffee:{
            build:{
                src:  [
                    "src/scripts/**/*.coffee",
                    "!src/scripts/app.coffee",
                    "src/scripts/app.coffee"
                ],
                dest: "build/js/app.js",
                options:{
                    join:true
                }
            }
        },
        stylus:{
            build:{
                src:  "src/styles/app.styl",
                dest: "build/css/app.css"
            }
        },
        jade:{
            build:{
                src:  "src/views/app.jade",
                dest: "build/app.html",
                options:{
                    pretty:true
                }
            }
        }
    });
    grunt.registerTask('default', ['coffee','stylus','jade']);
};
