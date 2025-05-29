import React from 'react';
import SectionContainer from './custom-components/section-container';
import Image from 'next/image';
import Text from './custom-components/text';
import Box from './custom-components/box';


const learningTypesData = [
  {
    image: '/online-learning.png',
    title: 'Online Learning',
    description: 'Our fully-accredited e-learning allows you to learn at a pace that suits you, broken into bite-size sessions, combining leading-edge multimedia and interactive exercises for knowledge retention',
  },
  {
    image: '/virtual-learning.png',
    title: 'Virtual Learning',
    description: 'Virtual instructor-led training (VILT) incorporates both the personal teaching experience of a classroom, along with the ease and flexibility of a virtual environment to help aid your learning experience',
  },
  {
    image: '/blended-learning.png',
    title: 'Blended Learning',
    description: 'The term \'Blended Learning\' is now becoming increasingly used to describe the way that companies mix traditional classroom training and online learning, to provide the most successful overall results',
  },
  {
    image: '/classroom-learning.png',
    title: 'Classroom Learning',
    description: 'Our classroom courses are a traditional mode of learning allowing you to learn in an environment where you can actively participate and engage with both the material and others around you',
  },
];

const LearningTypes = () => {
  return (
    <SectionContainer>
      <Box className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {learningTypesData.map((item, index) => (
          <Box key={index} className="text-center md:text-left">
            <Box className="flex justify-center md:justify-start">
              <Image src={item.image} alt={item.title} width={80} height={80} className="h-20 w-20 object-contain" />
            </Box>
            <Text className="text-lg font-semibold mt-4">{item.title}</Text>
            <Text className="text-gray-600 mt-2">{item.description}</Text>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default LearningTypes;
