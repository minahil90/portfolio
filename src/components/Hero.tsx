import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Send, BookOpen, Laptop, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreJourney: () => void;
  onGetInTouch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreJourney, onGetInTouch }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden mesh-bg"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B8A38E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#8C7851]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Text & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start text-left justify-between"
        >
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8C7851]">
              Personal Brand & Portfolio
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C7851]"></span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-[10px] uppercase tracking-wider font-semibold text-[#1A1A1A] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8C7851] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8C7851]"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Main Name Heading - Artistic Flair Typography */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-[#1A1A1A] leading-[0.9] tracking-tight mb-6">
            Minahil<br />
            <span className="italic ml-6 sm:ml-10 text-[#8C7851]">Tariq</span>
          </h1>

          {/* Subtitle & Role */}
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium text-[#1A1A1A] tracking-wide mb-4">
            <span className="font-serif italic text-lg sm:text-xl text-[#8C7851]">
              Student
            </span>
            <span className="text-stone-300">•</span>
            <span className="font-serif italic text-lg sm:text-xl text-[#8C7851]">
              Creative Thinker
            </span>
            <span className="text-stone-300">•</span>
            <span className="font-serif italic text-lg sm:text-xl text-[#8C7851]">
              Future Professional
            </span>
          </div>

          {/* Hero Statement Block */}
          <p className="text-sm sm:text-base text-stone-600 max-w-md leading-relaxed mb-8">
            {PERSONAL_INFO.heroStatement}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={onExploreJourney}
              id="hero-explore-btn"
              className="px-7 py-3.5 border border-black text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore Journey</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onGetInTouch}
              id="hero-contact-btn"
              className="px-7 py-3.5 bg-[#B8A38E] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#8C7851] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Get In Touch</span>
              <Send className="w-3 h-3" />
            </button>
          </div>

          {/* Numbered Persona Markers (01, 02, 03) */}
          <div className="w-full pt-6 border-t border-black/10">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-serif italic text-[#8C7851]">01</p>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-semibold">Student</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif italic text-[#8C7851]">02</p>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-semibold">Creative</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif italic text-[#8C7851]">03</p>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-semibold">Professional</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center/Right Column: Artistic Arched Portrait & Floating Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col md:flex-row items-center gap-6 relative"
        >
          {/* Main Arched Portrait */}
          <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[3/4]">
            {/* Arch Container */}
            <div className="w-full h-full bg-[#E5E2DD] rounded-t-full overflow-hidden border border-black/10 relative shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop"
                alt="Minahil Tariq - Student and Creative Thinker"
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-4 -left-4 w-40 sm:w-44 bg-[#FAF9F6]/95 border border-black/10 p-4 backdrop-blur-md shadow-xl flex flex-col justify-center text-center">
              <p className="text-xs font-serif leading-snug italic text-[#1A1A1A]">
                “Continuous learning is the essence of growth.”
              </p>
              <span className="text-[8px] uppercase tracking-widest text-[#8C7851] font-semibold mt-2">
                Minahil Tariq
              </span>
            </div>
          </div>

          {/* Quick Snapshot Panels: Expertise & Education Preview */}
          <div className="flex flex-col gap-4 w-full md:max-w-[240px]">
            {/* Expertise Panel */}
            <div className="bg-white/70 backdrop-blur-sm border border-black/10 p-4 rounded-xl shadow-xs">
              <h2 className="text-[10px] uppercase tracking-widest font-bold mb-3 flex items-center gap-2 text-[#1A1A1A]">
                <span className="w-2 h-[1px] bg-black"></span>
                Expertise
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {['Web Dev', 'Creativity', 'Research', 'Leadership', 'Communication'].map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] border border-black/10 px-2 py-0.5 rounded-full bg-white text-stone-700 hover:border-[#B8A38E] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Dark Contrast Education Snapshot */}
            <div className="bg-[#1A1A1A] text-white p-4 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] uppercase tracking-widest font-bold mb-3 text-[#B8A38E] flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3" />
                  Education
                </h3>
                <div className="space-y-2.5">
                  <div className="border-l border-[#B8A38E]/40 pl-3 py-0.5">
                    <p className="text-[10px] font-bold text-stone-100">Bachelor of Science</p>
                    <p className="text-[9px] text-stone-400 italic">2022 — Present</p>
                  </div>
                  <div className="border-l border-[#B8A38E]/40 pl-3 py-0.5">
                    <p className="text-[10px] font-bold text-stone-100">Higher Secondary</p>
                    <p className="text-[9px] text-stone-400 italic">2020 — 2022</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-widest text-[#B8A38E]">Islamabad</span>
                <Sparkles className="w-3 h-3 text-[#B8A38E]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-medium">
          Scroll
        </span>
        <div className="w-3.5 h-6 rounded-full border border-black/20 flex items-start justify-center p-0.5">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-[#8C7851]"
          />
        </div>
      </div>
    </section>
  );
};
