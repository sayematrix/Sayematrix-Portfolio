import React, { useState } from 'react';
import { ECOSYSTEM_DOMAINS } from '../data/content';
import { Network, Sparkles, CheckCircle2, ArrowRight, Instagram, ArrowUpRight } from 'lucide-react';

export const EcosystemPage: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>('faith');

  const domain = ECOSYSTEM_DOMAINS.find(d => d.id === activeDomainId) || ECOSYSTEM_DOMAINS[0];

  return (
    <div className="pt-28 pb-20 bg-[#050607] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="space-y-4 border-b border-[#1B2127] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1217] border border-[#1B2127]">
            <Network className="w-3.5 h-3.5 text-[#42B8E8]" />
            <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest">
              SAYEMATRIX DIGITAL ECOSYSTEM ARCHITECTURE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-sans font-black text-[#F5F7FA] uppercase tracking-tight">
            THE <span className="text-[#42B8E8]">ECOSYSTEM</span> MAP
          </h1>

          <p className="text-sm font-sans text-[#A7B0BA] max-w-xl">
            One ecosystem. Multiple domains. Unlimited topics. An independent digital environment built for long-term growth and systemic value.
          </p>
        </div>

        {/* Domain Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {ECOSYSTEM_DOMAINS.map((d) => {
            const isActive = d.id === activeDomainId;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDomainId(d.id)}
                className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0E1217] border-[#42B8E8] shadow-lg'
                    : 'bg-[#0A0D10] border-[#1B2127] hover:border-[#42B8E8]/40'
                }`}
              >
                <span className="text-[9px] font-mono font-bold uppercase block mb-1 text-[#42B8E8]">
                  {d.pillar}
                </span>
                <span className="text-xs font-mono font-bold text-[#F5F7FA] block truncate">
                  {d.brand}
                </span>
              </button>
            );
          })}
        </div>

        {/* Domain Inspector Card */}
        <div className="bg-[#0A0D10] p-8 rounded-xl border border-[#1B2127] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1B2127]">
            <div>
              <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded tracking-widest bg-[#42B8E8]/10 text-[#42B8E8] border border-[#42B8E8]/20">
                {domain.pillar} PILLAR
              </span>
              <h2 className="text-3xl font-sans font-black text-[#F5F7FA] mt-2">
                {domain.brand}
              </h2>
            </div>

            <div className="text-xs font-mono text-[#42B8E8]">
              STATUS: <strong className="text-[#F5F7FA]">ACTIVE ECOSYSTEM NODE</strong>
            </div>
          </div>

          <p className="text-base font-sans text-[#F5F7FA] leading-relaxed">
            {domain.description}
          </p>

          <div className="p-4 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-1">
            <span className="text-[10px] font-mono text-[#6F7882] uppercase">PRIMARY FOCUS AREA</span>
            <p className="text-sm font-sans font-bold text-[#7DD3FC]">{domain.focusArea}</p>
          </div>

          <div>
            <span className="text-xs font-mono text-[#6F7882] uppercase block mb-3 font-bold">
              UNLIMITED TOPICS &amp; EXPANSION MODULES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {domain.topics.map((topic) => (
                <div key={topic} className="p-3 rounded-lg bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#42B8E8] shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {domain.instagramUrl && (
            <div className="pt-4 border-t border-[#1B2127] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#42B8E8] uppercase block mb-0.5">INSTAGRAM BRAND HANDLE</span>
                <span className="text-xs font-mono text-[#A7B0BA]">{domain.instagramUrl}</span>
              </div>
              <a
                href={domain.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0E1217] border border-[#1B2127] text-xs font-mono font-bold text-[#F5F7FA] hover:border-[#42B8E8] transition-all group cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#42B8E8] group-hover:scale-110 transition-transform" />
                <span>Visit @{domain.brand} Instagram</span>
                <ArrowUpRight className="w-4 h-4 text-[#42B8E8]" />
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
