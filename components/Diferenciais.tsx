import { diferenciaisInfo } from "@/lib/data";
import Wrapper from "./Wrapper";
import Title from "./Title";

const Diferenciais = () => {
  return (
    <div id="section_diferenciais" className="bg-gray-100 py-4">
      <Wrapper>
        <Title titleText={"Diferenciais"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciaisInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4"
            >
              <img
                src={item.logo}
                alt={`Logo ${index + 1}`}
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-lg font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Diferenciais;
