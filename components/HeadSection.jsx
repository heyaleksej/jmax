"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wolf from "./ui/Wolf";
import AnimatedWaves from "./ui/AnimatedWaves";

const HeadSection = () => {
  return (
    <section className=" h-screen lg:pt-40 bg-[#121212] ">
      <div className="w-full h-screen overflow-hidden relative flex flex-col-reverse xl:flex-row justify-end items-center xl:items-start font-poppins text-white xl:pt-9 px-9 lg:px-32">
        <div className="scroll w-9 absolute -bottom-5 sm:-bottom-5 xl:left-1/2 lg:bottom-32">
          <Image
            src="Rectangle 1105.svg"
            alt="scroll"
            width={70}
            height={96}
            className="scroll-icon"
          />
          <Image
            src="Group 156.svg"
            alt="arrow"
            width={15}
            height={33}
            className="relative -top-11 left-[11px] animate-bounce h-12"
          />
        </div>

        <div className="left-container relative -top-12 h-[310px] xl:h-5/6 xl:w-6/12 flex flex-col justify-between xl:mt-12" style={{userSelect: 'none'}}>
          <div className="text-container relative h-[183px] sm:h-[220px] xl:h-[370px] flex flex-col justify-between xl:mt-0 z-50">
            <p className="text-primary font-semibold text-base sm:text-2xl lg:text-base xl:text-2xl ">
              Ние правим
            </p>
            <div className="big-text-container font-donpoligrafbum h-fit sm:h-28 xl:h-44 flex flex-col justify-between text-gold  font-bold text-[15px] sm:text-xl lg:text-2xl xl:text-4xl ">
              <h1 className="xl:w-[750px] ">ЛЕНДИНГ СТРАНИЦИ</h1>
              <h1 className="xl:w-[750px] translate-x-9 sm:translate-x-14 lg:translate-x-44">
                ОНЛАЙН МАГАЗИНИ
              </h1>
              <h1>УЕБ САЙТОВЕ</h1>
            </div>
            <p className="text-primary sm:text-lg lg:text-lg xl:text-3xl xl:font-light max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-[620px] ">
              И можем да се ангажираме с гаранция, че Вашият бизнес, ще започне
              да продава
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
          <Image
            src="/Vector.svg"
            alt="vector"
            width={94}
            height={81}
            className="dots hidden xl:block absolute bottom-12 right-52 z-10"
          />
        </div>

        <div className="right-container relative xl:-top-24 z-10 h-2/6 xl:h-5/6 flex items-center w-full xl:translate-y-8 xl:w-6/12 mt-28 lg:mt-0">
          <div className="wolf-container w-full h-full -translate-y-5 lg:-top-10 flex items-center xl:items-end justify-center overflow-hidden">
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
        className="vline absolute -bottom-[1150px] xl:-bottom-[1020px] right-1/2 -translate-x-11 sm:-translate-x-8 xl:-translate-x-32 z-0"
      />
    </section>
  );
};

export default HeadSection;
