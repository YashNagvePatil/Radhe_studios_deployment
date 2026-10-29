import React from 'react'
import Image from 'next/image'
import { 
  Sparkles, 
  Feather, 
  Compass, 
  Flame, 
  ArrowRight, 
  Quote, 
  Layers, 
  HeartHandshake, 
  Globe 
} from 'lucide-react'
import TellYourStoryBtn from '@/app/components/TellYourStoryBtn'
const page = () => {

    
  const handleNavigate = () => {
    router.push("/contact");
  };




  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/Krishna-BG.webp" 
          alt="Lord Krishna Divine Golden Clouds Background"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-85 transform scale-105"
        />
        
        {/* Gradients to blend image seamlessly with dark UI theme while keeping it clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/25 to-slate-950/85" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_20%,rgba(2,6,23,0.75)_100%)]" />
      </div>

      {/* Decorative Subtle Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-24">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-light tracking-[0.25em] uppercase backdrop-blur-md shadow-lg shadow-amber-950/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>The Origin & Vision</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-slate-100 leading-tight drop-shadow-md">
            The Story Behind <br />
            <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent font-normal">
              Radhe Studios
            </span>
          </h1>

          <p className="text-base sm:text-lg font-light text-slate-300 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Long before logos, websites, and social media existed, every great kingdom was remembered because of its story.
          </p>
        </div>

        {/* SECTION 1: ANCIENT WISDOM & MODERN INFLUENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 bg-slate-950/50 p-6 sm:p-8 rounded-2xl border border-slate-800/60 backdrop-blur-md">
            <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-[0.2em] font-light">
              <Feather className="w-4 h-4 stroke-[1.5]" />
              <span>Ancient Roots</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-light text-slate-100 leading-snug">
              Connection, Emotion & <br />
              <span className="text-amber-300 italic">The Power to Touch Hearts</span>
            </h2>

            <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              <p>
                In ancient India, when Lord Krishna guided people with wisdom, there was one name that represented love, devotion, creativity, and purpose—<strong className="font-normal text-amber-200">Radhe</strong>.
              </p>
              <p>
                People often say <em className="text-slate-100">“Radhe Krishna”</em> before they say Krishna’s name. Why? Because Radha symbolizes connection, emotion, and the power to touch hearts. It is a reminder that influence is not built by power alone—it is built through trust, relationships, and meaningful communication.
              </p>
              <p className="text-slate-300 border-l-2 border-amber-400 pl-4 py-1 italic bg-amber-500/5 rounded-r">
                That philosophy became the inspiration behind Radhe Studios.
              </p>
            </div>
          </div>

          {/* Feature Card Box */}
          <div className="lg:col-span-6">
            <div className="relative p-8 rounded-2xl bg-slate-950/75 border border-amber-500/20 backdrop-blur-xl shadow-2xl space-y-6 hover:border-amber-500/40 transition-all duration-300">
              <Quote className="w-10 h-10 text-amber-400/30" />
              
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-amber-200">The Modern Storytellers</h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Just as ancient storytellers carried messages from village to village, today we use design, technology, digital marketing, branding, websites, videos, and social media to carry your story to the world.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2.5 text-xs text-slate-300 font-light">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                  <span>Build Identities</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300 font-light">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                  <span>Shape Perceptions</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300 font-light">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                  <span>Unforgettable Brands</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300 font-light">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                  <span>Create Legacy</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 2: THE CREATIVE WORKSHOP */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 bg-slate-950/60 p-6 rounded-2xl border border-slate-800/50 backdrop-blur-md">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs uppercase tracking-[0.2em] font-light">
              <Compass className="w-4 h-4 stroke-[1.5]" />
              <span>What “Studios” Means To Us</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-slate-100">
              Our Creative Workshop
            </h2>
            <p className="text-slate-300 text-sm font-light">
              A place where ideas are crafted, brands are born, campaigns are planned, and innovation comes to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-lg hover:border-amber-400/40 hover:bg-slate-950/85 transition-all duration-300 space-y-4 group">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:bg-amber-500/25 transition-colors">
                <HeartHandshake className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-serif text-amber-200">Built on Trust</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                We believe influence is not built by power alone—it is cultivated through deep relationships, authentic communication, and enduring trust.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-lg hover:border-amber-400/40 hover:bg-slate-950/85 transition-all duration-300 space-y-4 group">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:bg-amber-500/25 transition-colors">
                <Layers className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-serif text-amber-200">Holistic Ecosystem</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                From websites and videos to social media campaigns, we don't just execute marketing—we build cohesive brand ecosystems.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-lg hover:border-amber-400/40 hover:bg-slate-950/85 transition-all duration-300 space-y-4 group">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:bg-amber-500/25 transition-colors">
                <Globe className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-serif text-amber-200">Universal Mission</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Whether you're a growing business, startup, corporate entity, or public leader—our goal is transforming ideas into influence.
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 3: THE CORE PHILOSOPHY BANNER */}
        <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12 bg-slate-950/80 backdrop-blur-xl border border-amber-500/30 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-[0.25em] font-light">
            <Flame className="w-4 h-4 text-amber-400 stroke-[1.5]" />
            <span>Our Philosophy</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-3xl font-serif text-slate-100 font-light tracking-wide">
              Stories create <span className="text-amber-300 italic">trust</span>.
            </h3>
            <h3 className="text-xl sm:text-3xl font-serif text-slate-100 font-light tracking-wide">
              Trust creates <span className="text-amber-300 italic">brands</span>.
            </h3>
            <h3 className="text-xl sm:text-3xl font-serif text-slate-100 font-light tracking-wide">
              Brands create <span className="text-amber-300 italic">legacy</span>.
            </h3>
          </div>
        </div>

        {/* SECTION 4: THE ULTIMATE QUESTION & CTA */}
        <div className="text-center max-w-3xl mx-auto space-y-8 pt-6">
          <div className="space-y-4 bg-slate-950/60 p-8 rounded-2xl border border-slate-800/60 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-light">
              Every Project Begins With One Question
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-100 italic leading-tight">
              “What story should the world remember about your brand?”
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto pt-2">
              Welcome to Radhe Studios—where ancient inspiration meets modern creativity, and every brand begins its journey with a story.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TellYourStoryBtn/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page