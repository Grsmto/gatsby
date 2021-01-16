"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.writeImage = exports.writeImages = exports.isRemoteURL = exports.createImageNode = void 0;
var PluginSharp = __importStar(require("gatsby-plugin-sharp"));
var create_file_node_1 = require("gatsby-source-filesystem/create-file-node");
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var watcher_1 = require("./watcher");
var gatsby_source_filesystem_1 = require("gatsby-source-filesystem");
var supportedTypes = new Set(["image/png", "image/jpeg", "image/webp"]);
function createImageNode(_a) {
    var fullPath = _a.fullPath, createNodeId = _a.createNodeId, createNode = _a.createNode;
    return __awaiter(this, void 0, void 0, function () {
        var file;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!fs_extra_1["default"].existsSync(fullPath)) {
                        return [2 /*return*/, undefined];
                    }
                    return [4 /*yield*/, create_file_node_1.createFileNode(fullPath, createNodeId, {})];
                case 1:
                    file = _b.sent();
                    if (!file) {
                        return [2 /*return*/, undefined];
                    }
                    file.internal.type = "StaticImage";
                    createNode(file);
                    return [2 /*return*/, file];
            }
        });
    });
}
exports.createImageNode = createImageNode;
exports.isRemoteURL = function (url) {
    return url.startsWith("http://") || url.startsWith("https://");
};
function writeImages(_a) {
    var images = _a.images, pathPrefix = _a.pathPrefix, cacheDir = _a.cacheDir, reporter = _a.reporter, cache = _a.cache, sourceDir = _a.sourceDir, createNodeId = _a.createNodeId, createNode = _a.createNode, store = _a.store;
    return __awaiter(this, void 0, void 0, function () {
        var promises;
        var _this = this;
        return __generator(this, function (_b) {
            promises = __spread(images.entries()).map(function (_a) { var _b, hash, _c, src, args; return __awaiter(_this, void 0, void 0, function () {
                var file, fullPath, err_1, cacheKey, imageRefs, cacheFilename;
                var _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _d = _a, _e = __read(_d, 2), hash = _e[0], _c = _e[1], _d, (src = _c.src, _c), args = __rest(_c, ["src"]);
                            if (!(process.env.GATSBY_EXPERIMENTAL_REMOTE_IMAGES && exports.isRemoteURL(src))) return [3 /*break*/, 5];
                            _f.label = 1;
                        case 1:
                            _f.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, gatsby_source_filesystem_1.createRemoteFileNode({
                                    url: src,
                                    store: store,
                                    cache: cache,
                                    createNode: createNode,
                                    createNodeId: createNodeId,
                                    reporter: reporter
                                })];
                        case 2:
                            file = _f.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _f.sent();
                            reporter.error("Error loading image " + src);
                            return [2 /*return*/];
                        case 4:
                            if (!file.internal.mediaType ||
                                !supportedTypes.has(file.internal.mediaType)) {
                                reporter.error("The file loaded from " + src + " is not a valid image type. Found \"" + (file.internal.mediaType || "unknown") + "\"");
                                return [2 /*return*/];
                            }
                            return [3 /*break*/, 7];
                        case 5:
                            fullPath = path_1["default"].resolve(sourceDir, src);
                            if (!fs_extra_1["default"].existsSync(fullPath)) {
                                reporter.warn("Could not find image \"" + src + "\". Looked for " + fullPath);
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, create_file_node_1.createFileNode(fullPath, createNodeId, {})];
                        case 6:
                            file = _f.sent();
                            _f.label = 7;
                        case 7:
                            if (!file) {
                                reporter.warn("Could not create node for image " + src);
                                return [2 /*return*/];
                            }
                            // We need our own type, because `File` belongs to the filesystem plugin
                            file.internal.type = "StaticImage";
                            delete file.internal.owner;
                            createNode(file);
                            cacheKey = "ref-" + file.id;
                            return [4 /*yield*/, cache.get(cacheKey)];
                        case 8:
                            imageRefs = (_f.sent()) || {};
                            cacheFilename = path_1["default"].join(cacheDir, hash + ".json");
                            imageRefs[hash] = {
                                contentDigest: (_b = file.internal) === null || _b === void 0 ? void 0 : _b.contentDigest,
                                args: args,
                                cacheFilename: cacheFilename
                            };
                            return [4 /*yield*/, cache.set(cacheKey, imageRefs)];
                        case 9:
                            _f.sent();
                            return [4 /*yield*/, writeImage(file, args, pathPrefix, reporter, cache, cacheFilename)];
                        case 10:
                            _f.sent();
                            if (fullPath && process.env.NODE_ENV === "development") {
                                // Watch the source image for changes
                                watcher_1.watchImage({
                                    createNode: createNode,
                                    createNodeId: createNodeId,
                                    fullPath: fullPath,
                                    pathPrefix: pathPrefix,
                                    cache: cache,
                                    reporter: reporter
                                });
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/, Promise.all(promises).then(function () { })];
        });
    });
}
exports.writeImages = writeImages;
function writeImage(file, args, pathPrefix, reporter, cache, filename) {
    return __awaiter(this, void 0, void 0, function () {
        var options, sharpData, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    options = { file: file, args: args, pathPrefix: pathPrefix, reporter: reporter, cache: cache };
                    if (!PluginSharp.generateImageData) {
                        reporter.warn("Please upgrade gatsby-plugin-sharp");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, PluginSharp.generateImageData(options)];
                case 1:
                    sharpData = _a.sent();
                    if (!sharpData) return [3 /*break*/, 3];
                    // Write the image properties to the cache
                    return [4 /*yield*/, fs_extra_1["default"].writeJSON(filename, sharpData)];
                case 2:
                    // Write the image properties to the cache
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    reporter.warn("Could not process image " + file.relativePath);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    reporter.warn("Error processing image " + file.relativePath + ". \n" + e_1.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.writeImage = writeImage;
