import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Overnav from "./components/Overnav";
import Landing from "./pages/Landing";
import About from "./pages/About";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skill from "./pages/Skill";

function App() {
  // text animation on scrolltrigger
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const textAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top center",
        // markers: true,
      },
    });

    textAnimation.fromTo(
      text,
      { x: "-200%", y: "0%", duration: 1, ease: "power2.out", blur: "10px" },
      { x: "0%", y: "0%", duration: 1, ease: "power2.out", blur: "0" }
    );
  }, []);

  return (
    <div className="App h-full w-full ">
      <Overnav />
      <Landing />
      <Skill />
      <About />
    </div>
  );
}

export default App;
