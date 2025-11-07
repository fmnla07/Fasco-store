import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Signin from './pages/Signin.jsx';
import ShopPage from './pages/ShopPage.jsx';
import SignUp from './pages/SignUp.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Password from './pages/Password.jsx';
import Confirmation from './pages/Confirmation.jsx';
import NewPassword from './pages/NewPassword.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Password" element={<Password />} />
      <Route path="/Confirmation" element={<Confirmation />} />
      <Route path="/NewPassword" element={<NewPassword />} />
      <Route path="/ShopPage" element={<ShopPage />} />
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
