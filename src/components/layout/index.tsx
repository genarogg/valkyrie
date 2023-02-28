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

export default Layout
