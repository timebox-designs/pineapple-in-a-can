/* jshint node: true */
"use strict";

var Backbone = require("backbone"),
    Router = require("router"),
    Controller = require("controller"),
    Swag = require("swag");

var app = new Backbone.Marionette.Application();

app.addRegions({
    body: "body"
});

app.addInitializer(function () {
    Swag.registerHelpers();
});

app.addInitializer(function () {
    new Router({controller: new Controller({region: this.body})});
});

app.on("start", function () {
    Backbone.history.start();
});

module.exports = app;