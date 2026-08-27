import React, { useState } from 'react';
import { PERSONAL_INFO, SELECTED_PROJECTS, EXPERTISE_CATEGORIES, VENTURES, CURRENT_FOCUS_GRID } from '../data/content';
import { FileText, Download, Copy, Check, Printer, Mail, Linkedin, MapPin, Target, Sparkles, Compass } from 'lucide-react';

export const CvPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const generateFullCvText = () => {
    return `SAYEM

Quant Finance & Algorithmic Trading • AI & Automation • Financial Technology

${PERSONAL_INFO.location}
${PERSONAL_INFO.contact.email} · LinkedIn Profile

01. PROFESSIONAL SUMMARY

${PERSONAL_INFO.bioSummary}

${PERSONAL_INFO.fullBioParagraphs[1]}

${PERSONAL_INFO.fullBioParagraphs[2]}

02. CURRENT FOCUS AREAS

Active R&D pipelines and systems currently under development in 2026.

${CURRENT_FOCUS_GRID.map(f => `${f.number}. ${f.title}\n\n${f.description}\n\nSTATUS: ACTIVE`).join('\n\n')}

03. CORE EXPERTISE & SPECIALIZATIONS
${EXPERTISE_CATEGORIES.map(c => `${c.title}\n\n${c.subtitle}\n\n${c.skills.join('\n')}`).join('\n\n')}

04. PRIMARY VENTURES & DIGITAL BRANDS
${VENTURES[0].name}

${VENTURES[0].label}

${VENTURES[0].description}

${VENTURES[0].highlights.join('\n')}

${VENTURES[1].name}

${VENTURES[1].label}

${VENTURES[1].description}

${VENTURES[1].highlights.join('\n')}

05. SELECTED SYSTEMS & PROJECTS
${SELECTED_PROJECTS.map(p => `${p.title}\n\n${p.category}\n\n${p.description}`).join('\n\n')}

06. EDUCATION
SOUTHEAST UNIVERSITY

Bangladesh

ACADEMIC PROGRAM

Computer Science & Engineering

07. WORKING PRINCIPLES

${PERSONAL_INFO.workingPrinciplesDetailed.map(wp => `${wp.number} — ${wp.title}\n${wp.description}`).join('\n\n')}

PROFESSIONAL POSITIONING

CORE IDENTITY
${PERSONAL_INFO.professionalPositioning.coreIdentity}

TECHNICAL EDGE
${PERSONAL_INFO.professionalPositioning.technicalEdge}

PRIMARY DOMAIN
${PERSONAL_INFO.professionalPositioning.primaryDomain}

BUILDING FOCUS
${PERSONAL_INFO.professionalPositioning.buildingFocus}

LONG-TERM DIRECTION
${PERSONAL_INFO.professionalPositioning.longTermDirection}

BUSINESS VEHICLES
${PERSONAL_INFO.professionalPositioning.businessVehicles}

OPERATING LOOP
${PERSONAL_INFO.professionalPositioning.operatingLoop}
`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateFullCvText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([generateFullCvText()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'SAYEM_CV_2026.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-20 bg-[#050607] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#0A0D10] border border-[#1B2127] no-print">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F5F7FA]">
            <FileText className="w-4 h-4 text-[#42B8E8]" />
            <span>SAYEMATRIX // OFFICIAL CV &amp; PROFESSIONAL PROFILE</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] hover:border-[#42B8E8]/40 flex items-center gap-1.5 transition-colors cursor-pointer"
              id="cv-copy-btn"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#42B8E8]" /> : <Copy className="w-3.5 h-3.5 text-[#6F7882]" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-3 py-1.5 rounded bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] hover:border-[#42B8E8]/40 flex items-center gap-1.5 transition-colors cursor-pointer"
              id="cv-download-btn"
            >
              <Download className="w-3.5 h-3.5 text-[#7DD3FC]" />
              <span>Download TXT</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#2D9CDB] text-[#050607] font-bold text-xs font-mono flex items-center gap-1.5 hover:bg-[#42B8E8] transition-colors cursor-pointer"
              id="cv-print-btn"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Printable Paper CV Document */}
        <div className="bg-[#0A0D10] p-8 sm:p-12 rounded-xl border border-[#1B2127] space-y-10 font-sans text-[#A7B0BA] shadow-2xl print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-[#1B2127] pb-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black text-[#F5F7FA] tracking-tight uppercase print:text-black">
              SAYEM
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[#42B8E8] font-bold tracking-wide leading-relaxed print:text-[#0A0D10]">
              Quant Finance &amp; Algorithmic Trading • AI &amp; Automation • Financial Technology
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-mono text-[#6F7882]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#42B8E8]" /> {PERSONAL_INFO.location}
              </span>
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(PERSONAL_INFO.contact.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F5F7FA] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#42B8E8]" /> {PERSONAL_INFO.contact.email}
              </a>
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F5F7FA] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#42B8E8]" /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Section 01: Professional Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest border-b border-[#1B2127] pb-1.5">
              01. PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F7FA] leading-relaxed font-semibold">
              A multidisciplinary builder focused on quantitative finance, algorithmic trading, financial intelligence, AI, automation, and financial technology.
            </p>
            <p className="text-xs sm:text-sm text-[#A7B0BA] leading-relaxed">
              Combines quantitative analysis, market intelligence, data, AI, automation, and systems architecture to research, design, and build intelligent financial systems, trading technologies, and digital products.
            </p>
            <p className="text-xs sm:text-sm text-[#A7B0BA] leading-relaxed">
              Through <strong className="text-[#F5F7FA]">SANR Corporation Limited</strong> and the <strong className="text-[#F5F7FA]">SAYEMATRIX</strong> ecosystem, conducts multidisciplinary research and develops proprietary systems, tools, and digital infrastructure for long-term technological and venture development.
            </p>
          </div>

          {/* Section 02: Current Focus */}
          <div className="space-y-3">
            <div className="border-b border-[#1B2127] pb-1.5 flex items-center justify-between">
              <h2 className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest">
                02. CURRENT FOCUS AREAS
              </h2>
              <span className="text-[10px] font-mono text-[#6F7882]">
                Active R&amp;D pipelines and systems currently under development in 2026.
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {CURRENT_FOCUS_GRID.map((item) => (
                <div key={item.number} className="p-3.5 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-1.5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#42B8E8] font-bold block">{item.number}. {item.title}</span>
                    <p className="text-[11px] text-[#A7B0BA] leading-relaxed mt-1">{item.description}</p>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-[9px] font-mono text-[#42B8E8] font-bold border-t border-[#1B2127]">
                    <span>STATUS: ACTIVE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 03: Core Expertise & Specializations */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest border-b border-[#1B2127] pb-1.5">
              03. CORE EXPERTISE &amp; SPECIALIZATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERTISE_CATEGORIES.map(cat => (
                <div key={cat.id} className="p-4 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-2">
                  <div>
                    <span className="text-xs font-mono text-[#42B8E8] font-bold block uppercase">{cat.title}</span>
                    <p className="text-[10px] font-mono text-[#6F7882] italic mt-0.5">{cat.subtitle}</p>
                  </div>
                  <ul className="space-y-1 pt-1">
                    {cat.skills.map(skill => (
                      <li key={skill} className="text-xs font-mono text-[#F5F7FA] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#42B8E8] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 04: Ventures & Digital Brand */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest border-b border-[#1B2127] pb-1.5">
              04. PRIMARY VENTURES &amp; DIGITAL BRANDS
            </h2>

            <div className="space-y-3">
              {VENTURES.map(venture => (
                <div key={venture.id} className="p-4 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-[#F5F7FA] uppercase font-mono tracking-wide">{venture.name}</h3>
                    <span className="text-[10px] font-mono text-[#42B8E8] font-bold px-2 py-0.5 rounded bg-[#42B8E8]/10 border border-[#42B8E8]/30 w-fit">
                      {venture.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#A7B0BA] leading-relaxed">
                    {venture.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {venture.highlights.map((h, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-[#F5F7FA] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#42B8E8] shrink-0"></span>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 05: Selected Systems & Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest border-b border-[#1B2127] pb-1.5">
              05. SELECTED SYSTEMS &amp; PROJECTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SELECTED_PROJECTS.map(proj => (
                <div key={proj.id} className="p-4 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F5F7FA] uppercase font-mono">{proj.title}</span>
                    <span className="text-[9px] font-mono text-[#42B8E8] px-1.5 py-0.5 rounded bg-[#0A0D10] border border-[#1B2127]">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#A7B0BA] leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 06: Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest border-b border-[#1B2127] pb-1.5">
              06. EDUCATION
            </h2>
            <div className="p-4 rounded-lg bg-[#0E1217] border border-[#1B2127] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-sm font-bold text-[#F5F7FA] block font-mono">SOUTHEAST UNIVERSITY</span>
                <span className="text-xs font-mono text-[#A7B0BA]">Bangladesh</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-mono text-[#42B8E8] font-bold">Computer Science &amp; Engineering</span>
              </div>
            </div>
          </div>

          {/* Section 07: Working Principles */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest border-b border-[#1B2127] pb-1.5">
              07. WORKING PRINCIPLES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {PERSONAL_INFO.workingPrinciplesDetailed.map((principle) => (
                <div key={principle.number} className="p-3.5 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-1">
                  <span className="text-xs font-mono text-[#42B8E8] font-bold block">
                    {principle.number} — {principle.title}
                  </span>
                  <p className="text-xs text-[#A7B0BA] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Positioning */}
          <div className="space-y-4 pt-4 border-t border-[#1B2127]">
            <h2 className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest border-b border-[#1B2127] pb-1.5 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#42B8E8]" />
              <span>PROFESSIONAL POSITIONING</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-1">CORE IDENTITY</span>
                <span className="text-[#F5F7FA] font-bold">{PERSONAL_INFO.professionalPositioning.coreIdentity}</span>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-1">TECHNICAL EDGE</span>
                <span className="text-[#F5F7FA] font-bold">{PERSONAL_INFO.professionalPositioning.technicalEdge}</span>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-1">PRIMARY DOMAIN</span>
                <span className="text-[#F5F7FA] font-bold">{PERSONAL_INFO.professionalPositioning.primaryDomain}</span>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-1">BUILDING FOCUS</span>
                <span className="text-[#F5F7FA] font-bold">{PERSONAL_INFO.professionalPositioning.buildingFocus}</span>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-1">LONG-TERM DIRECTION</span>
                <span className="text-[#42B8E8] font-bold">{PERSONAL_INFO.professionalPositioning.longTermDirection}</span>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-1">BUSINESS VEHICLES</span>
                <span className="text-[#F5F7FA] font-bold">{PERSONAL_INFO.professionalPositioning.businessVehicles}</span>
              </div>

              <div className="sm:col-span-2 md:col-span-3 p-3 rounded-lg bg-[#0E1217] border border-[#1B2127]">
                <span className="text-[#6F7882] block text-[10px] uppercase mb-1">OPERATING LOOP</span>
                <span className="text-[#42B8E8] font-mono font-bold">{PERSONAL_INFO.professionalPositioning.operatingLoop}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
