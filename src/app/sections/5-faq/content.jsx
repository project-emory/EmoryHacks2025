"use client";

import ParallaxProvider from "@/app/components/parallax";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import noise from "../../../../public/noise.png";
import { raleway } from "@/app/page";
import questions from "./data.json";
import { IconCaretDownFilled } from "@tabler/icons-react";

const Content = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  const [activeQuestion, setActiveQuestion] = useState(-1);

  return (
    <div ref={container} className="w-[75vw] h-fit mx-auto z-10">
      {/* TITLE */}
      <motion.h1
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-2 text-title font-bold bg-gradient-to-r from-white to-brand-tertiary text-transparent bg-clip-text drop-shadow-title"
      >
        FAQ
      </motion.h1>

      {/* BODY */}
      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          backgroundImage: `url(${noise.src})`,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`${raleway.className} p-5 md:p-10 bg-[#ffffffaa] backdrop-blur-[33px] drop-shadow-lg rounded-[16px] md:rounded-[30px] flex flex-col gap-2 md:gap-6`}
      >
        {questions.map((q, i) => (
          <Question
            key={i}
            question={q.question}
            answer={q.answer}
            index={i}
            isLast={i === questions.length - 1}
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Question = ({
  question,
  answer,
  index,
  isLast,
  activeQuestion,
  setActiveQuestion,
}) => {
  const isActive = activeQuestion === index;

  return (
    <>
      <div
        onClick={() =>
          isActive ? setActiveQuestion(-1) : setActiveQuestion(index)
        }
        className="flex justify-between gap-4 cursor-pointer"
      >
        <div className="flex-1 overflow-hidden flex flex-col">
          <h3 className="text-body font-semibold">{question}</h3>
          <motion.p
            animate={{
              opacity: isActive ? 1 : 0,
              height: isActive ? "auto" : 0,
              marginTop: isActive ? 12 : 0,
            }}
            className="text-body-small"
          >
            {answer}
          </motion.p>
        </div>
        <motion.div
          animate={{ rotate: isActive ? -180 : 0 }}
          className="w-fit h-fit hidden sm:block"
        >
          <IconCaretDownFilled size={24} color="#505050" />
        </motion.div>
      </div>
      {!isLast && <div className="bg-[#808080] h-[1px] w-full"></div>}
    </>
  );
};

export default Content;