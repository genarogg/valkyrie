import React from "react"

import Layout from "../layout"
import AboutMe from "./AboutMe"
import Presentation from "./Presentation"

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Layout>
      <Presentation />
      <AboutMe />
    </Layout>
  )
}

export default Home
