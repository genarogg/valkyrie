import React from "react"

interface SvgExperienceProps {
  size?: number
  backgroundColor?: string
  color?: string
  css?: string
}

const SvgExperience: React.FunctionComponent<SvgExperienceProps> = ({
  size = 18,
  color = "#fff",
  backgroundColor = "none",
  css,
}) => {
  return (
    <div className="ico-svg">
      <svg
        className={`${css}`}
        fill={`${color}`}
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={`${size}px`}
        width={`${size}px`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path>
        <path d="M8 6h9v2H8z"></path>
      </svg>
    </div>
  )
}

export default SvgExperience
