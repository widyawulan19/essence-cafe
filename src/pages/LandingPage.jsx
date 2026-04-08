import React from 'react'
import '../styles/LandingPage.css'
import NavbarLanding from '../components/NavbarLanding'
import HeroLanding from './Landing/HeroLanding'
import SelectionSection from './Landing/SelectionSection'
import StorySection from './Landing/StorySection'
import PhotoSection from './Landing/PhotoSection'
import OperatingHour from './Landing/OperatingHour'
import FooterSection from './Landing/FooterSection'
import NewSelection from './Landing/NewSelection'

function LandingPage({cart,setCart}) {
  console.log('cart di navbar:', cart)
  return (
    <div className='landing-container'>
        <NavbarLanding cart={cart} setCart={setCart}/>
        <HeroLanding/>
        <NewSelection/>
        {/* <SelectionSection/> */}
        <StorySection/>
        <PhotoSection/>
        <OperatingHour/>
        <FooterSection/>
    </div>
  )
}

export default LandingPage