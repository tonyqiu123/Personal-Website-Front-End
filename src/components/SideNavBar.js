import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import '../css/all.css'
import Burger from '../images/Burger.svg'
import SquareLogo from '../images/SquareLogo.svg'
import resumePDF from '../images/resume.pdf'
import dribbble from '../images/dribbble.svg'
import linkedin from '../images/linkedin.svg'
import instagram from '../images/instagram.svg'
import git from '../images/git.svg'

export default function SideNavBar() {
    return (
        <div className='sideNav column'>
            <div className='sideNav-top column'>
                <Link to="/"><img src=""/></Link>
                <Link to="/" className='row'>
                    <img src=""/>
                    <p>Home</p>
                </Link>
                <Link to="/projects" className='row'>
                    <img src=""/>
                    <p>All Projects</p>
                </Link>
                <Link to="/blog" className='row'>
                    <img src=""/>
                    <p>Blog</p>
                </Link>
                <Link to={resumePDF} target="_blank" className='row'>
                    <img src=""/>
                    <p>Resume</p>
                </Link>
            </div>
            
            <div className='sideNav-socials row'>
                <a target="_blank" href='https://dribbble.com/tonyqiu12345'><img src={dribbble}/></a>
                <a target="_blank" href='https://www.linkedin.com/in/tonyqiu1/'><img src={linkedin}/></a>
                <a target="_blank" href='https://www.instagram.com/tony_q04/'><img src={instagram}/></a>
                <a target="_blank" href='https://github.com/tonyqiu123'><img src={git}/></a>
            </div>
        </div>
    )
}