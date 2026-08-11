import React from 'react';
import { HeroVisual } from './HeroVisual';
import { ArrowRight, Terminal, Sparkles, ShieldAlert, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onAboutMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onAboutMe }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#242830]" id="hero-section">
      {/* Background Ambient Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Technical Identity & Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-[#F5F5F5] leading-none">
                SAYEM
              </h1>
              <div className="text-xl sm:text-2xl font-mono text-emerald-400 font-semibold tracking-wide flex items-center gap-2">
                <span>Founder.</span>
                <span className="text-[#242830]">•</span>
                <span>Builder.</span>
                <span className="text-[#242830]">•</span>
                <span>Systems Thinker.</span>
              </div>
            </div>

            {/* Primary Statement */}
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#F5F5F5] leading-snug tracking-tight max-w-2xl">
              Building at the intersection of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                AI, Automation, Financial Intelligence
              </span>{' '}
              and Digital Systems.
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base font-sans text-[#9299A5] leading-relaxed max-w-xl">
              I research complex problems, build practical systems, and turn ideas into technology, tools, digital products, and long-term ventures.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWork}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#08090B] font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20"
                id="hero-explore-work-btn"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onAboutMe}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#101216] hover:bg-[#14171C] border border-[#242830] hover:border-emerald-500/40 text-[#F5F5F5] font-mono text-xs tracking-wider uppercase transition-all"
                id="hero-about-me-btn"
              >
                <span>About Me →</span>
              </button>
            </div>

            {/* Technical Metadata Bar */}
            <div className="pt-4 border-t border-[#242830]/80 flex flex-wrap items-center gap-2 text-[10px] font-mono text-[#9299A5]">
              <span className="text-emerald-400 font-bold">TAGS:</span>
              {['AI', 'AUTOMATION', 'FINTECH', 'QUANT', 'RESEARCH', 'SYSTEMS', 'VENTURES'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-[#101216] border border-[#242830] hover:border-emerald-500/30 text-[#9299A5] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Abstract Systems Canvas Interactive Visualization */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
