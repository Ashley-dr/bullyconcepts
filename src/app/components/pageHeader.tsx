/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { DropDownNavigation } from "./DropDownNavigation";
import logo from "../assets/logo.svg";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  ChevronUpSquare,
  DownloadIcon,
  TriangleDashedIcon,
} from "lucide-react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";
import carbon from "../components/assets/carbon.svg";
import { Plus_Jakarta_Sans, Sawarabi_Gothic } from "next/font/google";
const poppins = Sawarabi_Gothic({
  subsets: ["latin"],
  weight: "400",
});
import Link from "next/link";

const PageHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");

  return (
    <header
      className={`relative flex flex-wrap bg-center bg-cover sm:justify-start z-40 sm:flex-nowrap w-full text-sm py-3 
    sm:bg-cover sm:bg-center 
    md:bg-contain md:bg-center`}
      style={{
        backgroundImage: `url(${carbon.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 blur-sm z-[-1]"></div>
      {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#211a02] via-[#332b14] to-[#838720]"></div> */}
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center  justify-between">
          <Link
            className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
            href={`/`}
            aria-label="Brand"
          >
            <Image
              src={logo}
              height={32}
              layout="intrinsic"
              className="lg:w-64"
              alt={"logo"}
            />
          </Link>
          <div className="md:hidden ">
            <Button
              onClick={onOpen}
              bg={"none"}
              _hover={{ bg: "black", color: "black" }}
              aria-label="Open navigation"
            >
              <ChevronDown className="text-white" size={40} />
            </Button>
          </div>
        </div>

        <div
          id="hs-navbar-example"
          className="hidden hs-collapse  transition-all duration-300 basis-full grow md:block"
        ></div>
      </nav>
    </header>
  );
};

export default PageHeader;
