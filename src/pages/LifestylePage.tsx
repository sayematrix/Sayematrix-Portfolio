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
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-[#42B8E8]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#7DD3FC]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#2D9CDB]" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-[#42B8E8]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#7DD3FC]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#42B8E8]" />;
      case 'Target': return <Target className="w-5 h-5 text-[#2D9CDB]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#7DD3FC]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#42B8E8]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#2D9CDB]" />;
      default: return <Flame className="w-5 h-5 text-[#42B8E8]" />;
    }
  };

  const filteredItems = activeFilter === 'ALL'
    ? LIFESTYLE_DATA.detailedItems
    : LIFESTYLE_DATA.detailedItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen py-12 bg-[#050607] text-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between no-print">
          <button
            onClick={() => {
              if (onBackToMain) onBackToMain();
              else if (setActivePage) setActivePage('home');
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0D10] border border-[#1B2127] text-xs font-mono text-[#A7B0BA] hover:text-[#F5F7FA] hover:border-[#42B8E8]/40 transition-colors cursor-pointer"
            id="lifestyle-back-btn"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#42B8E8]" />
            <span>RETURN TO MAIN</span>
          </button>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0D10] border border-[#1B2127] text-xs font-mono text-[#A7B0BA] hover:text-[#42B8E8] hover:border-[#42B8E8]/40 transition-colors cursor-pointer"
            id="lifestyle-print-btn"
          >
            <Printer className="w-3.5 h-3.5 text-[#42B8E8]" />
            <span>PRINT PROTOCOL</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#0A0D10] border border-[#1B2127] relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Flame className="w-72 h-72 text-[#42B8E8]" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1217] border border-[#1B2127]">
            <Flame className="w-3.5 h-3.5 text-[#42B8E8]" />
            <span className="text-[10px] font-mono text-[#42B8E8] uppercase tracking-widest">
              SYSTEMIC LIFE ARCHITECTURE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#F5F7FA] tracking-tight uppercase">
            {LIFESTYLE_DATA.title}
          </h1>

          <p className="text-sm sm:text-base font-mono text-[#42B8E8] font-bold uppercase tracking-wider">
            {LIFESTYLE_DATA.subtitle}
          </p>

          <p className="text-base font-sans text-[#A7B0BA] leading-relaxed max-w-3xl">
            {LIFESTYLE_DATA.summary}
          </p>

          {/* Core Tenets */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#1B2127]">
            {[
              { label: 'TRAINING STANDARD', val: 'Progressive & Functional' },
              { label: 'RECOVERY TARGET', val: 'Circadian Optimization' },
              { label: 'DEEP WORK BLOCK', val: 'Single-Task Immersion' },
              { label: 'HORIZON', val: 'Multi-Decade Durability' },
            ].map(stat => (
              <div key={stat.label} className="p-3 rounded-lg bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[10px] font-mono text-[#6F7882] block">{stat.label}</span>
                <span className="text-xs font-mono font-bold text-[#42B8E8]">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#1B2127] pb-4">
          <div>
            <h2 className="text-lg font-mono font-bold text-[#F5F7FA] uppercase tracking-wide">
              FOCUS AREAS
            </h2>
            <p className="text-xs font-sans text-[#A7B0BA]">
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
                    ? 'bg-[#2D9CDB] text-[#050607] font-bold'
                    : 'bg-[#0A0D10] text-[#A7B0BA] border border-[#1B2127] hover:text-[#F5F7FA]'
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
              className="p-6 rounded-xl bg-[#0A0D10] border border-[#1B2127] space-y-4 hover:border-[#42B8E8]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0E1217] border border-[#1B2127]">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#42B8E8] block">PILLAR {item.number}</span>
                    <h3 className="font-mono text-base font-bold text-[#F5F7FA] uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <span className="text-[9px] font-mono uppercase text-[#6F7882] px-2 py-0.5 rounded bg-[#0E1217] border border-[#1B2127]">
                  {item.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-sans text-[#A7B0BA] leading-relaxed">
                {item.description}
              </p>

              <div className="pt-3 border-t border-[#1B2127]">
                <span className="text-[10px] font-mono text-[#6F7882] uppercase block mb-2">
                  EXECUTION BENCHMARKS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.principles.map(principle => (
                    <div key={principle} className="flex items-center gap-2 p-2 rounded bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#F5F7FA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#42B8E8] shrink-0" />
                      <span className="truncate">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Cadence / Daily Routine Architecture */}
        <div className="p-8 rounded-xl bg-[#0E1217] border border-[#1B2127] space-y-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#42B8E8]" />
            <h3 className="font-mono text-sm font-bold text-[#F5F7FA] uppercase tracking-wider">
              DAILY OPERATING CADENCE &amp; SYSTEMS ARCHITECTURE
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-lg bg-[#0A0D10] border border-[#1B2127] space-y-2">
              <span className="text-[#42B8E8] font-bold block">01. MORNING PRIMING</span>
              <p className="text-[#A7B0BA] text-[11px] leading-relaxed">
                Hydration, sunlight exposure, joint mobility, mental calibration, and prioritized focus declaration.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#0A0D10] border border-[#1B2127] space-y-2">
              <span className="text-[#42B8E8] font-bold block">02. DEEP WORK CYCLES</span>
              <p className="text-[#A7B0BA] text-[11px] leading-relaxed">
                Uninterrupted 90-minute blocks devoted strictly to core engineering, quantitative models, and high-leverage build systems.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#0A0D10] border border-[#1B2127] space-y-2">
              <span className="text-[#42B8E8] font-bold block">03. PHYSICAL TRAINING</span>
              <p className="text-[#A7B0BA] text-[11px] leading-relaxed">
                Strength, functional conditioning, zone-2 cardiovascular resilience, and structural athletic maintenance.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#0A0D10] border border-[#1B2127] space-y-2">
              <span className="text-[#42B8E8] font-bold block">04. EVENING WIND-DOWN</span>
              <p className="text-[#A7B0BA] text-[11px] leading-relaxed">
                Reflective day audit, digital detachment, sleep environment temperature control, and full recovery reset.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
