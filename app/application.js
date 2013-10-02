var Backbone = require("backbone"),
    Router = require("router"),
    Controller = require("controller");

var app = new Backbone.Marionette.Application();

app.addRegions({
    body: "body"
});

app.addInitializer(function () {
    new Router({controller: new Controller({region: this.body})});
});

app.on("start", function () {
    Backbone.history.start();
});

module.exports = app;