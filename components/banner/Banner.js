import Image from "next/image";
import bmx from '../../public/banner/bmx.png';
import bike from '../../public/banner/bike-1.png';
import mtb from '../../public/banner/bike-2.png';
import road from '../../public/banner/road.png';

const Banner = () => {
    
    return (
        <>


        <div className="container px-5 py-3 mx-auto flex flex-wrap m-4 flex justify-center" >
        <div className="w-full flex justify-center">
        <h2 className="text-3xl px-3 py-3 text-bold">Bike Categories</h2>
        </div>
        <div className="lg:w-1/4 sm:w-1/2 p-4 relative border-4 border-transparent">
        <div className="">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover rounded-lg object-center" priority quality={100} layout="fill" src={road}/>
          <div className="px-8 py-10 relative z-10 w-full h-72 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Road Bike</h1>
            <p className="leading-relaxed">They have smooth, skinny tires and "drop" handlebars, and can be used for on-road racing. They are usually lighter than other types of bicycles. They can be ridden on paved trails, but most people find them uncomfortable and unstable on unpaved trails.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4 relative border-4 border-transparent ">
        <div className="">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover rounded-lg object-center" priority quality={100} layout="fill" src={bike}/>
          <div className="px-8 py-10 relative z-10 w-full h-72 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">City Bike</h1>
            <p className="leading-relaxed">A utility bicycle, city bicycle, urban bicycle, European City Bike (ECB), classic bike or simply city-bike, is a bicycle designed for frequent short, moderately paced rides through relatively flat urban areas.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4 relative border-4 border-transparent ">
        <div className="">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover rounded-lg object-center" priority quality={100} layout="fill" src={mtb}/>
          <div className="px-8 py-10 relative z-10 w-full h-72 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Mountain Bike</h1>
            <p className="leading-relaxed">Mountain bikes are harder to pedal and slower on pavement. But they have a cushy ride, an upright riding position, and can travel easily on a wide variety of surfaces. </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4 relative border-4 border-transparent ">
        <div className="">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover rounded-lg object-center" priority quality={100} layout="fill" src={bmx}/>
          <div className="px-8 py-10 relative z-10 w-full h-72 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">BMX</h1>
            <p className="leading-relaxed">"BMX bike" is now used to encompass race bikes, as well as those used for the dirt, vert, park, street, flatland and BMX freestyle disciplines of BMX. BMX frames are made of various types of steel, and (largely in the racing category) aluminum or carbon. </p>
          </div>
        </div>
      </div>
      </div>

</>
)
}
export default Banner;