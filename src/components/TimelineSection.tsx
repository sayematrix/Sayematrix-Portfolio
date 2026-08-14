import React from 'react';
import { TIMELINE_MILESTONES } from '../data/content';
import { History } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#041618] border-b border-[#0E353C] relative" id="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#061D20] border border-[#0E353C] mb-2">
            <History className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">
              EVOLUTION & MILESTONES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F8FAFC] uppercase tracking-tight">
            JOURNEY / <span className="text-emerald-400">TIMELINE</span>
          </h2>
          <p className="text-sm font-sans text-[#94A3B8] mt-2">
            A minimal trajectory from current engineering to long-term venture scale.
          </p>
        </div>

        {/* Minimal Timeline Cards */}
        <div className="relative border-l-2 border-[#0E353C] ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-10">
          {TIMELINE_MILESTONES.map((item) => (
            <div key={item.year} className="relative group">
              {/* Timeline Node Circle */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-[#061D20] border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors" />

              <div className="p-6 rounded-xl bg-[#061D20] border border-[#0E353C] group-hover:border-emerald-500/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono font-bold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-sans font-bold text-[#F8FAFC]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs font-mono text-emerald-400/90 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs font-sans text-[#94A3B8] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#031214] border border-[#0E353C] text-[10px] font-mono text-[#94A3B8]"
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
