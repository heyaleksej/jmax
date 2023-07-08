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
      <div className=" relative flex">
        <Image src="/finger.svg" alt="scroll" width={63} height={56} />
        <Image
          src="/fingerarrow.svg"
          alt="scroll"
          width={43}
          height={56}
          className="absolute -top-1 left-9 rotate-12"
        />
      </div>
      <div className="swiper-container !w-full flex justify-center">
        <Swiper
          // freeMode={true}
          mousewheel={true}
          spaceBetween={50}
          slidesPerView={1}
          onActiveIndexChange={handleChange}
          className=" !h-[1168px] !w-[100!] !relative !z-30 "
          modules={[Navigation, Pagination, Scrollbar]}
        >
          <SwiperSlide className="font-montserrat !w-[full] xl:!w-[540px] !h-[985px] sm:!h-[1075px] xl:!h-[1168px] !bg-white ">
            <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7">
              <Image
                src="/large-icon.svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-[125px] xl:w-[120px] "
              />
              <p className="shadoww text-[#DCEEE9] absolute tracking-[15px] left-9 sm:left-20 top-20 sm:top-7 text-[45px] sm:text-[100px] font-bold z-0 ">
                LARGE
              </p>
              <p className="relative z-10 text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] -top-6 ">
                LARGE
              </p>
              <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
                ($5-10K)
              </p>
            </div>
            <div className="body min-h-fit sm:h-[830px] xl:h-[892px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
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
                  <span className="text-[10px] xl:text-base">
                    Timeframe:
                  </span>{" "}
                  <span className="text-[#44937D] text-sm font-bold ">
                    10 - 14 days
                  </span>
                </p>
              </div>
              <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        src="/marketing.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">marketing analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/competetors.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">competetors analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td rowSpan={2}>
                      <Image
                        src="/Vector4242.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5 !h-2">
                      custom made design from scratch{" "}
                    </td>
                  </tr>
                  <tr className="-translate-y-3">
                    <td className="pl-5 ">unlimited revisions</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/optm (2).svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">
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
                        className=" "
                      />
                    </td>
                    <td className="pl-5">SEO</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/speed.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">speed optimization</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/anm.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">animated graphics</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/copy.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">copywriting</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-semibold text-[20px] mt-10 ">
                ADVANTAGES OVER COMPETITORS:
              </p>
              <table className="w-full sm:text-[18px] text-[#44937D] font-montserrat font-medium mt-[20px]">
                <tbody>
                  <tr className="second-row">
                    <td className="w-11 ">
                      <Image
                        src="/video.svg"
                        alt="line"
                        width={36}
                        height={42}
                        className=" "
                      />
                    </td>
                    <td className="pl-5 text-left">video presentation</td>{" "}
                  </tr>
                  <tr className="second-row">
                    <td>
                      <Image
                        src="/organic.svg"
                        alt="line"
                        width={36}
                        height={42}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">
                      oragnic social media marketing strategy
                    </td>{" "}
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
                    <td className="pl-5"> graphic design</td>{" "}
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
                    <td className="pl-5"> google ads, paid social ads</td>{" "}
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
                    <td className="pl-5"> sales training for your team</td>{" "}
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
          <SwiperSlide className="font-montserrat !w-[full] xl:!w-[540px] !h-[985px] sm:!h-[1075px] xl:!h-[1168px] !bg-white ">
            <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7">
              <Image
                src="/medium (2).svg"
                alt="line"
                width={84}
                height={100}
                className="relative z-10 w-[125px] xl:w-[120px] "
              />
              <p className="shadoww text-[#DCEEE9] absolute tracking-[15px] left-9 sm:left-9 top-20 sm:top-7 text-[45px] sm:text-[100px] font-bold z-0 ">
                MEDIUM
              </p>
              <p className="relative z-10 text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] -top-6 ">
                MEDIUM
              </p>
              <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
                ($5-10K)
              </p>
            </div>
            <div className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
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
                  <span className="text-[10px] xl:text-base">
                    Timeframe:
                  </span>{" "}
                  <span className="text-[#44937D] text-sm font-bold ">
                    10 - 14 days
                  </span>
                </p>
              </div>
              <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        src="/marketing.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">marketing analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/competetors.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">competetors analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td rowSpan={2}>
                      <Image
                        src="/Vector4242.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5 !h-2">
                      custom made design from scratch{" "}
                    </td>
                  </tr>
                  <tr className="-translate-y-3">
                    <td className="pl-5 ">unlimited revisions</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/optm (2).svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">
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
                        className=" "
                      />
                    </td>
                    <td className="pl-5">SEO</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/speed.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">speed optimization</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/anm.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">animated graphics</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/copy.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">copywriting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
          <SwiperSlide className="font-montserrat !w-[full] xl:!w-[540px] !h-[985px] sm:!h-[1075px] xl:!h-[1168px] !bg-white ">
            <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7">
              <Image
                src="/small (2).svg"
                alt="line"
                width={168}
                height={160}
                className="relative z-10 w-[125px] xl:w-[168px] "
              />
              <p className="shadoww text-[#DCEEE9] absolute tracking-[15px] left-9 sm:left-9 top-20 sm:top-7 text-[45px] sm:text-[100px] font-bold z-0 ">
                SMALL
              </p>
              <p className="relative z-10 text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] -top-6 ">
                SMALL
              </p>
              <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
                ($5-10K)
              </p>
            </div>
            <div className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
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
                  <span className="text-[10px] xl:text-base">
                    Timeframe:
                  </span>{" "}
                  <span className="text-[#44937D] text-sm font-bold ">
                    10 - 14 days
                  </span>
                </p>
              </div>
              <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
                <tbody>
                  <tr>
                    <td>
                      <Image
                        src="/marketing.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">marketing analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/competetors.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">competetors analysis</td>
                  </tr>
                  <tr className="first-row">
                    <td rowSpan={2}>
                      <Image
                        src="/Vector4242.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5 !h-2">
                      custom made design from scratch{" "}
                    </td>
                  </tr>
                  <tr className="-translate-y-3">
                    <td className="pl-5 ">unlimited revisions</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/optm (2).svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">
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
                        className=" "
                      />
                    </td>
                    <td className="pl-5">SEO</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/speed.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5">speed optimization</td>
                  </tr>
                  <tr className="first-row">
                    <td>
                      <Image
                        src="/anmgr.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5 text-[#9EB7B0] gray-through">
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
                        className="text-gray-950 "
                      />
                    </td>
                    <td className="pl-5 text-[#9EB7B0] gray-through ">
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
      </div>{" "}
      <p className="absolute z-0 top-[550px] -right-[510px] font-bold text-[#F8F8F8] xl:text-[266px] -rotate-90">
        FEATURES
      </p>
    </>
  );
};

export default PackagesSwipper;
