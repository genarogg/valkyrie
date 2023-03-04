import React from "react"
import Home from "./index"
import "../css/iconos.scss"

import SvgHeart from "../components/svg-img/SvgHeart"
import SvgContact from "../components/svg-img/SvgContact"
import SvgExperience from "../components/svg-img/SvgExperience"
import SvgCheckBeautifull from "../components/svg-img/SvgCheckBeautifull"
import SvgHome from "../components/svg-img/SvgHome"
import SvgUser from "../components/svg-img/SvgUser"
import SvgLinkedin from "../components/svg-img/social/SvgLinkedin"
import SvgGithub from "../components/svg-img/social/SvgGithub"
import SvgInstagram from "../components/svg-img/social/SvgInstagram"
import SvgWhatsapp from "../components/svg-img/social/SvgWhatsapp"
import SvgMessengerFacebook from "../components/svg-img/social/SvgMessengerFacebook"
import SvgEmail from "../components/svg-img/social/SvgEmail"
import SvgFacebook from "../components/svg-img/social/SvgFacebook"
import SvgTwitter from "../components/svg-img/social/SvgTwitter"
import SvgBlueRibbon from "../components/svg-img/SvgBlueRibbon"
import SvgUsers from "../components/svg-img/SvgUsers"
import SvgProjects from "../components/svg-img/SvgProjects"
interface IconosProps {}

const Iconos: React.FunctionComponent<IconosProps> = () => {
  const icono = (ico: any, title = "titulo") => {
    return (
      <>
        <div className="ico-container">
          {ico}
          <h5 className="title">{title}</h5>
        </div>
      </>
    )
  }
  /* Vacio */
  const vacio = () => {
    return (
      <>
        <div className="ico-container vacio"></div>
        <div className="ico-container vacio"></div>
        <div className="ico-container vacio"></div>
        <div className="ico-container vacio"></div>
        <div className="ico-container vacio"></div>
        <div className="ico-container vacio"></div>
      </>
    )
  }

  return (
    <>
      {process.env.NODE_ENV === "development" ? (
        <>
          <div className="icono-super-container ">
            <div className="container">
              <h1>Iconos | by Genarogg</h1>

              {/* Iconos variados */}
              <div className="iconos">
                {icono(<SvgHeart />, "Heart")}
                {icono(<SvgContact />, "Contact")}
                {icono(<SvgExperience />, "Experience")}
                {icono(<SvgCheckBeautifull />, "CheckBeautifull")}
                {icono(<SvgHome />, "Home")}
                {icono(<SvgUser />, "User")}
                {icono(<SvgUsers />, "Users")}
                {icono(<SvgBlueRibbon />, "Blue Ribbon")}
                {icono(<SvgProjects />, "Projects")}
                {vacio()}
              </div>
              {/* Redes Sociales */}
              <div className="iconos">
                {icono(<SvgLinkedin />, "Linkedin")}
                {icono(<SvgGithub />, "Github")}
                {icono(<SvgInstagram />, "Instagram")}
                {icono(<SvgWhatsapp />, "Whatsapp")}
                {icono(<SvgMessengerFacebook />, "Messenger")}
                {icono(<SvgEmail />, "Email")}
                {icono(<SvgFacebook />, "Facebook")}
                {icono(<SvgTwitter />, "Twitter")}
                {vacio()}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  )
}

export default Iconos
