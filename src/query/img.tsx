import { graphql, useStaticQuery } from "gatsby"

const QDemo = () => {
  const { imgDemo1, imgDemo2 } = useStaticQuery(graphql`
    query {
      imgBackground: file(relativePath: { eq: "textura-background.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(formats: WEBP, quality: 100)
        }
      }
    }
  `)

  const data = {
    imgDemo1,
    imgDemo2,
  }

  return data
}

export default QDemo
