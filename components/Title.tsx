import React from 'react';
import { Icon } from '@iconify/react';

type TitleProps = {
  titleText: string;
};

const Title: React.FC<TitleProps> = ({ titleText }) => {
  return (
    <div className="flex flex-col items-center md:items-start mb-8">
      <div className="flex">
        {/* <Icon icon="mdi:whatsapp" width="32" height="32" className="text-themeColor mr-2" /> */}
        <h2 className="text-4xl text-themeColor font-serif relative">
          {titleText}
          <hr className="border-b-1 border-themeColor mt-2" />
        </h2>
      </div>
    </div>
  );
};

export default Title;
