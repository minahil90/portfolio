/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#8C7851] selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreJourney={() => scrollToSection('about')}
          onGetInTouch={() => scrollToSection('contact')}
        />

        {/* 2. About Me Section */}
        <About onNavigateToSkills={() => scrollToSection('skills')} />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Education Vertical Timeline */}
        <Education />

        {/* 5. Featured Projects Gallery */}
        <Projects />

        {/* 6. Achievements & Certificates */}
        <Achievements />

        {/* 7. My Interests Section */}
        <Interests />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable & Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
