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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.useImageLoaded = exports.getPlaceholderProps = exports.getMainProps = exports.useGatsbyImage = exports.getWrapperProps = exports.getSrc = exports.getImage = exports.hasImageLoaded = exports.storeImageloaded = exports.hasNativeLazyLoadSupport = void 0;
var react_1 = require("react");
var image_utils_1 = require("../image-utils");
var imageCache = new Set();
// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
exports.hasNativeLazyLoadSupport = function () {
    return typeof HTMLImageElement !== "undefined" &&
        "loading" in HTMLImageElement.prototype;
};
function storeImageloaded(cacheKey) {
    if (cacheKey) {
        imageCache.add(cacheKey);
    }
}
exports.storeImageloaded = storeImageloaded;
function hasImageLoaded(cacheKey) {
    return imageCache.has(cacheKey);
}
exports.hasImageLoaded = hasImageLoaded;
exports.getImage = function (file) { var _a; return (_a = file === null || file === void 0 ? void 0 : file.childImageSharp) === null || _a === void 0 ? void 0 : _a.gatsbyImageData; };
exports.getSrc = function (file) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = file === null || file === void 0 ? void 0 : file.childImageSharp) === null || _a === void 0 ? void 0 : _a.gatsbyImageData) === null || _b === void 0 ? void 0 : _b.images) === null || _c === void 0 ? void 0 : _c.fallback) === null || _d === void 0 ? void 0 : _d.src; };
function getWrapperProps(width, height, layout) {
    var wrapperStyle = {
        position: "relative",
        overflow: "hidden"
    };
    if (layout === "fixed") {
        wrapperStyle.width = width;
        wrapperStyle.height = height;
    }
    else if (layout === "constrained") {
        wrapperStyle.display = "inline-block";
    }
    return {
        className: "gatsby-image-wrapper",
        "data-gatsby-image-wrapper": "",
        style: wrapperStyle
    };
}
exports.getWrapperProps = getWrapperProps;
function useGatsbyImage(_a) {
    var _b = _a.pluginName, pluginName = _b === void 0 ? "useGatsbyImage" : _b, args = __rest(_a, ["pluginName"]);
    // TODO: use context to get default plugin options and spread them in here
    return image_utils_1.generateImageData(__assign({ pluginName: pluginName }, args));
}
exports.useGatsbyImage = useGatsbyImage;
function getMainProps(isLoading, isLoaded, images, loading, toggleLoaded, cacheKey, ref, style) {
    if (style === void 0) { style = {}; }
    var onLoad = function (e) {
        if (isLoaded) {
            return;
        }
        storeImageloaded(cacheKey);
        var target = e.currentTarget;
        var img = new Image();
        img.src = target.currentSrc;
        if (img.decode) {
            // Decode the image through javascript to support our transition
            img
                .decode()["catch"](function () {
                // ignore error, we just go forward
            })
                .then(function () {
                toggleLoaded(true);
            });
        }
        else {
            toggleLoaded(true);
        }
    };
    // fallback when it's not configured in gatsby-config.
    if (!global.GATSBY___IMAGE) {
        style = __assign({ height: "100%", left: 0, position: "absolute", top: 0, transform: "translateZ(0)", transition: "opacity 250ms linear", width: "100%", willChange: "opacity" }, style);
    }
    var result = __assign(__assign({}, images), { loading: loading, shouldLoad: isLoading, "data-main-image": "", style: __assign(__assign({}, style), { opacity: isLoaded ? 1 : 0 }), onLoad: onLoad,
        ref: ref });
    return result;
}
exports.getMainProps = getMainProps;
function getPlaceholderProps(placeholder, isLoaded, layout, width, height, backgroundColor) {
    var wrapperStyle = {};
    if (backgroundColor) {
        wrapperStyle.backgroundColor = backgroundColor;
        if (layout === "fixed") {
            wrapperStyle.width = width;
            wrapperStyle.height = height;
            wrapperStyle.backgroundColor = backgroundColor;
            wrapperStyle.position = "relative";
        }
        else if (layout === "constrained") {
            wrapperStyle.position = "absolute";
            wrapperStyle.top = 0;
            wrapperStyle.left = 0;
            wrapperStyle.bottom = 0;
            wrapperStyle.right = 0;
        }
        else if (layout === "fluid") {
            wrapperStyle.position = "absolute";
            wrapperStyle.top = 0;
            wrapperStyle.left = 0;
            wrapperStyle.bottom = 0;
            wrapperStyle.right = 0;
        }
    }
    var result = __assign(__assign({}, placeholder), { "aria-hidden": true, "data-placeholder-image": "", style: __assign({ opacity: isLoaded ? 0 : 1, transition: "opacity 500ms linear" }, wrapperStyle) });
    // fallback when it's not configured in gatsby-config.
    if (!global.GATSBY___IMAGE) {
        result.style = {
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%"
        };
    }
    return result;
}
exports.getPlaceholderProps = getPlaceholderProps;
function useImageLoaded(cacheKey, loading, ref) {
    var _a = __read(react_1.useState(false), 2), isLoaded = _a[0], toggleLoaded = _a[1];
    var _b = __read(react_1.useState(loading === "eager"), 2), isLoading = _b[0], toggleIsLoading = _b[1];
    var rAF = typeof window !== "undefined" && "requestAnimationFrame" in window
        ? requestAnimationFrame
        : function (cb) {
            return setTimeout(cb, 16);
        };
    var cRAF = typeof window !== "undefined" && "cancelAnimationFrame" in window
        ? cancelAnimationFrame
        : clearTimeout;
    react_1.useEffect(function () {
        var interval;
        // @see https://stackoverflow.com/questions/44074747/componentdidmount-called-before-ref-callback/50019873#50019873
        function toggleIfRefExists() {
            if (ref.current) {
                if (loading === "eager" && ref.current.complete) {
                    storeImageloaded(cacheKey);
                    toggleLoaded(true);
                }
                else {
                    toggleIsLoading(true);
                }
            }
            else {
                interval = rAF(toggleIfRefExists);
            }
        }
        toggleIfRefExists();
        return function () {
            cRAF(interval);
        };
    }, []);
    return {
        isLoading: isLoading,
        isLoaded: isLoaded,
        toggleLoaded: toggleLoaded
    };
}
exports.useImageLoaded = useImageLoaded;
