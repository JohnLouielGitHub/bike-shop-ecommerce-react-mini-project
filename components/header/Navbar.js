import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-green-500">
    <div>
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={logo} width={240} height={80}/>
    </a>
    </div>

  <div className="ps-8 inline w-6/12">
  <div className="bg-white flex items-center rounded-full w-auto shadow-xl h-12">
    <input className="rounded-l-full w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"/>
    
    <div className="p-4">
      <button className=" text-gray  hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
        icon
      </button>
      </div>
    </div>
  </div>


  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <button><a className="mr-3 hover:text-gray-900">First Link</a></button>
      <button><a className="mr-3 hover:text-gray-900">Second Link</a></button>
      <button><a className="mr-3 hover:text-gray-900">Third Link</a></button>
      <button><a className="mr-3 hover:text-gray-900">Fourth Link</a></button>
    </nav>
    <Link href="../../login">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign-in
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>
  </div>




</header>
</>
)
};
export default Navbar;
