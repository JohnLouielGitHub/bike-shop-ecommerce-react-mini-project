import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'
import Products from '../shop/products'
import Banner from "../banner/Banner";
import Hero from "../hero/Hero";


const ShopLayout = ({products}) => {
    return (
        <div>
        <Navbar/>
        <Hero/>
        <Banner/>
        <Products products={products}/>
        <Footer/>
        </div>
    )
};

export default ShopLayout;        