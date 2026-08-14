import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { Compass, Sparkles } from 'lucide-react';

export const PersonalDimensionSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#041618] border-b border-[#0E353C] relative" id="personal-dimension">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 rounded-2xl bg-[#061D20] border border-[#0E353C] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#031214] border border-[#0E353C]">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">
                PERSONAL DIMENSION
              </span>
            </div>

            <h3 className="text-2xl font-sans font-extrabold text-[#F8FAFC] uppercase">
              BEYOND THE WORK
            </h3>

            <p className="text-sm font-sans text-emerald-400 font-mono italic">
              “Building a better life while building better systems.”
            </p>
          </div>

          <div className="flex flex-wrap gap-2 max-w-md">
            {PERSONAL_INFO.beyondWorkInterests.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg bg-[#031214] border border-[#0E353C] text-xs font-mono text-[#F8FAFC]"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
