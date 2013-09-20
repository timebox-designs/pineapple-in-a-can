var Backbone = require("backbone"),
    HomeView = require("views/home");

module.exports = Backbone.Marionette.Controller.extend({
    initialize: function (options) {
        this.layout = options.layout;
    },

    showHome: function () {
        this.renderView(this.layout.content);
    },

    renderView: function (region) {
        region.show(new HomeView());
    }
});
