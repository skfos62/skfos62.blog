import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navLinkLogo,
  sidebarContainer,
} from './layout.module.css'

const Sidebar = () => {
  return (
    <div className={sidebarContainer}>
    <Link to="/" className={navLinkLogo}>
              skfos62.dev
    </Link>
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/sideProject" className={navLinkText}>
            Side Project
          </Link>
        </li>
        <br/>
        <li className={navLinkItem}>
          <Link to="https://github.com/skfos62" className={navLinkText}>
            Github
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="https://www.rocketpunch.com/@skfos62.dev" className={navLinkText}>
            Rocket Punch
          </Link>
        </li>
        <br/>
        <br/>
        <li className={navLinkItem}> <strong>contact by</strong> <br/>skfos62.dev@gmail.com</li>
      </ul>
    </nav>
  </div>
  )
}
export default Sidebar