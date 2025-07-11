import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Reviews.css"
import { AiFillStar } from 'react-icons/ai'
import image1 from '../../Assets/clientA.webp'
import image2 from '../../Assets/clientA.webp'
import image3 from '../../Assets/clientA.webp'
import image4 from '../../Assets/clientA.webp'
import image5 from '../../Assets/client.jpg'

export default function Reviews() {
  useEffect(() => {
      AOS.init({ duration: 2000 })
    }, [])
  return (
    <div className='review section container'>
      <div className="secContainer4 grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">FROM OUR CLIENTS</span>
          <h3 data-aos="fade-up">Real Travel History From Our Beloved Clients</h3>
          <p data-aos="fade-up">By choosing us as their tour agency, customers can expect an enriching and enjoyable travel experience, filled with unforgettable memories that will last a lifetime.</p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
          </span>
          <div className="clientsImages flex">
            <img src={image1} alt="Client Image" data-aos="fade-up" />
            <img src={image2} alt="Client Image" data-aos="fade-up" />
            <img src={image3} alt="Client Image" data-aos="fade-up" />
            <img src={image4} alt="Client Image" data-aos="fade-up" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={image5} alt="Div image" data-aos="fade-down" />
        </div>
      </div>
    </div>
  ) 
}


