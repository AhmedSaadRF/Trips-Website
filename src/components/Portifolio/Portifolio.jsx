import React from 'react'
import "./Portifolio.css"
import icon1 from '../../Assets/protection.png'
import icon2 from '../../Assets/destination.png'
import icon3 from '../../Assets/online-chat_2600354.png'
import image from '../../Assets/image.jpg'

export default function Portifolio() {
  return (
    <div className='portifolio section container'>
      <div className="secContainer3 grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
            <p>We have extensive knowledge and experience in the travel industry.</p>
          </div>
          <div className="grid">
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon image" />
              </div>
              <div className="infor">
                <h4>Safety and support</h4>
                <p>Our top priority is the safety and well-being of our clients. We maintain high safety standards and have emergency support available during the trip.</p>
              </div>
            </div>

            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon2} alt="Icon image" />
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>Whether it&#39;s domestic tour or an international adventure, we cover a wide range of destinations to cater to diffrent interests and preferences.</p>
              </div>
            </div>

            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon3} alt="Icon image" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>Our top priority is the safety and well-being of our clients. We maintain high safety standards and have emergency support available during the trip.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent">
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  )
}


