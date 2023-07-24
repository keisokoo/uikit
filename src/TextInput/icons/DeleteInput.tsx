import * as React from 'react'
import type { SVGProps } from 'react'
const SvgDeleteInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#A8B3C6"
      d="M9 2.25A6.75 6.75 0 1 0 15.75 9 6.758 6.758 0 0 0 9 2.25Zm2.444 8.46a.518.518 0 1 1-.734.734L9 9.734l-1.71 1.71a.52.52 0 0 1-.734-.734L8.266 9l-1.71-1.71a.52.52 0 0 1 .734-.734L9 8.266l1.71-1.71a.52.52 0 0 1 .734.734L9.734 9l1.71 1.71Z"
    />
  </svg>
)
export default SvgDeleteInput
