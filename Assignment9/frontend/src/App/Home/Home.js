import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import background from "../Img/bg.webp";
const Home = () => {
  return (
    <div
      className="backgroundStyle"
      style={{
        backgroundImage: `url(${background})`,
        height: "690px",
      }}
    >
      <Navbar />
      <h1 className="text-center" style={{ color: "white", marginTop: "250px" }}>
        "Don't wait for right opportunity:<br/> Create It."
      </h1> 
    </div>
  );
};
export default Home;
