/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";

import AUTOMOTIVE from "../frame2/assets/automotive.svg";
import CUSTOMFAB from "../frame2/assets/custom-fabrication.svg";
import DECAL from "../frame2/assets/decal.svg";
import PMS from "../frame2/assets/PMS.svg";
import WRAP from "../frame2/assets/wrap.svg";

import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";
import { Saira_Stencil_One, Poppins } from "next/font/google";
const SairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const brands = [
  {
    name: "WRAP",
    logo: WRAP,
    details:
      "When you want to stand out from the rest of the crowd or just wants to preserve and protect the original paint or both, Whether its for long term or temporary, Vehicle wrap is the solution. From yatchs to cars to buses, even building walls and flooring, our team has the proper training, skills and experienced to deliver the job. Choose from a wide array of colors and texture to choose from. Want to take it up a notch? sit down with our technical adviser and discuss the options, the possibilities are endless.",
  },
  {
    name: "DECAL",
    logo: DECAL,
    details:
      "looking for a fully customizable option and vibrant, long-lasting colors in bringing that Brand out into the market? Designed using weather-resistant materials, our decals ensure that your design stays vivid and sharp for years to come.Be it for personalizing a car, or for fleet vehicles.",
  },
  {
    name: "AUTOMOTIVE REFINISHING",
    logo: AUTOMOTIVE,
    details:
      "For clients who prefer the feel of paint, or just wants a panel touch-up prior to a body decal. Our trained and skilled automotive refinisher coupled with the best materials available in the market are available, ready to restore that shine back into your vehicles paint.​",
  },
  {
    name: "PMS(Preventative Maintenance Service)",
    logo: PMS,
    details:
      "Need some maintenance done to your vehicle? we can cater to your needs for oil change, vehicle check up, parts replacement and even electrical and mechanical repairs.",
  },
  {
    name: "CUSTOM FABRICATION",
    logo: CUSTOMFAB,
    details:
      "We at Bullyconcepts, we don't limit ourselves to wraps and decals. With our team, a simple request for a custom signage up to a purpose built vehicle can be done at your request. Creating unique, tailored parts or modifications for vehicles. This can include body kits, custom panels, or specialized components, often used to achieve a distinctive or performance-enhanced look.",
  },
];

const pageNames = ["Matte", "Print", "Design", "Color", "Finish"];
export default function Frame2() {
  return (
    <div className="w-full py-10 space-y-10">
      <figure className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          style={
            {
              "--swiper-navigation-color": "black",
              "--swiper-pagination-color": "black",
              "--swiper-navigateion-size": "20px",
              "--swiper-pagination-size": "20px",
            } as React.CSSProperties
          }
          zoom={true}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Zoom, Navigation, Autoplay]}
          className="mySwiper"
        >
          {brands.map((brand, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center justify-items-center"
            >
              <figure className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center justify-items-center bg-gradient-to-tr from-[#fcf7ff] via-[#fffff0] to-[#fdfaff] bg-opacity-50 p-5 text-black lg:h-[400px] lg:w-[1200px] bottom-10 relative">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  className="mb-10 object-contain items-center place-content-center justify-self-center justify-center cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out mt-20 h-[600px] w-[400px]"
                  layout="intrinsic"
                />
                <figure className="grid justify-items-center justify-self-start  space-y-5">
                  <figcaption
                    className={`${poppins.className} text-2xl text-center font-bold`}
                  >
                    {brand.name}
                  </figcaption>
                  <figcaption
                    className={`${poppinsBold.className}  text-center lg:text-justify lg:w-[500px] `}
                  >
                    {brand.details}
                  </figcaption>
                </figure>
              </figure>
            </SwiperSlide>

            // <SwiperSlide
            //   key={index}
            //   className="flex justify-center items-center justify-items-center"
            // >
            //   <figure className="flex flex-row justify-center items-center justify-items-center bg-gradient-to-tr from-[#fcf7ff] via-[#fffff0] to-[#fdfaff] bg-opacity-50 p-5 text-gray-950 h-[400px] shadow-lg w-[1200px] bottom-10 relative">
            //     <figure className="grid justify-items-center justify-self-start pl-10 space-y-10 ">
            //       <figcaption
            //         className={`${poppins.className} text-2xl font-bold`}
            //       >
            //         {brand.name}
            //       </figcaption>
            //       <figcaption
            //         className={`${poppins.className} text-lg font-bold`}
            //       >
            //         {brand.details}
            //       </figcaption>
            //     </figure>{" "}
            //     <Image
            //       src={brand.logo}
            //       alt={brand.name}
            //       className="mb-10 object-contain items-center place-content-center justify-self-center justify-center cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out mt-20 h-[600px] w-[400px]"
            //       layout="intrinsic"
            //     />
            //   </figure>
            // </SwiperSlide>
          ))}
        </Swiper>
      </figure>
    </div>
  );
}
