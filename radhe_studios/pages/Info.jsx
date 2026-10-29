import React from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Info = () => {
  const founders = [
    {
      name: "Akshay Pawar",
      role: "Co-Founder / Creative Director",
      image: "/Akshya pawar.webp",
      bio: "Inspired by timeless Indian storytelling, Akshay built Radhe Studios to turn ideas into brands, and brands into stories worth remembering.Where ancient storytelling meets modern marketing."
    },
    {
      name: "Pragati Jain",
      role: "Co-Founder / Technical Lead",
      image: "/ARYA-JAIN.webp",
      bio: "Inspired by the art of turning ideas into visual stories, Arya brings creativity to every frame at Radhe Studios. From concepts to visuals, transforming imagination into designs that make brands seen, remembered, and felt."
    }
  ];

  const team = [
    { name: "Yash Nagve", role: "Mearn Stack dev/UI Designer", image: "/default.webp" },
    { name: "Om Ambat", role: "Video Editor", image: "/default.webp" },
    { name: "Aditya Londhe", role: "Social Media Manager", image: "/default.webp" },
    { name: "Shivam Murtarker", role: "Full-Stack Developer", image: "/default.webp" },
    { name: "Jitendra kariya", role: "Talent management", image: "/default.webp" },
    { name: "Nivrutii wagh", role: "VideoGraphy", image: "/default.webp" }
  ];


  return (
    <section id='About_us' className="bg-linear-to-b from-green-800 via-green-900 to-green-950 text-[#F9F9F9] min-h-screen font-inter selection:bg-white selection:text-black overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)"
      }}>
      {/* Decorative gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl opacity-15" />
      </div>

      {/* 1. OUR STORY SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Section Label */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="who_are_we text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 block mb-4 font-inter">
              01 / Our Story
            </span>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-white/80">
            <p className="first_para text-lg sm:text-xl md:text-2xl leading-relaxed text-white font-light transition-all duration-700 ease-out">
              We are a collective of creators, thinkers, and builders dedicated to crafting digital identities that resonate. Born out of a desire to break away from traditional corporate constraints, we merge strategy with raw cinematic execution.
            </p>
            <p className="second_para text-sm sm:text-base md:text-lg leading-relaxed text-white/70 font-light">
              Every brand has a pulse—a core narrative waiting to be pulled into the light. We don't just build websites or slap together marketing materials. We design custom interactive ecosystems. By limiting our client roster each year, we ensure that every single partnership receives an aggressive level of attention, execution, and obsession over details.
            </p>
          </div>
        </div>
      </div>

      {/* 2. THE FOUNDERS SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32 border-b border-white/5">
        <div className="mb-12 sm:mb-16">
          <span className="Leadership text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 block mb-3 font-inter">
            02 / Leadership
          </span>
          <h2 className="The_Founders text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas uppercase tracking-wider text-white leading-none">
            The Founders
          </h2>
        </div>

        {/* Founders Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {founders.map((founder, index) => (
            <div key={index} className="group relative flex flex-col space-y-5 sm:space-y-6">

              {/* Image Frame with Premium Effects */}
              <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out rounded-lg shadow-2xl group-hover:shadow-amber-500/20">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="founder_img w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/30 transition-colors duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* Text Info Box */}
              <div className="founder_card flex flex-col space-y-3 sm:space-y-4">
                <div className="flex justify-between items-baseline border-b border-amber-400/20 pb-3 sm:pb-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white font-rubik">
                    {founder.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-amber-400/60 font-mono">
                    [{index + 1}]
                  </span>
                </div>
                <span className="text-xs sm:text-sm uppercase tracking-wider text-white/50 font-inter font-medium">
                  {founder.role}
                </span>
                <p className="text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed pt-2">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. THE CORE TEAM SECTION */}
      <div id='core_team' className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mb-12 sm:mb-16">
          <span className="the_collective text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-400/80 block mb-3 font-inter">
            03 / The Collective
          </span>
          <h2 className="our_team text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas uppercase tracking-wider text-white leading-none">
            Our Team
          </h2>
        </div>

        {/* Team Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {team.map((member, index) => (
            <div key={index} className="group flex flex-col space-y-3 sm:space-y-4">

              {/* Image Box with Premium Effects */}
              <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-lg shadow-lg group-hover:shadow-amber-500/20 transition-shadow duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  className="team_img w-full h-full object-cover filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Team Member Details */}
              <div className="team_member space-y-1">
                <h4 className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-white font-rubik line-clamp-2">
                  {member.name}
                </h4>
                <p className="text-xs sm:text-sm uppercase tracking-wide text-white/50 font-inter line-clamp-2">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info
