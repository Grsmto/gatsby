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
exports.__esModule = true;
exports.getGatsbyImageFieldConfig = exports.ImagePlaceholderType = exports.ImageLayoutType = exports.ImageFormatType = void 0;
var graphql_1 = require("gatsby/graphql");
var common_tags_1 = require("common-tags");
exports.ImageFormatType = new graphql_1.GraphQLEnumType({
    name: "GatsbyImageFormat",
    values: {
        NO_CHANGE: { value: "" },
        AUTO: { value: "" },
        JPG: { value: "jpg" },
        PNG: { value: "png" },
        WEBP: { value: "webp" },
        AVIF: { value: "avif" }
    }
});
exports.ImageLayoutType = new graphql_1.GraphQLEnumType({
    name: "GatsbyImageLayout",
    values: {
        FIXED: { value: "fixed" },
        FLUID: { value: "fluid" },
        CONSTRAINED: { value: "constrained" }
    }
});
exports.ImagePlaceholderType = new graphql_1.GraphQLEnumType({
    name: "GatsbyImagePlaceholder",
    values: {
        DOMINANT_COLOR: { value: "dominantColor" },
        TRACED_SVG: { value: "tracedSVG" },
        BLURRED: { value: "blurred" },
        NONE: { value: "none" }
    }
});
function getGatsbyImageFieldConfig(resolve, extraArgs) {
    return {
        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLJSON),
        args: __assign({ layout: {
                type: exports.ImageLayoutType,
                defaultValue: "fixed",
                description: common_tags_1.stripIndent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            The layout for the image.\n            FIXED: A static image sized, that does not resize according to the screen width\n            FLUID: The image resizes to fit its container. Pass a \"sizes\" option if it isn't going to be the full width of the screen. \n            CONSTRAINED: Resizes to fit its container, up to a maximum width, at which point it will remain fixed in size.\n            "], ["\n            The layout for the image.\n            FIXED: A static image sized, that does not resize according to the screen width\n            FLUID: The image resizes to fit its container. Pass a \"sizes\" option if it isn't going to be the full width of the screen. \n            CONSTRAINED: Resizes to fit its container, up to a maximum width, at which point it will remain fixed in size.\n            "])))
            }, maxWidth: {
                type: graphql_1.GraphQLInt,
                description: common_tags_1.stripIndent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            Maximum display width of generated files. \n            The actual largest image resolution will be this value multipled by the largest value in outputPixelDensities\n            This only applies when layout = FLUID or CONSTRAINED. For other layout types, use \"width\""], ["\n            Maximum display width of generated files. \n            The actual largest image resolution will be this value multipled by the largest value in outputPixelDensities\n            This only applies when layout = FLUID or CONSTRAINED. For other layout types, use \"width\""])))
            }, maxHeight: {
                type: graphql_1.GraphQLInt,
                description: common_tags_1.stripIndent(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            If set, the generated image is a maximum of this height, cropping if necessary. \n            If the image layout is \"constrained\" then the image will be limited to this height. \n            If the aspect ratio of the image is different than the source, then the image will be cropped."], ["\n            If set, the generated image is a maximum of this height, cropping if necessary. \n            If the image layout is \"constrained\" then the image will be limited to this height. \n            If the aspect ratio of the image is different than the source, then the image will be cropped."])))
            }, width: {
                type: graphql_1.GraphQLInt,
                description: common_tags_1.stripIndent(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            The display width of the generated image. \n            The actual largest image resolution will be this value multipled by the largest value in outputPixelDensities\n            Ignored if layout = FLUID or CONSTRAINED, where you should use \"maxWidth\" instead.\n            "], ["\n            The display width of the generated image. \n            The actual largest image resolution will be this value multipled by the largest value in outputPixelDensities\n            Ignored if layout = FLUID or CONSTRAINED, where you should use \"maxWidth\" instead.\n            "])))
            }, height: {
                type: graphql_1.GraphQLInt,
                description: common_tags_1.stripIndent(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            If set, the height of the generated image. If omitted, it is calculated from the supplied width, matching the aspect ratio of the source image."], ["\n            If set, the height of the generated image. If omitted, it is calculated from the supplied width, matching the aspect ratio of the source image."])))
            }, placeholder: {
                type: exports.ImagePlaceholderType,
                defaultValue: "blurred",
                description: common_tags_1.stripIndent(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            Format of generated placeholder image, displayed while the main image loads. \n            BLURRED: a blurred, low resolution image, encoded as a base64 data URI (default)\n            DOMINANT_COLOR: a solid color, calculated from the dominant color of the image. \n            TRACED_SVG: a low-resolution traced SVG of the image.\n            NONE: no placeholder. Set \"background\" to use a fixed background color."], ["\n            Format of generated placeholder image, displayed while the main image loads. \n            BLURRED: a blurred, low resolution image, encoded as a base64 data URI (default)\n            DOMINANT_COLOR: a solid color, calculated from the dominant color of the image. \n            TRACED_SVG: a low-resolution traced SVG of the image.\n            NONE: no placeholder. Set \"background\" to use a fixed background color."])))
            }, formats: {
                type: graphql_1.GraphQLList(exports.ImageFormatType),
                description: common_tags_1.stripIndent(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            The image formats to generate. Valid values are AUTO (meaning the same format as the source image), JPG, PNG, WEBP and AVIF. \n            The default value is [AUTO, WEBP], and you should rarely need to change this. Take care if you specify JPG or PNG when you do\n            not know the formats of the source images, as this could lead to unwanted results such as converting JPEGs to PNGs. Specifying \n            both PNG and JPG is not supported and will be ignored. AVIF support is currently experimental.\n        "], ["\n            The image formats to generate. Valid values are AUTO (meaning the same format as the source image), JPG, PNG, WEBP and AVIF. \n            The default value is [AUTO, WEBP], and you should rarely need to change this. Take care if you specify JPG or PNG when you do\n            not know the formats of the source images, as this could lead to unwanted results such as converting JPEGs to PNGs. Specifying \n            both PNG and JPG is not supported and will be ignored. AVIF support is currently experimental.\n        "]))),
                defaultValue: ["auto", "webp"]
            }, outputPixelDensities: {
                type: graphql_1.GraphQLList(graphql_1.GraphQLFloat),
                description: common_tags_1.stripIndent(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            A list of image pixel densities to generate. It will never generate images larger than the source, and will always include a 1x image. \n            Default is [ 1, 2 ] for fixed images, meaning 1x, 2x, 3x, and [0.25, 0.5, 1, 2] for fluid. In this case, an image with a fluid layout and width = 400 would generate images at 100, 200, 400 and 800px wide\n            "], ["\n            A list of image pixel densities to generate. It will never generate images larger than the source, and will always include a 1x image. \n            Default is [ 1, 2 ] for fixed images, meaning 1x, 2x, 3x, and [0.25, 0.5, 1, 2] for fluid. In this case, an image with a fluid layout and width = 400 would generate images at 100, 200, 400 and 800px wide\n            "])))
            }, sizes: {
                type: graphql_1.GraphQLString,
                defaultValue: "",
                description: common_tags_1.stripIndent(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            The \"sizes\" property, passed to the img tag. This describes the display size of the image. \n            This does not affect the generated images, but is used by the browser to decide which images to download. You can leave this blank for fixed images, or if the responsive image\n            container will be the full width of the screen. In these cases we will generate an appropriate value.\n        "], ["\n            The \"sizes\" property, passed to the img tag. This describes the display size of the image. \n            This does not affect the generated images, but is used by the browser to decide which images to download. You can leave this blank for fixed images, or if the responsive image\n            container will be the full width of the screen. In these cases we will generate an appropriate value.\n        "])))
            } }, extraArgs),
        resolve: resolve
    };
}
exports.getGatsbyImageFieldConfig = getGatsbyImageFieldConfig;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
