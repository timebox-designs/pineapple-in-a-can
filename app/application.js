var Backbone = require("backbone");

$(function () {
    var ApplicationLayout = require("views/application"),
        Controller = require("controller"),
        Route = require("routes");

    var app = new Backbone.Marionette.Application();

    app.addRegions({
        body: "body"
    });

    app.addInitializer(function () {
        var applicationLayout = new ApplicationLayout();
        this.body.show(applicationLayout);
        new Route({controller: new Controller({layout: applicationLayout})});
    });

    app.on("start", function () {
        Backbone.history.start();
    });

    app.start();
});
