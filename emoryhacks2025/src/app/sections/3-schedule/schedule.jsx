"use client";

import Content from "./content";
import Graphics, { TransitionGraphics } from "./graphics";

const Schedule = () => {
  return (
    <section id="schedule">
      <div className="relative h-[86vw]">
        <Graphics />
        <Content />
      </div>
      <div className="relative h-[68vw]">
        <TransitionGraphics />
      </div>
    </section>
  );
};

export default Schedule;
