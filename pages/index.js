import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ShopLayout from "../components/layout/layout";

import Link from "next/link";
import { withSession } from "../middlewares/session";
import { useRouter, useState } from "next/router";

const Home = ({ user, products }) => {
  


  const router = useRouter();

  const onLogout = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch("/api/logout", {
        method: "POST",
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
       
     <ShopLayout  products={products}/>   
    
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const oauth = new URLSearchParams({
    consumer_key: "ck_621f6edb753dd60434f31e41b01b9a64d07c3b4e",
    consumer_secret: "cs_11b38d065996231066311034ff46e7db2e257272",
  });
  const res = await fetch(
    `https://bikemeup-ml.stackstaging.com/wp-json/wc/v3/products/?${oauth.toString()}`
  );
  const products = await res.json();
  // console.log(`i am from line 55 of index.js, ${products}`);
  // Pass data to the page via props
  return { props: { products } };
}


export default Home;


  