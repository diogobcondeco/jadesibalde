"use client"

import React from 'react';

interface ButtonProps {
  buttonText: string;
  url: string; // Add url prop for the link
}

const Button: React.FC<ButtonProps> = ({ buttonText, url }) => {
  const handleClick = () => {
    window.open(url, '_blank'); // Open url in a new tab
  };

  return (
    <button
      className="bg-white text-themeColor text-xl font-bold py-4 px-6 rounded-3xl transition-transform duration-300 transform hover:scale-110"
      style={{ marginTop: '2rem' }}
      onClick={handleClick} // Call handleClick function on button click
    >
      {buttonText}
    </button>
  );
};

export default Button;
