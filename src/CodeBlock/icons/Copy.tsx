import type { SVGProps } from 'react'
import * as React from 'react'
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#copy_svg__a)">
      <path
        fill="#8F8F8F"
        d="M13.5 3.938v12.374c0 .932-.755 1.688-1.688 1.688H1.688A1.687 1.687 0 0 1 0 16.312V3.938C0 3.006.756 2.25 1.688 2.25H4.5C4.5 1.01 5.51 0 6.75 0S9 1.01 9 2.25h2.813c.931 0 1.687.756 1.687 1.688ZM6.75 1.405a.844.844 0 1 0 0 1.688.844.844 0 0 0 0-1.688Zm3.375 4.008v-.703a.21.21 0 0 0-.21-.211h-6.33a.21.21 0 0 0-.21.21v.704a.21.21 0 0 0 .21.211h6.33a.21.21 0 0 0 .21-.21Z"
      />
    </g>
    <defs>
      <clipPath id="copy_svg__a">
        <path fill="#fff" d="M0 0h13.5v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCopy
