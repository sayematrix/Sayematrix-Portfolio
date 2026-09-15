import React from 'react';
import { PERSONAL_INFO, CURRENT_FOCUS_GRID, EXPERTISE_CATEGORIES } from '../data/content';
import { NavigationPage } from '../types';
import { User, GraduationCap, MapPin, Building2, ShieldCheck, ArrowRight, CheckCircle2, Award, Mail, Linkedin } from 'lucide-react';

interface AboutPageProps {
  setActivePage: (page: NavigationPage) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage, onNavigateSection }) => {
  return (
    <div className="pt-28 pb-20 bg-[#050607] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* About Hero Header */}
        <div className="space-y-4 border-b border-[#1B2127] pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1217] border border-[#1B2127]">
            <User className="w-3.5 h-3.5 text-[#42B8E8]" />
            <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest">
              BIOGRAPHY &amp; PROFESSIONAL PROFILE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-sans font-black text-[#F5F7FA] uppercase tracking-tight">
            ABOUT <span className="text-[#42B8E8]">SAYEM</span>
          </h1>

          <p className="text-lg font-sans text-[#F5F7FA] font-semibold leading-relaxed border-l-2 border-[#2D9CDB] pl-4 py-1">
            “Building at the intersection of AI, Automation, Financial Intelligence, and Financial Markets—with the goal of turning complex knowledge into intelligent systems, tools, and businesses.”
          </p>
        </div>

        {/* Professional Summary */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 bg-[#0A0D10] p-8 rounded-xl border border-[#1B2127] space-y-6">
            <h2 className="text-xl font-sans font-bold text-[#F5F7FA] uppercase tracking-wide">
              PROFESSIONAL SUMMARY
            </h2>

            <div className="space-y-4 text-sm font-sans text-[#A7B0BA] leading-relaxed">
              <p>
                A multidisciplinary builder focused on quantitative finance, algorithmic trading, financial intelligence, AI, automation, and financial technology.
              </p>
              <p>
                Combines quantitative analysis, market intelligence, data, AI, automation, and systems architecture to research, design, and build intelligent financial systems, trading technologies, and digital products.
              </p>
              <p>
                Through <strong className="text-[#F5F7FA]">QYNTIQ</strong> and the <strong className="text-[#F5F7FA]">SAYEMATRIX</strong> ecosystem, conducts multidisciplinary research and develops proprietary systems, tools, and digital infrastructure for long-term technological and venture development.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1B2127] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] text-[10px] block">PRIMARY BUSINESS</span>
                <span className="text-[#42B8E8] font-bold">QYNTIQ</span>
              </div>
              <div className="p-3 rounded bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] text-[10px] block">DIGITAL BRAND</span>
                <span className="text-[#7DD3FC] font-bold">SAYEMATRIX</span>
              </div>
            </div>
          </div>

          {/* Identity Quick Card */}
          <div className="md:col-span-4 bg-[#0A0D10] p-6 rounded-xl border border-[#1B2127] space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-wider block mb-4">
                CORE ROLES &amp; TITLES
              </span>

              <div className="space-y-3 text-xs font-mono text-[#F5F7FA]">
                {PERSONAL_INFO.roles.map((role, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-[#0E1217] border border-[#1B2127] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#42B8E8] shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#A7B0BA] flex items-center justify-between">
              <span className="font-bold uppercase">LOCATION:</span>
              <span className="text-[#F5F7FA] font-bold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#42B8E8]" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-[#0A0D10] p-8 rounded-xl border border-[#1B2127] space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#42B8E8]" />
            <h2 className="text-xl font-sans font-bold text-[#F5F7FA] uppercase tracking-wide">
              EDUCATION
            </h2>
          </div>

          <div className="p-5 rounded-lg bg-[#0E1217] border border-[#1B2127] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-sans font-bold text-[#F5F7FA]">
                Southeast University
              </h3>
              <p className="text-xs font-mono text-[#A7B0BA]">
                Bangladesh
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-mono text-[#42B8E8] font-bold">
                Computer Science &amp; Engineering
              </span>
            </div>
          </div>
        </div>

        {/* Working Principles & Loop */}
        <div className="bg-[#0A0D10] p-8 rounded-xl border border-[#1B2127] space-y-6">
          <h2 className="text-xl font-sans font-bold text-[#F5F7FA] uppercase tracking-wide">
            WORKING PRINCIPLES &amp; OPERATING LOOP
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {PERSONAL_INFO.workingPrinciples.map((principle, idx) => (
              <div key={principle} className="p-4 rounded-lg bg-[#0E1217] border border-[#1B2127] text-center space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#42B8E8]">0{idx + 1}</span>
                <span className="text-xs font-mono font-bold text-[#F5F7FA] block">{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Footer CTA */}
        <div className="p-8 rounded-xl bg-[#0A0D10] border border-[#1B2127] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-sans font-bold text-[#F5F7FA]">
              Interested in collaborating or exploring ventures?
            </h3>
            <p className="text-xs font-mono text-[#A7B0BA]">
              Let’s connect directly via LinkedIn or email.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#2D9CDB] hover:bg-[#42B8E8] text-[#050607] font-mono text-xs font-bold uppercase transition-all"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="px-4 py-2 rounded-lg bg-[#0E1217] border border-[#1B2127] text-[#F5F7FA] font-mono text-xs font-bold uppercase transition-all hover:bg-[#151A20]"
            >
              Email ↗
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
