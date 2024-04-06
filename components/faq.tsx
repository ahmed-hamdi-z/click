import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className="  mt-10 md:p-20 bg-[#f6f5f4] w-full  rounded-3xl " >
      <div className="  text-right p-10 md:p-4 md:px-20">
        <div className="text-3xl  md:text-7xl font-bold text-black">
        أهدافنا 
        </div>
        <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
         الهدف من الشركة
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

export default FAQS;
