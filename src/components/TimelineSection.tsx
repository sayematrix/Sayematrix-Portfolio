import React from 'react';
import { TIMELINE_MILESTONES } from '../data/content';
import { History } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A0D10] border-b border-[#1B2127] relative" id="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1217] border border-[#1B2127] mb-2">
            <History className="w-3.5 h-3.5 text-[#42B8E8]" />
            <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest">
              EVOLUTION &amp; MILESTONES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F7FA] uppercase tracking-tight">
            JOURNEY / <span className="text-[#42B8E8]">TIMELINE</span>
          </h2>
          <p className="text-sm font-sans text-[#A7B0BA] mt-2">
            A minimal trajectory from current engineering to long-term venture scale.
          </p>
        </div>

        {/* Minimal Timeline Cards */}
        <div className="relative border-l-2 border-[#1B2127] ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-10">
          {TIMELINE_MILESTONES.map((item) => (
            <div key={item.year} className="relative group">
              {/* Timeline Node Circle */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-[#0E1217] border-2 border-[#2D9CDB] group-hover:bg-[#42B8E8] transition-colors" />

              <div className="p-6 rounded-lg bg-[#0E1217] border border-[#1B2127] group-hover:border-[#2D9CDB]/40 group-hover:bg-[#151A20] transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono font-bold text-[#42B8E8] px-2.5 py-0.5 rounded bg-[#2D9CDB]/10 border border-[#2D9CDB]/30">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-sans font-bold text-[#F5F7FA]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs font-mono text-[#42B8E8]/90 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm font-sans text-[#A7B0BA] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#050607] border border-[#1B2127] text-[10px] font-mono text-[#6F7882]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
