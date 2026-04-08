import React, { useEffect } from 'react'
import '../../styles/LandingPage.css'
import { IoMdArrowForward } from "react-icons/io";
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

function HeroLanding() {
    const navigate = useNavigate();

    // FUNGSI NAVIGASI MENU 
    const goToMenu = () =>{
        navigate('/menu')
    }

    /* =======================
    HERO ANIMATE
    ======================= */
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
            mirror:true
        })
    })

  return (
    <div className='hero-container'>
        <div className="hero-box">
            <div className="hero-btn">
                <button className='top-btn' data-aos='fade-up'>Artisan Coffee Roasters</button>
            </div>
            <h1 data-aos='fade-up'>
                Experience the <span>Essence</span> <br />of Every Bean
            </h1>
            <h3 data-aos='fade-up'>
                A sanctuary for coffee lovers, where traditional craft meets <br /> modern elegance in every cup we pour.
            </h3>
            
            <div className="hero-btn" data-aos='fade-up' data-aos-delay='200'>
                <button className='order' onClick={goToMenu}>Order Now <IoMdArrowForward/></button>
                <button className='explore' onClick={goToMenu}>Explore Menu</button>
            </div>
        </div>
    </div>
  )
}

export default HeroLanding