import React, { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { Search, ArrowUpRight, Menu, X, Command, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activePage: NavigationPage;
  setActivePage: (page: NavigationPage) => void;
  onOpenCommandPalette: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenCommandPalette,
  onNavigateSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: NavigationPage, sectionId?: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        onNavigateSection(sectionId);
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-[#101216]">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090B]/85 backdrop-blur-md border-b border-[#242830]/80 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="w-8 h-8 rounded-md bg-[#14171C] border border-[#242830] group-hover:border-emerald-500/50 transition-colors flex items-center justify-center relative overflow-hidden">
              <span className="font-mono text-xs font-bold text-emerald-400 tracking-tighter">S</span>
              <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="font-sans text-sm font-bold tracking-widest text-[#F5F5F5] group-hover:text-emerald-400 transition-colors">
                SAYEMATRIX
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101216]/80 p-1.5 rounded-full border border-[#242830]">
            <button
              onClick={() => handleNavClick('home', 'about')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activePage === 'about'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-[#9299A5] hover:text-[#F5F5F5] hover:bg-[#14171C]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('home', 'work')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activePage === 'work'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-[#9299A5] hover:text-[#F5F5F5] hover:bg-[#14171C]'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick('home', 'research')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activePage === 'research'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-[#9299A5] hover:text-[#F5F5F5] hover:bg-[#14171C]'
              }`}
            >
              Research
            </button>
            <button
              onClick={() => handleNavClick('home', 'ventures')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activePage === 'ventures'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-[#9299A5] hover:text-[#F5F5F5] hover:bg-[#14171C]'
              }`}
            >
              Ventures
            </button>
            <button
              onClick={() => handleNavClick('home', 'ecosystem')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activePage === 'ecosystem'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-[#9299A5] hover:text-[#F5F5F5] hover:bg-[#14171C]'
              }`}
            >
              Ecosystem
            </button>
            <button
              onClick={() => handleNavClick('cv')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activePage === 'cv'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-[#9299A5] hover:text-[#F5F5F5] hover:bg-[#14171C]'
              }`}
            >
              CV
            </button>
            <button
              onClick={() => handleNavClick('home', 'contact')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activePage === 'contact'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-[#9299A5] hover:text-[#F5F5F5] hover:bg-[#14171C]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3">
            {/* Command Palette Trigger Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#101216] border border-[#242830] text-xs font-mono text-[#9299A5] hover:text-[#F5F5F5] hover:border-emerald-500/40 transition-all"
              id="cmd-palette-trigger"
              title="Open Command Palette (⌘ K)"
            >
              <Command className="w-3.5 h-3.5 text-emerald-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#14171C] border border-[#242830] text-[10px] text-[#9299A5]">
                ⌘K
              </kbd>
            </button>

            {/* LinkedIn External Link CTA */}
            <a
              href="https://linkedin.com/in/sayematrix"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-[#14171C] hover:bg-[#1c2128] border border-[#242830] hover:border-emerald-500/50 text-xs font-mono text-[#F5F5F5] transition-all group"
              id="linkedin-cta-btn"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-[#101216] border border-[#242830] text-[#9299A5] hover:text-[#F5F5F5]"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#08090B] border-b border-[#242830] px-4 pt-4 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#242830]/50">
              <span className="text-xs font-mono text-emerald-400">NAVIGATION MENU</span>
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#101216] border border-[#242830] text-xs font-mono text-[#9299A5]"
              >
                <Command className="w-3 h-3 text-emerald-400" />
                <span>Search (⌘K)</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => handleNavClick('home', 'about')}
                className="text-left px-3 py-2 rounded bg-[#101216] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-emerald-500/50"
              >
                01. About
              </button>
              <button
                onClick={() => handleNavClick('home', 'work')}
                className="text-left px-3 py-2 rounded bg-[#101216] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-emerald-500/50"
              >
                02. Work
              </button>
              <button
                onClick={() => handleNavClick('home', 'research')}
                className="text-left px-3 py-2 rounded bg-[#101216] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-emerald-500/50"
              >
                03. Research
              </button>
              <button
                onClick={() => handleNavClick('home', 'ventures')}
                className="text-left px-3 py-2 rounded bg-[#101216] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-emerald-500/50"
              >
                04. Ventures
              </button>
              <button
                onClick={() => handleNavClick('home', 'ecosystem')}
                className="text-left px-3 py-2 rounded bg-[#101216] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-emerald-500/50"
              >
                05. Ecosystem
              </button>
              <button
                onClick={() => handleNavClick('cv')}
                className="text-left px-3 py-2 rounded bg-[#101216] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-emerald-500/50"
              >
                06. CV / Resume
              </button>
            </div>

            <div className="pt-3 flex items-center justify-between">
              <button
                onClick={() => handleNavClick('home', 'contact')}
                className="w-full text-center py-2 rounded bg-emerald-500/10 border border-emerald-500/40 text-xs font-mono text-emerald-400 font-semibold"
              >
                Contact SAYEM →
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
