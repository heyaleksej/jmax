"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import "./bottomSwiper.css";
import "swiper/css";


const BottomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const handleChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };


  const slidesData = [
    {
      iconSrc: "/Group 85.svg",
      title: "QUESTIONNAIRE",
      slideNumber: "01.",
    },
    {
      iconSrc: "/Group 86.svg",
      title: "wireframe",
      slideNumber: "02.",
    },
    {
      iconSrc: "/Group 87.svg",
      title: "copywriting",
      slideNumber: "03.",
    },
    {
      iconSrc: "/Group 87 (1).svg",
      title: "FIGMA DESIGN",
      slideNumber: "04.",
    },
    {
      iconSrc: "/Group 87 (2).svg",
      title: "VIDEO",
      slideNumber: "05.",
    },
    {
      iconSrc: "/Group 87 (2).svg",
      title: "development",
      slideNumber: "06.",
    },
    {
      iconSrc: "/Group 87 (2).svg",
      title: "SEO & SPEED",
      slideNumber: "07.",
    },
    {
      iconSrc: "/Group 87 (2).svg",
      title: "SOCIAL MEDIA GOOGLE ADS FB ADS IG ADS\n" +
          "TIK TOK",
      slideNumber: "08.",
    },
    {
      iconSrc: "/Group 87 (2).svg",
      title: "FURTHER IMPROVEMENT & OPTIMIZATION",
      slideNumber: "09.",
    },
  ];

  return (
      <div className="relative px-9 lg:pb-7 lg:px-32">
        <div className="accent-text-gold flex">
          <Image src="/finger-icon.svg" alt="scroll" width={42} height={42} className="finger absolute left-3 z-10 -top-7"/>
        </div>
        <Swiper
            mousewheel={true}
            spaceBetween={45}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1560: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
            onActiveIndexChange={handleChange}
            className="!w-[75%] lg:!w-full !flex !justify-between"
        >
          {slidesData.map((slide, index) => (
              <SwiperSlide key={index} className="!bg-white">
                <Image
                    src={slide.iconSrc}
                    alt="icon"
                    width={80}
                    height={80}
                    className="mt-6 "
                />
                <Image
                    src="/Vector 8 (1).svg"
                    alt="line"
                    width={202}
                    height={2}
                    className="w-1/2 "
                />

                <p className="flex gap-4 mt-6 items-baseline">
                  <span className="font-montserrat font-semibold text=xl md:text-2xl">{slide.slideNumber}</span>
                  <span className="font-donpoligrafbum leading-[1rem] md:leading-[2rem] text-primary font-bold text-xs md:text-xl">
          {slide.title.split("&").map((part, i) => (
              <span key={i}>
              {part}
                {i !== slide.title.split("&").length - 1 && (
                    <span className="font-montserrat"> & </span>
                )}
            </span>
          ))}
        </span>
                </p>
                <p className="text-xs md:text-lg font-semibold mt-6 leading-4 md:leading-7">
                  It is a long established{" "}
                  <span className="underline font-bold">
                fact that a reader will be distracted
              </span>{" "}
                  by the readable content of a page when looking at its layout.
                  <span className="underline"> The point of using Lorem Ipsum</span>
                </p>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default BottomSwiper;