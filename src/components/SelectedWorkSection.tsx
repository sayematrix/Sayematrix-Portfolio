import React, { useState } from 'react';
import { SELECTED_PROJECTS } from '../data/content';
import { Project } from '../types';
import { ArrowUpRight, FolderGit2, Sparkles, Filter } from 'lucide-react';

interface SelectedWorkSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject }) => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const allTags = ['ALL', ...Array.from(new Set(SELECTED_PROJECTS.flatMap(p => p.tags)))];

  const filteredProjects = selectedTag === 'ALL'
    ? SELECTED_PROJECTS
    : SELECTED_PROJECTS.filter(p => p.tags.includes(selectedTag));

  return (
    <section className="py-20 bg-[#041618] border-b border-[#0E353C] relative" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#061D20] border border-[#0E353C] mb-2">
              <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">
                PORTFOLIO & SYSTEM ASSETS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F8FAFC] uppercase tracking-tight">
              SELECTED <span className="text-emerald-400">WORK</span>
            </h2>
            <p className="text-sm font-sans text-[#94A3B8] mt-2">
              Research, systems, experiments, and digital infrastructure.
            </p>
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#061D20] p-1.5 rounded-lg border border-[#0E353C]">
            <span className="text-[10px] font-mono text-[#94A3B8] px-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-emerald-400" /> FILTER:
            </span>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-emerald-500 text-[#041618] font-bold shadow-sm'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0A2B30]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 sm:p-8 rounded-xl bg-[#061D20] border border-[#0E353C] hover:border-emerald-500/60 hover:bg-[#082428] transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Large Number Header & Status */}
                <div className="flex items-center justify-between pb-4 border-b border-[#0E353C] mb-6">
                  <span className="font-mono text-4xl font-extrabold text-[#0E353C] group-hover:text-emerald-400 transition-colors">
                    {project.number}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#082226] border border-[#0E353C] text-[#94A3B8]">
                      STATUS: <strong className="text-emerald-400">{project.status}</strong>
                    </span>
                  </div>
                </div>

                {/* Title & Category */}
                <div className="space-y-2 mb-4">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#F8FAFC] group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm font-sans text-[#94A3B8] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#082226] border border-[#0E353C] text-[10px] font-mono text-[#94A3B8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-[#0E353C] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#94A3B8]">
                  ARCHITECTURE & ARCHIVE
                </span>

                <button
                  onClick={() => onSelectProject(project.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
