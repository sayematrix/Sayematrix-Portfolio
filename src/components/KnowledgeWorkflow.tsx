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
    <section className="py-16 bg-[#050607] border-b border-[#1B2127] relative overflow-hidden" id="knowledge-workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-mono text-[#42B8E8] uppercase tracking-widest block mb-1">
            KNOWLEDGE TRANSFORMATION PIPELINE
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-extrabold text-[#F5F7FA] uppercase tracking-tight">
            FROM IDEAS TO <span className="text-[#42B8E8]">SYSTEMS</span>
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#A7B0BA] mt-2">
            SAYEMATRIX turns knowledge and research into practical systems, tools, content, and digital assets.
          </p>
        </div>

        {/* Pipeline Horizontal Diagram */}
        <div className="bg-[#0A0D10] p-6 rounded-lg border border-[#1B2127] overflow-x-auto">
          <div className="flex items-center min-w-[800px] justify-between">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <div className="flex flex-col items-center text-center p-3 rounded-md bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 hover:bg-[#151A20] transition-all w-28">
                  <span className="text-[9px] font-mono text-[#42B8E8] font-bold mb-1">0{idx + 1}</span>
                  <span className="text-xs font-mono font-bold text-[#F5F7FA] uppercase tracking-wider mb-1">
                    {step.title}
                  </span>
                  <span className="text-[10px] font-sans text-[#A7B0BA]">
                    {step.desc}
                  </span>
                </div>

                {idx < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#2D9CDB]/60 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
