import React, { useState } from "react";
import '../../styles/users/Menu.css'
import menuData from '../../Mock-data/Categories.json'
import NavbarLanding from "../../components/NavbarLanding";
import { IoCafe, IoSearchOutline } from "react-icons/io5";
import { HiOutlinePlus, HiOutlineShoppingBag } from "react-icons/hi";
import { LuIceCreamBowl } from "react-icons/lu";
import { GiFruitBowl, GiHamburgerMenu, GiSpiralBottle  } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { TbCookieFilled } from "react-icons/tb";
import ctaImg from '../../assets/cta-menu2.png'
import FooterSection from "../Landing/FooterSection";
import logo from '../../assets/logo2.png'
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import ModalProduk from "./ModalProduk";
import optionsData from '../../Mock-data/DataOption.json'

function Menu({cart, setCart,showToast}) {
  const [selectedCategory, setSelectedCategory] = useState("coffee");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  //cart modal
  const [openCart, setOpenCart] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [openProduk, setOpenProduk] = useState(null);
  const [openBurger, setOpenBurger] = useState(false);

  console.log("cart data:", cart)

  //fungsi add to cart
  const addToCart = (product) => {
    const exist = cart.find(item =>
      item.id === product.id &&
      JSON.stringify(item.selectedOptions) === JSON.stringify(product.selectedOptions)
    );

    if (exist) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }

    showToast(`${product.name} added to cart 🛒`);
  };

  const currentCategory = menuData.find(
    (item) => item.name === selectedCategory
  );

  const filteredMenu = currentCategory?.categories.filter((item)=>
    item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  // FUNGSI BAGES
  const bagesLabel = {
    new : "New",
    popular :"Popular",
    best_seller : "Best_Seller",
    limited : "Limited"
  }

  //fungsi icon menu
  const iconMenu = {
    coffee: <IoCafe/>,
    avogato: <LuIceCreamBowl/>,
    fruity: <GiFruitBowl/>,
    seasoning:  <GiSpiralBottle/>,
    smoothies: <RiDrinks2Line/>,
    cookies : <TbCookieFilled/>
  }

  //total qty
  const totalQty = (cart || []).reduce(
    (total, item) => total + item.qty,
    0
  );

  /* =======================
  FUNGSI NAVIGASI
  ======================= */
  const navigateToLanding = () =>{
    navigate('/')
  }

  const handleOpenCart = () =>{
    setOpenCart(!openCart)
    setIsClosing(false)
  }

  const closeCart = () =>{
    setIsClosing(true);

    setTimeout(()=>{
      setOpenCart(false);
      setIsClosing(false)
    },300)
  }

  const handleOpenModal = (item, sectionName) =>{
    setOpenProduk({
      ...item,
      sectionName
    })
  }

  const handleOpenBurger = () =>{
    setOpenBurger(!openBurger)
  }



  return (
    <div className="menu-container">
      <div className="menu-navbar-box">
        <div className="menu-navbar1">
          <h4 
            onClick={navigateToLanding}>
              Landing Page
          </h4>

          <div className="menu-nav-icon" onClick={handleOpenBurger}>
            <GiHamburgerMenu/>
          </div>

          <img 
            src={logo} 
            alt="Logo pic" 
            onClick={navigateToLanding}
          />

          <div className="cart-icon-icon">
            <HiOutlineShoppingBag 
              className="icon-cart"
              onClick={handleOpenCart}
            />

            {totalQty > 0 && (
              <span className="icon-badge">{totalQty}</span>
            )}
          </div>
        </div>

        {openBurger && (
          <div className="navbar-item">
            <p onClick={navigateToLanding}>Landing Page</p>
          </div>
        )}
       
        
        
        {openCart && (
          <div className={`modal-cart ${isClosing ? "closing":""}`} onClick={closeCart}>
            <div onClick={(e) => e.stopPropagation()}>
              <Cart cart={cart} setCart={setCart} onClose={closeCart} isClosing={isClosing}/>
            </div>
          </div>
        )}
      </div>

      {/* CATEGORY BUTTON */}
      <div className="menu-navbar">
        <div className="menu-btn">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`btn ${selectedCategory === cat.name? "active":""}`}
            >
              {iconMenu[cat.name]}
              {cat.name}
            </button>
          ))}
        </div>
        <div className="menu-search">
          <input 
            type="text" 
            placeholder="Search..."
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
          />
          <IoSearchOutline className="search-icon"/>
        </div>

      </div>

   
      <div className="menu-title">
          <button>Our Menu</button>
          <h2>{currentCategory?.sub}</h2>
          <p>{currentCategory?.desc}</p>
      </div>
      

      {/* EXAMPLE MENU LIST  */}
      <div className="menu-list">
        {filteredMenu?.map((item) => (
          <div key={item.id} className="menu-card-example">
            <div className="menu-top">
              <div className="menu-left">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                </div>

                <div className="menu-img">
                  <img src={item.img} alt={item.name} />
                </div>
            </div>

            <div className="menu-btm">
              <p>Rp {item.price.toLocaleString("id-ID")}</p>
              <button onClick={()=>handleOpenModal(item, selectedCategory)}>
                Add
                <HiOutlinePlus/>
              </button>
            </div>
            
            

          </div>
        ))}
      </div>

      <div className="menu-cta">
        <div className="cta-left">
          <h4>Join the Essence Club</h4>
          <p>Get 15% off your first order and exclusive access to seasonal blends and secret menu items. Simply sign up for our newsletter.</p>
          <div className="email-form">
            <input 
              type="text" 
              placeholder="Enter your email"
            />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="cta-img">
          <img src={ctaImg} alt="cta photo" />
        </div>
      </div>

      {/* footer section  */}
      <div className="cta-footer">
        <FooterSection/>
      </div>

      {openProduk && (
        <ModalProduk
          product={openProduk}
          sectionName={openProduk.sectionName}
          optionsData={optionsData} // ⬅️ IMPORT nanti
          onClose={() => setOpenProduk(null)}
          cart={cart}
          setCart={setCart}
          showToast={showToast}
        />
      )}

    </div>
  );
}

export default Menu;