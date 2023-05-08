"use client";

import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";

import Image from "next/image";

function FeaturedBanner({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayRef = useRef();

  const handleAutoplay = () => {
    if (isPlaying) {
      setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
    }
  };

  useEffect(() => {
    autoplayRef.current = setInterval(handleAutoplay, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [activeIndex, isPlaying, slides]);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
    setIsPlaying(false);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
    setIsPlaying(false);
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full h-[28rem]">
      {/* previous button */}
      <div className="absolute inset-y-0 left-2 flex items-center z-20 opacity-70">
        <button
          className="p-2 rounded-full bg-gray-500 text-white focus:outline-none"
          onClick={handlePrevClick}
        >
          <FiChevronLeft />
        </button>
      </div>

      {/* next button */}
      <div className="absolute inset-y-0 right-2 flex items-center z-20 opacity-70">
        <button
          className="p-2 rounded-full bg-gray-500 text-white focus:outline-none"
          onClick={handleNextClick}
        >
          <FiChevronRight />
        </button>
      </div>

      {/* images section */}
      <div
        className="relative h-full overflow-hidden"
        onMouseEnter={handlePauseClick}
        onMouseLeave={handlePlayClick}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 z-0 h-full w-full transform transition-transform duration-500 ${
              index === activeIndex
                ? "translate-x-0"
                : index < activeIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full h-24 bg-black opacity-70 flex justify-center items-center">
                <p className="text-white text-lg px-3">{slide.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* slides dot indicator */}
      <div className="flex items-center justify-center py-1">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`${
              slideIndex === activeIndex ? "text-2xl" : "text-xl"
            } cursor-pointer transition`}
            onClick={() => setActiveIndex(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedBanner;
