"use client";

import Image from "next/image";
import { useRef } from "react";
import Parallax from "@/app/components/parallax";
import {
  bg,
  alien_l,
  alien_r,
  comet_c,
  comet_l,
  comet_r,
  transition_bg,
  transition_cloud_l,
  transition_cloud_r,
} from "./graphicsData";
import { motion, useInView } from "framer-motion";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds
  const distant = [comet_r, comet_l, comet_c];
  const medium = [alien_r, alien_l];

  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full bg-black"
    >
      {/* BG */}
      <Image
        id="schedule-bg"
        src={bg}
        alt="bg"
        className="absolute z-0 scale-105 w-screen"
      />

      {/* GRAPHICS */}
      {distant.map((item, index) => (
        <Parallax containerRef={container} speed={"sm"} key={index}>
          <Image src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))}

      {medium.map((item, index) => (
        <Parallax containerRef={container} speed={"md"} key={index}>
          <Image src={item} alt={"img"} className="w-screen hidden xl:block" />
        </Parallax>
      ))}
    </div>
  );
};

export const TransitionGraphics = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  // Parallax speeds
  const distant = [transition_cloud_l, transition_cloud_r];

  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full bg-black"
    >
      {/* BG */}
      <Image
        id="schedule-transition-bg"
        src={transition_bg}
        alt="bg"
        className="absolute z-0 scale-105 w-screen"
      />

      {/* GRAPHICS */}
      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : -100,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Parallax containerRef={container} speed={"sm"}>
          <Image src={transition_cloud_l} alt={"img"} className="w-screen" />
        </Parallax>
      </motion.div>

      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 80,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Parallax containerRef={container} speed={"sm"}>
          <Image src={transition_cloud_r} alt={"img"} className="w-screen" />
        </Parallax>
      </motion.div>
    </div>
  );
};

export default Graphics;
