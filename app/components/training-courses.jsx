// import React from "react";
// import Box from "./custom-components/box";
// import Text from "./custom-components/text";
// import BorderBox from "./custom-components/border-box";
// import SectionContainer from "./custom-components/section-container";
// import { Button } from "  @/components/ui/button";
// import { cn } from "  @/lib/utils";

// const TrainingCourses = () => {
//   const featuredCourses = [
//     {
//       id: 1,
//       title: "PRINCE2® 7 Foundation ",
//       description:
//         "Futureproof your career with PRINCE2 7th Edition, an updated version of the globally recognised project management framework which launched in September 2023.",
//       oldPrice: "£2,095.00",
//       newPrice: "£1,676.00",
//       rating: null,
//       GroupedButton: ["Online", "Classroom", "Virtual"],
//     },
//     {
//       id: 2,
//       title: "PRINCE2® 7  Practitioner ",
//       description:
//         "Building on the knowledge learnt in the PRINCE2® Foundation course, learn how to adapt, utilise and tailor the PRINCE2® methodology with our PRINCE2 Practitioner e-learning.",
//       oldPrice: "£2,095.00",
//       newPrice: "£1,676.00",
//       rating: 3.5,
//       GroupedButton: ["Online", "Classroom", "Virtual"],
//     },
//     {
//       id: 3,
//       title: "PRINCE2® 7 Foundation and Practitioner ",
//       description:
//         "Learn all the essential information you need to become qualified in PRINCE2® 7th edition with our Foundation & Practitioner course, the latest version of this well-known methodology.",
//       oldPrice: "£2,095.00",
//       newPrice: "£1,676.00",
//       rating: null,
//       GroupedButton: [
//         "Online",
//         "Classroom",
//         "Blended",
//         "Learning",
//         "Virtual",
//         "Plus",
//         "Pack",
//       ],
//     },
//     {
//       id: 4,
//       title: "PRINCE2® 7 Practitioner (Bridging from PRINCE2 6th Edition)",
//       description:
//         "Enabling you to seamlessly transition from PRINCE2 6th Edition to PRINCE2 7, perfect if you already have a 6th Editon certification but want to update to the new version.",
//       oldPrice: "£2,095.00",
//       newPrice: "£1,676.00",
//       rating: 3.5,
//       GroupedButton: ["online"],
//     },
//   ];

//   return (
//     <SectionContainer>
//       <Box className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch mb-3">
//         {featuredCourses.map((course) => (
//           <Box key={course.id} className="border p-4 h-auto">
//             <Box className="flex flex-col h-full">
//               <Text as="p" className="text-xl font-bold min-h-20">
//                 {course.title}
//               </Text>
//               <Box className="mt-auto">
//                 <Text as="p" className={cn("text-16px ")}>
//                   {course.description}{" "}
//                 </Text>

//                 {course.GroupedButton && (
//                   <Button
//                     variant="outline"
//                     className="w-full border-2 border-blue-400 rounded-none mt-2 h-auto flex flex-wrap items-start whitespace-normal text-left leading-2 p-4"
//                   >
//                     {course.GroupedButton.map((item, index) => (
//                       <span key={item} className="text-blue-400 font-semibold">
//                         {item}
//                         {index < course.GroupedButton.length - 1 && ", "}
//                       </span>
//                     ))}
//                   </Button>
//                 )}
//                 {course.GroupedButton && <Box className="border-b-2 my-3" />}

//                 <Text
//                   as="span"
//                   className="font-normal text-lg flex items-center"
//                 >
//                   was{" "}
//                   <Text className="text-gray-500 text-xl font-normal line-through ml-2">
//                     {course.oldPrice}
//                   </Text>
//                 </Text>
//                 <Text
//                   as="span"
//                   className="font-normal text-lg mr-2 flex items-center "
//                 >
//                   Prices from
//                   <Text
//                     as="span"
//                     className="font-bold text-xl flex items-baseline ml-2 text-black"
//                   >
//                     {course.newPrice}
//                     <Text className="font-normal text-lg ml-2">+ VAT</Text>
//                   </Text>
//                 </Text>
//               </Box>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </SectionContainer>
//   );
// };

