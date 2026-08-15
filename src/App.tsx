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
import { PersonalDimensionSection } from './components/PersonalDimensionSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AboutPage } from './pages/AboutPage';
import { CvPage } from './pages/CvPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { ResearchPaperPage } from './pages/ResearchPaperPage';
import { ResearchPapersPage } from './pages/ResearchPapersPage';

export default function App() {
  const [activePage, setActivePage] = useState<NavigationPage>('home');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreWork = () => {
    setActivePage('home');
    setTimeout(() => scrollToSection('work'), 50);
  };

  const handleAboutMe = () => {
    setActivePage('home');
    setTimeout(() => scrollToSection('about'), 50);
  };

  const selectedProject = SELECTED_PROJECTS.find(p => p.id === selectedProjectId) || null;

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#041618] text-[#F8FAFC] font-sans antialiased selection:bg-emerald-500 selection:text-[#050608]">
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
                setTimeout(() => scrollToSection('research'), 50);
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
                  onExploreWork={handleExploreWork}
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

                {/* 07. Selected Work */}
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

                {/* 10. Ventures (SANR & SAYEMATRIX) */}
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

                {/* 13. Personal Dimension */}
                <PersonalDimensionSection />

                {/* 14. Timeline / Journey */}
                <TimelineSection />

                {/* 15. Contact */}
                <ContactSection />
              </>
            )}

            {activePage === 'research' && (
              <ResearchPapersPage
                onSelectPaper={(id) => setSelectedPaperId(id)}
                onBackToMain={() => {
                  setActivePage('home');
                  setTimeout(() => scrollToSection('research'), 50);
                }}
              />
            )}

            {activePage === 'about' && (
              <AboutPage
                setActivePage={setActivePage}
                onNavigateSection={scrollToSection}
              />
            )}

            {activePage === 'cv' && <CvPage />}

            {activePage === 'ecosystem' && <EcosystemPage />}
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
