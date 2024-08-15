import './Sidebar.scss'
import { useState } from 'react'
import LogoP from '../../assets/images/logo-py.png'
import LogoSubtitle from '../../assets/images/logo-titlee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faSquareEnvelope,
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faDiagramProject
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoP} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Pyoush" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="E2DFD0" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#E2DFD0" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#E2DFD0" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#E2DFD0" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#E2DFD0"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/pyoushmadan/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#E2DFD0"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pyoushmadan10"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#E2DFD0"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ofc_itz_pyoush/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#E2DFD0"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJlFCdKxJDPMSSSRfkwxGMwhtCpbDhbGqtCcJLNFrqHdQXlbtZKVhCVDHTjSjsjxfwSVFFg" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#E2DFD0"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#E2DFD0"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar