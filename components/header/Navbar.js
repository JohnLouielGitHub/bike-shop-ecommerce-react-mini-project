import Image from "next/image";
import logo from "../../public/logo-horizontal.svg";
import Link from "next/link";
import { useState } from "react";
import CartItem from "../CartItem";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [signIn, signInOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
      <header className="z-50 text-gray-600 body-font fixed w-screen bg-gray-500 py-3 px-3">
        <div className="container mx-auto flex flex-wrap flex-row items-center justify-around lg:justify-between">
          <Image alt="Logo" src={logo} width={128} height={64} />
          <div className="inline w-1/2 md:w-1/2 lg:w-1/4">
            <div className="flex items-center border-b-2 border-black">
              <input
                className="w-full px-3 bg-transparent focus:outline-none"
                id="search"
                type="text"
                placeholder="What can we help you?"
              />
              <button className="border-2 border-b-0 border-black bg-black text-white hover:text-gray-500 focus:outline-none flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:hidden inline-block">
            <button href="#" onClick={() => setBurgerOpen(!burgerOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap flex-row items-center justify-end lg:justify-between">
            <nav className="hidden md:block  flex flex-wrap items-center text-base justify-center">
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <Link href="/" passHref>
                  <button>
                    <li>
                      <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                        Shop
                      </a>
                    </li>
                  </button>
                </Link>
                <button>
                  <li>
                    <a
                      className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                      href="#"
                    >
                      Stories
                    </a>
                  </li>
                </button>
                <button>
                  <li>
                    <a
                      className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                      href="#"
                    >
                      Categories
                    </a>
                  </li>
                </button>
                <Link href="/about" passHref>
                  <button>
                    <li>
                      <a
                        className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                  </button>
                </Link>
                <button>
                  <li>
                    <a
                      className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </button>
              </ul>
            </nav>

            <div className="hidden md:inline flex flex-wrap flex-row  items-center justify-center">
              <button
                className="no-underline hover:text-black px-3 items-center "
                href="#"
                onClick={() => signInOpen(!signIn)}
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle fill="none" cx="12" cy="7" r="3" />
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
              </button>

              <button
                className="hidden md:inline no-underline hover:text-black px-3 items-center "
                href="#"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </button>
            </div>
            <Link href="../../login" passHref>
              <button className="hidden md:flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
                Sign-in
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`${
            cartOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
          } z-20 fixed right-0 top-0 max-w-xs w-full h-full transition duration-300 transform overflow-y-auto bg-white`}
        >
          <div className="px-6 py-4 bg-black">
            <div className=" flex items-center justify-between">
              <h3 className="text-2xl font-medium text-white">Your cart</h3>
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="text-gray-600 focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <hr className="my-3" />
          </div>

          <div className="px-6 mt-3">
            {cartItems.length ? (
              cartItems.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  removeFromCart={removeFromCart}
                />
              ))
            ) : (
              <h4>You have {cartItems.length} items in your cart.</h4>
            )}

            <div className="mt-8">
              <form className="flex items-center justify-center">
                <input
                  className="form-input w-48"
                  type="text"
                  placeholder="Add promocode"
                />
                <button className="ml-3 flex items-center px-3 py-2 bg-gray-800 text-white text-sm uppercase font-medium rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                  <span>Apply</span>
                </button>
              </form>
            </div>
            <a className="flex items-center justify-center mt-4 px-3 py-2 bg-gray-800 text-white text-sm uppercase font-medium rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
              <span>Checkout</span>
              <svg
                className="h-5 w-5 mx-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`${
            signIn ? "translate-x-0 ease-out" : "translate-x-full ease-in"
          } z-20 fixed right-0 top-0 max-w-xs w-full h-full transition duration-300 transform overflow-y-auto bg-white `}
        >
          <div className="px-6 py-4 bg-black">
            <div className=" flex items-center justify-between">
              <h3 className="text-2xl font-medium text-white">Hello User</h3>
              <button
                onClick={() => signInOpen(!signIn)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <hr className="mt-3" />
          </div>

          <div className="px-6 mt-5">
            <nav className="list-none">
              <li className="mb-3">
                <button>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </button>
              </li>
              <li className="mb-3">
                <button>
                  <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </button>
              </li>
              <li className="mb-3">
                <button>
                  <a className="text-gray-600 hover:text-gray-800">
                    Customer Service
                  </a>
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
        </div>

        <div
          className={`${
            burgerOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
          } z-20 fixed right-0 top-0 max-w-xs  md:hidden w-full h-full transition duration-300 transform overflow-y-auto bg-white`}
        >
          <div className="px-6 py-4 bg-black">
            <div className=" flex items-center justify-between">
              <h3 className="text-2xl font-medium text-white">
                Hamburger Menu
              </h3>
              <button
                onClick={() => setBurgerOpen(!burgerOpen)}
                className="text-gray-600 focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <hr className="my-3" />
          </div>
          <div className="md:hidden justify-end flex">
            <button>
              <a
                className="inline-block no-underline hover:text-black px-3 md:inline-flex items-center "
                href="#"
                onClick={() => signInOpen(!signIn) + setBurgerOpen(!burgerOpen)}
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle fill="none" cx="12" cy="7" r="3" />
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
              </a>
            </button>
            <button>
              <a
                className="pl-3 inline-block no-underline hover:text-black px-3 md:inline-flex items-center "
                href="#"
                onClick={() =>
                  setCartOpen(!cartOpen) + setBurgerOpen(!burgerOpen)
                }
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </a>
            </button>
          </div>
          <Hamburger />
        </div>
      </header>
    </>
  );
};
export default Navbar;
