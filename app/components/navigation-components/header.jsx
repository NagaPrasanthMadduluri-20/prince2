import React from "react";
import Box from "../custom-components/box";
import { CircleUserRound, Grid3x3, Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Text from "../custom-components/text";
import { Button } from "  @/components/ui/button";
import MegaMenu from "./mega-menu";

const Header = () => {
  return (
    <Box>
      <Box className="flex justify-between items-center mx-7 my-1">
        <Box>
          <Image
            src="/prince2-logo-dark.png"
            alt="prince2-logo"
            width={200}
            height={100}
            className="w-36 h-6 md:w-52 md:h-8 "
          />
        </Box>
        <Box className="flex items-center gap-x-10">
          <Text as="span" className="flex items-center gap-x-3">
            <CircleUserRound />
            <Text className="hidden md:flex">Signin</Text>
          </Text>
          <Text as="span">
            <ShoppingCart />
          </Text>
          <Box className="flex items-center gap-x-3 font-bold">
            <Text className="hidden md:flex">Powered by</Text>
            <Image
              src="/ilx-logo-v2.svg"
              alt="ilx-logo"
              width={50}
              height={30}
            />
          </Box>
        </Box>
      </Box>
      <Box className="hidden  md:flex md:justify-between md:items-center mx-7 my-2 ">
        <Text as="span" className="flex items-center gap-x-2 font-bold">
          <Phone fill="#87CEEB" stroke="#87CEEB" size={16} />
          +44 (0) 1270 611 600
        </Text>
        <Box className="flex items-center gap-x-6">
          {/* <Text
            as="span"
            className="font-semibold flex items-center gap-x-4 bg-foreground rounded-full p-1 px-4 text-white"
          >
            <Grid3x3 fill="#fff" stroke="#313b4d" /> All Courses
          </Text> */}
          <MegaMenu />
          <Text>About</Text>
          <Text>Resources</Text>
          <Text>Corporate Development</Text>
          <Text>Locations</Text>
          <Text>Downloads</Text>
          <Button className="bg-yellow-400 hover:bg-yellow-400 text-black">
            Get Quote
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
