import React from "react"

import { apiWhatsapp, email, telefono } from "./Varibles"

import SvgMessengerFacebook from "../svg-img/social/SvgMessengerFacebook"
import SvgWhatsapp from "../svg-img/social/SvgWhatsapp"
import SvgEmail from "../svg-img/social/SvgEmail"
interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
  const contact = (svg: any, metodo: string, ref: string, link: string) => {
    return (
      <article className="option">
        {svg}
        <h4>{metodo}</h4>
        <h5>{ref}</h5>
        <a href={link} target="_blank" rel="noreferrer">
          Send a Message
        </a>
      </article>
    )
  }
  return (
    <section className="contact row">
      <h5>Get In Torch</h5>
      <h2>Contact Me</h2>
      <div className="options col-md-4">
        {contact(<SvgEmail size={24} />, "Email", email, `mailto:${email}`)}
        {contact(
          <SvgMessengerFacebook size={24} />,
          "Messenger",
          "Geanerogg",
          ``
        )}
        {contact(<SvgWhatsapp size={24} />, "Whatsapp", telefono, apiWhatsapp)}
      </div>

      <form className=" col-md-6">
        <input type="text" name="name" placeholder="Your Full Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
