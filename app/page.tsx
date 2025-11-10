'use client';

import React, { useState } from 'react'; // <-- ADD , { useState }
import { motion, Variants } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { HiMenuAlt3 } from "react-icons/hi"; // <-- ADD THIS
import { MdClose } from "react-icons/md"; // <-- ADD THIS

const projects = [
  {
    title:
      'Conversational AI for Personalized Food Discovery: A RAG-Based Approach using a Large Language Model and Streamlit',
    date: 'Jul–Aug 2025',
    desc:
      'This software model leverages a Large Language Model (LLM) to create an intelligent conversational agent for restaurant discovery. It employs a Retrieval-Augmented Generation (RAG) architecture using a custom dataset of Chennai restaurants to provide factually-grounded, personalized, and context-aware recommendations through an interactive Streamlit web interface.',
    repoUrl: 'https://github.com/shahirun-x/Conversational-AI-for-Personalized-Food-Discovery-A-RAG-Based-Approach-using-a-Large-Language-Model', 
    demoUrl: 'https://your-live-demo-link.com', // <-- REPLACE THIS
  },
  {
    title: 'Cortex Sense: Neuroadaptive Learning Assistant',
    date: 'Jul–Aug 2025',
    desc:
      'A web-based platform that uses a lightweight, in-browser AI to classify simulated EEG data and trigger real-time adaptive content interventions.',
    repoUrl: 'https://github.com/shahirun-x/CortexSense',
    demoUrl: 'https://cortex-sense-demo.com', // <-- REPLACE THIS
  },
  {
    title: 'Project Vāyu: Interactive NLP Analysis of Public Discourse',
    date: 'Feb–Mar 2025',
    desc:
      'A Python-based interactive dashboard using NLP and Streamlit to analyze and visualize sentiment, topics, and categories from a large dataset of news headlines.',
    repoUrl: 'https://github.com/shahirun-x/Project-Vayu-News-Headline-Analysis',
    demoUrl: 'https://project-vayu-demo.com', // <-- REPLACE THIS
  },
  // --- I HAVE ADDED THE TWO PROJECTS BELOW ---
  {
    title:
      'Deep Learning-Based Spectral-Spatial Analysis of Hyperspectral Data for Crop and Land Cover Classification',
    date: 'Feb–Mar 2025',
    desc:
      'Designed and implemented deep learning models (3D CNNs) for classifying hyperspectral data from multiple sources (Salinas, PURR, and Pavia datasets).',
    repoUrl: 'https://github.com/shahirun-x/Hyperspectral-Data-Classification', // <-- EXAMPLE, PLEASE REPLACE
    demoUrl: 'https://your-live-demo-link.com', // <-- REPLACE THIS
  },
  {
    title:
      'Organic and Recyclable Material Classification using Deep Learning: A CNN-Based Approach with Entropy Loss for Enhanced Accuracy',
    date: 'Aug–Oct 2024',
    desc:
      'The software model uses image segmentation and deep learning algorithms to detect and classify waste types such as organic and recyclable materials.',
    repoUrl: 'https://github.com/shahirun-x/Organic-Recyclable-Classification', // <-- EXAMPLE, PLEASE REPLACE
    demoUrl: 'https://your-live-demo-link.com', // <-- REPLACE THIS
  },
];

const heroVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// --- PASTE THIS CODE ---

const listVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const itemVariant: Variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  hidden: { opacity: 0, y: 10 },
};

// --- END OF PASTE ---

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <main className="min-h-screen bg-black text-gray-100 antialiased">
      {/* Header */}
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex items-center justify-between">
        <motion.div initial="hidden" animate="visible" variants={heroVariants}>
          <h1 className="text-2xl font-extrabold tracking-tight">SHAHIRUN</h1>
          <p className="text-sm text-gray-400">AI Engineer • LLMs • ML • Deep Learning</p>
        </motion.div>

        {/* --- START: UPDATED NAV --- */}

        {/* 1. Full Desktop Nav (Hidden on Mobile) */}
        <nav className="hidden md:flex gap-4 items-center text-sm">
          <motion.a whileHover={{ y: -3 }} className="hover:text-white/90" href="#projects">Projects</motion.a>
          <motion.a whileHover={{ y: -3 }} className="hover:text-white/90" href="#skills">Skills</motion.a>
          <motion.a whileHover={{ y: -3 }} className="hover:text-white/90" href="#contact">Contact</motion.a>

          <motion.a
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Shahirun_Resume.pdf"
            download
            className="ml-2 px-3 py-1.5 rounded-md text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Download Resume
          </motion.a>

          {/* Social links */}
          <motion.a whileHover={{ y: -3 }} href="https://github.com/shahirun-x" target="_blank" rel="noopener noreferrer" className="hover:text-white/90 ml-2">GitHub</motion.a>
          <motion.a whileHover={{ y: -3 }} href="https://linkedin.com/in/shahirun-s" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">LinkedIn</motion.a>
          <motion.a whileHover={{ y: -3 }} href="https://www.youtube.com/@shahirunx" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">YouTube</motion.a>
          <motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/shahirun.x" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">Instagram</motion.a>
        </nav>

        {/* 2. Mobile Menu Button (Hidden on Desktop) */}
        <div className="flex md:hidden z-50">
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="text-gray-300 hover:text-white"
          >
            {mobileNavOpen ? (
              <MdClose size={28} />
            ) : (
              <HiMenuAlt3 size={28} />
            )}
          </button>
        </div>

        {/* --- END: UPDATED NAV --- */}
      </header>

      <section className="container mx-auto px-6 py-12 grid gap-12">
        <motion.div initial="hidden" animate="visible" variants={heroVariants}>
          <h2 className="text-4xl font-extrabold tracking-tight">AI Engineer building industry-grade ML & LLM solutions</h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            I design and ship AI systems from research prototypes to production-ready demos — specialized in LLMs, RAG, deep learning, and machine learning.
          </p>
        </motion.div>
{/* --- START: NEW ABOUT ME SECTION --- */}
<motion.section 
  id="about" 
  className="mt-4" 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, amount: 0.2 }}
  variants={itemVariant} // We can re-use the animation variant from the skills
>
  <h2 className="text-2xl font-bold mb-4">About Me</h2>
  <div className="text-gray-400 space-y-4 max-w-2xl">
    <p>
      {/* YOUR 'ABOUT ME' TEXT GOES HERE. SEE EXAMPLE BELOW */}
      I am a 4th-year Computer Science and Engineering student specializing in AI/ML. 
      My passion lies in building intelligent systems that solve real-world problems, 
      from developing advanced RAG models for data discovery to exploring 
      next-generation cybersecurity threats.
    </p>
    <p>
      Currently, I'm interning at Ran Global Enterprises, where I'm helping 
      develop an automated production planning AI. I'm actively seeking 
      a full-time role where I can contribute to cutting-edge AI development.
    </p>
  </div>
</motion.section>
{/* --- END: NEW ABOUT ME SECTION --- */}
        {/* Projects */}
        <section id="projects">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard
  key={p.title}
  index={i}
  title={p.title}
  date={p.date}
  desc={p.desc}
  repo={p.repoUrl} // <-- FIX: Change this prop name
  demo={p.demoUrl} // <-- FIX: Change this prop name
/>
            ))}
          </div>
        </section>

        {/* Skills */}
  <motion.section id="skills" className="mt-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={listVariants}>
  <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
  <motion.ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-400" variants={listVariants}>
    {[
      'Python / PyTorch / TensorFlow',
      'LLMs / RAG / NLP',
      'Machine Learning / GenAI',
      'Computer Vision / Deep Learning',
      'Git / AWS',
      'Data Visualization / Analytics'
    ].map((s, idx) => (
      <motion.li key={s} className="p-2 rounded" variants={itemVariant}>{s}</motion.li>
    ))}
  </motion.ul>
