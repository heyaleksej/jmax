"use client";
import React, { useState } from "react";

function DropDown({number}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`bg-[var(--dropdown-color)] ${
        isOpen ? "h-fit rounded-br-[14px] sm:rounded-br-[40px]" : "rounded-tl-[14px] sm:rounded-tl-[40px]"
      } transition-all duration-500 ease-in-out xl:px-[140px] p-3 sm:p-12`}
    >
      <div className="title flex leading-[0.75rem] sm:leading-[1.75rem] justify-between items-center xl:h-[120px] w-full  ">
        <p className="flex gap-3">
          <span className="text-[#CDE1DB] w-[24px] sm:w-[35px] mr-1 sm:mr-4 lg:mr-10 mt-auto font-donpoligrafbum text-xs sm:text-lg xl:text-[26px] ">
            {number > 10 ? '': 0}{number}.
          </span>{" "}
          {""}
          <span className="font-semibold  text-[10px] sm:text-base xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </p>
        <p
          className={`${
            isOpen ? "text-black " : "text-[#44937D]" 
          } cursor-pointer underline w-[36px] sm:w-[45px] ml-1 font-semibold text-[8px] sm:text-xs xl:text-2xl `}
        >
          {isOpen ? "LESS" : "MORE"}{" "}
        </p>
      </div>
      <div className={`${isOpen ? "block" : "hidden" } font-montserrat pt-5 text-xxs sm:text-base lg:text-lg pl-10 sm:pl-0`}>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <p className="mt-2">
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
