import React from "react"
import { Link } from "gatsby"

export interface AProps {
  type?: string
  children?: any
  css?: string
  to?: string
  href?: string
  id?: string
}

const A: React.FunctionComponent<AProps> = ({
  type,
  children,
  css = "",
  to = "#",
  id = "",
}) => {
  if (type === "a") {
    return (
      <a
        className={css}
        href={to}
        target="_blank"
        rel="noopener noreferrer nofollow"
        id={id}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={to} id={id} className={css}>
      {children}
    </Link>
  )
}

export default A
