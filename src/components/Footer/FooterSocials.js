import React from 'react'
import Style from './Footer.module.css'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'
import Linkedin from '../../assets/images/linkedin.png'

function FootSocials () {
  return (
    <div className={Style.footerbody}>
      <div className={Style.brand}>
        <img className={Style.facebook} src={Facebook} alt='facebook' />
        <img className={Style.instagram} src={Instagram} alt='instagram' />
        <img className={Style.twitter} src={Twitter} alt='twitter' />
        <img className={Style.linkedin} src={Linkedin} alt='linkedin' />
      </div>
    </div>
  )
}

export default FootSocials
