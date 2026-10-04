import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, GraduationCap, Compass, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onNavigateToSkills: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigateToSkills }) => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 relative border-t border-black/10 bg-[#FAF9F6]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#B8A38E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Sticky Heading & Key Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Section Sub-label */}
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7851] mb-3">
                <span className="w-6 h-[1px] bg-[#8C7851]"></span>
                <span>The Story & Mindset</span>
              </div>

              {/* Editorial Large Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#1A1A1A] mb-6 leading-none">
                ABOUT <span className="italic text-[#8C7851]">ME</span>
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-sans">
                Driven by an unwavering curiosity to understand how systems work, how aesthetics inspire, and how purposeful discipline builds the future.
              </p>

              {/* Quick Profile Meta Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-white/80 p-4 rounded-xl border border-black/10 shadow-xs">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold block mb-1">Focus</span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">Tech & Design</span>
                </div>
                <div className="bg-white/80 p-4 rounded-xl border border-black/10 shadow-xs">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold block mb-1">Location</span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">Islamabad, PK</span>
                </div>
                <div className="bg-white/80 p-4 rounded-xl border border-black/10 shadow-xs">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold block mb-1">Education</span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">Undergraduate</span>
                </div>
                <div className="bg-white/80 p-4 rounded-xl border border-black/10 shadow-xs">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold block mb-1">Availability</span>
                  <span className="text-sm font-semibold text-[#8C7851]">Open for Collabs</span>
                </div>
              </div>
            </div>

            {/* Dark Contrast Philosophy Quote Box */}
            <div className="p-6 rounded-2xl bg-[#1A1A1A] text-white border border-black/10 shadow-md">
              <div className="flex items-center gap-2 text-[#B8A38E] mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Core Philosophy</span>
              </div>
              <p className="text-xs text-stone-300 italic font-serif leading-relaxed">
                "Excellence is not an isolated breakthrough, but the compounding result of daily curiosity, deliberate craft, and respectful collaboration."
              </p>
            </div>
          </div>

          {/* Right Column: Refined Introduction & Persona Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Main Narrative Introduction */}
            <div className="bg-white/90 p-8 sm:p-10 rounded-2xl border border-black/10 relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8A38E]/10 rounded-bl-full pointer-events-none" />

              <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] mb-4 leading-snug">
                An ambitious learner turning curiosity into <span className="italic text-[#8C7851]">meaningful craft</span>.
              </h3>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                {PERSONAL_INFO.aboutIntro}
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Whether mastering cutting-edge frontend frameworks, deconstructing algorithmic logic, analyzing research papers, or organizing collaborative campus initiatives, I immerse myself with full energy and attention to detail. I look forward to contributing fresh perspectives, positive energy, and high execution standards to impactful teams.
              </p>

              {/* Core Strengths Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-black/10">
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7851] shrink-0" />
                  <span>Autonomous & Fast Learner</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7851] shrink-0" />
                  <span>Creative Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7851] shrink-0" />
                  <span>Clear & Empathic Communicator</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7851] shrink-0" />
                  <span>Disciplined Work Ethic</span>
                </div>
              </div>
            </div>

            {/* Three Distinct Pillars: Student • Creative Learner • Future Professional */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1: Student */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white/90 p-6 rounded-2xl border border-black/10 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif italic text-2xl text-[#8C7851]">01</span>
                    <div className="w-8 h-8 rounded-lg bg-[#EEECE7] flex items-center justify-center text-[#8C7851]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] font-serif mb-1">Student</h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C7851] block mb-2 font-semibold">
                    Curiosity & Foundations
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Building robust computer science and analytical foundations while pursuing academic honors and distinctions.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Creative Learner */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white/90 p-6 rounded-2xl border border-black/10 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif italic text-2xl text-[#8C7851]">02</span>
                    <div className="w-8 h-8 rounded-lg bg-[#EEECE7] flex items-center justify-center text-[#8C7851]">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] font-serif mb-1">Creative Learner</h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C7851] block mb-2 font-semibold">
                    Exploration & Synthesis
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Connecting technical engineering with visual aesthetics, design psychology, and human-centered user experiences.
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Future Professional */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white/90 p-6 rounded-2xl border border-black/10 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif italic text-2xl text-[#8C7851]">03</span>
                    <div className="w-8 h-8 rounded-lg bg-[#EEECE7] flex items-center justify-center text-[#8C7851]">
                      <Compass className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] font-serif mb-1">Future Professional</h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C7851] block mb-2 font-semibold">
                    Leadership & Integrity
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Cultivating executive communication, collaborative teamwork, accountability, and real-world project delivery.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quick Link to Skills */}
            <div className="flex items-center justify-end">
              <button
                onClick={onNavigateToSkills}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8C7851] hover:text-black transition-colors group cursor-pointer"
              >
                <span>View Skills & Competencies</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
