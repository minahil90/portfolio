import React from 'react';
import { ArrowUp, Heart, Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Interests', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#1A1A1A] text-[#FAF9F6] pt-16 pb-12 px-6 sm:px-8 border-t border-black/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand Emblem */}
        <div className="w-12 h-12 rounded-full bg-[#8C7851] flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-sm mb-6">
          MT
        </div>

        {/* Main Name */}
        <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-white mb-2">
          {PERSONAL_INFO.name}
        </h2>

        {/* Subtitle / Role */}
        <p className="text-xs uppercase tracking-widest text-[#B8A38E] font-medium mb-8">
          Student • Creative Thinker • Future Professional
        </p>

        {/* Navigation Quick Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest font-semibold text-stone-400 mb-10 max-w-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#8C7851] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Icons Bar */}
        <div className="flex items-center gap-4 mb-10">
          <a
            href={PERSONAL_INFO.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Minahil Tariq on LinkedIn"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#8C7851] hover:bg-[#8C7851]/20 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Minahil Tariq on GitHub"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#8C7851] hover:bg-[#8C7851]/20 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Minahil Tariq on Twitter"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#8C7851] hover:bg-[#8C7851]/20 transition-all"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email Minahil Tariq"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#8C7851] hover:bg-[#8C7851]/20 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-[1px] bg-white/10 mb-8" />

        {/* Copyright & Back to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div>
            © 2026 Minahil Tariq. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Designed with precision & purpose</span>
          </div>
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-white hover:border-[#8C7851] hover:bg-[#8C7851]/20 transition-all cursor-pointer text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#8C7851]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
