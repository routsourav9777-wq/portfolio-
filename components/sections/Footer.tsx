'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-12 border-t border-neon-green/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-black text-xl text-neon-green glow-green">SR.</div>

        <p className="font-mono text-xs text-slate-600 text-center">
          © {year} Sourav Rout — Built with Next.js, Three.js & ☕
        </p>

        <a
          href="#hero"
          className="font-mono text-xs text-slate-500 hover:text-neon-green transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
