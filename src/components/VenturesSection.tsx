import React, { useState } from 'react';
import { VENTURES } from '../data/content';
import { Building2, CheckCircle2, ArrowRight, ChevronUp } from 'lucide-react';

interface VenturesSectionProps {
  onExploreVenture: (ventureId: string) => void;
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({ onExploreVenture }) => {
  const [isQyntiqExpanded, setIsQyntiqExpanded] = useState<boolean>(false);

  const qyntiq = VENTURES[0];
  const sayematrix = VENTURES[1];

  const handleToggleQyntiq = () => {
    setIsQyntiqExpanded((prev) => !prev);
  };

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
          <div
            className={`group p-8 rounded-lg bg-[#0E1217] border transition-all duration-300 relative overflow-hidden shadow-lg flex flex-col justify-between ${
              isQyntiqExpanded
                ? 'border-[#2D9CDB]/60 bg-[#12171E]'
                : 'border-[#1B2127] hover:border-[#2D9CDB]/40 hover:bg-[#151A20]'
            }`}
          >
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

              {/* Expanded QYNTIQ Details (revealed on clicking EXPLORE QYNTIQ) */}
              {isQyntiqExpanded && (
                <div className="pt-6 border-t border-[#1B2127] space-y-5 mb-6 animate-in fade-in duration-300">
                  
                  {/* Key Purpose & Software Company Position */}
                  <div className="p-4 rounded bg-[#0A0D10] border border-[#1B2127] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#42B8E8] uppercase tracking-wider font-bold">
                        KEY PURPOSE &amp; MISSION
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#2D9CDB]/10 border border-[#2D9CDB]/30 text-[#7DD3FC]">
                        SOFTWARE &amp; TECH COMPANY
                      </span>
                    </div>
                    <p className="text-xs font-sans text-[#F5F7FA] leading-relaxed">
                      {qyntiq.keyPurpose || 'QYNTIQ researches, engineers, and builds intelligent software and technology systems for complex financial and technical problems.'}
                    </p>
                    <p className="text-[11px] font-sans text-[#8A95A0] leading-relaxed pt-2 border-t border-[#1B2127]">
                      {qyntiq.positioningStatement || 'QYNTIQ is a software and technology company. It is NOT a trading signal provider, investment fund, broker, retail trading guru, or generic marketing agency.'}
                    </p>
                  </div>

                  {/* Core Flow */}
                  {qyntiq.flow && (
                    <div className="p-4 rounded bg-[#0A0D10] border border-[#1B2127] space-y-2">
                      <span className="text-[10px] font-mono text-[#6F7882] uppercase tracking-wider block font-semibold">
                        CORE FLOW
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {qyntiq.flow.split(' → ').map((step, idx, arr) => (
                          <React.Fragment key={step}>
                            <span className="px-2.5 py-1 rounded bg-[#0E1217] border border-[#1B2127] text-[#42B8E8] font-mono font-bold text-[11px]">
                              {step}
                            </span>
                            {idx < arr.length - 1 && (
                              <span className="text-[#6F7882] font-mono text-xs">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Strategic Direction */}
                  {qyntiq.direction && (
                    <div className="p-4 rounded bg-[#0A0D10] border border-[#1B2127] space-y-2">
                      <span className="text-[10px] font-mono text-[#6F7882] uppercase tracking-wider block font-semibold">
                        STRATEGIC DIRECTION
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {qyntiq.direction.split(' → ').map((stage, idx, arr) => (
                          <React.Fragment key={stage}>
                            <span className="px-2 py-0.5 rounded bg-[#0E1217] border border-[#1B2127] text-[#D1D5DB] font-mono text-[10px]">
                              {stage}
                            </span>
                            {idx < arr.length - 1 && (
                              <span className="text-[#6F7882] font-mono text-xs">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Specializations & Capabilities (12 items) */}
                  {qyntiq.coreAreas && (
                    <div className="p-4 rounded bg-[#0A0D10] border border-[#1B2127] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#6F7882] uppercase tracking-wider block font-semibold">
                          CORE SPECIALIZATIONS &amp; CAPABILITIES ({qyntiq.coreAreas.length})
                        </span>
                        <span className="text-[10px] font-mono text-[#42B8E8]">AI × Quant × FinTech</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {qyntiq.coreAreas.map((area) => (
                          <div
                            key={area}
                            className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-[#0E1217] border border-[#1B2127] text-[11px] font-mono text-[#A7B0BA] hover:text-[#42B8E8] hover:border-[#2D9CDB]/30 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2D9CDB] shrink-0" />
                            <span className="truncate">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="pt-4 border-t border-[#1B2127] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#A7B0BA]">
                  STATUS: <strong className="text-[#42B8E8]">{qyntiq.status}</strong>
                </span>
                {isQyntiqExpanded && (
                  <button
                    onClick={() => onExploreVenture(qyntiq.id)}
                    className="text-[10px] font-mono text-[#6F7882] hover:text-[#42B8E8] underline text-left mt-1 cursor-pointer"
                  >
                    View founder background in About →
                  </button>
                )}
              </div>

              <button
                onClick={handleToggleQyntiq}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#2D9CDB] hover:bg-[#42B8E8] text-[#050607] font-mono text-xs font-bold uppercase transition-all shadow-md active:scale-95 cursor-pointer"
                aria-expanded={isQyntiqExpanded}
              >
                <span>
                  {isQyntiqExpanded ? 'HIDE DETAILS' : `${qyntiq.linkText} →`}
                </span>
                {isQyntiqExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
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
                <span>{sayematrix.linkText} →</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
