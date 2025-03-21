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
import { Link, animateScroll as scroll } from "react-scroll";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full  bg-white text-sm py-3 dark:bg-neutral-800">
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ffc400] via-[#8f8465] to-[#ffffff]"></div>
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center  justify-between">
          <a
            className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            <Image src={logo} height={50} layout="intrinsic" alt={"logo"} />
          </a>
          <div className="md:hidden ">
            <Button
              onClick={onOpen}
              bg={"none"}
              _hover={{ bg: "black", color: "white" }}
              aria-label="Open navigation"
            >
              <ChevronDown />
            </Button>
          </div>
        </div>

        <div
          id="hs-navbar-example"
          className="hidden hs-collapse  transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a
              className="font-normal  text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              <p className=" pr-2 group relative ">
                <span>About</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span>
              </p>
            </a>
            <a
              className="font-normal text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              <p className=" pr-2 group relative ">
                <span>Update</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span>
              </p>
            </a>
            <a
              className="font-normal text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              <p className=" pr-2 group relative ">
                <span>Products</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span>
              </p>
            </a>
            <a
              className="font-normal text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              <p className=" pr-2 group relative ">
                <span>Channels</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span>
              </p>
            </a>
            <Link
              className="font-normal text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 cursor-pointer"
              to="reviews"
              smooth={true}
              duration={0}
            >
              <p className=" pr-2 group relative ">
                <span>Reviews</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span>
              </p>
            </Link>
          </div>
        </div>
      </nav>

      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            className="flex  justify-between"
          >
            {" "}
            <Image src={logo} height={50} alt={"logo"} />
            <Button
              bg={"none"}
              onClick={onClose}
              mt={2}
              _hover={{ bg: "black", color: "white" }}
            >
              {" "}
              <ChevronUp size={29} />
            </Button>
          </DrawerHeader>
          <DrawerBody className="justify-items-center ">
            <a href="#" aria-current="page">
              <Button bg={"none"} onClick={onClose}>
                Home
              </Button>
            </a>
            <a href="#" aria-current="page">
              <Button bg={"none"} onClick={onClose}>
                About
              </Button>
            </a>
            <a href="#" aria-current="page">
              <Button bg={"none"} onClick={onClose}>
                Updates
              </Button>
            </a>
            <a href="#" aria-current="page">
              <Button bg={"none"} onClick={onClose}>
                Products
              </Button>
            </a>
            <a href="#" aria-current="page">
              <Button bg={"none"} onClick={onClose}>
                Channels
              </Button>
            </a>
            <Link
              className="font-normal text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 cursor-pointer"
              to="reviews"
              smooth={true}
              duration={0}
            >
              <Button bg={"none"} onClick={onClose}>
                Reviews
              </Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
