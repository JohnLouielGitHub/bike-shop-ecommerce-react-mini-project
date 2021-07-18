import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { withSession } from "../middlewares/session";
import Link from "next/link";
import Image from "../node_modules/next/image";
import logo from "../public/logo.svg";

let dummyImage = "https://www.sefiles.net/merchant/1718/images/site/Trek_Emonda_ALR_15-slimC.jpg";

const Login = ({ user }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <>

     <div className="bg-white font-family-karla h-screen">

        <div className="w-full flex flex-wrap h-screen bg-gray-500">
          <Image alt="backgroundImage" className="object-right" src={dummyImage}         
          layout="fill" objectFit="cover"/>
        <div className="z-0 w-full md:w-1/2 flex flex-col bg-white">

            <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <Image alt="Logo" src={logo} width={240} height={80}/>
            </div>

            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p className="text-center text-3xl">Welcome.</p>
                <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="username" className="text-lg">Username</label>
                        <input type="username" id="user-name" placeholder="Your username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("username", { required: true })}
                        />
                    </div>
    
                    <div className="flex flex-col pt-4">
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("password", {
                            required: true,
                          })}
                          />
                          {errors.password?.type === "required" && (
                         <span className="text-red-300">Password is required</span>
                     )}
                    </div>
                          
                    
                    <button type="submit" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                    Log In
                      </button>
                    
                </form>
                <div className="text-center pt-12 pb-12">
                    <p>Don&apos;t have an account? 
                    <Link href="/register" className="underline font-semibold">&nbsp;&nbsp;Register here.</Link></p> 
                    
                </div>
            </div>

        </div>

       
    </div>

    </div>
</>
)
};

export const getServerSideProps = withSession((context) => {
    const { req } = context;
  
    if (req.session.get("user") && req.session.get("user").token) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {},
      };
    }
  
    return {
      props: {
        user: req.session.get("user") || null,
      },
    };
});

export default Login;

