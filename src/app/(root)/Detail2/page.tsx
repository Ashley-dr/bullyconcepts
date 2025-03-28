/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import bullyconcepts from "../assets/bullyconcepts.svg";

import { motion } from "framer-motion";

import frame1 from "../Detail2/assets/frame1.svg";
import frame2 from "../Detail2/assets/frame2.svg";
import frame3 from "../Detail2/assets/frame3.svg";
import { Saira_Stencil_One, Poppins } from "next/font/google";
const SairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});
export default function Details2() {
  return (
    <>
      <div
        id="updates"
        className="w-full py-10 bg-black -skew-y-2 h-[700px]  mt-10 z-10"
      >
        <div className="grid top-10 relative skew-y-2 justify-items-center lg:w-[1000px] justify-self-center">
          <figcaption
            className={`${SairaStencilOne.className} text-center text-4xl font-semibold text-white mb-5`}
          >
            News, Updates, & Events
          </figcaption>
          <div className=" w-32 h-0.5 bg-gradient-to-r from-[#f7a603] via-[#fff9ea] to-[#ebc620] mb-5"></div>
          <figure
            className="flex flex-3 gap-10"
            // initial={{ opacity: 0, y: 10 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1, ease: "easeInOut" }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              className=" object-contain items-center place-content-center cursor-pointer justify-self-center hover:translate-y-[-15px] hover:scale-105 transform transition duration-200 ease-in-out"
              src={frame1}
              alt="frame1"
            ></Image>
            <Image
              className=" object-contain items-center place-content-center cursor-pointer justify-self-center hover:translate-y-[-15px] hover:scale-105 transform transition duration-200 ease-in-out"
              src={frame2}
              alt="frame2"
            ></Image>
            <Image
              className=" object-contain items-center place-content-center cursor-pointer justify-self-center hover:translate-y-[-15px] hover:scale-105 transform transition duration-200 ease-in-out"
              src={frame3}
              alt="frame3"
            ></Image>
          </figure>
        </div>
      </div>
    </>
  );
}
