module.exports = function (grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            options: {
                implementation: sass,
                outputStyle: "expanded",
                sourceMapContents: true,
                sourceMap: true
            },
            standard: {
                files: {
                    "dev/css/bootstrap-complete.css": "dev/sass/bs-complete.scss",
                    "dev/css/bootstrap-complete-2.css": "dev/sass/bs-complete-2.scss",
                    "dev/css/bootstrap-compact-1.css": "dev/sass/bs-compact-1.scss",
                }
            }
        },
        // Post CSS task
        postcss: {
            options: {
                map: true,
                processors: [
                    require("autoprefixer")({
                        browsers: ["last 2 versions"]
                    })
                ]
            },
            standard: {
                src: "dev/css/**/*.css"
            }
        },
        // Watch task
        watch: {
            sass: {
                files: ["dev/sass/**/*.scss"],
                tasks: "sass",
                options: {
                    spawn: false,
                    livereload: false
                }
            },
            css: {
                files: ["dev/css/**/*.css"],
                tasks: "postcss",
                options: {
                    spawn: false,
                    livereload: false
                }
            }
        }

      });

    // Load the plugins to run your tasks
    require("load-grunt-tasks")(grunt, {
        scope: "devDependencies"
    });

     // Default task(s).
     grunt.registerTask("default", [
         "sass",
         "postcss",
         "watch"
     ]);

};
