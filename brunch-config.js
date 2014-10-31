exports.config = {
    paths: {
        app: 'app'
    },
    files: {
        javascripts: {
            defaultExtension: "js",
            joinTo: {
                "javascripts/app.js": /^app/,
                "javascripts/vendor.js": /^vendor|^bower_components/
            },
            order: {
                before: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/underscore/underscore.js',
                    'bower_components/backbone/backbone.js',
                    "bower_components/marionette/lib/backbone.marionette.js",
                    "bower_components/bootstrap/dist/js/bootstrap.js",
                    "bower_components/swag/lib/swag.js"
                ]
            }
        },
        stylesheets: {
            defaultExtension: "styl",
            joinTo: "stylesheets/app.css",
            order: {
                before: [
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                    'bower_components/bootstrap/dist/css/bootstrap-theme.css',
                    'bower_components/font-awesome/css/font-awesome.css'
                ]
            }
        },
        templates: {
            defaultExtension: "hbs",
            joinTo: "javascripts/app.js"
        }
    },
    server: {
        port: 8080,
        run: true
    }
};