import React from "react"

import Header from "./Header"
import Footer from "./Footer"
interface LayoutProps {
  children?: any
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>

      <Header />
      <main id="main" className="main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export function Head() {
  return (
    <link rel="shortcut icon" href="/src/img/favicon.png" type="image/x-icon" />
  )
}

export default Layout
