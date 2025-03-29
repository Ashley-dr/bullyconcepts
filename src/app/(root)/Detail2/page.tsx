"use client";
import Image from "next/image";
import frame1 from "../Detail2/assets/frame1.svg";
import frame2 from "../Detail2/assets/frame2.svg";
import frame3 from "../Detail2/assets/frame3.svg";
import { Saira_Stencil_One } from "next/font/google";

const SairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Details2() {
  return (
    <>
      <div
        id="updates"
        className="w-full py-10 bg-black -skew-y-2 pb-26 lg:pb-0 lg:h-[700px] mt-10 z-10"
      >
        <div className="top-10 relative skew-y-2 justify-items-center lg:w-[1000px] justify-self-center mx-auto">
          <figcaption
            className={`${SairaStencilOne.className} text-center lg:text-4xl font-semibold text-white mb-5`}
          >
            News, Updates, & Events
          </figcaption>
          <div className="w-32 h-0.5 bg-gradient-to-r from-[#f7a603] via-[#fff9ea] to-[#ebc620] mb-5"></div>

          {/* Use a grid layout for responsive design */}
          <figure className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            <div className="relative w-full">
              <Image
                className="object-contain items-center place-content-center cursor-pointer justify-self-center hover:translate-y-[-15px] hover:scale-105 transform transition duration-200 ease-in-out"
                src={frame1}
                alt="frame1"
                layout="intrinsic"
                width={300}
                height={300}
              />
            </div>

            <div className="relative w-full">
              <Image
                className="object-contain items-center place-content-center cursor-pointer justify-self-center hover:translate-y-[-15px] hover:scale-105 transform transition duration-200 ease-in-out"
                src={frame2}
                alt="frame2"
                layout="intrinsic"
                width={300}
                height={300}
              />
            </div>

            <div className="relative w-full">
              <Image
                className="object-contain items-center place-content-center cursor-pointer justify-self-center hover:translate-y-[-15px] hover:scale-105 transform transition duration-200 ease-in-out"
                src={frame3}
                alt="frame3"
                layout="intrinsic"
                width={300}
                height={300}
              />
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}
