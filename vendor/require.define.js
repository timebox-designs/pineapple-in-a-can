// Shim in vendor libraries and frameworks so they can be treated as modules.

require.define({
    "jquery": function (require, exports, module) {
        return module.exports = $;
    },
    "underscore": function (require, exports, module) {
        return module.exports = _;
    },
    "backbone": function (require, exports, module) {
        return module.exports = Backbone;
    },
    "handlebars": function (require, exports, module) {
        return module.exports = Handlebars;
    },
    "swag": function (require, exports, module) {
        return module.exports = Swag;
    }
});