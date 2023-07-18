"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wolf from "./ui/Wolf";
import AnimatedWaves from "./ui/AnimatedWaves";

const HeadSection = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }};
  return (
    <section className="lg:pt-40 bg-[#121212] ">
      <div className="w-full h-screen lg:h-[calc(100vh-160px)] overflow-hidden relative flex flex-col-reverse xl:flex-row justify-evenly md:justify-end xl:items-start font-poppins text-white xl:pt-9 px-9 md:px-20 lg:px-32">
        <Image
            src="/Vector.svg"
            alt="vector"
            width={94}
            height={81}
            style={{userSelect:'none'}}
            className="dots hidden xl:block absolute bottom-0 left-52 z-10"
        />
        <div className="scroll absolute bottom-0 left-[calc(50%-14px)] md:left-[calc(50%-35px)] z-10 cursor-pointer" onClick={()=>scrollTo('portfolio')}>
          <Image
            src="Rectangle 1105.svg"
            alt="scroll"
            width={70}
            height={96}
            className="scroll-ico w-[28px] md:w-[70px]"
          />
          <Image
            src="Group 156.svg"
            alt="arrow"
            width={30}
            height={45}
            className="relative -top-8 left-[7px] md:-top-16 w-[14px] md:w-[30px] md:left-[20px] animate-bounce"
          />
        </div>

        <div className="left-container z-5 relative -top-12 xl:h-5/6 xl:w-6/12 flex flex-col gap-12 md:gap-15 lg:justify-between xl:mt-12  z-10" style={{userSelect: 'none'}}>
          <div className="text-container relative xl:h-[370px] lg:text-[48px] gap-1 flex flex-col justify-between xl:mt-0 z-50">
            <p className="text-primary font-semibold text-base sm:text-2xl lg:text-base xl:text-2xl ">
              Development
            </p>
            <div className="big-text-container text-xl md:text-[34px] font-donpoligrafbum xl:h-44 lg:mt-8 flex flex-col justify-between text-gold  font-bold lg:text-2xl xl:text-4xl ">
              <h1 className="xl:w-[750px] whitespace-nowrap	">landing pages</h1>
              <h1 className="xl:w-[750px] translate-x-9 sm:translate-x-14 lg:translate-x-36">
                online shops
              </h1>
              <h1>websites</h1>
            </div>
            <p className="text-primary mt-0 mb:mt-20 sm:text-lg mb:text-[22px] md:w-[60%] lg:text-4xl lg:leading-[50px] xl:font-light max-w-xs lg:max-w-lg xl:max-w-[620px] ">
              We work with you until the site starts selling!
            </p>
          </div>
          <div className="buttons-container relative w-full h-[40px] sm:h-[55px] xl:w-72 flex lg:hidden justify-between items-center gap-9 sm:gap-20 z-30 ">
            <Link href="#" className="w-6/12">
              <Image
                src="/get consulting btn.svg"
                alt="button"
                width={120}
                height={40}
                className="h-full w-full"
              />
            </Link>
            <Link href="#" className="w-6/12">
              <Image
                src="/order free audit.svg"
                alt="button"
                width={120}
                height={40}
                className="h-full w-full"
              />
            </Link>
          </div>
        </div>

        <div className="right-container relative xl:-top-24 z-10 h-2/6 xl:h-5/6 flex items-center w-full xl:translate-y-8 xl:w-6/12 mt-28 lg:mt-0">
          <div className="wolf-container w-full h-[150%] md:h-[125%] lg:h-full -mt-24 md:mt-0 lg:-top-10 flex items-center xl:items-end justify-center overflow-hidden">
            <Wolf/>
          </div>
        </div>

        <AnimatedWaves />
      </div>
      <Image
        src="/Vector 18.svg"
        alt="vector"
        width={1667}
        height={566}
        style={{userSelect:'none'}}
        className="green-light absolute  -bottom-11 lg:-bottom-40 xl:-bottom-[430px] -left-1 z-0"
      />
      <Image
        src="/Vector 19.png"
        alt="greenlight"
        width={1098}
        height={593}
        className="green-light absolute top-0 right-0 z-0"
        style={{userSelect: "none"}}
      />
      <Image
        src="/vline.svg"
        alt="vline"
        width={10}
        height={950}
        className="vline absolute -bottom-[905px] h-[930px] md:-bottom-[900px] xl:-bottom-[950px] right-1/2 -translate-x-11 sm:-translate-x-8 xl:-translate-x-32 z-0"
      />
    </section>
  );
};

export default HeadSection;
