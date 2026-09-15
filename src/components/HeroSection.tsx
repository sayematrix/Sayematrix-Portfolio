import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroBg from '../assets/images/hero_quant_command_center_1787802507626.jpg';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onAboutMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects, onAboutMe }) => {
  return (
    <section 
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 border-b border-[#1B2127] bg-[#050607] overflow-hidden" 
      id="hero-section"
    >
      {/* Cinematic Institutional Command-Center Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={heroBg}
          alt="Quantitative Finance and AI Command Center"
          className="w-full h-full object-cover object-right md:object-center opacity-45 scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Directional Gradient Overlays for Extreme Left Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-[#050607]/85 to-[#050607]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-[#050607]/60" />
        <div className="absolute inset-0 bg-grid-technical opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-5xl space-y-12 md:space-y-16">
          
          <div className="space-y-6">

            <h1 
              className="text-7xl sm:text-9xl md:text-[10rem] lg:text-[11.5rem] font-bold font-wordmark tracking-tight text-[#F5F7FA] leading-none uppercase select-none cursor-default transition-colors duration-300 hover:text-[#42B8E8]" 
              id="hero-sayem-heading"
            >
              SAYEM
            </h1>
            
            {/* 2. Primary Identity Statement */}
            <p className="text-xl sm:text-2xl md:text-[1.35rem] lg:text-[1.75rem] xl:text-[2rem] font-sans font-medium text-[#F5F7FA] tracking-wide flex items-center flex-wrap md:flex-nowrap md:whitespace-nowrap gap-x-2 sm:gap-x-2.5 md:gap-x-2 lg:gap-x-3 gap-y-2">
              <span className="cursor-default transition-colors duration-200 hover:text-[#42B8E8]">Entrepreneur</span>
              <span className="text-[#42B8E8] font-light shrink-0">•</span>
              <span className="cursor-default transition-colors duration-200 hover:text-[#42B8E8]">Founder</span>
              <span className="text-[#42B8E8] font-light shrink-0">•</span>
              <span className="cursor-default transition-colors duration-200 hover:text-[#42B8E8]">Quant</span>
              <span className="text-[#42B8E8] font-light shrink-0">•</span>
              <span className="cursor-default transition-colors duration-200 hover:text-[#42B8E8]">Developer</span>
              <span className="text-[#42B8E8] font-light shrink-0">•</span>
              <span className="cursor-default transition-colors duration-200 hover:text-[#42B8E8]">Systems Builder</span>
              <span className="text-[#42B8E8] font-light shrink-0">•</span>
              <span className="cursor-default transition-colors duration-200 hover:text-[#42B8E8]">Creator</span>
            </p>
          </div>

          {/* Asymmetric Typography Grid for Credentials & Disciplines */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-8 border-t border-[#1B2127]">
            
            {/* Left Column: Founder, Creator & Core Identity */}
            <div className="md:col-span-6 space-y-6">
              
              {/* 3. Founder Identity */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#6F7882] block font-semibold">
                  FOUNDER
                </span>
                <a
                  href="https://www.qyntiq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xl sm:text-2xl font-sans font-bold text-[#F5F7FA] tracking-tight hover:text-[#42B8E8] transition-colors"
                  id="hero-qyntiq-link"
                >
                  QYNTIQ
                </a>
              </div>

              {/* 4. Creator Identity */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#6F7882] block font-semibold">
                  CREATOR &amp; BUILDER
                </span>
                <p className="text-xl sm:text-2xl font-sans font-bold text-[#42B8E8] tracking-tight">
                  SAYEMATRIX
                </p>
              </div>

              {/* 5. Core Identity */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#42B8E8] block font-semibold">
                  CORE IDENTITY
                </span>
                <p className="text-lg sm:text-xl font-mono font-bold text-[#F5F7FA] tracking-tight">
                  Quant Finance &amp; Algorithmic Trading
                </p>
              </div>

            </div>

            {/* Right Column: Professional Disciplines */}
            <div className="md:col-span-6 space-y-6">
              
              {/* 6. Primary Focus */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#6F7882] block font-semibold">
                  PRIMARY FOCUS
                </span>
                <p className="text-base sm:text-lg font-mono font-semibold text-[#F5F7FA] leading-relaxed">
                  Financial Intelligence <span className="text-[#42B8E8] font-bold">•</span> AI <span className="text-[#42B8E8] font-bold">•</span> Automation <span className="text-[#42B8E8] font-bold">•</span> FinTech <span className="text-[#42B8E8] font-bold">•</span> Data &amp; Analytics <span className="text-[#42B8E8] font-bold">•</span> Product Development
                </p>
              </div>

              {/* 7. Supporting Expertise */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#6F7882] block font-semibold">
                  SUPPORTING EXPERTISE
                </span>
                <p className="text-sm sm:text-base font-mono text-[#A7B0BA] leading-relaxed">
                  Quantitative Analysis <span className="text-[#42B8E8]/50">•</span> Digital Systems <span className="text-[#42B8E8]/50">•</span> Research <span className="text-[#42B8E8]/50">•</span> Software &amp; Systems Architecture
                </p>
              </div>

            </div>

          </div>

          {/* 7. CTA Buttons */}
          <div className="pt-4 flex items-center gap-4 flex-wrap">
            <button
              onClick={onExploreProjects}
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-md bg-[#2D9CDB] hover:bg-[#42B8E8] text-[#050607] font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#2D9CDB]/15 active:scale-95 cursor-pointer"
              id="hero-explore-projects-btn"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onAboutMe}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-[#0E1217]/90 hover:bg-[#151A20] border border-[#1B2127] hover:border-[#2D9CDB]/40 text-[#F5F7FA] font-mono font-bold text-xs tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
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
