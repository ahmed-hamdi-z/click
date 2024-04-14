"use client";

interface TextProps { text : string; }
const Heading = ( {
   text
  }: TextProps) => {

  return (

    <div className="marquee-w  xl:h-[8rem] xl:w-[60rem] md:h-[10rem] md:w-[20rem] ">
    <div className="marquee">
        <span className=" md:text-7xl text-center bg-clip-text text-transparent  text-sky-200 bg-opacity-50">{text} &nbsp;&nbsp;&nbsp;</span>
    </div>
    <div className="marquee marquee2">
        <span>&nbsp;&nbsp;&nbsp;</span>
    </div>
</div>
  );
}


export default Heading;