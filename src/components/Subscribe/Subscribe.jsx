import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Subscribe.css"
import image from '../../Assets/pngwing.com.png'

export default function Subscribe() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className='subscribe section container'>
      <div className="secContainer6 grid">
        <img src={image} alt="Div Image" data-aos="fade-down" />
        <div className="textDiv">
          <h4 data-aos="fade-up">Best Way To Start Your Journey!</h4>
          <p data-aos="fade-up">We offer personalized itineraries tailored to individual preferences and interests.</p>
          <div data-aos="fade-up">
            <button className='btn btn5'>Start Here</button>
          </div>
        </div>
      </div>
    </div>
  )
}



