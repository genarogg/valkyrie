import React from "react"
import { v4 as uuidv4 } from "uuid"
import SvgSimpleCheck from "../svg-img/SvgSimpleCheck"

interface ServicesProps {}

const Services: React.FunctionComponent<ServicesProps> = () => {
  const service = (list: any) => {
    /*  const li =() =>{
        return(
            <><li></li></>
        )
    } */
    return (
      <>
        <div className="service">
          <div className="head">
            <h3>Web Development</h3>
          </div>
          <ul className="list">
            {list.map(e => {
              return (
                <li key={uuidv4()}>
                  <SvgSimpleCheck />
                  <p>{e}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
  return (
    <>
      <section className="services-container">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="services">
          {service([
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
            "Lorem ipsum t amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur  elit.",
            "Lorem amet, consectetur adipisicing elit.",
          ])}

          {service([
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
            "Lorem ipsum t amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur  elit.",
            "Lorem amet, consectetur adipisicing elit.",
            "Dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
          ])}

          {service([
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
            "Lorem ipsum t amet, consectetur adipisicing elit.",
            "Lorem amet, consectetur adipisicing elit.",
            "Dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet,  adipisicing elit.",
          ])}
        </div>
      </section>
    </>
  )
}

export default Services
