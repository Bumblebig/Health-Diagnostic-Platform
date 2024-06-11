import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#002626] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Company Logo */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="path/to/logo.png" alt="Company Logo" className="h-16" />
          </div>

          {/* Links */}
          <div className="w-full md:w-3/4 flex justify-around">
            <div className="flex flex-col">
              <span className="cursor-pointer hover:text-[#00FF00] font-semibold mb-4">
                <Link to="/about-us">About Us</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] font-semibold mb-4">
                <Link to="/product">Product</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] font-semibold mb-4">
                <Link to="/pricing">Pricing</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] font-semibold mb-4">
                <Link to="/contact">Contact</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] font-semibold mb-4">
                <Link to="/features">Features</Link>
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-[#00FF00]">Facebook</a>
            <a href="https://twitter.com" className="hover:text-[#00FF00]">Twitter</a>
            <a href="https://linkedin.com" className="hover:text-[#00FF00]">LinkedIn</a>
            <a href="https://instagram.com" className="hover:text-[#00FF00]">Instagram</a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            © 2024 Mcgeorge Consulting. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;