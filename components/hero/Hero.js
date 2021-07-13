import ImageHero from "../../node_modules/next/image";
import Picture from "../../public/hero-1.png";
import Picture2 from "../../public/hero-2.png";
import Picture3 from "../../public/hero-3.png";

const Hero = () => {

	

    return (
        <>
<div className="z-10 carousel relative shadow-2xl bg-white">
	<div className="carousel-inner relative overflow-hidden w-full h-screen">

		<input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden={true} hidden={true} defaultChecked={true}/>
		<div className="carousel-item absolute opacity-0" style={{height:"50vh"}}>
			<div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">
                <ImageHero alt="CarouselImage1" src={Picture3}  layout="fill" objectFit="cover"/>
                <div className="absolute left-16 md:left-36 bottom-36 flex-wrap">
                <div className="px-6 py-2 rounded-xl text-sm md:text-6xl bg-gray-500">"BE FIT WITH  YOUR BIKE"</div>
                </div>
                </div>
                
		</div>
		<label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
		

		<input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden={true} hidden={true}/>
		<div className="carousel-item absolute opacity-0" style={{height:"50vh"}}>
			<div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">
                <ImageHero alt="CarouselImage2" src={Picture2}  layout="fill" objectFit="cover"/>
                <div className="absolute left-16 md:left-36 bottom-36 flex-wrap">
                <div className="px-6 py-2 rounded-xl text-sm md:text-6xl bg-gray-500">"REPAIR/BUILD/CUSTOMIZE YOUR BIKE"</div>
                </div>
                </div>
		</div>
		<label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
		

		<input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden={true} hidden={true}/>
		<div className="carousel-item absolute opacity-0" style={{height:"50vh"}}>
			<div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
                <ImageHero alt="CarouselImage3" src={Picture}  layout="fill" objectFit="cover"/>
                <div className="absolute left-16 md:left-36 bottom-36 flex-wrap">
                <div className="px-6 py-2 rounded-xl text-sm md:text-6xl bg-gray-500">"POISE WITH YOUR BIKE"</div>
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
