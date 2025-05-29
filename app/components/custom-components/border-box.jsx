import React from "react";
import Box from "./box";
import Text from "./text";
import { cn } from "  @/lib/utils";
import { Button } from "  @/components/ui/button";

const BorderBox = ({
  children,
  course,
  buttonText,
  rating,
  description,
  className,
}) => {
  return (
    <Box
      className={cn(
        "flex flex-col border-2 p-4 bg-transparent h-full",
        className
      )}
    >
     <Text as="h2" className="text-lg md:text-2xl">{course.title}</Text>
      <Box className="mt-auto flex flex-col">
        {rating && (
          <Box className="flex items-center mt-4">
            <span className="text-yellow-500">★★★★☆</span>
            <Text as="span" className="ml-1">
              {rating}
            </Text>
          </Box>
        )}
    
      </Box>

      {children}
      {buttonText && (
        <Button className="w-full bg-[#7DC419] hover:bg-[#47c419f7] mt-2 p-5 rounded-none text-lg font-semibold">
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default BorderBox;
