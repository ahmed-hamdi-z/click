"use client";

import { motion } from "framer-motion";
import { ThreeDCard } from "./snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";

const Mission = () => {
  return (
    <div id="mission">
      <div className=" p-4 mx-auto relative z-10  w-full pt-20 md:pt-20 font-aj">
        <div className="text-4xl pt-3  md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#F0C336] to-[#814682] bg-opacity-50">
          ًكلِك أولا <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          الرؤية لابد ان تكون واضحة, والمهمة ليست مستحيلة أنت مع كلِك
        </p>
        <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <ThreeDCard />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <EvervaultCardSnippet />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
