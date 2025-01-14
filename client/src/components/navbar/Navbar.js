import "./navbar.scss"
import { DarkModeContext } from "../../context/DarkModeContext"
import React, { useContext, useEffect, useState } from 'react'
import { BsBrightnessHigh,  BsMoon, BsList } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom"
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname;
    const links = ['/projects', '/photography', '/blog', '/about']; 

    const index = links.findIndex((link) => link === currentPath);
    setActiveLink(index);
  }, [location.pathname]);

  return (
    <div className="navbar">
        <div className="left">
          <Link to='/'>
          <span className="logo">bluehike</span>
          </Link>
        </div>
        <div className="right">
          <div className="navbarLinks">
          <Link
            className={activeLink === 0 ? 'navbarLink active' : 'navbarLink'}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={activeLink === 1 ? 'navbarLink active' : 'navbarLink'}
            to="/photography"
          >
            Photography
          </Link>
          <Link
            className={activeLink === 2 ? 'navbarLink active' : 'navbarLink'}
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className={activeLink === 3 ? 'navbarLink active' : 'navbarLink'}
            to="/about"
          >
            About
          </Link>
          </div>
          <div className="navbarIcons">
          {darkMode ? (
            <BsBrightnessHigh className="navbarIcon" onClick={toggle} />
            ) : (
              <BsMoon className="navbarIcon" onClick={toggle} />
              )}
              <a href='https://github.com/bluehike19' target="_blank" rel="noopener noreferrer">
              <FaGithub className="navbarIcon" />
              </a>
              <div className="toggleIcons">
                <BsList />
              </div>
              </div>
        </div>
    </div>
  )
}

export default Navbar