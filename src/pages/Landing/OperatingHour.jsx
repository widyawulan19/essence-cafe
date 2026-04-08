import React, { useEffect } from 'react'
import '../../styles/LandingPage.css'
import {  IoCallOutline, IoLocationOutline} from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import img from '../../assets/maps.png'
import AOS from 'aos'

const OperatingHour=()=> {

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
            mirror:true
        })
    })

  return (
    <div className='operating-container'>
        <div className="oc-left" data-aos='fade-right'>
            <h5>VISIT US</h5>
            <h2>Your Sanctuary Awaits</h2>

            <div className="oc-box">
                <div className="box1">
                    <div className="box-icon">
                        <IoLocationOutline />
                    </div>
                    <div className="box-desc">
                        <h4>Address</h4>
                        <p>123 Artisan Lane, Brew City, BC 90210</p>
                        <span>Get Directions</span>
                    </div>
                </div>

                <div className="box1">
                    <div className="box-icon">
                        <IoMdTime />
                    </div>
                    <div className="box-desc">
                        <h4>Opening Hours</h4>
                        <div className="box-time">
                            <div className="day">
                                <p>Mon - Fri</p>
                                <p>Sat - Sun</p>
                            </div>
                            <div className="time">
                                <p>07:00 AM - 08:00 PM</p>
                                <p>08:00 AM -09:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box1">
                    <div className="box-icon">
                        <IoCallOutline />
                    </div>
                    <div className="box-desc">
                        <h4>Contact</h4>
                        <p>+1 (555) 123-4567</p>
                        <p>hello@essencecafe.com</p>
                    </div>
                </div>

               
            </div>

        </div>
        <div className="oc-right">
            <div className="oc-img">
                <img src={img} alt="Photo maps" />
                <div className="oc-text">
                    <h5>MAIN BRANCH</h5>
                    <p>Essence Cafe & Roastery</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default OperatingHour