import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsAppIcon: React.FC = () => {
  const phoneNumber = '966544988088'; 

  return (
    <div className="flex items-center justify-center fixed bottom-4 left-4 w-14 h-14 bg-green-500 rounded-full z-50">
      <a href={`https://api.whatsapp.com/send/?phone=${phoneNumber}`} target="_blank" rel="noopener noreferrer">
        <IoLogoWhatsapp className='w-10 h-10 text-white font-semibold' />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
