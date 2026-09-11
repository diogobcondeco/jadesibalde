import { urls } from "@/lib/data";
import ContactButton from "./ContactButton";
import Wrapper from "./Wrapper";

const Banner = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/banner.webp)" }}
    >
      <Wrapper className="pb-0">
        <div
          className="flex flex-col items-center justify-between p-4 pb-0 text-white md:flex-row md:p-8 md:pb-0"
          style={{ minHeight: "400px" }}
        >
          <div className="order-2 flex w-full justify-center pt-4 md:order-1 md:w-1/2 md:justify-start md:pt-0">
            <img
              src="/jade.webp"
              alt="Jade Sibalde"
              className="w-48 max-w-none md:w-72 lg:w-96"
            />
          </div>

          <div className="order-1 flex w-full flex-col items-center space-y-2 p-4 text-center md:order-2 md:w-1/2 md:items-end md:space-y-8 md:text-right">
            <img
              src="/logo_white.webp"
              alt="Jade Sibalde Advocacia"
              className="mb-2 w-48 lg:w-64 md:mb-0"
            />

            <p className="text-lg font-thin md:text-xl lg:text-2xl">
              Excelência em Assessoria Jurídica Nacional e Internacional
            </p>

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl">
              Direito moderno para um mundo dinâmico
            </h1>

            <ContactButton
              buttonText="Entre em Contato"
              url={urls.whatsapp}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Banner;
