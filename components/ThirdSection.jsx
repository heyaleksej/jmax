import Image from "next/image";
import BottomSwiper from "./bottomSwipper/BottomSwipper"
function ThirdSection() {
  return (
    <section id='develop'>
      <div className="w-full px-9 lg:px-[133px] my-10">
        <div className="title-container w-full font-donpoligrafbum leading-[1.5rem] lg:leading-normal	 text-sm sm:text-xl lg:text-2xl xl:text-[50px] font-bold flex flex-col justify-between">
          <div className=" w-full flex justify-end gap-3 xl:gap-7">
            <span className="text-gold gold-underline">WE BELIEVE </span>{" "}
            <span className="no-underline text-black">IN OUR</span>
          </div>
          <div className="second-row relative w-full flex justify-end items-center gap-20 sm:gap-48 2xl:gap-[550px] ">
            <Image
              src="/Vector.svg"
              alt="vector"
              width={30}
              height={26}
              style={{userSelect:'none'}}
              className="dots absolute bottom-0 sm:-bottom-3 -left-9 sm:w-[68px] lg:-left-32 "
            />
            <h2 className="text-gold gold-underline">EXPERIENCE </h2>
          </div>
          <div className="w-full flex justify-end gap-3">
            {" "}
            <span>AND THE</span>{" "}
            <span className="text-gold gold-underline">STRENGTH</span>{" "}
          </div>
        </div>
        <div className="info-container relative w-full font-montserrat flex flex-col justify-between items-end border-r-[1px] border-secondary mt-5 xl:mt-[60px] pr-3 sm:pr-6 ">
          <p className="w-[175px] lg:pb-[50px] sm:w-[240px] lg:w-[480px] text-end font-semibold xl:font-normal xl:leading-[52px] sm:text-[22px] xl:text-[46px] ">
            We have gained over the years”
          </p>
          <p className="w-[216px] sm:w-[236px] lg:w-[300px] text-end text-sm sm:text-lg lg:text-[26px] font-medium ">
            of developing products of varying complexity
          </p>
         <Image
              src="/Rectangle-secondary.svg"
              alt="rectangle"
              width={7}
              height={7}
              className="absolute -top-[1px] -right-1 "
          />
            <Image
                src="/Rectangle-secondary.svg"
                alt="rectangle"
                width={7}
                height={7}
                className="absolute -bottom-[1px] -right-1"
            />
        </div>
      </div>
        <BottomSwiper/>
    </section>
  );
}

export default ThirdSection;
