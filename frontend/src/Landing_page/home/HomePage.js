import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// UI components
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Awards from "./Award";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

const Home = () => {
  const [cookies] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) return; // ✅ Don't verify if no cookie exists

      try {
        const { data } = await axios.post(
          "http://localhost:3002/user",
          {},
          { withCredentials: true }
        );

        const { status, user } = data;
        if (status) {
          setUsername(user);
        }
      } catch (err) {
        console.log("Cookie verification failed. Not redirecting.");
        // ✅ Don't redirect anymore
      }
    };

    verifyCookie();
  }, [cookies]);

  return (
    <>
      {/* Optionally greet user */}
      {/* {username && <h2>Hello, {username}!</h2>} */}

      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      

      <ToastContainer />
    </>
  );
};

export default Home;
