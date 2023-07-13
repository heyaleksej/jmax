import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="w-full footer-section-container font-montserrat">
            <div className="relative">
                <div className="py-9 lg:py-0 lg:pt-10">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={67}
                        height={100}
                        className="m-auto lg:translate-y-1"
                    />
                </div>
                <Image
                    src="/greyDots.svg"
                    alt="vector"
                    width={94}
                    height={81}
                    style={{userSelect: "none"}}
                    className="hidden lg:block dots xl:block absolute bottom-132 top-16 left-1/4 z-60"
                />
                <div className="absolute bottom-0 right-0 z-0">
                    <Image
                        src="/footer-vector.png"
                        alt="greenlight"
                        width={1098}
                        height={593}
                        className="green-light relative top-0 right-0 z-0"
                    />
                </div>
                <div
                    className="grid grid-cols-1 lg:grid-cols-4 gap-5 justify-center md:justify-start items-center lg:px-32 lg:py-10 z-70">
                    <div className="col-span-1 text-center
                    text-base
                    lg:text-lg
                    lg:justify-start
                    order-last lg:order-first mb-4 lg:mb-0 flex justify-center gap-5">
                        <span className="left-footer-text">+1 234 67 89</span>
                        <span className="left-footer-text">jmax@mail.com</span>
                    </div>
                    <div className="
                    justify-center
                    middle-footer-text
                    lg:col-span-2
                    flex
                    text-xs
                    md:text-base
                    lg:text-22px
                    flex-wrap
                    gap-5">
                        <span>Portfolio</span>
                        <span>Prices</span>
                        <span>Develop Process</span>
                        <span>F.A.Q.</span>
                    </div>
                    <div className="flex justify-center lg:justify-end lg:col-span-1 mb:py-5 lg:py-0 gap-6 z-50">
                        <Image
                            src="/greyDots.svg"
                            alt="vector"
                            width={94}
                            height={81}
                            style={{userSelect: "none"}}
                            className="hidden sm:block sm:right-24 sm:bottom-0 absolute bottom-12 lg:right-1/4 z-0"
                        />
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
            <span className="flex justify-center gap-10 py-2 text-xs md:text-sm footer-bottom-container">
        <span className="footer-label">Privacy Policy</span>
        <span className="footer-label">2023 J MAX</span>
        <span className="footer-label">Terms of use</span>
      </span>
        </div>
    );
};

export default Footer;