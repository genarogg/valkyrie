import { graphql, useStaticQuery } from "gatsby"

const Qimg = () => {
  const {
    imgBackground,
    avatar,
    client1,
    client2,
    client3,
    client4,
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
  } = useStaticQuery(graphql`
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
      work1: file(
        relativePath: {
          eq: "work/Crypto Currency Dashboard & Financial Virtualization.jpg"
        }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
        name
      }
      work2: file(
        relativePath: {
          eq: "work/Maintaining tasks and tracking progress.webp"
        }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
        name
      }
      work3: file(
        relativePath: {
          eq: "work/Charts templates & infographics in figma.webp"
        }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
        name
      }
      work4: file(
        relativePath: {
          eq: "work/Charts templates & infographics in figma2.webp"
        }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
        name
      }
      work5: file(
        relativePath: {
          eq: "work/Charts templates & infographics in figma.png"
        }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
        name
      }
      work6: file(
        relativePath: {
          eq: "work/Figma Dashboard UI kit for data design web apps.webp"
        }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
        name
      }
    }
  `)

  const works = [work1, work2, work3, work4, work5, work6]

  const data = {
    imgBackground,
    avatar,
    client1,
    client2,
    client3,
    client4,
    works
  }

  return data
}

export default Qimg
