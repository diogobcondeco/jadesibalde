import { Icon } from '@iconify/react';
import { socialNetworksInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const madeBy = "https://diogobcondeco.com/";

  return (
    <footer className="bg-themeColor text-white p-4">
      <div className="mb-4 text-left">
        Jade Sibalde © {currentYear}
      </div>
      {/* <div className="flex justify-between items-center"> */}
        <div className="mb-4 text-left">
          <span>Feito por </span>
          <a href={madeBy} target="_blank" rel="noopener noreferrer" className="underline">
            diogobcondeco.com
          </a>
        </div>
        <div className="text-left flex">
          {socialNetworksInfo.map((social, index) => (
            <a key={index} href={social.linkUrl} target="_blank" rel="noopener noreferrer" className="mr-4 cursor-pointer">
              <Icon icon={social.icon} className="text-2xl" />
            </a>
          ))}
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;