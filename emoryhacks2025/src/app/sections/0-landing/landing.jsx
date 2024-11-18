"use client";

import { useRef } from "react";
import HeroText from "./heroText";
import Parallax from "@/app/components/parallax";
import Graphics from "./graphics";

const Landing = () => {
  const landingRef = useRef(null);

  return (
    <div
      ref={landingRef}
      className="relative h-[106vw]"
    >
      <Graphics />
      {/* TITLE */}
      <Parallax speed={"xl"} containerRef={landingRef}>
        <HeroText />
      </Parallax>
    </div>
  );
};

export default Landing;
