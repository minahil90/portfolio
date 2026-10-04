import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Trophy, BookOpen, Users, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filters = ['All', 'Academic', 'Certificate', 'Competition', 'Leadership', 'Courses', 'Extracurricular'];

  const filteredItems = selectedFilter === 'All'
    ? ACHIEVEMENTS_DATA
    : ACHIEVEMENTS_DATA.filter((item) => item.category === selectedFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic': return <Award className="w-5 h-5" />;
      case 'Certificate': return <ShieldCheck className="w-5 h-5" />;
      case 'Competition': return <Trophy className="w-5 h-5" />;
      case 'Leadership': return <Users className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const handleCopyId = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="achievements" className="py-24 sm:py-32 px-6 sm:px-8 relative bg-[#FAF9F6] border-t border-black/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-[#B8A38E]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7851] mb-3">
              <span className="w-6 h-[1px] bg-[#8C7851]"></span>
              <span>Credentials & Recognition</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#1A1A1A] leading-none">
              ACHIEVEMENTS & <span className="italic text-[#8C7851]">CERTIFICATES</span>
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-md">
            Recognitions spanning academic honors, competitive STEM distinctions, certified technical masterclasses, and student leadership tenures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-black/10">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 text-[10px] uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#B8A38E] text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-black/10 hover:border-[#8C7851] hover:text-[#1A1A1A]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white/90 p-6 sm:p-7 rounded-2xl border border-black/10 hover:border-[#8C7851]/50 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EEECE7] border border-black/5 flex items-center justify-center text-[#8C7851] group-hover:scale-105 transition-transform">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EEECE7] text-[#1A1A1A] border border-black/10">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg sm:text-xl font-serif text-[#1A1A1A] mb-1 group-hover:text-[#8C7851] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#8C7851] mb-3">
                    <span className="font-medium text-stone-700">{item.issuer}</span>
                    <span className="text-stone-500 font-mono text-[11px]">{item.year}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Verification ID / Status */}
                {item.verificationId && (
                  <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[11px]">
                    <span className="text-stone-500 font-mono text-[10px]">
                      REF: {item.verificationId}
                    </span>
                    <button
                      onClick={(e) => handleCopyId(item.verificationId!, e)}
                      className="text-[10px] uppercase tracking-wider font-bold text-[#8C7851] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === item.verificationId ? (
                        <>
                          <CheckCircle className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copied</span>
                        </>
                      ) : (
                        <span>Copy Ref</span>
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
