import { Icon } from '@iconify/react';
import { socialNetworksInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const madeBy = "https://diogobcondeco.com/";

  return (
    <footer className="bg-purple-950 text-white p-4">
      <div className="mb-4 text-left">
        Jade Sibalde © {currentYear}
      </div>
      <div className="flex justify-between items-center">
        <div className="w-full md:w-1/2 text-left">
          <span>Made by </span>
          <a href={madeBy} target="_blank" rel="noopener noreferrer" className="underline">
            diogobcondeco.com
          </a>
        </div>
        <div className="w-full md:w-1/2 text-right flex justify-end">
          {socialNetworksInfo.map((social, index) => (
            <a key={index} href={social.linkUrl} target="_blank" rel="noopener noreferrer" className="ml-4 cursor-pointer">
              <Icon icon={social.icon} className="text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;