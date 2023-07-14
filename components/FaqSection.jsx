import Image from "next/image";
import DropDown from "./ui/DropDown";
import React from "react";

function FaqSection() {
  return (
    <section className="px-9 sm:px-20 lg:px-32 relative">
        <Image
            src="/Vector.svg"
            alt="vector"
            width={94}
            height={81}
            style={{userSelect:'none'}}
            className="hidden sm:flex absolute -top-12 sm:right-0 lg:right-32 z-10 sm:w-[68px] sm:h-[58px] lg:w-[94px] lg:h-[81px]"
        />
      <div className="title-container sm:mb-9 lg:mb-0">
        <div className="first-container block sm:flex sm:gap-2 lg:gap-20 items-center w-full">
            <div className="flex items-center gap-10">
                <div className="flex relative items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                    <span
                        className="text-lg leading-4 lg:leading-[2.775rem] font-light lg:text-[46px] border-darkGray border-b-[1px] lg:border-b-[3px] lowercase mr-5 lg:mr-4">
                                    full
                    </span>
                        <span
                            className="font-donpoligrafbum leading-3 h-[0.35rem] text-xl sm:text-[36px] lg:text-[56px] lg:h-[3rem] lg:leading-[4rem] border-gold lg:border-b-[3px] border-solid font-bold accent-text-gold">
                    F.A.Q.                     </span>
                        <span className="bg-darkGray h-[8px] w-[30px] lg:h-[18px] lg:w-[80px] ml-5"></span>
                    </div>
                </div>
                <div className="line-container relative w-1/4 sm:w-[10%] lg:w-1/4 sm:order-1 sm:absolute sm:right-20 lg:right-[20%]">
                    <Image
                        src="/Rectangle 15.svg"
                        alt="rectangle"
                        width={7}
                        height={7}
                        className="absolute -bottom-1 -right-1 -top-[0.2rem]"
                    />
                    <hr className="w-[full] border-primary border-t-[1px]"/>
                    <Image
                        src="/Rectangle 15.svg"
                        alt="rectangle"
                        width={7}
                        height={7}
                        className="absolute -bottom-1 -left-1 -top-[0.2rem]"
                    />
                </div>
            </div>
          <div className="flex text-xs sm:text-sm px-7 sm:px-0 lg:text-base lg:leading-7 text-center py-5 sm:w-1/3 lg:w-1/5">
              Landing pages & online shops optimized for highe.
          </div>
        </div>
        <div className="second-container"></div>
      </div>
      <div className="flex flex-col gap-4 xl:mt-20">
        <DropDown number={1} />
        <DropDown number={2} />
        <DropDown number={3} />
        <DropDown number={4} />
        <DropDown number={5} />
      </div>
    </section>
  );
}

export default FaqSection;
