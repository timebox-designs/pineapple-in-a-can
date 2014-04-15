/* jshint node: true */
"use strict";

var Backbone = require("backbone"),
    Layout = require("views/application");

module.exports = Backbone.Marionette.Controller.extend({
    initialize: function (options) {
        this.region = options.region;
    },

    showDefault: function () {
        this.region.show(new Layout());
    }
});