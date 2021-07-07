


const Register = () => {
  return         <>

  <body className="bg-white font-family-karla h-screen">

     <div className="w-full flex flex-wrap">

     
     <div className="w-full md:w-1/2 flex flex-col">

         <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
             <a href="#" className="bg-black text-white font-bold text-xl p-4">Logo</a>
         </div>

         <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
             <p className="text-center text-3xl">Welcome.</p>
             <form className="flex flex-col pt-3 md:pt-8" onClick="event.preventDefault();">
             <div className="flex flex-col pt-4">
                     <label htmlFor="Username" className="text-lg">User Name</label>
                     <input type="username" id="user-name" placeholder="Your Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                 </div>
                 <div className="flex flex-col pt-4">
                     <label htmlFor="email" className="text-lg">Email</label>
                     <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                 </div>
                 <div className="flex flex-col pt-4">
                     <label htmlFor="email" className="text-lg">Email</label>
                     <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                 </div>
 
                 <div className="flex flex-col pt-4">
                     <label htmlFor="password" className="text-lg">Password</label>
                     <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                 </div>
 
                 <input type="submit" value="Register" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
             </form>
            
         </div>

     </div>

    
     <div className="w-1/2 shadow-2xl">
        {/* <Image className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0"/>  */}
     </div>
 </div>

 </body>
</>
};

export default Register;
