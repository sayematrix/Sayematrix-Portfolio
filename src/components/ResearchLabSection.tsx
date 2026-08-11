import React, { useState } from 'react';
import { RESEARCH_PAPERS } from '../data/researchPapers';
import { ResearchPaper } from '../types';
import { BookOpen, Search, Clock, Calendar, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface ResearchLabSectionProps {
  onSelectPaper: (paperId: string) => void;
}

export const ResearchLabSection: React.FC<ResearchLabSectionProps> = ({ onSelectPaper }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'ALL',
    'QUANTITATIVE FINANCE',
    'AI & AGENTIC SYSTEMS',
    'MACROECONOMICS',
    'SYSTEMS ARCHITECTURE'
  ];

  const filteredPapers = RESEARCH_PAPERS.filter((paper) => {
    const matchesCategory = selectedCategory === 'ALL' || paper.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#101216] border-b border-[#242830] relative select-none" id="research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#14171C] border border-[#242830] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest font-semibold">
                RESEARCH PUBLICATION LIBRARY & INTELLECTUAL ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F5F5] uppercase tracking-tight">
              RESEARCH <span className="text-emerald-400">LAB</span>
            </h2>
            <p className="text-sm font-sans text-[#9299A5] mt-2 max-w-2xl leading-relaxed">
              Standalone academic monographs, quantitative financial studies, and multi-agent AI research papers authored by SAYEM.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#9299A5] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research papers by topic, title, key..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[#08090B] border border-[#242830] text-xs font-mono text-[#F5F5F5] placeholder-[#9299A5] focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#242830]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono uppercase transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/40 font-bold'
                  : 'bg-[#08090B] text-[#9299A5] border border-[#242830] hover:text-[#F5F5F5] hover:bg-[#14171C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="group p-6 rounded-2xl bg-[#08090B] border border-[#242830] hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Paper Header Metadata Line */}
                <div className="flex items-center justify-between gap-2 border-b border-[#242830] pb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    {paper.paperNumber}
                  </span>
                  <span className="text-[10px] font-mono text-[#F5F5F5] px-2 py-0.5 rounded bg-[#14171C] border border-[#242830]">
                    {paper.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest block mb-1">
                    {paper.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-sans font-extrabold text-[#F5F5F5] group-hover:text-emerald-400 transition-colors leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90 mt-1">
                    {paper.subtitle}
                  </p>
                </div>

                {/* Author Info & Date */}
                <div className="flex items-center justify-between text-[11px] font-mono text-[#9299A5] bg-[#101216] p-2.5 rounded-lg border border-[#242830]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[#F5F5F5] font-semibold">{paper.author}</span>
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
                <p className="text-xs font-sans text-[#9299A5] leading-relaxed line-clamp-3">
                  {paper.abstract}
                </p>

              </div>

              <div className="pt-6 mt-4 border-t border-[#242830]">
                {/* Keywords Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {paper.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 rounded bg-[#14171C] border border-[#242830] text-[9px] font-mono text-[#9299A5]"
                    >
                      #{kw}
                    </span>
                  ))}
                  {paper.keywords.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[9px] font-mono text-[#9299A5]">
                      +{paper.keywords.length - 3}
                    </span>
                  )}
                </div>

                {/* Read Research Button */}
                <button
                  onClick={() => onSelectPaper(paper.id)}
                  className="w-full py-2.5 rounded-xl bg-[#14171C] group-hover:bg-emerald-500/10 border border-[#242830] group-hover:border-emerald-500/40 text-xs font-mono font-bold text-[#F5F5F5] group-hover:text-emerald-400 flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Read Research →</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
