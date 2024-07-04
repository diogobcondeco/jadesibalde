import Wrapper from "./Wrapper";
import { aboutInfo } from "@/lib/data";

const About = () => {
  const { title, description, imageUrl } = aboutInfo;

  return (
    <div id="section_about" className="py-4">
      <Wrapper>
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 p-4">
            {description.map((item, index) => (
              <p key={index} className="mb-4">
                {item}
              </p>
            ))}
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img src={imageUrl} alt="About image" className="rounded shadow" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
