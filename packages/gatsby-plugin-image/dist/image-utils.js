"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
exports.getDimensionsAndAspectRatio = exports.fluidImageSizes = exports.fixedImageSizes = exports.calculateImageSizes = exports.generateImageData = exports.formatFromFilename = exports.getSrcSet = exports.getSizes = void 0;
/* eslint-disable no-unused-expressions */
var common_tags_1 = require("common-tags");
var DEFAULT_PIXEL_DENSITIES = [0.25, 0.5, 1, 2];
var DEFAULT_FLUID_WIDTH = 800;
var DEFAULT_FIXED_WIDTH = 400;
var warnForIgnoredParameters = function (layout, parameters, filepath, reporter) {
    var ignoredParams = Object.entries(parameters).filter(function (_a) {
        var _b = __read(_a, 2), _ = _b[0], value = _b[1];
        return Boolean(value);
    });
    if (ignoredParams.length) {
        reporter.warn("The following provided parameter(s): " + ignoredParams
            .map(function (param) { return param.join(": "); })
            .join(", ") + " for the image at " + filepath + " are ignored in " + layout + " image layouts.");
    }
    return;
};
var warn = function (message) { return console.warn(message); };
var sortNumeric = function (a, b) { return a - b; };
exports.getSizes = function (width, layout) {
    switch (layout) {
        // If screen is wider than the max size, image width is the max size,
        // otherwise it's the width of the screen
        case "constrained":
            return "(min-width: " + width + "px) " + width + "px, 100vw";
        // Image is always the same width, whatever the size of the screen
        case "fixed":
            return width + "px";
        // Image is always the width of the screen
        case "fluid":
            return "100vw";
        default:
            return undefined;
    }
};
exports.getSrcSet = function (images) {
    return images.map(function (image) { return image.src + " " + image.width + "w"; }).join(",\n");
};
function formatFromFilename(filename) {
    var dot = filename.lastIndexOf(".");
    if (dot !== -1) {
        var ext = filename.substr(dot + 1);
        if (ext === "jpeg") {
            return "jpg";
        }
        if (ext.length === 3 || ext.length === 4) {
            return ext;
        }
    }
    return undefined;
}
exports.formatFromFilename = formatFromFilename;
function generateImageData(args) {
    var pluginName = args.pluginName, sourceMetadata = args.sourceMetadata, generateImageSource = args.generateImageSource, _a = args.layout, layout = _a === void 0 ? "constrained" : _a, fit = args.fit, options = args.options, width = args.width, maxWidth = args.maxWidth, height = args.height, maxHeight = args.maxHeight, filename = args.filename, _b = args.reporter, reporter = _b === void 0 ? { warn: warn } : _b;
    if (!pluginName) {
        reporter.warn("[gatsby-plugin-image] \"generateImageData\" was not passed a plugin name");
    }
    if (typeof generateImageSource !== "function") {
        throw new Error("generateImageSource must be a function");
    }
    if (!sourceMetadata || (!sourceMetadata.width && !sourceMetadata.height)) {
        // No metadata means we let the CDN handle max size etc, aspect ratio etc
        sourceMetadata = {
            width: width || maxWidth,
            height: height || maxHeight,
            format: formatFromFilename(filename)
        };
    }
    else if (!sourceMetadata.format) {
        sourceMetadata.format = formatFromFilename(filename);
    }
    //
    var formats = new Set(args.formats || ["auto", "webp"]);
    if (formats.size === 0 || formats.has("auto") || formats.has("")) {
        formats["delete"]("auto");
        formats["delete"]("");
        formats.add(sourceMetadata.format);
    }
    if (formats.has("jpg") && formats.has("png")) {
        reporter.warn("[" + pluginName + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead");
        if (sourceMetadata.format === "jpg") {
            formats["delete"]("png");
        }
        else {
            formats["delete"]("jpg");
        }
    }
    var imageSizes = calculateImageSizes(__assign(__assign({}, args), { sourceMetadata: sourceMetadata }));
    var result = {
        sources: []
    };
    var sizes = args.sizes;
    if (!sizes) {
        sizes = exports.getSizes(imageSizes.presentationWidth, layout);
    }
    formats.forEach(function (format) {
        var _a;
        var images = imageSizes.sizes
            .map(function (size) {
            var imageSrc = generateImageSource(filename, size, Math.round(size / imageSizes.aspectRatio), format, fit, options);
            if (!(imageSrc === null || imageSrc === void 0 ? void 0 : imageSrc.width) ||
                !imageSrc.height ||
                !imageSrc.src ||
                !imageSrc.format) {
                reporter.warn("[" + pluginName + "] The resolver for image " + filename + " returned an invalid value.");
                return undefined;
            }
            return imageSrc;
        })
            .filter(Boolean);
        if (format === "jpg" || format === "png") {
            var unscaled = images.find(function (img) { return img.width === imageSizes.unscaledWidth; }) || images[0];
            if (unscaled) {
                result.fallback = {
                    src: unscaled.src,
                    srcSet: exports.getSrcSet(images),
                    sizes: sizes
                };
            }
        }
        else {
            (_a = result.sources) === null || _a === void 0 ? void 0 : _a.push({
                srcSet: exports.getSrcSet(images),
                sizes: sizes,
                type: "image/" + format
            });
        }
    });
    var imageProps = { images: result, layout: layout };
    switch (layout) {
        case "fixed":
            imageProps.width = imageSizes.presentationWidth;
            imageProps.height = imageSizes.presentationHeight;
            break;
        case "fluid":
            imageProps.width = 1;
            imageProps.height = 1 / imageSizes.aspectRatio;
            break;
        case "constrained":
            imageProps.width = args.maxWidth || imageSizes.presentationWidth || 1;
            imageProps.height = (imageProps.width || 1) / imageSizes.aspectRatio;
    }
    return imageProps;
}
exports.generateImageData = generateImageData;
var dedupeAndSortDensities = function (values) {
    return Array.from(new Set(__spread([1], values))).sort(sortNumeric);
};
function calculateImageSizes(args) {
    var width = args.width, maxWidth = args.maxWidth, height = args.height, maxHeight = args.maxHeight, filename = args.filename, _a = args.layout, layout = _a === void 0 ? "constrained" : _a, imgDimensions = args.sourceMetadata, _b = args.reporter, reporter = _b === void 0 ? { warn: warn } : _b;
    // check that all dimensions provided are positive
    var userDimensions = { width: width, maxWidth: maxWidth, height: height, maxHeight: maxHeight };
    var erroneousUserDimensions = Object.entries(userDimensions).filter(function (_a) {
        var _b = __read(_a, 2), _ = _b[0], size = _b[1];
        return typeof size === "number" && size < 1;
    });
    if (erroneousUserDimensions.length) {
        throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + erroneousUserDimensions
            .map(function (dim) { return dim.join(": "); })
            .join(", "));
    }
    if (layout === "fixed") {
        return fixedImageSizes(args);
    }
    else if (layout === "fluid" || layout === "constrained") {
        return fluidImageSizes(args);
    }
    else {
        reporter.warn("No valid layout was provided for the image at " + filename + ". Valid image layouts are fixed, fluid, and constrained.");
        return {
            sizes: [imgDimensions.width],
            presentationWidth: imgDimensions.width,
            presentationHeight: imgDimensions.height,
            aspectRatio: imgDimensions.width / imgDimensions.height,
            unscaledWidth: imgDimensions.width
        };
    }
}
exports.calculateImageSizes = calculateImageSizes;
function fixedImageSizes(_a) {
    var filename = _a.filename, imgDimensions = _a.sourceMetadata, width = _a.width, maxWidth = _a.maxWidth, height = _a.height, maxHeight = _a.maxHeight, _b = _a.fit, fit = _b === void 0 ? "cover" : _b, _c = _a.outputPixelDensities, outputPixelDensities = _c === void 0 ? DEFAULT_PIXEL_DENSITIES : _c, _d = _a.reporter, reporter = _d === void 0 ? { warn: warn } : _d;
    var aspectRatio = imgDimensions.width / imgDimensions.height;
    // Sort, dedupe and ensure there's a 1
    var densities = dedupeAndSortDensities(outputPixelDensities);
    warnForIgnoredParameters("fixed", { maxWidth: maxWidth, maxHeight: maxHeight }, filename, reporter);
    // If both are provided then we need to check the fit
    if (width && height) {
        var calculated = getDimensionsAndAspectRatio(imgDimensions, {
            width: width,
            height: height,
            fit: fit
        });
        width = calculated.width;
        height = calculated.height;
        aspectRatio = calculated.aspectRatio;
    }
    if (!width) {
        if (!height) {
            width = DEFAULT_FIXED_WIDTH;
        }
        else {
            width = Math.round(height * aspectRatio);
        }
    }
    else if (!height) {
        height = Math.round(width / aspectRatio);
    }
    var originalWidth = width; // will use this for presentationWidth, don't want to lose it
    var isTopSizeOverriden = imgDimensions.width < width || imgDimensions.height < height;
    // If the image is smaller than requested, warn the user that it's being processed as such
    // print out this message with the necessary information before we overwrite it for sizing
    if (isTopSizeOverriden) {
        var fixedDimension = imgDimensions.width < width ? "width" : "height";
        reporter.warn(common_tags_1.stripIndent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    The requested ", " \"", "px\" for the image ", " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], ["\n    The requested ", " \"",
            "px\" for the image ", " was larger than the actual image ", " of ",
            "px. If possible, replace the current image with a larger one."])), fixedDimension, fixedDimension === "width" ? width : height, filename, fixedDimension, imgDimensions[fixedDimension]));
        if (fixedDimension === "width") {
            width = imgDimensions.width;
            height = Math.round(width / aspectRatio);
        }
        else {
            height = imgDimensions.height;
            width = height * aspectRatio;
        }
    }
    var sizes = densities
        .filter(function (size) { return size >= 1; }) // remove smaller densities because fixed images don't need them
        .map(function (density) { return Math.round(density * width); })
        .filter(function (size) { return size <= imgDimensions.width; });
    return {
        sizes: sizes,
        aspectRatio: aspectRatio,
        presentationWidth: originalWidth,
        presentationHeight: Math.round(originalWidth / aspectRatio),
        unscaledWidth: width
    };
}
exports.fixedImageSizes = fixedImageSizes;
function fluidImageSizes(_a) {
    var filename = _a.filename, imgDimensions = _a.sourceMetadata, width = _a.width, maxWidth = _a.maxWidth, height = _a.height, _b = _a.fit, fit = _b === void 0 ? "cover" : _b, maxHeight = _a.maxHeight, _c = _a.outputPixelDensities, outputPixelDensities = _c === void 0 ? DEFAULT_PIXEL_DENSITIES : _c, _d = _a.reporter, reporter = _d === void 0 ? { warn: warn } : _d;
    // warn if ignored parameters are passed in
    warnForIgnoredParameters("fluid and constrained", { width: width, height: height }, filename, reporter);
    var sizes;
    var aspectRatio = imgDimensions.width / imgDimensions.height;
    // Sort, dedupe and ensure there's a 1
    var densities = dedupeAndSortDensities(outputPixelDensities);
    // If both are provided then we need to check the fit
    if (maxWidth && maxHeight) {
        var calculated = getDimensionsAndAspectRatio(imgDimensions, {
            width: maxWidth,
            height: maxHeight,
            fit: fit
        });
        maxWidth = calculated.width;
        maxHeight = calculated.height;
        aspectRatio = calculated.aspectRatio;
    }
    // Case 1: maxWidth of maxHeight were passed in, make sure it isn't larger than the actual image
    maxWidth = maxWidth && Math.min(maxWidth, imgDimensions.width);
    maxHeight = maxHeight && Math.min(maxHeight, imgDimensions.height);
    // Case 2: neither maxWidth or maxHeight were passed in, use default size
    if (!maxWidth && !maxHeight) {
        maxWidth = Math.min(DEFAULT_FLUID_WIDTH, imgDimensions.width);
        maxHeight = maxWidth / aspectRatio;
    }
    // if it still hasn't been found, calculate maxWidth from the derived maxHeight.
    // TS isn't smart enough to realise the type for maxHeight has been narrowed here
    if (!maxWidth) {
        maxWidth = maxHeight * aspectRatio;
    }
    var originalMaxWidth = maxWidth;
    var isTopSizeOverriden = imgDimensions.width < maxWidth ||
        imgDimensions.height < maxHeight;
    if (isTopSizeOverriden) {
        maxWidth = imgDimensions.width;
        maxHeight = imgDimensions.height;
    }
    maxWidth = Math.round(maxWidth);
    sizes = densities.map(function (density) { return Math.round(density * maxWidth); });
    sizes = sizes.filter(function (size) { return size <= imgDimensions.width; });
    // ensure that the size passed in is included in the final output
    if (!sizes.includes(maxWidth)) {
        sizes.push(maxWidth);
    }
    sizes = sizes.sort(sortNumeric);
    return {
        sizes: sizes,
        aspectRatio: aspectRatio,
        presentationWidth: originalMaxWidth,
        presentationHeight: Math.round(originalMaxWidth / aspectRatio),
        unscaledWidth: maxWidth
    };
}
exports.fluidImageSizes = fluidImageSizes;
function getDimensionsAndAspectRatio(dimensions, options) {
    // Calculate the eventual width/height of the image.
    var imageAspectRatio = dimensions.width / dimensions.height;
    var width = options.width;
    var height = options.height;
    switch (options.fit) {
        case "fill": {
            width = options.width ? options.width : dimensions.width;
            height = options.height ? options.height : dimensions.height;
            break;
        }
        case "inside": {
            var widthOption = options.width
                ? options.width
                : Number.MAX_SAFE_INTEGER;
            var heightOption = options.height
                ? options.height
                : Number.MAX_SAFE_INTEGER;
            width = Math.min(widthOption, Math.round(heightOption * imageAspectRatio));
            height = Math.min(heightOption, Math.round(widthOption / imageAspectRatio));
            break;
        }
        case "outside": {
            var widthOption = options.width ? options.width : 0;
            var heightOption = options.height ? options.height : 0;
            width = Math.max(widthOption, Math.round(heightOption * imageAspectRatio));
            height = Math.max(heightOption, Math.round(widthOption / imageAspectRatio));
            break;
        }
        default: {
            if (options.width && !options.height) {
                width = options.width;
                height = Math.round(options.width / imageAspectRatio);
            }
            if (options.height && !options.width) {
                width = Math.round(options.height * imageAspectRatio);
                height = options.height;
            }
        }
    }
    return {
        width: width,
        height: height,
        aspectRatio: width / height
    };
}
exports.getDimensionsAndAspectRatio = getDimensionsAndAspectRatio;
var templateObject_1;
