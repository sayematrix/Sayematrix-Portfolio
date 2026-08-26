import React, { useState } from 'react';
import { LIFESTYLE_DATA, LifestyleItem } from '../data/content';
import {
  Dumbbell,
  Activity,
  HeartPulse,
  Workflow,
  Clock,
  ShieldCheck,
  Target,
  Zap,
  Layers,
  Compass,
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';

interface LifestyleSectionProps {
  onExploreLifestylePage?: () => void;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ onExploreLifestylePage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-purple-400" />;
      case 'Clock': return <Clock className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Target': return <Target className="w-5 h-5 text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-teal-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-400" />;
      default: return <Flame className="w-5 h-5 text-emerald-400" />;
    }
  };

  const categories = ['ALL', 'Physical', 'Productivity', 'Discipline', 'Systems'];

  const filteredItems = selectedCategory === 'ALL'
    ? LIFESTYLE_DATA.detailedItems
    : LIFESTYLE_DATA.detailedItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-[#041618] border-b border-[#0E353C] relative" id="lifestyle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#061D20] border border-[#0E353C]">
              <Flame className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                SYSTEMIC HIGH PERFORMANCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F8FAFC] uppercase tracking-tight">
              {LIFESTYLE_DATA.title}
            </h2>

            <p className="text-xs sm:text-sm font-mono text-emerald-400 font-bold uppercase tracking-wider">
              {LIFESTYLE_DATA.subtitle}
            </p>

            <p className="text-sm font-sans text-[#94A3B8] leading-relaxed pt-1 max-w-2xl">
              {LIFESTYLE_DATA.summary}
            </p>
          </div>

          {/* Quick Stats / Action */}
          <div className="flex flex-wrap items-center gap-3">
            {onExploreLifestylePage && (
              <button
                onClick={onExploreLifestylePage}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#061D20] border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase hover:bg-[#0A2B30] hover:border-emerald-500 transition-all cursor-pointer shadow-lg shadow-emerald-500/5"
                id="lifestyle-deepdive-btn"
              >
                <span>Full Lifestyle Protocol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Categories / Filter Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-[11px] font-mono text-[#94A3B8] uppercase pr-2 shrink-0">
            DOMAIN FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-[#050608] font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-[#061D20] text-[#94A3B8] border border-[#0E353C] hover:text-[#F8FAFC] hover:border-emerald-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 10-Item Focus Areas Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: LifestyleItem) => (
            <div
              key={item.number}
              className="p-6 rounded-xl bg-[#061D20] border border-[#0E353C] hover:border-emerald-500/50 hover:bg-[#0A2B30] transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-[#0E353C] group-hover:text-emerald-400 transition-colors">
                    {item.number}
                  </span>
                  <div className="p-2.5 rounded-lg bg-[#031214] border border-[#0E353C] group-hover:border-emerald-500/30 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm font-bold text-[#F8FAFC] uppercase tracking-wide group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[9px] font-mono uppercase text-[#94A3B8] px-1.5 py-0.5 rounded bg-[#031214] border border-[#0E353C]">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Focus Area Sub-Principles / Tags */}
              <div className="pt-4 border-t border-[#0E353C]/60 space-y-2">
                <div className="grid grid-cols-2 gap-1.5">
                  {item.principles.map((pr) => (
                    <div key={pr} className="flex items-center gap-1.5 text-[10px] font-mono text-[#F8FAFC]">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{pr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Summary Strip */}
        <div className="p-6 rounded-xl bg-[#031214] border border-[#0E353C] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#F8FAFC] font-bold uppercase">FOCUS AREAS:</span>
            <span className="text-[#94A3B8] hidden sm:inline-block">10 Core Pillars of Daily Human Systems Architecture</span>
          </div>
          <div className="text-emerald-400 font-bold text-center md:text-right">
            DISCIPLINE ✘ TRAINING ✘ ROUTINE ✘ BUILD
          </div>
        </div>

      </div>
    </section>
  );
};
