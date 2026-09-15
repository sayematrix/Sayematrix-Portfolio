import React from 'react';
import { VENTURES } from '../data/content';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface VenturesSectionProps {
  onExploreVenture: (ventureId: string) => void;
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({ onExploreVenture }) => {
  const qyntiq = VENTURES[0];
  const sayematrix = VENTURES[1];

  return (
    <section className="py-20 bg-[#0A0D10] border-b border-[#1B2127] relative scroll-mt-20 sm:scroll-mt-24" id="ventures">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1217] border border-[#1B2127] mb-2">
            <Building2 className="w-3.5 h-3.5 text-[#42B8E8]" />
            <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest">
              BUSINESS &amp; BRAND VEHICLES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F7FA] uppercase tracking-tight">
            VENTURES
          </h2>
          <p className="text-sm font-sans text-[#A7B0BA] mt-2 max-w-xl">
            Long-term projects built with patience, systems, and strategic intent.
          </p>
        </div>

        {/* Two Balanced Venture Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Venture 01: QYNTIQ */}
          <div className="group p-8 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 hover:bg-[#151A20] transition-all duration-300 relative overflow-hidden shadow-lg flex flex-col justify-between">
            <div>
              {/* Card Header Badge & Index */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1B2127] mb-6">
                <span className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest px-3 py-1 rounded bg-[#2D9CDB]/10 border border-[#2D9CDB]/30">
                  {qyntiq.label}
                </span>
                <span className="text-[10px] font-mono text-[#6F7882]">01 / 02</span>
              </div>

              {/* Main Identity */}
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#F5F7FA] mb-2 group-hover:text-[#42B8E8] transition-colors tracking-tight">
                {qyntiq.name}
              </h3>
              <p className="text-xs font-mono text-[#42B8E8]/90 mb-4">
                {qyntiq.subtitle}
              </p>

              <p className="text-xs sm:text-sm font-sans text-[#A7B0BA] leading-relaxed mb-6">
                {qyntiq.description}
              </p>

              {/* Initial Concise Overview Highlights */}
              <div className="space-y-2.5 mb-6">
                {qyntiq.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 text-xs font-sans text-[#F5F7FA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#42B8E8] shrink-0 mt-0.5" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-4 border-t border-[#1B2127] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#A7B0BA]">
                STATUS: <strong className="text-[#42B8E8]">{qyntiq.status}</strong>
              </span>

              <a
                href="https://www.qyntiq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#2D9CDB] hover:bg-[#42B8E8] text-[#050607] font-mono text-xs font-bold uppercase transition-all shadow-md active:scale-95 cursor-pointer"
                id="ventures-explore-qyntiq-btn"
              >
                <span>{qyntiq.linkText} </span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Venture 02: SAYEMATRIX Digital Ecosystem */}
          <div className="group p-8 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 hover:bg-[#151A20] transition-all duration-300 relative overflow-hidden shadow-lg flex flex-col justify-between">
            <div>
              {/* Card Header Badge & Index */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1B2127] mb-6">
                <span className="text-xs font-mono font-bold text-[#7DD3FC] uppercase tracking-widest px-3 py-1 rounded bg-[#2D9CDB]/10 border border-[#2D9CDB]/30">
                  {sayematrix.label}
                </span>
                <span className="text-[10px] font-mono text-[#6F7882]">02 / 02</span>
              </div>

              {/* Main Identity */}
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#F5F7FA] mb-2 group-hover:text-[#42B8E8] transition-colors tracking-tight">
                {sayematrix.name}
              </h3>
              <p className="text-xs font-mono text-[#42B8E8]/90 mb-4">
                {sayematrix.subtitle}
              </p>

              <p className="text-xs sm:text-sm font-sans text-[#A7B0BA] leading-relaxed mb-6">
                {sayematrix.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                {sayematrix.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 text-xs font-sans text-[#F5F7FA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#42B8E8] shrink-0 mt-0.5" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-4 border-t border-[#1B2127] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#A7B0BA]">
                STATUS: <strong className="text-[#42B8E8]">{sayematrix.status}</strong>
              </span>

              <button
                onClick={() => onExploreVenture(sayematrix.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#2D9CDB] hover:bg-[#42B8E8] text-[#050607] font-mono text-xs font-bold uppercase transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>{sayematrix.linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
