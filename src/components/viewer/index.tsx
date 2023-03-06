import React from "react"

import Layout from "../layout"
import AboutMe from "./AboutMe"
import Presentation from "./Presentation"
import Experience from "./Experience"
import Contact from "./Contact"
import Testimonials from "./Testimonials"

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Layout>
      <Presentation />
      <AboutMe />
      <Experience />

      <Testimonials />
      <Contact />
    </Layout>
  )
}

export default Home
