import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ShopLayout from "../components/layout/layout";


import Link from "next/link";
import { withSession } from "../middlewares/session";
import { useRouter } from "next/router";

const Home = ({ user }) => {
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
     <ShopLayout/>
    </div>
  );
};

export const getServerSideProps = withSession((context) => {
  const { req } = context;
  return {
    props: {
      user: req.session.get("user") || null,
    },
  };
});

export default Home;

