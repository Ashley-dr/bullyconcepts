/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { DropDownNavigation } from "./DropDownNavigation";
import logo from "../assets/logo.svg";
import Image from "next/image";
const header = async () => {
  return (
    <header className="w-full p-5 bg-[#ffff] text-white">
      <div className="grid grid-cols-2">
        <div className="">
          <Image src={logo} height={50} alt={"logo"} />
        </div>
        <div className="justify-self-end">
          <DropDownNavigation />
        </div>
      </div>
    </header>
  );
};

export default header;
