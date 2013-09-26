var Backbone = require("backbone"),
    $ = require("jquery");

$(function () {
    var Layout = require("views/application"),
        app = new Backbone.Marionette.Application();

    app.addRegions({
        body: "body"
    });

    app.addInitializer(function () {
        this.body.show(new Layout());
    });

    app.start();
});
