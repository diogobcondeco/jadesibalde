import Image from "next/image";
import { atuacaoInfo } from '@/lib/data';
import Wrapper from './Wrapper';
import SectionTitle from './SectionTitle';
import ServicesModal from './ServicesModal';

const Atuacao = () => {
  return (
    <div id="section_atuacao" className="py-4">
      <Wrapper>
        <SectionTitle titleText="Atuação" />

        <div className="flex flex-wrap justify-between">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
              {atuacaoInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center p-4"
                >
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="mb-2 h-16 w-16"
                  />

                  <h3 className="text-center text-lg font-bold">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ServicesModal />
      </Wrapper>
    </div>
  );
};

export default Atuacao;
