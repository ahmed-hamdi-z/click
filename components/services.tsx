"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div id="services" className="max-w-5xl mx-auto py-20 font-aj ">
      <div
        className="text-4xl md:text-7xl pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-[#F0C336] to-[#814682] bg-opacity-50"
      >
        قم بتطوير عملك من خلال خدماتنا
      </div>
      <p
        className="mt-4 text-lg font-normal text-[#ceecf7] max-w-lg text-center mx-auto"
      >
        من تصميم مواقع الويب إلى إدارة وسائل التواصل الاجتماعي، نحن نقدم مجموعة
        واسعة من الخدمات لمساعدتك على تنمية أعمالك
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;
