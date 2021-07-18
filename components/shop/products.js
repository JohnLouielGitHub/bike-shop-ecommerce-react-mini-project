import Footer from "../footer/Footer";
import ProductItem from "./ProductItem";
// import productsData from "../../data/products.json";
import { useState, useEffect, useCallback } from "react";



const Products = ({ products }) => {
  // let products = productsData;
  // const pages = Math.ceil(co   unt / 10);
  const [prods, setProds] = useState(products);
  const selectSortHandler = (selected) => {
    if (selected.toLowerCase() === "lowtohigh")
    {
      console.log("LowtoHigh")
      setProds([...prods].sort((a, b) => Number(a.price) - Number(b.price)));
    }

    if (selected.toLowerCase() === "hightolow"){
      console.log("HightoLow")
      setProds([...prods].sort((a, b) => Number(b.price) - Number(a.price)));
    }

    if (selected.toLowerCase() === "a-z")
    {
      console.log("A-Z")
      setProds([...prods].sort((c, d) => String(c.name) - String(d.name)));
    }
    if (selected.toLowerCase() === "z-a")
    {
      console.log("Z-A")
      setProds([...prods].sort((c, d) => String(d.name) - String(c.name)));
    }

  };

  

  return (
    <>

      <div>

      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className=" m-4 flex items-center justify-end">
            <h3 className="w-1/3 text-xl">
              Showing 1 - {prods.length} of 20 Products
            </h3>

            <h4 className="text-xl">Filter by:</h4>
            <select
              className="px-4 ml-2 rounded-full outline-none border-2 border-solid"
              placeholder="Categories"
              onChange={(e) => selectSortHandler(e.target.value)}
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT">Default</option>
              <option value="lowToHigh">Price Lowest to Highest</option>
              <option value="highToLow">Price Highest to Lowest</option>
              <option value="a-z">A to Z</option>
              <option value="z-a">Z to A</option>
            </select>
          </div>



          <div className="flex flex-wrap m-4 sm:justify-between justify-center">
            {prods.map((x) => (
              <ProductItem bike={x} key={x.id} />
            ))}
          </div>
        </div>
        {/* <div className="flex justify-center">
            <div className="flex rounded-md mt-8">
              <a
                href="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
              >
                <span>Previous</span>
              </a>
              {_.times(pages, (i) => {
                return (
                  <a
                    key={i}
                    href="#"
                    className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
                  >
                    <span>{i + 1}</span>
                  </a>
                );
              })}

              <a
                href="#"
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
              >
                <span>Next</span>
              </a>
            </div>
          </div> */}
      </section>
    </>
  );
};

export default Products;
