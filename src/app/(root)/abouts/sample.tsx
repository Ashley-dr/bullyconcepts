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

import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";
import { Saira_Stencil_One, Poppins } from "next/font/google";
import { useRef, useState } from "react";
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
    name: "CHROME SERIES",
    logo: CHROMESERIES,
  },
  {
    name: "GLOSS SERIES",
    logo: GLOSSSERIES,
  },
  {
    name: "MATTE SERIES",
    logo: MATTESERIES,
  },
  {
    name: "TEXTURES SERIES",
    logo: TEXTURESERIES,
  },
  {
    name: "CUSTOM PRINTS",
    logo: CUSTOMPRINTS,
  },
];

export default function Abouts() {
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setCurrentSlide(swiperRef.current);
    }
  };

  // const slideTo = (index) => swiper.slideTo(index);

  return (
    <div id="product" className="w-full py-10 space-y-10">
      <figure className="">
        <figcaption
          className={`${SairaStencilOne.className} text-center lg:text-4xl font-semibold text-black mb-10`}
        >
          CHOOSE YOUR POISON
        </figcaption>
        <div className="justify-self-center w-32 h-0.5 bg-gradient-to-r from-[#292928] via-[#4e4632] to-[#171614] mb-5"></div>
      </figure>

      <figure className="">
        <Swiper
          ref={swiperRef}
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
          onSlideChange={handleSlideChange}
          style={
            {
              "--swiper-navigation-color": "orange",
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
              <figure className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center justify-items-center bg-gradient-to-tr from-[#10011a] via-[#050500] to-[#180027] bg-opacity-50 p-5 text-white lg:h-[400px] lg:w-[1200px] bottom-10 relative">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  className="mb-10 object-contain items-center place-content-center justify-self-center justify-center cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out mt-20 h-[600px] w-[400px]"
                  layout="intrinsic"
                />
                <figure className="grid  justify-items-center justify-self-center  space-y-5 ">
                  <figcaption
                    className={`${poppins.className} text-2xl font-bold`}
                  >
                    {brand.name}
                  </figcaption>
                  <div className="grid grid-cols-2  justify-center gap-3 mt-5">
                    {brands.map((brand, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          //   if (swiperRef.current) {
                          //     swiperRef.current.swiper.slideTo(index);
                          //     setCurrentSlide(index);
                          //   }
                        }}
                      >
                        <p
                          className={`bg-white p-1 hover:scale-105 duration-75 text-black rounded-md px-3 font-semibold ${poppinsBold.className}`}
                        >
                          {brand.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </figure>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>
    </div>
  );
}
