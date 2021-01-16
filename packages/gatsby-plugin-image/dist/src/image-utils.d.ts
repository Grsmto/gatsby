import { IGatsbyImageData } from ".";
export declare type Fit = "cover" | "fill" | "inside" | "outside" | "contain";
export declare type Layout = "fixed" | "fluid" | "constrained";
export declare type ImageFormat = "jpg" | "png" | "webp" | "avif" | "auto" | "";
/**
 * The minimal required reporter, as we don't want to import it from gatsby-cli
 */
export interface IReporter {
    warn(message: string): void;
}
export interface IImageSizeArgs {
    width?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;
    layout?: Layout;
    filename: string;
    outputPixelDensities?: Array<number>;
    fit?: Fit;
    reporter?: IReporter;
    sourceMetadata: {
        width: number;
        height: number;
    };
}
export interface IImageSizes {
    sizes: Array<number>;
    presentationWidth: number;
    presentationHeight: number;
    aspectRatio: number;
    unscaledWidth: number;
}
export interface IImage {
    src: string;
    width: number;
    height: number;
    format: ImageFormat;
}
export interface IGatsbyImageHelperArgs {
    pluginName: string;
    generateImageSource: (filename: string, width: number, height: number, format: ImageFormat, fit?: Fit, options?: Record<string, unknown>) => IImage;
    layout?: Layout;
    formats?: Array<ImageFormat>;
    filename: string;
    placeholderURL?: ((args: IGatsbyImageHelperArgs) => string | undefined) | string;
    width?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;
    sizes?: string;
    reporter?: IReporter;
    sourceMetadata?: {
        width: number;
        height: number;
        format: ImageFormat;
    };
    fit?: Fit;
    options?: Record<string, unknown>;
}
export declare const getSizes: (width: number, layout: Layout) => string | undefined;
export declare const getSrcSet: (images: Array<IImage>) => string;
export declare function formatFromFilename(filename: string): ImageFormat | undefined;
export declare function generateImageData(args: IGatsbyImageHelperArgs): IGatsbyImageData;
export declare function calculateImageSizes(args: IImageSizeArgs): IImageSizes;
export declare function fixedImageSizes({ filename, sourceMetadata: imgDimensions, width, maxWidth, height, maxHeight, fit, outputPixelDensities, reporter, }: IImageSizeArgs): IImageSizes;
export declare function fluidImageSizes({ filename, sourceMetadata: imgDimensions, width, maxWidth, height, fit, maxHeight, outputPixelDensities, reporter, }: IImageSizeArgs): IImageSizes;
export declare function getDimensionsAndAspectRatio(dimensions: any, options: any): {
    width: number;
    height: number;
    aspectRatio: number;
};
//# sourceMappingURL=image-utils.d.ts.map