    "use client"



import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const InfluencerServices = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.from(".inf-fade", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%"
      }
    })
  }, { scope: containerRef })

  return (
    <>
    
    <div ref={containerRef} className="w-full min-h-screen bg-orange-800 text-[#F9F9F9] py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: HERO SYNOPSIS */}
        <div className="lg:col-span-5 space-y-8 sticky top-32">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-400 block">// SERVICE_VERT_01 // CREATOR ECONOMY</span>
          <h1 className="text-5xl md:text-7xl font-bebas tracking-wide uppercase leading-none text-white">
            Identity <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-purple-600">Amplification</span>
          </h1>
          <p className="text-white/60 font-sans text-base leading-relaxed">
            We don't just edit content; we engineer ecosystems. We scale creator platforms into globally recognizable enterprise media brands through absolute visual dominance.
          </p>
          <div className="pt-6 grid grid-cols-2 gap-4 border-t border-white/10 font-mono text-xs">
            <div>
              <p className="text-white/40 mb-1">METRIC ENGAGEMENT</p>
              <p className="text-xl font-bold text-white font-bebas tracking-wider">+420% AVG</p>
            </div>
            <div>
              <p className="text-white/40 mb-1">PRODUCTION PIPELINE</p>
              <p className="text-xl font-bold text-white font-bebas tracking-wider">8K CINEMATIC</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CORE PILLARS MATRIX */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inf-fade bg-white/[0.02] border border-white/5 p-8 rounded-sm hover:border-amber-400/30 transition-all duration-300">
            <span className="font-mono text-amber-400/60 text-xs block mb-4">[01. AUDIOVISUAL PACKAGING]</span>
            <h3 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-white">Cinematic Content Systems</h3>
            <p className="text-white/50 text-sm leading-relaxed">Multi-cam setups, custom lighting blueprints, high-fidelity sound, and advanced post-production frameworks built natively for modern high-speed retention loops.</p>
          </div>

          <div className="inf-fade bg-white/[0.02] border border-white/5 p-8 rounded-sm hover:border-amber-400/30 transition-all duration-300">
            <span className="font-mono text-amber-400/60 text-xs block mb-4">[02. ARCHITECTURE DESIGN]</span>
            <h3 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-white">Digital Real-Estate Development</h3>
            <p className="text-white/50 text-sm leading-relaxed">Custom interactive web portals, dynamic Link-In-Bio architecture hubs, and bespoke premium e-commerce pipelines optimized for maximum conversions.</p>
          </div>

          <div className="inf-fade bg-white/[0.02] border border-white/5 p-8 rounded-sm hover:border-amber-400/30 transition-all duration-300">
            <span className="font-mono text-amber-400/60 text-xs block mb-4">[03. SYNDICATION MECHANICS]</span>
            <h3 className="text-2xl font-bebas uppercase tracking-wide mb-2 text-white">Algorithmic Distribution</h3>
            <p className="text-white/50 text-sm leading-relaxed">Cross-platform meta-tagging data schemas, content atomization strategies, and real-time community engagement frameworks across all leading channels.</p>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default InfluencerServices