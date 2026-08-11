import React from 'react';
import { PERSONAL_INFO } from '../data/content';
import { Mail, Linkedin, Github, ShieldCheck, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactChannels = [
    {
      title: 'Email',
      value: PERSONAL_INFO.contact.email,
      note: PERSONAL_INFO.contact.emailNote,
      icon: Mail,
      links: [
        { label: 'Send Email', href: `mailto:${PERSONAL_INFO.contact.email}` }
      ]
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/sayematrix',
      note: PERSONAL_INFO.contact.linkedinNote,
      icon: Linkedin,
      links: [
        { label: 'Connect', href: PERSONAL_INFO.contact.linkedin }
      ]
    },
    {
      title: 'GitHub',
      value: 'github.com/sayematrix',
      note: PERSONAL_INFO.contact.githubNote,
      icon: Github,
      links: [
        { label: 'View Code', href: PERSONAL_INFO.contact.github }
      ]
    },
    {
      title: 'SAYEMATRIX',
      value: 'Instagram & YouTube — @sayematrix',
      note: 'For my digital work, ideas, content, and ecosystem.',
      icon: Globe,
      links: [
        { label: 'Instagram', href: 'https://instagram.com/sayematrix' },
        { label: 'YouTube', href: 'https://youtube.com/@sayematrix' }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#08090B] border-b border-[#242830] relative overflow-hidden" id="contact">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#242830_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-8">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101216] border border-[#242830]">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-[#9299A5] uppercase tracking-widest">
                DIRECT COMMUNICATION CHANNELS
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-sans font-black text-[#F5F5F5] uppercase tracking-tight leading-tight">
              LET’S BUILD <br />
              <span className="text-emerald-400">SOMETHING</span> <br />
              MEANINGFUL.
            </h2>

            <p className="text-base font-sans text-[#9299A5] leading-relaxed max-w-xl">
              Interested in technology, financial systems, research, automation, or long-term ventures? Connect directly through any of these primary channels.
            </p>
          </div>

          {/* Structured Contact Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactChannels.map((channel, idx) => {
              const IconComponent = channel.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-[#101216] border border-[#242830] hover:border-emerald-500/40 transition-all space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-sans font-bold text-[#F5F5F5] text-sm">{channel.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#71717A] uppercase">{channel.value}</span>
                    </div>
                    <p className="text-xs font-mono text-[#9299A5] leading-snug">
                      {channel.note}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-4 flex-wrap">
                    {channel.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <span>{link.label} →</span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-xs font-mono text-[#9299A5] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Direct messages routed to SAYEM personal system inbox</span>
          </div>

        </div>
      </div>
    </section>
  );
};

