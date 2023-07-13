import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="absolute h-28 md:h-[123px] w-full flex justify-between bg-transparent z-49  fixed px-9 lg:px-32">
        <div className="left-container flex items-center relative w-[43%] lg:w-[40%] h-[80px] lg:h-[120px] border-b-[1px] border-b-primary">
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={7}
            height={7}
            className="absolute -bottom-1 right-[23px] lg:right-28"
          />
          <div className="menu-container w-20 lg:border-r-[1px] border-r-primary ">
            <Image
              src="/menu.svg"
              alt="menu"
              width={38}
              height={26}
              className=""
            />
          </div>
          <p className="text-white font-montserrat font-semibold text-lg hidden lg:block ml-10">
            {" "}
            +1 234 56 78 90
          </p>
        </div>
        <div className="right-container gap-2 flex justify-between relative w-[55%] lg:w-[58%] h-[80px] lg:h-[120px] border-b-[1px] border-b-primary">
          <div className="logo-container w-1/2 -translate-x-8 lg:translate-x-0 lg:w-60 h-14 lg:h-16 border-r border-l border-primary">
            <Image
              src="/logo.svg"
              alt="logo"
              width={157}
              height={87}
              className="m-auto lg:translate-y-1 w-20 lg:w-36 h-28 py-5 translate-y-3"
            />
          </div>
          <p className="text-white w-1/2 font-montserrat lg:ml-9 mt-7 lg:mt-5 lg:font-semibold text-[10px] sm:text-lg block lg:hidden">
            {" "}
            +1 234 56 78 90
          </p>
          <div className="buttons-container hidden lg:flex  justify-around xl:w-96 h-28 items-center relative z-30">
            <Link href="#" className="relative z-0 lg:w-5/12">
              <hr className="nav-button h-24 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm " />
              <Image
                src="/get consulting btn.svg"
                alt="button"
                width={170}
                height={54}
                className="w-full"
              />
            </Link>
            <Link href="#" className="lg:w-5/12">
              <Image
                src="/order free audit.svg"
                alt="button"
                width={170}
                height={54}
                className="w-full"
              />
            </Link>
          </div>
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={7}
            height={7}
            className="absolute -bottom-1 right-20 lg:right-80"
          />
        </div>
        <Image
          src="/Vector 19.png"
          alt="greenlight"
          width={1098}
          height={593}
          className="green-light absolute top-0 right-0 z-0"
        />
      </nav>
    </div>
  );
};

export default Navbar;
