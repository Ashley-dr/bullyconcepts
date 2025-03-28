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
      <div
        id="about"
        className="w-full py-10 bg-black skew-y-2 h-[600px]  z-10"
      >
        <div className="grid grid-cols-2 -skew-y-2 justify-items-center lg:w-[1000px] justify-self-center">
          <motion.figure
            className="grid justify-items-center justify-self-start pl-10 space-y-32"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image className="" src={logo} alt="Bullyconcepts"></Image>
            <Image src={bullyconcepts} alt="Bullyconcepts"></Image>
          </motion.figure>
          <motion.div
            className="grid justify-items-center justify-self-start pl-10 mt-10 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p
              className={`${StardosStencil.className} xs:text-2xl lg:text-2xl`}
            >
              WE ARE MORE THAN JUST STICKERS
            </p>
            <p
              className={`${poppins.className} sm:text-xs lg:text-sm  tracking-wide `}
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
          </motion.div>
        </div>
      </div>
    </>
  );
}
