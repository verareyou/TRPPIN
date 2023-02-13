import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Overnav = () => {
  // random text animation on scrolltrigger
  const textRef = useRef(null);
  const [nav, setNav] = useState("landing");

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
      { x: "200%", y: "0%", duration: 1, ease: "power2.out", blur: "10px" },
      { x: "0%", y: "0%", duration: 1, ease: "power2.out", blur: "0" }
    );
  }, []);

  const navlinks = [
    {
      name: "Home",
      link: "landing",
      scroll: 0,
      active: nav === "landing" ? true : false,
    },
    {
      name: "Skill",
      link: "skill",
      scroll: 0,
      active: nav === "skill" ? true : false,
    },
    {
      name: "About",
      link: "about",
      scroll: 0,
      active: nav === "about" ? true : false,
    },
  ];
  return (
    <motion.div initial={{y:'100%', opacity: 0, translateX: '-50%'}} animate={{y:'0%', opacity: 1, translateX: '-50%', transition: {duration: 0.5, easing: 'easeInOut'}}}
     className="Overnav fixed rounded-lg left-1/2 bottom-0 mb-8 bg-[#000000b4] z-10 text-[#a7a7a7] flex justify-center items-center ">
      <div className=" content flex justify-center items-center m-1">
        {navlinks.map((navlink) => (
          <Link
            to={navlink.link}
            spy={true}
            duration={0}
            smooth={true}
            offset={navlink.scroll}
            frameBorder="1"
            onClick={() => {
              setNav(navlink.link);
              console.log(navlink.link);
            }}
            className={`flex h-12 w-24 cursor-pointer ${
              navlink.active ? "border-none bg-[#3d3d3d] " : ""
            } justify-center max-md:h-9 max-md:w-16 items-center ${navlink.link=== 'skill' && 'mx-1'} border border-[#5d5d5d] duration-300 ease-in-out md:hover:w-28 hover:bg-[#3c3c3c] hover:text-[#bebebe] rounded-md bg-[#3f3f3fd7] `}
          >
            <p className="z-20 font-bold text-[14px] ">{navlink.name}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Overnav;
