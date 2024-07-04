"use client"

import React, { useState } from 'react';
import { atuacaoInfo, servicesList } from '@/lib/data';
import Wrapper from './Wrapper';

const Atuacao = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent closing modal when clicking inside the modal content
    e.stopPropagation();
  };

  const handleBackdropClick = () => {
    // Close modal when clicking outside the modal content (on the backdrop)
    closeModal();
  };

  return (
    <div id="section_atuacao" className="py-4">
      <Wrapper>
        <div className="text-3xl font-bold mb-8 text-center">Atuação</div>
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
        <div className="flex justify-center md:justify-end mt-4">
          <button
            onClick={openModal}
            className="bg-white text-themeColor text-xl font-bold py-4 px-6 rounded-3xl transition-transform duration-300 transform hover:scale-110 underline"
          >
            Ver Lista Completa
          </button>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={handleBackdropClick} // Close modal on backdrop click
          >
            <div className="bg-white rounded-lg p-8 max-w-full md:max-w-4xl w-full max-h-[calc(100vh-10rem)] overflow-y-auto relative mx-4 md:mx-8 lg:mx-0">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-50"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">Todos os Serviços</h2>
              <div className="grid grid-cols-1 gap-6">
                {servicesList.map((serviceCategory, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-bold">{serviceCategory.title}</h3>
                    <ul className="list-disc list-inside">
                      {serviceCategory.list.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button
                onClick={closeModal}
                className="mt-4 bg-themeColor text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 w-full md:w-fit"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Atuacao;
