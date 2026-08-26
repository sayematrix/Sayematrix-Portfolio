import React, { useState } from 'react';
import { EXPERTISE_CATEGORIES } from '../data/content';
import { Bot, LineChart, Cpu, TrendingUp, BrainCircuit, Layers, ChevronDown, Sparkles } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('quant-algo');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-purple-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#041618] border-b border-[#0E353C] relative" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#061D20] border border-[#0E353C] mb-2">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
              MULTIDISCIPLINARY TOOLKIT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F8FAFC] uppercase tracking-tight">
            EXPERTISE
          </h2>
          <p className="text-sm font-sans text-[#94A3B8] mt-2 max-w-xl">
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
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#061D20] border-emerald-500/50 shadow-xl shadow-emerald-500/5'
                    : 'bg-[#031214] border-[#0E353C] hover:border-emerald-500/30'
                }`}
              >
                {/* Category Accordion Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : cat.id)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-emerald-400 px-2 py-1 rounded bg-[#031214] border border-[#0E353C]">
                      CAT {cat.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-[#031214] border border-[#0E353C]">
                        {getCategoryIcon(cat.iconName)}
                      </div>
                      <div>
                        <h3 className="font-mono text-sm sm:text-base font-bold text-[#F8FAFC] uppercase tracking-wide">
                          {cat.title}
                        </h3>
                        <p className="text-xs font-sans text-[#94A3B8] hidden sm:block">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#94A3B8] hidden md:inline-block">
                      {cat.skills.length} SPECIALIZATIONS
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Skill Tags Grid */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-[#0E353C]/80 bg-[#031214]/60 animate-in fade-in duration-200">
                    <p className="text-xs font-sans text-[#94A3B8] mb-4 sm:hidden">
                      {cat.subtitle}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 p-2.5 rounded bg-[#082226] border border-[#0E353C] text-xs font-mono text-[#F8FAFC] hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
