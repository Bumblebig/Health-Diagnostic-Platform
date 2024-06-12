import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons/faMapLocationDot';

const Contact = () => {
  return (
    <div className="relative bg-[black] min-h-screen p-6 sm:p-8">
      <div className="absolute inset-0  bg-cover bg-center"></div>
      <div className="relative max-w-7xl mx-auto text-[#f8f9fa] pt-20">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold">Reach out <span className="text-[#00FF00]">→</span></h1>
            <p className="text-lg">Have a question or need assistance? Reach out to our dedicated support team. We're here to help with any inquiries you may have.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Personalized assistance</li>
              <li>Timely response</li>
              <li>Comprehensive support</li>
            </ul>
            <div className="flex space-x-4 text-3xl"> 
                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                <a href=""><FontAwesomeIcon icon={faXTwitter} /></a> 
                <a href="" ><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="" ><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
          <form className="md:w-1/2 bg-[#f8f9fa]  p-6  rounded-xl shadow-lg bg-opacity-0 backdrop-blur-md border border-white border-opacity-30 mt-6 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Name" className="p-3 bg-[#f8f9fa] border border-gray-600 rounded-xl focus:outline-none focus:ring-2  bg-opacity-15 backdrop-blur-md border border-white border-opacity-10" />
              <input type="email" placeholder="Email" className="p-3 bg-[#f8f9fa] border border-gray-600 rounded-xl focus:outline-none focus:ring-2  bg-opacity-15 backdrop-blur-md border border-white border-opacity-10" />
            </div>
            <textarea placeholder="Message" className="p-3 w-full rounded-lg h-40 bg-[#f8f9fa] border border-gray-600 rounded-xl
             focus:outline-none focus:ring-2  bg-opacity-15 backdrop-blur-md border border-white border-opacity-10 mb-6"></textarea>
            <button type="submit" className="w-full p-4 bg-secondary rounded-full text-white font-semibold rounded-md hover:bg-primary transition-colors">Submit</button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          <div className="bg-[#1a1a1a] bg-opacity-80 p-6 rounded-xl shadow-lg bg-opacity-10 backdrop-blur-md border border-white border-opacity-10">
            <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
            <h4 className="font-semibold mb-2">Email us</h4>
            <p>lorem@officelab.com</p>
          </div>
          <div className="bg-[#1a1a1a] bg-opacity-80 p-6 rounded-xl shadow-lg bg-opacity-10 backdrop-blur-md border border-white border-opacity-10">
            <a href=""><FontAwesomeIcon icon={faPhone} /></a>
            <h4 className="font-semibold mb-2">Call us</h4>
            <p>ipsum</p>
          </div>
          <div className="bg-[#1a1a1a] bg-opacity-80 p-6 rounded-xl shadow-lg bg-opacity-10 backdrop-blur-md border border-white border-opacity-10">
            <a href=""><FontAwesomeIcon icon={faMapLocationDot} /></a>
            <h4 className="font-semibold mb-2">Our location</h4>
            <p>nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;