
import { Link } from 'gatsby'
import React, { useState, useContext } from 'react'

import { MdSearch } from 'react-icons/md'
import { GiComputerFan } from 'react-icons/gi' 
import { RiMenu5Line } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'

import { menu } from '../constants/menu'
import { ModalSearchContext } from '../context/modalSearchContext'


export default function Header() {
    
    const [ isNavOpen, setIsNavOpen ] = useState(false)
    const { openModalSearch } = useContext(ModalSearchContext)

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    const handleNavClick = () => {
        if(isNavOpen){
            setIsNavOpen(false)
        }
    }

    const handleSearchModal = () => {
        openModalSearch()
    }

    return (
        <div className='header__container'>
            <div className="logo">
                <Link to="/" className='logo__link'>
                    <GiComputerFan/>
                    <p>Tech<span>Lyfe</span></p>
                </Link>
            </div>
            <button className='mobileNav__toggle' id="mobileNav__toggle" aria-controls='site__nav' aria-expanded="false" onClick={toggleNav}>
                <span className='sr-only'>Menu</span>
                {isNavOpen ? ( <CgClose/> ) : ( <RiMenu5Line/> )}
                
            </button>
            <nav className={isNavOpen ? 'navbar show-nav' : 'navbar'} id="navbar">
                <ul className='navmenu' id="site__nav">
                    <li className='searchIcon'>
                        <div 
                            className="searchIcon__wrapper" 
                            onClick={handleSearchModal} 
                            onKeyDown={handleSearchModal}
                            role="button"
                            tabIndex={0}
                        >
                            <MdSearch></MdSearch>
                        </div>
                    </li>
                    {menu.map(item => (
                        <li key={item.path} className="nav__item">
                            <Link className='menu__link' to={item.path} onClick={handleNavClick}><span aria-hidden="true">{item.id}: </span>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
