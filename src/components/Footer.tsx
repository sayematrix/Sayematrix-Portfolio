import React from 'react';
import { NavigationPage } from '../types';
import { PERSONAL_INFO } from '../data/content';
import { ShieldCheck, ArrowUpRight, Terminal } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: NavigationPage) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onNavigateSection }) => {
  const handleNav = (page: NavigationPage, sectionId?: string) => {
    setActivePage(page);
    if (page === 'home' && sectionId) {
      setTimeout(() => onNavigateSection(sectionId), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#08090B] border-t border-[#242830] pt-16 pb-12 relative text-[#9299A5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                S
              </div>
              <span className="font-sans text-lg font-bold text-[#F5F5F5] tracking-widest uppercase">
                SAYEMATRIX
              </span>
            </div>

            <p className="text-sm font-mono text-emerald-400">
              Learn. Build. Create. Grow.
            </p>

            <p className="text-xs font-sans text-[#9299A5] leading-relaxed max-w-sm">
              An independent digital operating system, research lab, and venture hub created by SAYEM.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {['AI', 'AUTOMATION', 'FINTECH', 'QUANT', 'RESEARCH', 'SYSTEMS', 'VENTURES'].map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded bg-[#101216] border border-[#242830] text-[9px] font-mono text-[#9299A5]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-widest block">
              SYSTEM NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button onClick={() => handleNav('home', 'about')} className="hover:text-[#F5F5F5] transition-colors">
                  01. About SAYEM
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', 'work')} className="hover:text-[#F5F5F5] transition-colors">
                  02. Selected Work
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', 'research')} className="hover:text-[#F5F5F5] transition-colors">
                  03. Research Lab
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', 'ventures')} className="hover:text-[#F5F5F5] transition-colors">
                  04. SANR & Ventures
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', 'ecosystem')} className="hover:text-[#F5F5F5] transition-colors">
                  05. SAYEMATRIX Ecosystem
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cv')} className="hover:text-[#F5F5F5] transition-colors">
                  06. CV / Resume
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Legal Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-widest block">
              CONNECT & SOCIALS
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="hover:text-[#F5F5F5] flex items-center justify-between transition-colors"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5F5] flex items-center justify-between transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5F5] flex items-center justify-between transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5F5] flex items-center justify-between transition-colors"
                >
                  <span>SAYEMATRIX (IG)</span>
                  <ArrowUpRight className="w-3 h-3 text-pink-400" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5F5] flex items-center justify-between transition-colors"
                >
                  <span>SAYEMATRIX (YT)</span>
                  <ArrowUpRight className="w-3 h-3 text-red-400" />
                </a>
              </li>
              <li className="pt-2 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                ECOSYSTEM BRANDS
              </li>
              <li>
                <a href="https://www.instagram.com/guide2faith/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F5F5] flex items-center justify-between text-[11px] transition-colors">
                  <span>GUID2FAITH</span>
                  <span className="text-[10px] text-pink-400 font-bold">IG ↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/neuromatrixo/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F5F5] flex items-center justify-between text-[11px] transition-colors">
                  <span>NEUROMATRIX</span>
                  <span className="text-[10px] text-pink-400 font-bold">IG ↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/wealtrixo/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F5F5] flex items-center justify-between text-[11px] transition-colors">
                  <span>WEALTRIXO</span>
                  <span className="text-[10px] text-pink-400 font-bold">IG ↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/artenixo/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F5F5] flex items-center justify-between text-[11px] transition-colors">
                  <span>ARTENIXO</span>
                  <span className="text-[10px] text-pink-400 font-bold">IG ↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/top10.insights/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F5F5] flex items-center justify-between text-[11px] transition-colors">
                  <span>TOP10.INSIGHTS</span>
                  <span className="text-[10px] text-pink-400 font-bold">IG ↗</span>
                </a>
              </li>
              <li className="pt-2 text-[10px] text-[#9299A5]">
                PRIMARY VENTURE: <strong className="text-[#F5F5F5] block">SANR Corporation Limited</strong>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#242830] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9299A5]">
          <div>
            © 2026 SAYEM. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>SAYEMATRIX OS v2.6 / ONLINE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
