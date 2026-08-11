import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/content';
import { Mail, Linkedin, ArrowUpRight, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Venture / Systems Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#08090B] border-b border-[#242830] relative overflow-hidden" id="contact">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#242830_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Direct Contact CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101216] border border-[#242830]">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest">
                DIRECT COMMUNICATION CHANNEL
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-sans font-black text-[#F5F5F5] uppercase tracking-tight leading-tight">
              LET’S BUILD <br />
              <span className="text-emerald-400">SOMETHING</span> <br />
              MEANINGFUL.
            </h2>

            <p className="text-base font-sans text-[#9299A5] leading-relaxed max-w-lg">
              Interested in technology, financial systems, research, automation, or long-term ventures? Let’s connect.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#08090B] font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
                id="contact-linkedin-link"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#101216] hover:bg-[#14171C] border border-[#242830] hover:border-emerald-500/40 text-[#F5F5F5] font-mono font-bold text-xs uppercase tracking-wider transition-all"
                id="contact-email-link"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Direct Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 text-xs font-mono text-[#9299A5] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct messages routed to SAYEM personal system inbox</span>
            </div>
          </div>

          {/* Right Column: Direct Quick Message Box */}
          <div className="lg:col-span-6 bg-[#101216] p-6 sm:p-8 rounded-2xl border border-[#242830] shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-sans font-bold text-[#F5F5F5]">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="text-xs font-mono text-[#9299A5] max-w-xs mx-auto">
                  Thank you for reaching out. SAYEM will review your inquiry shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded bg-[#14171C] border border-[#242830] text-xs font-mono text-emerald-400"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#242830]">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    DIRECT INQUIRY FORM
                  </span>
                  <span className="text-[10px] font-mono text-[#9299A5]">24H RESPONSE TIME</span>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#9299A5] mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Founder / Investor / Researcher"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14171C] border border-[#242830] text-xs font-mono text-[#F5F5F5] focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#9299A5] mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your.email@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14171C] border border-[#242830] text-xs font-mono text-[#F5F5F5] focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#9299A5] mb-1">MESSAGE / INQUIRY</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your proposal, technical question, or venture collaboration..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14171C] border border-[#242830] text-xs font-mono text-[#F5F5F5] focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#08090B] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
