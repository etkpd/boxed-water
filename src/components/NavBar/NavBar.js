import React from "react"
import { Link } from "gatsby"

import Logo from '../../../content/svg/boxedwater-logo.svg'

import headerStyles from "./NavBar.module.scss"

const Header = () => {
  

  return (
    <div className={headerStyles.HeaderContainer}>
    <header className={headerStyles.header}>
      <nav className={headerStyles.nav}>
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
    </div>
  )
}

export default Header
