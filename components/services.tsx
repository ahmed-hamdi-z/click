"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div id="services" className="max-w-5xl mx-auto py-20 ">
      <div
        className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
      >
        قم بتطوير عملك من خلال خدماتنا
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-[#CECECE] max-w-lg 
          text-center mx-auto"
      >
        من تصميم مواقع الويب إلى إدارة وسائل التواصل الاجتماعي، نحن نقدم مجموعة
        واسعة من الخدمات لمساعدتك على تنمية أعمالك{" "}
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;
