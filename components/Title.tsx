type TitleProps = {
  titleText: string;
};

const Title: React.FC<TitleProps> = ({ titleText }) => {
  return <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-themeColor font-serif">{titleText}</h2>;
};

export default Title;
