import React, { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { PERSONAL_INFO, SELECTED_PROJECTS, RESEARCH_NOTES, ECOSYSTEM_DOMAINS } from '../data/content';
import { Search, Command, ArrowRight, FileText, Compass, Briefcase, BookOpen, Layers, User, Mail, Linkedin, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  setActivePage: (page: NavigationPage) => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectProject?: (projectId: string) => void;
  onSelectNote?: (noteId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onOpen,
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
        } else if (onOpen) {
          setQuery('');
          onOpen();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onOpen]);

  if (!isOpen) return null;

  const handleAction = (type: 'page' | 'section' | 'project' | 'note' | 'external', value: string) => {
    if (type === 'page') {
      setActivePage(value as NavigationPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (type === 'section') {
      setActivePage('home');
      onNavigateSection(value);
    } else if (type === 'project' && onSelectProject) {
      setActivePage('home');
      onNavigateSection('projects');
      onSelectProject(value);
    } else if (type === 'note' && onSelectNote) {
      setActivePage('research');
      onSelectNote(value);
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#050607]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#0A0D10] border border-[#1B2127] rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#1B2127] bg-[#0E1217]">
          <Search className="w-4 h-4 text-[#42B8E8]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search SAYEMATRIX (Projects, Research, Ecosystem, Contact)..."
            className="w-full bg-transparent text-sm font-mono text-[#F5F7FA] placeholder-[#6F7882] focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-[#0A0D10] border border-[#1B2127] text-[#A7B0BA] hover:text-[#F5F7FA] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Main Navigation Options */}
          {!query && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#6F7882] px-2">
                CORE NAVIGATION
              </span>
              <div className="mt-1 space-y-1">
                <button
                  onClick={() => handleAction('section', 'about')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#42B8E8]" />
                    <span>About SAYEM &amp; Professional Profile</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#6F7882]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'projects')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#7DD3FC]" />
                    <span>Projects &amp; Systems</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#6F7882]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'research')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#42B8E8]" />
                    <span>Research Lab</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#6F7882]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'ventures')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-[#42B8E8]" />
                    <span>Ventures (QYNTIQ &amp; SAYEMATRIX)</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#6F7882]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'ecosystem')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#42B8E8]" />
                    <span>SAYEMATRIX Ecosystem Domains</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#6F7882]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'lifestyle')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-[#42B8E8]" />
                    <span>Lifestyle &amp; Human Systems</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#6F7882]" />
                </button>

                <button
                  onClick={() => handleAction('section', 'contact')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#42B8E8]" />
                    <span>Contact SAYEM</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#6F7882]" />
                </button>
              </div>
            </div>
          )}

          {/* Filtered Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#6F7882] px-2">
                PROJECTS ({filteredProjects.length})
              </span>
              <div className="mt-1 space-y-1">
                {filteredProjects.map(proj => (
                  <button
                    key={proj.id}
                    onClick={() => handleAction('project', proj.id)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-left transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#42B8E8] font-bold">{proj.number}</span>
                        <span className="text-xs font-mono font-medium text-[#F5F7FA]">{proj.title}</span>
                      </div>
                      <p className="text-[11px] font-mono text-[#A7B0BA] truncate max-w-md">{proj.description}</p>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#6F7882]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filtered Research Notes */}
          {filteredNotes.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#6F7882] px-2">
                RESEARCH NOTES ({filteredNotes.length})
              </span>
              <div className="mt-1 space-y-1">
                {filteredNotes.map(note => (
                  <button
                    key={note.id}
                    onClick={() => handleAction('note', note.id)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-left transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#42B8E8] font-bold">{note.noteNumber}</span>
                        <span className="text-xs font-mono font-medium text-[#F5F7FA]">{note.title}</span>
                      </div>
                      <p className="text-[11px] font-mono text-[#A7B0BA] truncate max-w-md">{note.subtitle}</p>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#6F7882]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick External Actions */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#6F7882] px-2">
              EXTERNAL LINKS &amp; CONTACT
            </span>
            <div className="mt-1 space-y-1">
              <button
                onClick={() => handleAction('external', PERSONAL_INFO.contact.linkedin)}
                className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-[#42B8E8]" />
                  <span>LinkedIn Profile ↗</span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#6F7882]" />
              </button>

              <button
                onClick={() => handleAction('external', `mailto:${PERSONAL_INFO.contact.email}`)}
                className="w-full flex items-center justify-between px-3 py-2 rounded bg-[#0E1217] hover:bg-[#151A20] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#42B8E8]" />
                  <span>Email Direct Contact ({PERSONAL_INFO.contact.email})</span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#6F7882]" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-[#1B2127] bg-[#0E1217] flex items-center justify-between text-[11px] font-mono text-[#6F7882]">
          <div className="flex items-center gap-2">
            <Command className="w-3 h-3 text-[#42B8E8]" />
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
