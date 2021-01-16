import React, { FunctionComponent } from "react";
import { GatsbyImageProps, IGatsbyImageData } from "./gatsby-image.browser";
import PropTypes from "prop-types";
import { ImageFormat, Layout, Fit } from "../image-utils";
export interface IStaticImageProps extends Omit<GatsbyImageProps, "image"> {
    src: string;
    layout?: Layout;
    formats?: Array<ImageFormat>;
    placeholder?: "tracedSVG" | "dominantColor" | "blurred" | "none";
    tracedSVGOptions?: Record<string, unknown>;
    width?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;
    sizes?: string;
    quality?: number;
    transformOptions?: {
        fit?: Fit;
    };
    jpgOptions?: Record<string, unknown>;
    pngOptions?: Record<string, unknown>;
    webpOptions?: Record<string, unknown>;
    avifOptions?: Record<string, unknown>;
    blurredOptions?: Record<string, unknown>;
}
interface IPrivateProps {
    __imageData?: IGatsbyImageData;
    __error?: string;
}
export declare function _getStaticImage(GatsbyImage: FunctionComponent<GatsbyImageProps>): React.FC<IStaticImageProps & IPrivateProps>;
declare const StaticImage: React.FC<IStaticImageProps & IPrivateProps>;
export declare const propTypes: {
    src: PropTypes.Validator<string>;
    alt: PropTypes.Validator<string>;
    width: PropTypes.Validator<number>;
    height: PropTypes.Validator<number>;
    maxHeight: PropTypes.Validator<number>;
    maxWidth: PropTypes.Validator<number>;
    sizes: PropTypes.Requireable<string>;
    layout: (props: IStaticImageProps & IPrivateProps) => Error | undefined;
};
export { StaticImage };
//# sourceMappingURL=static-image.server.d.ts.map