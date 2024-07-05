import { urls } from "@/lib/data";
import ContactButton from "./ContactButton";
import Wrapper from "./Wrapper";

const Banner = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/banner.png)" }}
    >
      <Wrapper className="pb-0">
        <div
          className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 text-white h-full pb-0 md:pb-0"
          style={{ minHeight: "400px" }}
        >
          <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-center md:justify-start pt-4 md:pt-0">
            <img
              src="/jade.png"
              alt="Jade Sibalde"
              className="w-48 md:w-72 lg:w-96 max-w-none"
            />
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right space-y-2 md:space-y-8 p-4">
            <img
              src="/logo_white.png"
              alt="Jade Sibalde Advocacia"
              className="w-48 lg:w-64 mb-2 md:mb-0"
            />
            <p className="text-lg md:text-xl lg:text-2xl font-thin">
              Excelência em Assessoria Jurídica Nacional e Internacional
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif">
              Direito moderno para um mundo dinâmico
            </p>
            <ContactButton buttonText={"Entre em Contato"} url={urls.whatsapp} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Banner;
