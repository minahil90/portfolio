import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Calendar, Tag, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF9F6] border border-black/15 rounded-3xl shadow-2xl z-10 p-6 sm:p-8 text-[#1A1A1A]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-stone-600 hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Category & Year */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#EEECE7] text-[#1A1A1A] border border-black/10">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-500">
              <Calendar className="w-3.5 h-3.5 text-[#8C7851]" />
              {project.year}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] mb-1">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-[#8C7851] font-serif italic mb-6">
            {project.subtitle}
          </p>

          {/* Hero Project Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-black/10 bg-[#EEECE7]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Project Stats If Available */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {project.stats.map((st, i) => (
                <div key={i} className="bg-white p-3.5 rounded-xl border border-black/10 text-center shadow-xs">
                  <span className="text-base sm:text-lg font-bold text-[#1A1A1A] block mb-0.5">{st.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500">{st.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Long Description */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
              Overview & Objectives
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#8C7851]" />
              <span>Key Highlights & Architectural Decisions</span>
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-xs sm:text-sm text-stone-600 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C7851] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2.5 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#8C7851]" />
              <span>Technologies & Libraries</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-white text-stone-800 border border-black/10 shadow-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/10">
            <div className="text-xs text-stone-500">
              Personal Academic & Creative Project
            </div>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-black/15 text-stone-800 hover:text-black text-[10px] font-semibold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#8C7851] text-white text-[10px] font-semibold uppercase tracking-wider transition-all shadow-xs"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
