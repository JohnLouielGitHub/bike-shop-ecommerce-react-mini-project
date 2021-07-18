import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import {useState} from "react";
import CartItem from "../CartItem";

const Hamburger = () => {
  const [cartItems, setCartItems] = useState([]);

    return (
        <>



<div className="px-6 mt-5">
          <nav className="list-none">
          <li className="mb-3">
            <button>
            <a className="text-gray-600 hover:text-gray-800">Shop</a>
            </button>
          </li>
          <li className="mb-3">
            <button>
            <a className="text-gray-600 hover:text-gray-800">Categories</a>
            </button>
          </li>
          <li className="mb-3">
            <button>
            <a className="text-gray-600 hover:text-gray-800">About Us</a>
            </button>
          </li>
          <li className="mb-3">
           <button>
           <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
           </button>
          </li>
          <li className="mb-3">
            <button>
            <a className="text-gray-600 hover:text-gray-800">Customer Service</a>
            </button>
          </li>
          <li className="mb-3">
           <button>
           <a className="text-gray-600 hover:text-gray-800">Support</a>
           </button>
          </li>
          <li className="mb-3">
           <button>
           <a className="text-gray-600 hover:text-gray-800">Settings</a>
           </button>
          </li>
          <li className="mb-3">
           <button>
           <a className="text-gray-600 hover:text-gray-800">Logout</a>
           </button>
          </li>
        </nav>
          </div>
     
 
  

</>
)
};
export default Hamburger;
