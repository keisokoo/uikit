import ControlPosition from './ControlPosition';
declare class Drag extends ControlPosition {
    inertiaAnimationFrame: number;
    isDrag: boolean;
    isScale: boolean;
    dragged: boolean;
    threshold: number;
    startPoint: {
        x: number;
        y: number;
    };
    previousPosition: {
        x: number;
        y: number;
    };
    private maximumInertia;
    velocity: {
        x: number;
        y: number;
    };
    private deceleration;
    startDist: number;
    startScale: number;
    private capSpeed;
    dragOn: (event: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent) => void;
    pinchOn: (event: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent) => void;
    fireOn: (event: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent) => void;
    fireDrag: (x: number, y: number) => void;
    firePinch: (firstTouch: Touch | React.Touch, secondTouch: Touch | React.Touch) => void;
    fireEnd: (event: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent) => void;
    private updateInertia;
    dragFinish: () => void;
}
export default Drag;
