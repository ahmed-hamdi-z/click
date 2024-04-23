"use client";

interface TextProps { text : string; }
const Heading = ( {
   text
  }: TextProps) => {

  return (

    <div className="marquee-w mb-[2rem] mt-[-5rem] xl:h-[8rem] xl:w-[60rem] md:h-[10rem] md:w-[20rem]">
    <div className="marquee  ">
        <span className="  text-center bg-clip-text text-[#ceecf7] ">{text} &nbsp;&nbsp;&nbsp;</span>
    </div>
    <div className="marquee marquee2">
        <span>&nbsp;&nbsp;&nbsp;</span>
    </div>
</div>
  );
}


export default Heading;