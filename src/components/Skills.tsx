import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, 
  Laptop, 
  Cpu, 
  Palette, 
  MessageSquare, 
  Compass, 
  Users, 
  Search,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = [
    'All',
    'Technical & Web',
    'Creative & Problem Solving',
    'Leadership & Communication',
    'Research & Learning'
  ];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 relative bg-[#FAF9F6] border-t border-black/10">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#B8A38E]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7851] mb-3">
              <span className="w-6 h-[1px] bg-[#8C7851]"></span>
              <span>Capabilities & Toolkit</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#1A1A1A] leading-none">
              SKILLS & <span className="italic text-[#8C7851]">EXPERTISE</span>
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-md">
            Interactive competencies spanning modern software engineering, visual aesthetics, leadership, and rigorous research methodologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-black/10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#B8A38E] text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-black/10 hover:border-[#8C7851] hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Modern Floating Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => setSelectedSkill(selectedSkill?.id === skill.id ? null : skill)}
                className={`group bg-white/90 p-6 rounded-2xl border cursor-pointer transition-all duration-300 relative flex flex-col justify-between shadow-xs ${
                  selectedSkill?.id === skill.id
                    ? 'border-[#8C7851] bg-[#FAF9F6] shadow-md ring-1 ring-[#8C7851]/30'
                    : 'border-black/10 hover:border-[#8C7851]/50 hover:bg-white'
                }`}
              >
                <div>
                  {/* Top Bar: Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#EEECE7] border border-black/5 flex items-center justify-center text-[#8C7851] group-hover:scale-105 group-hover:bg-[#8C7851] group-hover:text-white transition-all duration-300">
                      {getIcon(skill.iconName)}
                    </div>
                    <span className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-black/10 text-stone-600 font-semibold">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Title */}
                  <h3 className="text-xl font-serif text-[#1A1A1A] mb-2 group-hover:text-[#8C7851] transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-600 leading-relaxed mb-5 line-clamp-3">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Tools & Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/10 mb-3">
                    {skill.tools.slice(0, 3).map((tool, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF9F6] text-stone-700 border border-black/10"
                      >
                        {tool}
                      </span>
                    ))}
                    {skill.tools.length > 3 && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full text-[#8C7851] font-semibold self-center">
                        +{skill.tools.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-[#8C7851] pt-1">
                    <span>{selectedSkill?.id === skill.id ? 'Hide details' : 'Explore scope'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${selectedSkill?.id === skill.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>

                {/* Expanded Drawer inline */}
                {selectedSkill?.id === skill.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-[#8C7851]/30"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-stone-700 font-bold mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#8C7851]" />
                      <span>Full Skillset & Methods:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tools.map((t, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-[#EEECE7] text-[#1A1A1A] border border-black/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
