"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import img from "../assets/berol.svg";
import offroad from "../assets/offroad.svg";
import cats from "../assets/CATS.svg";
import coc from "../assets/COC.svg";
import chicane from "../assets/chicane.svg";
import crazyb from "../assets/crazyb.svg";
const brands = [
  { name: "crazyb", logo: crazyb },
  { name: "chicane", logo: chicane },
  { name: "coc", logo: coc },
  { name: "cats", logo: cats },
  { name: "OffRoad", logo: offroad },
  { name: "Berol", logo: img },
];

export default function Brands() {
  return (
    <>
      <div className="w-full py-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                className="object-contain items-center place-content-center rounded-lg mx-10"
                width={100}
                height={40}
                layout="intrinsic"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
