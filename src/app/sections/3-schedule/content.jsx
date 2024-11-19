"use client";

import ParallaxProvider from "@/app/components/parallax";
import { useRef, useState } from "react";
import { Raleway } from "next/font/google";
import { useInView, motion, AnimatePresence } from "framer-motion";
import data from "./data.json";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
});

const Content = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  const [day, setDay] = useState(1);

  return (
    <motion.div
      ref={container}
      className="absolute top-[8vw] sm:top-[12vw] right-[15vw] sm:right-[25vw] w-[70vw] sm:w-[50vw] h-auto z-40"
    >
      <ParallaxProvider containerRef={container} speed="sm">
        {/* TITLE */}
        <motion.h1
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-2 text-[22px] sm:text-[36px] md:text-[5vw] font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title"
        >
          SCHEDULE
        </motion.h1>

        {/* BODY */}
        <motion.div
          animate={{
            opacity: isInView ? 1 : 0,
            backgroundImage: "url(emoryhacks2025/noise.png)",
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`${raleway.className} p-5 md:p-10 bg-[#ffffff88] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px] flex flex-col gap-2 md:gap-5`}
        >
          {/* DAY */}
          <h3 className="font-bold text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
            DAY {day}
          </h3>

          {/* SCHEDULE */}

          <AnimatePresence mode="wait">
            <motion.div
              key={day.toString()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              data-lenis-prevent
              className="flex flex-col gap-1 sm:gap-3 md:gap-5 h-[34vw] overflow-y-scroll"
            >
              {data[day - 1].map((event, i) => (
                <ScheduleUnit event={event} key={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* BUTTONS */}
          <div className="flex justify-between">
            <motion.button
              onClick={() => {
                day !== 1 && setDay(day - 1);
              }}
              whileHover={{ color: "#000000" }}
              transition={{ duration: 0.3 }}
              style={{
                opacity: day === 1 ? 0 : 1,
                cursor: day === 1 ? "default" : "pointer",
              }}
              className="text-[#626262] flex gap-2 items-center font-bold text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px]"
            >
              <IconArrowLeft size={20} />
              DAY {day - 1}
            </motion.button>
            <motion.button
              onClick={() => {
                day !== 3 && setDay(day + 1);
              }}
              whileHover={{ color: "#000000" }}
              transition={{ duration: 0.3 }}
              style={{
                opacity: day === 3 ? 0 : 1,
                cursor: day === 3 ? "default" : "pointer",
              }}
              className="text-[#626262] flex gap-2 items-center font-bold text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px]"
            >
              DAY {day + 1}
              <IconArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </ParallaxProvider>
    </motion.div>
  );
};

const ScheduleUnit = ({ event }) => {
  return (
    <div className="border-l-2 md:border-l-4 border-white pl-2 md:pl-3">
      <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-[#484848] w-[80px] text-nowrap h-fit">
        {event.start}
      </p>
      <p className="flex-1 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-medium text-black h-fit">
        {event.name}
      </p>
    </div>
  );
};

export default Content;
