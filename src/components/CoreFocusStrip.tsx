import React from 'react';
import { CORE_FOCUS_ITEMS } from '../data/content';
import { Cpu, LineChart, Globe, Database, Network, Briefcase } from 'lucide-react';

export const CoreFocusStrip: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Cpu className="w-4 h-4 text-[#42B8E8]" />;
      case 1: return <LineChart className="w-4 h-4 text-[#7DD3FC]" />;
      case 2: return <Globe className="w-4 h-4 text-[#2D9CDB]" />;
      case 3: return <Database className="w-4 h-4 text-[#42B8E8]" />;
      case 4: return <Network className="w-4 h-4 text-[#7DD3FC]" />;
      case 5: return <Briefcase className="w-4 h-4 text-[#2D9CDB]" />;
      default: return <Cpu className="w-4 h-4 text-[#42B8E8]" />;
    }
  };

  return (
    <section className="bg-[#0A0D10] border-b border-[#1B2127] py-8 relative" id="core-focus-strip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CORE_FOCUS_ITEMS.map((item, idx) => (
            <div
              key={item.number}
              className="group p-5 rounded-md bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 hover:bg-[#151A20] transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent hover bar */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#2D9CDB] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xl font-bold text-[#6F7882] group-hover:text-[#42B8E8] transition-colors">
                  {item.number}
                </span>
                <div className="p-1.5 rounded bg-[#050607] border border-[#1B2127] group-hover:border-[#2D9CDB]/30 transition-colors">
                  {getIcon(idx)}
                </div>
              </div>

              <h3 className="font-mono text-xs font-bold text-[#F5F7FA] tracking-wider uppercase mb-1.5 group-hover:text-[#42B8E8] transition-colors">
                {item.title}
              </h3>

              <p className="font-sans text-xs text-[#A7B0BA] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
