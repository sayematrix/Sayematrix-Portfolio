import React, { useState } from 'react';
import { ECOSYSTEM_DOMAINS } from '../data/content';
import { Network, Sparkles, CheckCircle2, ArrowRight, Instagram, ArrowUpRight } from 'lucide-react';

export const EcosystemPage: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>('faith');

  const domain = ECOSYSTEM_DOMAINS.find(d => d.id === activeDomainId) || ECOSYSTEM_DOMAINS[0];

  return (
    <div className="pt-28 pb-20 bg-[#041618] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="space-y-4 border-b border-[#0E353C] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#061D20] border border-[#0E353C]">
            <Network className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">
              SAYEMATRIX DIGITAL ECOSYSTEM ARCHITECTURE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-sans font-black text-[#F8FAFC] uppercase tracking-tight">
            THE <span className="text-emerald-400">ECOSYSTEM</span> MAP
          </h1>

          <p className="text-sm font-sans text-[#94A3B8] max-w-xl">
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
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#031214] border-2 shadow-xl'
                    : 'bg-[#061D20] border-[#0E353C] hover:border-emerald-500/40'
                }`}
                style={{ borderColor: isActive ? d.color : undefined }}
              >
                <span className="text-[9px] font-mono font-bold uppercase block mb-1" style={{ color: d.color }}>
                  {d.pillar}
                </span>
                <span className="text-xs font-mono font-bold text-[#F8FAFC] block truncate">
                  {d.brand}
                </span>
              </button>
            );
          })}
        </div>

        {/* Domain Inspector Card */}
        <div className="bg-[#061D20] p-8 rounded-2xl border border-[#0E353C] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#0E353C]">
            <div>
              <span
                className="text-xs font-mono font-bold uppercase px-3 py-1 rounded tracking-widest"
                style={{ backgroundColor: `${domain.color}20`, color: domain.color }}
              >
                {domain.pillar} PILLAR
              </span>
              <h2 className="text-3xl font-sans font-black text-[#F8FAFC] mt-2">
                {domain.brand}
              </h2>
            </div>

            <div className="text-xs font-mono text-emerald-400">
              STATUS: <strong className="text-[#F8FAFC]">ACTIVE ECOSYSTEM NODE</strong>
            </div>
          </div>

          <p className="text-base font-sans text-[#F8FAFC] leading-relaxed">
            {domain.description}
          </p>

          <div className="p-4 rounded-xl bg-[#031214] border border-[#0E353C] space-y-1">
            <span className="text-[10px] font-mono text-[#94A3B8] uppercase">PRIMARY FOCUS AREA</span>
            <p className="text-sm font-sans font-bold text-emerald-300">{domain.focusArea}</p>
          </div>

          <div>
            <span className="text-xs font-mono text-[#94A3B8] uppercase block mb-3 font-bold">
              UNLIMITED TOPICS & EXPANSION MODULES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {domain.topics.map((topic) => (
                <div key={topic} className="p-3 rounded-lg bg-[#031214] border border-[#0E353C] text-xs font-mono text-[#F8FAFC] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {domain.instagramUrl && (
            <div className="pt-4 border-t border-[#0E353C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-pink-400 uppercase block mb-0.5">INSTAGRAM BRAND HANDLE</span>
                <span className="text-xs font-mono text-[#94A3B8]">{domain.instagramUrl}</span>
              </div>
              <a
                href={domain.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-xs font-mono font-bold text-[#F8FAFC] hover:border-pink-400 transition-all group cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>Visit @{domain.brand} Instagram</span>
                <ArrowUpRight className="w-4 h-4 text-pink-400" />
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
