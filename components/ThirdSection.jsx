import Image from "next/image";
import BottomSwiper from "./bottomSwipper/BottomSwipper"
function ThirdSection() {
  return (
    <section>
      <div className="w-full px-9 lg:px-[133px] h-[244px] sm:h-[300px] xl:h-[500px] mt-28 mb-10">
        <div className="title-container w-full font-donpoligrafbum h-[68px] sm:h-[92px] xl:h-[169px] text-sm sm:text-xl lg:text-2xl xl:text-[50px] font-bold flex flex-col justify-between">
          <h2 className="  w-full flex justify-end gap-3 xl:gap-7">
            <span className="text-gold gold-underline">WE BELIEVE </span>{" "}
            <span className="no-underline text-black">IN OUR</span>
          </h2>
          <div className="second-row relative w-full flex justify-end items-center gap-20 sm:gap-48 2xl:gap-[550px] ">
            <Image
              src="/Vector.svg"
              alt="vector"
              width={30}
              height={26}
              className="dots absolute bottom-0 sm:-bottom-3 -left-9 sm:w-[68px] lg:-left-32 "
            />
            <h2 className=" text-gold gold-underline">EXPERIENCE </h2>
          </div>
          <h2 className="w-full flex justify-end gap-3">
            {" "}
            <span>AND THE</span>{" "}
            <span className="text-gold gold-underline">STRENGTH</span>{" "}
          </h2>
        </div>
        <div className="info-container relative h-[106px] sm:h-[152px] xl:h-[210px] w-full font-montserrat flex flex-col justify-between items-end border-r-[1px] border-primary mt-5 xl:mt-[60px] pr-3 sm:pr-6 ">
          <p className="w-[175px] sm:w-[240px] xl:w-[480px] h-[31px] xl:h-[88px] text-end font-semibold xl:font-normal xl:leading-[52px] sm:text-[22px] xl:text-[46px] ">
            We have gained over the years”
          </p>
          <p className="w-[216px] sm:w-[236px] text-end text-sm sm:text-lg xl:text[26px] font-medium ">
            of developing products of varying complexity
          </p>
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={8}
            height={8}
            className="absolute top-0 -right-1 "
          />
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={8}
            height={8}
            className="absolute bottom-0 -right-1 "
          />
        </div>
      </div>
        <BottomSwiper/>
    </section>
  );
}

export default ThirdSection;
