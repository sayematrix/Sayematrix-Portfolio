import React, { useState } from 'react';
import { ECOSYSTEM_DOMAINS } from '../data/content';
import { EcosystemDomain } from '../types';
import { Network, Sparkles, Check, ArrowUpRight, Compass, Shield, BookOpen, Instagram } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('faith');

  const selectedDomain = ECOSYSTEM_DOMAINS.find(d => d.id === selectedDomainId) || ECOSYSTEM_DOMAINS[0];

  return (
    <section className="py-20 bg-[#08090B] border-b border-[#242830] relative overflow-hidden" id="ecosystem">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101216] border border-[#242830] mb-2">
            <Network className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest">
              MULTI-DOMAIN ARCHITECTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F5F5] uppercase tracking-tight">
            THE SAYEMATRIX <span className="text-emerald-400">ECOSYSTEM</span>
          </h2>
          <p className="text-sm font-sans text-[#9299A5] mt-2">
            One ecosystem. Multiple domains. Unlimited topics.
          </p>
        </div>

        {/* Ecosystem Architecture Map View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101216] p-6 sm:p-8 rounded-2xl border border-[#242830] shadow-2xl">
          
          {/* Left Column: Interactive Domain Nodes Diagram */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 min-h-[380px] bg-[#08090B] rounded-xl border border-[#242830] relative">
            
            {/* Center Core Hub Node */}
            <div className="z-20 my-4 text-center">
              <div className="px-6 py-3 rounded-xl bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 shadow-xl shadow-emerald-500/20 flex flex-col items-center">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-emerald-300">CORE HUB</span>
                <span className="text-lg font-sans font-black tracking-tight text-[#F5F5F5]">SAYEMATRIX</span>
              </div>
            </div>

            {/* Surrounding Domain Node Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-4">
              {ECOSYSTEM_DOMAINS.map((domain) => {
                const isSelected = domain.id === selectedDomainId;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setSelectedDomainId(domain.id)}
                    className={`p-3 rounded-lg border text-left transition-all duration-200 relative ${
                      isSelected
                        ? 'bg-[#14171C] border-2 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                        : 'bg-[#101216] border-[#242830] hover:border-emerald-500/40 hover:bg-[#14171C]'
                    }`}
                    style={{
                      borderColor: isSelected ? domain.color : undefined
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${domain.color}20`,
                          color: domain.color
                        }}
                      >
                        {domain.pillar}
                      </span>
                      {isSelected && <Sparkles className="w-3 h-3 text-emerald-400" />}
                    </div>

                    <div className="text-xs font-mono font-bold text-[#F5F5F5] tracking-tight truncate">
                      {domain.brand}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 text-[10px] font-mono text-[#9299A5] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Click any domain node to inspect brand parameters</span>
            </div>
          </div>

          {/* Right Column: Selected Domain Details Inspector */}
          <div className="lg:col-span-5 bg-[#14171C] p-6 rounded-xl border border-[#242830] space-y-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#242830] mb-4">
                <span
                  className="text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded"
                  style={{
                    backgroundColor: `${selectedDomain.color}20`,
                    color: selectedDomain.color
                  }}
                >
                  {selectedDomain.pillar} DOMAIN
                </span>
                <span className="text-xs font-mono text-[#9299A5]">ACTIVE NODE</span>
              </div>

              <h3 className="text-2xl font-sans font-extrabold text-[#F5F5F5] mb-1">
                {selectedDomain.brand}
              </h3>
              <p className="text-xs font-mono text-emerald-400 mb-4">
                {selectedDomain.tagline}
              </p>

              <div className="space-y-3 text-xs font-sans text-[#9299A5] mb-6">
                <p className="leading-relaxed">
                  {selectedDomain.description}
                </p>
                <div className="p-3 rounded bg-[#101216] border border-[#242830]">
                  <span className="text-[10px] font-mono uppercase text-[#9299A5] block mb-0.5">CORE FOCUS</span>
                  <span className="text-[#F5F5F5] font-semibold text-xs">{selectedDomain.focusArea}</span>
                </div>
              </div>

              {/* Topics Pills */}
              <div className="mb-4">
                <span className="text-[10px] font-mono text-[#9299A5] uppercase block mb-2">
                  UNLIMITED TOPIC EXPANSION
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDomain.topics.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#101216] border border-[#242830] text-[10px] font-mono text-[#F5F5F5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instagram Link if available */}
              {selectedDomain.instagramUrl && (
                <div>
                  <a
                    href={selectedDomain.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#101216] hover:bg-[#181C22] border border-[#242830] hover:border-pink-500/50 text-xs font-mono text-[#F5F5F5] transition-all group"
                  >
                    <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                    <span>Follow <strong className="text-pink-300">{selectedDomain.brand}</strong> on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9299A5] group-hover:text-pink-300 transition-colors" />
                  </a>
                </div>
              )}
            </div>

            {/* Architecture Principle Footer */}
            <div className="pt-4 border-t border-[#242830] space-y-2">
              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                ARCHITECTURE PRINCIPLE:
              </div>
              <p className="text-[11px] font-mono text-[#9299A5] leading-tight">
                DOMAINS STAY STABLE. SEGMENTS EVOLVE. TOPICS ARE UNLIMITED.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
