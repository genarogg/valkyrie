import React from "react"

interface SvgSimpleCheckProps {
  size?: number
  backgroundColor?: string
  color?: string
  css?: string
}

const SvgSimpleCheck: React.FunctionComponent<SvgSimpleCheckProps> = ({
  size = 18,
  color = "#fff",
  backgroundColor = "none",
  css,
}) => {
  return (
    <>
      <div className="ico-svg">
        <svg
          stroke="currentColor"
          className={`${css}`}
          fill={`${color}`}
          strokeWidth="0"
          viewBox="0 0 24 24"
          height={`${size}px`}
          width={`${size}px`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
        </svg>
      </div>
    </>
  )
}

export default SvgSimpleCheck
