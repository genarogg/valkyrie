import React from "react"

interface SvgProjectsProps {
  size?: number
  backgroundColor?: string
  color?: string
  css?: string
}

const SvgProjects: React.FunctionComponent<SvgProjectsProps> = ({
  size = 18,
  color = "#fff",
  backgroundColor = "none",
  css,
}) => {
  return (
    <div className="ico-svg">
      <svg
        stroke="currentColor"
        fill={`${color}`}
        strokeWidth="0"
        viewBox="0 0 16 16"
        height={`${size}px`}
        width={`${size}px`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.70996 3H14.5L15.01 3.5V7H14V5.98999H7.68994L6.82996 6.84998L6.47998 7H1.98999V7.48999V11.49V13H7V14H1.51001L1.01001 13.5V6.5V2.5L1.51001 2H6.51001L6.85999 2.15002L7.70996 3ZM7.48999 5H13.99L14 4.01001H7.5L7.14001 3.85999L6.29004 3.01001H2V6.01001H6.28003L7.14001 5.15002L7.48999 5Z"
        ></path>
        <rect x="8" y="8" width="1" height="6"></rect>
        <rect x="10" y="8" width="1" height="6"></rect>
        <rect
          x="12.0041"
          y="8.35193"
          width="1"
          height="6"
          transform="rotate(-20 12.0041 8.35193)"
        ></rect>
      </svg>
    </div>
  )
}

export default SvgProjects
