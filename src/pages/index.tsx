import React from "react"

import Layout from "../components/layout"
import A  from "../components/nano/A"

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Layout>
      <A to="/404">hola</A>
      <h1>main</h1>
    </Layout>
  )
}

export default Home
