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
} from "./graphicsData";
import Float from "@/app/components/float";

const Graphics = () => {
  const container = useRef(null);

  // Parallax speeds
  const distant = [comet_r, comet_l, comet_c];
  const medium = [alien_r, alien_l];
  // const close = [alien_l];

  return (
    <div
      ref={container}
      className="absolute top-0 left-0 w-full h-full bg-black"
    >
      {/* BG */}
      {/* <Float duration={6}> */}
      <Image
        id="schedule-bg"
        src={bg}
        alt="bg"
        className="absolute z-0 scale-105 w-screen"
      />
      {/* </Float> */}

      {/* GRAPHICS */}
      {distant.map((item, index) => (
        <Parallax containerRef={container} speed={"sm"} key={index}>
          <Image src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))}

      {medium.map((item, index) => (
        <Parallax containerRef={container} speed={"md"} key={index}>
          <Image src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))}
{/* 
      {close.map((item, index) => (
        <Parallax containerRef={container} speed={"lg"} key={index}>
          <Image key={index} src={item} alt={"img"} className="w-screen" />
        </Parallax>
      ))} */}
    </div>
  );
};

export default Graphics;
