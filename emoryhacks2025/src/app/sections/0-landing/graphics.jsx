"use client";

import Image from "next/image";
import { useRef } from "react";
import Parallax from "@/app/components/parallax";
import {
  asteroid,
  astronaut,
  bg,
  cloud_bl,
  cloud_r,
  dog,
  planet_bl,
  planet_br_1,
  planet_br_2,
  rocket,
} from "./graphicsData";
import Float from "@/app/components/float";
import { motion } from "framer-motion";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds
  const distant = [planet_br_1];
  const medium = [planet_br_2];
  const close = [planet_bl];

  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full bg-black"
    >
      {/* BG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          id="landing-bg"
          src={bg}
          alt="bg"
          className="absolute z-0 w-screen"
        />
      </motion.div>

      {/* GRAPHICS */}
      {distant.map((item, index) => (
        <Parallax containerRef={container} speed={"sm"} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          >
            <Image src={item} alt={"img"} className="w-screen" />
          </motion.div>
        </Parallax>
      ))}

      {/* RIGHT CLOUD */}
      <Parallax containerRef={container} speed={"sm"}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        >
          <Image src={cloud_r} alt={"img"} className="w-screen" />
        </motion.div>
      </Parallax>

      {/* BOTTOM LEFT CLOUD */}
      <Parallax containerRef={container} speed={"sm"}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        >
          <Image src={cloud_bl} alt={"img"} className="w-screen" />
        </motion.div>
      </Parallax>

      {medium.map((item, index) => (
        <Parallax containerRef={container} speed={"md"} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
          >
            <Image src={item} alt={"img"} className="w-screen" />
          </motion.div>
        </Parallax>
      ))}

      {/* ASTEROID */}
      <Parallax containerRef={container} speed={"md"}>
        <motion.div
          initial={{ x: -500, y: -500 }}
          animate={{ x: -15, y: 0 }}
          transition={{
            type: "spring",
            bounce: 1,
            stiffness: 30,
            duration: 2,
            delay: 1,
            ease: "easeOut",
          }}
          className="origin-center"
        >
          <Image src={asteroid} alt={"img"} className="w-screen" />
        </motion.div>
      </Parallax>

      {/* DOG */}
      <Parallax containerRef={container} speed={"md"}>
        <Float>
          <motion.div
            initial={{ scale: 0, opacity: 0, x: -100, y: -50 }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              bounce: 1,
              stiffness: 50,
              duration: 3,
              delay: 3.1,
              ease: "easeOut",
            }}
            className="origin-right"
          >
            <Image src={dog} alt="dog" className="w-screen" />
          </motion.div>
        </Float>
      </Parallax>

      {/* ASTRONAUT */}
      <Parallax containerRef={container} speed={"md"}>
        <Float>
          <motion.div
            initial={{ scale: 0.3, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 1,
              stiffness: 50,
              duration: 3,
              delay: 3,
              ease: "easeOut",
            }}
            className="origin-top-right"
          >
            <Image src={astronaut} alt="astronaut" className="w-screen" />
          </motion.div>
        </Float>
      </Parallax>

      {close.map((item, index) => (
        <Parallax containerRef={container} speed={"lg"} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <Image src={item} alt={"img"} className="w-screen" />
          </motion.div>
        </Parallax>
      ))}

      {/* ROCKET */}
      <Parallax containerRef={container} speed={"lg"}>
        <motion.div
          initial={{ x: 1000, y: -1000, rotateZ: 30 }}
          animate={{ x: 70, y: 0, rotateZ: 0 }}
          transition={{
            type: "spring",
            bounce: 0.3,
            stiffness: 50,
            duration: 1,
            delay: 2,
            ease: "easeOut",
          }}
          className="origin-center"
        >
          <Image src={rocket} alt="rocket" className="w-screen" />
        </motion.div>
      </Parallax>
    </div>
  );
};

export default Graphics;
