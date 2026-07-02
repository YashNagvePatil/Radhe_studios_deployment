"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const PoliticalServices = () => {
  const pageRef = useRef(null)

  useGSAP(() => {
    gsap.from(".pol-line", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: { trigger: pageRef.current, start: "top 80%" }
    })
  }, { scope: pageRef })

  return (
   <>
  
   <div ref={pageRef} className="w-full min-h-screen bg-blue-950 text-[#F9F9F9] py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* MONOLITHIC INTRO SECTION */}
        <div className="mb-24 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold block">// SERVICE_VERT_02 // STRATEGIC CAMPAIGNS</span>
          <h1 className="text-6xl md:text-8xl font-bebas tracking-wide uppercase leading-none max-w-4xl text-white">
            Narrative <span className="text-white/30">Architecture</span> & Perception Engines
          </h1>
          <div className="pol-line h-[1px] w-full bg-white/20 my-8" />
        </div>

        {/* BRUTALIST THREE-COLUMN STRATEGIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
          
          <div className="bg-black/40 p-10 space-y-6 hover:bg-neutral-900/40 transition-colors duration-300">
            <h3 className="text-3xl font-bebas tracking-wider uppercase text-white">01 / Command & Positioning</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              We execute high-impact messaging strategies that firmly position candidates and coalitions at the core of critical public discourse. Complete demographic analysis dictates our visual output.
            </p>
            <ul className="font-mono text-[11px] uppercase tracking-wider text-amber-400 space-y-2">
              <li>+ Demographic Micro-Targeting</li>
              <li>+ Core Message Blueprinting</li>
              <li>+ Opposition Media Insulating</li>
            </ul>
          </div>

          <div className="bg-black/40 p-10 space-y-6 hover:bg-neutral-900/40 transition-colors duration-300">
            <h3 className="text-3xl font-bebas tracking-wider uppercase text-white">02 / Rapid Response Ops</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              In high-stakes environments, latency is defeat. Our localized rapid asset engine deploys highly professional cinematic content within hours of real-time developments.
            </p>
            <ul className="font-mono text-[11px] uppercase tracking-wider text-amber-400 space-y-2">
              <li>+ real-time Asset Generation</li>
              <li>+ Crisis Mitigation Layouts</li>
              <li>+ Narrative Reclamation Systems</li>
            </ul>
          </div>

          <div className="bg-black/40 p-10 space-y-6 hover:bg-neutral-900/40 transition-colors duration-300">
            <h3 className="text-3xl font-bebas tracking-wider uppercase text-white">03 / Visual Mobilization</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Transform passive digital impressions into definitive action. We deploy custom graphic and motion design frameworks that inspire absolute base loyalty and active mobilization.
            </p>
            <ul className="font-mono text-[11px] uppercase tracking-wider text-amber-400 space-y-2">
              <li>+ High-Impact Keynote Design</li>
              <li>+ Grassroots Digital Collateral</li>
              <li>+ UI/UX Fundraising Pipelines</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default PoliticalServices
