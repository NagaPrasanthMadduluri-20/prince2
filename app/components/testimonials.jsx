import React from "react";
import SectionContainer from "./custom-components/section-container";
import Box from "./custom-components/box";
import Text from "./custom-components/text";
import StarRating from "./custom-components/rating";

const Testimonials = () => {
  return (
    <SectionContainer>
      <Text
        as="h2"
        className="font-normal text-center mb-5 text-3xl text-gray-400"
      >
        What our customers say
      </Text>
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Box className="border-2 p-4 rounded-lg">
          <Box className="flex flex-col h-full">
            <Text>"Great content, good system, easy access, well managed"</Text>

            <Box className="mt-auto">
              <Box className="border-b-2" />
              <Box className="flex items-center justify-between mt-2">
                <Box>
                  <Text className="font-semibold">Agnes</Text>
                  <Text className="text-sm">266 Days ago</Text>
                </Box>
                  <StarRating rating={5} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="border-2 p-4 rounded-lg">
          <Box className="flex flex-col h-full">
            <Text>"Very quality service with good feedback"</Text>

            <Box className="mt-auto">
              <Box className="border-b-2 " />
              <Box className="flex items-center justify-between mt-2">
                <Box>
                  <Text className="font-semibold">Radu Dumbraveanu</Text>
                  <Text className="text-sm">291 Days ago</Text>
                </Box>
                  <StarRating rating={4} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="border-2 p-4 rounded-lg">
          <Box className="flex flex-col h-full">
            <Text>"Great!"</Text>

            <Box className="mt-auto">
              <Box className="border-b-2 " />
              <Box className="flex items-center justify-between mt-2">
                <Box>
                  <Text className="font-semibold">Trusted Customer</Text>
                  <Text className="text-sm">319 Days ago</Text>
                </Box>
                  <StarRating rating={5} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Testimonials;
