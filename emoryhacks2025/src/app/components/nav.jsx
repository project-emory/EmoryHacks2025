"use client";

import Link from "next/link"; // Import the Link component
import { animate, motion, stagger, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Float from "./float";

gsap.registerPlugin(ScrollToPlugin);

const Nav = () => {
  const sections = ["about", "tracks", "schedule", "faq", "sponsors"];
  const [currSection, setCurrSection] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  // Update the indicator style as currSection changes
  useEffect(() => {
    if (currSection) {
      const rect = currSection.current.getBoundingClientRect();
      setIndicatorStyle((prev) => ({
        ...prev,
        opacity: 1,
        left: rect.left,
        width: rect.width,
      }));
    }
  }, [currSection]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1, ease: "backInOut" }}
      className="fixed w-screen flex justify-between gap-10 py-6 top-0 px-6 sm:px-10 z-50 bg-gradient-to-b from-[#211254dd] to-[#21125400]"
    >
      {/* LOGO */}
      <Link href="/" className="hidden md:block size-20">
        <Image src={logo} alt="logo" />
      </Link>

      {/* INDICATOR BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={indicatorStyle}
        transition={{ opacity: { delay: 1 } }}
        className="hidden md:block bg-white h-[2px] sm:h-[3px] w-10 fixed top-[45px] md:top-[76px]"
      />

      <ul className="flex w-full max-w-[700px] items-center justify-between">
        {sections.map((name, i) => (
          <NavItem name={name} setCurrSection={setCurrSection} key={i} />
        ))}
        <ApplyButton />
      </ul>
    </motion.nav>
  );
};

const NavItem = ({ name, setCurrSection }) => {
  // Scroll to corresponding section on click
  const handleClick = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${name}`,
      ease: "power2.inOut",
    });
  };

  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: "some" });

  useEffect(() => {
    sectionRef.current = document.getElementById(name);
    console.log(sectionRef.current);
  }, [name]);

  useEffect(() => {
    if (isInView) {
      setCurrSection(ref);
    }
    console.log(name, isInView);
  }, [isInView]);

  return (
    <motion.li
      ref={ref}
      animate={{ color: isInView ? "#ffffff" : "#c1c1c1" }}
      whileHover={{
        textShadow: "0px 0px 12.1px #6EB8FF",
        color: "#ffffff",
      }}
      onClick={() => handleClick()}
      className="text-[12px] sm:text-[20px] text-white font-bold cursor-pointer leading-tight"
    >
      {name.toUpperCase()}
    </motion.li>
  );
};

const ApplyButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    animate(
      ".stagger-letter-1",
      { y: isHovered ? -28 : 0, opacity: isHovered ? 0 : 1 },
      { delay: stagger(0.03, { ease: "easeOut" }), ease: "circOut" }
    );
    animate(
      ".stagger-letter-2",
      { y: isHovered ? -28 : 0, opacity: isHovered ? 1 : 0 },
      { delay: stagger(0.03, { ease: "easeOut" }), ease: "circOut" }
    );
  });

  return (
    <Link
      href="https://lu.ma/i3zb0h5t"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ background: isHovered ? "#ffffffff" : "#ffffffcc" }}
        className="relative font-bold text-brand-primary z-10 px-2 py-1 sm:px-4 sm:py-2 backdrop-blur-md rounded-md sm:rounded-lg"
      >
        <div className="overflow-hidden leading-none text-[12px] sm:text-[20px] h-[12px] sm:h-[20px]">
          <div className="mb-2">
            {"APPLY".split("").map((char, i) => (
              <div className="stagger-letter-1 inline-block" key={i}>
                {char}
              </div>
            ))}
          </div>
          <div>
            {"APPLY".split("").map((char, i) => (
              <div className="stagger-letter-2 inline-block" key={i}>
                {char}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Nav;
