import React from "react";
import bgimage from "../assets/unsplash.jpg";

const Landing = () => {
  return (
    <div className="landing h-full 
    w-full overflow-hidden flex flex-col justify-between text-[#3f3f3f] ">
      <div className="hero translate-x-[0%] translate-y-[0%] p-8 leading-[700%] max-md:leading-[200%] max-sm:leading-[100%]  ">
       <h1
        style={{
            WebkitTextStroke: "1px #000000",
            WebkitTextFillColor: "transparent",
        }}
       className=" text-[25vw] p-4 ">hello</h1>
       <h2
       className="text-[20vw]  p-4">world</h2>
      </div>
      <div className="secondHero self-end p-8 translate-y-[-10vh] ">
        <p className="
        text-2xl max-md:text-xl     
        "> — Himanshu Suthar</p>
      </div>
    </div>
  );
};

export default Landing;
