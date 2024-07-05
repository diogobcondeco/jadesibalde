"use client"

import React from 'react';

type ContactButtonProps = {
  buttonText: string;
  url: string; // Add url prop for the link
  inverted?: boolean; // Add inverted prop with a default value
}

const ContactButton: React.FC<ContactButtonProps> = ({ buttonText, url, inverted = false }) => {
  const handleClick = () => {
    window.open(url, '_blank'); // Open url in a new tab
  };

  // Determine the button style based on the inverted prop
  const contactButtonClass = inverted
    ? "bg-themeColor text-white"
    : "bg-white text-themeColor";

  return (
    <button
      className={`${contactButtonClass} text-xl font-bold py-4 px-6 rounded transition-transform duration-300 transform hover:scale-110`}
      style={{ marginTop: '2rem' }}
      onClick={handleClick} // Call handleClick function on button click
    >
      {buttonText}
    </button>
  );
};

export default ContactButton;
