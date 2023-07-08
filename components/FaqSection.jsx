import Image from "next/image";
import DropDown from "./ui/DropDown";

function FaqSection() {
  return (
    <section className="px-9 lg:px-32">
      <div className="title-container ">
        <div className="first-container flex w-full">
          <div className="big-text w-1/3 flex justify-start">
            <p>
              <span className="font-montserrat text-[18px]  xl:text-[46px] font-light underline ">
                full
              </span>{" "}
              {""}
              <span className="font-donpoligrafbum text-[20px] sm:text-[36px] xl:text-[56px] font-bold gold-underline text-gold ">
                F.A.Q.{" "}
              </span>
            </p>
            <hr className="w-[30px] sm:w-[81px] h-2 border-black border-t-[8px] sm:border-t-[18px] hidden xl:block translate-y-10 xl:ml-5 " />
          </div>
          <div className="text-line-container xl:w-2/3 flex justify-start items-center">
            <p className="max-w-[259px] ">
              Landing pages & online shops optimized for highe.
            </p>
            <div className="line-container relative w-[40%] xl:w-[60%]">
              <Image
                src="/Rectangle 15.svg"
                alt="rectangle"
                width={7}
                height={7}
                className="absolute -bottom-1 -right-1"
              />
              <hr className="w-[full] border-primary border-t-[1px]   " />
              <Image
                src="/Rectangle 15.svg"
                alt="rectangle"
                width={7}
                height={7}
                className="absolute -bottom-1 -left-1"
              />
            </div>
          </div>
        </div>
        <div className="second-container"></div>
      </div>
      <div className="flex flex-col gap-4 xl:mt-[124px] ">
        <DropDown number={1} />
        <DropDown number={2} />
        <DropDown number={3} />
        <DropDown number={4} />
        <DropDown number={5} />
      </div>
    </section>
  );
}

export default FaqSection;
