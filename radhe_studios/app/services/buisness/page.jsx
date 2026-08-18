    'use client'


import React from 'react';

const page = () => {
  const services = [
    {
      id: "01",
      tag: "THE GROWTH ENGINE",
      title: "Why marketing is the oxygen of modern business",
      description:
        "A great product without marketing is like a masterpiece kept in a dark room. Marketing isn't just advertising—it is how your business communicates value, acquires customers, builds cash flow, and creates long-term enterprise value.",
      points: [
        "Transforms passive products into high-demand solutions",
        "Establishes predictable pipeline and reliable customer acquisition",
        "Defends your market share against aggressive competitors",
        "Turns one-time buyers into loyal brand advocates"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Business strategy team analyzing growth metrics in a modern boardroom",
      reverse: false // Left Text | Right Image
    },
    {
      id: "02",
      tag: "DIAGNOSTIC & AUDIT",
      title: "Finding what is lacking: The Business Gap Audit",
      description:
        "Most businesses don't have a product problem—they have a gap problem. We perform a deep-dive diagnosis to pinpoint exactly where your current business model is losing momentum or leaking revenue.",
      points: [
        "Messaging & Positioning Gaps: Aligning your story with buyer desires",
        "Funnel Bottlenecks: Identifying where potential leads drop off",
        "Channel Misalignment: Focusing only on platforms that yield high ROI",
        "Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV) optimization"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Business strategic audit and data analysis session",
      reverse: true // Left Image | Right Text
    },
    {
      id: "03",
      tag: "STRATEGY & ARCHITECTURE",
      title: "Custom blueprints tailored to your market position",
      description:
        "Generic tactics yield generic results. We design custom business growth blueprints that map out your exact messaging, channel strategy, competitive advantages, and conversion mechanics.",
      points: [
        "Comprehensive brand positioning and value proposition design",
        "Multi-channel marketing roadmaps (Paid, Organic, Direct)",
        "Offer framing & pricing strategy restructuring",
        "KPI mapping: defining clear, measurable milestones for success"
      ],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Strategic planning and business blueprint wireframing",
      reverse: false // Left Text | Right Image
    },
    {
      id: "04",
      tag: "FULL-SERVICE MANAGEMENT",
      title: "How we manage & execute your business marketing",
      description:
        "Strategy is useless without relentless execution. Radhe Studios acts as your dedicated growth engine—handling campaigns, creative assets, digital channels, and continuous optimization so you can focus on leadership.",
      points: [
        "End-to-end management across web, ads, design, and content",
        "Weekly reporting and performance iteration cycles",
        "Agile campaign adjustments based on live revenue feedback",
        "Seamless integration with your internal sales or ops team"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Radhe Studios team actively executing business growth strategies",
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
            <span>Radhe Studios // Business Marketing & Strategy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-slate-100 leading-[1.15]">
            Transform your business with <br />
            <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent font-normal">
              strategic clarity & execution.
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            We diagnose what is holding your business back, build a custom growth strategy, and execute full-funnel marketing that turns vision into measurable market influence.
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">GAP AUDITS</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">GROWTH BLUEPRINTS</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">FULL MANAGEMENT</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">REVENUE OPTIMIZATION</span>
          </div>
        </div>

        {/* Business Impact Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/60 pt-8">
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-100">100%</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Custom Diagnostic Audit</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-amber-400">360°</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Marketing Management</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-100">2.5x</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Avg Pipeline Velocity</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-100">0%</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Generic One-Size Tactics</div>
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
            // FIND WHAT YOUR BUSINESS IS LACKING
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-slate-100 tracking-tight max-w-xl mx-auto">
            Ready to uncover your growth bottlenecks?
          </h2>
          
          <p className="text-slate-400 text-sm max-w-md mx-auto font-light">
            Book a 1-on-1 Business Diagnostic Session with Radhe Studios. We’ll analyze your brand, marketing channels, and strategy to build your custom growth roadmap.
          </p>

          <div className="pt-2">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-medium text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-lg shadow-amber-500/10">
              Request Business Audit
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
} 
  export default page