import React, { useEffect, useState } from 'react'
import '../../styles/LandingPage.css'
import menu from '../../assets/seasoning/seasoningMenu.jpeg'
import cafe1 from '../../assets/cafee1.jpeg'
import cafe2 from '../../assets/cafee2.jpeg'
import cafe3 from '../../assets/cafee3.jpeg'
import cafe4 from '../../assets/seasoning/seasoningMenu.jpeg'
import AOS from 'aos'
import {motion} from 'motion/react'
import { useNavigate } from 'react-router-dom'


const sectionImg = [
    {
        id:1,
        img:cafe1
    },
    {
        id:2,
        img:cafe2
    },
    {
        id:3,
        img:cafe3
    },
    {
        id:4,
        img:cafe4
    }
]

const PhotoSection=()=> {

    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const next = () => {
        setIndex((prev) => (prev + 1) % sectionImg.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + sectionImg.length) % sectionImg.length);
    };

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
            mirror:true
        })
    })

    const goToMenu = () =>{
        navigate('/menu')
    }

  return (
    <div className='photo-section'>
        <div className="section1" data-aos='zoom-in'>
            <div className="section-left">
                <button className='btn-seasonal'>Seasonal Feature</button>
                <h2>The Lavender Honey Cold Brew</h2>
                <p>
                   A special seasonal dessert featuring creamy ice cream paired with a shot of rich espresso. Available in classic vanilla and premium matcha, creating a perfect balance of sweet, bold, and refreshing flavors.
                </p>
                <button className='btn-order' onClick={goToMenu}>Order Seasonal</button>
            </div>
            <div className="section-right">
                <img src={menu} alt="menu seasoning" />
            </div>
        </div>

        <div className="section2">
            <h5>THE ATHMOSPHERE</h5>
            <h2>Through Our Lens</h2>

            <div className="section-box">
                {sectionImg.map((item,index)=>(
                    <div 
                        className="photo-card" 
                        key={item.id}
                        data-aos='fade-up'
                        data-aos-delay={index * 200}
                    >
                        <img src={item.img} alt="photo cafe" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PhotoSection