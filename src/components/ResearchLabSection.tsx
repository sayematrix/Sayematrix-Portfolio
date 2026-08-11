import React, { useState } from 'react';
import { RESEARCH_NOTES } from '../data/content';
import { ResearchNote } from '../types';
import { BookOpen, Search, Clock, Calendar, Tag, ArrowRight, Code } from 'lucide-react';

interface ResearchLabSectionProps {
  onSelectNote: (noteId: string) => void;
}

export const ResearchLabSection: React.FC<ResearchLabSectionProps> = ({ onSelectNote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'AI', 'AUTOMATION', 'FINANCE', 'MARKETS', 'QUANT', 'MACRO', 'STRATEGY'];

  const filteredNotes = RESEARCH_NOTES.filter(note => {
    const matchesCategory = selectedCategory === 'ALL' || note.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-[#101216] border-b border-[#242830] relative" id="research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14171C] border border-[#242830] mb-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest">
                QUANTITATIVE & TECHNICAL PAPERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F5F5] uppercase tracking-tight">
              RESEARCH <span className="text-purple-400">LAB</span>
            </h2>
            <p className="text-sm font-sans text-[#9299A5] mt-2">
              Explore. Understand. Test. Document.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#9299A5] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research notes..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#08090B] border border-[#242830] text-xs font-mono text-[#F5F5F5] placeholder-[#9299A5] focus:outline-none focus:border-purple-500/50"
            />
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 pb-4 border-b border-[#242830]/80">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 font-bold'
                  : 'bg-[#08090B] text-[#9299A5] border border-[#242830] hover:text-[#F5F5F5] hover:bg-[#14171C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="group p-6 rounded-xl bg-[#08090B] border border-[#242830] hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Note Number & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-purple-400 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30">
                    NOTE {note.noteNumber}
                  </span>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-[#9299A5]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#9299A5]" />
                      {note.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#9299A5]" />
                      {note.readTime}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-sans font-bold text-[#F5F5F5] group-hover:text-purple-300 transition-colors mb-2">
                  {note.title}
                </h3>
                <p className="text-xs font-mono text-purple-400/90 mb-3">
                  {note.subtitle}
                </p>

                {/* Excerpt */}
                <p className="text-xs font-sans text-[#9299A5] leading-relaxed mb-6 line-clamp-3">
                  {note.excerpt}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {note.tags.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#14171C] border border-[#242830] text-[9px] font-mono text-[#9299A5]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Read Button */}
                <button
                  onClick={() => onSelectNote(note.id)}
                  className="w-full py-2.5 rounded-lg bg-[#14171C] group-hover:bg-purple-500/10 border border-[#242830] group-hover:border-purple-500/40 text-xs font-mono font-bold text-[#F5F5F5] group-hover:text-purple-300 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Read Research</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
