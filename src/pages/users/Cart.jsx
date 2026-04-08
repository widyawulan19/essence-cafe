import React, { useState } from 'react'
import '../../styles/users/Cart.css'
import { HiOutlineShoppingBag, HiXCircle } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { getDiscount } from '../../utils/Voucer';
import { IoArrowBackOutline } from "react-icons/io5";
import { useToast } from '../../hook/useToast';
import Toast from '../../components/Toast';
import { useNavigate } from 'react-router-dom';
import { FaMinus, FaPlus } from "react-icons/fa6";


const Cart = ({cart=[], setCart, onClose, isClosing}) => {

    const [voucer,setVoucer] = useState("");
    const [discount, setDiscount] = useState(0);
    const [pickupTime, setPickupTime] = useState("Now");
    const {toasts, showToast} = useToast();
    const navigate = useNavigate()


    const orderId = "#ORD" + Date.now();
    

    // fungsi voucer discount 
    const handleGetVoucerDiscount = () =>{
        const value = getDiscount(voucer);

        if(value > 0){
            setDiscount(value)
        }else{
            alert("Voucer tidak valid!")
        }
    }

    // fungsi penambahan kuantitas 
    const increaseQty = (id) =>{
        setCart(cart.map(item => 
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        ));
    };

    // fungsi pengurangan kuantitas 
    const decreaseQty = (id) =>{
        setCart(cart.map(item => 
            item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1}
            : item
        ));
    };

    // fungsi remove jumlah / produk
    const removeItem = (id) =>{
        setCart(cart.filter(item => item.id !== id));
        showToast(`Successfully remove from cart!`)
    };

    //fungsi total price
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
    )||0;

    //total qty
    const totalQty = cart.reduce(
        (total, item) => total + item.qty,
        0
    )||0;

    //fungsi navigate to checkout
    const handleCheckout = () =>{
        navigate("/checkout",{
            state:{
                discount:discount,
                totalQty:totalQty,
                orderId:orderId
            }
        });
    }


  return (
    <div className={`cart-container ${isClosing ? "closing":""}`}>
        <Toast toasts={toasts} />
        <div className="cart-content">
            <div className="cart-header">
                <div className="cart-icon">
                    <HiOutlineShoppingBag/>
                </div>
                <div className="cart-title">
                    <h3>Your Order</h3>
                    {/* <p>{totalQty} ITEM </p> */}
                    <p>ORDER: <strong>{orderId}</strong></p>
                </div>
                {/* <HiXCircle onClick={onClose}/> */}
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <div className="empty-icon">
                        <HiOutlineShoppingBag/>
                        <span className='cart-empty-badge'>0</span>
                    </div>
                    
                    <h3>Your cart is empty</h3>
                    <button onClick={onClose}>Continue Shopping</button>
                </div>
            ):(
                <>
                    <div className="cart-item-box">
                        {cart.map((item)=>(
                            <div key={item.id} className="cart-item">
                                <img src={item.img} alt={item.name} />

                                <div className="cart-info">
                                    <h4>{item.name}</h4>
                                    <p>Rp {item.price.toLocaleString()}</p>
                                </div>

                                <div className="qty-control">
                                    <div className="remove">
                                        <button
                                            className='remove-btn' 
                                            onClick={()=> removeItem(item.id)}
                                        >
                                            <IoTrashOutline/>
                                        </button>
                                    </div>
                                    <div className="action">
                                        <button onClick={()=> decreaseQty(item.id)}><FaMinus className='action-icon'/></button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => increaseQty(item.id)}><FaPlus className='action-icon'/></button>
                                    </div>        
                                </div>

                            
                            </div>
                        ))}
                    </div>
                </>
            )}

            <div className="cart-total">
                {/* VOUCHER INPUT */}
                <div className="voucher-box">
                    <input
                        type="text"
                        placeholder="Promocode"
                        value={voucer}
                        onChange={(e) => setVoucer(e.target.value)}
                    />
                    <button onClick={handleGetVoucerDiscount}>Apply</button>
                </div>
                {/* SUBTOTAL */}
                <div className="stotal">
                    <p>Subtotal</p>
                    <span className='total-bold'>Rp {totalPrice.toLocaleString("id-ID")}</span>
                </div>
                {/* DISCOUNT */}
                <div className="disc">
                    <p>Discount</p>
                    <span className='total-disc'> Rp {discount.toLocaleString("id-ID")}</span>
                </div>
                {/* PACKAGING */}
                <div className="stotal">
                    <p>Packaging Fee</p>
                    <span className='total-bold'>Rp 2.000</span>
                </div>
                {/* <hr className='line'/> */}
                {/* TOTAL */}
                <div className="stotal-grand">
                    <p className='grand'>Total</p>
                    <p className='grand-total'>
                        Rp {(totalPrice - discount + 2000).toLocaleString("id-ID")}
                    </p>
                </div>
                <button className='checkout-btn' onClick={handleCheckout}>Proceed to Checkout</button>
                <button className='continue-btn' onClick={onClose}> <IoArrowBackOutline/> Continue Browsing </button>
                {/* <p className='pickup-date'>Ready for pickup in 15 mins</p> */}
            </div>
            
        </div>
    </div>
  )
}

export default Cart