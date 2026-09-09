import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { User, MapPin, Building2, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onReadFullProfile: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onReadFullProfile }) => {
  return (
    <section className="py-20 bg-[#0A0D10] border-b border-[#1B2127] relative scroll-mt-20 sm:scroll-mt-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1217] border border-[#1B2127]">
            <User className="w-3.5 h-3.5 text-[#42B8E8]" />
            <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest">
              IDENTITY &amp; FOUNDER PROFILE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F7FA] tracking-tight mt-2 uppercase">
            WHO IS <span className="text-[#42B8E8]">SAYEM?</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Professional Narrative */}
          <div className="lg:col-span-7 bg-[#0E1217] p-6 sm:p-8 rounded-lg border border-[#1B2127]">
            <div className="space-y-4">
              <h3 className="text-xl font-sans font-bold text-[#F5F7FA] leading-snug">
                PROFESSIONAL SUMMARY
              </h3>
              
              <div className="space-y-3 text-sm font-sans text-[#A7B0BA] leading-relaxed">
                <p>
                  A multidisciplinary builder focused on quantitative finance, algorithmic trading, financial intelligence, AI, automation, and financial technology.
                </p>
                <p>
                  Combines quantitative analysis, market intelligence, data, AI, automation, and systems architecture to research, design, and build intelligent financial systems, trading technologies, and digital products.
                </p>
                <p>
                  Through <strong className="text-[#F5F7FA]">QYNTIQ</strong> and the <strong className="text-[#F5F7FA]">SAYEMATRIX</strong> ecosystem, conducts multidisciplinary research and develops proprietary systems, tools, and digital infrastructure for long-term technological and venture development.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1B2127] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#A7B0BA]">
                PRIMARY BUSINESS: <span className="text-[#42B8E8] font-bold">QYNTIQ</span>
              </div>
              <button
                onClick={onReadFullProfile}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#2D9CDB]/10 border border-[#2D9CDB]/30 text-[#42B8E8] font-mono text-xs font-bold uppercase hover:bg-[#2D9CDB]/20 transition-all cursor-pointer"
                id="about-full-profile-btn"
              >
                <span>Read Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Identity Information Index Card */}
          <div className="lg:col-span-5 bg-[#050607] p-6 sm:p-8 rounded-lg border border-[#1B2127] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#1B2127]">
              <span className="text-xs font-mono text-[#42B8E8] font-bold uppercase tracking-wider">
                CORE ROLES &amp; TITLES
              </span>
              <ShieldCheck className="w-4 h-4 text-[#42B8E8]" />
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-0.5">FOUNDER</span>
                <span className="text-[#F5F7FA] font-bold text-sm">QYNTIQ</span>
              </div>

              <div className="p-3 rounded bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-0.5">CREATOR &amp; SYSTEMS ARCHITECT</span>
                <span className="text-[#42B8E8] font-bold text-sm">SAYEMATRIX</span>
              </div>

              <div className="p-3 rounded bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-0.5">CORE DISCIPLINE</span>
                <span className="text-[#F5F7FA] font-bold text-xs">Quant Finance &amp; Algorithmic Trading</span>
              </div>

              <div className="p-3 rounded bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-0.5">TECHNOLOGY &amp; SYSTEMS</span>
                <span className="text-[#A7B0BA] text-xs">AI • Automation • Financial Technology</span>
              </div>

              <div className="p-3 rounded bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-0.5">ANALYTICS &amp; RESEARCH</span>
                <span className="text-[#A7B0BA] text-xs">Quantitative Analysis • Market Systems • Research</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] text-[10px] uppercase font-bold">LOCATION:</span>
                <span className="text-[#F5F7FA] font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#42B8E8]" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
