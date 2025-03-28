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
    name: "CHROME SERIES",
    logo: CHROMESERIES,
    details:
      "Chrome wraps provide a mirror-like, reflective finish that gives vehicles a high-end, attention-grabbing appearance. They are often used for exotic cars or show vehicles due to their ultra-reflective and high-gloss luster.",
  },
  {
    name: "GLOSS SERIES",
    logo: GLOSSSERIES,
    details:
      " Gloss wraps offer a shiny, reflective finish similar to traditional automotive paint, providing a classic, showroom-quality look.",
  },
  {
    name: "MATTE SERIES",
    logo: MATTESERIES,
    details:
      "Matte wraps have a non-reflective, flat finish that gives vehicles a sleek, modern, and sophisticated look.​",
  },
  {
    name: "TEXTURES SERIES",
    logo: TEXTURESERIES,
    details:
      "Textured wraps simulate various materials, such as brushed metal, carbon fiber, or leather, adding depth and a tactile element to the vehicle's surface.",
  },
  {
    name: "CUSTOM PRINTS",
    logo: CUSTOMPRINTS,
    details:
      "Custom print wraps allow for personalized designs, patterns, or branding elements to be printed onto the vinyl, offering limitless possibilities for customization.",
  },
];
// import { motion } from "framer-motion";
const pageNames = ["Matte", "Print", "Design", "Color", "Finish"];
export default function Abouts() {
  return (
    <div
      id="product"
      className="w-full py-10 space-y-10"
      //   initial={{ opacity: 0, y: 50 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 1, ease: "circInOut" }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: true, amount: 0.5 }}
    >
      <figure className="">
        {/* <Image
          src={BGPOISON}
          alt="BGPOISON"
          className=" object-contain items-center place-content-center rounded-lg w-full"
          layout="intrinsic"
        /> */}
        <figcaption
          className={`${SairaStencilOne.className} text-center text-4xl font-semibold text-black mb-10`}
        >
          CHOOSE YOUR POISON
        </figcaption>
        <div className="justify-self-center w-32 h-0.5 bg-gradient-to-r from-[#292928] via-[#4e4632] to-[#171614] mb-5"></div>
      </figure>
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
              <figure className="flex flex-row justify-center items-center justify-items-center bg-gradient-to-tr from-[#10011a] via-[#050500] to-[#180027] bg-opacity-50 p-5 text-white h-[400px] w-[1200px] bottom-10 relative">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  className="mb-10 object-contain items-center place-content-center justify-self-center justify-center cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out mt-20 h-[600px] w-[400px]"
                  layout="intrinsic"
                />
                <figure className="grid justify-items-center justify-self-start pl-10 space-y-10 ">
                  <figcaption
                    className={`${poppins.className} text-2xl font-bold`}
                  >
                    {brand.name}
                  </figcaption>
                  <figcaption
                    className={`${poppins.className} text-lg font-bold`}
                  >
                    {brand.details}
                  </figcaption>
                </figure>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>
    </div>
  );
}
