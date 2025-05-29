"use client"
import React, { useEffect, useState } from "react";
import SectionContainer from "./custom-components/section-container";
import Box from "./custom-components/box";
import Text from "./custom-components/text";
import Image from "next/image";
import BorderBox from "./custom-components/border-box";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "  @/firebase";
import { Button } from "  @/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "PRINCE2® 7 Foundation and Practitioner Plus Pack Online",
      oldPrice: "£2,095.00",
      newPrice: "£1,676.00",
      rating: null,
      button: "Course Info",
    },
    {
      id: 2,
      title: "PRINCE2 Agile® v1 Foundation & Practitioner Plus Pack Online",
      oldPrice: "£2,095.00",
      newPrice: "£1,676.00",
      rating: 3.5,
      button: "Course Info",
    },
  ];

   const [courseData, setCourseData] = useState([])

  useEffect(()=>{
    const fetchDatafromFirebase = async() => {
        const querySnapshot = await getDocs(collection(firestore, "featuredcourses"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setCourseData(data);
    }
    fetchDatafromFirebase();
  }, [])
console.log(courseData);
  return (
    <SectionContainer className="bg-[#f7f7f7] pb-0 border-b-4 border-blue-400">
      <Box className="flex flex-col md:flex-row  space-y-3 md:space-y-0 justify-between items-center">
        <Box className=" flex items-center relative w-full md:w-1/2 ">
          <Box className="">
            <Text as="h1" className="mb-4 md:max-w-72">
              PRINCE2® 7 available now!
            </Text>
            <Text as="p" className="text-lg md:max-w-56">
              The latest update to the world's most popular project management
              methodology
            </Text>
          </Box>
          <Box className="hidden lg:block lg:absolute lg:-bottom-24 lg:right-20">
            <Image
              src="/normal.png"
              alt="Girl"
              width={500}
              height={500}
              className="w-72 h-96"
            />
          </Box>
        </Box>
        <Box className="w-full md:w-1/2">
          <Box>
            <Text className="text-3xl text-black font-bold mb-4 ">
              Featured courses
            </Text>
            <Box className="grid grid-cols-2 gap-4 items-stretch mb-3">
              {featuredCourses.map((course) => (
                <BorderBox
                  course={course}
                  key={course.id}
                  rating={course.rating}
                  buttonText={course.button}
                  className="bg-white"
                >
                  <Text
                    as="span"
                    className="font-normal text-lg flex items-center"
                  >
                    was{" "}
                    <Text className="text-gray-500 text-xl font-semibold line-through ml-2">
                      {course.oldPrice}
                    </Text>
                  </Text>
                  <Text as="p" className="font-normal text-lg">
                    Prices from
                  </Text>
                  <Text
                    as="span"
                    className="font-bold text-2xl flex items-baseline text-black"
                  >
                    {course.newPrice}
                    <Text className="font-normal text-sm ml-2 hidden md:inline-flex">
                      + VAT
                    </Text>
                  </Text>
                </BorderBox>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box className="flex flex-row">
        {courseData.map((item) => (
          <Box
            className="flex flex-col border-2 p-4 bg-transparent h-full"
            key={item.id}
          >
            <Text as="h1">{item.heading}</Text>
            <Text>{item.price}</Text>
            <Button className="w-full bg-[#7DC419] hover:bg-[#47c419f7] mt-2 p-5 rounded-none text-lg font-semibold">
              <Link href={item.buttonUrl}>{item.buttontxt}</Link>
            </Button>
          </Box>
        ))}
      </Box> */}
    </SectionContainer>
  );
};

export default HeroSection;
