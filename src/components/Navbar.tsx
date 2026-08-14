import React, { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { PERSONAL_INFO } from '../data/content';
import { Search, ArrowUpRight, Menu, X, Command, ShieldCheck } from 'lucide-react';
import { SayematrixLogo } from './SayematrixLogo';

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
  const [activeSection, setActiveSection] = useState<string>('');

  interface NavItem {
    id: string;
    label: string;
    page: NavigationPage;
    sectionId?: string;
  }

  const navItems: NavItem[] = [
    { id: 'about', label: 'About', page: 'home', sectionId: 'about' },
    { id: 'work', label: 'Work', page: 'home', sectionId: 'work' },
    { id: 'research', label: 'Research', page: 'home', sectionId: 'research' },
    { id: 'ventures', label: 'Ventures', page: 'home', sectionId: 'ventures' },
    { id: 'ecosystem', label: 'Ecosystem', page: 'home', sectionId: 'ecosystem' },
    { id: 'cv', label: 'CV', page: 'cv' },
    { id: 'contact', label: 'Contact', page: 'home', sectionId: 'contact' },
  ];

  // Track scroll position & active section via IntersectionObserver & scroll spy
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver + Scroll Spy for Active Section Detection
  useEffect(() => {
    if (activePage !== 'home') {
      setActiveSection(activePage);
      return;
    }

    const sectionIds = ['about', 'work', 'research', 'ventures', 'ecosystem', 'contact'];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Fallback scroll listener for smooth edge detection (top of hero / bottom contact)
    const detectScrollFallback = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight - 60) {
        setActiveSection('contact');
        return;
      }

      if (scrollPosition < 250) {
        const aboutEl = document.getElementById('about');
        if (aboutEl) {
          const rect = aboutEl.getBoundingClientRect();
          if (rect.top > windowHeight * 0.5) {
            setActiveSection('');
          }
        }
      }
    };

    window.addEventListener('scroll', detectScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', detectScrollFallback);
    };
  }, [activePage]);

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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-[#061D20]">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#041618]/90 backdrop-blur-md border-b border-[#0E353C] py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <SayematrixLogo
            onClick={() => handleNavClick('home')}
            size="md"
            id="nav-logo-btn"
          />

          {/* Desktop Navigation Links with Illuminated Active Effect */}
          <nav className="hidden md:flex items-center gap-1 bg-[#061D20]/85 p-1.5 rounded-full border border-[#0E353C] backdrop-blur-md shadow-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.page as NavigationPage, item.sectionId)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 select-none ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 font-semibold shadow-[0_0_12px_rgba(16,185,129,0.25)]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0A2B30] border border-transparent'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {/* Active illuminated signal dot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981] shrink-0 animate-pulse" />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3">
            {/* Command Palette Trigger Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#061D20] border border-[#0E353C] text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] hover:border-emerald-500/40 transition-all"
              id="cmd-palette-trigger"
              title="Open Command Palette (⌘ K)"
            >
              <Command className="w-3.5 h-3.5 text-emerald-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#09282C] border border-[#0E353C] text-[10px] text-[#94A3B8]">
                ⌘K
              </kbd>
            </button>

            {/* Engage Telegram External Link CTA */}
            <a
              href={PERSONAL_INFO.contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-[#082226] hover:bg-[#0A2B30] border border-[#0E353C] hover:border-emerald-500/50 text-xs font-mono text-[#F8FAFC] transition-all group"
              id="engage-cta-btn"
            >
              <span>Engage</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-[#061D20] border border-[#0E353C] text-[#94A3B8] hover:text-[#F8FAFC]"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Illuminated Active State */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#041618] border-b border-[#0E353C] px-4 pt-4 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#0E353C]/70">
              <span className="text-xs font-mono text-emerald-400">NAVIGATION MENU</span>
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#061D20] border border-[#0E353C] text-xs font-mono text-[#94A3B8]"
              >
                <Command className="w-3 h-3 text-emerald-400" />
                <span>Search (⌘K)</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.page as NavigationPage, item.sectionId)}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all duration-300 flex items-center justify-between border ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.25)] font-bold'
                        : 'bg-[#061D20] border-[#0E353C] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-emerald-500/30'
                    }`}
                  >
                    <span>0{index + 1}. {item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 flex items-center justify-between">
              <button
                onClick={() => handleNavClick('home', 'contact')}
                className="w-full text-center py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-xs font-mono text-emerald-400 font-semibold shadow-[0_0_10px_rgba(16,185,129,0.15)]"
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

