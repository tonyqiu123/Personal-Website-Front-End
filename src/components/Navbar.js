import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import '../css/all.css'
import Burger from '../images/Burger.svg'
import SquareLogo from '../images/SquareLogo.svg'
import resumePDF from '../images/resume.pdf'

export default function Navbar() {

  const [mobileNavState, setMobileNavState] = useState(false)
  function toggleMobileNav(e) {
    setMobileNavState(mobileNavState => !mobileNavState)
  }

  let mobileNavClass = mobileNavState ? 'active' : null

  return (
    <>
      <div className={`navBlackBG ${mobileNavClass}`}></div>
      <nav className='navDesktop row'>
        <Link style={{gap: '8px'}} className="row" to="/"><img className='navLogo' src={SquareLogo} />
          <p className='myRole'>—</p>
          <p className='myRole'>Full Stack Developer</p>
        </Link>
        <div className='navDesktop-links row'>
          <Link to="/"><p>Home</p></Link>
          <Link to="/projects"><p>All Projects</p></Link>
          <Link to="/blog"><p>Blog</p></Link>
          <Link to={resumePDF} target="_blank"><p>Resume</p></Link>
        </div>
        <img onClick={toggleMobileNav} className='burger' src={Burger} />
      </nav>

      <div className={`navMobile ${mobileNavClass}`}>
        <div className="navMobile-top row">
          <Link to="/"><img className='navLogo' src={SquareLogo} /></Link>
          <img onClick={toggleMobileNav} src={Burger} className="burgerMobile" />
        </div>
        <div className="navMobile-bot column">
          <Link to="/"><p>Home</p></Link>
          <Link to="/projects"><p>All Projects</p></Link>
          <Link to="/blog"><p>Blog</p></Link>
          <Link to={resumePDF} target="_blank"><p>Resume</p></Link>
        </div>
      </div>
    </>
  )
}
