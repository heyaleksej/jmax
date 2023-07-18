import Image from "next/image";

function TeamSection() {

    const team = [
        {
            name: 'Anna Wood',
            role: 'Project Manager',
            imageSrc: '/avatars/mouse.svg',
        },
        {
            name: 'John Done',
            role: 'CEO',
            imageSrc: '/avatars/koala.svg',
        },
        {
            name: 'John Done',
            role: 'Frontend developer',
            imageSrc: '/avatars/panda.svg',
        },
        {
            name: 'John Done',
            role: '3D Artist',
            imageSrc: '/avatars/lion.svg',
        },
        {
            name: 'John Done',
            role: 'Designer',
            imageSrc: '/avatars/rabbit.svg',
        },
    ];
    return (
        <section id="team"
                className="team-section-container relative flex flex-col xl:flex-row-reverse xl:justify-between items-end w-full px-9 md:px-20 lg:px-32 mt-[80px] sm:mt-[100px] xl:mt-[160px] py-12 xl:py-36">
                <Image
                    src="/tlight.svg"
                    alt="green top"
                    fill
                    className="absolute top-0 left-0 z-0"
                />
                <Image
                    src="/blight.svg"
                    alt="green bottom"
                    fill
                    className="absolute bottom-0 right-0 z-0 "
                />
                <div
                    className="hidden font-montserrat text-[150px] text-[#DEEBE7] team absolute bottom-4 font-bold tracking-[1.5rem]
                    sm:bottom-10
                    md:flex md:top-20 md:left-48
                    lg:top-0 lg:text-[380px]
                    2xl:text-[470px] xl:bottom-40 z-0
                    2xl:margin-auto 2xl:h-full"
                >
                    TEAM
                </div>
                <div
                    className="absolute top-10 left-16 md:left-28 lg:left-44 lg:top-48 w-[68px] xl:w-[138px] rotate-90 origin-left -translate-x-2 -translate-y-5">
                    <hr className="w-[full] border-primary border-t-[1px]"/>
                    <Image
                        src="/Rectangle 15.svg"
                        alt="rectangle"
                        width={7}
                        height={7}
                        className="absolute -bottom-[3px] -left-[2px]"
                    />
                </div>
            <div className="lg:flex lg:justify-center lg:gap-15">
                <div className="flex gap-5 md:gap-16 lg:w-[45%] lg:justify-end">
                    <div className="items-center h-[147px] w-[41px] mt-auto z-10

                                    lg:absolute lg:left-32 lg:h-[210px] lg:bottom-32">
                        <div
                            className="-rotate-180 font-montserrat lg:leading-6	text-secondary [writing-mode:vertical-rl] [text-orientation: mixed] text-xxs md:text-xs lg:text-base
                            ">
                            Landing pages &amp; online shops optimized for a higher conversion rate
                        </div>
                    </div>
                    <div className="block relative">
                        <div className="flex gap-5 justify-end items-center mb-5">
                            <div
                                className="text-lg leading-4 lg:leading-[2.775rem] font-light lg:text-5xl accent-text-gold border-solid border-b-[1px] lg:border-b-[3px]  border-gold lowercase lg:mr-4">our
                            </div>
                            <div
                                className="font-donpoligrafbum leading-3 h-[0.35rem] text-xl font-bold accent-text-gold
                                sm:text-[36px]
                                xl:text-[48px]
                                2xl:text-[56px]
                                lg:h-0 lg:leading-[1.375rem]">Team
                            </div>
                            <div>
                                <hr className="w-[30px] sm:w-[40px] xl:w-[58px] h-1 border-gold border-t-[7px] sm:border-t-[10px] xl:border-t-[13px] xl:ml-5 "/>
                            </div>
                        </div>
                        <div
                            className="text-secondary font-montserrat  text-base sm:text-lg xl:text-[22px] 2xl:text-4xl w-full mt-3 xl:mt-10 text-end xl:pr-28 ">of
                            developing products of
                        </div>
                        <div
                            className="text-secondary font-montserrat  text-base sm:text-lg xl:text-[22px] 2xl:text-4xl w-full text-end lg:pr-0 lg:mt-3">varying
                            complexity
                        </div>
                        <div className="text-xxs font-montserrat font-light mt-5 mr-9  text-[var(--green-white)]
                        md:mr-0 md:text-sm
                        lg:text-lg lg:mt-16 lg:w-3/4 lg:ml-auto lh:leading-8">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
                        </div>
                    </div>
                </div>
                <div
                    className="right-container lg:-order-1 relative flex flex-wrap justify-center mt-5 items-end xl:w-[55%] xl:left-[3rem] gap-8 md:gap-10 2xl:gap-20">
                    {team.map((user, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 z-50 hover:scale-125 transition-transform"
                        >
                            <div
                                className="frame w-[74px] h-[74px] rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10">
                                <Image
                                    src={user.imageSrc}
                                    alt="ava"
                                    width={50}
                                    height={50}
                                    className="hover:scale-120 relative"
                                />
                            </div>
                            <p className="font-montserrat font-semibold text-xs sm:text-lg lg:text-[26px] text-[#EFF6F4] transition-all">
                                {user.name}
                            </p>
                            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base transition-all">
                                {user.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
                <div className="w-full absolute left-0 top-9 overflow-hidden z-0">
                    <div className="waves h-[550px] w-[3200px] relative z-0">
                        <Image
                            src="/wawes.webp"
                            alt="wave"
                            width={5690}
                            height={550}
                            className="absolute w-[5690px] max-h-[550px] z-0"
                        />
                    </div>
                </div>
                {" "}
            </section>
    );
}

export default TeamSection;
