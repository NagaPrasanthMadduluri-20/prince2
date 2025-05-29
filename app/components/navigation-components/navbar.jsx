import React from "react";
import Box from "../custom-components/box";
import Text from "../custom-components/text";
import SectionContainer from "../custom-components/section-container";

const Navbar = () => {
  return (
    <SectionContainer className="bg-[#222732] py-1 ">
      <Box className="flex flex-col md:flex-row items-center justify-between">
        <Text className="text-white text-3xl font-bold text-center md:text-left ">
          Up to 25% off training courses
        </Text>
        <Box>
          <Text as="h2" className="text-white text-lg md:text-2xl text-right">
            Use offer code: <b className="text-blue-400 "> SALE0525UK </b>
          </Text>
          <Text
            as="span"
            className="text-white italic hidden md:flex items-center font-semibold text-xl "
          >
            Learn now, pay later{" "}
            <Text className="not-italic text-white font-normal ml-2 text-lg">
              {" "}
              - payment options available
            </Text>
          </Text>{" "}
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Navbar;
