import Drag from './Drag';
declare class DragOrPinchZoom extends Drag {
    onDragStart: (event: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent) => void;
    private onDragMove;
    private onDragEnd;
    onPinchStart: (event: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent) => void;
    private onPinchMove;
    private onPinchEnd;
}
export default DragOrPinchZoom;
