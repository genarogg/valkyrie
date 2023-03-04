import { graphql, useStaticQuery } from "gatsby"

const Qimg = () => {
  const { imgBackground, avatar } = useStaticQuery(graphql`
    query {
      imgBackground: file(relativePath: { eq: "textura-background.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(formats: WEBP, quality: 100)
        }
      }

      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(formats: WEBP, quality: 80, width: 600)
        }
      }
    }
  `)

  const data = {
    imgBackground,
    avatar,
  }

  return data
}

export default Qimg
