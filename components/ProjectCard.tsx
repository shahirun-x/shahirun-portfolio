'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  date: string;
  desc: string;
  index?: number;
  repo?: string;
  demo?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function ProjectCard({ title, date, desc, index = 0, repo, demo }: Props) {
  return (
    <motion.article
      className="group p-6 rounded-2xl border border-gray-800 hover:border-white/10 transition"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-gray-400 mt-1">{date}</p>
        </div>
        <div className="text-sm text-gray-400">R&D</div>
      </div>

      <p className="mt-4 text-gray-300 text-sm">{desc}</p>

      <div className="mt-4 flex gap-3">
        <a href={repo ?? '#'} className="text-sm border border-gray-700 px-3 py-1 rounded">Repo</a>
        <a href={demo ?? '#'} className="text-sm px-3 py-1 rounded bg-white/5">Demo</a>
      </div>
    </motion.article>
  );
}
