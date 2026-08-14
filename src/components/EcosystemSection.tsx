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
    <section className="py-24 bg-[#041618] border-b border-[#0E353C] relative overflow-hidden" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#0E353C]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#061D20] border border-[#0E353C] mb-3">
              <Network className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">
                SYSTEM TOPOLOGY & MULTI-DOMAIN MATRIX
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#F8FAFC] tracking-tight uppercase">
              THE SAYEMATRIX <span className="text-emerald-400">ECOSYSTEM</span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#94A3B8] mt-2 max-w-2xl">
              One central digital operating system routing intelligence into six specialized vertical domains with infinite topic expansion.
            </p>
          </div>

          {/* System Telemetry Badges */}
          <div className="flex items-center gap-3 self-start md:self-auto font-mono text-xs text-[#94A3B8]">
            <div className="px-3 py-1.5 rounded-lg bg-[#061D20] border border-[#0E353C] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>NODES: <strong className="text-[#F8FAFC]">06 ACTIVE</strong></span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#061D20] border border-[#0E353C] hidden sm:flex items-center gap-2">
              <Workflow className="w-3.5 h-3.5 text-emerald-400" />
              <span>TOPOLOGY: <strong className="text-[#F8FAFC]">STAR NEXUS</strong></span>
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
                className={`group text-left p-3.5 rounded-xl border transition-all duration-300 relative cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#082226] shadow-lg shadow-black/40 translate-y-[-2px]'
                    : 'bg-[#061D20] border-[#0E353C] hover:border-[#144850] hover:bg-[#0A2B30]'
                }`}
                style={{
                  borderColor: isSelected ? domain.color : undefined
                }}
              >
                {/* Active Top Accent Line */}
                {isSelected && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
                    style={{ backgroundColor: domain.color }}
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="text-[10px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded"
                    style={{
                      backgroundColor: isSelected ? `${domain.color}25` : '#0E353C',
                      color: isSelected ? domain.color : '#94A3B8'
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <div 
                    className="p-1.5 rounded-lg transition-colors"
                    style={{
                      backgroundColor: isSelected ? `${domain.color}20` : '#031214',
                      color: isSelected ? domain.color : '#64748B'
                    }}
                  >
                    {getDomainIcon(domain.id, 'w-4 h-4')}
                  </div>
                </div>

                <div>
                  <span 
                    className="text-[9px] font-mono uppercase font-bold tracking-widest block mb-0.5"
                    style={{ color: isSelected ? domain.color : '#64748B' }}
                  >
                    {domain.pillar}
                  </span>
                  <div className="text-xs font-mono font-bold text-[#F8FAFC] tracking-tight truncate group-hover:text-emerald-400 transition-colors">
                    {domain.brand}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Architectural Showcase Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#061D20] p-6 sm:p-8 rounded-2xl border border-[#0E353C] shadow-2xl relative">
          
          {/* Left Column: Domain Terminal & Specifications */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Domain Header & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#0E353C]">
                <div className="flex items-center gap-2.5">
                  <div 
                    className="p-2.5 rounded-xl border"
                    style={{
                      backgroundColor: `${selectedDomain.color}15`,
                      borderColor: `${selectedDomain.color}40`,
                      color: selectedDomain.color
                    }}
                  >
                    {getDomainIcon(selectedDomain.id, 'w-6 h-6')}
                  </div>
                  <div>
                    <span 
                      className="text-[10px] font-mono font-bold uppercase tracking-widest block"
                      style={{ color: selectedDomain.color }}
                    >
                      {selectedDomain.pillar} VERTICAL NODE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#F8FAFC]">
                      {selectedDomain.brand}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#031214] border border-[#0E353C] text-[#94A3B8]">
                    STATUS: <strong className="text-emerald-400">ACTIVE</strong>
                  </span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="mt-5 space-y-4">
                <div className="text-sm font-mono font-medium text-emerald-400 flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>{selectedDomain.tagline}</span>
                </div>

                <p className="text-sm sm:text-base font-sans text-[#94A3B8] leading-relaxed">
                  {selectedDomain.description}
                </p>

                {/* Core Focus Area Box */}
                <div className="p-4 rounded-xl bg-[#031214] border border-[#0E353C] flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1">
                      CORE OPERATING FOCUS
                    </span>
                    <span className="text-xs sm:text-sm font-sans font-medium text-[#F8FAFC]">
                      {selectedDomain.focusArea}
                    </span>
                  </div>
                </div>
              </div>

              {/* Topics Expansion Grid */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    VERTICAL CONTENT TOPICS ({selectedDomain.topics.length})
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">UNLIMITED EXPANSION</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain.topics.map((topic) => (
                    <div
                      key={topic}
                      className="px-3 py-1.5 rounded-lg bg-[#031214] border border-[#0E353C] hover:border-emerald-500/40 text-xs font-mono text-[#F8FAFC] transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedDomain.color }} />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions & Instagram */}
            <div className="pt-4 border-t border-[#0E353C] flex flex-wrap items-center justify-between gap-4">
              {selectedDomain.instagramUrl ? (
                <a
                  href={selectedDomain.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#082226] border border-pink-500/30 hover:border-pink-500/60 text-xs font-mono text-[#F8FAFC] transition-all hover:scale-[1.02] group shadow-lg"
                >
                  <Instagram className="w-4 h-4 text-pink-400 group-hover:rotate-6 transition-transform" />
                  <span>Access <strong className="text-pink-300">{selectedDomain.brand}</strong> Channel</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-pink-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ) : (
                <div className="text-xs font-mono text-[#64748B] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Integrated Central Ecosystem Node</span>
                </div>
              )}

              <div className="text-[11px] font-mono text-[#64748B]">
                PILLAR NODE ID: <strong className="text-[#94A3B8]">SMX-0{ECOSYSTEM_DOMAINS.findIndex(d => d.id === selectedDomain.id) + 1}</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Ecosystem Nexus & Topology HUD */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-[#031214] rounded-xl border border-[#0E353C] space-y-6">
            
            {/* Top Nexus HUD Heading */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#0E353C] mb-4">
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>TOPOLOGY MATRIX</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">NODE 0{ECOSYSTEM_DOMAINS.findIndex(d => d.id === selectedDomain.id) + 1} / 06</span>
              </div>

              {/* Central Core Master Node Box */}
              <div className="p-4 rounded-xl bg-[#061D20] border border-emerald-500/30 text-center relative overflow-hidden mb-4 group">
                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold tracking-widest block">
                      CENTRAL OPERATING CORE
                    </span>
                    <span className="text-lg font-sans font-black text-[#F8FAFC] tracking-tight">
                      SAYEMATRIX OS
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-bold">
                    MASTER HUB
                  </div>
                </div>
              </div>

              {/* Connected Domains Constellation Grid */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">
                  INTERCONNECTED SATELLITE NODES:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {ECOSYSTEM_DOMAINS.map((domain) => {
                    const isCurrent = domain.id === selectedDomainId;
                    return (
                      <button
                        key={domain.id}
                        onClick={() => setSelectedDomainId(domain.id)}
                        className={`p-2.5 rounded-lg border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          isCurrent
                            ? 'bg-[#082226] border-emerald-500/50 shadow-md'
                            : 'bg-[#061D20] border-[#0E353C] hover:border-[#144850] opacity-75 hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <span 
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: domain.color }}
                          />
                          <span className="text-xs font-mono font-bold text-[#F8FAFC] truncate">
                            {domain.brand}
                          </span>
                        </div>
                        {isCurrent && <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Architecture Principles Box */}
            <div className="p-4 rounded-xl bg-[#061D20] border border-[#0E353C] space-y-2">
              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>ARCHITECTURAL INVARIANCE:</span>
              </div>
              <p className="text-xs font-mono text-[#94A3B8] leading-relaxed">
                DOMAINS STAY STABLE • SEGMENTS EVOLVE • TOPICS EXPAND INFINITELY
              </p>
              <div className="text-[10px] font-mono text-[#64748B] pt-1">
                Each domain operates autonomously while synchronizing intelligence back into the SAYEMATRIX central repository.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

