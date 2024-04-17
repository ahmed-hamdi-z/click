"use client";

import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="sm:flex items-center max-w-screen-xl font-aj">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <Image alt="" width={1000} height={1000} src="/images/abimg.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text-right">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            من نحن{" "}
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            {" "}
            <span className="text-indigo-600">!</span> من{" "}
            <span className="text-indigo-600">تكون كـلِك</span>
          </h2>
          <p className="text-gray-700">
            مرحبًا بكم في كليك، حيث يجتمع الإبداع مع استراتيجيات التسويق الذكية
            و الإبتكار لنقدم لك تجربة فريدة في عالم التسويق الرقمي نحن لسنا
            وكالة تسويق عادية - بل نحن فريق مكون من رواة قصص مبدعين، وعشاق
            للتصميم، وخبراء في تحليل البيانات، يقومون بالعمل لمساعدتك في بناء
            علامتك التجارية وزيادة وجودك الرقمي بطرق مبتكرة وفعالة
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
