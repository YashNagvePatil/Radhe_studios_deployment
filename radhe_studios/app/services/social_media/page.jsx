   "use client"

import React from 'react';

const  page = () => {
  const services = [
    {
      id: "01",
      tag: "MARKET POSITIONING",
      title: "Why social presence dictates consumer trust",
      description:
        "Social platforms are no longer optional marketing outlets—they are your brand's primary trust protocol. Modern buyers validate every purchase by checking social proof long before converting.",
      points: [
        "Establishes immediate market legitimacy and brand authority",
        "Direct feedback loops with your core target demographic",
        "Higher organic conversion rates across all acquisition channels",
        "Controls your brand's narrative in a crowded marketplace"
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Social media network architecture and engagement metrics",
      reverse: false // Left Text | Right Image
    },
    {
      id: "02",
      tag: "PERFORMANCE ADS & FUNNELS",
      title: "Precision ad strategies engineered for measurable ROAS",
      description:
        "Boosting posts wastes capital. We build targeted ad funnels across Meta, TikTok, and Google Ads structured to systematically turn cold traffic into active customers.",
      points: [
        "Cold acquisition funnels targeting high-intent lookalikes",
        "Dynamic retargeting sequences to recover abandoned intent",
        "Rigorous creative testing: hooks, angles, and offer framing",
        "Real-time ROAS optimization and multi-touch attribution"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Performance advertising analytics and conversion funnel data",
      reverse: true // Left Image | Right Text
    },
    {
      id: "03",
      tag: "CREATIVE PRODUCTION",
      title: "Scroll-stopping ad creatives and short-form media",
      description:
        "High-performing ad strategies rely entirely on strong creative. We produce short-form video, studio visuals, and authentic creator content designed to capture attention in under 2 seconds.",
      points: [
        "Short-form video engineered for Reels, TikTok & Shorts",
        "User-Generated Content (UGC) creator pipeline management",
        "Direct-response static graphics and dynamic ad variations",
        "Platform-native hooks built for algorithmic reach"
      ],
      image: "https://images.unsplash.com/photo-1542744094-3a3121699499?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Digital creative studio working on video production assets",
      reverse: false // Left Text | Right Image
    },
    {
      id: "04",
      tag: "BRAND SCALING",
      title: "Predictable expansion from test budgets to market leadership",
      description:
        "We avoid vanity metrics like raw likes or impressions. Campaigns focus strictly on pipeline expansion, lower customer acquisition costs (CAC), and sustainable growth.",
      points: [
        "Cross-platform budget allocation and real-time pacing",
        "Systematic reduction of Customer Acquisition Cost (CAC)",
        "Clear attribution modeling for complete visibility into ROI",
        "Scaling frameworks: expanding top creatives without ad fatigue"
      ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Strategic growth overview and cross-channel campaign tracking",
      reverse: true // Left Image | Right Text
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500/20 selection:text-amber-300 overflow-hidden">
      
      {/* Brand Background Gradient Overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Subtle Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Accent Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent w-full" />

      {/* Hero Header */}
      <header className="relative border-b border-slate-800/60 px-6 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 font-mono text-[11px] text-amber-300 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
            <span>Radhe Studios // Social Media Growth</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-slate-100 leading-[1.15]">
            Turn social media into a <br />
            <span className="italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent font-normal">
              predictable channel
            </span> for brand legacy.
          </h1>

          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Combining ancient storytelling philosophy with data-backed ad funnels, scroll-stopping visual assets, and precision targeting engineered for scalable revenue.
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">META ADS</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">TIKTOK CREATIVE</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">UGC PIPELINE</span>
            <span className="px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800/80">ATTRIBUTION MODELING</span>
          </div>
        </div>

        {/* Brand Metrics Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/60 pt-8">
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-100">4.9B+</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Global Audience Reach</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-amber-400">3.8x</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Average Client ROAS</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-100">83%</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Brand Discovery Rate</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-100">&lt;2s</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Hook Attention Window</div>
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
                
                {/* 🌟 Warm Amber Glow Behind Image */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-amber-600/20 to-amber-400/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 pointer-events-none" />

                {/* Main Image Frame */}
                <div className="relative p-1.5 bg-slate-900/90 border border-slate-800/90 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-lg bg-slate-950 aspect-[16/10]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover object-center grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                      loading="lazy"
                    />
                    {/* Subtle Overlay Gradient */}
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
          
          {/* Subtle Ambient Backdrop inside CTA */}
          <div className="absolute inset-0 bg-amber-500/5 blur-2xl pointer-events-none" />

          <div className="inline-block font-mono text-xs text-amber-400 tracking-wider uppercase">
            // NEXT STEPS
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-slate-100 tracking-tight max-w-xl mx-auto">
            Ready to give your brand a story worth remembering?
          </h2>
          
          <p className="text-slate-400 text-sm max-w-md mx-auto font-light">
            Book a consultation to review your current social ad setup and establish a high-converting roadmap.
          </p>

          <div className="pt-2">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-medium text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-lg shadow-amber-500/10">
              Schedule Growth Audit
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

  export default page 