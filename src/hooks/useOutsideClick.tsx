import { useCallback, useEffect } from 'react'

export const useOutsideClick = (
  innerSideDom: HTMLDivElement | string,
  callback: (currentTarget: Element) => void,
  dependencies?: any[]
) => {
  const CallBack = useCallback(
    (currentTarget: Element) => {
      callback(currentTarget)
    },
    [callback]
  )
  useEffect(() => {
    function clickOutside(e: Event) {
      if (dependencies && !dependencies.every((item) => !!item === true)) return
      const EventTarget = e.target as Element
      const wrapTarget =
        typeof innerSideDom !== 'string'
          ? innerSideDom
          : document.querySelector(innerSideDom)
      if (EventTarget && wrapTarget && !wrapTarget.contains(EventTarget)) {
        CallBack(EventTarget)
      }
    }
    if (dependencies && !dependencies.every((item) => !!item === true)) {
      window.removeEventListener('click', clickOutside)
    } else {
      window.addEventListener('click', clickOutside, false)
    }
    return () => {
      window.removeEventListener('click', clickOutside)
    }
  }, [innerSideDom, dependencies, CallBack])
}
