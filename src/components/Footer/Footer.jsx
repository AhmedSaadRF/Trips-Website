import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Footer.css"
import { BiLogoMediumOld } from 'react-icons/bi'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos="fade-up">
            <BiLogoMediumOld className='icon' />
            <span>OU-Trips</span>
          </div>
          <div className="socials flex" data-aos="fade-up">
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>
        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>
        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+201063596560</span>
          <span className="email">ahmedsaadalrefaey7@gmail.com</span>
        </div>
      </div>
    </div >
  )
} 


