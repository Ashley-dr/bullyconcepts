/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import reviews from "../reviews/assets/reviews.svg";
import { Saira_Stencil_One, Poppins } from "next/font/google";
const SairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <div
      id="reviews"
      className="w-full py-10 space-y-10"
      //   initial={{ opacity: 0, y: 50 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 1, ease: "circInOut" }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: true, amount: 0.5 }}
    >
      <figure className="">
        <figcaption
          className={`${SairaStencilOne.className} text-center  lg:text-4xl font-semibold text-black mb-10`}
        >
          CUSTOMER REVIEWS
        </figcaption>
      </figure>
      <a
        href="https://www.google.com/search?sca_esv=c1daa74f5b79c9cd&sxsrf=AHTn8zoFlzKKJZE2WBWESrHlKJMWdzm_FA:1743081052864&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzV3QEhfnn0_OYwI59WNAI2CQpPCAsUye2hT8zelxxaZhm5gx_3h1BswJoc1b3H7BZbAfKCYLs46tZXNhyhZTHfb6vN0Q-rWhC5hQ5Plz5IW03JN7Zg%3D%3D&q=Bullyconcepts+decal+Hub+Reviews&sa=X&ved=2ahUKEwjJzOH3qqqMAxWlwjgGHRv7ArwQ0bkNegQIOBAE&biw=1536&bih=730&dpr=1.25"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <Image
          src={reviews}
          alt={"Reviews"}
          className="mb-10 object-contain items-center place-content-center justify-self-center justify-center cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out mt-20 h-[900px] w-[900px] shadow-2xl"
          layout="intrinsic"
        />
      </a>
    </div>
  );
}
