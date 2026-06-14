'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SERVICES } from '@/lib/data';

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-widest">04</span>
          <div className="h-px flex-1 max-w-12 bg-neon-cyan/40" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            SERVICES
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-6 flex flex-col gap-4 group hover:scale-[1.02] transition-all duration-300"
              style={{ borderColor: `${service.color}20` }}
            >
              <div
                className="text-3xl w-12 h-12 flex items-center justify-center rounded-lg"
                style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
              >
                {service.icon}
              </div>
              <h3
                className="font-display font-bold text-base"
                style={{ color: service.color }}
              >
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>

              <div
                className="mt-auto h-px opacity-0 group-hover:opacity-60 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
