'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function GitHubStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
            GITHUB <span className="gradient-text">ACTIVITY</span>
          </h2>
          <p className="font-mono text-sm text-slate-500">Real-time contribution metrics</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            'https://github-readme-stats.vercel.app/api?username=souravr&show_icons=true&theme=chartreuse-dark&bg_color=050d14&border_color=00ff4120&title_color=00ff41&icon_color=00d4ff&text_color=94a3b8&hide_border=false',
            'https://github-readme-stats.vercel.app/api/top-langs/?username=souravr&layout=compact&theme=chartreuse-dark&bg_color=050d14&border_color=00ff4120&title_color=00ff41&text_color=94a3b8&hide_border=false',
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt={i === 0 ? 'GitHub Stats' : 'Top Languages'}
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Streak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 glass-panel rounded-xl overflow-hidden"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=souravr&theme=chartreuse-dark&background=050d14&ring=00ff41&fire=00d4ff&currStreakLabel=00ff41&border=00ff4120&stroke=00ff4110"
            alt="GitHub Streak"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
