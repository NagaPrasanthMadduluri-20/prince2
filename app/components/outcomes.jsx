import React from "react";
import Box from "./custom-components/box";
import SectionContainer from "./custom-components/section-container";
import Text from "./custom-components/text";
import Image from "next/image";

const outcomesData = [
  {
    image: "/outcomes/salary.png",
    title: "£54,634",
    description:
      "The <b>PRINCE2</b> salary is <b>57%</b> above the national average",
  },
  {
    image: "/outcomes/jobads.png",
    title: "80.9%",
    description:
      "<b>PRINCE2</b> job ads are <b>80.9%</b> higher than last year",
  },
  {
    image: "/outcomes/jobpay.png",
    title: "8.7%",
    description: "<b>PRINCE2</b> job pay has gone up <b>8.7%</b> year-on-year",
  },
  {
    image: "/outcomes/graduates.webp",
    title: "500,000+",
    description: "graduates",
  },
  {
    image: "/outcomes/clients.webp",
    title: "5,000+",
    description: "corporate clients",
  },
  {
    image: "/outcomes/customer.webp",
    title: "96%",
    description: "customer satisfaction",
  },
];

const formatText = (text) => {
  return text.replace(/<b>(.*?)<\/b>/g, '<b className="font-bold">$1</b>');
};

const Outcomes = () => {
  return (
    <SectionContainer>
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between items-center">
        {outcomesData.map((item, index) => (
          <Box key={index} className="text-center">
            <Box className="flex items-center gap-x-6">
              <Image
                src={item.image}
                alt={item.title}
                width={64}
                height={64}
                className="h-20 w-20 object-contain"
              />
              <Box>
                <Text
                  as="h2"
                  weight="bold"
                  className="text-foreground mt-4 text-3xl md:text-5xl text-left"
                >
                  {item.title}
                </Text>

                <Text
                  weight="light"
                  className="text-gray-600 mt-4 text-lg md:text-2xl max-w-[250px] text-left"
                  dangerouslySetInnerHTML={{
                    __html: formatText(item.description),
                  }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default Outcomes;
