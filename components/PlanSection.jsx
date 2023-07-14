import Image from "next/image";
import PackagesSwipper from "./packagesSwiper/PackagesSwipper";
import Plans from "./ui/Plans";
import AnimatedWaves from "./ui/AnimatedWaves";
function PlanSection() {
  return (
    <section className="plan-container pt-5 relative w-full pb-10 px-9 md:px-20 lg:px-32 ">
      <AnimatedWaves/>
      <p className="hidden lg:flex right-[-31rem] top-[50%] text-[54px] h-[54px] sm:text-[100px] sm:h-[100px] xl:text-[236px] xl:h-[236px] text-[#F8F8F8] tracking-[22px] bottom-12 lg:bottom-20 font-bold absolute z-0">
        FEATURES
      </p>
      <div className="text-container lg:py-20 w-full flex flex-col items-end  md:items-center xl:flex-row xl:justify-between">
        <Image
          src="/blackdots.svg"
          alt="dots"
          width={94}
          height={81}
          className="absolute w-[30px] h-6 sm:w-[66px] sm:h-[58px] xl:w-[94px] xl:h-[81px] top-7 left-0 xl:left-32 2xl:left-32 xl:top-[110px] 2xl:top-[100px]"
        />
        <div className="title-container w-[270px] sm:w-[520px] xl:w-[580px] 2xl:w-[680px] flex justify-between items-start">
          <hr className="w-[30px] sm:w-[81px] h-2 border-gold border-t-[8px] sm:border-t-[18px] translate-y-3 xl:hidden " />
          <p className="text-gold w-[160px] sm:w-[300px] xl:w-auto font-donpoligrafbum gold-underline text-xl sm:text-4xl xl:text-[56px] 2xl:text-[66px] sm:leading-[50px] xl:leading-[60px] 2xl:leading-[75px] font-bold text-end 2xl:ml-16 ">
            CHOOSE PLAN
          </p>
          <div className="xl:pl-7">
            <p className="font-montserrat text-gold text-lg sm:text-[46px] border-b-[1px] xl:border-b-[3px] leading-[1.1rem] xl:leading-[0.2rem] border-solid border-gold font-light sm:font-thin sm:py-2 xl:py-3 2xl:py-5">
              {" "}
              your
            </p>
            <hr className="w-[30px] sm:w-[81px] h-2 border-gold border-t-[8px] sm:border-t-[18px] hidden xl:block translate-y-10 " />
          </div>
        </div>

        <div className="info-container relative z-10 w-full xl:w-auto mt-5 xl:mt-0">
          <h2 className="font-donpoligrafbum font-bold text-xl sm:text-4xl xl:text-5xl">
            FEATURES
          </h2>
          <p className="text-sm sm:text-[22px] font-montserrat sm:w-[520px] font-semibold leading-[2rem] mt-3 sm:mt-6">
            <span className="text-primary green-underline">
              Landing pages & online
            </span>{" "}
            <span>shops optimized for higher</span>{" "}
            <span className="text-primary green-underline">
              conversion rate & more sales
            </span>{" "}
            <br />
            <span>(more clients)</span>
          </p>
        </div>
      </div>
      <div className="hidden xl:block">
        <Plans />
      </div>
      <div className="block xl:hidden">
        <PackagesSwipper />
      </div>
    </section>
  );
}

export default PlanSection;
