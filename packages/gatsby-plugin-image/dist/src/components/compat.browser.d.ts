import { FunctionComponent, ComponentType, ElementType } from "react";
import { GatsbyImageProps } from "./gatsby-image.browser";
export interface ICompatProps {
    backgroundColor?: string | true;
    critical?: boolean;
    Tag?: ElementType;
    fixed?: {
        base64?: string;
        tracedSVG?: string;
        width: number;
        height: number;
        src: string;
        srcSet: string;
        srcWebp?: string;
        srcSetWebp?: string;
    };
    fluid?: {
        base64?: string;
        tracedSVG?: string;
        aspectRatio: number;
        src: string;
        srcSet: string;
        srcWebp?: string;
        srcSetWebp?: string;
        maxWidth?: number;
        maxHeight?: number;
        sizes?: string;
    };
}
export declare function _createCompatLayer(Component: ComponentType<GatsbyImageProps>): FunctionComponent<ICompatProps>;
export declare const GatsbyImage: FunctionComponent<ICompatProps>;
//# sourceMappingURL=compat.browser.d.ts.map