import Image from "next/image";

function GuaranteeSection() {
  return (
    <section className="w-full relative flex font-montserrat flex-col  items-center bg-[#F3F8F3] px-9 lg:px-32 overflow-hidden">
      <div className=" z-10 w-full flex justify-center">
        <Image
          src="/blackdots.svg"
          alt="dots"
          width={94}
          height={81}
          className="absolute hidden left-0 top-0 sm:[68px] xl:[94px] "
        />
        <Image
          src="/badge.svg"
          alt="badge"
          width={148}
          height={220}
          className="py-6 mr-[12px] w-[55px] sm:w-[80px] xl:w-[174px] xl:mr-[58px] sm:mr-[20px]"
        />
          <p className="text-[54px] h-[54px] sm:text-[100px] sm:h-[100px] xl:text-[236px] xl:h-[236px] text-[#DEEBE7] bottom-12 font-bold absolute z-0">
              GUARANTEE
          </p>
      </div>
      <p className="bottom-20 font-medium sm:bottom-40 px-6 pb-8 xl:bottom-96 text-center max-w-[1380px] text-xs sm:text-[22px] xl:text-4xl leading-[22px] sm:leading-[26.82px] xl:leading-[54px] z-30">
        <span>When you buy a</span>
        {""}
        <span className="text-secondary"> Large / Medium</span> {""}
        <span>package</span> {""}
        <span className="underline">we will work with you,</span> {""}
        <span>changing the look of your site</span> {""}
        <span className="underline">
          until the moment it starts making money!
        </span>
      </p>
        <div className="w-full absolute left-0 -top-12 overflow-hidden z-10">
            <div className="waves h-[550px] w-[3200px] relative z-10">
                <Image
                    src="/wawes.webp"
                    alt="wave"
                    width={5690}
                    height={300}
                    className="absolute w-[5690px] top-[30px] sm:top-0 max-h-[50%] max-w-[50%] sm:max-h-[75%] sm:max-w-[75%] lg:max-h-[100%] lg:max-w-[100%]"
                />
            </div>
        </div>{" "}
    </section>
  );
}

export default GuaranteeSection;
