import React from "react"

import A from "../nano/A"
import SvgExperience from "../svg-img/SvgExperience"
import SvgHome from "../svg-img/SvgHome"
import SvgUser from "../svg-img/SvgUser"
import SvgHeart from "../svg-img/SvgHeart"
import SvgContact from "../svg-img/SvgContact"

import { $classList } from "../../functions/$"

interface NavigationBarProps {}

const NavigationBar: React.FunctionComponent<NavigationBarProps> = () => {
  const hover = (e: any) => {
    const target = e.target.localName

    if (target === "ul" || target === "li") {
      return
    }

    const getA = (node: any) => {
      if (node.localName === "a") {
        return node
      }

      return getA(node.parentNode)
    }

    const elemento = getA(e.target)

    /* Eliminar el estilo */

    $classList("btnHome").remove("active")
    $classList("btnUsuario").remove("active")
    $classList("btnExperience").remove("active")
    $classList("btnServices").remove("active")
    $classList("btnContact").remove("active")

    /* Agg el estilo */
    $classList(elemento.id).add("active")
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
          <A type="navegation" to="#experience" id="btnExperience">
            <SvgExperience />
          </A>
        </li>
        <li>
          <A type="navegation" to="#services" id="btnServices">
            <SvgHeart />
          </A>
        </li>
        <li>
          <A type="navegation" to="#contact" id="btnContact">
            <SvgContact />
          </A>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar
