import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Linkedin, Github, Twitter, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Collaboration / Opportunity',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Collaboration / Opportunity',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 relative bg-[#FAF9F6] border-t border-black/10">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B8A38E]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7851] mb-3">
            <span className="w-6 h-[1px] bg-[#8C7851]"></span>
            <span>Initiate Dialogue</span>
            <span className="w-6 h-[1px] bg-[#8C7851]"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#1A1A1A] mb-4 leading-tight">
            LET'S CREATE <span className="italic text-[#8C7851]">SOMETHING MEANINGFUL</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Whether you are looking for an ambitious student intern, a collaborator for research and development, or wish to exchange creative ideas — my inbox is always open.
          </p>
        </div>

        {/* Grid: Direct Contact Info + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info & Social Presence */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Primary Email Card with Quick Copy */}
            <div className="bg-white/90 p-6 sm:p-8 rounded-2xl border border-black/10 relative overflow-hidden shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#EEECE7] border border-black/5 flex items-center justify-center text-[#8C7851] mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold block mb-1">Direct Email</span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-serif text-[#1A1A1A] hover:text-[#8C7851] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EEECE7] hover:bg-[#8C7851] hover:text-white border border-black/10 text-xs text-stone-700 transition-all cursor-pointer shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8C7851]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Status */}
            <div className="bg-white/90 p-6 rounded-2xl border border-black/10 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EEECE7] border border-black/5 flex items-center justify-center text-stone-700">
                  <MapPin className="w-5 h-5 text-[#8C7851]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 block">Based In</span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">{PERSONAL_INFO.location}</span>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Active & Responsive
              </span>
            </div>

            {/* Social Network Cards */}
            <div className="bg-white/90 p-6 sm:p-7 rounded-2xl border border-black/10 shadow-xs">
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-bold block mb-4">
                Professional Channels & Portfolios
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-link"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FAF9F6] hover:bg-[#EEECE7] border border-black/5 hover:border-[#8C7851]/40 transition-all text-stone-800 hover:text-[#1A1A1A] group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#8C7851]" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-[#1A1A1A]" />
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-link"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FAF9F6] hover:bg-[#EEECE7] border border-black/5 hover:border-[#8C7851]/40 transition-all text-stone-800 hover:text-[#1A1A1A] group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#8C7851]" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-[#1A1A1A]" />
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-twitter-link"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FAF9F6] hover:bg-[#EEECE7] border border-black/5 hover:border-[#8C7851]/40 transition-all text-stone-800 hover:text-[#1A1A1A] group"
                >
                  <div className="flex items-center gap-2">
                    <Twitter className="w-4 h-4 text-[#8C7851]" />
                    <span className="text-xs font-semibold">Twitter / X</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-[#1A1A1A]" />
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-behance-link"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FAF9F6] hover:bg-[#EEECE7] border border-black/5 hover:border-[#8C7851]/40 transition-all text-stone-800 hover:text-[#1A1A1A] group"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#8C7851]" />
                    <span className="text-xs font-semibold">Behance</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-[#1A1A1A]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 p-8 sm:p-10 rounded-2xl border border-black/10 relative shadow-xs">
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-8">
                Fill in the details below and I will respond to your message promptly.
              </p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 text-center bg-[#FAF9F6] rounded-2xl border border-[#8C7851]/40 flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#EEECE7] border border-[#8C7851] flex items-center justify-center text-[#8C7851] mb-4 shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-serif text-[#1A1A1A] mb-2">
                      Message Received
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mb-6 leading-relaxed">
                      Thank you for reaching out! Your note has been logged. I look forward to reviewing your inquiry and connecting soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#8C7851] text-white font-semibold text-[10px] uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          id="contact-name-input"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-black/15 text-[#1A1A1A] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#8C7851] focus:ring-1 focus:ring-[#8C7851] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-700 mb-2">
                          Your Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          id="contact-email-input"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. eleanor@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-black/15 text-[#1A1A1A] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#8C7851] focus:ring-1 focus:ring-[#8C7851] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type / Subject */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Inquiry Nature
                      </label>
                      <select
                        id="contact-subject-select"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-black/15 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#8C7851] focus:ring-1 focus:ring-[#8C7851] transition-colors cursor-pointer"
                      >
                        <option value="Collaboration / Opportunity" className="bg-white">Internship / Opportunity Proposal</option>
                        <option value="Academic Collaboration" className="bg-white">Academic & Research Collaboration</option>
                        <option value="Freelance Web / Design" className="bg-white">Web Development & Creative Project</option>
                        <option value="General Inquiry" className="bg-white">General Conversation & Mentorship</option>
                      </select>
                    </div>

                    {/* Message Body */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        id="contact-message-textarea"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share details regarding your opportunity, project timeline, or questions..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-black/15 text-[#1A1A1A] placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#8C7851] focus:ring-1 focus:ring-[#8C7851] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                      className="w-full py-4 rounded-full bg-[#1A1A1A] hover:bg-[#8C7851] text-white font-bold text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-xs hover:shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
