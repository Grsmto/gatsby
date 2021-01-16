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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GatsbyImage = exports.GatsbyImageHydrator = void 0;
var react_1 = __importDefault(require("react"));
var hooks_1 = require("./hooks");
var placeholder_1 = require("./placeholder");
var main_image_1 = require("./main-image");
var layout_wrapper_1 = require("./layout-wrapper");
var removeNewLines = function (str) { return str.replace(/\n/g, ""); };
exports.GatsbyImageHydrator = function GatsbyImageHydrator(_a) {
    var _b = _a.as, Type = _b === void 0 ? "div" : _b, children = _a.children, props = __rest(_a, ["as", "children"]);
    return react_1["default"].createElement(Type, __assign({}, props), children);
};
exports.GatsbyImage = function GatsbyImage(_a) {
    var as = _a.as, className = _a.className, preactClass = _a["class"], style = _a.style, image = _a.image, _b = _a.loading, loading = _b === void 0 ? "lazy" : _b, imgClassName = _a.imgClassName, imgStyle = _a.imgStyle, backgroundColor = _a.backgroundColor, objectFit = _a.objectFit, objectPosition = _a.objectPosition, props = __rest(_a, ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"]);
    if (!image) {
        console.warn("[gatsby-plugin-image] Missing image prop");
        return null;
    }
    if (preactClass) {
        className = preactClass;
    }
    imgStyle = __assign({ objectFit: objectFit,
        objectPosition: objectPosition,
        backgroundColor: backgroundColor }, imgStyle);
    var width = image.width, height = image.height, layout = image.layout, images = image.images, placeholder = image.placeholder, placeholderBackgroundColor = image.backgroundColor;
    var _c = hooks_1.getWrapperProps(width, height, layout), wStyle = _c.style, wClass = _c.className, wrapperProps = __rest(_c, ["style", "className"]);
    var cleanedImages = {
        fallback: undefined,
        sources: []
    };
    if (images.fallback) {
        cleanedImages.fallback = __assign(__assign({}, images.fallback), { srcSet: images.fallback.srcSet
                ? removeNewLines(images.fallback.srcSet)
                : undefined });
    }
    if (images.sources) {
        cleanedImages.sources = images.sources.map(function (source) {
            return __assign(__assign({}, source), { srcSet: removeNewLines(source.srcSet) });
        });
    }
    return (react_1["default"].createElement(exports.GatsbyImageHydrator, __assign({}, wrapperProps, { as: as, style: __assign(__assign(__assign({}, wStyle), style), { backgroundColor: backgroundColor }), className: "" + wClass + (className ? " " + className : "") }),
        react_1["default"].createElement(layout_wrapper_1.LayoutWrapper, { layout: layout, width: width, height: height },
            react_1["default"].createElement(placeholder_1.Placeholder, __assign({}, hooks_1.getPlaceholderProps(placeholder, false, layout, width, height, placeholderBackgroundColor))),
            react_1["default"].createElement(main_image_1.MainImage, __assign({ "data-gatsby-image-ssr": "", className: imgClassName, style: imgStyle }, props, hooks_1.getMainProps(loading === "eager", false, cleanedImages, loading))))));
};
