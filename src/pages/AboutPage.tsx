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
    <div className="pt-28 pb-20 bg-[#041618] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* About Hero Header */}
        <div className="space-y-4 border-b border-[#0E353C] pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#061D20] border border-[#0E353C]">
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">
              BIOGRAPHY & PROFESSIONAL PROFILE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-sans font-black text-[#F8FAFC] uppercase tracking-tight">
            ABOUT <span className="text-emerald-400">SAYEM</span>
          </h1>

          <p className="text-lg font-sans text-[#F8FAFC] font-semibold leading-relaxed border-l-2 border-emerald-500 pl-4 py-1">
            “Building at the intersection of AI, Automation, Financial Intelligence, and Financial Markets—with the goal of turning complex knowledge into intelligent systems, tools, and businesses.”
          </p>
        </div>

        {/* Professional Summary */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 bg-[#061D20] p-8 rounded-2xl border border-[#0E353C] space-y-6">
            <h2 className="text-xl font-sans font-bold text-[#F8FAFC] uppercase tracking-wide">
              PROFESSIONAL SUMMARY
            </h2>

            <div className="space-y-4 text-sm font-sans text-[#94A3B8] leading-relaxed">
              <p>
                AI, automation, financial technology, and financial markets enthusiast focused on building intelligent systems, quantitative tools, automation workflows, and digital products.
              </p>
              <p>
                {PERSONAL_INFO.fullBioParagraphs[1]}
              </p>
              <p>
                {PERSONAL_INFO.fullBioParagraphs[2]}
              </p>
            </div>

            <div className="pt-4 border-t border-[#0E353C] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded bg-[#031214] border border-[#0E353C]">
                <span className="text-[#94A3B8] text-[10px] block">PRIMARY BUSINESS</span>
                <span className="text-emerald-400 font-bold">SANR Corporation Limited</span>
              </div>
              <div className="p-3 rounded bg-[#031214] border border-[#0E353C]">
                <span className="text-[#94A3B8] text-[10px] block">DIGITAL BRAND</span>
                <span className="text-cyan-400 font-bold">SAYEMATRIX</span>
              </div>
            </div>
          </div>

          {/* Identity Quick Card */}
          <div className="md:col-span-4 bg-[#061D20] p-6 rounded-2xl border border-[#0E353C] space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-4">
                CORE ROLES & TITLES
              </span>

              <div className="space-y-3 text-xs font-mono text-[#F8FAFC]">
                {PERSONAL_INFO.roles.map((role, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-[#031214] border border-[#0E353C] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded bg-[#031214] border border-[#0E353C] text-xs font-mono text-[#94A3B8] flex items-center justify-between">
              <span>LOCATION:</span>
              <span className="text-[#F8FAFC] font-bold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-[#061D20] p-8 rounded-2xl border border-[#0E353C] space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-sans font-bold text-[#F8FAFC] uppercase tracking-wide">
              EDUCATION
            </h2>
          </div>

          <div className="p-5 rounded-xl bg-[#031214] border border-[#0E353C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-sans font-bold text-[#F8FAFC]">
                Southeast University
              </h3>
              <p className="text-xs font-mono text-[#94A3B8]">
                Higher Education — Bangladesh
              </p>
            </div>
            <div className="px-3 py-1 rounded bg-[#061D20] border border-[#0E353C] text-xs font-mono text-emerald-400 font-semibold">
              ACADEMIC FOUNDATION
            </div>
          </div>
        </div>

        {/* Working Principles & Loop */}
        <div className="bg-[#061D20] p-8 rounded-2xl border border-[#0E353C] space-y-6">
          <h2 className="text-xl font-sans font-bold text-[#F8FAFC] uppercase tracking-wide">
            WORKING PRINCIPLES & OPERATING LOOP
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {PERSONAL_INFO.workingPrinciples.map((principle, idx) => (
              <div key={principle} className="p-4 rounded-xl bg-[#031214] border border-[#0E353C] text-center space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-400">0{idx + 1}</span>
                <span className="text-xs font-mono font-bold text-[#F8FAFC] block">{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Footer CTA */}
        <div className="p-8 rounded-2xl bg-[#061D20] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-sans font-bold text-[#F8FAFC]">
              Interested in collaborating or exploring ventures?
            </h3>
            <p className="text-xs font-mono text-[#94A3B8]">
              Let’s connect directly via LinkedIn or email.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#031214] font-mono text-xs font-bold uppercase transition-all"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="px-4 py-2 rounded-lg bg-[#031214] border border-[#0E353C] text-[#F8FAFC] font-mono text-xs font-bold uppercase transition-all"
            >
              Email ↗
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
