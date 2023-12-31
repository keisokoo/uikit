import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { DragOrPinchZoom } from '../../src'
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  & > * {
    box-sizing: border-box;
  }
  cursor: grab;
`
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  touch-action: none;
  /* transform-origin: 0 0; */

  display: flex;
  align-items: center;
  justify-content: center;
`
const Target = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ccc;
  position: relative;
  padding: 0 4px;
  box-sizing: border-box;
  h1 {
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    padding: 16px;
    background-color: #ffff00;
    color: #000;
    margin: 10px auto;
  }
  h2 {
    color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    box-sizing: border-box;
    width: calc(100% - 24px);
    padding: 16px;
    background-color: #1aff00;
    margin: 0px auto;
  }
`
const CloseButton = styled.button`
  position: fixed;
  right: 32px;
  top: 32px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #ccc;
  color: #000;
  font-size: 14px;
  border-radius: 50%;
`
const RotateTestButton = styled.button`
  position: fixed;
  cursor: pointer;
  right: 32px;
  bottom: 32px;
  width: 32px;
  height: 32px;
  background-color: #ccc;
  color: #000;
  border-radius: 50%;
`
interface DragSampleProps {
  onClose: () => void
}
function DragSample({ onClose }: DragSampleProps) {
  const dragRef = useRef() as MutableRefObject<HTMLDivElement>
  const eventRef = useRef() as MutableRefObject<HTMLDivElement>
  const boxRef = useRef() as MutableRefObject<HTMLDivElement>
  const headerRef = useRef() as MutableRefObject<HTMLDivElement>
  const anotherRef = useRef() as MutableRefObject<HTMLDivElement>

  const [rotation, set_rotation] = useState<number>(0)
  const [ctr, set_ctr] = useState<DragOrPinchZoom>()
  useEffect(() => {
    const cc: DragOrPinchZoom = new DragOrPinchZoom(boxRef.current, {
      areaElement: dragRef.current,
      restrictElement: anotherRef.current,
      restrictPosition: (currentXY, el, outOfBox) => {
        return cc.areaRestrictions(currentXY, {
          type: 'inner',
          threshold: 0 * cc.ts.scale,
        })
      },
      beforeFire() {
        eventRef.current.style.cursor = 'grabbing'
      },
      afterFire() {
        eventRef.current.style.cursor = ''
      },
    })
    set_ctr(cc)
    window.addEventListener('resize', () => {
      cc.setTransform()
    })
  }, [])
  return (
    <Container ref={eventRef}>
      <Wrap
        ref={dragRef}
        onWheel={ctr?.onWheel}
        tabIndex={0}
        onTouchStart={(e) => {
          ctr?.onPinchStart(e)
          ctr?.onDragStart(e)
        }}
        onMouseDown={ctr?.onDragStart}
      >
        <Target ref={boxRef}>
          <h1 ref={headerRef}>회전({rotation})</h1>
          <h2 ref={anotherRef}>벗어나지 않음</h2>
        </Target>
      </Wrap>
      <CloseButton onClick={onClose}>닫기</CloseButton>
      <RotateTestButton
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (ctr) {
            let ts = ctr.getPosition()
            ts.rotate = ctr.toggleRotation(ts.rotate)
            set_rotation(ts.rotate)
            ctr.updatePosition((ts) => {
              ts.rotate = ctr.toggleRotation(ts.rotate)
              return ts
            })
          }
        }}
      >
        R
      </RotateTestButton>
    </Container>
  )
}

export default DragSample
