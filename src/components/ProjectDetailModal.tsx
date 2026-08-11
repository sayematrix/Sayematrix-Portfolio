import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, ArrowLeft, Layers, Cpu, Code2, AlertTriangle, Lightbulb } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08090B]/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="w-full max-w-4xl my-8 bg-[#101216] border border-[#242830] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header Bar */}
        <div className="px-6 py-4 bg-[#14171C] border-b border-[#242830] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-[#9299A5] uppercase hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#101216] border border-[#242830] text-[#9299A5] hover:text-[#F5F5F5] hover:border-emerald-500/40 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-[#9299A5]">
          
          {/* Header Title & Status */}
          <div className="space-y-2 border-b border-[#242830] pb-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                STATUS: {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-sans text-[#9299A5] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Grid Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#14171C] border border-[#242830] space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                OVERVIEW
              </span>
              <p className="text-xs text-[#F5F5F5] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#14171C] border border-[#242830] space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> PROBLEM STATEMENT
              </span>
              <p className="text-xs text-[#F5F5F5] leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="p-5 rounded-xl bg-[#14171C] border border-[#242830] space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" /> SYSTEM APPROACH
            </span>
            <p className="text-xs text-[#F5F5F5] leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* System Architecture */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#F5F5F5] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" /> SYSTEM ARCHITECTURE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#14171C] border border-[#242830] text-xs font-mono text-[#F5F5F5] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-[#F5F5F5] uppercase tracking-widest flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-400" /> TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-[#14171C] border border-[#242830] text-xs font-mono text-emerald-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-[#F5F5F5] uppercase tracking-widest">
                ENGINEERING PROCESS
              </h3>
              <ul className="space-y-2 text-xs text-[#9299A5]">
                {project.process.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 text-[10px]">{idx + 1}.</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results & Key Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/30 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                EMPIRICAL RESULTS
              </span>
              <ul className="space-y-1.5 text-xs text-[#F5F5F5]">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#14171C] border border-[#242830] space-y-2">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block">
                SYSTEM LEARNINGS
              </span>
              <ul className="space-y-1.5 text-xs text-[#9299A5]">
                {project.learnings.map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="p-5 rounded-xl bg-[#14171C] border border-[#242830] space-y-2">
            <span className="text-xs font-mono font-bold text-[#F5F5F5] uppercase tracking-widest block">
              NEXT STEPS & EXPANSION
            </span>
            <ul className="space-y-1.5 text-xs text-[#9299A5]">
              {project.nextSteps.map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400">→</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-[#14171C] border-t border-[#242830] flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101216] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-emerald-500/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
            <span>Back to Work</span>
          </button>

          <span className="text-[10px] font-mono text-[#9299A5]">
            SAYEMATRIX PROJECT ARCHIVE
          </span>
        </div>

      </div>
    </div>
  );
};
