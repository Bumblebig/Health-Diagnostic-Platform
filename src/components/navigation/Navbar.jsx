import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Toggle navigation on and off
  const toggleNav = function () {
    setNav(prev => !prev);
  }

  const turnOffNav = function () {
    setNav(false)
  }

  // Toggle off mobile nav if windows size is desktop
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // close nav if window is greater
      if (window.innerWidth > 767) turnOffNav();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  return (
    <header className={`w-full transition h-auto duration-200 p-4 lg:px-6 overflow-hidden ${nav ? "bg-white" : "bg-primary text-gray-50"} fixed top-0 left-0 z-50`}>

      {/* Desktop Nav */}
      <nav className="list-none flex justify-between items-center transition-all duration-100">
        <li className="text-2xl font-semibold cursor-pointer lg:text-3xl" onClick={turnOffNav}><Link to="/">HAVVA</Link></li>

        {/* Hamburger Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-7 cursor-pointer md:hidden ${nav && "hidden"}`} onClick={toggleNav}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        {/* Cancel Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-7 cursor-pointer md:hidden ${nav ? "block" : "hidden"}`} onClick={toggleNav}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>


        <div className="hidden items-center gap-6 text-sm md:flex lg:text-base lg:gap-8">
          <Link to="/about-us" className="cursor-pointer hover:text-alt">About</Link>
          <Link to="/product" className="cursor-pointer hover:text-alt">Product</Link>
          <Link to="/features" className="cursor-pointer hover:text-alt">Features</Link>
          <Link to="pricing" className="cursor-pointer hover:text-alt">Pricing</Link>
          <Link to="contact" className="cursor-pointer hover:text-alt">Contact</Link>
          <Link to="login" className="cursor-pointer inline-block border border-white hover:bg-secondary px-4 py-1 rounded focus:outline-none transition duration-100 ease-in hover:border-transparent">Sign In</Link>
        </div>
      </nav>

      {/* Sidenav for mobile */}
      <nav className={`w-full transition duration-500 overflow-hidden ${nav ? 'h-auto' : 'h-0'}`}>
        <ul className="block pt-6">
          <Link to="/about-us" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100" onClick={toggleNav}>About</Link>
          <Link to="/product" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100" onClick={toggleNav}>Product</Link>
          <Link to="/features" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100" onClick={toggleNav}>Features</Link>
          <Link to="pricing" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100" onClick={toggleNav}>Pricing</Link>
          <Link to="contact" className="cursor-pointer text-primary text-lg block py-2 font-semibold uppercase hover:bg-slate-100" onClick={toggleNav}>Contact</Link>
          <Link to="login" className="cursor-pointer text-white text-lg block py-2 font-semibold uppercase bg-primary text-center mt-5 rounded hover:bg-transparent hover:text-primary hover:border hover:border-primary transition-all" onClick={toggleNav}>Sign In</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar