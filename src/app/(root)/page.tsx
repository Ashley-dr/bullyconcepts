"use client";
// import bg from "../assets/background-home.svg";
import bg from "../(root)/assets/bg.jpg";
import { Allerta_Stencil } from "next/font/google";
import { motion } from "framer-motion";
import Brands from "./Brands/page";
import Details from "./Details/page";
import Abouts from "./abouts/page";
import Frame2 from "./frame2/page";
import Details2 from "./Detail2/page";
import Reviews from "./reviews/page";
// import GoogleReviews from "./GoogleReviews/page";

// const offside = Offside({
//   subsets: ["latin"],
//   weight: "400",
// });
const allertaStencil = Allerta_Stencil({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <figure></figure>
        <div
          className="relative w-full h-[600px]   bg-no-repeat bg-cover bg-left x-auto bg-fixed shadow-lg"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        >
          <motion.div
            className="absolute bottom-15 left-5 lg:p-8 text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p
              className={`lg:text-[55px] tracking-[13px] text-[#FFF212] ${allertaStencil.className}`}
            >
              WRAP ★ DECAL ★ SPRAY
            </p>
          </motion.div>
        </div>
        <Brands />
        <Details />
        <Abouts />
        <Frame2 />
        <Details2 />
        <Reviews />
        {/* <GoogleReviews /> */}
      </main>
    </>
  );
}
