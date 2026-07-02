  'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const [time, setTime] = useState('')

  // 🕒 Trendy local time indicator for high-end studio vibes
  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    // Elegant staggered reveal tracking when the viewport hits the bottom
    gsap.from(".footer_fade", {
      scrollTrigger: {
        trigger: "#Footer",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    })
  }, [])

  return (
    <footer id="Footer" className="bg-amber-700 text-[#F9F9F9] pt-32 pb-12 relative overflow-hidden w-full border-t border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* 💥 TOP SECTION: MASSIVE KINETIC CTA STATEMENT */}
        <div className="mb-24">
          <p className="footer_fade text-xs md:text-sm font-semibold uppercase tracking-widest text-white/40 mb-4 font-mono">
            // HAVE AN IDEA?
          </p>
          <a 
            href="#Contact_Us" 
            className="footer_fade group inline-block text-6xl sm:text-7xl md:text-9xl font-bebas uppercase tracking-wider text-white hover:text-amber-400 transition-colors duration-300 leading-none"
          >
            LET'S BUILD IT <span className="inline-block group-hover:translate-x-4 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* 🗂️ MIDDLE SECTION: THE LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-6 border-b border-white/10 pb-20 mb-12">
          
          {/* Brand Vision Column */}
          <div className="col-span-2 md:col-span-5 space-y-4">
            <span className="footer_fade text-xl font-extrabold tracking-wider text-white font-bebas block">
              RADHE<span className="text-amber-400">.</span>STUDIOS
            </span>
            <p className="footer_fade text-sm text-white/50 font-light leading-relaxed max-w-xs">
              Merging core raw strategy with aggressive pixel-perfect cinematic execution. We don't blend in.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="footer_fade text-xs font-bold uppercase tracking-widest text-white/30 font-mono">Index</h4>
            <ul className="space-y-2 text-sm text-white/60 font-light">
              {['About Us', 'Clients', 'Our Work', 'Our Story'].map((link) => (
                <li key={link}>
                  <a href={`#${link.replace(' ', '_')}`} className="hover:text-white transition-colors duration-150">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered Column */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="footer_fade text-xs font-bold uppercase tracking-widest text-white/30 font-mono">Expertise</h4>
            <ul className="space-y-2 text-sm text-white/60 font-light">
              {['Political Services', 'Business Services', 'Events Services'].map((service) => (
                <li key={service}>
                  <a href={`#${service.replace(' ', '_')}`} className="hover:text-amber-400 transition-colors duration-150">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connected Hubs Column */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <h4 className="footer_fade text-xs font-bold uppercase tracking-widest text-white/30 font-mono">Social Hubs</h4>
            <ul className="space-y-2 text-sm text-white/60 font-light">
              {['Instagram', 'LinkedIn', 'X / Twitter', 'YouTube'].map((platform) => (
                <li key={platform}>
                  <a href="#" className="hover:text-white transition-colors duration-150 flex items-center gap-1">
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 🧱 BASELINE FOOTNOTE: TIME, STATUS, AND COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-white/40 font-mono tracking-wider">
          
          {/* Status & Clock */}
          <div className="footer_fade flex flex-wrap gap-x-8 gap-y-2 items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STUDIO STATUS: AVAILABLE FOR WORK</span>
            </div>
            <div>
              <span>HQ / IST: {time || '00:00:00 AM'}</span>
            </div>
          </div>

          {/* Legal / Copyright */}
          <div className="footer_fade text-left md:text-right">
            <span>© {new Date().getFullYear()} RADHE STUDIOS. ALL RIGHTS RESERVED.</span>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer