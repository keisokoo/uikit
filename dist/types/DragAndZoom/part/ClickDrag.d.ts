import Drag from '../Drag';
declare class ClickDrag extends Drag {
    onMouseDown: (event: MouseEvent | React.MouseEvent) => void;
    private onMove;
    private onEnd;
}
export default ClickDrag;
