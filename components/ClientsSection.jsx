import React from "react";
import Image from "next/image";

function ClientsSection() {
  return (
    <section className="clients-container w-full relative h-[333px] sm:h-[470px] xl:h-[620px] overflow-hidden">
      <div className="text-container relative z-50 w-full h-24 flex flex-col sm:flex-row justify-between sm:justify-center sm:gap-5 sm:items-center xl:justify-between xl:px-32 mt-[62px] xl:mt-[92px] ">
        <p className="text-gold flex w-[265px] sm:w-[320px] xl:w-[750px] justify-between items-center ml-6 sm:ml-0">
          <span className="font-montserrat  gold-underline font-extralight text-lg xl:text-[46px] ">
            our
          </span>{" "}
          <span className="font-donpoligrafbum text-xl sm:text-[26px] font-bold xl:text-[66px] ">
            CLIENTS
          </span>{" "}
          <Image
            src="/Rectangle 23.svg"
            alt="-"
            width={30}
            height={8}
            className="sm:w-[30px] xl:w-[81px] xl:h-[16px] "
          />
        </p>
        <Image
          src="/Group 25.svg"
          alt="line"
          width={255}
          height={8}
          className="hidden xl:block"
        />
        <p className="text-[#EFF6F4] font-montserrat w-[230px] xl:w-[260px] text-sm xl:text-base text-center sm:text-end font-light xl:font-normal translate-x-14 sm:translate-x-0">
          Landing pages & online shops optimized for higher conversion rate &
          more sales (more clients)
        </p>
      </div>
      <div className="clients-animation-container w-[1157px] sm:w-[2200px] 2xl:w-[2700px] h-9 sm:h-[82px] absolute z-20 bottom-20 xl:bottom-48 -left-96 flex justify-between items-center ">
        <Image
          src="/Logo (3).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />

        <Image
          src="/Logo (4).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/Logo (5).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/Logo (4).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/Logo (3).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/Logo (4).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
      </div>
      <div className="clients-animation-back-container w-[1157px] sm:w-[2200px] 2xl:w-[2700px] h-9 sm:h-[82px] absolute bottom-14 sm:bottom-36 xl:bottom-[260px] -left-96 flex justify-between items-center ">
        <Image
          src="/Logo (3).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />

        <Image
          src="/Logo (4).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/Logo (5).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/Logo (4).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/Logo (3).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
        <Image
          src="/Logo (4).svg"
          alt="-"
          width={180}
          height={30}
          className=" h-full -rotate-[6.5deg]"
        />
      </div>
      <Image
        src="/Vector 18 (1).svg"
        alt="green top"
        fill
        className="absolute top-0 right-0 z-0"
      />
      <Image
        src="/Vector 19.svg"
        alt="green bottom"
        fill
        className="absolute bottom-0 left-0 z-0 w-1/12"
      />
      <div className="w-full absolute left-0 -top-12 overflow-hidden z-10">
        <div className="waves h-[550px] w-[3200px] relative z-10">
          <Image
            src="/wawes.webp"
            alt="wave"
            width={5690}
            height={550}
            className="absolute w-[5690px] max-h-[550px]"
          />
        </div>
      </div>{" "}
    </section>
  );
}

export default ClientsSection;
