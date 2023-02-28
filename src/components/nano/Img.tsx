import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export interface ImgProps {
  src: any
  alt?: any
  type?: string
  css?: string
  id?: string
  children?: any
  tag?: string
  styles?: object
}

const Img: React.FunctionComponent<ImgProps> = ({
  src,
  alt = "Xiana by: Genaro Gonzalez",
  type,
  css = "",
  id = "",

  styles,
}: ImgProps) => {
  if (type === "fluit" || type === "dynamic") {
    console.log("fallida img " + type)
    return <></>
  }

  const imgSRC = getImage(src)

  if (type === "img") {
    return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        id={id}
        className={css}
        style={styles}
      />
    )
  }

  return (
    <GatsbyImage
      //@ts-ignore
      image={imgSRC}
      alt={alt}
      className={css}
      id={id}
      style={styles}
    />
  )
}
export default Img
