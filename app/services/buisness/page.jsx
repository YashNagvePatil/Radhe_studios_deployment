'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const BusinessServices = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.from(".biz-card", {
      opacity: 0,
      scale: 0.98,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
    })
  }, { scope: containerRef })

  return (
    <>
   
    <div ref={containerRef} className="w-full min-h-screen bg-amber-900 text-[#F9F9F9] py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ROW 1: HEADER SPLIT */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-10">
          <div className="max-w-xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block">// SERVICE_VERT_03 // ENTERPRISE INFRASTRUCTURE</span>
            <h2 className="text-4xl md:text-6xl font-bebas uppercase tracking-wider text-white">Corporate Architecture Elevation</h2>
          </div>
          <p className="text-white/40 font-mono text-xs max-w-xs md:text-right">
            [SECURE DATA INTEGRITY WITH ENTERPRISE CLASS PERFORMANCE AND INTERACTIVE REAL-TIME ENGAGEMENT]
          </p>
        </div>

        {/* ROW 2: EXPERIMENTAL INTERACTIVE MATRIX BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="biz-card border border-white/10 bg-white/[0.01] p-10 flex flex-col justify-between h-[340px] group hover:bg-white/[0.03] transition-all duration-300">
            <div className="flex justify-between items-start">
              <h4 className="text-3xl font-bebas uppercase tracking-wider text-white">01 / B2B Web Ecosystems</h4>
              <span className="font-mono text-xs text-white/30">[WEBGL / THREE.JS]</span>
            </div>
            <div>
              <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
                Engineered for Fortune 500 ecosystems. We deploy high-fidelity 3D web showcases and interactive data dashboards that completely re-invent how stakeholders interface with your digital assets.
              </p>
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-emerald-400 transition-colors duration-500" />
            </div>
          </div>

          <div className="biz-card border border-white/10 bg-white/[0.01] p-10 flex flex-col justify-between h-[340px] group hover:bg-white/[0.03] transition-all duration-300">
            <div className="flex justify-between items-start">
              <h4 className="text-3xl font-bebas uppercase tracking-wider text-white">02 / Institutional Repositioning</h4>
              <span className="font-mono text-xs text-white/30">[BRAND RE-ARCHITECTING]</span>
            </div>
            <div>
              <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
                Legacy transformation for market frontrunners. We modernize your visual system, documentation standards, and multi-channel public marketing presence into clean, minimalist assets.
              </p>
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-emerald-400 transition-colors duration-500" />
            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default BusinessServices