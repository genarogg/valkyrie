import React from "react"

interface SvgContactProps {
  size?: number
  backgroundColor?: string
  color?: string
  css?: string
}

const SvgContact: React.FunctionComponent<SvgContactProps> = ({
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
        height={`${size}px`}
        width={`${size}px`}
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path>
        <path d="M7 9h10v2H7zm0 4h7v2H7z"></path>
      </svg>
    </div>
  )
}

export default SvgContact
