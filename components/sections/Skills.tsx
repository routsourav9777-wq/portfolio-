'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '@/lib/data';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-widest">02</span>
          <div className="h-px flex-1 max-w-12 bg-neon-cyan/40" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            TECH <span className="gradient-text">STACK</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-panel rounded-lg p-5 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-white font-semibold">{skill.name}</span>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-sm"
                    style={{ color: skill.color, background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
                  >
                    {skill.category}
                  </span>
                </div>
                <span className="font-mono text-xs" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>

              {/* Bar */}
              <div className="h-1 bg-dark-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.06, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
                    boxShadow: `0 0 8px ${skill.color}60`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
