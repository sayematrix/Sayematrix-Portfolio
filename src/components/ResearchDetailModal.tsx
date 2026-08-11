import React from 'react';
import { ResearchNote } from '../types';
import { X, BookOpen, Clock, Calendar, CheckCircle2, ArrowLeft, Copy, Code2 } from 'lucide-react';

interface ResearchDetailModalProps {
  note: ResearchNote | null;
  onClose: () => void;
}

export const ResearchDetailModal: React.FC<ResearchDetailModalProps> = ({ note, onClose }) => {
  if (!note) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08090B]/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="w-full max-w-4xl my-8 bg-[#101216] border border-[#242830] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header Bar */}
        <div className="px-6 py-4 bg-[#14171C] border-b border-[#242830] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-purple-400 px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/30">
              RESEARCH {note.noteNumber}
            </span>
            <span className="text-xs font-mono text-[#9299A5] uppercase hidden sm:inline">
              CATEGORY: {note.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#101216] border border-[#242830] text-[#9299A5] hover:text-[#F5F5F5] hover:border-purple-500/40 transition-colors"
            aria-label="Close research modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-[#9299A5]">
          
          {/* Note Metadata Header */}
          <div className="space-y-3 border-b border-[#242830] pb-6">
            <div className="flex items-center gap-4 text-xs font-mono text-[#9299A5]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-400" /> {note.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-purple-400" /> {note.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F5] tracking-tight">
              {note.title}
            </h2>
            <p className="text-sm font-mono text-purple-300">
              {note.subtitle}
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-5 rounded-xl bg-purple-500/5 border border-purple-500/30 space-y-3">
            <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest block flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" /> EXECUTIVE RESEARCH TAKEAWAYS
            </span>
            <ul className="space-y-2 text-xs text-[#F5F5F5]">
              {note.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-purple-400 font-bold">{idx + 1}.</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet Box (if available) */}
          {note.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#9299A5]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Code2 className="w-4 h-4" /> CODE / MATHEMATICAL SPECIFICATION
                </span>
                <span>PYTHON / TYPESCRIPT</span>
              </div>
              <pre className="p-4 rounded-xl bg-[#08090B] border border-[#242830] text-xs font-mono text-emerald-300 overflow-x-auto">
                <code>{note.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Article Text Content */}
          <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#9299A5] space-y-4 leading-relaxed font-sans">
            {note.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-base font-mono font-bold text-[#F5F5F5] mt-6 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Tags Footer */}
          <div className="pt-4 border-t border-[#242830] flex flex-wrap gap-1.5">
            {note.tags.map(t => (
              <span key={t} className="px-2.5 py-1 rounded bg-[#14171C] border border-[#242830] text-xs font-mono text-[#9299A5]">
                #{t}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#14171C] border-t border-[#242830] flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101216] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-purple-500/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-purple-400" />
            <span>Back to Research Lab</span>
          </button>

          <span className="text-[10px] font-mono text-[#9299A5]">
            SAYEMATRIX RESEARCH LIBRARY
          </span>
        </div>

      </div>
    </div>
  );
};
