import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { ArrowRight, Flame } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#041618] border-b border-[#0E353C] relative overflow-hidden" id="philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#061D20] border border-[#0E353C]">
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">
              CORE BRAND PHILOSOPHY
            </span>
          </div>
        </div>

        {/* Large Typography Statement */}
        <div className="space-y-4 max-w-5xl">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tight text-[#F8FAFC] uppercase leading-none">
            <span className="text-[#F8FAFC] block">LEARN DEEPLY.</span>
            <span className="text-emerald-400 block">BUILD PRACTICALLY.</span>
            <span className="text-[#F8FAFC] block">TEST IN REALITY.</span>
            <span className="text-teal-300 block">IMPROVE CONTINUOUSLY.</span>
            <span className="text-cyan-400 block">CREATE LONG-TERM VALUE.</span>
          </h2>
        </div>

        {/* Core Operating Loop Pills */}
        <div className="mt-16 bg-[#061D20] p-6 rounded-2xl border border-[#0E353C]">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-4 font-bold">
            CORE OPERATING LOOP
          </span>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {PERSONAL_INFO.operatingLoop.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="px-4 py-2 rounded-lg bg-[#031214] border border-[#0E353C] flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-400">0{idx + 1}</span>
                  <span className="font-mono text-xs font-bold text-[#F8FAFC] uppercase">{step}</span>
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
