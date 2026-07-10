'use client'
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkCatalog = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Work catalog data with video information
  const works = [
    {
      id: 1,
      title: "Digital Transformation",
      client: "TechVision Studios",
      category: "Brand Campaign",
      description: "A cinematic journey through digital innovation, showcasing how cutting-edge technology transforms brand narratives into immersive experiences.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=800&auto=format&fit=crop&q=80",
      duration: "3:45",
      year: "2024",
      tags: ["Motion Graphics", "3D Animation", "Branding"]
    },
    {
      id: 2,
      title: "Luxury Redefined",
      client: "Luxe Brands Inc",
      category: "Product Showcase",
      description: "An elegant exploration of premium craftsmanship, blending minimalist aesthetics with dynamic visual storytelling to elevate brand perception.",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
      thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&auto=format&fit=crop&q=80",
      duration: "4:12",
      year: "2024",
      tags: ["Luxury", "Product Video", "Cinematography"]
    },
    {
      id: 3,
      title: "Future Forward",
      client: "Quantum Labs",
      category: "Corporate Video",
      description: "A visionary narrative exploring the intersection of innovation and human connection, crafted to inspire and captivate global audiences.",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
      thumbnail: "https://images.unsplash.com/photo-1536240478547-d4b88589f880?w=800&auto=format&fit=crop&q=80",
      duration: "5:30",
      year: "2024",
      tags: ["Corporate", "Innovation", "Storytelling"]
    }
  ];

  useGSAP(() => {
    // Header animations
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#work_catalog",
        start: "top 60%",
        markers: false,
      }
    });

    headerTl.from(".work_header", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out"
    })

    headerTl.from(".work_subtitle", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")

    // Video cards animations
    gsap.from(".video_card", {
      scrollTrigger: {
        trigger: ".video_cards_container",
        start: "top 70%",
        markers: false,
      },
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    })
  }, []);

  return (
    <section id="work_catalog" className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-16 sm:py-24 md:py-32 lg:py-40">

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl opacity-15" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="space-y-6 sm:space-y-8">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 font-inter">
              Our Portfolio
            </span>

            <h1 className="work_header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas uppercase tracking-wider leading-tight">
              Our Work
            </h1>

            <p className="work_subtitle max-w-3xl text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
              Explore our collection of cinematic masterpieces. Each project represents our commitment to storytelling, innovation, and visual excellence. From brand campaigns to corporate narratives, witness how we transform visions into compelling visual experiences.
            </p>
          </div>
        </div>

        {/* Video Cards Container */}
        <div className="video_cards_container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {works.map((work) => (
              <div
                key={work.id}
                className="video_card group relative flex flex-col h-full"
                onMouseEnter={() => setHoveredVideo(work.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {/* Video Container */}
                <div className="relative overflow-hidden rounded-lg aspect-video bg-black mb-6 sm:mb-8">
                  {/* Thumbnail/Video Background */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-700" />
                  </div>

                  {/* Play Button - Centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setPlayingVideo(work.id)}
                      className="relative group/play w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 hover:bg-amber-400 transition-all duration-500 flex items-center justify-center shadow-2xl hover:shadow-amber-500/50 transform group-hover:scale-110"
                    >
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-slate-950 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Video Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs sm:text-sm font-mono text-amber-400">
                      {work.duration}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-950">
                      {work.category}
                    </span>
                  </div>
                </div>

                {/* Video Information Section */}
                <div className="flex flex-col space-y-4 sm:space-y-5 flex-grow">
                  {/* Title and Client */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white font-rubik group-hover:text-amber-400 transition-colors duration-500">
                      {work.title}
                    </h3>
                    <p className="text-sm sm:text-base text-amber-400/80 font-inter font-medium">
                      {work.client}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed line-clamp-3">
                    {work.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-amber-400/50 hover:text-amber-400/80 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <span className="text-xs sm:text-sm uppercase tracking-widest text-white/50 font-mono">
                      {work.year}
                    </span>
                    <button className="group/link flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-300">
                      <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold">
                        View Project
                      </span>
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {playingVideo && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setPlayingVideo(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors duration-300 z-60"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`${works.find(w => w.id === playingVideo)?.videoUrl}?autoplay=1`}
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-20 sm:mt-24 md:mt-32 pt-16 sm:pt-20 md:pt-24 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wider leading-tight">
                Ready to Create Something Extraordinary?
              </h2>
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                Let's collaborate on your next project. Whether you're looking to elevate your brand, launch a campaign, or tell your story, we're here to bring your vision to life with cinematic excellence.
              </p>
            </div>

            {/* Right: CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <button className="group relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <span className="relative">Start Your Project</span>
              </button>
              <button className="group relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 border-2 border-amber-400/50 text-amber-400 font-semibold uppercase tracking-wider rounded-lg hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-500">
                <span className="relative">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fade-in animation for modal */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default WorkCatalog;
