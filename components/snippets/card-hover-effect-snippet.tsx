import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";
import { TbSocial } from "react-icons/tb";
import { HiOutlineIdentification } from "react-icons/hi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [   
  {
        icon : <div className=" rounded-full"><HiOutlineIdentification className="w-10 h-10 text-[#814682]" /></div>,
        title: "تصميم الهوية الرقمية ",
        description:
          "فريقنا الموهوب قادر على تصميم هوية جذابة لعلامتك التجارية  من تصميم الشعار و حتى اختيار الخط! نحن نعمل على مقربة منك لتنفيذ هوية تعبر عنك بطريقة مميزة ",
       
      },
 
         {
        icon : <div className=" rounded-full"><TbSocial  className="w-10 h-10 text-[#814682]" /></div>,
        title:  "إدارة مواقع التواصل الإجتماعي ",
        description:
          "خبراء السوشيال ميديا خاصتنا يعملون بلا كلل لصنع محتوى يصنع ضجة إيجابية على مواقع التواصل الإجتماعي ",
      
      },
      {
        icon : <div className=" rounded-full"><PiMegaphone className="w-10 h-10 text-[#814682]" /></div>,
        title: "اعلانات قوقل",
        description:
          "من البحث عن الكلمات الرئيسية إلى إنشاء النصوص، سنتولى جميع جوانب حملتك الإعلانية على جوجل بدقة لضمان رؤية إعلاناتك من قبل الأشخاص المناسبين في الوقت المناسب، مما يزيد من عائد استثمارك وينمي عملك",
      
      },
     
      {
        icon : <div className=" rounded-full"><PiAppStoreLogo className="w-10 h-10 text-[#814682]" /></div>,
        title: "تصميم تطبيقات الهاتف",
        description:
          "فريقنا مؤلف من مطورين ماهرين ومصممين يتعاونون بسلاسة لإنشاء تطبيقات مبتكرة توفر تجربة مستخدم سلسة",
      
      },
    {
        icon : <div className=" rounded-full"><PiMonitor className="w-10 h-10 text-[#814682]" /></div>,
        title: "تصميم المواقع الإلكترونية  ",
        description:
          "نحن هنا لتحويل رؤيتك الإلكترونية إلى واقع. سواء كنت بحاجة إلى موقع ويب بسيط، أو مشروع ويب معقد، أو منصة تجارة إلكترونية، فإن مطورينا المهرة لديهم القدرة على تلبية احتياجاتك",
      }, 
      
    
      {
        icon : <div className=" rounded-full"><PiHeadsetFill className="w-10 h-10 text-[#814682]" /></div>,
        title: "تحسين محركات البحث",
        description:
          "هدفنا هو وصولك إلى الصفحة الأولى من جوجل!   نحن نقدم حلول تحسين محركات البحث المبتكرة والمخصصة لتحقيق أهدافك التجارية",
     
      },
];
