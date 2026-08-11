import React from 'react';
import { ArrowRight, Terminal, Layers, Network } from 'lucide-react';

export const KnowledgeWorkflow: React.FC = () => {
  const pipelineSteps = [
    { title: 'QUESTION', desc: 'Identify core problem' },
    { title: 'RESEARCH', desc: 'Study literature & data' },
    { title: 'ANALYSIS', desc: 'Model parameters' },
    { title: 'EXPERIMENT', desc: 'Prototype code' },
    { title: 'SYSTEM', desc: 'Engineer production node' },
    { title: 'APPLICATION', desc: 'Deploy into ventures' },
    { title: 'DOCUMENTATION', desc: 'Publish insight & asset' }
  ];

  return (
    <section className="py-16 bg-[#08090B] border-b border-[#242830] relative overflow-hidden" id="knowledge-workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
            KNOWLEDGE TRANSFORMATION PIPELINE
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-extrabold text-[#F5F5F5] uppercase tracking-tight">
            FROM IDEAS TO <span className="text-emerald-400">SYSTEMS</span>
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#9299A5] mt-2">
            SAYEMATRIX turns knowledge and research into practical systems, tools, content, and digital assets.
          </p>
        </div>

        {/* Pipeline Horizontal Diagram */}
        <div className="bg-[#101216] p-6 rounded-xl border border-[#242830] overflow-x-auto">
          <div className="flex items-center min-w-[800px] justify-between">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <div className="flex flex-col items-center text-center p-3 rounded-lg bg-[#14171C] border border-[#242830] hover:border-emerald-500/40 transition-all w-28">
                  <span className="text-[9px] font-mono text-emerald-400 font-bold mb-1">0{idx + 1}</span>
                  <span className="text-xs font-mono font-bold text-[#F5F5F5] uppercase tracking-wider mb-1">
                    {step.title}
                  </span>
                  <span className="text-[10px] font-sans text-[#9299A5]">
                    {step.desc}
                  </span>
                </div>

                {idx < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-emerald-500/60 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
