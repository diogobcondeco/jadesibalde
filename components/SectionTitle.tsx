type SectionTitleProps = {
  titleText: string;
};

const SectionTitle = ({ titleText }: SectionTitleProps) => {
  return (
    <div className="mb-8 flex flex-col items-center md:items-start">
      <h2 className="relative font-serif text-4xl text-themeColor">
        {titleText}
      </h2>

      <hr
        className="mt-2 w-full border-b-1 border-themeColor"
        aria-hidden="true"
      />
    </div>
  );
};

export default SectionTitle;
