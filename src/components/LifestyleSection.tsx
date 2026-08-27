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
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-[#42B8E8]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#7DD3FC]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#2D9CDB]" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-[#42B8E8]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#7DD3FC]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#2D9CDB]" />;
      case 'Target': return <Target className="w-5 h-5 text-[#42B8E8]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#7DD3FC]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#2D9CDB]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#42B8E8]" />;
      default: return <Flame className="w-5 h-5 text-[#42B8E8]" />;
    }
  };

  const categories = ['ALL', 'Physical', 'Productivity', 'Discipline', 'Systems'];

  const filteredItems = selectedCategory === 'ALL'
    ? LIFESTYLE_DATA.detailedItems
    : LIFESTYLE_DATA.detailedItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-[#050607] border-b border-[#1B2127] relative scroll-mt-20 sm:scroll-mt-24" id="lifestyle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A0D10] border border-[#1B2127]">
              <Flame className="w-3.5 h-3.5 text-[#42B8E8]" />
              <span className="text-[10px] font-mono text-[#42B8E8] uppercase tracking-widest">
                SYSTEMIC HIGH PERFORMANCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F7FA] uppercase tracking-tight">
              {LIFESTYLE_DATA.title}
            </h2>

            <p className="text-xs sm:text-sm font-mono text-[#42B8E8] font-bold uppercase tracking-wider">
              {LIFESTYLE_DATA.subtitle}
            </p>

            <p className="text-sm font-sans text-[#A7B0BA] leading-relaxed pt-1 max-w-2xl">
              {LIFESTYLE_DATA.summary}
            </p>
          </div>

          {/* Quick Stats / Action */}
          <div className="flex flex-wrap items-center gap-3">
            {onExploreLifestylePage && (
              <button
                onClick={onExploreLifestylePage}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#0E1217] border border-[#2D9CDB]/30 text-[#42B8E8] font-mono text-xs font-bold uppercase hover:bg-[#151A20] hover:border-[#2D9CDB] transition-all cursor-pointer shadow-sm"
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
          <span className="text-[11px] font-mono text-[#6F7882] uppercase pr-2 shrink-0">
            DOMAIN FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#2D9CDB] text-[#050607] font-bold shadow-sm'
                  : 'bg-[#0E1217] text-[#A7B0BA] border border-[#1B2127] hover:text-[#F5F7FA] hover:border-[#2D9CDB]/30'
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
              className="p-6 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 hover:bg-[#151A20] transition-all duration-200 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-[#1B2127] group-hover:text-[#42B8E8] transition-colors">
                    {item.number}
                  </span>
                  <div className="p-2.5 rounded-md bg-[#050607] border border-[#1B2127] group-hover:border-[#2D9CDB]/30 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm font-bold text-[#F5F7FA] uppercase tracking-wide group-hover:text-[#42B8E8] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[9px] font-mono uppercase text-[#6F7882] px-1.5 py-0.5 rounded bg-[#050607] border border-[#1B2127]">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-[#A7B0BA] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Focus Area Sub-Principles / Tags */}
              <div className="pt-4 border-t border-[#1B2127] space-y-2">
                <div className="grid grid-cols-2 gap-1.5">
                  {item.principles.map((pr) => (
                    <div key={pr} className="flex items-center gap-1.5 text-[10px] font-mono text-[#F5F7FA]">
                      <CheckCircle2 className="w-3 h-3 text-[#42B8E8] shrink-0" />
                      <span className="truncate">{pr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Summary Strip */}
        <div className="p-6 rounded-lg bg-[#0A0D10] border border-[#1B2127] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#42B8E8] animate-pulse" />
            <span className="text-[#F5F7FA] font-bold uppercase">FOCUS AREAS:</span>
            <span className="text-[#A7B0BA] hidden sm:inline-block">10 Core Pillars of Daily Human Systems Architecture</span>
          </div>
          <div className="text-[#42B8E8] font-bold text-center md:text-right">
            DISCIPLINE ✘ TRAINING ✘ ROUTINE ✘ BUILD
          </div>
        </div>

      </div>
    </section>
  );
};
