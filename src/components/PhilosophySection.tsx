import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { ArrowRight, Flame } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#101216] border-b border-[#242830] relative overflow-hidden" id="philosophy">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14171C] border border-[#242830]">
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest">
              CORE BRAND PHILOSOPHY
            </span>
          </div>
        </div>

        {/* Large Typography Statement */}
        <div className="space-y-4 max-w-5xl">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tight text-[#F5F5F5] uppercase leading-none">
            <span className="text-[#F5F5F5] block">LEARN DEEPLY.</span>
            <span className="text-emerald-400 block">BUILD PRACTICALLY.</span>
            <span className="text-[#F5F5F5] block">TEST IN REALITY.</span>
            <span className="text-teal-300 block">IMPROVE CONTINUOUSLY.</span>
            <span className="text-cyan-400 block">CREATE LONG-TERM VALUE.</span>
          </h2>
        </div>

        {/* Core Operating Loop Pills */}
        <div className="mt-16 bg-[#08090B] p-6 rounded-2xl border border-[#242830]">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-4 font-bold">
            CORE OPERATING LOOP
          </span>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {PERSONAL_INFO.operatingLoop.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="px-4 py-2 rounded-lg bg-[#14171C] border border-[#242830] flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-400">0{idx + 1}</span>
                  <span className="font-mono text-xs font-bold text-[#F5F5F5] uppercase">{step}</span>
                </div>
                {idx < PERSONAL_INFO.operatingLoop.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-emerald-500/50 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
