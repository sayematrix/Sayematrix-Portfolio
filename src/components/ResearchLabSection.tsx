import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESEARCH_PAPERS } from '../data/researchPapers';
import { ResearchPaper } from '../types';
import { BookOpen, Search, Clock, Calendar, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

interface ResearchLabSectionProps {
  onSelectPaper: (paperId: string) => void;
  onSeeMore?: () => void;
}

export const ResearchLabSection: React.FC<ResearchLabSectionProps> = ({
  onSelectPaper,
  onSeeMore
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sliced to exactly 6 research papers for the main Research Lab page
  const mainPapers = RESEARCH_PAPERS.slice(0, 6);

  const categories = [
    'ALL',
    'QUANTITATIVE FINANCE',
    'AI & AGENTIC SYSTEMS',
    'MACROECONOMICS',
    'SYSTEMS ARCHITECTURE'
  ];

  const filteredPapers = mainPapers.filter((paper) => {
    const matchesCategory = selectedCategory === 'ALL' || paper.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.keywords.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#050607] border-b border-[#1B2127] relative select-none" id="research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A0D10] border border-[#1B2127] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#42B8E8]" />
              <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest font-semibold">
                RESEARCH PUBLICATION LIBRARY &amp; INTELLECTUAL ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F7FA] uppercase tracking-tight">
              RESEARCH <span className="text-[#42B8E8]">LAB</span>
            </h2>
            <p className="text-sm font-sans text-[#A7B0BA] mt-2 max-w-2xl leading-relaxed">
              Standalone academic monographs, quantitative financial studies, and multi-agent AI research papers authored by SAYEM.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#6F7882] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research papers by topic, title, key..."
              className="w-full pl-9 pr-4 py-2.5 rounded-md bg-[#0A0D10] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] placeholder-[#6F7882] focus:outline-none focus:border-[#2D9CDB]/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#1B2127]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono uppercase transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2D9CDB]/15 text-[#42B8E8] border border-[#2D9CDB]/40 font-bold shadow-sm'
                  : 'bg-[#0A0D10] text-[#A7B0BA] border border-[#1B2127] hover:text-[#F5F7FA] hover:bg-[#151A20]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Research Papers Grid (Main 6 Papers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPapers.map((paper, idx) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="group p-6 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 hover:bg-[#151A20] transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-4">
                  
                  {/* Paper Header Metadata Line */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#1B2127] pb-3">
                    <span className="font-mono text-xs font-bold text-[#42B8E8] px-2 py-0.5 rounded bg-[#2D9CDB]/10 border border-[#2D9CDB]/30">
                      {paper.paperNumber}
                    </span>
                    <span className="text-[10px] font-mono text-[#F5F7FA] px-2 py-0.5 rounded bg-[#050607] border border-[#1B2127]">
                      {paper.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <span className="text-[10px] font-mono text-[#6F7882] uppercase tracking-widest block mb-1">
                      {paper.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-sans font-extrabold text-[#F5F7FA] group-hover:text-[#42B8E8] transition-colors leading-snug">
                      {paper.title}
                    </h3>
                    <p className="text-xs font-mono text-[#42B8E8]/90 mt-1">
                      {paper.subtitle}
                    </p>
                  </div>

                  {/* Author Info & Date */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#A7B0BA] bg-[#050607] p-2.5 rounded-md border border-[#1B2127]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#42B8E8]" />
                      <span className="text-[#F5F7FA] font-semibold">{paper.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#42B8E8]" />
                        {paper.date.split(',')[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#42B8E8]" />
                        {paper.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Abstract Preview */}
                  <p className="text-xs font-sans text-[#A7B0BA] leading-relaxed line-clamp-3">
                    {paper.abstract}
                  </p>

                </div>

                <div className="pt-6 mt-4 border-t border-[#1B2127]">
                  {/* Keywords Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {paper.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="px-2 py-0.5 rounded bg-[#050607] border border-[#1B2127] text-[9px] font-mono text-[#A7B0BA]"
                      >
                        #{kw}
                      </span>
                    ))}
                    {paper.keywords.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono text-[#6F7882]">
                        +{paper.keywords.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read Research Button */}
                  <button
                    onClick={() => onSelectPaper(paper.id)}
                    className="w-full py-2.5 rounded-md bg-[#050607] group-hover:bg-[#2D9CDB]/10 border border-[#1B2127] group-hover:border-[#2D9CDB]/40 text-xs font-mono font-bold text-[#F5F7FA] group-hover:text-[#42B8E8] flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#42B8E8]" />
                    <span>Read Research →</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state when searching main 6 papers */}
        {filteredPapers.length === 0 && (
          <div className="text-center py-12 px-4 bg-[#0A0D10] rounded-lg border border-[#1B2127] mt-6">
            <p className="text-xs font-mono text-[#A7B0BA]">No papers in the main 6 match your query.</p>
          </div>
        )}

        {/* See More Research Button -> Navigates to dedicated Research Papers page */}
        <div className="mt-12 text-center">
          <button
            onClick={onSeeMore}
            className="px-8 py-3.5 rounded-md bg-[#0A0D10] hover:bg-[#2D9CDB]/10 border border-[#1B2127] hover:border-[#2D9CDB]/40 text-xs font-mono font-bold text-[#F5F7FA] hover:text-[#42B8E8] inline-flex items-center gap-2.5 transition-all shadow-md cursor-pointer group"
            id="see-more-research-btn"
          >
            <span>See More Research (10 Additional Papers)</span>
            <ArrowRight className="w-4 h-4 text-[#42B8E8] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};


