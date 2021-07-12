import CartItem from "../CartItem";
import React from "react";
import Image from "next/dist/client/image";
import { useState, useEffect, useCallback } from "react";

const ProductItem = ({ data, product, addToCart, removeFromCart }) => {
  const [isModal, setModal] = React.useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  addToCart = (newdata) => {
    const index = cartItems.findIndex((data) => data.id === newdata.id);
    console.log(index);
    if (!(index >= 0)) {
      console.log("im working");
      setCartOpen(true);
    }
  };

  const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
    const keydownHandler = ({ key }) => {
      switch (key) {
        case "Escape":
          onClose();
          break;
        default:
      }
    };

    React.useEffect(() => {
      document.addEventListener("keydown", keydownHandler);
      return () => document.removeEventListener("keydown", keydownHandler);
    });

    return !isVisible ? null : (
      <div className="modal cursor-auto bg-white">
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
      <div className="">
      <button className="w-full relative text-center h-64 bg-gray-300 bg-center bg-cover shadow-md object-center  border-2 border-gray-900 border-solid border-opacity-10">
            <Image
              alt="CarouselImage1"
              src={data.productImage}
              layout="fill"
              objectFit="cover"
            />
          </button>
          <div className="modal-header">
            <div>
              <h3 className="modal-title">{data.productName}</h3>
              <div className="flex mt-1 item-center">
                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-content">
              <div className="flex justify-between mt-3 item-center">
                <span className="font-bold text-gray-800 dark:text-gray-200">
                  ${data.productPrice}
                </span>
                <span>
                  <button
                    className="px-2 py-1 mr-3 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    onClick={addToCart}
                  >
                    Add to cart
                  </button>
                  <button
                    className="px-2 py-1 mr-3 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-red-800 rounded hover:bg-red-700 dark:hover:bg-red-600 focus:bg-red-700 dark:focus:bg-red-600 focus:outline-none"
                    onClick={onClose}
                  >
                    x
                  </button>
                </span>
              </div>
            </div>
          </div>
        
      </div>
      <div className="text-left bg-white px-3 py-3">
       {data.productDescription}
      </div>
      </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center  max-w-sm mb-5">
        <div className="w-56 overflow-hidden bg-white shadow-lg md:w-64 dark:bg-gray-800">
          <button
            className="w-full h-64 text-center relative bg-center bg-cover shadow-md hover:cursor-pointer"
            onClick={() => setModal(true)}
          >
            <Image
              alt="CarouselImage1"
              className="bg-center"
              src={data.productImage}
              layout="fill"
              objectFit="cover"
            />
            <Modal
              className="cursor-auto"
              isVisible={isModal}
              onClose={() => setModal(false)}
            />
          </button>
          <div className="items-center h-32 px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <div>
              <h3 className="modal-title truncate">{data.productName}</h3>
              <div className="flex mt-1 item-center">
                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>

                <svg
                  className="w-5 h-5 text-gray-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>
            </div>
            <div className="flex justify-between mt-3 item-center">
              <span className="font-bold text-gray-800 dark:text-gray-200">
                ${data.productPrice}
              </span>
              <button
                className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
