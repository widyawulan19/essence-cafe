import React, { useEffect } from 'react'
import '../../styles/LandingPage.css'
import storyImg from '../../assets/cafee2.jpeg';
import { LuLeaf } from "react-icons/lu";
import { SlCup } from "react-icons/sl";
import { IoLocateOutline, IoMedalOutline } from "react-icons/io5";
import AOS from 'aos'

const textItem = [
    {
        id:1,
        title:"Eco-Friendly",
        desc:"100% compostable packaging and ethical sourcing",
        icon: <LuLeaf/>
    },
    {
        id:2,
        title:"Micro-Roast",
        desc:"Small batches roasted daily for peak freshness",
        icon:<SlCup/>
    },
    {
        id:3,
        title:"Award Winning",
        desc:"Recognized bt the Barista Guild 2023",
        icon:<IoMedalOutline/>
    },
    {
        id:4,
        title:"Community Rooted",
        desc:"A local hub for artists and makers",
        icon:<IoLocateOutline/>
    }
]

const StorySection=()=> {

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
            mirror:true
        })
    })

  return (
    <div className='story-container'>
        <div className="left-story">
            <div className="img-wrap">
                <img src={storyImg} alt="story pic" data-aos='fade-right'/>

                <div className="desc">
                    <p>
                        "We believe that every cup tells a story of origin, dedication, and the perfect roast."
                    </p>
                    <span>- Master Roaster, Essence Cafe -</span>
                </div>
            </div>
        </div>

        <div className="right-story" data-aos='fade-up' >
            <h5>OUR STORY </h5>
            <h2>Crafting Moments of Pure Serenity</h2>
            <p className='rs-text'>
                Founded with a passion for excellence, Essence Cafe source only the highest quality, ethical beans from small-scale farmers across the globe. Our micro-roasting process ensures that the unique character of every harvest is preserved.  
            </p>
            <div className="item-box">
                {textItem.map((item,index) =>(
                    <div 
                        className="item-card" 
                        key={item.id} 
                        data-aos='fade-up'
                        data-aos-delay={index * 200}
                    >
                        <div className="item-icon">
                            {item.icon}
                        </div>
                        <div className="item-content">
                            <strong>{item.title}</strong>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default StorySection