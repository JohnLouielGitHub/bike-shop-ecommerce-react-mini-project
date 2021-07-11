import Footer from "../footer/Footer";
import ProductItem from "./ProductItem";
import productsData from "../../data/products.json";
const Products = () => {
 
    let products = productsData;

    return (
        <>
        
<section className="text-gray-600 body-font">

  <div className="container px-5 py-24 mx-auto">

    <div className=" m-4 flex items-center justify-end">
    <h3 className="w-1/3 text-xl">Showing 1 - {products.length} of 20 Products</h3>

    <h4 className="text-xl">Filter by:</h4>
    <select class="px-4 ml-2 rounded-full outline-none border-2 border-solid" placeholder="Categories">
        <option>Default</option>
        <option>Price Lowest to Highest</option>
        <option>Price Highest to Lowest</option>
        <option>A to Z</option>
        <option>Z to A</option>
    </select>
    
    </div>

    <div className="flex flex-wrap m-4 justify-between">
    {products.map((x) => {
                          return <ProductItem data={x} key={x.id} />;
                        })}
    </div>


  </div> 
  <div className="flex justify-center">
  <div className="flex">
        <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600">
            previous
        </a>

        <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200">
            1
        </a>

        <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200">
            2
        </a>

        <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200">
            3
        </a>

        <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200">
            Next
        </a>
    </div>
    </div>
</section>

</>
)
};


export default Products;