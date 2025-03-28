"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import img from "../assets/berol.svg";
import offroad from "../assets/offroad.svg";
import cats from "../assets/CATS.svg";
import coc from "../assets/COC.svg";
import chicane from "../assets/chicane.svg";
import crazyb from "../assets/crazyb.svg";
import N10 from "../assets/N10.svg";
import SOS from "../assets/SOS.svg";
import ZEUS from "../assets/ZEUS.svg";
import TCHILL from "../assets/TCHILL.svg";
import M from "../assets/M.svg";
import KC46 from "../assets/KC46.svg";

import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";

const brands = [
  {
    name: "crazyb",
    logo: crazyb,
    url: "https://www.facebook.com/crazybunchprod",
  },
  {
    name: "chicane",
    logo: chicane,
    url: "https://www.facebook.com/chicane.cebu",
  },
  { name: "coc", logo: coc, url: "https://www.facebook.com/CarsOfCebu032" },
  {
    name: "cats",
    logo: cats,
    url: "https://www.facebook.com/cincoautotowingservice",
  },
  {
    name: "OffRoad",
    logo: offroad,
    url: "https://www.facebook.com/profile.php?id=61555505077665",
  },
  { name: "Berol", logo: img, url: "https://www.facebook.com/berollubricants" },
  { name: "N10", logo: N10, url: "https://www.facebook.com/n10visualsphoto" },
  {
    name: "SOS",
    logo: SOS,
    url: "https://www.facebook.com/SOSChildrensVillageCebu",
  },
  { name: "ZEUS", logo: ZEUS, url: "https://www.facebook.com/zeuskingfpv" },
  { name: "TCHILL", logo: TCHILL, url: "https://www.facebook.com/TCHILLmedia" },
  { name: "M", logo: M, url: "https://www.facebook.com/JamesMoralesMedia" },
  {
    name: "KC46",
    logo: KC46,
    url: "https://www.facebook.com/profile.php?id=100064306802867",
  },
];
import { motion } from "framer-motion";
export default function Brands() {
  return (
    <motion.div
      className="w-full py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "circInOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Swiper
        spaceBetween={10}
        loop={true}
        speed={6500}
        freeMode={true}
        onAutoplayPause={(swiper) => {
          swiper.autoplay.start();
        }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
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
        // navigation={true}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 10,
            height: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
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
            <a href={brand.url} target="_blank" rel="noreferrer">
              <Image
                src={brand.logo}
                alt={brand.name}
                className="mb-10 object-contain items-center place-content-center rounded-lg m-2 justify-self-center hover:scale-110 transform transition duration-500 ease-in-out"
                layout="intrinsic"
                height={90}
                width={90}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
