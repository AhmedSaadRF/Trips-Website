import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Questions.css"
import Accordion from './Accordion'

export default function Questions() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const [active, setActive] = useState("How do I choose the right travel destination for me?");
  return (
    <div className='questions section container'>
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer5 grid">
        <div className="accordion grid">
          <Accordion
            title="How do I choose the right travel destination for me?"
            desc="description'>Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What are the best times to visit specific destinations?"
            desc="Research the climate, weather patterns, and peak tourist seasons of the destination you&quot;re interested in. Opt for the shoulder seasons when the weather is pleasant, and crowds are fewer, if possible."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="How can I find budget-friendly travel options and deals?"
            desc="Look for travel deals, discounts on flights and accommodations, and consider using travel apps or websites that offer competitive prices. Being flexible with your travel dates can also help you find better deals."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What essential items should I pack for my adventure?"
            desc="Pack appropriate clothing, toiletries, travel documents (passport, visa, etc..), essential medications, and any specific gear needed for your adventure(e.g., hiking boots, snorkeling gear)."
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="form">
          <div className="secHeading">
            <h4 data-aos="fade-up">Do you have any specific question?</h4>
            <p data-aos="fade-up">Please fill the form below and our dedicated team will get intouch with you as soon as possible.</p>
          </div>
          <div className="formContent grid">
            <input type="email" placeholder='Enter email address' data-aos="fade-up" />
            <textarea placeholder='Enter your quetion here' data-aos="fade-up"></textarea>
            <div className="btnx" data-aos="fade-up">
              <button className='btn btn4'>Submit Inquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



