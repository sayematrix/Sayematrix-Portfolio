import React, { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { PERSONAL_INFO, SELECTED_PROJECTS, RESEARCH_NOTES, ECOSYSTEM_DOMAINS } from '../data/content';
import { Search, Command, ArrowRight, FileText, Compass, Briefcase, BookOpen, Layers, User, Mail, Linkedin, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  setActivePage: (page: NavigationPage) => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectProject?: (projectId: string) => void;
  onSelectNote?: (noteId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  setActivePage,
  onNavigateSection,
  onSelectProject,
  onSelectNote,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAction = (type: 'page' | 'section' | 'project' | 'note' | 'external', value: string) => {
    if (type === 'page') {
      setActivePage(value as NavigationPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (type === 'section') {
      setActivePage('home');
      setTimeout(() => onNavigateSection(value), 50);
    } else if (type === 'project' && onSelectProject) {
      setActivePage('home');
      setTimeout(() => {
        onNavigateSection('work');
        onSelectProject(value);
      }, 50);
    } else if (type === 'note' && onSelectNote) {
      setActivePage('home');
      setTimeout(() => {
        onNavigateSection('research');
        onSelectNote(value);
      }, 50);
    } else if (type === 'external') {
      window.open(value, '_blank');
    }
    onClose();
  };

  const filteredProjects = SELECTED_PROJECTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredNotes = RESEARCH_NOTES.filter(n =>
    n.title.toLowerCase().includes(query.toLowerCase()) || n.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#08090B]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#101216] border border-[#242830] rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#242830] bg-[#14171C]">
          <Search className="w-4 h-4 text-emerald-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search SAYEMATRIX (Projects, Research, Ecosystem, CV, Contact)..."
            className="w-full bg-transparent text-sm font-mono text-[#F5F5F5] placeholder-[#9299A5] focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-[#101216] border border-[#242830] text-[#9299A5] hover:text-[#F5F5F5]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Main Navigation Options */}
          {!query && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9299A5] px-2">
                CORE NAVIGATION
              </span>
              <div className="mt-1 space-y-1">
                <button
                  onClick={() => handleAction('section', 'about')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-xs font-mono text-[#F5F5F5] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    <span>About SAYEM & Professional Profile</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#9299A5]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'work')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-xs font-mono text-[#F5F5F5] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Selected Work & Systems</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#9299A5]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'research')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-xs font-mono text-[#F5F5F5] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Research Lab Notes</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#9299A5]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'ventures')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-xs font-mono text-[#F5F5F5] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ventures (SANR Corp & SAYEMATRIX)</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#9299A5]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'ecosystem')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-xs font-mono text-[#F5F5F5] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SAYEMATRIX Ecosystem Domains</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#9299A5]" />
                </button>

                <button
                  onClick={() => handleAction('page', 'cv')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-xs font-mono text-[#F5F5F5] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                    <span>View / Download CV</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#9299A5]" />
                </button>
              </div>
            </div>
          )}

          {/* Filtered Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9299A5] px-2">
                PROJECTS ({filteredProjects.length})
              </span>
              <div className="mt-1 space-y-1">
                {filteredProjects.map(proj => (
                  <button
                    key={proj.id}
                    onClick={() => handleAction('project', proj.id)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-left transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">{proj.number}</span>
                        <span className="text-xs font-mono font-medium text-[#F5F5F5]">{proj.title}</span>
                      </div>
                      <p className="text-[11px] font-mono text-[#9299A5] truncate max-w-md">{proj.description}</p>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#9299A5]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filtered Research Notes */}
          {filteredNotes.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9299A5] px-2">
                RESEARCH NOTES ({filteredNotes.length})
              </span>
              <div className="mt-1 space-y-1">
                {filteredNotes.map(note => (
                  <button
                    key={note.id}
                    onClick={() => handleAction('note', note.id)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-left transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-cyan-400 font-bold">{note.noteNumber}</span>
                        <span className="text-xs font-mono font-medium text-[#F5F5F5]">{note.title}</span>
                      </div>
                      <p className="text-[11px] font-mono text-[#9299A5] truncate max-w-md">{note.subtitle}</p>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#9299A5]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick External Actions */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9299A5] px-2">
              EXTERNAL LINKS & CONTACT
            </span>
            <div className="mt-1 space-y-1">
              <button
                onClick={() => handleAction('external', PERSONAL_INFO.contact.linkedin)}
                className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-xs font-mono text-[#F5F5F5] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn Profile ↗</span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#9299A5]" />
              </button>

              <button
                onClick={() => handleAction('external', `mailto:${PERSONAL_INFO.contact.email}`)}
                className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] text-xs font-mono text-[#F5F5F5] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Email Direct Contact ({PERSONAL_INFO.contact.email})</span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#9299A5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-[#242830] bg-[#14171C] flex items-center justify-between text-[11px] font-mono text-[#9299A5]">
          <div className="flex items-center gap-2">
            <Command className="w-3 h-3 text-emerald-400" />
            <span>SAYEMATRIX OS Search</span>
          </div>
          <div className="flex items-center gap-3">
            <span>ESC to Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
