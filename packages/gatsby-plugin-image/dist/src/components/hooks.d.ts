import { CSSProperties, HTMLAttributes, ImgHTMLAttributes, SetStateAction, Dispatch } from "react";
import { Node } from "gatsby";
import { PlaceholderProps } from "./placeholder";
import { MainImageProps } from "./main-image";
import type { IGatsbyImageData } from "./gatsby-image.browser";
import { IGatsbyImageHelperArgs, Layout } from "../image-utils";
export declare const hasNativeLazyLoadSupport: () => boolean;
export declare function storeImageloaded(cacheKey?: string): void;
export declare function hasImageLoaded(cacheKey: string): boolean;
export declare type FileNode = Node & {
    childImageSharp?: Node & {
        gatsbyImageData?: IGatsbyImageData;
    };
};
export declare const getImage: (file: FileNode) => IGatsbyImageData | undefined;
export declare const getSrc: (file: FileNode) => string | undefined;
export declare function getWrapperProps(width: number, height: number, layout: Layout): Pick<HTMLAttributes<HTMLElement>, "className" | "style"> & {
    "data-gatsby-image-wrapper": string;
};
export declare function useGatsbyImage({ pluginName, ...args }: IGatsbyImageHelperArgs): IGatsbyImageData;
export declare function getMainProps(isLoading: boolean, isLoaded: boolean, images: any, loading?: "eager" | "lazy", toggleLoaded?: any, cacheKey?: string, ref?: any, style?: CSSProperties): MainImageProps;
export declare type PlaceholderImageAttrs = ImgHTMLAttributes<HTMLImageElement> & Pick<PlaceholderProps, "sources" | "fallback"> & {
    "data-placeholder-image"?: string;
};
export declare function getPlaceholderProps(placeholder: PlaceholderImageAttrs | undefined, isLoaded: boolean, layout: Layout, width?: number, height?: number, backgroundColor?: string): PlaceholderImageAttrs;
export declare function useImageLoaded(cacheKey: string, loading: "lazy" | "eager", ref: any): {
    isLoaded: boolean;
    isLoading: boolean;
    toggleLoaded: Dispatch<SetStateAction<boolean>>;
};
//# sourceMappingURL=hooks.d.ts.map