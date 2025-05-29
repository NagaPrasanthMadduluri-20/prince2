// app/components/free-download.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionContainer from "./custom-components/section-container";
import Box from "./custom-components/box";
import Text from "./custom-components/text";
import { Button } from "  @/components/ui/button";

const FreeDownload = () => {
  const downloads = [
    {
      image: "/downloads/prince2processmodal.webp",
      alt: "PRINCE2 business case template",
      title: "PRINCE2 business case template",
      href: "#",
    },
    {
      image: "/downloads/prince2board.webp",
      alt: "PRINCE2 exam tips",
      title: "PRINCE2 exam tips",
      href: "#",
    },
    {
      image: "/downloads/prince2touchripple.webp",
      alt: "PRINCE2 Agile Foundation & Practitioner flyer",
      title: "PRINCE2 Agile Foundation & Practitioner flyer",
      href: "#",
    },
    {
      image: "/downloads/prince2exam.webp",
      alt: "PRINCE2 Agile process map",
      title: "PRINCE2 Agile process map",
      href: "#",
    },
    {
      image: "/downloads/prince2board.webp",
      alt: "PRINCE2 Process Model: English",
      title: "PRINCE2 Process Model: English",
      href: "#",
    },
    {
      image: "/downloads/prince2chat.webp",
      alt: "PRINCE2 7 Foundation & Practitioner flyer",
      title: "PRINCE2 7 Foundation & Practitioner flyer",
      href: "#",
    },
  ];

  return (
    <SectionContainer className="bg-gray-50 py-12">
      <Box className="container mx-auto text-center">
        <Text variant="h2" className="text-3xl font-medium mb-8">
          Our popular free downloads
        </Text>
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloads.map((download, index) => (
            <Link
              key={index}
              href={download.href}
              className="rounded-lg p-2 flex items-center justify-between border-2"
            >
              <Image
                src={download.image}
                alt={download.alt}
                width={80}
                height={80}
                className="mr-4"
              />
              <Text>{download.title}</Text>
              <ChevronRight className="text-gray-500" />
            </Link>
          ))}
        </Box>
        <Button
          href="#"
          variant="outline"
          className="border-2 border-blue-400 rounded-none text-lg mt-5 text-blue-600 w-full md:w-sm"
        >
          View all downloads
        </Button>
      </Box>
    </SectionContainer>
  );
};

export default FreeDownload;
