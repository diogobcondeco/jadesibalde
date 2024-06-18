import { diferenciaisInfo } from "@/lib/data";
import Wrapper from "./Wrapper";

const Diferenciais = () => {
  return (
    <Wrapper>
      <h2 className="text-3xl font-bold mb-8 text-center">Diferenciais</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {diferenciaisInfo.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 border rounded shadow">
            <img src={item.logo} alt={`Logo ${index + 1}`} className="h-16 w-16 mb-4" />
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Diferenciais;
