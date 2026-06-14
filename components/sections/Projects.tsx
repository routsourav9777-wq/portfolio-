'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/lib/data';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filtered = filter === 'featured' ? PROJECTS.filter(p => p.featured) : PROJECTS;

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row sm:items-center gap-6 mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-neon-cyan text-sm tracking-widest">03</span>
            <div className="h-px flex-1 max-w-12 bg-neon-cyan/40" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              PROJECTS
            </h2>
          </div>

          {/* Filter */}
          <div className="sm:ml-auto flex gap-2">
            {(['all', 'featured'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono text-xs px-4 py-2 rounded transition-all duration-300 ${
                  filter === f
                    ? 'bg-neon-green text-dark-950 font-bold'
                    : 'border border-slate-700 text-slate-500 hover:border-neon-green/50 hover:text-neon-green'
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-panel rounded-xl p-6 flex flex-col gap-4 group hover:border-opacity-60 transition-all duration-500"
              style={{ borderColor: `${project.color}25` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  {project.featured && (
                    <span className="font-mono text-xs text-neon-cyan/60 tracking-widest mb-2 block">
                      ★ FEATURED
                    </span>
                  )}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-opacity-90 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-slate-600">{project.year}</span>
              </div>

              {/* Color accent line */}
              <div
                className="h-px w-full opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{ color: project.color, background: `${project.color}12`, border: `1px solid ${project.color}25` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2 border-t border-slate-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-neon-green transition-colors"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-neon-cyan transition-colors"
                >
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
