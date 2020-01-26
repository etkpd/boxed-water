import React from 'react'
// eslint-disable-next-line
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

import LogoInstagram from '../../content/svg/instagram-white.svg'
import LogoTwitter from '../../content/svg/twitter-white.svg'
import LogoFacebook from '../../content/svg/facebook.svg'
import LogoLinkedin from '../../content/svg/linkedin-white.svg'

const Footer = () => {
  return (
    <div className={footerStyles.footerContainer}>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.Detailed}>
          <div className={footerStyles.column}>
            <div>
              <label className={footerStyles.label}>Address</label>
            </div>
            <p className={footerStyles.Links}>
              <a className={footerStyles.Link} href="https://reactjs.org">
                135 Manufacturers Drive
                <br/>
                Holland, MI 49424
                <br/>
                USA
              </a>
            </p>
          </div>
          <div className={footerStyles.column}>
            <div>
              <label className={footerStyles.label}>Contact</label>
            </div>
            <p className={footerStyles.Links}>
              <a className={footerStyles.Link} href="https://reactjs.org">Email Us</a>
              <br/>
              <a className={footerStyles.Link} href="https://reactjs.org">1-844-429-3987</a>
            </p>
          </div>
          <div className={footerStyles.column}>
            <div>
              <label className={footerStyles.label}>Company</label>
            </div>
            <p className={footerStyles.Links}>
              <a className={footerStyles.Link} href="https://reactjs.org">FAQ</a>
              <br/>
              <a className={footerStyles.Link} href="https://reactjs.org">Our Story</a>
              <br/>
              <a className={footerStyles.Link} href="https://reactjs.org">Careers</a>
            </p>
          </div>
        </div>
        <div className={footerStyles.Social}>
          <div className={footerStyles.SocialLinks}>
            <a className={footerStyles.Link} href="https://www.instagram.com/">
              <LogoInstagram/>
            </a>
            <a className={footerStyles.Link} href="https://twitter.com/">
              <LogoTwitter/>
            </a>
            <a className={footerStyles.Link} href="https://www.facebook.com/">
              <LogoFacebook/>
            </a>
            <a className={footerStyles.Link} href="https://www.linkedin.com/">
              <LogoLinkedin/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer