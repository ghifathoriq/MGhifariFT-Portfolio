import React from "react";
import LoaderHome from "../components/loaderHome/loaderHome";
import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Who from "../components/who/who";
import About from "../components/about/about";
import Work from "../components/work/work";
// import Contact from "../components/contact/contact";
import "./home.css";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <LoaderHome />
      </div>

      <div>
        <Hero />
      </div>

      <div>
        <Who />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Work />
      </div>

      {/* <div>
        <Contact />
      </div> */}
    </>
  );
};

export default Home;
