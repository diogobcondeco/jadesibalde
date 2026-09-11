import { Icon } from "@iconify/react";
import { urls } from "@/lib/data";

const WhatsAppIcon = () => {
  return (
    <a
      href={urls.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar pelo WhatsApp"
      className="fixed bottom-4 right-4 z-[1000] rounded-full bg-green-500 p-4 text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      <Icon
        icon="mdi:whatsapp"
        width="32"
        height="32"
        aria-hidden="true"
      />
    </a>
  );
};

export default WhatsAppIcon;
