import Image from "next/image";
import { diferenciaisInfo } from "@/lib/data";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";

const Diferenciais = () => {
  return (
    <div id="section_diferenciais" className="bg-gray-100 py-4">
      <Wrapper>
        <SectionTitle titleText="Diferenciais" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciaisInfo.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center p-4"
            >
              <Image
                src={item.logo}
                alt={item.title}
                width={64}
                height={64}
                className="mb-4 h-16 w-16"
              />

              <h3 className="mb-2 text-center text-lg font-bold">
                {item.title}
              </h3>

              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Diferenciais;
