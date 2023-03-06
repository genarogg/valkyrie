import React from "react"

import Layout from "../layout"
import AboutMe from "./AboutMe"
import Presentation from "./Presentation"
import Experience from "./Experience"
import Contact from "./Contact"
import Testimonials from "./Testimonials"
import Services from "./Services"
import Work from "./Work"
interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Layout>
      <Presentation />
      <AboutMe />
      <Experience />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
    </Layout>
  )
}

export default Home
