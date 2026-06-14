'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            WHAT PEOPLE <span className="gradient-text">SAY</span>
          </h2>
          <p className="font-mono text-sm text-slate-500">From colleagues and clients</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel rounded-xl p-6 flex flex-col gap-5"
              style={{ borderColor: `${t.color}20` }}
            >
              <Quote size={24} style={{ color: t.color }} className="opacity-60" />

              <p className="text-slate-300 leading-relaxed flex-1 text-sm">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-dark-950"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="font-mono text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
