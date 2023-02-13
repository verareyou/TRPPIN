import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Skill = () => {
  const [onscreen, setOnScreen] = useState("80%");
  onscroll = () => {
    if (window.scrollY > 100) {
      setOnScreen("100%");
    } else {
      setOnScreen("80%");
    }
  };

//  parallax effect
const [scrollpos, setScrollPos] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: onscreen === "100%" ? 1 : 0,
      y: scrollpos * 0.1,
      objectFit: "contain",
    },
  };

  return (
    <div className="skill h-full w-full flex relative flex-col justify-center items-center">
    <div className="frame h-full w-full absolute overflow-clip ">
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className=" absolute text-black  text-center text-[30vw] "
      >
        SKILLS
      </motion.h1>
    </div>

      <motion.div
        initial={{
          width: "0%",
          opacity: 0,
        }}
        animate={{
          width: onscreen,
          opacity: onscreen === "100%" ? 1 : 0,
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        }}
        className={`
         h-full bg-[#00000025] z-[1] backdrop-blur-[10px] `}
      ></motion.div>
    </div>
  );
};

export default Skill;
