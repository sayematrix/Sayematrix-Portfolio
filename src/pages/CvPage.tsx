import React, { useState } from 'react';
import { PERSONAL_INFO, SELECTED_PROJECTS, EXPERTISE_CATEGORIES, VENTURES, CURRENT_FOCUS_GRID } from '../data/content';
import { FileText, Download, Copy, Check, Printer, Mail, Linkedin, MapPin, ExternalLink, Target } from 'lucide-react';

export const CvPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const generateFullCvText = () => {
    return `SAYEM
AI & Automation • Financial Technology & Systems • Financial Markets • Quantitative Analysis • Digital Systems
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.contact.email}
LinkedIn: ${PERSONAL_INFO.contact.linkedin}
Website: https://sayematrix.com

==================================================
01. PROFESSIONAL SUMMARY
==================================================
${PERSONAL_INFO.bioSummary}

${PERSONAL_INFO.fullBioParagraphs.join('\n\n')}

==================================================
02. CURRENT FOCUS AREAS
==================================================
${CURRENT_FOCUS_GRID.map(f => `• ${f.title}: ${f.description}`).join('\n')}

==================================================
03. CORE EXPERTISE & SPECIALIZATIONS
==================================================
${EXPERTISE_CATEGORIES.map(c => `[${c.title}]: ${c.skills.join(', ')}`).join('\n')}

==================================================
04. PRIMARY VENTURES & DIGITAL BRAND
==================================================
- ${VENTURES[0].name} (${VENTURES[0].label})
  ${VENTURES[0].description}

- ${VENTURES[1].name} (${VENTURES[1].label})
  ${VENTURES[1].description}

==================================================
05. SELECTED SYSTEMS & PROJECTS
==================================================
${SELECTED_PROJECTS.map(p => `• ${p.title} (${p.category}): ${p.description}`).join('\n')}

==================================================
06. EDUCATION
==================================================
Southeast University — Bangladesh

==================================================
07. WORKING PRINCIPLES
==================================================
${PERSONAL_INFO.workingPrinciples.join(' -> ')}
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
    <div className="pt-28 pb-20 bg-[#041618] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#061D20] border border-[#0E353C]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F8FAFC]">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>SAYEMATRIX // OFFICIAL CV & PROFESSIONAL PROFILE</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded bg-[#031214] border border-[#0E353C] text-xs font-mono text-[#F8FAFC] hover:border-emerald-500/40 flex items-center gap-1.5 transition-colors cursor-pointer"
              id="cv-copy-btn"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-3 py-1.5 rounded bg-[#031214] border border-[#0E353C] text-xs font-mono text-[#F8FAFC] hover:border-emerald-500/40 flex items-center gap-1.5 transition-colors cursor-pointer"
              id="cv-download-btn"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download TXT</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-emerald-500 text-[#031214] font-bold text-xs font-mono flex items-center gap-1.5 hover:bg-emerald-400 transition-colors cursor-pointer"
              id="cv-print-btn"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Printable Paper CV Document */}
        <div className="bg-[#061D20] p-8 sm:p-12 rounded-2xl border border-[#0E353C] space-y-10 font-sans text-[#94A3B8] shadow-2xl print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-[#0E353C] pb-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight uppercase print:text-black">
              SAYEM
            </h1>
            <p className="text-xs sm:text-sm font-mono text-emerald-400 font-bold uppercase tracking-wider leading-relaxed print:text-emerald-800">
              AI & Automation • Financial Technology & Systems • Financial Markets • Quantitative Analysis • Digital Systems
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {PERSONAL_INFO.location}
              </span>
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(PERSONAL_INFO.contact.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F8FAFC] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" /> {PERSONAL_INFO.contact.email}
              </a>
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F8FAFC] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-emerald-400" /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Section 01: Professional Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#0E353C] pb-1.5">
              01. PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed font-semibold">
              {PERSONAL_INFO.bioSummary}
            </p>
            {PERSONAL_INFO.fullBioParagraphs.map((para, i) => (
              <p key={i} className="text-xs text-[#94A3B8] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Section 02: Current Focus */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#0E353C] pb-1.5 flex items-center justify-between">
              <span>02. CURRENT FOCUS AREAS</span>
              <Target className="w-3.5 h-3.5 text-emerald-400" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CURRENT_FOCUS_GRID.map((item) => (
                <div key={item.number} className="p-3.5 rounded-xl bg-[#031214] border border-[#0E353C] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">{item.number}. {item.title}</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 03: Core Expertise & Specializations */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#0E353C] pb-1.5">
              03. CORE EXPERTISE & SPECIALIZATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERTISE_CATEGORIES.map(cat => (
                <div key={cat.id} className="p-3.5 rounded-xl bg-[#031214] border border-[#0E353C] space-y-1.5">
                  <span className="text-xs font-mono text-emerald-400 font-bold block">{cat.title}</span>
                  <p className="text-[10px] font-mono text-[#94A3B8] italic">{cat.subtitle}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cat.skills.map(skill => (
                      <span key={skill} className="px-2 py-0.5 rounded bg-[#061D20] border border-[#0E353C] text-[10px] font-mono text-[#F8FAFC]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 04: Ventures & Digital Brand */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#0E353C] pb-1.5">
              04. PRIMARY VENTURES & DIGITAL BRAND
            </h2>

            <div className="space-y-3">
              {VENTURES.map(venture => (
                <div key={venture.id} className="p-4 rounded-xl bg-[#031214] border border-[#0E353C] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-[#F8FAFC]">{venture.name}</h3>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 w-fit">
                      {venture.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {venture.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {venture.highlights.map((h, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block"></span>
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
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#0E353C] pb-1.5">
              05. SELECTED SYSTEMS & PROJECTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SELECTED_PROJECTS.map(proj => (
                <div key={proj.id} className="p-4 rounded-xl bg-[#031214] border border-[#0E353C] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F8FAFC]">{proj.title}</span>
                    <span className="text-[9px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-[#061D20] border border-[#0E353C]">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 06: Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#0E353C] pb-1.5">
              06. EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-[#031214] border border-[#0E353C] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#F8FAFC] block">Southeast University</span>
                <span className="text-[11px] font-mono text-[#94A3B8]">Bangladesh</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-1 rounded bg-[#061D20] border border-[#0E353C]">
                ACADEMIC DEGREES
              </span>
            </div>
          </div>

          {/* Section 07: Working Principles */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#0E353C] pb-1.5">
              07. WORKING PRINCIPLES
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {PERSONAL_INFO.workingPrinciples.map((principle, idx) => (
                <span key={principle} className="px-3 py-1.5 rounded-lg bg-[#031214] border border-[#0E353C] text-xs font-mono text-[#F8FAFC]">
                  <span className="text-emerald-400 font-bold mr-1.5">0{idx + 1}.</span>
                  {principle}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

