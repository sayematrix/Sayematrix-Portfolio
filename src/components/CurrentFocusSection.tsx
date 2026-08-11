import React from 'react';
import { CURRENT_FOCUS_GRID } from '../data/content';
import { Cpu, Workflow, Landmark, Binary, Box, BrainCircuit } from 'lucide-react';

export const CurrentFocusSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 1: return <Workflow className="w-5 h-5 text-cyan-400" />;
      case 2: return <Landmark className="w-5 h-5 text-blue-400" />;
      case 3: return <Binary className="w-5 h-5 text-purple-400" />;
      case 4: return <Box className="w-5 h-5 text-amber-400" />;
      case 5: return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      default: return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#08090B] border-b border-[#242830] relative" id="current-focus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
              OPERATIONAL HORIZON
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#F5F5F5] uppercase tracking-tight">
              CURRENT <span className="text-emerald-400">FOCUS</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-[#9299A5] border-l-2 border-[#242830] pl-3 py-1">
            Active R&D pipelines under development in 2026.
          </div>
        </div>

        {/* Six-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENT_FOCUS_GRID.map((item, idx) => (
            <div
              key={item.number}
              className="group p-6 rounded-xl bg-[#101216] border border-[#242830] hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-3xl font-extrabold text-[#242830] group-hover:text-emerald-400 transition-colors">
                  {item.number}
                </span>
                <div className="p-2.5 rounded-lg bg-[#14171C] border border-[#242830] group-hover:border-emerald-500/30 transition-colors">
                  {getIcon(idx)}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-sm font-bold text-[#F5F5F5] tracking-wider uppercase mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#9299A5] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#242830]/60 flex items-center justify-between text-[10px] font-mono text-[#9299A5]">
                <span>STATUS: ACTIVE</span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
