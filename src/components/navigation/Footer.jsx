import { Link } from "react-router-dom";
const Footer = () => {
    return <footer className="mt-20 border-t py-10 border-neutral-700 list-none bg-primary text-gray-50 p-4 flex justify-between items-center lg:px-6">
            <div>
                <ul>
                <li className="cursor-pointer hover:text-alt font-semibold mb-4"><Link to="/about-us">About</Link></li>            
                <li className="cursor-pointer hover:text-alt font-semibold mb-4"><Link to="/features">Features</Link></li>
                <h3 className="cursor-pointer hover:text-alt font-semibold mb-4"><Link to="pricing">Pricing</Link></h3>           
                <h4 className="cursor-pointer hover:text-alt font-semibold mb-4"><Link to="contact">Contact</Link></h4>
                <h5 className="cursor-pointer hover:text-alt font-semibold mb-4"><Link to="/product">Product</Link></h5>
               </ul>
            </div>

            <div className="copyright">
            <h7 className="text-2xl font-semibold mb-4 cursor-pointer  "><Link to="/">LOGO</Link></h7>
          <p>&copy; [2024] [Mcgeorge consulting]. All Rights Reserved.</p>
        </div>   
     </footer>
  }
  
  export default Footer;
