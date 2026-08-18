'use client'
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import {config} from "../../Config"
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    domain: '',
    experience: '',
    projects: '',
    resume: null,
  });

  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const formRef = useRef();

  const domains = [
    'Frontend Development',
    'Backend Development',
    'UI/UX Design',
    'Motion & 3D Graphics',
    'AI & Machine Learning',
    'Content & Brand Strategy',
  ];

  const perks = [
    {
      icon: 'rocket',
      title: 'Real World Projects',
      description: 'Work directly on client production code and designs, not trivial practice exercises.'
    },
    {
      icon: 'mentorship',
      title: '1-on-1 Mentorship',
      description: 'Get paired with a senior mentor for weekly guidance, code reviews, and career coaching.'
    },
    {
      icon: 'clock',
      title: 'Flexible Hours',
      description: 'We prioritize your education. Flexible scheduling built around your university timetable.'
    },
    {
      icon: 'badge',
      title: 'Certificate & Stipend',
      description: 'All internship roles offer competitive compensation and formal recommendations.'
    }
  ];
// GSAP Animations matching the design language
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#internship_careers_page",
        start: "top 30%",
      }
    });

    tl.from(".careers_header", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".careers_subtitle", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");

    // UPDATED: Perk cards animation
    gsap.from(".perk_card", {
      scrollTrigger: {
        trigger: ".perks_grid",
        start: "top 95%", // Triggers earlier so users don't see empty space
        once: true,       // Animates only once; doesn't disappear when scrolling back up
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all"   // Failsafe to prevent elements from getting stuck at opacity: 0
    });

    // UPDATED: Form animation
    gsap.from(".internship_form", {
      scrollTrigger: {
        trigger: ".internship_form",
        start: "top 90%", // Triggers earlier
        once: true,
      },
      opacity: 0,
      y: 40,
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.sendForm(
        config.EMAIL_SERVICE_ID,
        config.EMAIL_TEMPLETE_ID,
        formRef.current,
        config.EMAIL_PUBLICE_KEY
      );

      setSubmitMessage('Your application has been received! We will reach out soon.');
      
      // Reset form
      setFormData({
        studentName: '',
        email: '',
        domain: '',
        experience: '',
        projects: '',
        resume: null
      });
      setFileName('');
      formRef.current.reset(); // Physically clear the file input

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const IconComponent = ({ icon }) => {
    switch (icon) {
      case 'rocket':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.24A15.026 15.026 0 016.7 13.3m0 0l-3.2-3.2m3.2 3.2L11 8" />
          </svg>
        );
      case 'mentorship':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'clock':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'badge':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div id="internship_careers_page" className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="space-y-6 sm:space-y-8">
            <span className="careers_header inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 font-inter">
              Build Your Future
            </span>

            <h1 className="careers_header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas uppercase tracking-wider leading-tight">
              Internships & Careers
            </h1>

            <p className="careers_subtitle max-w-2xl text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
              Are you a passionate student ready to turn theory into impact? Join our team, level up your skills, and craft real solutions.
            </p>
          </div>
        </div>

        <div className="perks_grid max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="perk_card group p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg hover:border-amber-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent icon={perk.icon} />
                </div>
                <h3 className="text-lg sm:text-xl uppercase tracking-wider font-bebas text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
          <div className="internship_form space-y-8 sm:space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas uppercase tracking-wider leading-tight">
                Apply For Internship
              </h2>
              <p className="text-base sm:text-lg text-white/70 font-light">
                Fill out your details below and share your work. We review every application carefully.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2">
                  <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light"
                  />
                </div>

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
                    placeholder="student@university.edu"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                  Preferred Domain
                </label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-900 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-all duration-300 font-light"
                >
                  <option value="" disabled>Select your field of interest</option>
                  {domains.map((item, idx) => (
                    <option key={idx} value={item} className="bg-slate-900 text-white">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                  Previous Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Mention any prior internships, university technical clubs, or freelance experience (or write 'Fresh Student')..."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                  Projects & Links
                </label>
                <textarea
                  name="projects"
                  value={formData.projects}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Share details or URLs for your best projects (GitHub, Figma, Live Demos, Portfolio)..."
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 font-light resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest text-white/60 font-inter">
                  Upload Resume (PDF / Doc)
                </label>
                <div className="relative border-2 border-dashed border-white/20 hover:border-amber-400/50 rounded-lg p-6 text-center transition-all duration-300 bg-white/5">
                  <input
                    type="file"
                    name="resume" // CRUCIAL: Must match the template variable in EmailJS
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm text-white/70 font-light">
                      {fileName ? (
                        <span className="text-amber-400 font-medium">{fileName}</span>
                      ) : (
                        "Click or drag & drop your resume file here"
                      )}
                    </p>
                    <p className="text-xs text-white/40 font-light">Max size: 50KB for Free EmailJS tier</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 sm:px-12 md:px-16 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </div>

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
      </div>
    </div>
  );
};

export default page;