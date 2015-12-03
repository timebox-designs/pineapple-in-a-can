/* jshint node: true */
"use strict";

var Backbone = require("backbone");

var Layout = Backbone.Marionette.LayoutView.extend({
    template: require("./template")
});

module.exports = Layout;