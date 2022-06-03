import { Link } from 'gatsby'
import React from 'react'

import { GiComputerFan } from 'react-icons/gi' 
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiYoutube } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'


export default function Footer() {
    

    return (
        <div className='footer__container'>
            <div className="logo">
                <Link to="/" className='logo__link'>
                    <GiComputerFan/>
                    <p>Tech<span>Lyfe</span></p>
                </Link>
            </div>
            <ul className="media-links">
                <li className="menu-link">
                    <Link to="/">
                        <FiFacebook/>
                    </Link>
                </li>
                <li className="menu-link">
                    <Link to="/">
                        <FiInstagram/>
                    </Link>
                </li>
                <li className="menu-link">
                    <Link to="/">
                        <FiTwitter/>
                    </Link>
                </li>
                <li className="menu-link">
                    <Link to="/">
                        <FiYoutube/>
                    </Link>
                </li>
                <li className="menu-link">
                    <Link to="/">
                        <FiLinkedin/>
                    </Link>
                </li>
            </ul>
            <div className="footer-content">
                <p>&copy; 2022 TechLyfe All rights reserved.</p>
                <p>For Demo Purposes Only.</p>
            </div>
        </div>
    )
}
