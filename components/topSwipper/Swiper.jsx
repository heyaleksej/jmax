"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "./swiper.css";
import "swiper/css";

const slidesData = [
    {
        technologies: "HTML, CSS, NODE JS, React JS",
        imageBig: "/portfolio/1.svg",
        imageSmall: "/portfolio/2.svg",
        flag: "/portfolio/usa.svg",
        title: "UAI. Underwater acoustics international",
        bg:"#233748",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        link: "https://uaisolutions.com/",
        theme: 'dark'
    },
    {
        technologies: "HTML, CSS, NODE JS, React JS",
        imageBig: "/portfolio/beer1.svg",
        imageSmall: "/portfolio/beer2.svg",
        flag: "/portfolio/blg.svg",
        title: "Бира Братя Прошек",
        bg:"#2A3036",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        link: "http://proshek-beer.com/",
        theme: 'dark'

    },

    {
        technologies: "HTML, CSS, NODE JS, React JS",
        imageBig: "/portfolio/loren1.svg",
        imageSmall: "/portfolio/loren2.svg",
        flag: "/portfolio/blg.svg",
        bg:"#0E0B3A",
        title: "Loren Networks",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        link: "https://lorennetworks.com/",
        theme: 'dark'

    },
    {
        technologies: "HTML, CSS, NODE JS, React JS",

        imageBig: "/portfolio/grand1.svg",
        imageSmall: "/portfolio/grand2.svg",
        bg:"#323131",
        flag: "/portfolio/blg.svg",
        title: "Grand Royale",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        link: "https://grandroyale.bg",
        theme: 'dark'

    },
    {
        technologies: "HTML, CSS, NODE JS, React JS",
        bg:"#ECEBF1",

        imageBig: "/portfolio/copywriter1.svg",
        imageSmall: "/portfolio/copywriter2.svg",
        flag: "/portfolio/blg.svg",
        title: "MyCopywriter.io",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        link: "https://mycopywriter.io",
        theme: 'light'

    },
    {
        technologies: "HTML, CSS, NODE JS, React JS",
        bg:"#F5F2EF",
        imageBig: "/portfolio/GD.svg",
        imageSmall: "/portfolio/GD2.svg",
        flag: "/portfolio/blg.svg",
        title: "GD Media Ltd.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        link: "https://gdmotion.com/",
        theme: 'light'

    },
    {
        technologies: "HTML, CSS, NODE JS, React JS",
        bg:"#D7D9D7",
        imageBig: "/portfolio/conso4s1.svg",
        imageSmall: "/portfolio/conso4s2.svg",
        flag: "/portfolio/gb.svg",
        title: "Conso4s",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        link: "https://conso4s.com/",
        theme: 'light'

    },
    {
        technologies: "HTML, CSS, NODE JS, React JS",
        bg:"#071717",
        imageBig: "/portfolio/beatclub1.svg",
        imageSmall: "/portfolio/beatclub2.svg",
        flag: "/portfolio/usa.svg",
        title: "Beatclub",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        link: "https:/beatclub.com",
        theme: 'dark'

    },
    {
        technologies: "HTML, CSS, NODE JS, React JS",
        bg:"#E8DEDD",
        imageBig: "/portfolio/fashion.svg",
        imageSmall: "/portfolio/fashion2.svg",
        flag: "/portfolio/blg.svg",
        title: "Camissafashion",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        link: "https:/camissafashion.com",
        theme: 'light'

    },
];

