var Backbone = require("backbone");

var Layout = Backbone.Marionette.Layout.extend({
    template: require("./template")
});

module.exports = Layout;