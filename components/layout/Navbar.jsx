"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const scrollTo = (sectionId) => {
        console.log('scrollTo is called')
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('toggleMenu',!isMenuOpen )
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full font-montserrat font-semibold">
            <nav className="absolute h-28 w-full flex justify-between bg-transparent z-49 px-9 md:px-20 lg:px-32">
                <div
                    className="left-container flex items-center relative w-[33%] lg:w-[40%] h-[70px] md:h-[160px] lg:h-[120px] border-b-[1px] border-b-primary">
                    <Image
                        src="/Rectangle 15.svg"
                        alt="rectangle"
                        width={7}
                        height={7}
                        className="absolute -bottom-1 right-[23px] lg:right-28"
                    />
                    <div className="flex z-10 menu-container w-[33%] lg:border-r-[1px] border-r-primary"
                         onClick={toggleMenu}>
                        <Image
                            src="/menu.svg"
                            alt="menu"
                            width={38}
                            height={26}
                            className=""
                        />
                    </div>
                    <p className="text-white font-montserrat text-xs font-semibold lg:text-xl  hidden lg:block ml-10">
                        {" "}
                        +1 234 56 78 90
                    </p>
                </div>
                <div
                    className="logo-container w-[33%] lg:w-[20%] md:h-[5.5rem] md:mt-[2rem] lg:mt-0 lg:translate-x-0 h-14 lg:h-16 border-r border-l border-primary">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={157}
                        height={87}
                        className="m-auto lg:translate-y-1 w-20 lg:w-36 h-12 md:h-16 lg:h-24 lg:pt-4 translate-y-3"
                    />
                    <div
                        className="h-[22px] md:h-[64px] lg:h-[24px] border-b-[1px] border-b-primary relative -right-2"></div>
                </div>
                <div
                    className="right-container w-[33%] lg:w-[40%] gap-2 flex justify-end relative h-[70px] md:h-[160px] lg:h-[120px] border-b-[1px] border-b-primary">
                    <div
                        className="flex text-white relative items-center font-montserrat lg:ml-9 font-semibold text-xs sm:text-lg block lg:hidden">
                        {" "}
                        +1 234 56 78 90
                    </div>
                    <div
                        className="buttons-container hidden lg:flex  justify-around xl:w-96 items-center relative z-30">
                        <Link href="#" className="relative z-0 lg:w-5/12">
                            <hr className="nav-button h-24 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm "/>
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
            {isMenuOpen && (
                <div className="absolute flex items-center justify-center z-50">
                    <div className="absolute top-0 right-0 p-4">
                    </div>
                    <div className="bg-gray h-screen w-screen flex flex-col justify-between lg:w-[600px] backdrop-blur-2xl lg:px-32 lg:py-16 text-white rounded-md p-4">
                        <button
                            className="text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <Image
                                src="/icon-close.svg"
                                alt="close icon"
                                width={24}
                                height={24}
                                className="lg:w-[36px] lg:h-[36px]"
                            />
                        </button>
                        <ul className="lg:text-4xl flex flex-col items-center lg:items-start gap-3">
                            <li>
                                <div className="hover:text-primary hover:underline" onClick={()=>scrollTo('portfolio')}>Portfolio</div>
                            </li>
                            <li>
                                <div className="hover:text-primary hover:underline" onClick={()=>scrollTo('develop')} >Develop Process</div>
                            </li>
                            <li>
                                <div className="hover:text-primary hover:underline" onClick={()=>scrollTo('price')}>Prices</div>
                            </li>
                            <li >
                                <div className="hover:text-primary hover:underline" onClick={()=>scrollTo('faq')}>F.A.Q.</div>
                            </li>
                            <li>
                                <div className="hover:text-primary hover:underline" onClick={()=>scrollTo('team')} >Team</div>
                            </li>
                        </ul>
                        <div className="flex gap-5 relative justify-center lg:justify-start bottom-0">
                            <a className="cursor-pointer" href="https://www.instagram.com/het_alexey" target="_blank" rel="noopener noreferrer">
                                <Image src="/facebook.svg" alt="facebook" width={24} height={24}/>
                            </a>
                            <a className="cursor-pointer">
                                <Image src="/instagram.svg" alt="instagram" width={24} height={24}/>
                            </a>
                            <a className="cursor-pointer">
                                <Image src="/lnkdn.svg" alt="lnkdn" width={24} height={24}/>
                            </a>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Navbar;
