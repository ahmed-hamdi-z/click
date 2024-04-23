import React from "react";
import { EvervaultCard, Icon } from "@/components/evervault-card";

export function EvervaultCardSnippet() {
  return (
    <div className="border border-white/[0.2] flex flex-col items-end max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#ceecf7]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#ceecf7]" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#ceecf7]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#ceecf7]" />

      <EvervaultCard text="رؤيتنا" />

      <h2 className="text-[#ceecf7] text-right  mt-4 text-md font-light">
      كلِك تساعدك علي اكتشاف نفسك وتساعدك لتحقيق ذاتك

      </h2>
      <p className="text-sm border font-light border-white/[0.2]  rounded-full mt-4  text-[#ceecf7] px-2 py-0.5">
       بالطبع كلِـــك
      </p>
    </div>
  );
}
