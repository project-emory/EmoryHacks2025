"use client";

import Image from "next/image";
import general_bg from "../../../../public/images/general_bg.webp";

const Graphics = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {/* BG */}
      <Image
        id="speakers-bg"
        src={general_bg}
        alt="bg"
        className="absolute z-0 w-screen"
      />
    </div>
  );
};

export default Graphics;
