
import Image from "next/Image";
import Picture from "../../public/hero-1.png";
import Picture2 from "../../public/hero-2.png";
import Picture3 from "../../public/hero-3.png";

const Hero = () => {

let carouselImage = Picture;

    return (
        <>
<div className="carousel relative shadow-2xl bg-white z-0">
	<div className="carousel-inner relative overflow-hidden w-full">

		<input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true" defaultChecked="true"/>
		<div className="carousel-item absolute opacity-0" style={{height:"50vh"}}>
			<div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">
                <Image src={Picture3}  layout="fill" objectFit="cover"/>
                <div className="absolute bottom-16 left-36 md:inset-40">
                <div className="text-xl md:text-3xl bg-red-500 md:px-3 md:w-1/2 lg:w-1/4">Be Fit with You Bike</div>
                </div>
                </div>
                
		</div>
		<label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
		

		<input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true"/>
		<div className="carousel-item absolute opacity-0" style={{height:"50vh"}}>
			<div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">
                <Image src={Picture2}  layout="fill" objectFit="cover"/>
                <div className="absolute bottom-16 left-36 md:inset-40 flex-wrap">
                <div className="text-xl md:text-3xl bg-red-500 md:px-3 md:w-1/2 lg:w-1/4">Bike Build / Repair</div>
                </div>
                </div>
		</div>
		<label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
		

		<input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true"/>
		<div className="carousel-item absolute opacity-0" style={{height:"50vh"}}>
			<div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
                <Image src={Picture}  layout="fill" objectFit="cover"/>
                <div className="absolute bottom-36 left-36 md:inset-40 flex-wrap">
                <div className="text-xl md:text-3xl bg-red-500 md:px-3 md:w-1/2 lg:w-1/4">Poise With Your Bike</div>
                </div>
                </div>
		</div>
		<label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label htmlFor="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
        
		
	</div>

</div>
        
</>
)
};
export default Hero;