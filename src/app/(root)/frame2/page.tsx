/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";

import CHROMESERIES from "../abouts/assets/chrome-series.svg";
import GLOSSSERIES from "../abouts/assets/gloss-series.svg";
import MATTESERIES from "../abouts/assets/matte-series.svg";
import TEXTURESERIES from "../abouts/assets/texture-series.svg";
import CUSTOMPRINTS from "../abouts/assets/custom-prints.svg";
import BGPOISON from "../assets/bg-poison.svg";
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

const brands = [
  {
    name: "FULL WRAP/PARTIAL WRAP",
    logo: CHROMESERIES,
    details:
      "Covers the entire vehicle, providing maximum impact for branding or design. It’s perfect for bold transformations or commercial advertising.",
  },
  {
    name: "DECAL",
    logo: GLOSSSERIES,
    details:
      "is a design or graphic printed on vinyl or other material with an adhesive backing. It can be applied to vehicles, walls, or other surfaces for decorative or branding purposes. Decals are typically smaller and more specific than full wraps.",
  },
  {
    name: "AUTOMOTIVE REFINISHING",
    logo: MATTESERIES,
    details:
      "the process of restoring or enhancing a vehicle’s exterior appearance. This includes painting, polishing, and applying protective coatings to improve the vehicle's aesthetics and protect it from damage.​",
  },
  {
    name: "PREVENTIVE MAINTENANCE SERVICE",
    logo: TEXTURESERIES,
    details:
      "a standardized color matching system used in design and printing. It ensures consistent color reproduction across different materials and print jobs, making it essential for branding and wrap consistency.",
  },
  {
    name: "CUSTOM FABRICATION",
    logo: CUSTOMPRINTS,
    details:
      "creating unique, tailored parts or modifications for vehicles. This can include body kits, custom panels, or specialized components, often used to achieve a distinctive or performance-enhanced look.",
  },
  // {
  //   name: "PAINTING",
  //   logo: CUSTOMPRINTS,
  //   details:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  // },
];
// import { motion } from "framer-motion";
const pageNames = ["Matte", "Print", "Design", "Color", "Finish"];
export default function Frame2() {
  return (
    <div
      className="w-full py-10 space-y-10"
      //   initial={{ opacity: 0, y: 50 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 1, ease: "circInOut" }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: true, amount: 0.5 }}
    >
      {/* <figure className="">
    
        <figcaption
          className={`${SairaStencilOne.className} text-center text-4xl font-semibold text-black mb-10`}
        >
          CHOOSE YOUR POISON
        </figcaption>
      </figure> */}
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
            // renderBullet: (index, className) => {
            //   return `<span class="${className}">${pageNames[index]}</span>`;
            // },
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
                    className={`${poppins.className}  text-center lg:text-justify lg:w-[500px] font-bold`}
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
