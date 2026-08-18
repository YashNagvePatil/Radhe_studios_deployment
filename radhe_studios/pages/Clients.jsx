'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const ClientShowcase = () => {
  const router = useRouter()
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);


  const handleNavigate = () => {
    router.push("/contact");
  };

  // Premium client logos - replace with your actual client logos
  const clients = [
    { name: "Aethasadhana", logo: "/clients_logo/Aethasadhana.png" },
    { name: "jayHindAcadadmy", logo: "/clients_logo/jayHindAcadadmy.png" },
    { name: "Jindal-Seeds", logo: "/clients_logo/Jindal-Seeds.png" },
    { name: "Vandana-Readymate.png", logo: "/clients_logo/Vandana-Readymate.png" },
    { name: "Aethasadhana", logo: "/clients_logo/Aethasadhana.png" },
    { name: "jayHindAcadadmy", logo: "/clients_logo/jayHindAcadadmy.png" },
    { name: "Jindal-Seeds", logo: "/clients_logo/Jindal-Seeds.png" },
    { name: "Vandana-Readymate.png", logo: "/clients_logo/Vandana-Readymate.png" },
  ];

  useGSAP(() => {
    // Infinite marquee animation
    if (marqueeInnerRef.current) {
      const marqueeWidth = marqueeInnerRef.current.offsetWidth;
      const containerWidth = marqueeRef.current.offsetWidth;

      gsap.to(marqueeInnerRef.current, {
        x: -marqueeWidth / 2,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (marqueeWidth / 2))
        }
      });
    }

    // Scroll-triggered section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clients_section",
        start: "top 60%",
        markers: false,
      }
    });

    tl.from(".clients_header", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out"
    })

    tl.from(".clients_subtitle", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")

    tl.from(".marquee_container", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")

  }, []);

  return (
    <section id="clients_section" className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-16 sm:py-24 md:py-32 lg:py-40">

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl opacity-15" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="text-center space-y-6 sm:space-y-8">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 font-inter">
              Our Trusted Partners
            </span>

            <h1 className="clients_header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas uppercase tracking-wider leading-tight">
              Brands That Trust Us
            </h1>

            <p className="clients_subtitle max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
              We've had the privilege of partnering with industry-leading brands and innovative companies. Each collaboration represents our commitment to excellence, creativity, and measurable results.
            </p>
          </div>
        </div>

        {/* Stats Section - Premium Touch */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-20 sm:mb-24 md:mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { number: "150+", label: "Successful Projects" },
              { number: "50+", label: "Global Clients" },
              { number: "12+", label: "Years of Excellence" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="group relative p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-amber-400/10 rounded-lg hover:border-amber-400/30 transition-all duration-500 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/0 group-hover:from-amber-400/5 group-hover:to-amber-400/0 rounded-lg transition-all duration-500" />
                <div className="relative">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bebas text-amber-400 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-white/60 font-inter">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Section - Premium Showcase */}
        <div className="relative">
          {/* Top gradient fade */}
          <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-slate-950 to-transparent z-20 pointer-events-none" />

          <div className="marquee_container relative overflow-hidden py-12 sm:py-16 md:py-20">
            {/* Marquee wrapper */}
            <div
              ref={marqueeRef}
              className="relative w-full overflow-hidden"
            >
              {/* Inner marquee content */}
              <div
                ref={marqueeInnerRef}
                className="flex gap-8 sm:gap-12 md:gap-16 whitespace-nowrap"
              >
                {/* Duplicate clients for seamless loop */}
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={index}
                    className="group relative flex-shrink-0 w-48 sm:w-56 md:w-64 h-24 sm:h-28 md:h-32"
                  >
                    {/* Client logo container */}
                    <div className="relative w-full h-full bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 group-hover:border-amber-400/50 rounded-lg overflow-hidden transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-amber-500/20">
                      {/* Premium glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:to-amber-400/5 transition-all duration-500" />

                      {/* Logo image */}
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain p-4 sm:p-5 md:p-6 filter brightness-90 group-hover:brightness-110 transition-all duration-500 group-hover:scale-105"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Client name label on hover */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-bottom-6">
                      <p className="text-xs sm:text-sm font-medium text-amber-400/80 whitespace-nowrap">
                        {client.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />

          {/* Side gradient fades for depth */}
          <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-20 sm:mt-24 md:mt-32 text-center">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light">
              Ready to join our roster of premium brands?
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 overflow-hidden">
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <span className="relative" onClick={handleNavigate}>Start Your Project</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
