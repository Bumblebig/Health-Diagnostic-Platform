import { Link } from "react-router-dom";
import Hamburger from "./hamburger";

const Navbar = () => {
  return (
    <header>
      <nav className="list-none bg-primary text-gray-50 p-4 flex justify-between items-center lg:px-6">
        <li className="text-2xl font-semibold cursor-pointer lg:text-3xl"><Link to="/">LOGO</Link></li>

        <Hamburger className="cursor-pointer" />

        <div className="hidden items-center gap-6 text-sm md:flex lg:text-base lg:gap-8">
          <li className="cursor-pointer hover:text-alt"><Link to="/about-us">About</Link></li>
          <li className="cursor-pointer hover:text-alt"><Link to="/product">Product</Link></li>
          <li className="cursor-pointer hover:text-alt"><Link to="/features">Features</Link></li>
          <li className="cursor-pointer hover:text-alt"><Link to="pricing">Pricing</Link></li>
          <li className="cursor-pointer hover:text-alt"><Link to="contact">Contact</Link></li>
          <li className="cursor-pointer hover:text-alt"><Link to="login">Sign In</Link></li>
        </div>
      </nav>
    </header>
  )
}

export default Navbar