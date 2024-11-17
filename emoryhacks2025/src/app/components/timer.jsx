"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const targetDate = new Date("March 21, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <motion.div
      className="absolute top-[20vw] right-[15vw] w-[70vw] sm:w-[50vw] h-auto z-40 bg-[#ffffff88] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px] p-5 flex flex-col gap-5 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <h1 className="text-[22px] sm:text-[36px] md:text-[5vw] font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title">
        COUNTDOWN TO MARCH 21, 2025
      </h1>
      <div className="flex justify-center gap-4 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-medium">
        <div className="flex flex-col items-center">
          <p className="text-black">{timeLeft.days}</p>
          <span>Days</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-black">{timeLeft.hours}</p>
          <span>Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-black">{timeLeft.minutes}</p>
          <span>Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-black">{timeLeft.seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
