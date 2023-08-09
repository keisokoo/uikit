import Drag from './Drag';
declare class DragZoom extends Drag {
    on: (event: TouchEvent | MouseEvent | React.TouchEvent | React.MouseEvent) => void;
    private onMove;
    private onEnd;
}
export default DragZoom;
