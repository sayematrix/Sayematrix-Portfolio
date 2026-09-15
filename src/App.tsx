import React, { useState } from 'react';
import { NavigationPage } from './types';
import { SELECTED_PROJECTS } from './data/content';
import { RESEARCH_PAPERS } from './data/researchPapers';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { HeroSection } from './components/HeroSection';
import { CoreFocusStrip } from './components/CoreFocusStrip';
import { IntroductionSection } from './components/IntroductionSection';
import { AboutSection } from './components/AboutSection';
import { CurrentFocusSection } from './components/CurrentFocusSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ResearchLabSection } from './components/ResearchLabSection';
import { KnowledgeWorkflow } from './components/KnowledgeWorkflow';
import { VenturesSection } from './components/VenturesSection';
import { EcosystemSection } from './components/EcosystemSection';
import { PhilosophySection } from './components/PhilosophySection';
import { LifestyleSection } from './components/LifestyleSection';
import { PersonalDimensionSection } from './components/PersonalDimensionSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AboutPage } from './pages/AboutPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { LifestylePage } from './pages/LifestylePage';
import { ResearchPaperPage } from './pages/ResearchPaperPage';
import { ResearchPapersPage } from './pages/ResearchPapersPage';

export default function App() {
  const [activePage, setActivePage] = useState<NavigationPage>('home');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const performScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };

    if (!performScroll()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (performScroll() || attempts > 25) {
          clearInterval(interval);
        }
      }, 35);
    }
  };

  // Enforce Hero section at top on initial load & sync standalone page routes
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If an initial route/hash is #ventures, remove it immediately
    const initialHash = window.location.hash.replace('#', '').toLowerCase();
    if (initialHash === 'ventures' || initialHash.includes('ventures')) {
      if (window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }

    // Force initial scroll position to strictly start at top on Hero section
    window.scrollTo(0, 0);
    const topTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    const handleHash = (isInitial = false) => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        if (isInitial) {
          window.scrollTo(0, 0);
        }
        return;
      }

      // Standalone full pages
      if (hash === 'about-page') {
        setActivePage('about');
      } else if (hash === 'research-library' || hash === 'papers') {
        setActivePage('research');
      } else if (hash === 'ecosystem-page') {
        setActivePage('ecosystem');
      } else if (hash === 'lifestyle-page') {
        setActivePage('lifestyle');
      } else if (['about', 'projects', 'research', 'ventures', 'ecosystem', 'lifestyle', 'contact'].includes(hash)) {
        // On initial page load, NEVER auto-scroll to sections; start at Hero section
        if (isInitial) {
          window.scrollTo(0, 0);
          return;
        }
        setActivePage('home');
        setSelectedPaperId(null);
        setSelectedProjectId(null);
        scrollToSection(hash);
      } else if (hash === 'work') {
        if (isInitial) {
          window.scrollTo(0, 0);
          return;
        }
        setActivePage('home');
        setSelectedPaperId(null);
        setSelectedProjectId(null);
        scrollToSection('projects');
      }
    };

    handleHash(true);
    const onHashChange = () => handleHash(false);
    window.addEventListener('hashchange', onHashChange);

    // Global keyboard shortcut to open Command Palette
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);

    return () => {
      clearTimeout(topTimer);
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []);

  const handleExploreProjects = () => {
    setActivePage('home');
    setSelectedPaperId(null);
    scrollToSection('projects');
  };

  const handleAboutMe = () => {
    setActivePage('home');
    setSelectedPaperId(null);
    scrollToSection('about');
  };

  const selectedProject = SELECTED_PROJECTS.find(p => p.id === selectedProjectId) || null;

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#050607] text-[#F5F7FA] font-sans antialiased selection:bg-[#42B8E8] selection:text-[#050607]">
      {/* Sticky Global Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          if (page !== 'research') {
            setSelectedPaperId(null);
          }
        }}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onNavigateSection={(sec) => {
          setSelectedPaperId(null);
          scrollToSection(sec);
        }}
      />

      {/* Command Palette Search Overlay */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onOpen={() => setCommandPaletteOpen(true)}
        onClose={() => setCommandPaletteOpen(false)}
        setActivePage={(page) => {
          setActivePage(page);
          if (page !== 'research') {
            setSelectedPaperId(null);
          }
        }}
        onNavigateSection={(sec) => {
          setSelectedPaperId(null);
          scrollToSection(sec);
        }}
        onSelectProject={(id) => setSelectedProjectId(id)}
        onSelectNote={(id) => {
          setSelectedPaperId(id);
          setActivePage('research');
        }}
      />

      {/* Main View Router */}
      <main>
        {/* Full-Page Research Paper Detail View (when a paper is selected for reading) */}
        {selectedPaperId ? (
          <ResearchPaperPage
            paperId={selectedPaperId}
            onBack={() => {
              setSelectedPaperId(null);
              if (activePage === 'home') {
                scrollToSection('research');
              }
            }}
            onSelectPaper={(id) => setSelectedPaperId(id)}
          />
        ) : (
          <>
            {activePage === 'home' && (
              <>
                {/* 01. Hero */}
                <HeroSection
                  onExploreProjects={handleExploreProjects}
                  onAboutMe={handleAboutMe}
                />

                {/* 02. Core Focus Strip */}
                <CoreFocusStrip />

                {/* 03. Introduction */}
                <IntroductionSection />

                {/* 04. About */}
                <AboutSection onReadFullProfile={() => setActivePage('about')} />

                {/* 05. Current Focus Grid */}
                <CurrentFocusSection />

                {/* 06. Expertise */}
                <ExpertiseSection />

                {/* 07. Selected Projects */}
                <SelectedWorkSection
                  onSelectProject={(id) => setSelectedProjectId(id)}
                />

                {/* 08. Research Lab */}
                <ResearchLabSection
                  onSelectPaper={(id) => {
                    setSelectedPaperId(id);
                  }}
                  onSeeMore={() => {
                    setActivePage('research');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                {/* 09. Knowledge Transformation Workflow */}
                <KnowledgeWorkflow />

                {/* 10. Ventures (QYNTIQ & SAYEMATRIX) */}
                <VenturesSection
                  onExploreVenture={(ventureId) => {
                    if (ventureId === 'sayematrix-eco') {
                      setActivePage('ecosystem');
                    } else {
                      setActivePage('about');
                    }
                  }}
                />

                {/* 11. SAYEMATRIX Ecosystem Map */}
                <EcosystemSection />

                {/* 12. Philosophy */}
                <PhilosophySection />

                {/* 13. Lifestyle & Human Systems Architecture */}
                <LifestyleSection
                  onExploreLifestylePage={() => {
                    setActivePage('lifestyle');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                {/* 14. Personal Dimension */}
                <PersonalDimensionSection />

                {/* 15. Timeline / Journey */}
                <TimelineSection />

                {/* 16. Contact */}
                <ContactSection />
              </>
            )}

            {activePage === 'research' && (
              <ResearchPapersPage
                onSelectPaper={(id) => setSelectedPaperId(id)}
                onBackToMain={() => {
                  setActivePage('home');
                  scrollToSection('research');
                }}
              />
            )}

            {activePage === 'about' && (
              <AboutPage
                setActivePage={setActivePage}
                onNavigateSection={scrollToSection}
              />
            )}

            {activePage === 'ecosystem' && (
              <EcosystemPage />
            )}

            {activePage === 'lifestyle' && (
              <LifestylePage
                onBackToMain={() => setActivePage('home')}
                setActivePage={setActivePage}
              />
            )}
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={(page) => {
          setActivePage(page);
          if (page !== 'research') setSelectedPaperId(null);
        }}
        onNavigateSection={(sec) => {
          setSelectedPaperId(null);
          scrollToSection(sec);
        }}
      />

      {/* Project Details Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}
