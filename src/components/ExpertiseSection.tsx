import React, { useState } from 'react';
import { EXPERTISE_CATEGORIES } from '../data/content';
import { Bot, LineChart, Cpu, TrendingUp, BrainCircuit, Layers, ChevronDown, Sparkles } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('quant-algo');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-5 h-5 text-[#42B8E8]" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-[#7DD3FC]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#2D9CDB]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#42B8E8]" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-[#7DD3FC]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#2D9CDB]" />;
      default: return <Sparkles className="w-5 h-5 text-[#42B8E8]" />;
    }
  };

  return (
    <section className="py-20 bg-[#0A0D10] border-b border-[#1B2127] relative" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1217] border border-[#1B2127] mb-2">
            <span className="text-[10px] font-mono text-[#42B8E8] uppercase tracking-widest">
              MULTIDISCIPLINARY TOOLKIT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F7FA] uppercase tracking-tight">
            EXPERTISE
          </h2>
          <p className="text-sm font-sans text-[#A7B0BA] mt-2 max-w-xl">
            A multidisciplinary toolkit for building intelligent systems, quantitative tools, and long-term ventures.
          </p>
        </div>

        {/* Expandable Categories Accordion System */}
        <div className="space-y-4">
          {EXPERTISE_CATEGORIES.map((cat) => {
            const isExpanded = expandedId === cat.id;
            return (
              <div
                key={cat.id}
                className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0E1217] border-[#2D9CDB]/40 shadow-lg'
                    : 'bg-[#0E1217] border-[#1B2127] hover:border-[#2D9CDB]/30'
                }`}
              >
                {/* Category Accordion Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : cat.id)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#42B8E8] px-2 py-1 rounded bg-[#050607] border border-[#1B2127]">
                      CAT {cat.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-[#050607] border border-[#1B2127]">
                        {getCategoryIcon(cat.iconName)}
                      </div>
                      <div>
                        <h3 className="font-mono text-sm sm:text-base font-bold text-[#F5F7FA] uppercase tracking-wide">
                          {cat.title}
                        </h3>
                        <p className="text-xs font-sans text-[#A7B0BA] hidden sm:block">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#6F7882] hidden md:inline-block">
                      {cat.skills.length} SPECIALIZATIONS
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#42B8E8] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Skill Tags Grid */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-[#1B2127] bg-[#050607]/80 animate-in fade-in duration-200">
                    <p className="text-xs font-sans text-[#A7B0BA] mb-4 sm:hidden">
                      {cat.subtitle}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 p-2.5 rounded bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] hover:border-[#2D9CDB]/40 hover:text-[#42B8E8] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#42B8E8]" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
