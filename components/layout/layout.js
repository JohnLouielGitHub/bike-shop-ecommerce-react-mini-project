import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'
import Products from '../shop/products'
import Banner from "../banner/Banner";
import Hero from "../hero/Hero";


const ShopLayout = () => {
    return (
        <div>
        <Navbar/>
        <Hero/>
        <Banner/>
        <Products/>
        <Footer/>
        </div>
    )
};

export default ShopLayout;        