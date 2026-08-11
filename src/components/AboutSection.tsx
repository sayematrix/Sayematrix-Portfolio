import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { User, MapPin, Building2, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onReadFullProfile: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onReadFullProfile }) => {
  return (
    <section className="py-20 bg-[#101216] border-b border-[#242830] relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14171C] border border-[#242830]">
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest">
              IDENTITY & FOUNDER PROFILE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F5F5] tracking-tight mt-2 uppercase">
            WHO IS <span className="text-emerald-400">SAYEM?</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Professional Narrative */}
          <div className="lg:col-span-7 bg-[#14171C] p-6 sm:p-8 rounded-xl border border-[#242830] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-sans font-bold text-[#F5F5F5] leading-snug">
                Building at the intersection of AI, Automation, Financial Intelligence, and Financial Markets.
              </h3>
              
              <div className="space-y-3 text-sm font-sans text-[#9299A5] leading-relaxed">
                <p>
                  SAYEM is a founder, builder, systems thinker, and quantitative researcher. He focuses on converting complex multi-domain knowledge into practical technology, automated software systems, and long-term business ventures.
                </p>
                <p>
                  As the founder of <strong className="text-[#F5F5F5]">SANR Corporation Limited</strong> and creator of the <strong className="text-[#F5F5F5]">SAYEMATRIX</strong> digital ecosystem, he conducts multi-disciplinary research to engineer high-throughput tools for business efficiency, quantitative finance, and digital operations.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#242830] flex items-center justify-between">
              <div className="text-xs font-mono text-[#9299A5]">
                PRIMARY BUSINESS: <span className="text-emerald-400 font-bold">SANR CORP</span>
              </div>
              <button
                onClick={onReadFullProfile}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase hover:bg-emerald-500/20 transition-all"
                id="about-full-profile-btn"
              >
                <span>Read Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Identity Information Index Card */}
          <div className="lg:col-span-5 bg-[#08090B] p-6 sm:p-8 rounded-xl border border-[#242830] space-y-5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#242830]">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                TECHNICAL PROFILE INDEX
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-3 rounded bg-[#101216] border border-[#242830]">
                <span className="text-[#9299A5] block text-[10px] uppercase mb-0.5">FOUNDER</span>
                <span className="text-[#F5F5F5] font-bold text-sm">SANR Corporation Limited</span>
              </div>

              <div className="p-3 rounded bg-[#101216] border border-[#242830]">
                <span className="text-[#9299A5] block text-[10px] uppercase mb-0.5">CREATOR</span>
                <span className="text-emerald-400 font-bold text-sm">SAYEMATRIX Ecosystem</span>
              </div>

              <div className="p-3 rounded bg-[#101216] border border-[#242830]">
                <span className="text-[#9299A5] block text-[10px] uppercase mb-0.5">CORE FOCUS</span>
                <span className="text-[#F5F5F5] font-semibold">AI • Automation • FinTech</span>
              </div>

              <div className="p-3 rounded bg-[#101216] border border-[#242830]">
                <span className="text-[#9299A5] block text-[10px] uppercase mb-1">INTERESTS</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Quantitative Systems', 'Financial Markets', 'Digital Infrastructure', 'Research', 'Technology', 'Business'].map(item => (
                    <span key={item} className="px-2 py-0.5 rounded bg-[#14171C] text-[10px] text-[#9299A5] border border-[#242830]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded bg-[#101216] border border-[#242830]">
                <span className="text-[#9299A5] text-[10px] uppercase">LOCATION</span>
                <span className="text-[#F5F5F5] font-semibold flex items-center gap-1">
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
