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
      className=" md:p-20 bg-[#ceecf7] w-full text-right rounded-3xl text-[#1F1530]  font-aj" >
      <div className="   p-10 md:p-4 md:px-20">
        <div className="text-4xl md:text-7xl pt-3 text-center bg-clip-text text-[#1F1530]   bg-opacity-50">
        أهدافنـــا 
        </div>
    
        <Accordion  type="single" collapsible>
          <AccordionItem  value="item-1">
            <AccordionTrigger>التقدم</AccordionTrigger>
            <AccordionContent >
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
            أن نقدم حلول إبداعية لا حدود لها لتصعد بأداء عملائنا بين أوساطهم المهنية المختلفة 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>الخدمات</AccordionTrigger>
            <AccordionContent>
            أن نقدم اعلى جودة من الخدمات التسويقية و الرقمية 
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Goals;
