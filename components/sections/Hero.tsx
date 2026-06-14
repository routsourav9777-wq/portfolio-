'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';

const HeroScene = dynamic(() => import('../3d/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-40 h-40 rounded-full border border-neon-green/30 animate-pulse" />
    </div>
  ),
});

const ROLES = [
  'Full Stack Developer',
  'Flutter Developer',
  'Mobile App Developer',
  'Firebase Specialist',
  
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let i = typing ? 0 : target.length;

    const timer = setInterval(() => {
      if (typing) {
        setDisplayed(target.slice(0, i + 1));
        i++;
        if (i > target.length) {
          clearInterval(timer);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        setDisplayed(target.slice(0, i - 1));
        i--;
        if (i < 0) {
          clearInterval(timer);
          setRoleIdx(r => (r + 1) % ROLES.length);
          setTyping(true);
        }
      }
    }, typing ? 60 : 35);

    return () => clearInterval(timer);
  }, [roleIdx, typing]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 z-0" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-dark-950/40 to-dark-950/90 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-neon-cyan text-sm tracking-widest mb-4 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-neon-cyan/60" />
            HELLO WORLD — I'M
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl mb-4 leading-none"
          >
            <span className="gradient-text">Sourav</span>
            <br />
            <span className="white-text">Rout</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-3 mb-6 h-10"
          >
            <span className="text-neon-cyan font-mono text-lg">{'>'}</span>
            <span className="font-mono text-lg sm:text-xl text-slate-200">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-neon-green ml-1 animate-type-cursor" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10"
          >
            I build production-grade web systems that scale, innovate, and leave an impression.
            From elegant APIs to immersive 3D experiences — precision-crafted with every commit.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#projects"
              className="font-mono text-sm px-6 py-3 bg-neon-green text-dark-950 font-bold hover:bg-neon-green/90 hover:shadow-neon-green transition-all duration-300 rounded"
            >
              View Projects ↗
            </a>
            <a
              href="#contact"
              className="font-mono text-sm px-6 py-3 border border-neon-cyan/50 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon-cyan transition-all duration-300 rounded"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/routsourav9777-wq', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/souravr', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com/souravr', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-500 hover:text-neon-green transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
            <span className="w-px h-4 bg-slate-700" />
            <span className="font-mono text-xs text-slate-600">@souravr</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-600 hover:text-neon-green transition-colors"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
