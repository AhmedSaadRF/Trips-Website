import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Middle.css"

export default function Middle() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className='middle section'> 
      <div className='secContainer1 container'>
        <div className="grid">
          <span className="flex" data-aos="fade-up">
            <h1>10</h1>
            <p>World Of Experiences</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h1>2K+</h1>
            <p>Fine Destinations</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h1>10K+</h1>
            <p>Customer Reviewss</p>
          </span>

          <span className="flex" data-aos="fade-up">
            <h1>4.8</h1>
            <p>Overall Rating</p>
          </span>
        </div>
      </div>
    </div>
  )
}

