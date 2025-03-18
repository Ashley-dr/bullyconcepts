"use client";

import * as React from "react";

import { Menu, MenuButton, MenuList, MenuItem, Flex } from "@chakra-ui/react";

export function DropDownNavigation() {
  return (
    <Flex gap={10}>
      <a href="">
        <p className="text-black pt-1.5">Home</p>
      </a>
      <a href="">
        <p className="text-black pt-1.5">About</p>
      </a>
      <a href="">
        <p className="text-black pt-1.5">News & Updates</p>
      </a>
      <a href="">
        <p className="text-black pt-1.5">Products</p>
      </a>
      <a href="">
        <p className="text-black pt-1.5">Channels</p>
      </a>
      <a href="">
        <p className="text-black pt-1.5">Reviews</p>
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
