import React from 'react';
import { CORE_FOCUS_ITEMS } from '../data/content';
import { Cpu, LineChart, Globe, Database, Network, Briefcase } from 'lucide-react';

export const CoreFocusStrip: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 1: return <LineChart className="w-5 h-5 text-cyan-400" />;
      case 2: return <Globe className="w-5 h-5 text-blue-400" />;
      case 3: return <Database className="w-5 h-5 text-teal-400" />;
      case 4: return <Network className="w-5 h-5 text-purple-400" />;
      case 5: return <Briefcase className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="bg-[#041618] border-b border-[#0E353C] py-8 relative" id="core-focus-strip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CORE_FOCUS_ITEMS.map((item, idx) => (
            <div
              key={item.number}
              className="group p-5 rounded-lg bg-[#061D20] border border-[#0E353C] hover:border-emerald-500/50 hover:bg-[#0A2B30] transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden shadow-sm"
            >
              {/* Subtle accent hover bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-2xl font-bold text-emerald-400/80 group-hover:text-emerald-400 transition-colors">
                  {item.number}
                </span>
                <div className="p-2 rounded bg-[#031214] border border-[#0E353C] group-hover:border-emerald-500/30 transition-colors">
                  {getIcon(idx)}
                </div>
              </div>

              <h3 className="font-mono text-xs font-bold text-[#F8FAFC] tracking-widest uppercase mb-1.5 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>

              <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
