"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var border border-white  border-opacity-20 ">
   
      <CardBody className="bg-transparent text-right relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
           <CardItem
          as="p"
          translateZ="50"
          className="text-xl font-bold text-[#ceecf7]"
        >
        مهمتنا الارتقاء بكم
        </CardItem>
        <CardItem
          as="p"
          translateZ="70"
          className="text-[#ceecf7] text-md max-w-sm mt-2 "
        >
         نحن نسعى لتحقيق تميز عملائنا من خلال تقديم استراتيجيات تسويقية متقدمة، وتصميمات إبداعية، وتنفيذ متميز يعتمد على أحدث التقنيات وأفضل الممارسات استنادا على مهاراتنا التحليلية والتقييم المستمر للنتائج لضمان تحقيق أهداف العملاء وتجاوز توقعاتهم
        </CardItem>
        <CardItem translateZ="70" className="w-full mt-4">
          <Image
            src="/images/mission.webp"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>
  );
}
