"use client";
import { useMotionValue } from "framer-motion";

import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY, }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

  }

  return (
    <div
      className={cn(
        "p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
 
        />
        <div className="relative z-10 w-full h-full flex hover:opacity-0 items-center justify-center">
          <div className="relative flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full " />
            <span className=" text-white z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl text-[#ceecf7] [mask-image:linear-gradient([#ceecf7],transparent)] group-hover/card:opacity-100"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl text-[#ceecf7] group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-2 xl:text-xl text-[#ceecf7] sm:text-xl md:text-xl  text-center h-full break-words whitespace-pre-wrap  font-aj transition duration-500">
          رؤيتنا هي أن نصبح الشريك الأول والأمثل للعلامات التجارية في رحلتها نحو
          التميز الرقمي<br />
           نحن في سعي مستمر لتقديم أفضل الخدمات والحلول التسويقية
          التي تساعد عملائنا على تحقيق أهدافهم ونجاحهم في عالم الرقميات عبر
          تقديم أفكار إبداعية وحلول مبتكرة تضع عملائنا في المقدمة و تميزهم عن
          الآخرين
        </p>
      </motion.div>
    </div>
  );
}


export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
