// import React from 'react'
import Address from "./../public/assets/Icon/address.svg";
import Phone from "./../public/assets/Icon/phone.svg";
import Gmail from "./../public/assets/Icon/gmail.svg";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
const ContactUs = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
    <div id="contactus">
         <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Contact Us - We'd Love to Hear from You
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Your health is our priority, and we're here to provide compassionate care and support every step of the way.
            </motion.p>
          </ScrollAnimationWrapper>
    </div>
   

<div class="px-3 mt-10 flex flex-col sm:flex-row items-stretch" >
    <div class="border-2 mb-4 sm:mb-0 mr-0 sm:mr-2 border-orange-500 hover:border-gray-500 transition-all rounded-lg p-8 flex flex-col">
        <div class="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
            <div class="flex order-2 xl:order-1">
                <div class="mt-2 bg-white w-10 h-10 rounded-full items-center justify-center flex p-2 shadow-md">
                    <Gmail class="h-6 w-6" />
                </div>
                <div class="flex flex-col ml-5 text-left">
                    <p class="text-lg text-black capitalize">
                        Feel Free To Message Us
                    </p>
                    <p class="text-sm text-black capitalize">
                        samiafridi180@gmail.com
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="border-2 mb-4 sm:mb-0 mr-0 sm:mr-2 border-orange-500 hover:border-gray-500 transition-all rounded-lg p-8 flex flex-col">
        <div class="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
            <div class="flex order-2 xl:order-1">
                <div class="mt-2 bg-white w-10 h-10 rounded-full items-center justify-center flex p-2 shadow-md">
                    <Phone class="h-6 w-6" />
                </div>
                <div class="flex flex-col ml-5 text-left">
                    <p class="text-lg text-black capitalize">
                        Call Us For Appointment
                    </p>
                    <p class="text-sm text-black capitalize">
                        03354203311
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="border-2 mb-4 sm:mb-0 mr-0 sm:mr-2 border-orange-500 hover:border-gray-500 transition-all rounded-lg p-8 flex flex-col">
        <div class="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
            <div class="flex order-2 xl:order-1">
                <div class="mt-2 bg-white w-10 h-10 rounded-full items-center justify-center flex p-2 shadow-md">
                    <Address class="h-6 w-6" />
                </div>
                <div class="flex flex-col ml-5 text-left">
                    <p class="text-lg text-black capitalize">
                        Street Address
                    </p>
                    <p class="text-sm text-black capitalize">
                        1042 East Fort Union Blvd #1116, Midvale, UT 84047, United States
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default ContactUs


