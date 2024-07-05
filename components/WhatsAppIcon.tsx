"use client"

import React from 'react';
import { Icon } from '@iconify/react';
import { urls } from '@/lib/data';

const WhatsAppIcon: React.FC = () => {
  const handleClick = () => {
    window.open(urls.whatsapp, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition"
      style={{ zIndex: 1000 }}
    >
      <Icon icon={"mdi:whatsapp"} width="32" height="32" />
    </div>
  );
};

export default WhatsAppIcon;
