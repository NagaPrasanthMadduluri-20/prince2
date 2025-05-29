import React from 'react';
import Box from '../custom-components/box';
import Text from '../custom-components/text';
import SectionContainer from '../custom-components/section-container';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerData = {
  about: {
    title: 'About PRINCE2®',
    links: [
      { text: 'What is PRINCE2?', url: '#' },
      { text: 'Why should you do PRINCE2?', url: '#' },
      { text: 'PRINCE2 exams', url: '#' },
      { text: 'PRINCE2 FAQs', url: '#' },
      { text: 'PRINCE2 methodology', url: '#' },
      { text: 'PRINCE2 process model', url: '#' },
      { text: 'PRINCE2 qualifications', url: '#' },
      { text: 'Useful PRINCE2 links', url: '#' },
    ],
  },
  training: {
    title: 'PRINCE2 Training',
    links: [
      { text: 'Free PRINCE2 seminars', url: '#' },
      { text: 'Bookstore', url: '#' },
      { text: 'Take²', url: '#' },
      { text: 'Online exams', url: '#' },
    ],
  },
  downloads: {
    title: 'Downloads',
    links: [
      { text: 'Popular / All downloads', url: '#' },
    ],
  },
  ilxWebsites: {
    title: 'ILX websites',
    links: [
      { text: 'ILX Group', url: '#' },
      { text: 'PMP® Training', url: '#' },
      { text: 'Best Practice Bookstore', url: '#' },
      { text: 'TSG Training', url: '#' },
    ],
  },
  contact: {
    title: 'Contact PRINCE2',
    address: [
      '3rd Floor, 86-90 Paul Street, London',
      'EC2A 4NE',
    ],
    links: [
      { text: 'Enquiry form', url: '#' },
      { text: 'T: +44 (0) 1270 611 600', url: '#' },
      { text: 'E: contactus@ilxgroup.com', url: '#' },
      { text: 'Request a quote', url: '#' },
    ],
  },
  social: {
    title: 'Connect with us',
    icons: [
      { icon: 'youtube', url: '#' },
      { icon: 'facebook', url: '#' },
      { icon: 'instagram', url: '#' },
      { icon: 'linkedin', url: '#' },
    ],
  },
};

const Footer = () => {
  return (
    <>
      <SectionContainer>
        <Box className="grid grid-cols-1 md:grid-cols-4 gap-6 items-baseline">
          <Box>
            <Text as="h4" className="mb-3 text-center md:text-left">
              {footerData.about.title}
            </Text>
            {footerData.about.links.map((link, index) => (
              <Text key={index} className="text-center md:text-left">
                <a href={link.url}>{link.text}</a>
              </Text>
            ))}
          </Box>
          <Box>
            <Text as="h4" className="mb-3 text-center md:text-left">
              {footerData.training.title}
            </Text>
            {footerData.training.links.map((link, index) => (
              <Text key={index} className="text-center md:text-left">
                <a href={link.url}>{link.text}</a>
              </Text>
            ))}
            <Box className="mt-6 hidden md:inline-flex">
              <Text className="">Country DropDown</Text>
            </Box>
          </Box>
          <Box>
            <Text as="h4" className="mb-3 text-center md:text-left">
              {footerData.downloads.title}
            </Text>
            {footerData.downloads.links.map((link, index) => (
              <Text key={index} className="text-center md:text-left">
                <a href={link.url}>{link.text}</a>
              </Text>
            ))}
            <Text as="h4" className="mb-3 mt-3 text-center md:text-left">
              {footerData.ilxWebsites.title}
            </Text>
            {footerData.ilxWebsites.links.map((link, index) => (
              <Text key={index} className="text-center md:text-left">
                <a href={link.url}>{link.text}</a>
              </Text>
            ))}
          </Box>
          <Box>
            <Text as="h4" className="mb-3 text-center md:text-left">
              {footerData.contact.title}
            </Text>
            {footerData.contact.address.map((line, index) => (
              <Text key={index} className="text-center md:text-left">
                {line}
              </Text>
            ))}
            {footerData.contact.links.map((link, index) => (
              <Text key={index} className="text-center md:text-left">
                <a href={link.url}>{link.text}</a>
              </Text>
            ))}
            <Box className="hidden md:inline-flex flex-col space-y-2">
              <Text as="h4" className="mt-7">
                {" "}
                Connect With US{" "}
              </Text>
              <Box className="flex items-center gap-x-3">
                <Facebook />
                <Youtube />
                <Instagram />
                <Linkedin />
              </Box>
            </Box>
          </Box>
        </Box>
      </SectionContainer>
      <SectionContainer className="py-0">
        <Box className="flex items-center flex-wrap justify-evenly gap-10">
          <Image
            src="/footer/sagepay.png"
            alt="sagepay"
            width={100}
            height={100}
          />
          <Image
            src="/footer/splitit.png"
            alt="spliit"
            width={100}
            height={100}
          />
          <Image src="/footer/visa.png" alt="visa" width={100} height={100} />
          <Image
            src="/footer/mastercard.png"
            alt="mastercard"
            width={100}
            height={100}
          />
          <Image
            src="/footer/maestero.png"
            alt="maestero"
            width={100}
            height={100}
          />
          <Image src="/footer/aemx.png" alt="aemx" width={100} height={100} />
          <Image
            src="/footer/trustedaward.png"
            alt="trustedaward"
            width={100}
            height={100}
          />
        </Box>
      </SectionContainer>
      <SectionContainer>
        <Box>
          <Box className="flex items-center justify-center gap-x-2 flex-wrap">
            © Copyright ILX Group 2025
            <Link href="#" className="underline">
              Sitemap,
            </Link>
            <Link href="#" className="underline">
              Useful Links,
            </Link>
            <Link href="#" className="underline">
              Terms & Conditions,
            </Link>
            <Link href="#" className="underline">
              Privacy Policy,
            </Link>
            <Link href="#" className="underline">
              Cookie Policy,
            </Link>
            <Link href="#" className="underline">
              Quality Policy,
            </Link>
            <Link href="#" className="underline">
              Trade Marks
            </Link>
          </Box>
        </Box>
        <Text className="text-center underline my-3">
          Equal opportunities and disability policy for learners
        </Text>
        <Text
          as="span"
          className="text-center flex items-center gap-x-2 w-fit mx-auto mb-6"
        >
          {" "}
          Designed and Developed by{" "}
          <Text className="font-bold"> GML Consulting </Text>
        </Text>
        <Text as="span" className="text-center">
          © Copyright ILX Group 2025 | The company's main country of operation
          is the United Kingdom. Please note that ILX Group owns the url
          www.prince2.com. For the official PRINCE2 site, visit
          https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management.
          PRINCE2® and PRINCE2 Agile® are registered trademarks of the
          PeopleCert group. Used under licence from PeopleCert. All rights
          reserved. The Swirl logo is a trademark of the PeopleCert group. Used
          under licence from PeopleCert. All rights reserved.
        </Text>
      </SectionContainer>
    </>
  );
};

export default Footer;
