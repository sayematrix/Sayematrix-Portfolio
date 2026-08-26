import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { User, MapPin, Building2, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onReadFullProfile: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onReadFullProfile }) => {
  return (
    <section className="py-20 bg-[#041618] border-b border-[#0E353C] relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#061D20] border border-[#0E353C]">
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">
              IDENTITY & FOUNDER PROFILE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F8FAFC] tracking-tight mt-2 uppercase">
            WHO IS <span className="text-emerald-400">SAYEM?</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Professional Narrative */}
          <div className="lg:col-span-7 bg-[#061D20] p-6 sm:p-8 rounded-xl border border-[#0E353C]">
            <div className="space-y-4">
              <h3 className="text-xl font-sans font-bold text-[#F8FAFC] leading-snug">
                PROFESSIONAL SUMMARY
              </h3>
              
              <div className="space-y-3 text-sm font-sans text-[#94A3B8] leading-relaxed">
                <p>
                  A multidisciplinary builder focused on quantitative finance, algorithmic trading, financial intelligence, AI, automation, and financial technology.
                </p>
                <p>
                  Combines quantitative analysis, market intelligence, data, AI, automation, and systems engineering to research, design, and build intelligent financial systems, trading technologies, and digital products.
                </p>
                <p>
                  Through <strong className="text-[#F8FAFC]">SANR Corporation Limited</strong> and the <strong className="text-[#F8FAFC]">SAYEMATRIX</strong> ecosystem, conducts multidisciplinary research and develops proprietary systems, tools, and digital infrastructure for long-term technological and venture development.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#0E353C] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#94A3B8]">
                PRIMARY BUSINESS: <span className="text-emerald-400 font-bold">SANR CORP</span>
              </div>
              <button
                onClick={onReadFullProfile}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase hover:bg-emerald-500/20 transition-all cursor-pointer"
                id="about-full-profile-btn"
              >
                <span>Read Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Identity Information Index Card */}
          <div className="lg:col-span-5 bg-[#031214] p-6 sm:p-8 rounded-xl border border-[#0E353C] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#0E353C]">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                CORE ROLES &amp; TITLES
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded bg-[#061D20] border border-[#0E353C]">
                <span className="text-[#94A3B8] block text-[10px] uppercase mb-0.5">FOUNDER</span>
                <span className="text-[#F8FAFC] font-bold text-sm">SANR Corporation Limited</span>
              </div>

              <div className="p-3 rounded bg-[#061D20] border border-[#0E353C]">
                <span className="text-[#94A3B8] block text-[10px] uppercase mb-0.5">CREATOR &amp; SYSTEMS ARCHITECT</span>
                <span className="text-emerald-400 font-bold text-sm">SAYEMATRIX</span>
              </div>

              <div className="p-3 rounded bg-[#061D20] border border-[#0E353C]">
                <span className="text-[#94A3B8] block text-[10px] uppercase mb-0.5">CORE DISCIPLINE</span>
                <span className="text-[#F8FAFC] font-bold text-xs">Quant Finance &amp; Algorithmic Trading</span>
              </div>

              <div className="p-3 rounded bg-[#061D20] border border-[#0E353C]">
                <span className="text-[#94A3B8] block text-[10px] uppercase mb-0.5">TECHNOLOGY &amp; SYSTEMS</span>
                <span className="text-[#94A3B8] text-xs">AI • Automation • Financial Technology</span>
              </div>

              <div className="p-3 rounded bg-[#061D20] border border-[#0E353C]">
                <span className="text-[#94A3B8] block text-[10px] uppercase mb-0.5">ANALYTICS &amp; RESEARCH</span>
                <span className="text-[#94A3B8] text-xs">Quantitative Analysis • Market Systems • Research</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded bg-[#061D20] border border-[#0E353C]">
                <span className="text-[#94A3B8] text-[10px] uppercase font-bold">LOCATION:</span>
                <span className="text-[#F8FAFC] font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
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
