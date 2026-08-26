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
  ArrowLeft,
  Flame,
  CheckCircle2,
  Calendar,
  Sparkles,
  Printer
} from 'lucide-react';
import { NavigationPage } from '../types';

interface LifestylePageProps {
  onBackToMain?: () => void;
  setActivePage?: (page: NavigationPage) => void;
}

export const LifestylePage: React.FC<LifestylePageProps> = ({ onBackToMain, setActivePage }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

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

  const filteredItems = activeFilter === 'ALL'
    ? LIFESTYLE_DATA.detailedItems
    : LIFESTYLE_DATA.detailedItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen py-12 bg-[#041618] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between no-print">
          <button
            onClick={() => {
              if (onBackToMain) onBackToMain();
              else if (setActivePage) setActivePage('home');
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#061D20] border border-[#0E353C] text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] hover:border-emerald-500/40 transition-colors cursor-pointer"
            id="lifestyle-back-btn"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO MAIN</span>
          </button>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#061D20] border border-[#0E353C] text-xs font-mono text-[#94A3B8] hover:text-emerald-400 hover:border-emerald-500/40 transition-colors cursor-pointer"
            id="lifestyle-print-btn"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PRINT PROTOCOL</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#061D20] border border-[#0E353C] relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Flame className="w-72 h-72 text-emerald-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#031214] border border-[#0E353C]">
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
              SYSTEMIC LIFE ARCHITECTURE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#F8FAFC] tracking-tight uppercase">
            {LIFESTYLE_DATA.title}
          </h1>

          <p className="text-sm sm:text-base font-mono text-emerald-400 font-bold uppercase tracking-wider">
            {LIFESTYLE_DATA.subtitle}
          </p>

          <p className="text-base font-sans text-[#94A3B8] leading-relaxed max-w-3xl">
            {LIFESTYLE_DATA.summary}
          </p>

          {/* Core Tenets */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#0E353C]">
            {[
              { label: 'TRAINING STANDARD', val: 'Progressive & Functional' },
              { label: 'RECOVERY TARGET', val: 'Circadian Optimization' },
              { label: 'DEEP WORK BLOCK', val: 'Single-Task Immersion' },
              { label: 'HORIZON', val: 'Multi-Decade Durability' },
            ].map(stat => (
              <div key={stat.label} className="p-3 rounded-lg bg-[#031214] border border-[#0E353C]">
                <span className="text-[10px] font-mono text-[#94A3B8] block">{stat.label}</span>
                <span className="text-xs font-mono font-bold text-emerald-400">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#0E353C] pb-4">
          <div>
            <h2 className="text-lg font-mono font-bold text-[#F8FAFC] uppercase tracking-wide">
              FOCUS AREAS
            </h2>
            <p className="text-xs font-sans text-[#94A3B8]">
              10 interconnected pillars engineered for sustained high performance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {['ALL', 'Physical', 'Productivity', 'Discipline', 'Systems'].map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === category
                    ? 'bg-emerald-500 text-[#050608] font-bold'
                    : 'bg-[#061D20] text-[#94A3B8] border border-[#0E353C] hover:text-[#F8FAFC]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item: LifestyleItem) => (
            <div
              key={item.number}
              className="p-6 rounded-xl bg-[#061D20] border border-[#0E353C] space-y-4 hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#031214] border border-[#0E353C]">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 block">PILLAR {item.number}</span>
                    <h3 className="font-mono text-base font-bold text-[#F8FAFC] uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <span className="text-[9px] font-mono uppercase text-[#94A3B8] px-2 py-0.5 rounded bg-[#031214] border border-[#0E353C]">
                  {item.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-sans text-[#94A3B8] leading-relaxed">
                {item.description}
              </p>

              <div className="pt-3 border-t border-[#0E353C]/60">
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase block mb-2">
                  EXECUTION BENCHMARKS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.principles.map(principle => (
                    <div key={principle} className="flex items-center gap-2 p-2 rounded bg-[#031214] border border-[#0E353C] text-xs font-mono text-[#F8FAFC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Cadence / Daily Routine Architecture */}
        <div className="p-8 rounded-2xl bg-[#031214] border border-[#0E353C] space-y-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <h3 className="font-mono text-sm font-bold text-[#F8FAFC] uppercase tracking-wider">
              DAILY OPERATING CADENCE &amp; SYSTEMS ARCHITECTURE
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#061D20] border border-[#0E353C] space-y-2">
              <span className="text-emerald-400 font-bold block">01. MORNING PRIMING</span>
              <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                Hydration, sunlight exposure, joint mobility, mental calibration, and prioritized focus declaration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#061D20] border border-[#0E353C] space-y-2">
              <span className="text-emerald-400 font-bold block">02. DEEP WORK CYCLES</span>
              <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                Uninterrupted 90-minute blocks devoted strictly to core engineering, quantitative models, and high-leverage build systems.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#061D20] border border-[#0E353C] space-y-2">
              <span className="text-emerald-400 font-bold block">03. PHYSICAL TRAINING</span>
              <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                Strength, functional conditioning, zone-2 cardiovascular resilience, and structural athletic maintenance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#061D20] border border-[#0E353C] space-y-2">
              <span className="text-emerald-400 font-bold block">04. EVENING WIND-DOWN</span>
              <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                Reflective day audit, digital detachment, sleep environment temperature control, and full recovery reset.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
