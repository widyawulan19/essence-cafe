import React, { useEffect } from 'react'
import '../../styles/LandingPage.css'
import logo from '../../assets/logo2.png'
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { RiTiktokFill } from "react-icons/ri";
import AOS from 'aos'

const FooterSection=()=> {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
            mirror:true
        })
    })
  return (
    <div className='footer-container'>
        <div className="footer-menu">
            <div className="footer1" data-aos='fade-up' data-aos-delay='0'>
                <div className="footer-img">
                    <img src={logo} alt="logo pic" />
                </div>
                <p>
                    Crafting premium coffee experiences with sustainably sourced beans and an elegant atmosphere.
                </p>
            </div>

            <div className="footer2-box" data-aos='fade-up' data-aos-delay='200'>
                <div className="footer2" >
                    <h5>EXPLORE</h5>
                    <div className="menu">
                        <p>Our Story</p>
                        <p>Menu</p>
                        <p>Locations</p>
                        <p>Gallery</p>
                    </div>
                </div>

                <div className="footer2">
                    <h5>SUPPORT</h5>
                    <div className="menu">
                        <p>Contact Us</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Term Of Service</p>
                    </div>
                </div>
            </div>

            <div className="footer3" data-aos='fade-up'>
                <h5>FOLLOW US</h5>
                <div className="footer-icon">
                    <IoLogoInstagram/>
                    <IoLogoFacebook/>
                    <RiTiktokFill/>
                </div>
            </div>

        </div>

        <div className="footer-btm">
            <p>@ 2026 Essence Cafe. All rights reserved</p>
            <p>Made by Luminous Studio</p>
        </div>
    </div>
  )
}

export default FooterSection