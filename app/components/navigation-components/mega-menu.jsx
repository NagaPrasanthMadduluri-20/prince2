"use client";
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Box from "../custom-components/box";
import Text from "../custom-components/text";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "  @/components/ui/navigation-menu";
import megaMenuData from "../../data/mega-menu-data.json";
import { Grid3x3 } from "lucide-react";

const MegaMenu = () => {
  const [hoveredCourse, setHoveredCourse] = useState("PRINCE2 Agile®");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold flex items-center gap-x-4 bg-foreground rounded-full p-1 px-4 text-white">
            {" "}
            <Grid3x3 fill="#fff" stroke="#313b4d" />
            All Courses
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Box className="w-[80vw] h-[70vh] grid grid-cols-12">
              {/* Left Column: Course Names */}
              <Box className="col-span-4 bg-white/30">
                <ul className="space-y-2">
                  {megaMenuData.courses.map((course) => (
                    <li
                      key={course.name}
                      onMouseEnter={() => setHoveredCourse(course.name)}
                      onMouseLeave={() => setHoveredCourse(null)}
                      className="cursor-pointer"
                    >
                      <Text
                        as="p"
                        className="font-semibold hover:text-blue-500 hover:bg-sky-100 pl-3"
                      >
                        {course.name}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Box>

              {/* Right Column: Course Details (displayed on hover) */}
              <Box className="col-span-8 bg-sky-100 p-4">
                {hoveredCourse && (
                  <Box className="flex flex-wrap gap-28">
                    {megaMenuData.courses
                      .find((course) => course.name === hoveredCourse)
                      ?.details.map((detail) => (
                        <Box
                          key={detail.name}
                          className={`mb-2 ${
                            detail.name === "Related resources"
                              ? "bg-gray-200 p-2 rounded-md w-full"
                              : ""
                          }`}
                        >
                          <Text as="p" className="font-semibold">
                            {detail.name}
                          </Text>
                          <ul className="list-none pl-4">
                            {detail.links.map((link) => (
                              <li key={link.name} className="mb-1">
                                <Link href={link.href}>
                                  <Text as="p" className="hover:text-blue-500">
                                    {link.name}
                                  </Text>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Box>
                      ))}
                  </Box>
                )}
              </Box>
            </Box>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MegaMenu;
