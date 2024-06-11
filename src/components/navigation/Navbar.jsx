import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle navigation on and off
  const toggleNav = function () {
    setNav(prev => !prev);
  }
  return (
    <header className="w-full transition h-auto duration-200 p-4 lg:px-6">
    {/* <header className="w-full transition-all h-auto bg-primary text-gray-50 p-4 lg:px-6"> */}
      <nav className="list-none flex justify-between items-center transition-all duration-100">
        <li className="text-2xl font-semibold cursor-pointer lg:text-3xl"><Link to="/">LOGO</Link></li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 cursor-pointer md:hidden" onClick={toggleNav}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <div className="hidden items-center gap-6 text-sm md:flex lg:text-base lg:gap-8">
          <Link to="/about-us" className="cursor-pointer hover:text-alt">About</Link>
          <Link to="/product" className="cursor-pointer hover:text-alt">Product</Link>
          <Link to="/features" className="cursor-pointer hover:text-alt">Features</Link>
          <Link to="pricing" className="cursor-pointer hover:text-alt">Pricing</Link>
          <Link to="contact" className="cursor-pointer hover:text-alt">Contact</Link>
          <Link to="login" className="cursor-pointer inline-block border border-white hover:bg-secondary px-4 py-1 rounded focus:outline-none transition duration-100 ease-in hover:border-none">Sign In</Link>
        </div>
      </nav>

      {/* Sidenav for mobile */}
      <nav className={nav ? "w-full transition-all block duration-100" : "w-full transition-all hidden duration-100"}>
        <ul className="block pt-6">
          <Link to="/about-us" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100">About</Link>
          <Link to="/product" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100">Product</Link>
          <Link to="/features" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100">Features</Link>
          <Link to="pricing" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100">Pricing</Link>
          <Link to="contact" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100">Contact</Link>
          <Link to="login" className="cursor-pointer text-white text-lg block py-2 font-semibold uppercase bg-primary text-center mt-5 rounded hover:bg-transparent hover:text-primary hover:border hover:border-primary transition-all">Sign In</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar