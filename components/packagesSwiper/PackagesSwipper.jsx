"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PackagesSwipper = () => {
    const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9

    const handleChange = (swiper) => {
        console.log(swiper.realIndex);
        setActiveIndex(swiper.realIndex);
    };
    console.log(activeIndex);
    return (
        <>
            <div className="relative top-20 z-50 -left-9 md:top-40 md:-left-20">
                <Image src="/finger.svg" alt="scroll" width={63} height={56}/>
                <Image
                    src="/fingerarrow.svg"
                    alt="scroll"
                    width={42}
                    height={42}
                    className="absolute -top-1 left-9 rotate-12"
                />
            </div>
            <div className="!w-full flex justify-center font-montserrat">
                <Swiper
                    mousewheel={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    onActiveIndexChange={handleChange}
                    className="!w-[100!] !relative !z-30 [!overflow: visible]"
                    modules={[Navigation, Pagination, Scrollbar]}
                >
                    <SwiperSlide className="font-montserrat !w-[full]!bg-white">
                        <div
                            className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7">
                            <Image
                                key="large-image"
                                src="/large-icon.svg"
                                alt="line"
                                width={84}
                                height={100}
                                className="relative z-10"
                            />
                            <p className="text-[#DCEEE9] pl-[15px] relative tracking-[15px] -top-7 sm:top-7 md:-top-16 text-[50px] sm:text-[100px] font-bold z-0 ">
                                LARGE
                            </p>
                            <p className="relative z-10 pl-[15px] text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] bottom-[4.5rem] md:bottom-[8.5rem] ">
                                LARGE
                            </p>
                            <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl bottom-[4.5rem] md:bottom-[8.5rem]">
                                ($5-10K)
                            </p>
                        </div>
                        <div
                            className="body min-h-fit w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
                            <div className="flex">
                                <Image
                                    src="/time.svg"
                                    alt="line"
                                    width={20}
                                    height={20}
                                    className="md:w-[24px] md:h-[24px] "
                                />
                                <p className="ml-3 md:ml-6">
                                    {" "}
                                    <span className="text-[10px] md:text-base">
                    Timeframe:
                  </span>{" "}
                                    <span className="text-[#44937D] text-sm md:text-xl ml-1 font-bold ">
                    10 - 14 days
                  </span>
                                </p>
                            </div>
                            <table
                                className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
                                <tbody>
                                <tr>
                                    <td>
                                        <Image
                                            src="/marketing.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">marketing analysis</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/competetors.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">competetors analysis</td>
                                </tr>
                                <tr className="first-row">
                                    <td rowSpan={2}>
                                        <Image
                                            src="/Vector4242.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0 ">
                                        custom made design from scratch{" "}
                                    </td>
                                </tr>
                                <tr className="-translate-y-3">
                                    <td className="pl-5 md:pl-0 ">unlimited revisions</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/optm (2).svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">
                                        optimized for higher conversion rate
                                    </td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/seo.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">SEO</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/speed.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px]"
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">speed optimization</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/anm.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px]"
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">animated graphics</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/copy.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px]"
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">copywriting</td>
                                </tr>
                                </tbody>
                            </table>
                            <p className="font-semibold text-[20px] mt-10 tracking-[2.2px] ">
                                ADVANTAGES OVER COMPETITORS:
                            </p>
                            <table
                                className="w-full sm:text-[18px] text-[#44937D] font-montserrat font-medium mt-[20px]">
                                <tbody>
                                <tr className="second-row">
                                    <td>
                                        <Image
                                            src="/video.svg"
                                            alt="line"
                                            width={36}
                                            height={42}
                                            className=" "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-1 text-left">video presentation</td>
                                    {" "}
                                </tr>
                                <tr className="second-row">
                                    <td>
                                        <Image
                                            src="/organic.svg"
                                            alt="line"
                                            width={36}
                                            height={42}
                                            className=""
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-1">
                                        oragnic social media marketing
                                    </td>
                                    {" "}
                                </tr>
                                <tr className="second-row">
                                    <td>
                                        <Image
                                            src="/ads.svg"
                                            alt="line"
                                            width={36}
                                            height={42}
                                            className=" "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-1"> graphic design</td>
                                    {" "}
                                </tr>
                                <tr className="second-row">
                                    <td>
                                        <Image
                                            src="/google.svg"
                                            alt="line"
                                            width={36}
                                            height={42}
                                            className=" "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-1"> google ads, paid social ads</td>
                                    {" "}
                                </tr>
                                <tr className="second-row">
                                    <td>
                                        <Image
                                            src="/sales.svg"
                                            alt="line"
                                            width={36}
                                            height={42}
                                            className=" "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-1"> sales training for your team</td>
                                    {" "}
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="font-montserrat !w-[full] !bg-white ">
                        <div
                            className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7">
                            <Image
                                key="medium-image"
                                src="/medium (2).svg"
                                alt="line"
                                width={84}
                                height={100}
                                className="relative z-10"
                            />
                            <p className="text-[#DCEEE9] pl-[15px] relative tracking-[15px] -top-7 sm:top-7 md:-top-16 text-[50px] sm:text-[100px] font-bold z-0 ">
                                MEDIUM
                            </p>
                            <p className="relative z-10 pl-[15px] text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] bottom-[4.5rem] md:bottom-[8.5rem] ">
                                MEDIUM
                            </p>
                            <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl bottom-[4.5rem] md:bottom-[8.5rem]">
                                ($5-10K)
                            </p>
                        </div>
                        <div
                            className="body relative h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
                            <div className="flex">
                                <Image
                                    src="/time.svg"
                                    alt="line"
                                    width={20}
                                    height={20}
                                    className=" "
                                />
                                <p className="ml-3">
                                    {" "}
                                    <span className="text-[10px] md:text-base">
                    Timeframe:
                  </span>{" "}
                                    <span className="text-[#44937D] md:text-xl text-sm font-bold ">
                    10 - 14 days
                  </span>
                                </p>
                            </div>
                            <table
                                className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
                                <tbody>
                                <tr>
                                    <td>
                                        <Image
                                            src="/marketing.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">marketing analysis</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/competetors.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">competetors analysis</td>
                                </tr>
                                <tr className="first-row">
                                    <td rowSpan={2}>
                                        <Image
                                            src="/Vector4242.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0 !h-2">
                                        custom made design from scratch{" "}
                                    </td>
                                </tr>
                                <tr className="-translate-y-3">
                                    <td className="pl-5  md:pl-0">unlimited revisions</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/optm (2).svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">
                                        optimized for higher conversion rate
                                    </td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/seo.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">SEO</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/speed.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">speed optimization</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/anm.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">animated graphics</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/copy.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">copywriting</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="!bg-white ">
                        <div
                            className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7">
                            <Image
                                key="small-image"
                                src="/small (2).svg"
                                alt="line"
                                width={84}
                                height={100}
                                className="relative z-10"
                            />
                            <p className="text-[#DCEEE9] pl-[15px] relative tracking-[15px] -top-7 sm:top-7 md:-top-16 text-[60px] sm:text-[100px] font-bold z-0 ">
                                SMALL
                            </p>
                            <p className="relative z-10 pl-[15px] text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] bottom-[4.5rem] md:bottom-[8.5rem] ">
                                SMALL
                            </p>
                            <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl bottom-[4.5rem] md:bottom-[8.5rem]">
                                ($5-10K)
                            </p>
                        </div>
                        <div
                            className="relative h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
                            <div className="flex">
                                <Image
                                    src="/time.svg"
                                    alt="line"
                                    width={20}
                                    height={20}
                                    className="md:w-[24px] md:h-[24px] "
                                />
                                <p className="ml-3">
                                    {" "}
                                    <span className="text-[10px] md:text-base">
                    Timeframe:
                  </span>{" "}
                                    <span className="text-[#44937D] md:text-xl text-sm font-bold ">
                    10 - 14 days
                  </span>
                                </p>
                            </div>
                            <table
                                className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
                                <tbody>
                                <tr>
                                    <td>
                                        <Image
                                            src="/marketing.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">marketing analysis</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/competetors.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">competetors analysis</td>
                                </tr>
                                <tr className="first-row">
                                    <td rowSpan={2}>
                                        <Image
                                            src="/Vector4242.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0 !h-2">
                                        custom made design from scratch{" "}
                                    </td>
                                </tr>
                                <tr className="-translate-y-3">
                                    <td className="pl-5 md:pl-0">unlimited revisions</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/optm (2).svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">
                                        optimized for higher conversion rate
                                    </td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/seo.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">SEO</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/speed.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0">speed optimization</td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/anmgr.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="md:w-[24px] md:h-[24px] "
                                        />
                                    </td>
                                    <td className="pl-5  md:pl-0 text-[#9EB7B0] gray-through">
                                        animated graphics
                                    </td>
                                </tr>
                                <tr className="first-row">
                                    <td>
                                        <Image
                                            src="/copygr.svg"
                                            alt="line"
                                            width={20}
                                            height={20}
                                            className="text-gray-950 md:w-[24px] md:h-[24px]"
                                        />
                                    </td>
                                    <td className="pl-5 md:pl-0 text-[#9EB7B0] gray-through ">
                                        copywriting
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full absolute left-0 top-64 overflow-hidden z-10">
                <div className="waves h-[950px] w-[3200px] relative z-10">
                    <Image
                        src="/wawes.webp"
                        alt="wave"
                        width={5690}
                        height={550}
                        className="absolute w-[5690px] max-h-[950px]"
                    />
                </div>
            </div>
            {" "}
            <p className="absolute z-0 top-[550px] -right-[510px] font-bold text-[#F8F8F8] xl:text-[266px] -rotate-90">
                FEATURES
            </p>
        </>
    );
};

export default PackagesSwipper;

