"use client"

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  // 💡 FIXED: Added leading slashes (/) to make all routes absolute paths.
  // ⚠️ IMPORTANT: Ensure your folders inside the 'app' directory match these EXACT casings/spellings!
  const navLinks = [
    { name: 'About Us', href: '/#About_us' }, // Changed to /#About_us so it works from subpages too
    { 
      name: 'Services', 
      href: '/services',
      subLinks: [
        { name: 'Political Services', href: '/services/political' },
        { name: 'Business Services', href: '/services/buisness' }, 
        { name: 'Influencer Services', href: '/services/influencer' },
      ]
    },
    { name: 'Clients', href: '/Clients'},
    { name: 'Our Work', href: '/OurWork'},
    { name: 'Career', href: '/carrier'}, // Keeps your 'carrier' folder name setup
    { name: 'Contact Us', href: '/contact' },
  ]

  useGSAP(()=>{
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === 1){
          gsap.to(navRef.current, {
            yPercent: -100,
            duration: 0.1,
            ease: "power2.out"
          })
        }
        else if (self.direction === -1){
          gsap.to(navRef.current, {
            yPercent: 0,
            duration: 0.1,
            ease: "power2.out"
          })
        }
      }
    })
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-[1000] isolate transform translate-z-0 will-change-transform pointer-events-auto bg-red-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-xl font-extrabold tracking-wider text-white font-bebas">
              <img src="/line-logo.png" alt="Logo" className='w-45' />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => {
                if (link.subLinks) {
                  return (
                    <div key={link.name} className="relative group py-2">
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-slate-300 group-hover:text-amber-400 transition-colors duration-200 tracking-wide font-inter flex items-center gap-1"
                        onClick={(e) => {
                          // FIXED: Condition updated to match new absolute route format
                          if(link.href === "/services"){
                            e.preventDefault();
                          }
                        }}
                      >
                        {link.name}
                        <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>

                      {/* HOVER DROPDOWN MENU CONTAINER */}
                      <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-slate-950/90 border border-white/10 shadow-2xl backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-left p-2 z-50">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-3 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-150"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 tracking-wide font-inter relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-amber-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer transition-all"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24 " stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-950/95 border-b border-white/5 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            if (link.subLinks) {
              return (
                <div key={link.name} className="space-y-1">
                  <span className="block px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                    {link.name}
                  </span>
                  {link.subLinks.map((sub) => (
                    // FIXED: Swapped <a> for Next.js <Link> components
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="block pl-6 pr-3 py-2 rounded-md text-base font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )
            }

            return (
              // FIXED: Swapped <a> for Next.js <Link> components
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar