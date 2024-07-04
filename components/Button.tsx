import React from 'react';

interface ButtonProps {
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <button
      className="bg-white text-themeColor text-xl font-bold py-4 px-6 rounded-3xl transition-transform duration-300 transform hover:scale-110"
      style={{ marginTop: '2rem' }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
