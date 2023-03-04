import React from "react"

import A from "../nano/A"
import SvgExperience from "../svg-img/SvgExperience"
import SvgHome from "../svg-img/SvgHome"
import SvgUser from "../svg-img/SvgUser"
import SvgHeart from "../svg-img/SvgHeart"
import SvgContact from "../svg-img/SvgContact"

interface NavigationBarProps {}

const NavigationBar: React.FunctionComponent<NavigationBarProps> = () => {
  const hover = (e: any) => {
    const target = e.target.localName
    if(target === "ul" || target === "li" || target === "nav"){
      console.log("llegue hasta aqui!!!")
      return
    }
    console.log("llegue hasta aqui2!!!")
    const getA = (node: any) => {
      if (node.localName === "a") {
        return node
      }

      return getA(node.parentNode)
    }

    const elemento = getA(e.target)

    console.log(elemento.id);
    

 
  }

  
  return (
    <nav className="navigation">
      <ul
        onClick={e => {
          hover(e)
        }}
      >
        <li>
          <A type="navegation" to="#" id="btnHome">
            <SvgHome />
          </A>
        </li>
        <li>
          <A type="navegation" to="#about" id="btnUsuario">
            <SvgUser />
          </A>
        </li>
        <li>
          <A type="navegation" to="#experience" id="btn">
            <SvgExperience />
          </A>
        </li>
        <li>
          <A type="navegation" to="#services" id="btnHome">
            <SvgHeart />
          </A>
        </li>
        <li>
          <A type="navegation" to="#contact" id="btnHome">
            <SvgContact />
          </A>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar
