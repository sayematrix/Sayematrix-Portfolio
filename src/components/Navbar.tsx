import React, { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SayematrixLogo } from './SayematrixLogo';

interface NavbarProps {
  activePage: NavigationPage;
  setActivePage: (page: NavigationPage) => void;
  onOpenCommandPalette?: () => void;
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
    { id: 'lifestyle', label: 'Lifestyle', page: 'home', sectionId: 'lifestyle' },
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

  // Precision Scroll Spy & Active Section Detection
  useEffect(() => {
    if (activePage !== 'home') {
      setActiveSection(activePage);
      return;
    }

    const sectionIds = ['about', 'work', 'research', 'ventures', 'ecosystem', 'lifestyle', 'contact'];

    let ticking = false;

    const detectActiveSection = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom edge detection for contact / footer
      if (scrollPosition + windowHeight >= documentHeight - 60) {
        setActiveSection('contact');
        ticking = false;
        return;
      }

      // Top of page (Hero & intro strip before 'about')
      const triggerPoint = Math.min(220, windowHeight * 0.35);

      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        const aboutRect = aboutEl.getBoundingClientRect();
        if (aboutRect.top > triggerPoint) {
          setActiveSection('');
          ticking = false;
          return;
        }
      }

      // Find the currently active section by iterating from bottom to top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            setActiveSection(id);
            ticking = false;
            return;
          }
        }
      }

      setActiveSection('');
      ticking = false;
    };

    const handleScrollThrottled = () => {
      if (!ticking) {
        window.requestAnimationFrame(detectActiveSection);
        ticking = true;
      }
    };

    // Run once on mount / page change
    detectActiveSection();

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });
    window.addEventListener('resize', handleScrollThrottled, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
      window.removeEventListener('resize', handleScrollThrottled);
    };
  }, [activePage]);

  const handleNavClick = (page: NavigationPage, sectionId?: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    if (page === 'home' && sectionId) {
      onNavigateSection(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-[#0A0D10]">
        <div
          className="h-full bg-gradient-to-r from-[#2D9CDB] via-[#42B8E8] to-[#7DD3FC] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full box-border z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#050607]/92 backdrop-blur-md border-b border-[#1B2127] py-3 shadow-2xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-w-0 box-border">
          {/* Brand Logo */}
          <div className="shrink-0 min-w-0">
            <SayematrixLogo
              onClick={() => handleNavClick('home')}
              size="md"
              id="nav-logo-btn"
            />
          </div>

          {/* Desktop Navigation Links with Illuminated Active Effect */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0A0D10]/90 p-1.5 rounded-full border border-[#1B2127] backdrop-blur-md shadow-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.page as NavigationPage, item.sectionId)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 select-none ${
                    isActive
                      ? 'bg-[#2D9CDB]/15 text-[#42B8E8] border border-[#2D9CDB]/35 font-semibold shadow-[0_0_12px_rgba(45,156,219,0.2)]'
                      : 'text-[#A7B0BA] hover:text-[#F5F7FA] hover:bg-[#151A1F] border border-transparent'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {/* Active illuminated signal dot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42B8E8] shadow-[0_0_8px_#42B8E8] shrink-0 animate-pulse" />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Engage GitHub External Link CTA */}
            <a
              href="https://github.com/sayematrix"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-[#0E1217] hover:bg-[#151A1F] border border-[#1B2127] hover:border-[#2D9CDB]/40 text-xs font-mono text-[#F5F7FA] transition-all group shrink-0"
              id="engage-cta-btn"
            >
              <span>Engage</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#42B8E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-[#0E1217] border border-[#1B2127] text-[#A7B0BA] hover:text-[#F5F7FA] focus:outline-none focus:ring-1 focus:ring-[#2D9CDB]/40 shrink-0"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#42B8E8]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Illuminated Active State */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full max-w-full box-border bg-[#050607] border-b border-[#1B2127] px-4 pt-3 pb-6 mt-3 space-y-2.5 max-h-[calc(100dvh-4.5rem)] overflow-y-auto overflow-x-hidden animate-in fade-in slide-in-from-top duration-200">
            {/* Navigation Grid */}
            <div className="grid grid-cols-2 gap-2 pt-1 w-full min-w-0 box-border">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.page as NavigationPage, item.sectionId)}
                    className={`min-w-0 w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all duration-300 flex items-center justify-between gap-1.5 border box-border ${
                      isActive
                        ? 'bg-[#2D9CDB]/15 text-[#42B8E8] border-[#2D9CDB]/40 shadow-[0_0_12px_rgba(45,156,219,0.2)] font-bold'
                        : 'bg-[#0E1217] border-[#1B2127] text-[#A7B0BA] hover:text-[#F5F7FA] hover:border-[#2D9CDB]/30'
                    }`}
                    id={`mobile-nav-item-${item.id}`}
                  >
                    <span className="truncate min-w-0">{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#42B8E8] shadow-[0_0_8px_#42B8E8] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 w-full min-w-0 grid grid-cols-2 gap-2 box-border">
              <a
                href="https://github.com/sayematrix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-3 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 text-xs font-mono text-[#F5F7FA] font-medium flex items-center justify-center gap-1.5 transition-all"
                id="mobile-engage-cta"
              >
                <span>Engage</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#42B8E8]" />
              </a>
              <button
                onClick={() => handleNavClick('home', 'contact')}
                className="w-full max-w-full box-border text-center py-2.5 px-3 rounded-lg bg-[#2D9CDB]/10 border border-[#2D9CDB]/30 text-xs font-mono text-[#42B8E8] font-semibold shadow-[0_0_10px_rgba(45,156,219,0.12)] truncate hover:bg-[#2D9CDB]/20 transition-all"
                id="mobile-contact-cta"
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

