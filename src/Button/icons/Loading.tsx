import type { SVGProps } from 'react'
import * as React from 'react'
const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <div className="loading">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.5}
        strokeWidth={3}
        d="M10 2a8 8 0 1 0 8 8"
        className="Loading_svg__stroke-path"
      />
    </svg>
  </div>
)
export default SvgLoading
