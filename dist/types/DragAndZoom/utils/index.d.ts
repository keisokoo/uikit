/// <reference types="react" />
import { MAX_SIZE, OutOfBox, TRANSFORM_VALUES, XY } from '../types';
export declare const isTransformValues: (value: any) => value is TRANSFORM_VALUES;
export declare const handleGetCurrentPoint: (targetElement: HTMLElement, point: number, scale: number, type: 'left' | 'top') => number;
export declare const handleGetBeforeTargetSize: (targetElement: HTMLElement, scale: number) => {
    w: number;
    h: number;
};
export declare const handleGetPointBasedOnFactor: (point: number, factor: number, size: number) => number;
export declare const isTouchEvent: (event: any) => event is TouchEvent | import("react").TouchEvent<Element>;
export declare const handleGetRectSize: (targetElement: HTMLElement, option: {
    type?: 'inner' | 'outer';
    threshold?: number;
    areaElement?: HTMLElement;
    restrictElement?: HTMLElement;
}) => {
    x: number;
    y: number;
    offset: {
        top: number;
        left: number;
        right: number;
        bottom: number;
        width: number;
        height: number;
    };
};
export declare const handleCheckBoxLimit: (currentPosition: XY, maxSize: MAX_SIZE, type?: string) => OutOfBox;
export declare const handleDecompose2dMatrix: (mat: DOMMatrix) => TRANSFORM_VALUES;
