"use client";

import { useEffect, useRef, useState } from "react";
import { servicesList } from "@/lib/data";

const ServicesModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      openButtonRef.current?.focus();
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="mt-4 flex justify-center">
        <button
          ref={openButtonRef}
          type="button"
          onClick={openModal}
          className="mt-2 rounded px-2 py-1 text-themeColor transition-transform duration-300 hover:scale-105 hover:underline focus:outline-none focus:ring-2 focus:ring-themeColor focus:ring-offset-2"
        >
          Ver Lista Completa
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="services-modal-title"
            className="relative max-h-[calc(100vh-2rem)] w-full max-w-full overflow-y-auto rounded-lg bg-white p-8 md:max-w-4xl md:max-h-[calc(100vh-10rem)] md:mx-8 lg:mx-0"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              aria-label="Fechar lista de serviços"
              className="absolute right-4 top-4 z-50 rounded p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-themeColor focus:ring-offset-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2
              id="services-modal-title"
              className="mb-4 text-2xl font-bold"
            >
              Todos os Serviços
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {servicesList.map((serviceCategory) => (
                <div key={serviceCategory.title} className="mb-4">
                  <h3 className="text-lg font-bold">
                    {serviceCategory.title}
                  </h3>

                  <ul className="list-inside list-disc">
                    {serviceCategory.list.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="mt-4 w-full rounded bg-themeColor px-4 py-2 font-bold text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-themeColor focus:ring-offset-2 md:w-fit"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesModal;
