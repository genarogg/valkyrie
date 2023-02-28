import React from "react"

export interface IconoProps {
  css?: string
  id?: string
}

const Icono: React.FunctionComponent<IconoProps> = ({ css = "", id = "" }) => {
  return (
    <span className={`ico ${css}`} id={id} role="img" aria-label="sheep"></span>
  )
}

export default Icono
