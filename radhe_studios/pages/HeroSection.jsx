import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Mobile Screen: Image using Next.js Image component */}
      <div className="block md:hidden h-full w-full relative">
        <Image
          src="/walls-io-UKIaveFEIt0-unsplash.jpg"
          alt="Radhe Studios Hero"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        {/* Subtle overlay for better text/button readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Desktop Screen: Video background */}
      <div className="hidden md:block h-full w-full">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/bg.webp"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Brochure Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a
          href="/Radhe-Studios.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-block rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-medium text-amber-800 backdrop-blur-md shadow-[0_0_25px_rgba(255,190,145,0.8)] transition-all duration-300 hover:scale-105 hover:bg-[#FFBE91] hover:text-black hover:shadow-[0_0_40px_rgba(255,190,145,1)] cursor-pointer whitespace-nowrap"
        >
          Download Brochure
        </a>
      </div>
    </section>
  )
}

export default HeroSection
