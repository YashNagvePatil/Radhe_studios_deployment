
import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <div className="h-full w-full">
        <video
          src="hero.MOV"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      {/* Brochure Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          className="
            rounded-full
            border border-white/40
            bg-white/10
            px-8 py-3
            text-lg font-medium text-white
            backdrop-blur-md
            shadow-[0_0_25px_rgba(255,190,145,0.8)]
            transition-all duration-300
            hover:scale-105
            hover:bg-[#FFBE91]
            hover:text-black
            hover:shadow-[0_0_40px_rgba(255,190,145,1)]
          "
        >
          Download Brochure
        </button>
      </div>
    </section>
  )
}

export default HeroSection

