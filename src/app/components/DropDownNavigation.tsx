"use client";

import * as React from "react";

import { Menu, MenuButton, MenuList, MenuItem, Flex } from "@chakra-ui/react";

export function DropDownNavigation() {
  return (
    <Flex gap={10} className="text-sm justify-items-center">
      <a href="">
        <p className="text-black">Home</p>
      </a>
      <a href="">
        <p className="text-black">About</p>
      </a>
      <a href="">
        <p className="text-black">News & Updates</p>
      </a>
      <a href="">
        <p className="text-black ">Products</p>
      </a>
      <a href="">
        <p className="text-black ">Channels</p>
      </a>
      <a href="">
        <p className="text-black ">Reviews</p>
      </a>
      <figure>
        <Menu>
          <MenuButton
            pt={1.5}
            textColor={"black"}
            _hover={{ textColor: "orange" }}
          >
            Action
          </MenuButton>
          <MenuList color="black">
            <MenuItem
              _hover={{ backgroundColor: "teal.100", color: "teal.800" }}
            >
              Download
            </MenuItem>
            <MenuItem
              _hover={{ backgroundColor: "teal.100", color: "teal.800" }}
            >
              Create a Copy
            </MenuItem>
            <MenuItem
              _hover={{ backgroundColor: "teal.100", color: "teal.800" }}
            >
              Mark as Draft
            </MenuItem>
            <MenuItem
              _hover={{ backgroundColor: "teal.100", color: "teal.800" }}
            >
              Delete
            </MenuItem>
            <MenuItem
              _hover={{ backgroundColor: "teal.100", color: "teal.800" }}
            >
              Attend a Workshop
            </MenuItem>
          </MenuList>
        </Menu>
      </figure>
    </Flex>
  );
}
