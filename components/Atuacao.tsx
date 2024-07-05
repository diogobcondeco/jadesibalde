import React from 'react';
import { atuacaoInfo } from '@/lib/data';
import Wrapper from './Wrapper';
import Title from './Title';
import ServicesModal from './ServicesModal';

const Atuacao = () => {
  return (
    <div id="section_atuacao" className="py-4">
      <Wrapper>
        <Title titleText={"Atuação"} />
        <div className="flex flex-wrap justify-between">
          <div className="w-full p-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {atuacaoInfo.map((item, index) => (
                <div key={index} className="flex flex-col items-center p-4 border rounded shadow">
                  <img src={item.logo} alt={`Logo ${index + 1}`} className="h-16 w-16 mb-2" />
                  <h3 className="text-lg font-bold text-center">{item.title}</h3>
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
