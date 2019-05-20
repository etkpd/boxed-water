import React from 'react'

import NavBar from './NavBar/NavBar'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import globalStyles from '../../shared/css/globalStyles.scss'

const Layout = (props) => {
    return (
        <div className={globalStyles}>
            <div className={layoutStyles.container}>
                <NavBar/>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout