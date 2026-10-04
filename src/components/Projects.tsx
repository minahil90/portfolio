import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Web Development', 'Creative Design', 'Innovation'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-8 relative bg-[#FAF9F6] border-t border-black/10">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#B8A38E]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7851] mb-3">
              <span className="w-6 h-[1px] bg-[#8C7851]"></span>
              <span>Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#1A1A1A] leading-none">
              FEATURED <span className="italic text-[#8C7851]">PROJECTS</span>
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-md">
            A curated collection of web applications, design systems, and student tools built with meticulous attention to detail and user experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-black/10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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

        {/* Large Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/90 rounded-2xl overflow-hidden border border-black/10 hover:border-[#8C7851]/50 transition-all duration-500 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                {/* Visual Image Preview Container */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#EEECE7]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Category & Status Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1A1A1A] border border-black/10 shadow-xs">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-[#8C7851] text-white flex items-center gap-1 shadow-xs">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <span className="absolute top-4 right-4 text-[10px] font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1A1A1A] border border-black/10 shadow-xs">
                    {project.year}
                  </span>
                </div>

                {/* Card Content Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] mb-1 group-hover:text-[#8C7851] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8C7851] font-serif italic mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-black/10">
                      {project.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2.5 py-1 rounded-full bg-[#FAF9F6] text-stone-700 border border-black/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Button: View Project */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        id={`view-project-${project.id}`}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#8C7851] text-white text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn"
                      >
                        <span>View Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden sm:flex items-center gap-1.5 text-xs text-stone-600 hover:text-[#1A1A1A] transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
