import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { Compass, Sparkles } from 'lucide-react';

export const PersonalDimensionSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#050607] border-b border-[#1B2127] relative" id="personal-dimension">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 rounded-lg bg-[#0A0D10] border border-[#1B2127] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1217] border border-[#1B2127]">
              <Compass className="w-3.5 h-3.5 text-[#42B8E8]" />
              <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest">
                PERSONAL DIMENSION
              </span>
            </div>

            <h3 className="text-2xl font-sans font-extrabold text-[#F5F7FA] uppercase">
              BEYOND THE WORK
            </h3>

            <p className="text-sm font-sans text-[#42B8E8] font-mono italic">
              “Building a better life while building better systems.”
            </p>
          </div>

          <div className="flex flex-wrap gap-2 max-w-md">
            {PERSONAL_INFO.beyondWorkInterests.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-md bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#F5F7FA]"
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
