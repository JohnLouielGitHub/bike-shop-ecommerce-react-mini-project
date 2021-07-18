import { isUndefined } from "lodash";
import Image from "next/dist/client/image";

const ProductItem = ( {bike} ) => {
	// console.log(`${bike.images[0]}`);
	// console.log(`${bike.images[0].src}`);
	return (
		<>
		  <div className="flex flex-col items-center justify-center  py-18 max-w-sm mb-5">
			<div className="w-56 overflow-hidden bg-white shadow-lg md:w-64 dark:bg-gray-800">
			  <button
				className="w-full h-64 text-center relative bg-center bg-cover shadow-md hover:cursor-pointer"
				onClick={() => setModal(true)}>
					{bike.images ? (
								<Image 
								id="product-image"
								className="transition duration-500 ease-in-out transform cursor-pointer hover:grow hover:shadow-lg hover:scale-105"
								src={`${bike.images[0].src}`}
								alt="Product Image"
								width={300} height={300}/>
							) : (
								<Image
								id="product-image"
								className="transition duration-500 ease-in-out transform cursor-pointer hover:grow hover:shadow-lg hover:scale-105"
								src="https://www.sefiles.net/merchant/1718/images/site/Trek_Emonda_ALR_15-slimC.jpg" alt="Product Image" width={300} height={300}/>
					
							)}
							</button>
			  <div className="items-center h-32 px-3 py-2 bg-gray-200 dark:bg-gray-700">
				<div>
				  <h3 className="modal-title truncate">{bike.name}</h3>
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
					${bike.price}
				  </span>
				  <button
					className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
					// onClick={addToCart}
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