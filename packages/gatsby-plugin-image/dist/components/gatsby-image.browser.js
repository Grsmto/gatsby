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
exports.GatsbyImage = exports.GatsbyImageHydrator = void 0;
/* eslint-disable no-unused-expressions */
var react_1 = __importStar(require("react"));
var hooks_1 = require("./hooks");
var layout_wrapper_1 = require("./layout-wrapper");
var hasShownWarning = false;
exports.GatsbyImageHydrator = function GatsbyImageHydrator(_a) {
    var _b = _a.as, Type = _b === void 0 ? "div" : _b, style = _a.style, className = _a.className, preactClass = _a["class"], onStartLoad = _a.onStartLoad, image = _a.image, customOnLoad = _a.onLoad, backgroundColor = _a.backgroundColor, props = __rest(_a, ["as", "style", "className", "class", "onStartLoad", "image", "onLoad", "backgroundColor"]);
    if (!image) {
        if (process.env.NODE_ENV === "development") {
            console.warn("[gatsby-plugin-image] Missing image prop");
        }
        return null;
    }
    if (preactClass) {
        className = preactClass;
    }
    var width = image.width, height = image.height, layout = image.layout, images = image.images;
    var root = react_1.useRef();
    var hydrated = react_1.useRef(false);
    var unobserveRef = react_1.useRef(null);
    var lazyHydrator = react_1.useRef(null);
    var ref = react_1.useRef();
    var _c = __read(react_1.useState(hooks_1.hasNativeLazyLoadSupport()), 2), isLoading = _c[0], toggleIsLoading = _c[1];
    var _d = __read(react_1.useState(false), 2), isLoaded = _d[0], toggleIsLoaded = _d[1];
    if (!global.GATSBY___IMAGE && !hasShownWarning) {
        hasShownWarning = true;
        console.warn("[gatsby-plugin-image] You're missing out on some cool performance features. Please add \"gatsby-plugin-image\" to your gatsby-config.js");
    }
    var _e = hooks_1.getWrapperProps(width, height, layout), wStyle = _e.style, wClass = _e.className, wrapperProps = __rest(_e, ["style", "className"]);
    react_1.useEffect(function () {
        if (root.current) {
            var hasSSRHtml_1 = root.current.querySelector("[data-gatsby-image-ssr]");
            // when SSR and native lazyload is supported we'll do nothing ;)
            if (hooks_1.hasNativeLazyLoadSupport() && hasSSRHtml_1 && global.GATSBY___IMAGE) {
                onStartLoad === null || onStartLoad === void 0 ? void 0 : onStartLoad({ wasCached: false });
                if (hasSSRHtml_1.complete) {
                    customOnLoad === null || customOnLoad === void 0 ? void 0 : customOnLoad();
                    hooks_1.storeImageloaded(JSON.stringify(images));
                }
                hasSSRHtml_1.addEventListener("load", function onLoad() {
                    hasSSRHtml_1.removeEventListener("load", onLoad);
                    customOnLoad === null || customOnLoad === void 0 ? void 0 : customOnLoad();
                    hooks_1.storeImageloaded(JSON.stringify(images));
                });
                return undefined;
            }
            // Fallback to custom lazy loading (intersection observer)
            Promise.resolve().then(function () { return __importStar(require("./intersection-observer")); }).then(function (_a) {
                var createIntersectionObserver = _a.createIntersectionObserver;
                var intersectionObserver = createIntersectionObserver(function () {
                    if (root.current) {
                        onStartLoad === null || onStartLoad === void 0 ? void 0 : onStartLoad({ wasCached: false });
                        toggleIsLoading(true);
                    }
                });
                if (root.current) {
                    unobserveRef.current = intersectionObserver(root);
                }
            });
        }
        return function () {
            if (unobserveRef.current) {
                unobserveRef.current(root);
                // on unmount, make sure we cleanup
                if (hydrated.current && lazyHydrator.current) {
                    lazyHydrator.current();
                }
            }
        };
    }, []);
    react_1.useEffect(function () {
        if (root.current) {
            var hasSSRHtml = root.current.querySelector("[data-gatsby-image-ssr]");
            // On first server hydration do nothing
            if (hooks_1.hasNativeLazyLoadSupport() && hasSSRHtml && !hydrated.current) {
                hydrated.current = true;
                return;
            }
            // When no ssrHtml is found (develop) we should force render instead of hydrate
            if (!hasSSRHtml) {
                hydrated.current = true;
            }
            Promise.resolve().then(function () { return __importStar(require("./lazy-hydrate")); }).then(function (_a) {
                var lazyHydrate = _a.lazyHydrate;
                lazyHydrator.current = lazyHydrate(__assign({ image: image,
                    isLoading: isLoading,
                    isLoaded: isLoaded, toggleIsLoaded: function () {
                        customOnLoad === null || customOnLoad === void 0 ? void 0 : customOnLoad();
                        toggleIsLoaded(true);
                    }, ref: ref }, props), root, hydrated);
            });
        }
    }, [
        width,
        height,
        layout,
        images,
        isLoading,
        isLoaded,
        toggleIsLoaded,
        ref,
        props,
    ]);
    var sizer = layout_wrapper_1.getSizer(layout, width, height);
    return (react_1["default"].createElement(Type, __assign({}, wrapperProps, { style: __assign(__assign(__assign({}, wStyle), style), { backgroundColor: backgroundColor }), className: "" + wClass + (className ? " " + className : ""), ref: root, dangerouslySetInnerHTML: {
            __html: sizer
        }, suppressHydrationWarning: true })));
};
exports.GatsbyImage = function GatsbyImage(props) {
    return react_1["default"].createElement(exports.GatsbyImageHydrator, __assign({}, props));
};
exports.GatsbyImage.displayName = "GatsbyImage";
