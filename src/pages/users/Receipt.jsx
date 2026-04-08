import React from 'react'
import '../../styles/users/Receipt.css'
import { LuCoffee } from "react-icons/lu";
import { useLocation, useNavigate } from 'react-router-dom';
import { BsQrCodeScan } from "react-icons/bs";
import { IoPrint } from 'react-icons/io5';

const Receipt = ({orderId, name, discount}) => {
    const location = useLocation();
    const {cart,totalQty} = location.state || {};
    const navigate = useNavigate();

    console.log("discount:", discount);

    const getCurrentDateTime = () =>{
        const now = new Date();
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
        return now.toLocaleDateString(undefined, options);
    }

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0 
    )||0;

    const grandTotal = totalPrice - discount + 2000;

    const backToMenu = () =>{
        navigate("/menu");
    }


  return (
    <div className='receipt-container'>
        
        <div className="receipt-header">
            <div className="header-icon">
                <LuCoffee/>
            </div>
            <h4>ESSENCE CAFE</h4>
            <p>123 Artisan Ave, Brewtown</p>
            <p>+1 (555) 012-3456</p>
        </div>

        <div className="receipt-content">
            <div className="order-row">
                <span className='label'>ORDER NO.</span>
                <span className='value'>{orderId}</span>
            </div>
            <div className="order-row">
                <span className='label'>Date & Time</span>
                <span className='value-semi'>{getCurrentDateTime()}</span>
            </div>
             <div className="order-row">
                <span className='label'>Customer</span>
                <span className='value-accent'>Pickup - {name}</span>
            </div>
        </div>

        <div className="receipt-detail">
            <div className="order-row">
                <span className='label-bold'>ITEM & QTY</span>
                <span className='value-bold'>TOTAL</span>
            </div>

            {cart.map((item)=>(
                <div className="order-row" key={item.id}>
                    <div className="label-box">
                        <span className='label'>{item.name}</span>
                        <span className='value'>{item.qty} x {item.price.toLocaleString("id-ID")}</span>
                    </div>
                    <span className='price-bold'>Rp {(item.price * item.qty).toLocaleString("id-ID")}</span>
                </div>
            ))}
        </div>

        <div className="receipt-total">
            <div className="order-row">
                <span className='label'>Subtotal</span>
                <span className='value'>Rp {totalPrice.toLocaleString("id-ID")}</span>
            </div>
            <div className="order-row">
                <span className='label voucer'>Voucer Discount </span>
                <span className='value voucer'>-Rp {discount.toLocaleString("id-ID")}</span>
            </div>
            <div className="order-row">
                <span className='label'>Packaging Fee </span>
                <span className='value'>Rp 2.000</span>
            </div>
        </div>

        <div className="receipt-grandtotal">
            <div className="order-row">
                <span className='grand-label'>TOTAL</span>
                <span className='grand-value'>Rp {(totalPrice - discount + 2000).toLocaleString("id-ID")}</span>
            </div>
        </div>

        <div className="receipt-footer">
            <div className="barcode-icon">
                <BsQrCodeScan/>
            </div>
            <span>SCAN FOR REWARDS</span>
            <span className='text'>"Handcrafted with love since 2015"</span>
            <p>Thank you for choosing Essence Cafe!</p>
            <p>Visit us again soon at goldenroast.com</p>
        </div>

        <div className="receipt-btn">
            <button onClick={backToMenu}><IoPrint/> Save Receipt</button>
        </div>
    </div>
  )
}

export default Receipt