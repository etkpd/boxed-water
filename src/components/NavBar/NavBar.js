import React from "react"
import { Link } from "gatsby"

import Logo from '../../../content/svg/boxedwater-logo.svg'
import yourSVG from '../../../content/svg/boxedwater-logo.svg'
import boxedwater from '../../../content/images/250ml-box.png'

import headerStyles from "./NavBar.module.scss"


const Header = () => {
  

  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
        <li className={headerStyles.navListItem}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/store"
            >
              STORE
            </Link>
          </li>
          <li className={headerStyles.navListItem}>          
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/mission"
            >
              MISSION
            </Link>
          </li>
          <li className={headerStyles.navListItem}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              <Logo className={headerStyles.Logo}></Logo>
              
            </Link>
          </li>
          <li className={headerStyles.navListItem}>          
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              BLOG
            </Link>
          </li>
          <li className={headerStyles.navListItem}>          
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/faq"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
