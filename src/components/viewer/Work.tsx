import React from "react"

import { v4 as uuidv4 } from "uuid"

import Img from "../nano/Img"
import Qimg from "../../query/Qimg"

interface WorkProps {}

const Work: React.FunctionComponent<WorkProps> = () => {
  const work = (img: any, name: string) => {
    return (
      <>
        <div className="container-img">
          <Img src={img} alt="name" />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <div className="btns">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="portafolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        {
          //@ts-ignore
          <section className="works">
            {Qimg().works.map(works => {
              return (
                <div className="work" key={uuidv4()}>
                  {work(works.sharp, works.name)}
                </div>
              )
            })}
          </section>
        }
      </div>
    </>
  )
}

export default Work
