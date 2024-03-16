import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ContactUs from "./ContactUs";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Service We Provide
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Quality Care, Every Service
            </motion.p>
          </ScrollAnimationWrapper>

          <div className="grid gap-14 md:grid-cols-3 md:gap-5 ">
            <div class="relative  flex  flex-col justify-center overflow-hidden bg-gray-50  py-6 sm:py-12">
              <div class="group relative border-2 border-gray-500  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 left-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                  <span class="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-10 w-10 text-white-500 transition-all"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold uppercase ">
                    Credentialing
                  </h2>
                  <div class="space-y-6 pt-5 text-base leading-7  transition-all duration-300 ">
                    <p className="text-gray-600  ">
                      Perfect for learning how the framework works, prototyping
                      a new idea, or creating a demo to share online.
                    </p>
                  </div>
                  <div class="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        class="text-orange-500 transition-all duration-300 group-hover:text-white-500"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
              <div class="group relative border-2 border-gray-500  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 left-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                  <span class="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-10 w-10 text-white-500 transition-all"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold uppercase group-hover:text-white-500">
                    Medical Billing
                  </h2>
                  <div class="space-y-6 pt-5 text-base leading-7  transition-all duration-300 ">
                    <p className="text-gray-600 group-hover:text-white-500">
                      Often times solo practitioners ask us if they can do their
                      own billing? Yes, you can as long as you are very
                      familiar.
                    </p>
                  </div>
                  <div class="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        class="text-orange-500 transition-all duration-300 group-hover:text-white-500"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
              <div class="group relative border-2 border-gray-500  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 left-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                  <span class="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-10 w-10 text-white-500 transition-all"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold uppercase group-hover:text-white-500">
                     Contract Negotiations
                  </h2>
                  <div class="space-y-6 pt-5 text-base leading-7  transition-all duration-300 ">
                    <p className="text-gray-600 group-hover:text-white-500">
                      Many insurance companies try to present the lowest
                      reimbursing rates, typically accepted by practices.
                    </p>
                  </div>
                  <div class="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        class="text-orange-500 transition-all duration-300 group-hover:text-white-500"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
              <div class="group relative border-2 border-gray-500  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 left-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                  <span class="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-10 w-10 text-white-500 transition-all"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold uppercase group-hover:text-white-500">
                 Health Credentialing
                  </h2>
                  <div class="space-y-6 pt-5 text-base leading-7  transition-all duration-300 ">
                    <p className="text-gray-600 group-hover:text-white-500">
                      Our  Health Credentialing services specialize in
                      facilitating your enrollment with key insurance plans in
                      your market.
                    </p>
                  </div>
                  <div class="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        class="text-orange-500 transition-all duration-300 group-hover:text-white-500"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
              <div class="group relative border-2 border-gray-500  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 left-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                  <span class="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-10 w-10 text-white-500 transition-all"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold uppercase group-hover:text-white-500">
                    Nurse Credentialing
                  </h2>
                  <div class="space-y-6 pt-5 text-base leading-7  transition-all duration-300 ">
                    <p className="text-gray-600 group-hover:text-white-500">
                      As a nurse, the center of your attention is to help
                      clients. Each day brings a variety of situations
                    </p>
                  </div>
                  <div class="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        class="text-orange-500 transition-all duration-300 group-hover:text-white-500"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
              <div class="group relative border-2 border-gray-500  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 left-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                  <span class="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-10 w-10 text-white-500 transition-all"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold uppercase group-hover:text-white-500">
                  Licensing
                  </h2>
                  <div class="space-y-6 pt-5 text-base leading-7  transition-all duration-300 ">
                    <p className="text-gray-600 group-hover:text-white-500">
                    we recognize the challenges that healthcare providers and practices face in the intricate world of licensing. 
                    </p>
                  </div>
                  <div class="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        class="text-orange-500 transition-all duration-300 group-hover:text-white-500"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
              <div class="group relative border-2 border-gray-500  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 left-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                  <span class="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-10 w-10 text-white-500 transition-all"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold uppercase group-hover:text-white-500">
                    Physician Credentialing
                  </h2>
                  <div class="space-y-6 pt-5 text-base leading-7  transition-all duration-300 ">
                    <p className="text-gray-600 group-hover:text-white-500">
                      Physicians have busy days working in the office and
                      hospitals. They also invest time.
                    </p>
                  </div>
                  <div class="pt-5 text-base font-semibold leading-7">
                    <p>
                      <a
                        href="#"
                        class="text-orange-500 transition-all duration-300 group-hover:text-white-500"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Huge Global Network of Our Clients{" "}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              everywhere to make it easier for you when you move locations.
            </motion.p>
          </ScrollAnimationWrapper>

          <motion.div
            className="py-12 w-full px-8 mt-16"
            variants={scrollAnimation}
          >
            <Maps className="w-full h-auto" />
          </motion.div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ContactUs />
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Your health, <br /> our mission!
                  </h5>
                  <p>
                    Your well-being is our commitment. Reach out for expert
                    medical care
                  </p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
