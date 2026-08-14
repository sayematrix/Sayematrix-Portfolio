import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESEARCH_PAPERS } from '../data/researchPapers';
import {
  BookOpen,
  Search,
  Clock,
  Calendar,
  ShieldCheck,
  FileText,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Cpu
} from 'lucide-react';

interface ResearchPapersPageProps {
  onSelectPaper: (paperId: string) => void;
  onBackToMain: () => void;
}

export const ResearchPapersPage: React.FC<ResearchPapersPageProps> = ({
  onSelectPaper,
  onBackToMain
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Additional 10 research papers (index 6 through 15)
  const additionalPapers = RESEARCH_PAPERS.slice(6);

  const categories = [
    'ALL',
    'QUANTITATIVE FINANCE',
    'AI & AGENTIC SYSTEMS',
    'MACROECONOMICS',
    'SYSTEMS ARCHITECTURE'
  ];

  const filteredPapers = additionalPapers.filter((paper) => {
    const matchesCategory = selectedCategory === 'ALL' || paper.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#041618] text-[#F8FAFC] pt-28 pb-24 selection:bg-emerald-500 selection:text-[#031214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#0E353C]">
          <button
            onClick={onBackToMain}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#061D20] hover:bg-[#082226] border border-[#0E353C] hover:border-emerald-500/40 text-xs font-mono text-[#94A3B8] hover:text-emerald-400 transition-all cursor-pointer shadow-md group w-fit"
            id="back-to-main-lab-btn"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Main Research Lab</span>
          </button>

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#94A3B8]">
            <span className="hover:text-[#F8FAFC] cursor-pointer" onClick={onBackToMain}>Home</span>
            <span>/</span>
            <span className="hover:text-[#F8FAFC] cursor-pointer" onClick={onBackToMain}>Research Lab</span>
            <span>/</span>
            <span className="text-emerald-400 font-semibold">Extended Library (10 Papers)</span>
          </div>
        </div>

        {/* Page Header Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              EXTENDED RESEARCH LIBRARY · 10 SPECIALIZED PAPERS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F8FAFC] uppercase tracking-tight">
            RESEARCH <span className="text-emerald-400">PAPERS</span> & EXTENDED ARCHIVE
          </h1>

          <p className="text-sm sm:text-base font-sans text-[#94A3B8] mt-3 max-w-3xl leading-relaxed">
            Extended repository of technical studies, quantitative trading system architectures, multi-agent AI research, and macroeconomic liquidity models authored by SAYEM.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            <div className="p-3.5 rounded-xl bg-[#061D20] border border-[#0E353C] flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-base font-mono font-bold text-[#F8FAFC]">10 Papers</span>
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Extended Collection</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#061D20] border border-[#0E353C] flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-base font-mono font-bold text-[#F8FAFC]">AI × Quant</span>
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Core Focus Areas</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#061D20] border border-[#0E353C] flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-base font-mono font-bold text-[#F8FAFC]">5 Statuses</span>
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Working / Studies</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#061D20] border border-[#0E353C] flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-base font-mono font-bold text-[#F8FAFC]">Peer Quality</span>
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase">Verified Methods</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-[#061D20] border border-[#0E353C]">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 font-bold shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                    : 'bg-[#031214] text-[#94A3B8] border border-[#0E353C] hover:text-[#F8FAFC] hover:bg-[#082226]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search extended papers..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#031214] border border-[#0E353C] text-xs font-mono text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Extended Research Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPapers.map((paper, idx) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="group p-6 rounded-2xl bg-[#061D20] border border-[#0E353C] hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  
                  {/* Paper Header Metadata Line */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#0E353C] pb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                      {paper.paperNumber}
                    </span>
                    <span className="text-[10px] font-mono text-[#F8FAFC] px-2 py-0.5 rounded bg-[#031214] border border-[#0E353C]">
                      {paper.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest block mb-1">
                      {paper.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-sans font-extrabold text-[#F8FAFC] group-hover:text-emerald-400 transition-colors leading-snug">
                      {paper.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400/90 mt-1">
                      {paper.subtitle}
                    </p>
                  </div>

                  {/* Author Info & Date */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] bg-[#031214] p-2.5 rounded-lg border border-[#0E353C]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[#F8FAFC] font-semibold">{paper.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-400" />
                        {paper.date.split(',')[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        {paper.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Abstract Preview */}
                  <p className="text-xs font-sans text-[#94A3B8] leading-relaxed line-clamp-3">
                    {paper.abstract}
                  </p>

                </div>

                <div className="pt-6 mt-4 border-t border-[#0E353C]">
                  {/* Keywords Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {paper.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="px-2 py-0.5 rounded bg-[#031214] border border-[#0E353C] text-[9px] font-mono text-[#94A3B8]"
                      >
                        #{kw}
                      </span>
                    ))}
                    {paper.keywords.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono text-[#94A3B8]">
                        +{paper.keywords.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read Research Button */}
                  <button
                    onClick={() => onSelectPaper(paper.id)}
                    className="w-full py-2.5 rounded-xl bg-[#031214] group-hover:bg-emerald-500/10 border border-[#0E353C] group-hover:border-emerald-500/40 text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-emerald-400 flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Read Research →</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search State */}
        {filteredPapers.length === 0 && (
          <div className="text-center py-16 px-4 bg-[#061D20] rounded-2xl border border-[#0E353C]">
            <BookOpen className="w-10 h-10 text-[#94A3B8] mx-auto mb-3" />
            <h3 className="text-lg font-mono font-bold text-[#F8FAFC]">No matching extended research papers found</h3>
            <p className="text-xs font-mono text-[#94A3B8] mt-1">Try adjusting your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#031214] border border-[#0E353C] text-xs font-mono text-emerald-400 hover:bg-emerald-500/10 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Return Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#061D20] border border-[#0E353C] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TOTAL CORPUS: 16 RESEARCH PAPERS</span>
            </div>
            <h3 className="text-xl font-sans font-bold text-[#F8FAFC]">
              Return to Primary Research Lab
            </h3>
            <p className="text-xs font-sans text-[#94A3B8] mt-1 max-w-xl">
              Navigate back to the main Research Lab landing section to view the primary monographs and core portfolio highlights.
            </p>
          </div>

          <button
            onClick={onBackToMain}
            className="px-6 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-400 flex items-center gap-2 transition-all shadow-lg cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Research Lab</span>
          </button>
        </div>

      </div>
    </div>
  );
};
