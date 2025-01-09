import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images and captions
  const slides = [
    {
      imgSrc: "/Element.png",
      title: "Welcome to Yogyata Portal",
      subtitle: "Power of AI",
      description: "One Step To Smart-Recruitment",
    },
    {
      imgSrc: "/Element.png",
      title: "Welcome to Yogyata Portal",
      subtitle: "AI Based Resume Shortlisting",
      description: "Get Desired Candidates using AI Power",
    },
    {
      imgSrc: "/Element.png",
      title: "Welcome to Yogyata Portal",
      subtitle: "AI Based Examination",
      description: "Get Potential Candidates by Smart Examination using AI Power",
    },
  ];

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <section className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="relative w-full">
          {/* Current Slide */}
          <div className="relative w-full overflow-hidden">
            <img
              className="w-full object-cover transition-all duration-1000 ease-in-out"
              src={slides[currentIndex].imgSrc}
              alt={`Slide ${currentIndex + 1}`}
              style={{ height: "500px" }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-8 md:px-16 z-10">
              <img
                src="logocircle.png"
                alt="Logo"
                className="mx-auto mb-6"
                style={{ width: "120px", maxWidth: "100%" }}
              />
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                {slides[currentIndex].title}
              </h3>
              <h4 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-red-600">UNLOCK</span> {slides[currentIndex].subtitle}
              </h4>
              <p className="text-white text-base sm:text-lg md:text-xl mb-6">
                {slides[currentIndex].description}
              </p>
              <a
                href="/register"
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg transition duration-300 hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white p-2"
            onClick={prevSlide}
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white p-2"
            onClick={nextSlide}
          >
            <FaArrowRight size={26} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
