import React, { useState } from 'react';
import { HelpCircle, Search, LineChart, Code2, TestTube2, RefreshCw, CheckCircle2 } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // default 'BUILD'

  const workflowSteps = [
    {
      id: 'question',
      title: '01. QUESTION',
      icon: <HelpCircle className="w-4 h-4 text-[#42B8E8]" />,
      detail: 'Identify root systemic friction points, unoptimized markets, or structural inefficiencies.'
    },
    {
      id: 'research',
      title: '02. RESEARCH',
      icon: <Search className="w-4 h-4 text-[#7DD3FC]" />,
      detail: 'Conduct multi-disciplinary literature review, macroeconomic analysis, and baseline algorithm study.'
    },
    {
      id: 'analysis',
      title: '03. ANALYSIS',
      icon: <LineChart className="w-4 h-4 text-[#2D9CDB]" />,
      detail: 'Formulate quantitative data models, mathematical proofs, and architectural blueprints.'
    },
    {
      id: 'build',
      title: '04. BUILD',
      icon: <Code2 className="w-4 h-4 text-[#42B8E8]" />,
      detail: 'Engineer high-throughput TypeScript, Python, MQL5 software assets and AI workflows.'
    },
    {
      id: 'test',
      title: '05. TEST',
      icon: <TestTube2 className="w-4 h-4 text-[#7DD3FC]" />,
      detail: 'Execute walk-forward backtests, Monte Carlo stress routines, and edge-case validation.'
    },
    {
      id: 'improve',
      title: '06. IMPROVE',
      icon: <RefreshCw className="w-4 h-4 text-[#2D9CDB]" />,
      detail: 'Iterately refine parameter sets, reduce memory footprints, and tighten risk bounds.'
    },
    {
      id: 'apply',
      title: '07. APPLY',
      icon: <CheckCircle2 className="w-4 h-4 text-[#42B8E8]" />,
      detail: 'Deploy live production assets into QYNTIQ software systems and the SAYEMATRIX digital ecosystem.'
    }
  ];

  return (
    <section className="py-20 bg-[#050607] border-b border-[#1B2127] relative" id="intro-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A0D10] border border-[#1B2127]">
            <span className="text-[10px] font-mono text-[#42B8E8] uppercase tracking-widest">
              SYSTEMS ENGINEERING METHODOLOGY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-[#F5F7FA] uppercase">
            BUILDING SYSTEMS, <br />
            <span className="text-[#42B8E8]">NOT JUST PROJECTS.</span>
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#A7B0BA] leading-relaxed italic border-l-2 border-[#2D9CDB]/40 pl-4 py-1">
            “I’m interested in how technology, finance, and intelligent systems can work together to solve real problems, improve decision-making, and create better ways of working.”
          </p>
        </div>

        {/* Process Flow Visualizer */}
        <div className="mt-12 bg-[#0A0D10] p-6 sm:p-8 rounded-lg border border-[#1B2127] shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-[#1B2127] mb-6">
            <span className="text-xs font-mono text-[#42B8E8] font-bold uppercase tracking-widest">
              INTERACTIVE RESEARCH & ENGINEERING WORKFLOW
            </span>
            <span className="text-xs font-mono text-[#6F7882]">
              STEP {activeStepIndex + 1} OF {workflowSteps.length}
            </span>
          </div>

          {/* Workflow Steps Horizontal Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {workflowSteps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-md border text-left transition-all relative cursor-pointer ${
                    isActive
                      ? 'bg-[#2D9CDB]/15 border-[#2D9CDB]/40 text-[#42B8E8] shadow-sm'
                      : 'bg-[#0E1217] border-[#1B2127] text-[#A7B0BA] hover:text-[#F5F7FA] hover:border-[#2D9CDB]/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    {step.icon}
                    <span className="text-[9px] font-mono font-bold text-[#6F7882]">{`0${idx + 1}`}</span>
                  </div>
                  <span className="text-xs font-mono font-bold tracking-tight block">
                    {step.id.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Step Active Card */}
          <div className="mt-6 p-5 bg-[#0E1217] rounded-md border border-[#1B2127] flex flex-col sm:row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#42B8E8] font-bold uppercase">
                {workflowSteps[activeStepIndex].title} — STAGE SPECS
              </span>
              <p className="text-sm font-sans text-[#F5F7FA]">
                {workflowSteps[activeStepIndex].detail}
              </p>
            </div>
            <div className="px-3 py-1 rounded bg-[#050607] border border-[#1B2127] text-[10px] font-mono text-[#6F7882]">
              CONTINUOUS OPERATIONAL LOOP
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
