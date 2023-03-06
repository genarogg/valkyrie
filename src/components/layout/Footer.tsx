import React from "react"
import SvgFacebook from "../svg-img/social/SvgFacebook"
import SvgInstagram from "../svg-img/social/SvgInstagram"
import SvgTwitter from "../svg-img/social/SvgTwitter"
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer id="footer" className="footer">
      <a href="#" className="footer-logo">
        Xiana
      </a>
      <nav>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="socials">
        <a href="https://facebook.com">
          <SvgFacebook />
        </a>
        <a href="https://instagram.com">
          <SvgInstagram />
        </a>
        <a href="https://twitter.com">
          {" "}
          <SvgTwitter />
        </a>
      </div>
      <div className="copyright">
        <small>© Xiana. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
