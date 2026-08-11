import React, { useState, useEffect } from 'react';
import { NavigationPage, Project, ResearchNote } from './types';
import { SELECTED_PROJECTS, RESEARCH_NOTES } from './data/content';
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
import { ResearchDetailModal } from './components/ResearchDetailModal';
import { AboutPage } from './pages/AboutPage';
import { CvPage } from './pages/CvPage';
import { EcosystemPage } from './pages/EcosystemPage';

export default function App() {
  const [activePage, setActivePage] = useState<NavigationPage>('home');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

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
  const selectedNote = RESEARCH_NOTES.find(n => n.id === selectedNoteId) || null;

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F5] font-sans antialiased selection:bg-emerald-500 selection:text-[#08090B]">
      {/* Sticky Global Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Command Palette Search Overlay */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        setActivePage={setActivePage}
        onNavigateSection={scrollToSection}
        onSelectProject={(id) => setSelectedProjectId(id)}
        onSelectNote={(id) => setSelectedNoteId(id)}
      />

      {/* Main View Router */}
      <main>
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
              onSelectNote={(id) => setSelectedNoteId(id)}
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

        {activePage === 'about' && (
          <AboutPage
            setActivePage={setActivePage}
            onNavigateSection={scrollToSection}
          />
        )}

        {activePage === 'cv' && <CvPage />}

        {activePage === 'ecosystem' && <EcosystemPage />}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={setActivePage}
        onNavigateSection={scrollToSection}
      />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      <ResearchDetailModal
        note={selectedNote}
        onClose={() => setSelectedNoteId(null)}
      />
    </div>
  );
}
