import Drag from '../Drag';
declare class TouchDragZoom extends Drag {
    onTouch: (event: TouchEvent | React.TouchEvent) => void;
    private onMove;
    private onEnd;
}
export default TouchDragZoom;
