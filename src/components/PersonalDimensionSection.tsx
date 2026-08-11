import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { Compass, Sparkles } from 'lucide-react';

export const PersonalDimensionSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#08090B] border-b border-[#242830] relative" id="personal-dimension">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 rounded-2xl bg-[#101216] border border-[#242830] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14171C] border border-[#242830]">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest">
                PERSONAL DIMENSION
              </span>
            </div>

            <h3 className="text-2xl font-sans font-extrabold text-[#F5F5F5] uppercase">
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
                className="px-3 py-1.5 rounded-lg bg-[#14171C] border border-[#242830] text-xs font-mono text-[#F5F5F5]"
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
