import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'education', 'projects', 'achievements', 'interests', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Interests', href: '#interests', id: 'interests' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo - Artistic Flair Monogram */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            id="nav-brand-link"
          >
            <span className="font-serif italic text-2xl tracking-tighter text-[#1A1A1A] group-hover:text-[#8C7851] transition-colors">
              M.T.
            </span>
            <div className="flex flex-col border-l border-black/10 pl-3">
              <span className="font-medium tracking-[0.18em] text-[11px] uppercase text-[#1A1A1A]">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#8C7851] font-semibold uppercase hidden sm:inline-block">
                Personal Brand & Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Artistic Flair style */}
          <nav className="hidden lg:flex items-center gap-6 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-black/10 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  id={`nav-link-${link.id}`}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-200 relative ${
                    isActive
                      ? 'text-black underline underline-offset-8 decoration-1 decoration-[#8C7851]'
                      : 'text-[#8C7851] hover:text-black'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold px-4 py-2 border border-black text-[#1A1A1A] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              <FileText className="w-3 h-3 text-[#8C7851] group-hover:text-white" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              id="nav-contact-cta"
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold px-5 py-2 bg-[#B8A38E] text-white hover:bg-[#8C7851] transition-all duration-300 cursor-pointer shadow-sm"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="nav-mobile-toggle"
            className="lg:hidden p-2.5 rounded-full bg-white border border-black/10 text-[#1A1A1A] hover:bg-stone-100 transition-colors shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-40 p-6 mx-4 rounded-2xl bg-[#FAF9F6]/95 backdrop-blur-xl border border-black/10 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-[0.15em] font-bold transition-colors ${
                      isActive
                        ? 'bg-[#EEECE7] text-[#1A1A1A] border border-[#8C7851]/30'
                        : 'text-[#8C7851] hover:bg-stone-100 hover:text-black'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-[#8C7851]" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-black/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-black text-[#1A1A1A] font-bold text-[10px] tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#8C7851]" />
                  <span>View & Download Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#B8A38E] text-white font-bold text-[10px] tracking-widest uppercase hover:bg-[#8C7851] transition-colors"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