</motion.section>

        {/* Leadership & Management */}
        <section id="leadership" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Leadership & Management</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="p-6 rounded-2xl border border-gray-800 bg-black/40">
              <h3 className="text-lg font-semibold">Event Organizer</h3>
              <ul className="mt-3 text-sm text-gray-400 list-disc list-inside space-y-1">
                <li><strong>SUSTAIN-ATHON ’24</strong> — Technical ideathon on the SDG and environmental theme in the Department of AIDS.</li>
                <li><strong>SOC - VTU</strong></li>
                <li><strong>VISAI’25</strong> — 2-Day event host at 13th International Project Competition and Exhibition, VTU.</li>
              </ul>
            </article>

            <article className="p-6 rounded-2xl border border-gray-800 bg-black/40">
              <h3 className="text-lg font-semibold">Team Lead & Mentor</h3>
              <ul className="mt-3 text-sm text-gray-400 list-disc list-inside space-y-1">
                <li><strong>Smart India Hackathon’24</strong> — Ministry of Education.</li>
                <li><strong>Innovators Conclave’25</strong> — Hyderabad, Telangana.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Project Approval / Publication */}
        <section id="publication" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Project Approval & Publication</h2>
          <div className="p-6 rounded-2xl border border-gray-800 bg-black/40">
            <h3 className="text-lg font-semibold">Modular Solar Refrigeration System for Vaccine Storage</h3>
            <p className="text-sm text-gray-400 mt-1">Case Study – Kottampati, Tamil Nadu, India (EPICS IN IEEE ’2025)</p>
            <p className="mt-3 text-gray-300 text-sm">
              A renewable energy-powered cold chain solution integrating solar panels, battery backup, phase change materials, and IoT monitoring to ensure WHO-compliant vaccine preservation in underserved communities.
            </p>
            <p className="mt-3 text-gray-400 text-sm">Aug 2025 – May 2026</p>
          </div>
        </section>

        {/* Achievements & Awards */}
        <section id="awards" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Achievements & Awards</h2>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-2">
            <li>1st and 2nd position in <strong>Regalia, BITS Quarks</strong> — BITS Pilani Goa Campus (Feb 2025)</li>
            <li>1st and 2nd position in <strong>Mindspark’25</strong> — REC Chennai (Feb 2025)</li>
            <li>2nd position in <strong>DevXPRO’24</strong> — SEC Chennai (Feb 2024)</li>
            <li>2nd position in <strong>TANTRAZ’25</strong> — VTU Chennai (Feb 2025)</li>
            <li>3rd position in <strong>Symposium SIMATS’24</strong> (Feb 2024)</li>
            <li>3rd position in 13th <strong>International Project Competition and Exhibition VISAI 2024</strong> (Feb 2024)</li>
            <li>Semi-Finalist in <strong>Smart India Hackathon’24</strong> — Ministry of Education (Nov 2024)</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-sm text-gray-400 mb-4">Email: shahirun.x@gmail.com  •  Phone: +91 8628832928  •  Chennai, India</p>
          <form className="grid gap-3 md:grid-cols-2">
            <input placeholder="Your name" className="p-3 rounded bg-black/40 border border-gray-800" />
            <input placeholder="Your email" className="p-3 rounded bg-black/40 border border-gray-800" />
            <textarea placeholder="Message" className="p-3 rounded bg-black/40 border border-gray-800 md:col-span-2" rows={4} />
            <button type="submit" className="md:col-span-2 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700">Send Message</button>
          </form>
        </section>

        <footer className="py-8 text-center text-sm text-gray-600">
          <div className="flex justify-center gap-6 mb-3 text-gray-400">
            <a href="https://github.com/shahirun-x" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">GitHub</a>
            <a href="https://linkedin.com/in/shahirun-s" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">LinkedIn</a>
            <a href="https://www.youtube.com/@shahirunx" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">YouTube</a>
            <a href="https://www.instagram.com/shahirun.x" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">Instagram</a>
          </div>
          © {new Date().getFullYear()} Shahirun — Built with Next.js + Tailwind
        </footer>
      </section>
      {/* --- START: MOBILE NAV OVERLAY --- */}
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg font-semibold text-gray-200">
              <a
                href="#projects"
                className="hover:text-white"
                onClick={() => setMobileNavOpen(false)} // Closes menu on click
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-white"
                onClick={() => setMobileNavOpen(false)} // Closes menu on click
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hover:text-white"
                onClick={() => setMobileNavOpen(false)} // Closes menu on click
              >
                Contact
              </a>
              
              <hr className="w-2/5 border-t border-gray-700" />

              <a
                href="/Shahirun_Resume.pdf"
                download
                className="hover:text-white"
                onClick={() => setMobileNavOpen(false)} // Closes menu on click
              >
                Download Resume
              </a>
              
              <hr className="w-2/5 border-t border-gray-700" />

              {/* Mobile Social Links */}
              <div className="flex gap-6">
                <a href="https://github.com/shahirun-x" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                <a href="https://linkedin.com/in/shahirun-s" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                <a href="https://www.youtube.com/@shahirunx" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
              </div>
            </nav>
          </motion.div>
        )}
        {/* --- END: MOBILE NAV OVERLAY --- */}
    </main>
  );
}
