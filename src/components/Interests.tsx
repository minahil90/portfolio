import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Sparkles, BookOpen, PenTool, GraduationCap, Compass } from 'lucide-react';
import { INTERESTS_DATA } from '../data/portfolioData';

export const Interests: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="interests" className="py-24 sm:py-32 px-6 sm:px-8 relative bg-[#FAF9F6] border-t border-black/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#B8A38E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7851] mb-3">
            <span className="w-6 h-[1px] bg-[#8C7851]"></span>
            <span>Passions & Curiosities</span>
            <span className="w-6 h-[1px] bg-[#8C7851]"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#1A1A1A] mb-4">
            MY <span className="italic text-[#8C7851]">INTERESTS</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            The diverse intellectual spheres, artistic endeavors, and future horizons that inspire my creative thinking.
          </p>
        </div>

        {/* 6 Grid Cards for Technology • Design • Reading • Creativity • Learning • Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white/90 p-7 sm:p-8 rounded-2xl border border-black/10 hover:border-[#8C7851]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xs hover:shadow-md"
            >
              {/* Background accent */}
              <div className={`absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br ${item.accent} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10">
                {/* Icon & Sub-marker */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#EEECE7] border border-black/5 flex items-center justify-center text-[#8C7851] group-hover:bg-[#8C7851] group-hover:text-white transition-all duration-300 shadow-xs">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C7851] font-serif italic">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-1 group-hover:text-[#8C7851] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8C7851] font-semibold tracking-wide mb-4">
                  {item.subtitle}
                </p>

                {/* Narrative */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Topic Pills */}
              <div className="relative z-10 pt-4 border-t border-black/10 flex flex-wrap gap-1.5">
                {item.topics.map((tp, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF9F6] text-stone-700 border border-black/10 group-hover:border-[#8C7851]/40 transition-colors"
                  >
                    {tp}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
