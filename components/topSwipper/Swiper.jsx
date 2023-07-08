"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "./swiper.css";
import "swiper/css";

const MySwiper = () => {
  const [slideCount, setSlideCount] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  const [scrollValue, setScrollValue] = useState(2);
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  // console.log(slideCount);
  // console.log(scrollValue);
  //   const handleSlideChange = (swiper) => {

  // setActiveIndex(swiper.activeIndex);
  //   };

  const handleChange = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
    setScrollValue((220 / slideCount) * swiper.realIndex);
    // console.log(scrollValue);
  };
  console.log(activeIndex);
  return (
    <>
      <div className="scrool h-36 w-full flex justify-end items-center pr-9 lg:pr-32">
        <div className="line relative">
          <Image src="/Group 159.svg" alt="scroll" width={230} height={6} />
          <Image
            src="/Group 160.svg"
            alt="circle"
            width={11}
            height={11}
            className={`absolute bottom-0 transition-all duration-500 ease-in-out`}
            style={{
              transform: `translateX(${scrollValue + 220 / slideCount}px)`,
              position:'absolute',
              bottom:'-4px',
            }}
          />
        </div>
        <div className="swiper-count flex ml-5 gap-3">
          <Image src="/arrow.svg" alt="scroll" width={10} height={2} />
          <p className="text-2xl font-medium">
            <span className="text-primary"> {activeIndex + 1}</span>/
            {slideCount}
          </p>
          <Image src="/arrowr.svg" alt="arrow" width={10} height={2} />
        </div>
        <div className=" relative flex">
          <Image
            src="/finger.svg"
            alt="scroll"
            width={63}
            height={56}
            className="finger"
          />
          <Image
            src="/fingerarrow.svg"
            alt="scroll"
            width={43}
            height={56}
            className="absolute -top-1 left-9 rotate-12"
          />
        </div>
      </div>
      <Swiper
        onActiveIndexChange={handleChange}
        modules={[Navigation, Pagination, Scrollbar]}
        loop={true}
        mousewheel={true}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setSlideCount(swiper.slides.length)}
        className="!h-[450px] !w-full "
      >
        <SwiperSlide
          className={`${
            activeIndex == 0 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 1 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 2 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 3 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 4 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 5 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MySwiper;
