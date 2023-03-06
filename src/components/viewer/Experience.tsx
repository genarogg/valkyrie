import React from "react"
import { v4 as uuidv4 } from "uuid"

import SvgCheckBeautifull from "../svg-img/SvgCheckBeautifull"

interface ExperienceProps {}

const Experience: React.FunctionComponent<ExperienceProps> = () => {
  const experience = (tecnologia: string, nivel: string) => {
    return (
      <article className="details col-xs-6">
        <SvgCheckBeautifull />
        <div>
          <h4>{tecnologia}</h4>
          <small>{nivel}</small>
        </div>
      </article>
    )
  }
  return (
    <>
      <section className="experience-container">
        <h5>What Skills I Have</h5>

        <h2>My Experience</h2>

        <div className="experience row">
          <div className="frontend col-md-5">
            <h3>Frontend Development</h3>

            <div className="stack row">
              {experience("HTML", "Advanced")}
              {experience("CSS", "advanced")}
              {experience("Bootstrap", "advanced")}
              {experience("React", "advanced")}
              {experience("JavaScript", "advanced")}
              {experience("Tailwind", "Intermediate")}
            </div>
          </div>

          <div className="backend col-md-5">
            <h3>Backend Development</h3>

            <div className="stack row">
              {experience("Node JS", "advanced")}
              {experience("PHP", "Intermediate")}
              {experience("Python", "advanced")}
              {experience("MongoDB", "advanced")}
              {experience("MySQL", "advanced")}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience
