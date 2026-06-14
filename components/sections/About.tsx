'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Globe, Zap } from 'lucide-react';

const STATS = [
  { value: '5+', label: 'Years Experience', icon: Zap, color: '#00ff41' },
  { value: '60+', label: 'Projects Shipped', icon: Globe, color: '#00d4ff' },
  { value: '4k+', label: 'GitHub Stars', icon: Code2, color: '#bf00ff' },
  { value: '99%', label: 'Client Satisfaction', icon: Cpu, color: '#ff006e' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-widest">01</span>
          <div className="h-px flex-1 max-w-12 bg-neon-cyan/40" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            ABOUT <span className="gradient-text">ME</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-slate-400 leading-relaxed">
             <p>
  I'm <span className="text-neon-green font-semibold">Sourav Rout</span>, a
  <span className="text-neon-cyan"> Full Stack Developer & Mobile App Builder</span>
  from Bhubaneswar, India. I create high-quality web applications, mobile apps,
  and Firebase-powered solutions with a strong focus on performance, clean design,
  and user experience. My goal is to help businesses and startups transform their
  ideas into powerful digital products.
</p>
           <p>
  My approach to development is simple:
  <span className="text-slate-300">
    {" "}build software that is fast, reliable, and easy to use.
  </span>
  {" "}I focus on writing clean code, creating smooth user experiences, and developing
  scalable applications that solve real-world problems. Whether it's a mobile app,
  web application, or Firebase-powered backend, I always aim for quality and performance.
</p>

<p>
  Beyond coding, I'm constantly learning new technologies, exploring modern development
  tools, and working on personal projects to improve my skills. As a BCA student and
  freelance developer, I enjoy turning ideas into functional products and helping
  businesses establish a strong digital presence. I believe great software should be
  simple, intuitive, and valuable to the people who use it.
</p>
            </div>

            {/* Terminal card */}
            <div className="mt-8 glass-panel rounded-lg p-4 font-mono text-sm">
              <div className="text-slate-500 text-xs mb-2">~/whoami</div>
              <div className="space-y-1 text-slate-300">
                <div><span className="text-neon-green">location</span><span className="text-slate-600"> = </span><span className="text-neon-cyan">"Bhubaneswar, India"</span></div>
                <div><span className="text-neon-green">available</span><span className="text-slate-600"> = </span><span className="text-neon-cyan">true</span></div>
                <div><span className="text-neon-green">coffee</span><span className="text-slate-600"> = </span><span className="text-neon-cyan">"black, always"</span></div>
                <div><span className="text-neon-green">editor</span><span className="text-slate-600"> = </span><span className="text-neon-cyan">"Neovim"</span></div>
                <div><span className="text-neon-green">music</span><span className="text-slate-600"> = </span><span className="text-neon-cyan">"Synthwave & Lo-fi"</span></div>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ value, label, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-panel rounded-xl p-6 flex flex-col gap-3 hover:border-opacity-40 transition-all duration-300 group"
                style={{ borderColor: `${color}30` }}
              >
                <Icon size={20} style={{ color }} className="group-hover:drop-shadow-lg transition-all" />
                <div className="font-display font-black text-3xl text-white"
                  style={{ textShadow: `0 0 20px ${color}60` }}>
                  {value}
                </div>
                <div className="font-mono text-xs text-slate-500 leading-snug">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
