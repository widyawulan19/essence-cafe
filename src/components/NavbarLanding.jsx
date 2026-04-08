import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import '../styles/LandingPage.css'
import { HiOutlineShoppingBag } from "react-icons/hi";
import Cart from '../pages/users/Cart';

function NavbarLanding({cart,setCart}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [openCartBurger, setOpenCartBurger] = useState(false);
  const [burgerIsClosing, setBurgerIsClosing] = useState(false);

  // fungsi open card modal 
  const handleOpenModalCart = () =>{
    setOpenCart(!openCart)
    setIsClosing(false);
  } 

  const closeModalCart = () =>{
    setIsClosing(true);

    setTimeout(()=>{
      setOpenCart(false);
      setIsClosing(false);
    },300)
  }

  //fungsi open cart in burger mode
  const handleOpenBurgerCart = () =>{
    setOpenCartBurger(!openCartBurger)
    setBurgerIsClosing(false)
  }

  const closeBurgerCart = () =>{
    setBurgerIsClosing(true);

    setTimeout(()=>{
      setOpenCartBurger(false);
      setBurgerIsClosing(false)
    },300)
  }

  const totalQty = (cart || []).reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LEFT MENU (DESKTOP) */}
        <div className="nav-left">
          <Link to="/landing-page">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link>Gallery</Link>
          <Link>Location</Link>
        </div>

        {/* LOGO */}
        <div className="nav-center">
          <Link to="/landing-page">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="nav-right">
          <Link onClick={handleOpenModalCart} className="btn-text icon-cart">
            <HiOutlineShoppingBag />

            {totalQty > 0 && (
              <span className="cart-badge">{totalQty}</span>
            )}
          </Link>
          {openCart && (
             <div className={`cart-modal ${isClosing ? "closing": ""}`} onClick={closeModalCart} >
              <div onClick={(e) => e.stopPropagation()}>
                <Cart cart={cart} setCart={setCart} onClose={closeModalCart} isClosing={isClosing} />
              </div>
            </div>
          )}

          {/* HAMBURGER */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/pricing">Menu</Link>
          <Link>Gallery</Link>
          <Link>Location</Link>
          <Link
            onClick={handleOpenModalCart}
          >
            Cart
            {totalQty > 0 && (
              <span className='cart-badge'>{totalQty}</span>
            )}
          </Link>

          {openCartBurger && (
            <div className={`cart-modal-burger ${burgerIsClosing ? "closing" :""}`} onClick={closeBurgerCart}>
              <div onClick={(e) => e.stopPropagation()}>
                <Cart cart={cart} setCart={setCart} onClose={closeModalCart} isClosing={isClosing} />
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  )
}

export default NavbarLanding