const MySwiper = () => {
    const [slideCount, setSlideCount] = useState(0);
    const [scrollValue, setScrollValue] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const lineContainerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (lineContainerRef.current) {
                const containerWidth = lineContainerRef.current.clientWidth;
                setScrollValue((containerWidth / slideCount) * activeIndex);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [slideCount, activeIndex]);


    const handleNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
        setScrollValue((lineContainerRef.current.clientWidth / slideCount) * swiper.realIndex);
        console.log('scrollValue', scrollValue)
    };


    return (
        <>
            <div
                className="relative  w-full font-montserrat flex flex-col md:flex-row md:justify-center items-center px-9 lg:px-32 py-5">
                <div className="line relative py-3 lg:w-[33.6%] 2xl:w-[40.2%] lg:ml-auto">
                    <Image ref={lineContainerRef} src="/Group 159.svg" alt="scroll" width={220} height={6} className="w-[24rem] 2xl:w-[36rem]"/>
                    <Image
                        src="/Group 160.svg"
                        alt="circle"
                        width={27}
                        height={27}
                        className={`absolute bottom-[1px] 2xl:bottom-[2px] -left-[9px] transition-all duration-500 ease-in-out`}
                        style={{
                            transform: `translateX(${scrollValue}px)`,
                        }}
                    />
                </div>
                <div className="swiper-count relative z-30 flex ml-5 gap-10 lg:gap-5 lg:text-[26px]">
                    <Image className="prev-button cursor-pointer" src="/arrow.svg" alt="scroll" width={20} height={20} onClick={handlePrevSlide}/>
                    <p className="text-2xl lg:text-[26px] flex flex-end font-medium min-w-[42px]">
                        <span className="text-primary"> {activeIndex + 1}</span>/
                        {slideCount}
                    </p>
                    <Image className="next-button cursor-pointer" src="/arrowr.svg" alt="arrow" width={20} height={20} onClick={handleNextSlide}/>
                </div>
                <Image
                    src="/finger-icon.svg"
                    alt="scroll"
                    width={42}
                    height={42}
                    className="absolute right-3 bottom-4"
                />
            </div>
            <Swiper
                onActiveIndexChange={handleChange}
                modules={[Navigation, Pagination, Scrollbar]}
                loop={true}
                mousewheel={true}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="!w-full portfolio"
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => {
                    setSlideCount(swiper.slides.length)
                    swiperRef.current = swiper;
                }
                }

            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className={`${
                            activeIndex == index ? "!w-3/4 lg:!w-1/2 rounded-tl-[32px]" : "secondary-slide rounded-br-[32px]"
                        } relative swiper-slide flex overflow-hidden !h-[31rem] lg:h-[38rem]`}
                        style={{background:slide.bg}}
                    >
                        <div className="relative">
                            <div className={`${
                                activeIndex == index ? "py-3 lg:pt-10" : "pt-5 py-0"
                            }  block px-9 ${slide.theme === 'light' ? 'text-[var(--dark-gray)]' : "text-white"}`}
                            >
                                <div className="font-bold	text-xs whitespace-nowrap pb-1">Technologies</div>
                                <div className="text-xxs">{slide.technologies}</div>
                            </div>
                            <Image
                                src={slide.imageBig}
                                alt="logo"
                                width={140}
                                height={180}
                                className={`${
                                    activeIndex == index ? "!h-[36rem] md:!h-[30rem]  lg:!h-[32rem]  !w-[80%] lg:!w-full left-0 -bottom-[13rem]" : "w-[90%] -bottom-[7rem] h-[22rem] lg:-left-4"
                                }  absolute z-20 rounded-lg`}
                            />
                            <div className={`${
                                activeIndex == index ? "-bottom-[10rem] left-[7rem] lg:left-0 lg:-bottom-8" : "left-36 -bottom-44"
                            }  flex relative rotate-[15deg] h-[250px] overflow-hidden rounded-lg`}>
                                <Image
                                    src={slide.imageSmall}
                                    alt="logo"
                                    width={100}
                                    height={140}
                                    className={`${
                                        activeIndex == index ? "h=[17rem] md:h-[28rem] w-[66%] md:w-[67%] lg:w-[40%] md:left-[6rem] lg:left-[29rem] bottom-16 lg:bottom-4" : "secondary-slide h-64 w-[10rem] left-16 lg:left-12 bottom-16 lg:bottom-20"
                                    }  relative z-10 -rotate-[15deg] brightness-50`}
                                />
                            </div>
                        </div>
                        <div className={`${
                                 activeIndex == index ? "flex-col md:flex-row" : ""
                             }  h-[120px] md:h-[150px] w-full flex absolute bottom-0 z-30 slide-title py-5 px-9 md:items-center`}
                        >
                            <div className="block text-white">
                                <div className="flex md:items-center pb-3 gap-3">
                                    <Image
                                        src={slide.flag}
                                        alt="logo"
                                        width={21}
                                        height={15}
                                    />
                                    <div className={`${
                                        activeIndex == index ? "lg:whitespace-nowrap md:whitespace-normal md:leading-6 md:text-xl lg:text-[22px]" : ""
                                    }  font-bold text-xs`}
                                    >{slide.title}
                                    </div>
                                </div>
                                <div className={`${
                                    activeIndex == index ? "text-xs hidden md:flex w-3/4 pb-[14px]": "text-xxs truncate-text"
                                }`}>{slide.description}
                                </div>
                            </div>
                            <a href={slide.link} target="_blank" rel="noopener noreferrer" className="relative z-30">
                                <Image
                                src="./site.svg"
                                alt="go-to"
                                width={152}
                                height={61}
                                className={`${
                                    activeIndex == index ? "cursor-pointer w-[104px] pb-1 md:w-[280px]" : "hidden"
                                }`}

                            /></a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default MySwiper;
