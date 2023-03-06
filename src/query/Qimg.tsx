import { graphql, useStaticQuery } from "gatsby"

const Qimg = () => {
  const { imgBackground, avatar, client1, client2, client3, client4 } =
    useStaticQuery(graphql`
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

        client1: file(
          relativePath: { eq: "avatar-client/nana-ama-mcBrown.jpg" }
        ) {
          sharp: childImageSharp {
            gatsbyImageData(formats: WEBP, quality: 100, width: 60)
          }
          name
        }
        client2: file(relativePath: { eq: "avatar-client/kwame-despite.jpg" }) {
          sharp: childImageSharp {
            gatsbyImageData(formats: WEBP, quality: 100, width: 60)
          }
          name
        }
        client3: file(relativePath: { eq: "avatar-client/shatta-wale.jpg" }) {
          sharp: childImageSharp {
            gatsbyImageData(formats: WEBP, quality: 100, width: 60)
          }
          name
        }
        client4: file(relativePath: { eq: "avatar-client/fina-snow.jpg" }) {
          sharp: childImageSharp {
            gatsbyImageData(formats: WEBP, quality: 100, width: 60)
          }
          name
        }
      }
    `)

  const data = {
    imgBackground,
    avatar,
    client1,
    client2,
    client3,
    client4,
  }

  return data
}

export default Qimg
