import { RefObject } from "react";
declare type Unobserver = () => void;
export declare function createIntersectionObserver(callback: () => void): (element: RefObject<HTMLElement | undefined>) => Unobserver;
export {};
//# sourceMappingURL=intersection-observer.d.ts.map