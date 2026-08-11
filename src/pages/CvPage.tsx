import React, { useState } from 'react';
import { PERSONAL_INFO, SELECTED_PROJECTS, EXPERTISE_CATEGORIES } from '../data/content';
import { FileText, Download, Copy, Check, Printer, Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

export const CvPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const generateFullCvText = () => {
    return `SAYEM
Founder | SANR Corporation Limited
Creator & Builder | SAYEMATRIX
Website: https://sayematrix.com
Email: ${PERSONAL_INFO.contact.email}
LinkedIn: ${PERSONAL_INFO.contact.linkedin}
Location: ${PERSONAL_INFO.location}

==================================================
1. PROFESSIONAL SUMMARY
==================================================
${PERSONAL_INFO.bioSummary}
${PERSONAL_INFO.fullBioParagraphs[0]}

==================================================
2. CORE EXPERTISE
==================================================
${EXPERTISE_CATEGORIES.map(c => `[${c.title}]: ${c.skills.join(', ')}`).join('\n')}

==================================================
3. PRIMARY VENTURES & DIGITAL BRANDS
==================================================
- SANR Corporation Limited (Long-Term Business Venture)
  Primary foundation for companies, software equity, and investments.

- SAYEMATRIX (Digital Ecosystem)
  Multi-domain platform connecting faith, human performance, knowledge, wealth systems, and digital assets.

==================================================
4. SELECTED PROJECTS & SYSTEMS
==================================================
${SELECTED_PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

==================================================
5. EDUCATION
==================================================
Southeast University — Bangladesh

==================================================
6. WORKING PRINCIPLES
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
    <div className="pt-28 pb-20 bg-[#08090B] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#101216] border border-[#242830]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F5F5F5]">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>SAYEMATRIX // OFFICIAL CV DOCUMENT</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded bg-[#14171C] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-emerald-500/40 flex items-center gap-1.5 transition-colors"
              id="cv-copy-btn"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#9299A5]" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-3 py-1.5 rounded bg-[#14171C] border border-[#242830] text-xs font-mono text-[#F5F5F5] hover:border-emerald-500/40 flex items-center gap-1.5 transition-colors"
              id="cv-download-btn"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download TXT</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-emerald-500 text-[#08090B] font-bold text-xs font-mono flex items-center gap-1.5 hover:bg-emerald-400 transition-colors"
              id="cv-print-btn"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Printable Paper CV Document */}
        <div className="bg-[#101216] p-8 sm:p-12 rounded-2xl border border-[#242830] space-y-8 font-sans text-[#9299A5] shadow-2xl print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-[#242830] pb-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black text-[#F5F5F5] tracking-tight uppercase print:text-black">
              SAYEM
            </h1>
            <p className="text-sm font-mono text-emerald-400 font-bold uppercase tracking-wider print:text-emerald-800">
              AI & Automation • Financial Technology & Systems • Financial Markets • Quantitative Analysis • Digital Systems
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[#9299A5]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {PERSONAL_INFO.location}
              </span>
              <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="flex items-center gap-1 hover:text-[#F5F5F5]">
                <Mail className="w-3.5 h-3.5 text-emerald-400" /> {PERSONAL_INFO.contact.email}
              </a>
              <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#F5F5F5]">
                <Linkedin className="w-3.5 h-3.5 text-emerald-400" /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#242830] pb-1">
              01. PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#F5F5F5] leading-relaxed">
              {PERSONAL_INFO.bioSummary}
            </p>
            <p className="text-xs text-[#9299A5] leading-relaxed">
              {PERSONAL_INFO.fullBioParagraphs[0]}
            </p>
          </div>

          {/* Section: Core Expertise */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#242830] pb-1">
              02. CORE EXPERTISE & SPECIALIZATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERTISE_CATEGORIES.map(cat => (
                <div key={cat.id} className="p-3 rounded-lg bg-[#14171C] border border-[#242830] space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold block">{cat.title}</span>
                  <p className="text-[11px] font-mono text-[#9299A5]">{cat.skills.join(' • ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Ventures & Digital Brand */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#242830] pb-1">
              03. VENTURES & DIGITAL BRAND
            </h2>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#14171C] border border-[#242830]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-[#F5F5F5]">SANR Corporation Limited</h3>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">PRIMARY BUSINESS VENTURE</span>
                </div>
                <p className="text-xs text-[#9299A5]">
                  Primary business venture and foundation for holding technologies, AI software pipelines, investments, and long-term business initiatives.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14171C] border border-[#242830]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-[#F5F5F5]">SAYEMATRIX Digital Ecosystem</h3>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">DIGITAL BRAND ENGINE</span>
                </div>
                <p className="text-xs text-[#9299A5]">
                  Independent multi-domain digital ecosystem connecting learning, research, content, financial tools, and personal development.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Selected Work */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#242830] pb-1">
              04. SELECTED SYSTEMS & PROJECTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SELECTED_PROJECTS.map(proj => (
                <div key={proj.id} className="p-3 rounded-lg bg-[#14171C] border border-[#242830] space-y-1">
                  <span className="text-xs font-bold text-[#F5F5F5] block">{proj.title}</span>
                  <p className="text-[11px] text-[#9299A5]">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-[#242830] pb-1">
              05. EDUCATION
            </h2>
            <div className="p-3 rounded-lg bg-[#14171C] border border-[#242830] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#F5F5F5] block">Southeast University</span>
                <span className="text-[11px] font-mono text-[#9299A5]">Bangladesh</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">ACADEMIC DEGREES</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
