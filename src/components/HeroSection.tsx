import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onAboutMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onAboutMe }) => {
  return (
    <section 
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#0E353C] bg-[#041618]" 
      id="hero-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-5xl space-y-12 md:space-y-16">
          
          {/* 1. SAYEM & Primary Identity Statement */}
          <div className="space-y-6">
            <h1 
              className="text-7xl sm:text-9xl md:text-[10rem] lg:text-[11.5rem] font-bold font-wordmark tracking-tight text-[#F8FAFC] leading-none uppercase select-none cursor-default transition-colors duration-300 hover:text-emerald-400" 
              id="hero-sayem-heading"
            >
              SAYEM
            </h1>
            
            {/* 2. Primary Identity Statement */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-sans font-medium text-[#F8FAFC] tracking-wide flex items-center flex-wrap gap-x-3 gap-y-2">
              <span className="cursor-default transition-colors duration-200 hover:text-emerald-400">Entrepreneur</span>
              <span className="text-emerald-400 font-light">•</span>
              <span className="cursor-default transition-colors duration-200 hover:text-emerald-400">Investor</span>
              <span className="text-emerald-400 font-light">•</span>
              <span className="cursor-default transition-colors duration-200 hover:text-emerald-400">Developer</span>
              <span className="text-emerald-400 font-light">•</span>
              <span className="cursor-default transition-colors duration-200 hover:text-emerald-400">OS Builder</span>
              <span className="text-emerald-400 font-light">•</span>
              <span className="cursor-default transition-colors duration-200 hover:text-emerald-400">Creator</span>
            </p>
          </div>

          {/* Asymmetric Typography Grid for Credentials & Disciplines */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-8 border-t border-[#0E353C]">
            
            {/* Left Column: Founder & Creator Identities */}
            <div className="md:col-span-6 space-y-6">
              
              {/* 3. Founder Identity */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] block font-semibold">
                  FOUNDER
                </span>
                <p className="text-xl sm:text-2xl font-sans font-bold text-[#F8FAFC] tracking-tight">
                  SANR Corporation Limited
                </p>
              </div>

              {/* 4. Creator Identity */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] block font-semibold">
                  CREATOR &amp; BUILDER
                </span>
                <p className="text-xl sm:text-2xl font-sans font-bold text-emerald-400 tracking-tight">
                  SAYEMATRIX
                </p>
              </div>

            </div>

            {/* Right Column: Professional Disciplines */}
            <div className="md:col-span-6 space-y-6">
              
              {/* 5. Primary Professional Focus */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] block font-semibold">
                  PRIMARY FOCUS
                </span>
                <p className="text-base sm:text-lg font-mono font-semibold text-[#F8FAFC] leading-relaxed">
                  AI <span className="text-emerald-400 font-bold">•</span> Automation <span className="text-emerald-400 font-bold">•</span> FinTech <span className="text-emerald-400 font-bold">•</span> Financial Intelligence
                </p>
              </div>

              {/* 6. Supporting Expertise */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] block font-semibold">
                  SUPPORTING EXPERTISE
                </span>
                <p className="text-sm sm:text-base font-mono text-[#94A3B8] leading-relaxed">
                  Quantitative Analysis <span className="text-[#154D56]">•</span> Digital Systems <span className="text-[#154D56]">•</span> Research
                </p>
              </div>

            </div>

          </div>

          {/* 7. CTA Buttons */}
          <div className="pt-4 flex items-center gap-4 flex-wrap">
            <button
              onClick={onExploreWork}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#041618] font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer"
              id="hero-explore-work-btn"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onAboutMe}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#061D20] hover:bg-[#0A2B30] border border-[#0E353C] hover:border-emerald-500/40 text-[#F8FAFC] font-mono font-bold text-xs tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
              id="hero-about-me-btn"
            >
              <span>About Me</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
