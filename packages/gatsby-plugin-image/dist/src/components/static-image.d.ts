/// <reference types="react" />
import { IGatsbyImageData } from "./gatsby-image.browser";
import { IStaticImageProps } from "./static-image.server";
interface IPrivateProps {
    __imageData?: IGatsbyImageData;
    __error?: string;
}
declare const StaticImage: React.FC<IStaticImageProps & IPrivateProps>;
export { StaticImage };
//# sourceMappingURL=static-image.d.ts.map