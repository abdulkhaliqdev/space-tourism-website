import React, {useRef} from 'react'
import { Link } from 'react-router-dom';

// import images
import LogoImage from '../assets/shared/logo.svg';
// import Icon
import { FaTimes, FaBars } from 'react-icons/fa';


const Header = () => {
  const Menu = ['home', 'destination', 'crew', 'technology']
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    document.getElementById('bar-button').classList.toggle('responsive_navbars_button')
  }
  return (
    <header className='header-container'>
      <div className='header'>
        <img alt='logo' src={LogoImage} className="navbar-logo"/>
        <div className='navbar-line-container'>
          <hr className='navbar-line'/>
        </div>
        <nav ref={navRef} className='navbar-link-container'>
          <div className='nav-link'>
            {Menu.map((item, i) => <Link key={i} to={item}><span className='font-weight-800 index-menu'>0{i+1}</span> <span className='font-weight-100'>{item}</span></Link>)}
          </div>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button id="bar-button" className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  )
}

export default Header