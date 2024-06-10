// import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
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
        <Router>
          <Routes>
            <Route Component={<Home />} path='/'/>
            <Route Component={<About />} path='/about-us'/>
            <Route Component={<Contact />} path='/contact'/>
            <Route Component={<Dashboard />} path='/dashboard'/>
            <Route Component={<Product />} path='/product'/>
            <Route Component={<Features />} path='/features'/>
            <Route Component={<Pricing />} path='/pricing'/>
            <Route Component={<Login />} path='/login'/>
          </Routes>
        </Router>
      </>
    </div>
  )
}

export default Layout