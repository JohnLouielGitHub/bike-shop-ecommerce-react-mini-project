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
        <h2 className="text-xl py-3 text-bold">Bike Categories</h2>
        </div>
        <div className="lg:w-1/4 sm:w-1/2 p-4">
            
        <div className="flex relative">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" priority quality={100} layout="fill" src={road}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Road Bike</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" priority quality={100} layout="fill" src={bike}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">City Bike</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" priority quality={100} layout="fill" src={mtb}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Mountain Bike</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" priority quality={100} layout="fill" src={bmx}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">BMX</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      </div>

</>
)
}
export default Banner;