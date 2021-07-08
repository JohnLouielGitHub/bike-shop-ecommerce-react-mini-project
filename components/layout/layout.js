import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'
import Products from '../shop/products'
import Banner from "../banner/Banner";

const ShopLayout = () => {
    return (
        <div>
        <Navbar/>
        <Banner/>
        <Products/>
        <Footer/>
        </div>
    )
};

export default ShopLayout;        