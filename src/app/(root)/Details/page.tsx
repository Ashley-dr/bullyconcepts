"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import bullyconcepts from "../assets/bullyconcepts.svg";
import { Stardos_Stencil, Poppins } from "next/font/google";
import { motion } from "framer-motion";
const StardosStencil = Stardos_Stencil({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});
export default function Details() {
  return (
    <>
      <div id="about" className="w-full py-10 bg-black skew-y-2  z-10">
        <div className="grid space-y-10 -skew-y-2 justify-items-center items-center lg:w-[1000px] justify-self-center">
          <motion.div
            className="grid gap-10 justify-items-center text-justify  justify-self-start  mt-10 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className={`${StardosStencil.className}   lg:text-2xl`}>
              WE ARE MORE THAN JUST STICKERS
            </p>
            <p
              className={`${poppins.className} text-center px-10  lg:text-sm  tracking-wide `}
            >
              At BullyConcepts, we are dedicated to transforming your vehicle
              into a unique expression of your personality and style. With over
              eight years of experience in the automotive industry, we
              specialize in premium car wraps, decals, and maintenance services
              that not only enhance aesthetics but also provide lasting
              protection. Our commitment to quality craftsmanship and innovative
              designs ensures that each project we undertake resonates with
              individuality and excellence.
            </p>
          </motion.div>{" "}
          <motion.figure
            className="grid grid-cols-1 lg:grid-cols-2  gap-10 justify-center justify-self-center items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              className=" justify-self-center"
              layout="intrinsic"
              src={logo}
              alt="Bullyconcepts"
              width={300}
            ></Image>
            <Image
              className=" justify-self-center"
              layout="intrinsic"
              src={bullyconcepts}
              alt="Bullyconcepts"
              width={100}
            ></Image>
          </motion.figure>
        </div>
      </div>
    </>
  );
}
