"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.MainImage = void 0;
var react_1 = __importStar(require("react"));
var picture_1 = require("./picture");
exports.MainImage = react_1.forwardRef(function MainImage(_a, ref) {
    var props = __rest(_a, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        props.loading === "eager" && (react_1["default"].createElement("link", { rel: "preload", as: "image", href: props.fallback.src, 
            // TODO: remove this if imagesrcset is added to the types
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            imagesrcset: props.fallback.srcSet, imagesizes: props.fallback.sizes })),
        react_1["default"].createElement(picture_1.Picture, __assign({ ref: ref }, props)),
        react_1["default"].createElement("noscript", null,
            react_1["default"].createElement(picture_1.Picture, __assign({}, props, { shouldLoad: true })))));
});
exports.MainImage.displayName = "MainImage";
exports.MainImage.propTypes = picture_1.Picture.propTypes;
