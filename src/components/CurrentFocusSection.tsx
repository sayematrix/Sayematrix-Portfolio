import React from 'react';
import { CURRENT_FOCUS_GRID } from '../data/content';
import { BrainCircuit, LineChart, Database, Workflow, BarChart3, Layers, Globe, Cpu } from 'lucide-react';

export const CurrentFocusSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <BrainCircuit className="w-4 h-4 text-[#42B8E8]" />;
      case 1: return <LineChart className="w-4 h-4 text-[#7DD3FC]" />;
      case 2: return <Database className="w-4 h-4 text-[#2D9CDB]" />;
      case 3: return <Workflow className="w-4 h-4 text-[#42B8E8]" />;
      case 4: return <BarChart3 className="w-4 h-4 text-[#7DD3FC]" />;
      case 5: return <Layers className="w-4 h-4 text-[#2D9CDB]" />;
      case 6: return <Globe className="w-4 h-4 text-[#42B8E8]" />;
      default: return <Cpu className="w-4 h-4 text-[#42B8E8]" />;
    }
  };

  return (
    <section className="py-20 bg-[#050607] border-b border-[#1B2127] relative" id="current-focus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono text-[#42B8E8] uppercase tracking-widest block mb-1">
              OPERATIONAL HORIZON
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#F5F7FA] uppercase tracking-tight">
              CURRENT <span className="text-[#42B8E8]">FOCUS</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-[#A7B0BA] border-l-2 border-[#1B2127] pl-3 py-1">
            Active R&amp;D pipelines under development in 2026.
          </div>
        </div>

        {/* Focus Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENT_FOCUS_GRID.map((item, idx) => (
            <div
              key={item.number}
              className={`group p-6 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 hover:bg-[#151A20] transition-all duration-300 relative flex flex-col justify-between ${
                idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-3xl font-extrabold text-[#1B2127] group-hover:text-[#42B8E8] transition-colors">
                  {item.number}
                </span>
                <div className="p-2 rounded bg-[#050607] border border-[#1B2127] group-hover:border-[#2D9CDB]/30 transition-colors">
                  {getIcon(idx)}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-sm font-bold text-[#F5F7FA] tracking-wider uppercase mb-2 group-hover:text-[#42B8E8] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#A7B0BA] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B2127] flex items-center justify-between text-[10px] font-mono text-[#6F7882]">
                <span>STATUS: ACTIVE</span>
                <span className="text-[#42B8E8] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
