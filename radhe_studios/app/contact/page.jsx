'use client'
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { config } from "../../Config"
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const form = useRef();

  const contactInfo = [
    {
      icon: 'email',
      label: 'Email',
      value: 'Info@Radhestudios.com',
      link: 'Info@Radhestudios.com'
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '8010608195',
      link: 'tel:+918010608195'
    },
    {
      icon: 'location',
      label: 'Address',
      value: 'Shop No. 1 Shakun Plaza Near Domino’z Jalna-431203',
      link: '#'
    },
    {
      icon: 'hours',
      label: 'Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
      link: '#'
    }
  ];

  useGSAP(() => {
    // Header animation executes cleanly on page load
    const tl = gsap.timeline();

    tl.from(".contact_header", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all"
    })
      .from(".contact_subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all"
      }, "-=0.6");

    // Contact info cards animation with once: true and clearProps
    gsap.from(".contact_info_card", {
      scrollTrigger: {
        trigger: ".contact_info_grid",
        start: "top 85%",
        once: true,
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all"
    });

    // Form section animation with once: true and clearProps
    gsap.from(".contact_form", {
      scrollTrigger: {
        trigger: ".contact_form",
        start: "top 85%",
        once: true,
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all"
    });

    // CTA section animation
    gsap.from(".contact_cta", {
      scrollTrigger: {
        trigger: ".contact_cta",
        start: "top 85%",
        once: true,
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all"
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await emailjs.sendForm(
        config.EMAIL_SERVICE_ID,
        config.EMAIL_TEMPLETE_ID,
        form.current,
        { publicKey: config.EMAIL_PUBLICE_KEY }
      );

      console.log('EmailJS Success:', response);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      if (form.current) form.current.reset();
    } catch (error) {
      const errDetails = error?.text || error?.message || JSON.stringify(error);
      console.error('EmailJS Error Detail:', error?.status, errDetails, error);
      setSubmitMessage(`Failed to send message (${error?.status || 'Error'}): ${errDetails}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const IconComponent = ({ icon }) => {
    switch (icon) {
      case 'email':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'phone':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'location':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'hours':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div id="contact_page" className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="space-y-6 sm:space-y-8">
            <span className="contact_header inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 font-inter">
              Get In Touch
            </span>

            <h1 className="contact_header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas uppercase tracking-wider leading-tight">
              Contact Us
            </h1>

            <p className="contact_subtitle max-w-2xl text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
              Have a project in mind? We'd love to hear from you. Get in touch with our team and let's create something extraordinary together.
            </p>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="contact_info_grid max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="contact_info_card group p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg hover:border-amber-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent icon={info.icon} />
                </div>
                <h3 className="text-sm uppercase tracking-widest text-white/50 font-inter mb-2">
                  {info.label}
                </h3>
                <p className="text-base sm:text-lg text-white font-light group-hover:text-amber-400 transition-colors duration-500">
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
          <div className="contact_form space-y-8 sm:space-y-10">
            {/* Form Header */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wider leading-tight">
                Send Us A Message
              </h2>
              <p className="text-base sm:text-lg text-white/70 font-light">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Form */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* HIDDEN INPUTS FOR EMAILJS FIELD ALIASES */}
              <input type="hidden" name="from_name" value={formData.name} />
              <input type="hidden" name="from_email" value={formData.email} />
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light"
                  />
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project inquiry"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your project..."
                  rows="6"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 sm:px-12 md:px-16 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className="p-4 sm:p-6 bg-amber-500/10 border border-amber-400/30 rounded-lg">
                  <p className="text-sm sm:text-base text-amber-400 font-light">
                    {submitMessage}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact_cta max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wider leading-tight">
                Ready to Collaborate?
              </h2>
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, our team is ready to bring your vision to life. Let's create something extraordinary together.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-amber-400/80 font-inter">
                Response Time
              </p>
              <p className="text-4xl sm:text-5xl font-bebas text-white">
                24 Hours
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light">
                We typically respond to all inquiries within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
