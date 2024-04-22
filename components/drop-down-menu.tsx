"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;

}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      className="
    w-screen
    h-screen
    bg-gradient-to-b 
    from-neutral-50
     to-neutral-400 
     bg-opacity-50
     text-slate-300
     p-6
     space-y-4
     absolute
     top-28
     left-0
     right-0
     z-50
     rounded-t-3xl
    "
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col-reverse flex space-y-10 text-center font-aj font-bold">
            <Link href="#mission" className="hover:text-gray-700 text-gray-950 mt-10">
            المهمة
          </Link>
          <Link href="#mission" className="hover:text-gray-700 text-gray-950">
            الرؤية
          </Link>

          <Link href="#services" className="hover:text-gray-700 text-gray-950">
            خدماتنا
          </Link>
          <Link href="#about" className="hover:text-gray-700 text-gray-950">
            من نحن
          </Link>

          <Link href="/" className="hover:text-gray-700 text-gray-950">
            الرئيسية
          </Link>

        {/* Add onClick handler to Services link */}
        <div onClick={() => { onClose(); }} className="cursor-pointer hidden text-black text-2xl">
          
        </div>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
