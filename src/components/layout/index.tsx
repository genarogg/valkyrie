import React from "react"
import "../../css/style.scss"
import NavegationBar from "./NavegationBar"
import Footer from "./Footer"
interface LayoutProps {
  children?: any
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavegationBar />

      <main id="main" className="main">
        {children}
      </main>

      <Footer />
    </>
  )
}

export function Head() {
  return (
    <>
      <link
        rel="shortcut icon"
        href="/src/img/favicon.png"
        type="image/x-icon"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </>
  )
}

export default Layout
