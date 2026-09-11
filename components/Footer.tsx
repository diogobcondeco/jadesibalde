'use client';

import { Icon } from '@iconify/react';
import { socialNetworksInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const madeBy = "https://diogobcondeco.com/";

  const getSocialLabel = (icon: string) => {
    if (icon.includes('youtube')) return 'YouTube';
    if (icon.includes('instagram')) return 'Instagram';
    if (icon.includes('linkedin')) return 'LinkedIn';
    if (icon.includes('globe')) return 'Site Direito por Jade';

    return 'Rede social';
  };

  return (
    <footer className="bg-themeColor p-4 text-white">
      <div className="mb-4 text-left">
        Jade Sibalde © {currentYear}
      </div>

      <div className="mb-4 text-left">
        <span>Feito por </span>
        <a
          href={madeBy}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          diogobcondeco.com
        </a>
      </div>

      <div className="flex text-left">
        {socialNetworksInfo.map((social) => (
          <a
            key={social.linkUrl}
            href={social.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={getSocialLabel(social.icon)}
            className="mr-4 cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Icon
              icon={social.icon}
              className="text-2xl"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
