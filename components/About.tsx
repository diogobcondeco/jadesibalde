import Image from 'next/image';
import Wrapper from './Wrapper';
import { aboutInfo } from '@/lib/data';
import SectionTitle from './SectionTitle';

const About = () => {
  const { title, description, imageUrl, additionalText } = aboutInfo;

  return (
    <div id="section_about" className="py-4">
      <Wrapper>
        <SectionTitle titleText={title} />

        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2">
            {description.map((item, index) => (
              <p key={index} className="mb-4">
                {item}
              </p>
            ))}

            <hr className="my-4 border-t-1 border-themeColor" />

            <p
              id="emphasis"
              className="mb-4 text-center text-lg font-bold text-gray-800"
            >
              {additionalText}
            </p>
          </div>

          <div className="flex w-full flex-col items-center p-4 md:w-1/2 md:p-0 md:pl-4">
            <Image
              src={imageUrl}
              alt="Jade Sibalde"
              width={4016}
              height={6016}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto max-w-full rounded shadow"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
