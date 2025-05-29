import React from "react";
import SectionContainer from "./custom-components/section-container";
import prince2BannerData from "../data/prince2-banner-data.json";
import Box from "./custom-components/box";
import Text from "./custom-components/text";
import Image from "next/image";
import { Button } from "  @/components/ui/button";

const BannerContent = ({ title, description, priceWas, priceFrom, flags, textColor }) => {
  return (
    <Box className="flex flex-col space-y-3 ml-7">
      <Text
        as="h2"
        className={
          title === "What is PRINCE2®?" ? "text-white" : "text-foreground"
        }
      >
        {title}
      </Text>
      <Text
        className={
          title === "What is PRINCE2®?" ? "text-white" : "text-foreground"
        }
      >
        {description}
      </Text>
      <Text
        as="span"
        className={`${
          title === "What is PRINCE2®?" ? " text-white" : "text-"
        } font-semibold  flex items-center gap-x-3 `}
      >
        was{" "}
        <Text
          className={`${
            title === "What is PRINCE2®?" ? "text-cyan-400" : ""
          } line-through text-2xl `}
        >
          {priceWas}
        </Text>
      </Text>
      <Text
        as="span"
        className={`${
          title === "What is PRINCE2®?" ? "text-white" : "text-"
        } font-semibold  flex items-center gap-x-3 `}
        
      >
        Prices from{" "}
        <Text
          className={`${
            title === "What is PRINCE2®?" ? "text-cyan-400" : ""
          } text-2xl `}
        >
          {priceFrom}
        </Text>
        + VAT
      </Text>
      <Box className="flex items-center gap-x-6">
        <Button className=" bg-[#7DC419]">View Courses</Button>
        <Box className="hidden md:flex items-center gap-x-4">
          <Text
            className={`${
              title === "What is PRINCE2®?" ? "text-white" : "text-foreground"
            } `}
          >
            Courses available in
          </Text>
          <Box className="flex items-center gap-x-6">
            {flags.map((flag, index) => (
              <Image key={index} src={flag} alt="flag" width={30} height={30} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const LeftImageBox = ({ image, alt, children }) => {
  return (
    <Box className="bg-foreground w-full h-full grid grid-cols-1 md:grid-cols-2 p-4 md:p-0 items-center ">
      <Box>
        <Image
          src={image}
          width={500}
          height={500}
          alt={alt}
          className="w-[521px] h-[330px] hidden md:inline-flex"
        />
      </Box>
      {children}
    </Box>
  );
};

const RightImageBox = ({ image, alt, children, bgColor }) => {
  return (
    <Box
      className={`${bgColor} w-full h-full grid grid-cols-1 md:grid-cols-2 p-4 md:p-0 items-center justify-between mt-5`}
    >
      {children}
      <Box className="ml-auto ">
        <Image
          src={image}
          width={500}
          height={500}
          alt={alt}
          className="w-[521px] h-[330px] hidden md:inline-flex"
        />
      </Box>
    </Box>
  );
};

const Prince2Banner = () => {
  return (
    <SectionContainer>
      <LeftImageBox
        image={prince2BannerData[0].image}
        alt={prince2BannerData[0].alt}
      >
        <BannerContent
          title={prince2BannerData[0].title}
          description={prince2BannerData[0].description}
          priceWas={prince2BannerData[0].priceWas}
          priceFrom={prince2BannerData[0].priceFrom}
          flags={prince2BannerData[0].flags}
        />
      </LeftImageBox>
      <RightImageBox
        image={prince2BannerData[1].image}
        alt={prince2BannerData[1].alt}
        bgColor={prince2BannerData[1].bgColor}
      >
        <BannerContent
          title={prince2BannerData[1].title}
          description={prince2BannerData[1].description}
          priceWas={prince2BannerData[1].priceWas}
          priceFrom={prince2BannerData[1].priceFrom}
          flags={prince2BannerData[1].flags}
        />
      </RightImageBox>
    </SectionContainer>
  );
};

export default Prince2Banner;
