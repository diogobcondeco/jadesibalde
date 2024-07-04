import { atuacaoInfo } from "@/lib/data";
import Wrapper from "./Wrapper";

const Atuacao = () => {
  return (
    <div id="section_atuacao" className="py-4">
      <Wrapper>
        <div className="text-3xl font-bold mb-8 text-center">Atuação</div>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {atuacaoInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 border rounded shadow"
                >
                  <img
                    src={item.logo}
                    alt={`Logo ${index + 1}`}
                    className="h-16 w-16 mb-2"
                  />
                  <h3 className="text-lg font-bold text-center">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Atuacao;
