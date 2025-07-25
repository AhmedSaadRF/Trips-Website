import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Questions.css"
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

function Accordion({ title, desc, active, setActive }) {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className='accordionContainer' data-aos="fade-up">
      <span className={(active === title ? ' activeTitle ' : '') + " title" + " flex"}>
        {title}
        <span onClick={() => setActive(title)}>
          {active === title ? ( 
            <BsArrowUpCircle className='icon' />
          ) : (
            <BsArrowDownCircle className='icon' />
          )}
        </span>
      </span>
      <p className={(active === title ? ' show ' : '') + " description"}>{desc}</p>
    </div>
  )
}

export default Accordion

