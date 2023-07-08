"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import "./bottomSwiper.css";
import "swiper/css";

const BottomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9

  const handleChange = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };
  console.log(activeIndex);
  return (
    <>
      <div className=" relative flex">
        <Image src="/finger.svg" alt="scroll" width={63} height={56} className="finger"/>
        <Image
          src="/fingerarrow.svg"
          alt="scroll"
          width={43}
          height={56}
          className="absolute -top-1 left-9 rotate-12"
        />
      </div>
      <Swiper
        // loop={true}
        freeMode={true}
        mousewheel={true}
        spaceBetween={50}
        slidesPerView={3}
        onActiveIndexChange={handleChange}
        className="!w-full !flex !justify-between"
      >
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <Image
            src="/Group 85.svg"
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">01.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl">
              QUESTIONNAIRE{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <Image
            src="/Group 86.svg"
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">02.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl">
              wireframe{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <Image
            src="/Group 87.svg"
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">03.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl">
              copywriting{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <Image
            src="/Group 87 (1).svg"
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">04.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl">
              FIGMA DESIGN{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <Image
            src="/Group 87 (2).svg"
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">05.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl">
              VIDEO{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BottomSwiper;
