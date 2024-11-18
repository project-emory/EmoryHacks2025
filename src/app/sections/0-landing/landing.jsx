"use client";

import { useRef } from "react";
import HeroText from "./heroText";
import Parallax from "@/app/components/parallax";
import Graphics from "./graphics";
import CountdownTimer from "@/app/components/timer";

const Landing = () => {
  const landingRef = useRef(null);

  return (
    <div
      ref={landingRef}
      className="relative h-[110vw]"
    >
      <Graphics />
      {/* TITLE */}
      <Parallax speed={"xl"} containerRef={landingRef}>
        <HeroText />
      </Parallax>

      {/* COUNTDOWN TIMER */}
      <Parallax speed={"sm"} containerRef={landingRef}> {/* Optional: add parallax effect to CountdownTimer */}
        <CountdownTimer />
      </Parallax>
    </div>
  );
};

export default Landing;
