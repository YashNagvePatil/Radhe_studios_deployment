"use client"
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CreatorsFrom from '../components/CreatorsFrom';

gsap.registerPlugin(ScrollTrigger);

const CreatorsPage = () => {
  // GSAP Entrance & Scroll Animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#creators_page',
        start: 'top 30%',
      }
    });

    tl.from('.creators_header', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out'
    })
      .from('.creators_subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6')
      .from('.creators_cta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6');

    gsap.from('.creators_feature_card', {
      scrollTrigger: {
        trigger: '.creators_features_grid',
        start: 'top 90%',
        once: true,
      },
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'all'
    });

    gsap.from('.creators_form_container', {
      scrollTrigger: {
        trigger: '.creators_form_container',
        start: 'top 90%',
        once: true,
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'all'
    });
  }, []);

  return (
    <div id="creators_page" className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="relative z-10">
        {/* Header Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="space-y-6 sm:space-y-8">
            <span className="creators_header inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 font-inter">
              Radhe Talent &amp; Creators Network
            </span>

            <h1 className="creators_header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas uppercase tracking-wider leading-tight">
              Join As A Creator
            </h1>

            <p className="creators_subtitle max-w-3xl text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
              Unlock exclusive brand deals, UGC campaigns, product shoots, and high-impact partnerships. Register your creator profile with Radhe Studios today!
            </p>

            {/* Centered Download Brochure Button */}
            <div className="creators_cta pt-4 flex justify-center">
              <a
                href="/Radhe-Studios.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-amber-400/20 to-amber-500/10 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-amber-300 backdrop-blur-md shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 hover:text-slate-950 hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] cursor-pointer"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </div>

        {/* Benefits Highlights Grid */}
        <div className="creators_features_grid max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="creators_feature_card group p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg hover:border-amber-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl uppercase tracking-wider font-bebas text-white mb-2">Paid Collaborations</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">Direct connection to premium brand campaigns, paid UGC content, and long-term brand deals.</p>
            </div>

            <div className="creators_feature_card group p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg hover:border-amber-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl uppercase tracking-wider font-bebas text-white mb-2">High-Production Shoots</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">Access to studio product shoots, professional video production, and event coverage projects.</p>
            </div>

            <div className="creators_feature_card group p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg hover:border-amber-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl uppercase tracking-wider font-bebas text-white mb-2">Exclusive Network</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">Be featured in curated brand decks and portfolios pitched directly to top client accounts.</p>
            </div>

            <div className="creators_feature_card group p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg hover:border-amber-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl uppercase tracking-wider font-bebas text-white mb-2">Growth &amp; Strategy</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">Dedicated talent management support to elevate your creator profile and reach.</p>
            </div>
          </div>
        </div>

        {/* Main Creator Registration Form Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
          <div className="creators_form_container space-y-8 sm:space-y-10">
            {/* Form Section Title */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wider leading-tight">
                Creator Onboarding Form
              </h2>
              <p className="text-base sm:text-lg text-white/70 font-light">
                Please complete all required sections below to help us match you with the right brand campaigns.
              </p>
            </div>

            {/* Self-contained Creators Form Component */}
            <CreatorsFrom />
          </div>
        </div>

        {/* Footer CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wider leading-tight">
                Have Questions Before Joining?
              </h2>
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                Reach out to our creator management team directly or email us at hello@radhe-studios.com.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-amber-400/80 font-inter">
                Onboarding Review Time
              </p>
              <p className="text-4xl sm:text-5xl font-bebas text-white">
                24 - 48 Hours
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light">
                Our talent team reviews every creator portfolio application carefully within 24 to 48 hours.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreatorsPage;
