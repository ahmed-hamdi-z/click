"use client";

const TextRevealCSS = () => {
    const text = " نحن فريق من المبدعين المتحمسين لمساعدتك على تنمية أعمالك";
  
    return (
      <h1 className="hi">
        {text.match(/./gu)!.map((char, index) => (
          <span 
          className="by"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    );
  };
  export default TextRevealCSS;