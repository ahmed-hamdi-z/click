import React, { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useDrag } from "@use-gesture/react";

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  children: ReactNode; // Use ReactNode to allow for nested elements as children
}

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  children,
}: CarouselProps) {
  const slidesArray = React.Children.toArray(children); // Convert children to an array
  const [curr, setCurr] = useState<number>(0);
  const slidesRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(
    () => setCurr((curr) => (curr === 0 ? slidesArray.length - 1 : curr - 1)),
    [slidesArray.length]
  );

  const next = useCallback(
    () => setCurr((curr) => (curr === slidesArray.length - 1 ? 0 : curr + 1)),
    [slidesArray.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const bind = useDrag(({ swipe: [swipeX], active }) => {
    if (!active) {
      if (swipeX < 0) next();
      if (swipeX > 0) prev();
    }
  });

  return (
    <div className="overflow-hidden relative" {...bind()} id="top">
      <div
        ref={slidesRef}
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slidesArray.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide} {/* Render the child elements here */}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-transparent text-white "
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-transparent text-white "
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slidesArray.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
