"use client";
import React, { useState } from "react";

function DropDown({number}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`bg-[#F4F8F3] ${
        isOpen ? "h-fit rounded-br-[40px] " : "h-[120px] rounded-tl-[40px] "
      } transition-all duration-500 ease-in-out xl:px-[140px] px-8 py-8`}
    >
      <div className="title flex justify-between items-center xl:h-[120px] w-full  ">
        <p>
          <span className="text-[#CDE1DB] font-donpoligrafbum text-xs sm:text-lg xl:text-[26px] ">
            {number}.
          </span>{" "}
          {""}
          <span className="font-semibold text-[10px] sm:text-lg xl:text-2xl pl-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </p>
        <p
          className={`${
            isOpen ? "text-black " : "text-[#44937D]"
          } cursor-pointer underline font-semibold text-[8px] sm:text-xs xl:text-2xl `}
        >
          {isOpen ? "LESS" : "MORE"}{" "}
        </p>
      </div>
      <div className={`${isOpen ? "block" : "hidden" } font-montserrat text-[10px] sm:text-base xl:text-lg`}>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <p className="xl:mt-5">
          No one rejects, dislikes, or avoids pleasure itself, because it is
          pleasure, but because those who do not know how to pursue pleasure
          rationally encounter consequences that are extremely painful. Nor
          again is there anyone who loves or pursues or desires to obtain pain
          of itself, because it is pain, but because occasionally circumstances
          occur in which toil and pain can procure him some great pleasure.
        </p>
      </div>
    </div>
  );
}

export default DropDown;
