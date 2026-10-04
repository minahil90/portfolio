import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookCheck, ChevronDown } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EDUCATION_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="py-24 sm:py-32 px-6 sm:px-8 relative bg-[#FAF9F6] border-t border-black/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#B8A38E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7851] mb-3">
            <span className="w-6 h-[1px] bg-[#8C7851]"></span>
            <span>Academic Milestones</span>
            <span className="w-6 h-[1px] bg-[#8C7851]"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#1A1A1A] mb-4">
            EDUCATIONAL <span className="italic text-[#8C7851]">JOURNEY</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            A structured vertical trajectory of rigorous academic study, foundational sciences, and distinction honors.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#8C7851] via-[#B8A38E]/40 to-transparent" />

          <div className="space-y-12 sm:space-y-16">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF9F6] border-2 border-[#8C7851] flex items-center justify-center text-[#8C7851] z-20 shadow-sm">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <motion.div
                      whileHover={{ y: -3 }}
                      onClick={() => toggleExpand(item.id)}
                      className={`bg-white/90 p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer shadow-xs ${
                        isExpanded
                          ? 'border-[#8C7851] bg-[#FAF9F6] shadow-md ring-1 ring-[#8C7851]/20'
                          : 'border-black/10 hover:border-[#8C7851]/40'
                      }`}
                    >
                      {/* Period Badge & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 text-xs text-[#8C7851] font-semibold tracking-wide">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#EEECE7] text-[#1A1A1A] border border-black/10">
                          {item.gradeOrDistinction}
                        </span>
                      </div>

                      {/* Degree & Field */}
                      <h3 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-[#8C7851] mb-2 font-sans">
                        {item.field}
                      </p>

                      {/* Institution & Location */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-stone-500 mb-4 pb-4 border-b border-black/10">
                        <span className="font-semibold text-stone-800">{item.institution}</span>
                        <span className="hidden sm:inline-block text-stone-300">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-stone-400" />
                          {item.location}
                        </span>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Expand/Collapse Toggle */}
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-[#8C7851] pt-2">
                        <span>{isExpanded ? 'Hide coursework & achievements' : 'View achievements & coursework'}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>

                      {/* Expanded Section */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-black/10 space-y-4">
                          {/* Key Achievements */}
                          <div>
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                              <Award className="w-3.5 h-3.5 text-[#8C7851]" />
                              <span>Academic Achievements & Honors</span>
                            </div>
                            <ul className="space-y-1.5 pl-1">
                              {item.achievements.map((ach, i) => (
                                <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C7851] mt-1.5 shrink-0" />
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Coursework */}
                          <div>
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                              <BookCheck className="w-3.5 h-3.5 text-[#8C7851]" />
                              <span>Key Coursework Focus</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {item.keyCourses.map((course, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#EEECE7] text-stone-700 border border-black/10"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
