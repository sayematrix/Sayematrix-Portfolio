import React, { useState, useEffect } from 'react';
import { ResearchPaper } from '../types';
import { RESEARCH_PAPERS } from '../data/researchPapers';
import {
  ArrowLeft,
  Printer,
  Copy,
  Check,
  Share2,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  Bookmark,
  ChevronRight,
  ExternalLink,
  Code2,
  Table as TableIcon,
  BarChart2,
  ShieldCheck,
  Hash,
  ArrowRight,
  Info
} from 'lucide-react';

interface ResearchPaperPageProps {
  paperId: string;
  onBack: () => void;
  onSelectPaper: (id: string) => void;
}

export const ResearchPaperPage: React.FC<ResearchPaperPageProps> = ({
  paperId,
  onBack,
  onSelectPaper
}) => {
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('abstract');

  const paper = RESEARCH_PAPERS.find((p) => p.id === paperId) || RESEARCH_PAPERS[0];
  const currentIndex = RESEARCH_PAPERS.findIndex((p) => p.id === paper.id);
  const prevPaper = currentIndex > 0 ? RESEARCH_PAPERS[currentIndex - 1] : null;
  const nextPaper = currentIndex < RESEARCH_PAPERS.length - 1 ? RESEARCH_PAPERS[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paperId]);

  const handleCopyCitation = () => {
    const citation = `${paper.author} (${paper.date.split(' ').slice(-1)[0]}). ${paper.title}: ${paper.subtitle}. ${paper.affiliation}, ${paper.paperNumber}. DOI: ${paper.doi}`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2000);
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const toc = [
    { id: 'abstract', label: 'Abstract & Takeaways' },
    { id: 'introduction', label: '1. Introduction' },
    { id: 'literature', label: '2. Literature Review' },
    { id: 'problem', label: '3. Problem Statement' },
    { id: 'methodology', label: '4. Methodology' },
    { id: 'analysis', label: '5. Analysis & Results' },
    { id: 'discussion', label: '6. Discussion' },
    { id: 'conclusion', label: '7. Conclusion' },
    { id: 'references', label: '8. References' },
    ...(paper.appendix ? [{ id: 'appendix', label: '9. Appendix' }] : [])
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050607] text-[#F5F7FA] font-sans pt-20 pb-24 selection:bg-[#42B8E8] selection:text-[#050607] print:bg-white print:text-black">
      
      {/* Print-Only Styles Injection */}
      <style>{`
        @media print {
          @page {
            margin: 1.5cm;
            size: A4 portrait;
          }

          /* Hide global navigation, footers, sticky headers, sidebars, and non-printable controls */
          header, footer, nav, aside, .no-print, [role="navigation"] {
            display: none !important;
          }

          /* Reset root background and text colors for high-contrast academic print */
          html, body, div, main, article, section {
            background: #ffffff !important;
            color: #111111 !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }

          /* Force article column to expand to 100% width */
          article {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            float: none !important;
          }

          /* All headings & body text set to crisp black */
          h1, h2, h3, h4, h5, h6, p, span, li, td, th {
            color: #111111 !important;
          }

          /* Primary accents formatted cleanly for print */
          .text-\\[\\#42B8E8\\] {
            color: #0284c7 !important;
          }

          /* Convert dark container cards into light bordered boxes */
          .bg-\\[\\#0A0D10\\], .bg-\\[\\#0E1217\\], .bg-\\[\\#050607\\] {
            background-color: #f9fafb !important;
            border: 1px solid #e5e7eb !important;
          }

          /* Formal code blocks for print */
          pre, code {
            background-color: #f3f4f6 !important;
            color: #111827 !important;
            border: 1px solid #e5e7eb !important;
            white-space: pre-wrap !important;
            word-break: break-all !important;
          }

          /* Formal empirical data tables */
          table {
            border: 1px solid #d1d5db !important;
            width: 100% !important;
          }
          th {
            background-color: #f3f4f6 !important;
            color: #111827 !important;
            border-bottom: 2px solid #d1d5db !important;
          }
          td {
            border-bottom: 1px solid #e5e7eb !important;
          }

          /* Page break avoidance for academic sections */
          section, figure, blockquote, table, pre {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Links formatting */
          a {
            text-decoration: none !important;
            color: #111111 !important;
          }
        }
      `}</style>

      {/* Top Academic Navigation Header */}
      <div className="no-print bg-[#0A0D10]/95 border-b border-[#1B2127] sticky top-14 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#42B8E8]/50 text-xs font-mono text-[#F5F7FA] hover:text-[#42B8E8] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#42B8E8]" />
            <span>Back to Research Library</span>
          </button>

          <div className="hidden md:flex items-center gap-3 text-xs font-mono text-[#6F7882]">
            <span className="px-2 py-0.5 rounded bg-[#42B8E8]/10 border border-[#42B8E8]/30 text-[#42B8E8] font-bold">
              {paper.paperNumber}
            </span>
            <span className="text-[#1B2127]">|</span>
            <span>DOI: {paper.doi}</span>
            <span className="text-[#1B2127]">|</span>
            <span className="text-[#F5F7FA] font-semibold">{paper.status}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCitation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#42B8E8]/50 text-xs font-mono text-[#A7B0BA] hover:text-[#F5F7FA] transition-all cursor-pointer"
              title="Copy academic citation string"
            >
              {copiedCitation ? <Check className="w-3.5 h-3.5 text-[#42B8E8]" /> : <Copy className="w-3.5 h-3.5 text-[#42B8E8]" />}
              <span className="hidden sm:inline">{copiedCitation ? 'Citation Copied' : 'Cite Paper'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#42B8E8]/50 text-xs font-mono text-[#F5F7FA] hover:text-[#42B8E8] transition-all cursor-pointer"
              title="Print or export paper as PDF"
              id="print-paper-btn"
            >
              <Printer className="w-3.5 h-3.5 text-[#42B8E8]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Table of Contents Sidebar (Desktop) */}
          <aside className="no-print hidden lg:block lg:col-span-3 sticky top-32 space-y-6">
            <div className="p-4 rounded-xl bg-[#0A0D10] border border-[#1B2127]">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#1B2127]">
                <BookOpen className="w-4 h-4 text-[#42B8E8]" />
                <span className="text-xs font-mono font-bold text-[#F5F7FA] uppercase tracking-wider">
                  PAPER OUTLINE
                </span>
              </div>
              <nav className="space-y-1">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-[#42B8E8]/10 text-[#42B8E8] border-l-2 border-[#42B8E8] font-bold pl-3'
                        : 'text-[#A7B0BA] hover:text-[#F5F7FA] hover:bg-[#0E1217]'
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                    {activeSection === item.id && <ChevronRight className="w-3 h-3 text-[#42B8E8] shrink-0" />}
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Metrics */}
            <div className="p-4 rounded-xl bg-[#0A0D10] border border-[#1B2127] space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#6F7882] uppercase tracking-widest block">
                PUBLICATION METRICS
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded bg-[#0E1217] border border-[#1B2127]">
                  <span className="text-[10px] text-[#6F7882] block">Est. Reading</span>
                  <span className="font-bold text-[#F5F7FA]">{paper.readTime}</span>
                </div>
                <div className="p-2 rounded bg-[#0E1217] border border-[#1B2127]">
                  <span className="text-[10px] text-[#6F7882] block">References</span>
                  <span className="font-bold text-[#F5F7FA]">{paper.references.length} Citations</span>
                </div>
                <div className="p-2 rounded bg-[#0E1217] border border-[#1B2127]">
                  <span className="text-[10px] text-[#6F7882] block">Category</span>
                  <span className="font-bold text-[#42B8E8] truncate block">{paper.category}</span>
                </div>
                <div className="p-2 rounded bg-[#0E1217] border border-[#1B2127]">
                  <span className="text-[10px] text-[#6F7882] block">Status</span>
                  <span className="font-bold text-[#F5F7FA] truncate block">{paper.status}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Academic Research Article Column */}
          <article className="lg:col-span-9 space-y-12 print-full-width">
            
            {/* Paper Title & Metadata Header */}
            <header className="space-y-6 pb-8 border-b border-[#1B2127]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#42B8E8]/10 border border-[#42B8E8]/30 text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-widest">
                  {paper.paperNumber}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#A7B0BA]">
                  {paper.category}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#F5F7FA] font-semibold">
                  {paper.version}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-[#F5F7FA] tracking-tight leading-tight print-text-dark">
                {paper.title}
              </h1>

              <p className="text-base sm:text-lg font-sans text-[#A7B0BA] leading-relaxed">
                {paper.subtitle}
              </p>

              {/* Author & Affiliation Details Card */}
              <div className="p-5 rounded-xl bg-[#0A0D10] border border-[#1B2127] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[#6F7882] uppercase tracking-wider block mb-1">
                    PRIMARY RESEARCHER &amp; AUTHOR
                  </span>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#42B8E8]" />
                    <span className="text-sm font-bold text-[#F5F7FA]">{paper.author}</span>
                  </div>
                  <span className="text-[#A7B0BA] block mt-0.5">{paper.authorRole}</span>
                </div>

                <div>
                  <span className="text-[10px] text-[#6F7882] uppercase tracking-wider block mb-1">
                    RESEARCH INSTITUTION / LAB
                  </span>
                  <span className="text-xs font-semibold text-[#F5F7FA] block">{paper.affiliation}</span>
                  <div className="flex items-center gap-4 text-[#6F7882] mt-1.5 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#42B8E8]" />
                      {paper.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#42B8E8]" />
                      {paper.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* Abstract Section */}
            <section id="abstract" className="space-y-6 scroll-mt-28">
              <div className="p-6 sm:p-8 rounded-xl bg-[#0A0D10] border border-[#1B2127] space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#1B2127] pb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#42B8E8]" />
                    <h2 className="text-sm font-mono font-bold text-[#F5F7FA] uppercase tracking-widest">
                      EXECUTIVE ABSTRACT
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono text-[#6F7882]">DOI: {paper.doi}</span>
                </div>

                <p className="text-sm sm:text-base font-sans text-[#F5F7FA] leading-relaxed italic">
                  "{paper.abstract}"
                </p>

                {/* Keywords */}
                <div className="pt-2 border-t border-[#1B2127] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-[#6F7882] uppercase">KEYWORDS:</span>
                  {paper.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded bg-[#0E1217] border border-[#1B2127] text-[11px] font-mono text-[#42B8E8]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Key Takeaways */}
                <div className="p-4 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-3">
                  <span className="text-xs font-mono font-bold text-[#42B8E8] uppercase tracking-wider flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#42B8E8]" /> KEY RESEARCH TAKEAWAYS
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#F5F7FA]">
                    {paper.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-[#42B8E8] font-bold shrink-0">{idx + 1}.</span>
                        <span className="leading-snug">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </section>

            {/* Section 1: Introduction */}
            <section id="introduction" className="space-y-4 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] flex items-center gap-2 border-b border-[#1B2127] pb-2">
                <span className="text-[#42B8E8]">1.0</span> INTRODUCTION
              </h2>
              <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#A7B0BA] space-y-4 leading-relaxed font-sans">
                {paper.introduction.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Section 2: Literature Review */}
            <section id="literature" className="space-y-4 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] flex items-center gap-2 border-b border-[#1B2127] pb-2">
                <span className="text-[#42B8E8]">2.0</span> BACKGROUND &amp; LITERATURE REVIEW
              </h2>
              <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#A7B0BA] space-y-4 leading-relaxed font-sans">
                {paper.literatureReview.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Section 3: Problem Statement */}
            <section id="problem" className="space-y-4 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] flex items-center gap-2 border-b border-[#1B2127] pb-2">
                <span className="text-[#42B8E8]">3.0</span> RESEARCH QUESTION &amp; PROBLEM STATEMENT
              </h2>
              <div className="p-5 rounded-lg bg-[#0A0D10] border border-[#1B2127] text-sm sm:text-base text-[#F5F7FA] leading-relaxed font-sans italic border-l-4 border-l-[#42B8E8]">
                {paper.problemStatement}
              </div>
            </section>

            {/* Section 4: Methodology */}
            <section id="methodology" className="space-y-4 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] flex items-center gap-2 border-b border-[#1B2127] pb-2">
                <span className="text-[#42B8E8]">4.0</span> METHODOLOGY &amp; RESEARCH FRAMEWORK
              </h2>
              <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#A7B0BA] space-y-4 leading-relaxed font-sans">
                {paper.methodology.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Section 5: Analysis & Results */}
            <section id="analysis" className="space-y-8 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] flex items-center gap-2 border-b border-[#1B2127] pb-2">
                <span className="text-[#42B8E8]">5.0</span> EMPIRICAL ANALYSIS &amp; FINDINGS
              </h2>

              {paper.analysisAndResults.map((sec) => (
                <div key={sec.id} className="space-y-6 p-6 rounded-xl bg-[#0A0D10] border border-[#1B2127]">
                  <h3 className="text-lg font-mono font-bold text-[#F5F7FA] flex items-center gap-2">
                    <span className="text-[#42B8E8]">{sec.number}</span> {sec.title}
                  </h3>

                  <p className="text-sm text-[#A7B0BA] leading-relaxed font-sans">
                    {sec.content}
                  </p>

                  {/* Mathematical Equation Block */}
                  {sec.equation && (
                    <div className="p-5 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-2 text-center">
                      <div className="text-xs font-mono text-[#42B8E8] uppercase tracking-widest block mb-1">
                        FORMAL MATHEMATICAL EQUATION
                      </div>
                      <div className="py-3 font-mono text-base sm:text-lg text-[#F5F7FA] overflow-x-auto font-bold tracking-wide">
                        {sec.equation.latex}
                      </div>
                      <p className="text-xs font-mono text-[#6F7882] italic">
                        {sec.equation.description}
                      </p>
                    </div>
                  )}

                  {/* Callout Research Note */}
                  {sec.callout && (
                    <div className="p-4 rounded-lg bg-[#0E1217] border border-[#42B8E8]/30 flex items-start gap-3 text-xs font-sans">
                      <Info className="w-4 h-4 text-[#42B8E8] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-bold text-[#42B8E8] uppercase block mb-1">
                          {sec.callout.title}
                        </span>
                        <p className="text-[#A7B0BA] leading-relaxed">{sec.callout.text}</p>
                      </div>
                    </div>
                  )}

                  {/* Data Table */}
                  {sec.table && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#F5F7FA] font-bold">
                        <TableIcon className="w-4 h-4 text-[#42B8E8]" />
                        <span>{sec.table.title}</span>
                      </div>
                      <div className="overflow-x-auto rounded-lg border border-[#1B2127]">
                        <table className="w-full text-left border-collapse text-xs font-mono">
                          <thead>
                            <tr className="bg-[#0E1217] border-b border-[#1B2127] text-[#F5F7FA]">
                              {sec.table.headers.map((h, i) => (
                                <th key={i} className="p-3 uppercase font-bold">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#1B2127] text-[#A7B0BA]">
                            {sec.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-[#0E1217]/50 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'font-bold text-[#F5F7FA]' : ''}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Figure / Chart Visual */}
                  {sec.figure && (
                    <div className="p-5 rounded-lg bg-[#0E1217] border border-[#1B2127] space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#F5F7FA] font-bold">
                          <BarChart2 className="w-4 h-4 text-[#42B8E8]" />
                          <span>{sec.figure.title}</span>
                        </div>
                      </div>

                      {sec.figure.dataPoints && (
                        <div className="space-y-3 pt-2">
                          {sec.figure.dataPoints.map((dp, idx) => (
                            <div key={idx} className="space-y-1 text-xs font-mono">
                              <div className="flex justify-between text-[11px]">
                                <span className="text-[#A7B0BA]">{dp.label}</span>
                                <span className="text-[#42B8E8] font-bold">{dp.value}</span>
                              </div>
                              <div className="h-2 w-full bg-[#050607] rounded-full overflow-hidden flex">
                                <div
                                  className="h-full bg-[#2D9CDB] transition-all duration-500"
                                  style={{ width: `${Math.min(100, (dp.value / (sec.figure?.dataPoints?.[0]?.value || 1)) * 100)}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <p className="text-[11px] font-mono text-[#6F7882] italic border-t border-[#1B2127] pt-3">
                        {sec.figure.caption}
                      </p>
                    </div>
                  )}

                  {/* Code Snippet Box */}
                  {sec.codeSnippet && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-[#6F7882]">
                        <span className="flex items-center gap-1.5 text-[#42B8E8]">
                          <Code2 className="w-4 h-4" /> {sec.codeSnippet.filename || 'CODE SPECIFICATION'}
                        </span>
                        <button
                          onClick={() => handleCopyCode(sec.codeSnippet!.code, sec.id)}
                          className="flex items-center gap-1 hover:text-[#F5F7FA] cursor-pointer"
                        >
                          {copiedCode === sec.id ? <Check className="w-3.5 h-3.5 text-[#42B8E8]" /> : <Copy className="w-3.5 h-3.5 text-[#42B8E8]" />}
                          <span>{copiedCode === sec.id ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <pre className="p-4 rounded-lg bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#7DD3FC] overflow-x-auto leading-relaxed">
                        <code>{sec.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                </div>
              ))}
            </section>

            {/* Section 6: Discussion */}
            <section id="discussion" className="space-y-4 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] flex items-center gap-2 border-b border-[#1B2127] pb-2">
                <span className="text-[#42B8E8]">6.0</span> DISCUSSION &amp; PRACTICAL IMPLICATIONS
              </h2>
              <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#A7B0BA] space-y-4 leading-relaxed font-sans">
                {paper.discussion.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Section 7: Conclusion */}
            <section id="conclusion" className="space-y-4 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] flex items-center gap-2 border-b border-[#1B2127] pb-2">
                <span className="text-[#42B8E8]">7.0</span> CONCLUSION &amp; FUTURE RESEARCH
              </h2>
              <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#A7B0BA] space-y-4 leading-relaxed font-sans">
                {paper.conclusion.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Section 8: References / Bibliography */}
            <section id="references" className="space-y-4 scroll-mt-28 border-t border-[#1B2127] pt-8">
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] flex items-center gap-2">
                <span className="text-[#42B8E8]">8.0</span> REFERENCES &amp; BIBLIOGRAPHY
              </h2>
              <div className="space-y-3 font-mono text-xs text-[#A7B0BA]">
                {paper.references.map((ref) => (
                  <div key={ref.id} className="p-3.5 rounded-lg bg-[#0A0D10] border border-[#1B2127] space-y-1">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-[#42B8E8]">[{ref.id}]</span>
                      <p className="text-[#F5F7FA] leading-relaxed">
                        <span className="font-bold">{ref.authors}</span> ({ref.year}). "{ref.title}". <span className="italic text-[#A7B0BA]">{ref.journal}</span>.
                      </p>
                    </div>
                    {ref.doi && (
                      <div className="pl-6 text-[11px] text-[#42B8E8]">
                        <span>DOI: {ref.doi}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Appendix (if exists) */}
            {paper.appendix && (
              <section id="appendix" className="space-y-4 scroll-mt-28 border-t border-[#1B2127] pt-8">
                <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] flex items-center gap-2">
                  <span className="text-[#42B8E8]">9.0</span> {paper.appendix.title}
                </h2>
                <div className="p-6 rounded-lg bg-[#0A0D10] border border-[#1B2127] space-y-4">
                  <p className="text-sm font-sans text-[#A7B0BA] leading-relaxed">
                    {paper.appendix.content}
                  </p>
                  {paper.appendix.codeSnippet && (
                    <pre className="p-4 rounded-lg bg-[#0E1217] border border-[#1B2127] text-xs font-mono text-[#7DD3FC] overflow-x-auto leading-relaxed">
                      <code>{paper.appendix.codeSnippet.code}</code>
                    </pre>
                  )}
                </div>
              </section>
            )}

            {/* Previous / Next Research Navigation Bar */}
            <div className="no-print pt-12 border-t border-[#1B2127] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPaper ? (
                <button
                  onClick={() => onSelectPaper(prevPaper.id)}
                  className="group p-4 rounded-lg bg-[#0A0D10] border border-[#1B2127] hover:border-[#42B8E8]/50 text-left transition-all space-y-1 cursor-pointer"
                >
                  <span className="text-[10px] font-mono text-[#6F7882] uppercase block flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3 text-[#42B8E8]" /> PREVIOUS RESEARCH PAPER
                  </span>
                  <span className="text-xs font-mono font-bold text-[#F5F7FA] group-hover:text-[#42B8E8] transition-colors line-clamp-1">
                    {prevPaper.paperNumber}: {prevPaper.title}
                  </span>
                </button>
              ) : <div />}

              {nextPaper ? (
                <button
                  onClick={() => onSelectPaper(nextPaper.id)}
                  className="group p-4 rounded-lg bg-[#0A0D10] border border-[#1B2127] hover:border-[#42B8E8]/50 text-right transition-all space-y-1 cursor-pointer"
                >
                  <span className="text-[10px] font-mono text-[#6F7882] uppercase block flex items-center justify-end gap-1">
                    NEXT RESEARCH PAPER <ArrowRight className="w-3 h-3 text-[#42B8E8]" />
                  </span>
                  <span className="text-xs font-mono font-bold text-[#F5F7FA] group-hover:text-[#42B8E8] transition-colors line-clamp-1">
                    {nextPaper.paperNumber}: {nextPaper.title}
                  </span>
                </button>
              ) : <div />}
            </div>

          </article>

        </div>
      </div>

    </div>
  );
};
