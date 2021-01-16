"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.onCreateWebpackConfig = exports.onCreateBabelConfig = void 0;
var node_utils_1 = require("./node-apis/node-utils");
__exportStar(require("./node-apis/preprocess-source"), exports);
exports.onCreateBabelConfig = function (_a) {
    var actions = _a.actions, store = _a.store;
    var root = store.getState().program.directory;
    var cacheDir = node_utils_1.getCacheDir(root);
    actions.setBabelPlugin({
        name: require.resolve("./babel-plugin-parse-static-images"),
        options: {
            cacheDir: cacheDir
        }
    });
};
exports.onCreateWebpackConfig = function (_a) {
    var _b;
    var stage = _a.stage, plugins = _a.plugins, actions = _a.actions;
    if (stage !== "develop" &&
        stage !== "build-javascript" &&
        stage !== "build-html") {
        return;
    }
    actions.setWebpackConfig({
        plugins: [
            plugins.define((_b = {},
                _b["global.GATSBY___IMAGE"] = true,
                _b)),
        ]
    });
};
