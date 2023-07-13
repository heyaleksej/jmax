"use client";
import React, { useState } from "react";
import Image from "next/image";

const FeedBackSection = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        choice: "",
        acceptance: false,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: fieldValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = {};
        if (!form.name) {
            formErrors.name = "Please enter your name";
        }
        if (!form.phone) {
            formErrors.phone = "Please enter your phone number";
        }
        if (!form.email) {
            formErrors.email = "Please enter your email";
        }
        if (!form.choice) {
            formErrors.choice = "Please select an option";
        }
        if (!form.acceptance) {
            formErrors.acceptance = "Please accept the offer";
        }

        if (Object.keys(formErrors).length === 0) {
            console.log("Form submitted:", form);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="block lg:flex font-montserrat
        px-9 pb-10 pt-20
        md:px-20
        justify-between lg:gap-14 feedback-section-container lg:py-36 lg:px-32">
            <div className="relative lg:w-1/2">
                <div className="flex items-center justify-between sm:w-10/12 w-full lg:w-full">
                    <span
                        className="text-lg leading-4 lg:leading-[2.775rem] font-light lg:text-5xl accent-text-gold border-solid border-b-[1px] lg:border-b-[3px]  border-gold lowercase mr-5 lg:mr-4">
                    Do
                    </span>
                     <span
                        className="font-donpoligrafbum leading-3 h-[0.35rem] text-xl sm:text-[36px] xl:text-[48px] 2xl:text-[54px] lg:h-0 lg:leading-[1.375rem] font-bold accent-text-gold">
                      You want
                     </span>
                    <span className="gold-line h-[8px] w-[30px] lg:h-[18px] lg:w-[80px] ml-5"></span>
                </div>
                <div className="text-base lg:text-5xl-custom mt-5 lg:mt-12">to order a website or</div>
                <div className="text-base mb-5 lg:text-5xl-custom ml-7 lg:mb-10">application</div>
                <div
                    className="text-base accent-text-gold ml-14
                               lg:text-4xl lg:ml-137px">or do you have <br /> <span className="border-solid border-b-[1px] lg:border-b-[3px] border-gold h-[20px] lg:h-[48px] inline-block">questions?</span></div>
                <div className="flex absolute -top-9 -right-9 sm:right-0
                 lg:justify-end lg:pr-52 lg:pt-5 lg:bottom-0 lg:top-auto">
                    <Image
                    src="./vector-black.svg"
                    alt="vector"
                    width={94}
                    height={81}
                    style={{userSelect: 'none'}}
                    className="w-[30px] md:w-[60px] lg:w-[90px] xl:block z-60"
                    />
                </div>
                <Image
                    src="./dot-line.svg"
                    alt="vector"
                    width={133}
                    height={10}
                    style={{userSelect: 'none'}}
                    className="absolute -left-24 bottom-[1.125rem] lg:bottom-[12.5rem] lg:-left-32"
                />
            </div>

            <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                <Image
                    src="./dot-line.svg"
                    alt="vector"
                    width={133}
                    height={10}
                    className="hidden lg:flex transform rotate-180 absolute -right-32 -top-1"
                />
                <form id="feedback-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-field"
                        required
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-field"
                        pattern="[0-9]+"
                        title="Please enter only numbers"
                        required
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-field"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        title="Please enter a valid email address"
                        required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}

                    <div className="radio-buttons text-xs lg:text-lg flex flex-col lg:flex-row my-9 gap-7">
                        <label className="flex  items-center	">
                            <input
                                type="radio"
                                name="choice"
                                value="yes"
                                checked={form.choice === "yes"}
                                onChange={handleChange}
                                required
                                className="mr-3 cursor-pointer"
                            />
                            <span className="checkbox-label">
                            I don&apos;t have a website
                            </span>
                        </label>
                        <label classNaaposme="flex  items-center">
                            <input
                                type="radio"
                                name="choice"
                                value="no"
                                checked={form.choice === "no"}
                                onChange={handleChange}
                                required
                                className="mr-3 cursor-pointer"
                            />
                            <span className="checkbox-label">
                                I have a website and want to order a review
                            </span>
                        </label>
                    </div>
                    {errors.choice && <span className="error-message">{errors.choice}</span>}

                    <div className="lg:flex lg:justify-between">
                        <label className="checkbox-container flex text-xs lg:text-lg font-medium items-center">
                        <input
                            type="checkbox"
                            name="acceptance"
                            checked={form.acceptance}
                            onChange={handleChange}
                            required
                            className="checkbox-input z-60"
                        />
                        <span className="custom-checkbox mr-3"></span>
                        <span className="checkbox-label">I agree to the rules of personal data processing</span>
                    </label>
                        {errors.acceptance && <span className="error-message">{errors.acceptance}</span>}

                        <button type="submit"
                                className="flex mx-auto justify-center send-button text-2xl font-semibold uppercase py-4 px-20 my-10 lg:px-14 lg:mx-0"
                                disabled={!form.acceptance}>
                        <span className="button-icon px-2">
                            <Image
                                src="./paper-plane.svg"
                                alt="send"
                                width={32}
                                height={32}/>
                        </span> Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedBackSection;