import React, { useState } from 'react'
import '../../styles/users/Checkout.css'
import logo from '../../assets/logo2.png';
import { IoArrowBackOutline,IoCafe,IoCallOutline,IoChatbubbleOutline } from "react-icons/io5";
import { LuCopyright, LuUserRound } from "react-icons/lu";
import { useLocation, useNavigate } from 'react-router-dom';
import { PiCoffeeBold } from "react-icons/pi";

const Checkout=({cart,setCart})=> {
    const location = useLocation();
    const navigate = useNavigate();
    const discount = location.state?.discount || 0;
    const orderId = location.state?.orderId||0;
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");

    const [pickupTime, setPickupTime] = React.useState("Now");

    const getPickupEstimate = () =>{
        const now = new Date();

        if(pickupTime === "Now") return now;
        if(pickupTime === "15") return new Date(now.getTime() + 15 * 60000);
        if(pickupTime === "30") return new Date(now.getTime() + 30 * 60000);
    }

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.qty,
         0
    )||0;

    //total qty
    const totalQty = cart.reduce(
        (total, item) => total + item.qty,
        0
    )||0;

    const backToMenu = () =>{
        navigate("/menu");
    }

    const handleToConfirmationPage = () =>{
        navigate("/confirmation", {
            state : {
                name,
                whatsapp,
                pickupTime,
                orderId,
                pickup: getPickupEstimate(),
                totalQty,
                cart,
                discount
            }
        })
    }



  return (
    <div className='checkout-container'>

        {/* NAVBAR  */}
        <div className="checkout-navbar">
            <img src={logo} alt="Logo" />
        </div>

        {/* CHECKOUT CONTENT */}
        <div className="checkout-content">
            <div className="content-left">
                <div className="back-nav" onClick={backToMenu}>
                    <IoArrowBackOutline/>
                    Back to Menu
                </div>

                <div className="text">
                    <h4>Your Details</h4>
                    <p>Please provide your contact information for the order.</p>
                </div>
                
                
                <div className="user-info">
                    <div className="user-box">
                        <label>Name</label>
                        <div className="user-box1">
                            <LuUserRound/>
                            <input 
                                type="text" 
                                placeholder='e.g Julianne Smith' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        
                    </div>
                    <div className="user-box">
                        <label>WhatsApp Number</label>
                        <div className="user-box1">
                            <IoCallOutline/>
                            <input 
                                type="text" 
                                placeholder='e.g 081234567890' 
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="text">
                    <h4>Pickup Information</h4>
                    <p>Tell us when you'd like to drop by to collect your order.</p>
                </div>
                
                {/* PICKUP DATE  */}
                <div className="pickup-box">
                    <p className="pickup-label">Pickup Time</p>
                    <div className="pickup-options">
                        <button 
                            className={pickupTime === "Now" ? "active" : ""}
                            onClick={() => setPickupTime("Now")}
                        >
                            Now
                        </button>

                        <button 
                            className={pickupTime === "15" ? "active" : ""}
                            onClick={() => setPickupTime("15")}
                        >
                            +15 min
                        </button>

                        <button 
                            className={pickupTime === "30" ? "active" : ""}
                            onClick={() => setPickupTime("30")}
                        >
                            +30 min
                        </button>
                    </div>
                   <span className="pickup-info">
                        {pickupTime === "Now" && "Ready in 15 minutes"}
                        {pickupTime === "15" && "Ready in 30 minutes"}
                        {pickupTime === "30" && "Ready in 45 minutes"}
                    </span>
                </div>

                {/* GUARANTY NOTE  */}
                <div className="guaranty-note">
                    <div className="note-icon">
                        <PiCoffeeBold/>
                    </div>
                    <div className="note-text">
                        <h5>Freshness Guaranteed</h5>
                        <p>We start preparing your drinks precisely 5 minutes before your selected pickup time to ensure the perfect temperature.</p>
                    </div>
                </div>
            </div>

            <div className="content-right">
                <div className="content-box">
                    <div className="content-header">
                        <h4>Order Summary</h4>
                        <p>ORDER ID : {orderId}</p>
                        {/* <p>{totalQty} ITEMS</p> */}
                    </div>

                    <div className="main-content">
                        {cart.map((item)=>(
                            <div key={item.id} className="main-box">
                                <div className="box-left">
                                    <img src={item.img} alt={item.name} />

                                    <div className="content-info">
                                        <h4>{item.name}</h4>
                                        <span>Qty: {item.qty}</span>
                                    </div>
                                </div>
                                

                                <div className="content-qty">
                                    <p>{item.price.toLocaleString("id-ID")}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="box-detail">
                        <div className="detail-label">
                            <p>Subtotal</p>
                            <p>Discount</p>
                            <p>Packaging Fee</p>
                            
                        </div>
                        <div className="detail-isi">
                            <p>{totalPrice.toLocaleString("id-ID")}</p>
                            <p>{discount.toLocaleString("id-ID")}</p>
                            <p>2.000</p>
                            
                        </div>
                    </div>
                    <div className="final-total">
                            <p>Total</p>
                            <p className='total-amount'>Rp {(totalPrice - discount + 2000).toLocaleString("id-ID")}</p>
                        </div>

                    <button className='order-btn' onClick={handleToConfirmationPage}> <IoChatbubbleOutline/> Order Via WhatsApp</button>
                    <p className='order-text'>By clicking "Order via WhatsApp", a message will be drafted with your order details and sent to our cafe staff for final confirmation.</p>
                </div>
            </div>
        </div>

        <div className="checkout-footer">
            <div className="btm-left">
                <p>Essence Cafe <LuCopyright/> 2026</p>
            </div>
            <div className="btm-right">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Help Center</p>
            </div>
        </div>

    </div>
  )
}

export default Checkout