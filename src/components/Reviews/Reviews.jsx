import React from 'react'
import "./Reviews.css"
import { AiFillStar } from 'react-icons/ai'
import image1 from '../../Assets/clientA.webp'
import image2 from '../../Assets/clientA.webp'
import image3 from '../../Assets/clientA.webp'
import image4 from '../../Assets/clientA.webp'
import image5 from '../../Assets/client.jpg'

export default function Reviews() {
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>By choosing us as their tour agency, customers can expect an enriching and enjoyable travel experience, filled with unforgettable memories that will last a lifetime.</p>
          <span className="stars flex">
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
          </span>
          <div className="clientsImages flex">
            <img src={image1} alt="Client Image" />
            <img src={image2} alt="Client Image" />
            <img src={image3} alt="Client Image" />
            <img src={image4} alt="Client Image" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={image5} alt="Div image" />
        </div>
      </div>
    </div>
  )
}


