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
        { label: 'Send Email', href: `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(PERSONAL_INFO.contact.email)}` }
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
    <section className="py-24 bg-[#0A0D10] border-b border-[#1B2127] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-8">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1217] border border-[#1B2127]">
              <Mail className="w-3.5 h-3.5 text-[#42B8E8]" />
              <span className="text-[10px] font-mono text-[#A7B0BA] uppercase tracking-widest">
                DIRECT COMMUNICATION CHANNELS
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-sans font-black text-[#F5F7FA] uppercase tracking-tight leading-tight">
              LET’S BUILD <br />
              <span className="text-[#42B8E8]">SOMETHING</span> <br />
              MEANINGFUL.
            </h2>

            <p className="text-base font-sans text-[#A7B0BA] leading-relaxed max-w-xl">
              Interested in technology, financial systems, research, automation, or long-term ventures? Connect directly through any of these primary channels.
            </p>
          </div>

          {/* Structured Contact Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactChannels.map((channel, idx) => {
              const IconComponent = channel.icon;
              return (
                <div key={idx} className="p-5 rounded-lg bg-[#0E1217] border border-[#1B2127] hover:border-[#2D9CDB]/40 hover:bg-[#151A20] transition-all duration-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-[#42B8E8] shrink-0" />
                        <span className="font-sans font-bold text-[#F5F7FA] text-sm">{channel.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#6F7882] uppercase">{channel.value}</span>
                    </div>
                    <p className="text-xs font-mono text-[#A7B0BA] leading-snug">
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
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#42B8E8] hover:text-[#7DD3FC] transition-colors"
                      >
                        <span>{link.label} →</span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-xs font-mono text-[#6F7882] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#42B8E8]" />
            <span>Direct messages routed to SAYEM personal system inbox</span>
          </div>

        </div>
      </div>
    </section>
  );
};

