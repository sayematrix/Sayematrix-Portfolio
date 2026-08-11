import React from 'react';
import { VENTURES } from '../data/content';
import { Building2, Compass, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

interface VenturesSectionProps {
  onExploreVenture: (ventureId: string) => void;
}

export const VenturesSection: React.FC = ({ onExploreVenture }) => {
  return (
    <section className="py-20 bg-[#101216] border-b border-[#242830] relative" id="ventures">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14171C] border border-[#242830] mb-2">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest">
              BUSINESS & BRAND VEHICLES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F5F5] uppercase tracking-tight">
            VENTURES
          </h2>
          <p className="text-sm font-sans text-[#9299A5] mt-2 max-w-xl">
            Long-term projects built with patience, systems, and strategic intent.
          </p>
        </div>

        {/* Two Distinct Venture Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Venture 01: SANR Corporation Limited */}
          <div className="group p-8 rounded-2xl bg-[#08090B] border-2 border-emerald-500/30 hover:border-emerald-500 transition-all duration-300 relative overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Subtle top glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#242830] mb-6">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
                  {VENTURES[0].label}
                </span>
                <span className="text-[10px] font-mono text-[#9299A5]">01 / 02</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#F5F5F5] mb-2 group-hover:text-emerald-300 transition-colors tracking-tight">
                {VENTURES[0].name}
              </h3>
              <p className="text-xs font-mono text-emerald-400/90 mb-4">
                {VENTURES[0].subtitle}
              </p>

              <p className="text-xs sm:text-sm font-sans text-[#9299A5] leading-relaxed mb-6">
                {VENTURES[0].description}
              </p>

              <div className="space-y-2 mb-8">
                {VENTURES[0].highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-xs font-sans text-[#F5F5F5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#242830] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#9299A5]">
                STATUS: <strong className="text-emerald-400">{VENTURES[0].status}</strong>
              </span>

              <button
                onClick={() => onExploreVenture(VENTURES[0].id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#08090B] font-mono text-xs font-bold uppercase transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>{VENTURES[0].linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Venture 02: SAYEMATRIX Digital Ecosystem */}
          <div className="group p-8 rounded-2xl bg-[#08090B] border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 relative overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Subtle top glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#242830] mb-6">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                  {VENTURES[1].label}
                </span>
                <span className="text-[10px] font-mono text-[#9299A5]">02 / 02</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#F5F5F5] mb-2 group-hover:text-cyan-300 transition-colors tracking-tight">
                {VENTURES[1].name}
              </h3>
              <p className="text-xs font-mono text-cyan-400/90 mb-4">
                {VENTURES[1].subtitle}
              </p>

              <p className="text-xs sm:text-sm font-sans text-[#9299A5] leading-relaxed mb-6">
                {VENTURES[1].description}
              </p>

              <div className="space-y-2 mb-8">
                {VENTURES[1].highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-xs font-sans text-[#F5F5F5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#242830] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#9299A5]">
                STATUS: <strong className="text-cyan-400">{VENTURES[1].status}</strong>
              </span>

              <button
                onClick={() => onExploreVenture(VENTURES[1].id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#08090B] font-mono text-xs font-bold uppercase transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>{VENTURES[1].linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
