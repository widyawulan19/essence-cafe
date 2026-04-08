import React, { useEffect } from 'react'
import '../../styles/LandingPage.css'
import { IoChevronForward } from "react-icons/io5";
import menu1 from '../../assets/seasoning/camaro-caramel-latte.png';
import menu2 from '../../assets/fruity/butter-cream-americano.png';
import menu3 from '../../assets/avogato/pistachio_avogato.png';
import menu4 from '../../assets/cookies/almond.png'
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

const bestMenu = [
    {
        id:1,
        name:"Camaro Caramel Latte",
        category:"Best Seller",
        img:menu1,
        desc:"Smooth espresso blended with creamy milk and rich caramel syrup, topped with silky foam for a sweet and comforting coffee.",
        price:'32K'
    },
    {
        id:2,
        name:"Butterscotch Cream Americano",
        category:"New Series",
        img:menu2,
        desc:"Bold americano topped with creamy butterscotch foam, creating a perfect balance of strong coffee and sweet smooth .",
        price:'30K'
    },
    {
        id:3,
        name:"Pistachio Affogato",
        category:"Popular",
        img:menu3,
        desc:"Rich espresso poured over creamy vanilla ice cream with pistachio flavor, delivering a sweet, nutty, and refreshing dessert coffee.",
        price:'38K'
    },
    {
        id:4,
        name:"Almond Cookies",
        category:"Best Seller",
        img:menu4,
        desc:'mooth espresso blended with creamy milk and rich caramel syrup, topped with silky foam for a sweet and comforting coffee.',
        price:'28K'
    }
]

function NewSelection() {
    const navigate = useNavigate();

    const goToMenu = () =>{
        navigate('/menu')
    }

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
            mirror:true
        })
    })

  return (
    <div className='selection-container'>
        <div className="selection-box">
            <div className="selection-title" data-aos='fade-up'>
                <h5>CURATED SELECTION</h5>
                <h2>Our Best Sellers</h2>
                <hr className='line' />
            </div>

            <div className="selection-content">
                {bestMenu.map((item, index)=>(
                    <div className="new-selection-card" 
                        key={item.id}
                        data-aos='fade-up'
                        data-aos-delay={index * 300}
                    >
                        <div className="new-img-wrapper">
                            <img src={item.img} alt={item.name} />
                            <p className='tag'>{item.category}</p>
                        </div>
                        <div className="info-content">
                            <h4>{item.name}</h4>
                            <p className='price'>Rp {item.price}</p>
                            <p>{item.desc}</p>
                        </div>
                        
                    </div>
                ))}
            </div>

            <div className="selection-btn" data-aos='fade-up'>
                <button onClick={goToMenu}>View All Menu Items <IoChevronForward/></button>
            </div>
        </div>
    </div>
  )
}

export default NewSelection