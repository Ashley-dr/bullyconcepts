"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import bullyconcepts from "../assets/bullyconcepts.svg";
export default function Details() {
  return (
    <>
      <div className="w-full py-10 bg-black skew-y-2 mt-10 h-[600px] ">
        <div className="grid grid-cols-2 -skew-y-2 justify-items-center lg:w-[1500px] justify-self-center">
          <figure className="grid justify-items-center justify-self-start pl-10 space-y-32">
            <Image className="" src={logo} alt="Bullyconcepts"></Image>
            <Image src={bullyconcepts} alt="Bullyconcepts"></Image>
          </figure>
          <article className="grid justify-items-center justify-self-start pl-10 text-white">
            <p>asdasd</p>
            <p>asdasd</p>
          </article>
        </div>
      </div>
    </>
  );
}
