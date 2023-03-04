import React from "react"
import Img from "../nano/Img"
import Qimg from "../../query/Qimg"

import SvgLinkedin from "../svg-img/social/SvgLinkedin"
import SvgGithub from "../svg-img/social/SvgGithub"
import SvgInstagram from "../svg-img/social/SvgInstagram"
import SvgWhatsapp from "../svg-img/social/SvgWhatsapp"
import A from "../nano/A"
import { apiWhatsapp, cv, github, instagram, linkedin } from "./Varibles"

interface PresentationProps {}

const Presentation: React.FunctionComponent<PresentationProps> = () => {
  const li = (url: string, children: any, tooltip: string) => {
    return (
      <li className=" hint--right hint--bounce hint--info" aria-label={tooltip}>
        <A type="a" to={url}>
          {children}
        </A>
      </li>
    )
  }

  return (
    <>
      <div className="presentation">
        <h5>Hello I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <div className="cta">
          <a href={cv} download="" className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

        <div className="row ">
          <nav className="col-md-1 header-socials">
            <ul>
              {li(linkedin, <SvgLinkedin />, "Linkedin")}
              {li(github, <SvgGithub />, "Github")}
              {li(instagram, <SvgInstagram />, "Instagram")}
              {li(apiWhatsapp, <SvgWhatsapp />, "Whatsapp")}
            </ul>
          </nav>
          <div className="col-md-10 picture">
            <div className="me">
              <Img src={Qimg().avatar.sharp} alt="myself pic" />
            </div>
          </div>
          <div className="col-md-1">
            <a href="#contact" className="scroll__down">
              Scroll Down
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Presentation
