"use client";

import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="sm:flex items-center xl:flex md:flex justify-center mx-auto max-w-screen-xl font-aj">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <Image alt="" width={1000} height={1000} src="/images/abimg.webp" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text-right">
          <span className="text-[#ceecf7] border-b-2 border-[#1F1530] uppercase">
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-[#30204b] ">

            <span className="text-[#f0c363]">!</span> من{" "}
            <span className="text-[#f0c363]">تكون كـلِك</span>
          </h2>
          <p className="text-[#30204b]">
            مرحبًا بكم في كـلِك، حيث يجتمع الإبداع مع استراتيجيات التسويق الذكية
            و الإبتكار لنقدم لك تجربة فريدة في عالم التسويق الرقمي نحن لسنا
            وكالة تسويق عادية <br /> بل نحن فريق مكون من رواة قصص مبدعين، وعشاق
            للتصميم، وخبراء في تحليل البيانات، يقومون بالعمل لمساعدتك في بناء
            علامتك التجارية وزيادة وجودك الرقمي بطرق مبتكرة وفعالة
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
