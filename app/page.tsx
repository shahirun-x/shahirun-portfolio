import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100 antialiased">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">SHAHIRUN</h1>
          <p className="text-sm text-gray-400">
            AI Engineer • LLMs • ML • Deep Learning
          </p>
        </div>
        <nav className="flex gap-4 items-center text-sm">
  <a href="#projects" className="hover:text-white/90">Projects</a>
  <a href="#skills" className="hover:text-white/90">Skills</a>
  <a href="#contact" className="hover:text-white/90">Contact</a>

  {/* Social links */}
  <a href="https://github.com/shahirun-x" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">
    GitHub
  </a>
  <a href="https://linkedin.com/in/shahirun-s" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">
    LinkedIn
  </a>
  <a href="https://www.youtube.com/@shahirunx" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">
    YouTube
  </a>
  <a href="https://www.instagram.com/shahirun.x" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">
    Instagram
  </a>
</nav>

      </header>

      <section className="container mx-auto px-6 py-12 grid gap-12">
        {/* Hero */}
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight">
            AI Engineer building industry-grade ML & LLM solutions
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            I design and ship AI systems from research prototypes to
            production-ready demos — specialized in LLMs, RAG, deep learning, and
            machine learning.
          </p>
        </div>

    
        {/* Projects */}
        <section id="projects">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <article className="p-6 rounded-2xl border border-gray-800 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold">
                Conversational AI for Personalized Food Discovery: A RAG-Based Approach using a Large Language Model and Streamlit
              </h3>
              <p className="text-sm text-gray-400 mt-1">Jul–Aug 2025</p>
              <p className="mt-3 text-gray-300 text-sm">
                This software model leverages a Large Language Model (LLM) to create an intelligent conversational agent for restaurant discovery.
                It employs a Retrieval-Augmented Generation (RAG) architecture using a custom dataset of Chennai restaurants to provide factually-grounded,
                personalized, and context-aware recommendations through an interactive Streamlit web interface.
              </p>
            </article>

            <article className="p-6 rounded-2xl border border-gray-800 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold">Cortex Sense: Neuroadaptive Learning Assistant</h3>
              <p className="text-sm text-gray-400 mt-1">Jul–Aug 2025</p>
              <p className="mt-3 text-gray-300 text-sm">
                A web-based platform that uses a lightweight, in-browser AI to classify simulated EEG data and trigger real-time adaptive content interventions.
              </p>
            </article>

            <article className="p-6 rounded-2xl border border-gray-800 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold">Project Vāyu: Interactive NLP Analysis of Public Discourse</h3>
              <p className="text-sm text-gray-400 mt-1">Feb–Mar 2025</p>
              <p className="mt-3 text-gray-300 text-sm">
                A Python-based interactive dashboard using NLP and Streamlit to analyze and visualize sentiment, topics, and categories from a large dataset of news headlines.
              </p>
            </article>

            <article className="p-6 rounded-2xl border border-gray-800 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold">Deep Learning-Based Spectral-Spatial Analysis of Hyperspectral Data for Crop and Land Cover Classification</h3>
              <p className="text-sm text-gray-400 mt-1">Feb–Mar 2025</p>
              <p className="mt-3 text-gray-300 text-sm">
                Designed and implemented deep learning models (3D CNNs) for classifying hyperspectral data from multiple sources (Salinas, PURR, and Pavia datasets).
              </p>
            </article>

            <article className="p-6 rounded-2xl border border-gray-800 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold">Organic and Recyclable Material Classification using Deep Learning: A CNN-Based Approach with Entropy Loss for Enhanced Accuracy</h3>
              <p className="text-sm text-gray-400 mt-1">Aug–Oct 2024</p>
              <p className="mt-3 text-gray-300 text-sm">
                The software model uses image segmentation and deep learning algorithms to detect and classify waste types such as organic and recyclable materials.
              </p>
            </article>

          </div>
        </section>


        {/* Skills */}
        <section id="skills" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-400">
            <li>Python / PyTorch / TensorFlow</li>
            <li>LLMs / RAG / NLP</li>
            <li>Machine Learning / GenAI</li>
            <li>Computer Vision / Deep Learning</li>
            <li>Git / AWS / Vercel</li>
            <li>Data Visualization / Analytics</li>
          </ul>
        </section>

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
    <h3 className="text-lg font-semibold">
      Modular Solar Refrigeration System for Vaccine Storage
    </h3>
    <p className="text-sm text-gray-400 mt-1">
      Case Study – Kottampati, Tamil Nadu, India (EPICS IN IEEE ’2025)
    </p>
    <p className="mt-3 text-gray-300 text-sm">
      A renewable energy-powered cold chain solution integrating solar panels,
      battery backup, phase change materials, and IoT monitoring to ensure
      WHO-compliant vaccine preservation in underserved communities.
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
        <section
          id="contact"
          className="mt-12 p-6 rounded-2xl border border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-sm text-gray-400 mb-4">
            Email: shahirun.x@gmail.com  •  Phone: +91 8628832928  •  Chennai,
            India
          </p>
          <form className="grid gap-3 md:grid-cols-2">
            <input
              placeholder="Your name"
              className="p-3 rounded bg-black/40 border border-gray-800"
            />
            <input
              placeholder="Your email"
              className="p-3 rounded bg-black/40 border border-gray-800"
            />
            <textarea
              placeholder="Message"
              className="p-3 rounded bg-black/40 border border-gray-800 md:col-span-2"
              rows={4}
            />
            <button
              type="submit"
              className="md:col-span-2 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700"
            >
              Send Message
            </button>
          </form>
        </section>

        <footer className="py-8 text-center text-sm text-gray-600">
  <div className="flex justify-center gap-6 mb-3 text-gray-400">
    <a href="https://github.com/shahirun-x" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">GitHub</a>
    <a href="https://linkedin.com/in/shahirun-s" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">LinkedIn</a>
    <a href="https://www.youtube.com/@shahriunx" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">YouTube</a>
    <a href="https://www.instagram.com/shahirun.x" target="_blank" rel="noopener noreferrer" className="hover:text-white/90">Instagram</a>
  </div>
  © {new Date().getFullYear()} Shahirun — Built with Next.js + Tailwind
</footer>

      </section>
    </main>
  );
}
