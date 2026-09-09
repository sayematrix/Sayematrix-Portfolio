import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, ArrowLeft, Layers, Cpu, Code2, AlertTriangle, Lightbulb } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050607]/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-4xl my-8 bg-[#0A0D10] border border-[#1B2127] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header Bar */}
        <div className="px-6 py-4 bg-[#0E1217] border-b border-[#1B2127] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#42B8E8] px-2.5 py-1 rounded bg-[#2D9CDB]/10 border border-[#2D9CDB]/30">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-[#A7B0BA] uppercase hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#0A0D10] border border-[#1B2127] text-[#A7B0BA] hover:text-[#F5F7FA] hover:border-[#2D9CDB]/40 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-[#A7B0BA]">
          
          {/* Header Title & Status */}
          <div className="space-y-2 border-b border-[#1B2127] pb-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#2D9CDB]/10 text-[#42B8E8] border border-[#2D9CDB]/30">
                STATUS: {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-sans text-[#A7B0BA] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Grid Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-2">
              <span className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest block">
                OVERVIEW
              </span>
              <p className="text-xs text-[#F5F7FA] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-2">
              <span className="text-xs font-mono font-bold text-[#7DD3FC] uppercase tracking-widest block flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> PROBLEM STATEMENT
              </span>
              <p className="text-xs text-[#F5F7FA] leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="p-5 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-2">
            <span className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest block flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" /> SYSTEM APPROACH
            </span>
            <p className="text-xs text-[#F5F7FA] leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* System Architecture */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#F5F7FA] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#42B8E8]" /> SYSTEM ARCHITECTURE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#42B8E8]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-[#F5F7FA] uppercase tracking-widest flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#42B8E8]" /> TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#42B8E8]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-[#F5F7FA] uppercase tracking-widest">
                ENGINEERING PROCESS
              </h3>
              <ul className="space-y-2 text-xs text-[#A7B0BA]">
                {project.process.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-[#42B8E8] text-[10px]">{idx + 1}.</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results & Key Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-[#2D9CDB]/5 border border-[#2D9CDB]/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest block">
                EMPIRICAL RESULTS
              </span>
              <ul className="space-y-1.5 text-xs text-[#F5F7FA]">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#42B8E8] shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-2">
              <span className="text-xs font-mono font-bold text-[#7DD3FC] uppercase tracking-widest block">
                SYSTEM LEARNINGS
              </span>
              <ul className="space-y-1.5 text-xs text-[#A7B0BA]">
                {project.learnings.map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#42B8E8]">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="p-5 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-2">
            <span className="text-xs font-mono font-bold text-[#F5F7FA] uppercase tracking-widest block">
              NEXT STEPS &amp; EXPANSION
            </span>
            <ul className="space-y-1.5 text-xs text-[#A7B0BA]">
              {project.nextSteps.map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#42B8E8]">→</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-[#0E1217] border-t border-[#1B2127] flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A0D10] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] hover:border-[#2D9CDB]/40 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#42B8E8]" />
            <span>Back to Work</span>
          </button>

          <span className="text-[10px] font-mono text-[#6F7882]">
            SAYEMATRIX PROJECT ARCHIVE
          </span>
        </div>

      </div>
    </div>
  );
};
