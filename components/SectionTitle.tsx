import React from 'react';

type SectionTitleProps = {
  titleText: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ titleText }) => {
  return (
    <div className="flex flex-col items-center md:items-start mb-8">
      <div className="flex">
        <h2 className="text-4xl text-themeColor font-serif relative">
          {titleText}
          <hr className="border-b-1 border-themeColor mt-2" />
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
