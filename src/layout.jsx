// import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Dashboard, Product, Features, Pricing, Login } from "./pages";

const Layout = () => {
  return (
    <div className="layout transition-all">
      <>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about-us" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Product />} path="/product" />
          <Route element={<Features />} path="/features" />
          <Route element={<Pricing />} path="/pricing" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </>
    </div>
  );
};

export default Layout;