// export default TrainingCourses;



import React from "react";
import Box from "./custom-components/box";
import Text from "./custom-components/text";
import SectionContainer from "./custom-components/section-container";
import { Button } from "  @/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "  @/components/ui/tabs";
import { cn } from "  @/lib/utils";

const TrainingCourses = () => {
  const prince2Courses = [
    {
      id: 1,
      title: "PRINCE2® 7 Foundation",
      description:
        "Futureproof your career with PRINCE2 7th Edition, an updated version of the globally recognised project management framework which launched in September 2023.",
      oldPrice: "£2,095.00",
      newPrice: "£1,676.00",
      rating: null,
      GroupedButton: ["Online", "Classroom", "Virtual"],
    },
    {
      id: 2,
      title: "PRINCE2® 7 Practitioner",
      description:
        "Building on the knowledge learnt in the PRINCE2® Foundation course, learn how to adapt, utilise and tailor the PRINCE2® methodology with our PRINCE2 Practitioner e-learning.",
      oldPrice: "£2,095.00",
      newPrice: "£1,676.00",
      rating: 3.5,
      GroupedButton: ["Online", "Classroom", "Virtual"],
    },
    {
      id: 3,
      title: "PRINCE2® 7 Foundation and Practitioner",
      description:
        "Learn all the essential information you need to become qualified in PRINCE2® 7th edition with our Foundation & Practitioner course, the latest version of this well-known methodology.",
      oldPrice: "£2,095.00",
      newPrice: "£1,676.00",
      rating: null,
      GroupedButton: [
        "Online",
        "Classroom",
        "Blended",
        "Learning",
        "Virtual",
        "Plus",
        "Pack",
      ],
    },
    {
      id: 4,
      title: "PRINCE2® 7 Practitioner (Bridging from PRINCE2 6th Edition)",
      description:
        "Enabling you to seamlessly transition from PRINCE2 6th Edition to PRINCE2 7, perfect if you already have a 6th Edition certification but want to update to the new version.",
      oldPrice: "£2,095.00",
      newPrice: "£1,676.00",
      rating: 3.5,
      GroupedButton: ["Online"],
    },
  ];

  const prince2AgileCourses = [
    {
      id: 5,
      title: "PRINCE2 Agile® Foundation",
      description:
        "Combine the flexibility of agile with the governance of PRINCE2®. Learn how to blend structure with agility in project management.",
      oldPrice: "£1,895.00",
      newPrice: "£1,516.00",
      rating: 4.2,
      GroupedButton: ["Online", "Classroom", "Virtual"],
    },
    {
      id: 6,
      title: "PRINCE2 Agile® Practitioner",
      description:
        "Master the advanced concepts of PRINCE2 Agile® methodology. Perfect for experienced project managers looking to enhance their agile skills.",
      oldPrice: "£2,295.00",
      newPrice: "£1,836.00",
      rating: 4.5,
      GroupedButton: ["Online", "Virtual", "Blended Learning"],
    },
    {
      id: 7,
      title: "PRINCE2 Agile® Foundation and Practitioner",
      description:
        "Complete PRINCE2 Agile® certification package. From foundation concepts to advanced practitioner skills in one comprehensive course.",
      oldPrice: "£3,495.00",
      newPrice: "£2,796.00",
      rating: 4.3,
      GroupedButton: ["Online", "Classroom", "Virtual", "Plus Pack"],
    },
  ];

  const msProjectCourses = [
    {
      id: 8,
      title: "Introduction to MS Project - Fundamentals",
      description:
        "Learn the basics of Microsoft Project for effective project planning, scheduling, and resource management. Perfect for beginners.",
      oldPrice: "£895.00",
      newPrice: "£716.00",
      rating: 4.1,
      GroupedButton: ["Online", "Classroom"],
    },
    {
      id: 9,
      title: "MS Project Advanced Techniques",
      description:
        "Master advanced features of Microsoft Project including custom fields, macros, and complex project scenarios for experienced users.",
      oldPrice: "£1,295.00",
      newPrice: "£1,036.00",
      rating: 4.4,
      GroupedButton: ["Online", "Virtual", "Classroom"],
    },
    {
      id: 10,
      title: "MS Project Server Administration",
      description:
        "Learn to configure, deploy, and manage Microsoft Project Server environments. Essential for IT professionals and project administrators.",
      oldPrice: "£1,695.00",
      newPrice: "£1,356.00",
      rating: 4.0,
      GroupedButton: ["Online", "Virtual"],
    },
    {
      id: 11,
      title: "MS Project Portfolio Management",
      description:
        "Understand how to use Microsoft Project for portfolio management, resource optimization, and strategic project alignment.",
      oldPrice: "£1,495.00",
      newPrice: "£1,196.00",
      rating: 3.8,
      GroupedButton: ["Online", "Classroom", "Blended Learning"],
    },
  ];

  const renderCourseGrid = (courses) => (
    <Box className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch mb-3">
      {courses.map((course) => (
        <Box key={course.id} className="border p-4 h-auto">
          <Box className="flex flex-col h-full">
            <Text as="p" className="text-xl font-bold min-h-20">
              {course.title}
            </Text>
            <Box className="mt-auto">
              <Text as="p" className={cn("text-16px")}>
                {course.description}
              </Text>

              {course.GroupedButton && (
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-400 rounded-none mt-2 h-auto flex flex-wrap items-start whitespace-normal text-left leading-2 p-4"
                >
                  {course.GroupedButton.map((item, index) => (
                    <span key={item} className="text-blue-400 font-semibold">
                      {item}
                      {index < course.GroupedButton.length - 1 && ", "}
                    </span>
                  ))}
                </Button>
              )}
              {course.GroupedButton && <Box className="border-b-2 my-3" />}

              <Text as="span" className="font-normal text-lg flex items-center">
                was{" "}
                <Text className="text-gray-500 text-xl font-normal line-through ml-2">
                  {course.oldPrice}
                </Text>
              </Text>
              <Text
                as="span"
                className="font-normal text-lg mr-2 flex items-center"
              >
                Prices from
                <Text
                  as="span"
                  className="font-bold text-xl flex items-baseline ml-2 text-black"
                >
                  {course.newPrice}
                  <Text className="font-normal text-lg ml-2">+ VAT</Text>
                </Text>
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <SectionContainer>
      <Text as="h2" className="font-normal text-center mb-5 text-3xl text-gray-400">
        All training courses
      </Text>
      <Tabs defaultValue="prince2-7" className="">
        <TabsList className="flex flex-col md:grid md:grid-cols-3 bg-transparent justify-center mx-auto">
          <TabsTrigger
            value="prince2-7"
            className="inline-flex w-fit border-gray-300 border-2 data-[state=active]:bg-foreground data-[state=active]:text-white text-xl font-normal"
          >
            PRINCE2® 7
          </TabsTrigger>
          <TabsTrigger
            value="prince2-agile"
            className="inline-flex w-fit border-gray-300 border-2 data-[state=active]:bg-foreground data-[state=active]:text-white text-xl font-normal"
          >
            PRINCE2 Agile®
          </TabsTrigger>
          <TabsTrigger
            value="ms-project"
            className="inline-flex w-fit border-gray-300 border-2 data-[state=active]:bg-foreground data-[state=active]:text-white text-xl font-normal"
          >
            Introduction to MS Project
          </TabsTrigger>
        </TabsList>

        <TabsContent value="prince2-7" className="mt-6">
          {renderCourseGrid(prince2Courses)}
        </TabsContent>

        <TabsContent value="prince2-agile" className="mt-6">
          {renderCourseGrid(prince2AgileCourses)}
        </TabsContent>

        <TabsContent value="ms-project" className="mt-6">
          {renderCourseGrid(msProjectCourses)}
        </TabsContent>
      </Tabs>
    </SectionContainer>
  );
};

export default TrainingCourses;
