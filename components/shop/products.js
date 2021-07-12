import Footer from "../footer/Footer";
import ProductItem from "./ProductItem";
import productsData from "../../data/products.json";
import { useState, useEffect, useCallback } from "react";

const productsFilter = [
  {
    name: 'James',
    price: 31,
  },
  {
    name: 'John',
    price: 45,
  },
  {
    name: 'Paul',
    price: 65,
  },
  {
    name: 'Ringo',
    price: 49,
  },
  {
    name: 'George',
    price: 34,
  }
];

const names = ['James', 'John', 'Paul', 'Ringo', 'George', 'Pewdiepie'];

const Products = (count, data) => {
  let products = productsData;
  const pages = Math.ceil(count / 10);
  // const [prods, setProds] = useState(data);
  const [prods, setProds] = useState(productsFilter);

  
  const highToLow = () => productsFilter.filter(prod => prod.productPrice < 70).map(filteredProducts => (
    <li>
      {filteredProducts.productPrice}
    </li>
  ));
  
  const lowToHigh = () =>  productsFilter.filter(prod => prod.productPrice < 100).map(filteredProducts => (
    <ProductItem data={x} key={x.id}>
      {filteredProducts.productPrice}
    </ProductItem>
  ));
  return (
    <>

  <div>

    </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className=" m-4 flex items-center justify-end">
            <h3 className="w-1/3 text-xl">
              Showing 1 - {products.length} of 20 Products
            </h3>

            <h4 className="text-xl">Filter by:</h4>
            <select
              className="px-4 ml-2 rounded-full outline-none border-2 border-solid"
              placeholder="Categories"
            >
              <option value="DEFAULT">Default</option>
              <option value="lowToHigh">Price Lowest to Highest</option>
              <option value="highToLow">Price Highest to Lowest</option>
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
