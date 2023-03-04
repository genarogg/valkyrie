import React from "react"

import Layout from "../layout"
import Presentation from "./Presentation"


interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {

  return (
    <Layout>
      <Presentation/>
    </Layout>
  )
}

export default Home
