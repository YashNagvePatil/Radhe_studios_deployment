'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  // Navigation links
  const navigationLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Work', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  // Services
  const services = [
    { label: 'Political Marketing', href: '/services/political' },
    { label: 'Social Media Marketing', href: '/services/social_media' },
    { label: 'Buisness Marketing', href: '/services/buisness' },

  ];

  // Social links
  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { label: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' }
  ];

  // GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "top 80%",
        markers: false,
      }
    });

    tl.from(".footer_header", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out"
    })

    tl.from(".footer_content", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")

    tl.from(".footer_bottom", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setSubscriptionMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
        setSubscriptionMessage('');
      }, 3000);
    } else {
      setSubscriptionMessage('Please enter a valid email address.');
    }
  };

  const SocialIcon = ({ icon }) => {
    switch (icon) {
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-3 1" />
          </svg>
        );
      case 'dribbble':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M8.56 2.75c3.61 6.33 6.83 6.33 10.24 0M2.75 8.56c6.33 3.61 6.33 6.83 0 10.24M21.25 8.56c-6.33 3.61-6.33 6.83 0 10.24M8.56 21.25c3.61-6.33 6.83-6.33 10.24 0" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer id="footer" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl opacity-15" />
      </div>

      <div className="relative z-10">
        {/* Top Section - Newsletter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left - Newsletter Content */}
            <div className="footer_header space-y-4 sm:space-y-6">
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 font-inter">
                Stay Updated
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wider leading-tight">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Get the latest insights on design, innovation, and creative excellence delivered directly to your inbox.
              </p>
            </div>

            {/* Right - Newsletter Form */}
            <div className="footer_content">
              <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 sm:px-6 py-2 sm:py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold uppercase tracking-wider rounded-md transition-all duration-300 text-xs sm:text-sm"
                  >
                    Subscribe
                  </button>
                </div>
                {subscriptionMessage && (
                  <p className={`text-xs sm:text-sm font-light ${isSubscribed ? 'text-amber-400' : 'text-red-400'}`}>
                    {subscriptionMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section - Links and Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-8">
            {/* Navigation */}
            <div className="footer_content space-y-4 sm:space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white font-inter">
                Navigation
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-amber-400 transition-colors duration-300 font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer_content space-y-4 sm:space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white font-inter">
                Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-sm text-white/70 hover:text-amber-400 transition-colors duration-300 font-light"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer_content space-y-4 sm:space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white font-inter">
                Contact
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="mailto:hello@company.com"
                    className="text-sm text-white/70 hover:text-amber-400 transition-colors duration-300 font-light"
                  >
                    Info@Radhestudios.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:8010608195"
                    className="text-sm text-white/70 hover:text-amber-400 transition-colors duration-300 font-light"
                  >
                    8010608195
                  </a>
                </li>
                <li className="text-sm text-white/70 font-light">
                  Shop No. 1 Shakun Plaza <br />Near Domino's <br />
                  Jalna-431203
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer_content space-y-4 sm:space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white font-inter">
                Legal
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-amber-400 transition-colors duration-300 font-light"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-amber-400 transition-colors duration-300 font-light"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-amber-400 transition-colors duration-300 font-light"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">
          <div className="footer_bottom flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
            {/* Left - Copyright and Brand */}
            <div className="space-y-3 sm:space-y-0">
              <div className="flex items-center gap-3 mb-3 sm:mb-0">
                <div className="w-36 h-auto flex items-center justify-center">
                  <Image
                    src="/White-Line.webp"
                    alt="Radhe Studios"
                    width={160}
                    height={40}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/50 font-light">
                © 2026 Radhe Studios. All rights reserved.
              </p>
            </div>

            {/* Right - Social Links */}
            <div className="flex items-center gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-amber-400/50 flex items-center justify-center text-white/60 hover:text-amber-400 transition-all duration-300"
                  title={social.label}
                >
                  <SocialIcon icon={social.icon} />
                  <div className="absolute inset-0 bg-amber-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6">
          <p className="text-xs sm:text-sm text-white/40 text-center font-light">
            Crafted with precision and passion. Designed to inspire, built to perform.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
