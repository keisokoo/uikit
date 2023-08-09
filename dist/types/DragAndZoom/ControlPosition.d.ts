import { OutOfBoxAll, TRANSFORM_VALUES, XY } from './types';
declare class ControlPosition {
    targetElement: HTMLElement;
    factor: number;
    minScale: number;
    maxScale: number;
    ts: {
        scale: number;
        rotate: number;
        translate: {
            x: number;
            y: number;
        };
    };
    restrictPosition?: (current: XY, targetEl: DOMRect, outOfBox: OutOfBoxAll) => XY;
    areaElement?: HTMLElement;
    restrictElement?: HTMLElement;
    beforeFire?: (target: HTMLElement) => void;
    afterFire?: (target: HTMLElement) => void;
    beforeUpdate?: (ts: TRANSFORM_VALUES) => void;
    afterUpdate?: (ts: TRANSFORM_VALUES) => void;
    constructor(targetElement: HTMLElement, configs?: {
        restrictElement?: HTMLElement;
        areaElement?: HTMLElement;
        factor?: number;
        minScale?: number;
        maxScale?: number;
        beforeFire?: (target: HTMLElement) => void;
        afterFire?: (target: HTMLElement) => void;
        beforeUpdate?: (ts: TRANSFORM_VALUES) => void;
        afterUpdate?: (ts: TRANSFORM_VALUES) => void;
        restrictPosition?: (current: XY, targetEl: DOMRect, outOfBox: OutOfBoxAll) => XY;
    });
    areaRestrictions: (currentPosition: {
        x: number;
        y: number;
    }, option?: {
        type?: 'inner' | 'outer';
        threshold?: number;
        disabled?: {
            x?: boolean;
            y?: boolean;
        };
        restrictElement?: HTMLElement;
    }) => {
        x: number;
        y: number;
    };
    restrictXY: (currentPosition: {
        x: number;
        y: number;
    }) => XY;
    getPosition: (el?: HTMLElement) => TRANSFORM_VALUES;
    updatePosition: (value: TRANSFORM_VALUES | ((value: TRANSFORM_VALUES) => TRANSFORM_VALUES)) => void;
    private compareXY;
    setTransform: () => void;
    toggleRotation: (value: number) => 0 | 180 | 90 | 270;
    onWheel: (event: React.WheelEvent | WheelEvent) => void;
}
export default ControlPosition;
