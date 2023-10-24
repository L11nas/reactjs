import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          Linas
        </a>
        <div className='nav__menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link active-link'>
                <FontAwesomeIcon icon={faHouse} />
                <i className='uil uil-estate'></i>Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <FontAwesomeIcon icon={faAddressCard} />
                <i className='uil uil-user nav__icon'></i>About
              </a>
            </li>
            <li className='nav__item'>
              <a href='Skills' className='nav__link'>
                <FontAwesomeIcon icon={faGear} />
                <i className='uil uil-file-alt nav__icon'></i>Skills
              </a>
            </li>
            <li className='nav__item'>
              <a href='#services' className='nav__link'>
                <FontAwesomeIcon icon={faLaptopCode} />
                <i className='uil uil-briefcase-alt nav__icon'></i>Services
              </a>
            </li>
            <li className='nav__item'>
              <a href='#portfolio' className='nav__link'>
                <FontAwesomeIcon icon={faBriefcase} />
                <i className='uil uil-scenery nav__icon'></i>Portfolio
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <FontAwesomeIcon icon={faIdBadge} />
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>
          <i className='nav__close'></i>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className='nav__toggle'></div>
        <FontAwesomeIcon icon={faCube} className='uil uil-apps' />
      </nav>
    </header>
  );
};

export default Header;
