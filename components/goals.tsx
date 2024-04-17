"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Goals = () => {
  return (
    <div
      className=" md:p-20 bg-[#f6f5f4] w-full  rounded-3xl font-aj" >
      <div className="   p-10 md:p-4 md:px-20">
        <div className="text-4xl md:text-7xl pt-3 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
        أهدافنا 
        </div>
    
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>التقدم</AccordionTrigger>
            <AccordionContent>
            أن نكون مثالاً يحتذى به لتطور شركات التسويق الرقمي متعددة القطاعات في مملكتنا الحبيبة 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>العلاقات</AccordionTrigger>
            <AccordionContent>
            أن نكون علاقات مستدامة مع عملائنا الأعزاء وان نكون شركاء داعمين في رحلتهم نحو التطور المهني و النجاح 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>الحلول</AccordionTrigger>
            <AccordionContent>
            ان نقدم حلول إبداعية لا حدود لها لتصعد بأداء عملائنا بين أوساطهم المهنية المختلفة 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>الخدمات</AccordionTrigger>
            <AccordionContent>
            ان نقدم اعلى جودة من الخدمات التسويقية و الرقمية 
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Goals;
