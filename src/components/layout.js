import React from 'react'

import NavBar from './NavBar/NavBar'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        
            <div className={layoutStyles.container}>
                <NavBar/>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
                <Footer/>
            </div>
      
    )
}

export default Layout