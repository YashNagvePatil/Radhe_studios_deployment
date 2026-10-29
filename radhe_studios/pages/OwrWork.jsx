
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const WorkShowcase = () => {
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Work data with video sources
  const works = [
    {
      id: 1,
      title: "Digital Transformation",
      client: "TechVision Studios",
      category: "Brand Campaign",
      description: "A cinematic journey through digital innovation, showcasing how cutting-edge technology transforms brand narratives into immersive experiences.",
      videoUrl: "first.mp4",
      year: "2024",
      tags: ["Motion Graphics", "3D Animation", "Branding"]
    },
    {
      id: 2,
      title: "Luxury Redefined",
      client: "Luxe Brands Inc",
      category: "Product Showcase",
      description: "An elegant exploration of premium craftsmanship, blending minimalist aesthetics with dynamic visual storytelling to elevate brand perception.",
      videoUrl: "second.mp4",
      year: "2024",
      tags: ["Luxury", "Product Video", "Cinematography"]
    },
    {
      id: 3,
      title: "Future Forward",
      client: "Quantum Labs",
      category: "Corporate Video",
      description: "A visionary narrative exploring the intersection of innovation and human connection, crafted to inspire and captivate global audiences.",
      videoUrl: "third.mp4",
      year: "2024",
      tags: ["Corporate", "Innovation", "Storytelling"]
    }
  ];

  const currentWork = works[currentWorkIndex];

  // Handle video ended - loop to next or restart
  useEffect(() => {
    const handleVideoEnd = () => {
      if (isAutoPlay) {
        setCurrentWorkIndex((prev) => (prev + 1) % works.length);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      return () => videoElement.removeEventListener('ended', handleVideoEnd);
    }
  }, [isAutoPlay, works.length]);

  // GSAP animations
  useGSAP(() => {
    if (containerRef.current) {
      // Animate info panel on mount and when video changes
      gsap.fromTo(
        ".info_panel",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        ".video_title",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.1 }
      );

      gsap.fromTo(
        ".video_description",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".video_meta",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        ".video_tags",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.4 }
      );
    }
  }, [currentWorkIndex]);

  const goToNext = () => {
    setCurrentWorkIndex((prev) => (prev + 1) % works.length);
    setIsAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentWorkIndex((prev) => (prev - 1 + works.length) % works.length);
    setIsAutoPlay(false);
  };

  const goToWork = (index) => {
    setCurrentWorkIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Full-Screen Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          key={currentWork.videoUrl}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={currentWork.videoUrl} type="video/mp4" />
        </video>

        {/* Video Overlay Gradient - Premium Dark Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16">
        {/* Top Section - Header */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 font-inter">
              Our Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wider text-white">
              Our Work
            </h1>
          </div>

          {/* Counter */}
          <div className="text-right">
            <p className="text-sm sm:text-base font-mono text-white/60">
              <span className="text-amber-400 font-semibold text-lg sm:text-xl">
                {String(currentWorkIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-white/40"> / {String(works.length).padStart(2, '0')}</span>
            </p>
          </div>
        </div>

        {/* Middle Section - Information Panel */}
        <div className="info_panel max-w-2xl space-y-6 sm:space-y-8">
          {/* Title and Client */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-amber-400 to-amber-600" />
              <span className="text-xs sm:text-sm uppercase tracking-widest text-amber-400/80 font-inter font-semibold">
                {currentWork.category}
              </span>
            </div>

            <h2 className="video_title text-5xl sm:text-6xl md:text-7xl font-bebas uppercase tracking-wider text-white leading-tight">
              {currentWork.title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-amber-400/90 font-inter font-medium">
              {currentWork.client}
            </p>
          </div>

          {/* Description */}
          <p className="video_description text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-xl">
            {currentWork.description}
          </p>

          {/* Tags */}
          <div className="video_tags flex flex-wrap gap-2 sm:gap-3">
            {currentWork.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block text-xs sm:text-sm uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-amber-400/50 text-amber-400/90 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta Information */}
          <div className="video_meta flex items-center gap-6 sm:gap-8 pt-4 border-t border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 font-inter mb-1">
                Year
              </p>
              <p className="text-lg sm:text-xl font-semibold text-white">
                {currentWork.year}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 font-inter mb-1">
                Status
              </p>
              <p className="text-lg sm:text-xl font-semibold text-amber-400">
                Completed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Navigation and Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8">
          {/* Navigation Dots */}
          <div className="flex gap-3 sm:gap-4">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => goToWork(index)}
                className={`transition-all duration-500 ${
                  index === currentWorkIndex
                    ? 'w-8 sm:w-10 h-1 bg-amber-400'
                    : 'w-2 h-1 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to work ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 hover:border-amber-400 text-white/60 hover:text-amber-400 transition-all duration-500"
              title={isAutoPlay ? "Pause" : "Play"}
            >
              {isAutoPlay ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 hover:border-amber-400 text-white/60 hover:text-amber-400 transition-all duration-500"
              aria-label="Previous work"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-amber-400 bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 transition-all duration-500 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40"
              aria-label="Next work"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Optimized Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-5" />
    </div>
  );
};

export default WorkShowcase;
