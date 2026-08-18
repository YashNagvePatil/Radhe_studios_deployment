    'use client'

import React from 'react';

const   page = () => {
  const services = [
    {
      id: "01",
      tag: "THE NEW ERA OF POLITICS",
      title: "Public Relations: The core engine of modern political power",
      description:
        "Elections are no longer won by speeches alone—they are won by perception, framing, and continuous narrative control. Modern political PR defines who a leader is before the opponent can define them, building emotional resonance across every media touchpoint.",
      points: [
        "Proactive crisis control and narrative defense strategies",
        "Strategic media placements across digital, press, and broadcast channels",
        "Leader persona building and authenticity positioning",
        "Targeted messaging engineered for diverse voter demographics"
      ],
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Political leader speaking at a major media press conference and rally",
      reverse: false // Left Text | Right Image
    },
    {
      id: "02",
      tag: "RALLIES & CAMPAIGN ORCHESTRATION",
      title: "Transforming ground rallies into high-impact digital events",
      description:
        "A rally is no longer just for the crowd in front of the stage—it's raw footage for millions of voters online. We capture high-energy moments live, turn ground enthusiasm into viral content, and ensure every event broadcasts maximum strength.",
      points: [
        "Multi-camera live streaming and real-time social broadcasting",
        "High-definition ground photography and drone aerial coverage",
        "Rapid-turnaround speech highlights released within minutes of event end",
        "Crowd sentiment amplification and on-ground voter engagement capture"
      ],
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Massive political rally with flags and vibrant crowd energy",
      reverse: true // Left Image | Right Text
    },
    {
      id: "03",
      tag: "SHORT-FORM DOMINANCE",
      title: "Reels, Shorts & Video: Winning the battle for attention",
      description:
        "The modern voter consumes politics in 15 to 60-second clips. We produce high-impact Reels, cinematic shorts, and punchy soundbites that capture attention, explain policy simply, and build relatable candidate appeal.",
      points: [
        "Trending short-form video formats designed for Instagram, YouTube & WhatsApp",
        "Behind-the-scenes candid clips that humanize political leaders",
        "Aggressive issue-based short videos dissecting key campaign promises",
        "Localization of video content across regional languages and accents"
      ],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Cinematic video camera rig capturing political speech clips",
      reverse: false // Left Text | Right Image
    },
    {
      id: "04",
      tag: "MEASUREMENT & SENTIMENT ANALYSIS",
      title: "Data-driven campaign metrics: Tracking perception in real time",
      description:
        "We don't rely on guesswork. Using advanced digital tracking, sentiment monitoring, and campaign metrics, we measure public opinion shifts daily and pivot PR strategies to keep your campaign ahead of the news cycle.",
      points: [
        "Real-time social media sentiment & voter reaction tracking",
        "Campaign reach, shareability, and viral coeffecient analytics",
        "Opponent narrative tracking and automated counter-PR response",
        "Constituency-level message testing and optimization"
      ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Political analytics room tracking digital campaign metrics and voter sentiment",
      reverse: true // Left Image | Right Text
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500/20 selection:text-amber-300 overflow-hidden">
      
      {/* Brand Background Gradient Overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Accent Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent w-full" />

      {/* Hero Header */}
      <header className="relative border-b border-slate-800/60 px-6 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 font-mono text-[11px] text-amber-300 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
            <span>Radhe Studios // Political PR & Campaign Strategy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-slate-100 leading-[1.15]">
            Command the narrative in the <br />
            <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent font-normal">
              new digital era of political campaigns.
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            From high-octane rally coverage to viral Reels and real-time sentiment PR—we equip candidates and parties with full-spectrum media strategy to dominate every screen and constituency.
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">POLITICAL PR</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">RALLY MEDIA</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">VIRAL REELS & VIDEOS</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">VOTER SENTIMENT METRICS</span>
          </div>
        </div>

        {/* Campaign Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/60 pt-8">
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-100">24/7</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Media & PR Readiness</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-amber-400">10M+</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Short-Form Video Reach</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-100">&lt;15m</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Rally Clip Turnaround</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-100">100%</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Data Sentiment Tracking</div>
          </div>
        </div>
      </header>

      {/* Main Alternating Sections */}
      <main className="relative max-w-7xl mx-auto px-6 py-16 space-y-24">
        {services.map((item) => (
          <section
            key={item.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pb-20 border-b border-slate-900 ${
              item.reverse ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Text Content Block */}
            <div
              className={`space-y-6 lg:col-span-6 ${
                item.reverse ? "lg:col-start-7" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-amber-400 font-medium">
                  {item.id}
                </span>
                <span className="text-slate-700">/</span>
                <span className="font-mono text-[11px] text-slate-400 tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-light text-slate-100 tracking-tight leading-snug">
                {item.title}
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                {item.description}
              </p>

              <ul className="space-y-2.5 pt-2 border-t border-slate-900">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-light">
                    <span className="text-amber-500/80 font-mono select-none">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Glowing Image Block */}
            <div
              className={`lg:col-span-6 ${
                item.reverse ? "lg:col-start-1" : ""
              }`}
            >
              <div className="relative group">
                
                {/* 🌟 Warm Amber Ambient Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-amber-600/20 to-amber-400/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 pointer-events-none" />

                {/* Main Frame */}
                <div className="relative p-1.5 bg-slate-900/90 border border-slate-800/90 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-lg bg-slate-950 aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover object-center grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </main>

      {/* CTA Footer Section */}
      <footer className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-amber-500/30 text-center space-y-6 backdrop-blur-md shadow-2xl overflow-hidden">
          
          <div className="absolute inset-0 bg-amber-500/5 blur-2xl pointer-events-none" />

          <div className="inline-block font-mono text-xs text-amber-400 tracking-wider uppercase">
            // PREPARE YOUR CAMPAIGN FOR VICTORY
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-slate-100 tracking-tight max-w-xl mx-auto">
            Ready to lead the next era of political PR?
          </h2>
          
          <p className="text-slate-400 text-sm max-w-md mx-auto font-light">
            Consult with Radhe Studios to design a custom media, video production, and sentiment PR strategy for your upcoming campaign or political office.
          </p>

          <div className="pt-2">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-medium text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-lg shadow-amber-500/10">
              Schedule Confidential PR Briefing
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

  export default page