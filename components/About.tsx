import React from 'react';
import Wrapper from './Wrapper';
import { aboutInfo } from '@/lib/data';
import SectionTitle from './SectionTitle';

const About = () => {
  const { title, description, imageUrl, additionalText } = aboutInfo;

  return (
    <div id="section_about" className="py-4">
      <Wrapper>
        <SectionTitle titleText={title} />
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2">
            {description.map((item, index) => (
              <p key={index} className="mb-4">
                {item}
              </p>
            ))}
            <hr className="my-4 border-t-1 border-themeColor" /> {/* Horizontal line */}
            <p id="emphasis" className="mb-4 text-lg font-bold text-gray-800 text-center">
              {additionalText}
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-0 md:pl-4 flex flex-col items-center">
            <img
              src={imageUrl}
              alt="About image"
              className="rounded shadow max-w-full h-auto"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
