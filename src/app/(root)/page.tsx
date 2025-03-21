"use client";
import bg from "../assets/background-home.svg";
import { Offside } from "next/font/google";
import { motion } from "framer-motion";
import Brands from "./Brands/page"; // Ensure these are default exports
import Details from "./Details/page"; // Ensure these are default exports
import GoogleReviews from "./GoogleReviews/page"; // Ensure these are default exports

const offside = Offside({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div
          className="relative w-full h-[600px] bg-no-repeat bg-cover bg-left x-auto bg-fixed shadow-lg"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        >
          <motion.div
            className="absolute sm:bottom-15 sm:left-5 sm:p-8 lg:bottom-15 lg:left-5 lg:p-8 text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p
              className={`sm:text-[55px] lg:text-[55px] tracking-[13px] ${offside.className}`}
            >
              WRAP - PRINT - DECAL
            </p>
          </motion.div>
        </div>
        <Brands />
        <Details />
        <GoogleReviews />
      </main>
    </>
  );
}
