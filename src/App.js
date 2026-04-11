import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayouts from './layouts/AdminLayouts';
import UserLayouts from './layouts/UserLayouts';
import LandingPage from './pages/LandingPage';
import Menu from './pages/users/Menu';
import Cart from './pages/users/Cart';
import { useState } from 'react';
import { useToast } from './hook/useToast';
import Toast from './components/Toast';
import Checkout from './pages/users/Checkout';
import Confirmation from './pages/users/Confirmation';
import AOS from 'aos'
import 'aos/dist/aos.css';
import ScrollToTop from './hook/ScrollToTop';


function App() {

  const [cart, setCart] = useState([]);
  const { toasts, showToast } = useToast();

  return (
    <BrowserRouter>

      {/* GLOBAL TOAST  */}
      <ScrollToTop />
      <Toast toasts={toasts} />
      <Routes>

        {/* LANDING PAGE NO LAYOUT  */}
        {/* <Route path='/' /> */}
        <Route path='/' element={<LandingPage cart={cart} setCart={setCart} />} />
        <Route path='/menu' element={<Menu cart={cart} setCart={setCart} showToast={showToast} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} toasts={showToast} />} />
        <Route path='/checkout' element={<Checkout cart={cart} setCart={setCart} />} />
        <Route path='/confirmation' element={<Confirmation />} />

        {/* USER LAYOUT */}
        <Route path='/user' element={<UserLayouts />}>

        </Route>


        {/* ADMIN LAYOUT  */}
        <Route path='/admin' element={<AdminLayouts />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
