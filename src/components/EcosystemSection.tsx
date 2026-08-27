import React, { useState } from 'react';
import { ECOSYSTEM_DOMAINS } from '../data/content';
import { 
  Network, 
  ArrowUpRight, 
  Instagram, 
  Shield, 
  Brain, 
  BookOpen, 
  TrendingUp, 
  Palette, 
  Globe, 
  Cpu, 
  Layers, 
  Radio, 
  Sparkles,
  ArrowRight,
  Workflow
} from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('faith');

  const selectedDomain = ECOSYSTEM_DOMAINS.find(d => d.id === selectedDomainId) || ECOSYSTEM_DOMAINS[0];

  const getDomainIcon = (id: string, className: string = 'w-5 h-5') => {
    switch (id) {
      case 'faith':
        return <Shield className={className} />;
      case 'human':
        return <Brain className={className} />;
      case 'knowledge':
        return <BookOpen className={className} />;
      case 'wealth':
        return <TrendingUp className={className} />;
      case 'creative':
        return <Palette className={className} />;
      case 'life':
      default:
        return <Globe className={className} />;
    }
  };

  return (
    <section className="py-24 bg-[#050607] border-b border-[#1B2127] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#1B2127]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A0D10] border border-[#1B2127] mb-3">
              <Network className="w-3.5 h-3.5 text-[#42B8E8]" />
              <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest">
                SYSTEM TOPOLOGY &amp; MULTI-DOMAIN MATRIX
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#F5F7FA] tracking-tight uppercase">
              THE SAYEMATRIX <span className="text-[#42B8E8]">ECOSYSTEM</span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#A7B0BA] mt-2 max-w-2xl">
              One central digital operating system routing intelligence into six specialized vertical domains with infinite topic expansion.
            </p>
          </div>

          {/* System Telemetry Badges */}
          <div className="flex items-center gap-3 self-start md:self-auto font-mono text-xs text-[#A7B0BA]">
            <div className="px-3 py-1.5 rounded-md bg-[#0A0D10] border border-[#1B2127] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#42B8E8] animate-pulse" />
              <span>NODES: <strong className="text-[#F5F7FA]">06 ACTIVE</strong></span>
            </div>
            <div className="px-3 py-1.5 rounded-md bg-[#0A0D10] border border-[#1B2127] hidden sm:flex items-center gap-2">
              <Workflow className="w-3.5 h-3.5 text-[#42B8E8]" />
              <span>TOPOLOGY: <strong className="text-[#F5F7FA]">STAR NEXUS</strong></span>
            </div>
          </div>
        </div>

        {/* Interactive Domain Navigation Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {ECOSYSTEM_DOMAINS.map((domain, idx) => {
            const isSelected = domain.id === selectedDomainId;
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomainId(domain.id)}
                className={`group text-left p-3.5 rounded-lg border transition-all duration-200 relative cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#151A20] shadow-md border-[#2D9CDB]/50'
                    : 'bg-[#0E1217] border-[#1B2127] hover:border-[#2D9CDB]/30 hover:bg-[#151A20]'
                }`}
              >
                {/* Active Top Accent Line */}
                {isSelected && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg bg-[#42B8E8]"
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span 
                    className={`text-[10px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-[#2D9CDB]/20 text-[#42B8E8]' : 'bg-[#050607] text-[#6F7882]'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div 
                    className={`p-1.5 rounded-md transition-colors ${
                      isSelected ? 'bg-[#2D9CDB]/20 text-[#42B8E8]' : 'bg-[#050607] text-[#6F7882]'
                    }`}
                  >
                    {getDomainIcon(domain.id, 'w-4 h-4')}
                  </div>
                </div>

                <div>
                  <span 
                    className={`text-[9px] font-mono uppercase font-bold tracking-widest block mb-0.5 ${
                      isSelected ? 'text-[#42B8E8]' : 'text-[#6F7882]'
                    }`}
                  >
                    {domain.pillar}
                  </span>
                  <div className="text-xs font-mono font-bold text-[#F5F7FA] tracking-tight truncate group-hover:text-[#42B8E8] transition-colors">
                    {domain.brand}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Architectural Showcase Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0A0D10] p-6 sm:p-8 rounded-lg border border-[#1B2127] shadow-xl relative">
          
          {/* Left Column: Domain Terminal & Specifications */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Domain Header & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1B2127]">
                <div className="flex items-center gap-2.5">
                  <div 
                    className="p-2.5 rounded-lg border bg-[#2D9CDB]/10 border-[#2D9CDB]/30 text-[#42B8E8]"
                  >
                    {getDomainIcon(selectedDomain.id, 'w-6 h-6')}
                  </div>
                  <div>
                    <span 
                      className="text-[10px] font-mono font-bold uppercase tracking-widest block text-[#42B8E8]"
                    >
                      {selectedDomain.pillar} VERTICAL NODE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#F5F7FA]">
                      {selectedDomain.brand}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#050607] border border-[#1B2127] text-[#A7B0BA]">
                    STATUS: <strong className="text-[#42B8E8]">ACTIVE</strong>
                  </span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="mt-5 space-y-4">
                <div className="text-sm font-mono font-medium text-[#42B8E8] flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>{selectedDomain.tagline}</span>
                </div>

                <p className="text-sm sm:text-base font-sans text-[#A7B0BA] leading-relaxed">
                  {selectedDomain.description}
                </p>

                {/* Core Focus Area Box */}
                <div className="p-4 rounded-md bg-[#050607] border border-[#1B2127] flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-[#42B8E8] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#6F7882] block mb-1">
                      CORE OPERATING FOCUS
                    </span>
                    <span className="text-xs sm:text-sm font-sans font-medium text-[#F5F7FA]">
                      {selectedDomain.focusArea}
                    </span>
                  </div>
                </div>
              </div>

              {/* Topics Expansion Grid */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono text-[#6F7882] uppercase tracking-wider">
                    VERTICAL CONTENT TOPICS ({selectedDomain.topics.length})
                  </span>
                  <span className="text-[10px] font-mono text-[#42B8E8]">UNLIMITED EXPANSION</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain.topics.map((topic) => (
                    <div
                      key={topic}
                      className="px-3 py-1.5 rounded-md bg-[#050607] border border-[#1B2127] hover:border-[#2D9CDB]/40 text-xs font-mono text-[#F5F7FA] transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#42B8E8]" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions & Instagram */}
            <div className="pt-4 border-t border-[#1B2127] flex flex-wrap items-center justify-between gap-4">
              {selectedDomain.instagramUrl ? (
                <a
                  href={selectedDomain.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 text-xs font-mono text-[#F5F7FA] transition-all group shadow-sm"
                >
                  <Instagram className="w-4 h-4 text-[#42B8E8] group-hover:rotate-6 transition-transform" />
                  <span>Access <strong className="text-[#42B8E8]">{selectedDomain.brand}</strong> Channel</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6F7882] group-hover:text-[#42B8E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ) : (
                <div className="text-xs font-mono text-[#6F7882] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#42B8E8]" />
                  <span>Integrated Central Ecosystem Node</span>
                </div>
              )}

              <div className="text-[11px] font-mono text-[#6F7882]">
                PILLAR NODE ID: <strong className="text-[#A7B0BA]">SMX-0{ECOSYSTEM_DOMAINS.findIndex(d => d.id === selectedDomain.id) + 1}</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Ecosystem Nexus & Topology HUD */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-[#050607] rounded-lg border border-[#1B2127] space-y-6">
            
            {/* Top Nexus HUD Heading */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#1B2127] mb-4">
                <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#42B8E8]" />
                  <span>TOPOLOGY MATRIX</span>
                </span>
                <span className="text-[10px] font-mono text-[#42B8E8] font-bold">NODE 0{ECOSYSTEM_DOMAINS.findIndex(d => d.id === selectedDomain.id) + 1} / 06</span>
              </div>

              {/* Central Core Master Node Box */}
              <div className="p-4 rounded-md bg-[#0E1217] border border-[#2D9CDB]/30 text-center relative overflow-hidden mb-4 group">
                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-[#42B8E8] uppercase font-bold tracking-widest block">
                      CENTRAL OPERATING CORE
                    </span>
                    <span className="text-lg font-sans font-black text-[#F5F7FA] tracking-tight">
                      SAYEMATRIX OS
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-[#2D9CDB]/15 border border-[#2D9CDB]/30 text-[10px] font-mono text-[#42B8E8] font-bold">
                    MASTER HUB
                  </div>
                </div>
              </div>

              {/* Connected Domains Constellation Grid */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#6F7882] uppercase tracking-wider block">
                  INTERCONNECTED SATELLITE NODES:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {ECOSYSTEM_DOMAINS.map((domain) => {
                    const isCurrent = domain.id === selectedDomainId;
                    return (
                      <button
                        key={domain.id}
                        onClick={() => setSelectedDomainId(domain.id)}
                        className={`p-2.5 rounded-md border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          isCurrent
                            ? 'bg-[#151A20] border-[#2D9CDB]/50 shadow-sm'
                            : 'bg-[#0E1217] border-[#1B2127] hover:border-[#2D9CDB]/30 text-[#A7B0BA] hover:text-[#F5F7FA]'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <span 
                            className={`w-2 h-2 rounded-full shrink-0 ${isCurrent ? 'bg-[#42B8E8]' : 'bg-[#6F7882]'}`}
                          />
                          <span className="text-xs font-mono font-bold truncate">
                            {domain.brand}
                          </span>
                        </div>
                        {isCurrent && <ArrowRight className="w-3 h-3 text-[#42B8E8] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Architecture Principles Box */}
            <div className="p-4 rounded-md bg-[#0E1217] border border-[#1B2127] space-y-2">
              <div className="text-[10px] font-mono text-[#42B8E8] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#42B8E8]" />
                <span>ARCHITECTURAL INVARIANCE:</span>
              </div>
              <p className="text-xs font-mono text-[#A7B0BA] leading-relaxed">
                DOMAINS STAY STABLE • SEGMENTS EVOLVE • TOPICS EXPAND INFINITELY
              </p>
              <div className="text-[10px] font-mono text-[#6F7882] pt-1">
                Each domain operates autonomously while synchronizing intelligence back into the SAYEMATRIX central repository.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

