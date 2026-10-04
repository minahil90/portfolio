import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, MapPin, GraduationCap, Award, Code, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07080c]/85 backdrop-blur-md cursor-pointer print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#FAF9F6] text-[#1A1A1A] border border-black/15 rounded-3xl shadow-2xl z-10 p-6 sm:p-10 print:bg-white print:text-black print:border-none print:shadow-none print:max-h-none print:overflow-visible"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/10 print:hidden">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7851] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Official Academic & Professional CV</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EEECE7] hover:bg-[#8C7851] hover:text-white border border-black/10 text-[#1A1A1A] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>
              <button
                onClick={onClose}
                aria-label="Close CV Modal"
                className="p-2 rounded-full bg-[#EEECE7] hover:bg-black/10 text-stone-700 hover:text-[#1A1A1A] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="space-y-8">
            {/* Header / Identity */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10 print:border-gray-300">
              <div>
                <h1 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] print:text-black uppercase tracking-wide">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xs font-semibold text-[#8C7851] tracking-widest uppercase mt-1">
                  {PERSONAL_INFO.title}
                </p>
              </div>
              <div className="flex flex-col text-xs text-stone-600 print:text-gray-700 space-y-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#8C7851]" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8C7851]" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Executive Statement */}
            <div>
              <h2 className="text-[10px] uppercase tracking-widest font-bold text-[#8C7851] mb-2">
                Executive Profile & Objective
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 print:text-gray-800 leading-relaxed font-sans">
                {PERSONAL_INFO.aboutIntro}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-[10px] uppercase tracking-widest font-bold text-[#8C7851] mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education & Academic Standing</span>
              </h2>
              <div className="space-y-4">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl bg-white border border-black/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-serif font-bold text-sm text-[#1A1A1A]">
                        {edu.degree} — {edu.field}
                      </h3>
                      <span className="text-xs text-[#8C7851] font-mono font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <span>{edu.institution}</span>
                      <span className="font-semibold text-stone-800">{edu.gradeOrDistinction}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-stone-600 space-y-1">
                      {edu.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies & Skills */}
            <div>
              <h2 className="text-[10px] uppercase tracking-widest font-bold text-[#8C7851] mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Core Competencies & Toolkits</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SKILLS_DATA.map((s) => (
                  <div key={s.id} className="p-3 rounded-xl bg-white border border-black/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-[#1A1A1A]">{s.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EEECE7] text-[#8C7851] font-medium">
                        {s.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500">
                      {s.tools.join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Certifications */}
            <div>
              <h2 className="text-[10px] uppercase tracking-widest font-bold text-[#8C7851] mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Selected Honors & Certifications</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ACHIEVEMENTS_DATA.map((ach) => (
                  <div key={ach.id} className="text-xs p-3 rounded-xl bg-white border border-black/10 flex flex-col justify-between">
                    <div>
                      <div className="font-serif font-bold text-[#1A1A1A]">{ach.title}</div>
                      <div className="text-[11px] text-[#8C7851]">{ach.issuer} ({ach.year})</div>
                    </div>
                    <div className="text-[10px] text-stone-600 mt-1">{ach.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
