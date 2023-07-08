import Image from "next/image";
import PackagesSwipper from "./packagesSwiper/PackagesSwipper";
import Plans from "./ui/Plans";
function PlanSection() {
  return (
    <section className="plan-container relative w-full pt-[83px] px-9 lg:px-32 ">
      <div className="text-container  w-full xl:h-[185px] flex flex-col items-end  md:items-center xl:flex-row xl:justify-between">
        <Image
          src="/golddots.svg"
          alt="dots"
          width={94}
          height={81}
          className="absolute w-[30px] h-6 sm:w-[66px] sm:h-[58px] xl:w-[94px] xl:h-[81px] top-[89px] left-0 xl:left-32 2xl:left-32 xl:top-[110px] 2xl:top-[100px]"
        />
        <div className="title-container w-[270px] sm:w-[520px] xl:w-[580px] 2xl:w-[680px] flex justify-between items-start">
          <hr className="w-[30px] sm:w-[81px] h-2 border-gold border-t-[8px] sm:border-t-[18px] translate-y-3 xl:hidden " />
          <p className="text-gold w-[160px] sm:w-[300px] xl:w-auto font-donpoligrafbum gold-underline text-xl sm:text-4xl xl:text-[56px] 2xl:text-[66px] sm:leading-[50px] xl:leading-[60px] 2xl:leading-[75px] font-bold text-end 2xl:ml-16 ">
            CHOOSE PLAN
          </p>
          <div className="xl:pl-7">
            <p className="font-montserrat text-gold text-lg sm:text-[46px] font-light sm:font-thin xl:gold-underline sm:py-2 xl:py-3 2xl:py-5">
              {" "}
              your
            </p>
            <hr className="w-[30px] sm:w-[81px] h-2 border-gold border-t-[8px] sm:border-t-[18px] hidden xl:block translate-y-10 " />
          </div>
        </div>

        <div className="info-container relative z-10 w-full xl:w-auto mt-10 xl:mt-0">
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
