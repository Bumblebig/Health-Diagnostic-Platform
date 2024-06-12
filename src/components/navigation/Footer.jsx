import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
 

const Footer = () => {
  return (
    <footer className="bg-[#002626] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-start">
          {/* Company Logo and Social Media */}
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h1 className="text-2xl font-semibold cursor-pointer lg:text-6xl"><Link to="/">HAVVA</Link></h1>
            <div className="flex space-x-4">
              <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
              <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="" ><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="" ><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="w-full md:w-3/4 flex flex-wrap justify-around">
            <div className="flex flex-col  md:items-start mb-4 md:mb-0">
              <h4 className="font-semibold text-[#5e8c61] mb-4">Company</h4>
              <span className="cursor-pointer hover:text-[#00FF00] mb-4">
                <Link to="/about">About Us</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] mb-4">
                <Link to="/contact">Contact</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] mb-4">
                <Link to="">team</Link>
             </span>
            </div>
            <div className="flex flex-col  md:items-start mb-4 md:mb-0">
              <h4 className="font-semibold text-[#5e8c61] mb-4">Products</h4>
              <span className="cursor-pointer hover:text-[#00FF00] mb-4">
                <Link to="/product">Product</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] mb-4">
                <Link to="/features">Features</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] mb-4">
                <Link to="/pricing">Pricing</Link>
              </span>
            </div>
            <div className="flex flex-col  md:items-start mb-4 md:mb-0">
              <h4 className="font-semibold text-[#5e8c61] mb-4">Resources</h4>
              <span className="cursor-pointer hover:text-[#00FF00] mb-4">
                <Link to="">Developer Docs</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] mb-4">
                <Link to="">Support</Link>
              </span>
              <span className="cursor-pointer hover:text-[#00FF00] mb-4">
                <Link to="">FAQ</Link>
              </span>
            </div>
          </div>
        </div>

    
      </div>
      <div className=" flex flex-wrap justify-center md:justify-between bg-[#5e8c61] mt-8 border-t border-gray-700 pt-4">
          <div className="text-center w-full md:w-auto mb-4 md:mb-0">
            © 2024 Mcgeorge Consulting. All Rights Reserved.
          </div>
          <div className="flex space-x-4 text-center  w-full md:w-auto">
            <Link to="/privacy" className="hover:text-[#00FF00]">Privacy policy</Link>
            <h9>|</h9>
            <Link to="/terms" className="hover:text-[#00FF00]">Terms of use</Link>
          </div>
        </div> 
    </footer>
  );
};

export default Footer;