'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-widest">05</span>
          <div className="h-px flex-1 max-w-12 bg-neon-cyan/40" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px origin-top"
            style={{ background: 'linear-gradient(to bottom, #00ff41, #00d4ff, #bf00ff, transparent)' }}
          />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div
                  className="absolute left-4 md:left-5.5 top-1 w-4 h-4 rounded-full border-2 border-dark-950 flex items-center justify-center"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}80` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-dark-950" />
                </div>

                <div className="glass-panel rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{exp.role}</h3>
                      <span className="font-mono text-sm" style={{ color: exp.color }}>{exp.company}</span>
                    </div>
                    <span className="font-mono text-xs text-slate-500 bg-dark-800 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{ color: exp.color, background: `${exp.color}12`, border: `1px solid ${exp.color}25` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
