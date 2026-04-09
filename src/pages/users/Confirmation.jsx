import React, { useState } from 'react'
import '../../styles/users/Confirmation.css'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo2.png';
import FooterSection from '../Landing/FooterSection';
import { LuClock } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { IoCheckmarkDone,IoArrowBackOutline } from "react-icons/io5";
import Receipt from './Receipt';

const Confirmation=()=> {
    const location = useLocation();
    const navigate = useNavigate()
    const { name, whatsapp, pickupTime, orderId, pickupEstimate, pickup, discount, totalPrice, cart } = location.state || {};
    const [openModal, setOpenModal] = useState(false);
    console.log("data cart:",cart );

    /* =======================
    FUNGSI FORMAT WAKTU PICKUP
    ======================= */
    const formattedTime = new Date(pickup).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

  /* =======================
  NAVIGASI
  ======================= */
  const goToHome = () =>{
      navigate("/menu");
  }

  /* =======================
  MODAL RECEIPT
  ======================= */
  const toggleModal = () =>{
    setOpenModal(!openModal);
  }
  
  const toggleCloseModal = () =>{
    setOpenModal(false);
  }



  return (
    <div className='confirmation-container'>
      <div className="confir-nav">
        <img src={logo} alt="Logo" />
      </div>

      <div className="confir-main">

        <div className="confir-icon">
          <div className="main-icon">
            <IoCheckmarkDone className='coffee-icon'/>
          </div>
        </div>

        <div className="confir-text">
          <p>Order {orderId}</p>
          <h3>Order Confirmed!</h3>
          <p className='text-p'>Your coffee journey has begun. We've sent the details to your WhatsApp and our baristas are getting ready to brew your perfect cup.</p>
        </div>

        <div className="confir-info">
          <button>
            <LuClock className='btn-icon'/>
            <span>PICKUP IN</span>
            <p>{formattedTime}</p>
          </button>

          <button onClick={toggleModal}>
            <FiExternalLink className='btn-icon'/>
            <span>RECEIPT</span>
            <p>Sent to WhatsApp</p>
          </button>
        </div>

        

        <div className="confir-btn">
          <button onClick={goToHome}><IoArrowBackOutline/> Return to Home  </button>
          <p>Thank you for choosing Essence Cafe</p>
        </div>
      </div>

      <div className="confir-footer">
        <FooterSection/>
      </div>

      {openModal && (
        <div className="modal-receipt">
          <Receipt
            orderId={orderId}
            pickupTime={pickupTime}
            name={name}
            discount={discount}
            totalPrice={totalPrice}
            cart={cart}
          />
        </div>
      )}
    </div>
  )
}

export default Confirmation

{/* <h2>Order Confirmed</h2>
      <p>Name: {name}</p>
      <p>WhatsApp: {whatsapp}</p>
      <p>Pickup Time: {formattedTime}</p>
      <p>Order ID: {orderId}</p> */}