import React from "react"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

import Img from "../nano/Img"

import Qimg from "../../query/Qimg"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
interface TestimonialsProps {}

const Testimonials: React.FunctionComponent<TestimonialsProps> = () => {
  const testimonial = (img: any, description: string) => {
    const name = img.name.replaceAll("-", " ")
    return (
      <SwiperSlide>
        <div className="testimonial">
          <div className="client__avatar">
            <Img src={img.sharp} alt={name} />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{description}</small>
        </div>
      </SwiperSlide>
    )
  }
  return (
    <>
      <div className="slider-container">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          /*  autoplay={{ delay: 3000 }} */
          spaceBetween={50}
          /* loop={true} */
          slidesPerView={1}
          pagination={{ clickable: true }}
          /*  scrollbar={{ draggable: true }} */
          onSwiper={swiper => {}}
          onSlideChange={() => {}}
        >
          {testimonial(
            Qimg().client1,
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error non harum vel, iusto, laboriosam dolor autem aliquid commodi tempore autvelit, fugiat consequatur fuga sunt earum id sapiente consequuntur neque."
          )}
          {testimonial(
            Qimg().client2,
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error non harum vel, iusto, laboriosam dolor autem aliquid commodi tempore autvelit, fugiat consequatur fuga sunt earum id sapiente consequuntur neque. to, laboriosam dolor autem aliquid commodi tempore autvelit, fugi"
          )}{" "}
          {testimonial(
            Qimg().client3,
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti minus exercitationem harum amet repudiandae consequatur mollitia ea asperiores repellat perspiciatis accusantium quos, voluptate maxime praesentium aspernatur saepe quam vitae."
          )}{" "}
          {testimonial(
            Qimg().client4,
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat totam dolores illo voluptatibus eveniet laborum sequi doloremque, aliquam dolor, necessitatibus eligendi facilis? Eum aperiam, veniam harum quibusdam dolorem corporis."
          )}
        </Swiper>
      </div>
    </>
  )
}

export default Testimonials
