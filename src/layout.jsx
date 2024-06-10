// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import Product from './pages/product/Product';
import Features from './pages/features/Features';
import Pricing from './pages/pricing/Pricing';
import Login from './pages/auth/Login';

const Layout = () => {
  return (
    <div className='layout'>
      <>
          <Routes>git
            <Route element={<Home />} path='/'/>
            <Route element={<About />} path='/about-us'/>
            <Route element={<Contact />} path='/contact'/>
            <Route element={<Dashboard />} path='/dashboard'/>
            <Route element={<Product />} path='/product'/>
            <Route element={<Features />} path='/features'/>
            <Route element={<Pricing />} path='/pricing'/>
            <Route element={<Login />} path='/login'/>
          </Routes>
      </>
    </div>
  )
}

export default Layout