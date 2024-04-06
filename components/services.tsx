"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div id="services" className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-[#120E1F]  to-[#7a7575] bg-opacity-50 mt-20"
      >
        قم بتطوير عملك من خلال خدماتنا
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-[#120E1F] max-w-lg 
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
