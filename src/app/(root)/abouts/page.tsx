/* eslint-disable @typescript-eslint/no-unused-vars */
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
import SATINSERIES from "../abouts/assets/satin-series.svg";
import BRUSHEDSERIES from "../abouts/assets/brushed-series.svg";
import CHAMELEONSERIES from "../abouts/assets/chameloen-series.svg";
import PINTPROTECTIONFILM from "../abouts/assets/pint-protection-film.svg";
import HOLOGRAPHICSERIES from "../abouts/assets/holographic-series.svg";

import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";
import { Saira_Stencil_One, Poppins } from "next/font/google";
import { useRef, useState } from "react";

// Import Swiper's types for proper typing
import { Swiper as SwiperType } from "swiper";

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
    name: "SATIN SERIES",
    logo: SATINSERIES,
  },
  {
    name: "GLOSS SERIES",
    logo: GLOSSSERIES,
  },
  {
    name: "BRUSHED SERIES",
    logo: BRUSHEDSERIES,
  },
  {
    name: "TEXTURES SERIES",
    logo: TEXTURESERIES,
  },
  {
    name: "CHAMELEON SERIES",
    logo: CHAMELEONSERIES,
  },
  {
    name: "PAINT PROTECTION FILM",
    logo: PINTPROTECTIONFILM,
  },
  {
    name: "HOLOGRAPHIC SERIES",
    logo: HOLOGRAPHICSERIES,
  },
  {
    name: "MATTE SERIES",
    logo: MATTESERIES,
  },
];

export default function Abouts() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = () => {
    if (swiperInstance) {
      setCurrentSlide(swiperInstance.realIndex);
    }
  };

  return (
    <div id="product" className="w-full py-10 space-y-10">
      <figure className="relative">
        <figcaption
          className={`${SairaStencilOne.className} text-center lg:text-4xl font-semibold text-black mb-10`}
        >
          CHOOSE YOUR POISON
        </figcaption>
        <div className="justify-self-center w-32 h-0.5 bg-gradient-to-r from-[#292928] via-[#4e4632] to-[#171614] mb-5"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center justify-self-center items-center bg-gradient-to-tr from-[#10011a] via-[#050500] to-[#180027] bg-opacity-50  text-white  lg:w-[1200px]  ">
          <div className="">
            <Swiper
              onSwiper={setSwiperInstance}
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
                  "--swiper-navigation-size": "40px",
                  "--swiper-pagination-size": "40px",
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
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    className="mb-10 object-contain items-center place-content-center justify-self-center justify-center cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out mt-12 "
                    height={400}
                    layout="intrinsic"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full mb-10 ">
            <div className="space-y-5 grid justify-items-center">
              <p
                className={`${poppinsBold.className} text-yellow-300 text-2xl font-bold`}
              >
                {brands[currentSlide]?.name}
              </p>
              <div className="mt-5 space-x-3">
                <div className="grid grid-cols-2  justify-center  gap-3 mt-5">
                  {brands.map((brand, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (swiperInstance) {
                          swiperInstance.slideTo(index);
                          setCurrentSlide(index);
                        }
                      }}
                    >
                      <p
                        className={`${
                          currentSlide === index
                            ? "bg-yellow-400 text-black"
                            : "bg-white text-black"
                        } p-2 hover:scale-105 duration-75 rounded-sm px-3 font-semibold ${
                          poppinsBold.className
                        }`}
                      >
                        {brand.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
