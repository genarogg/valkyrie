import React from "react"
import Img from "../nano/Img"
import Qimg from "../../query/Qimg"

import SvgBlueRibbon from "../svg-img/SvgBlueRibbon"
import SvgUsers from "../svg-img/SvgUsers"
import SvgProjects from "../svg-img/SvgProjects"

interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {

  return (
    <>
      <section className="about-me" id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="about-container row">
          <div className="col-md-4">
            <div className="picture-box">
              <Img src={Qimg().avatar.sharp} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-cards row">
              <article className="about-card col-xs-3">
                <SvgBlueRibbon size={24} />
                <h5>Experience</h5>
                <small>3+ Years working</small>
              </article>
              <article className="about-card col-xs-3">
                <SvgUsers size={24} css={"transparent"} />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className="about-card col-xs-3">
                <SvgProjects size={24} />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                aliquam non quae nihil dignissimos ullam ab, eligendi vitae
                dolores cupiditate tempore nemo, animi eaque ipsam debitis omnis
                inventore soluta quam!
              </p>
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe
