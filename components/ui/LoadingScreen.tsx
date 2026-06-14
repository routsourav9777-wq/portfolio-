'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MATRIX_CHARS = Array.from({ length: 30 }, (_, i) =>
  String.fromCharCode(0x30A0 + (i % 96))
);

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'boot' | 'load' | 'done'>('boot');
  const [lines, setLines] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const bootLines = [
    '> Initializing neural interface...',
    '> Loading portfolio kernel v3.0...',
    '> Mounting 3D engine [OK]',
    '> Connecting to GitHub API [OK]',
    '> Calibrating cyberpunk aesthetics [OK]',
    '> Injecting neon protocols...',
    '> System ready. Welcome, visitor.',
  ];

  useEffect(() => {
    let lineIdx = 0;
    const lineTimer = setInterval(() => {
      if (lineIdx < bootLines.length) {
        setLines(prev => [...prev, bootLines[lineIdx]]);
        lineIdx++;
      } else {
        clearInterval(lineTimer);
        setPhase('load');
      }
    }, 320);
    return () => clearInterval(lineTimer);
  }, []);

  useEffect(() => {
    if (phase !== 'load') return;
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(intervalRef.current!);
          setTimeout(() => { setPhase('done'); setTimeout(onComplete, 600); }, 300);
          return 100;
        }
        return p + Math.random() * 4 + 1;
      });
    }, 40);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-dark-950 flex flex-col items-center justify-center p-8"
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

          {/* Matrix rain columns */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 font-mono text-neon-green text-xs leading-4"
                style={{
                  left: `${(i / 12) * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animation: 'matrixRain 4s linear infinite',
                }}
              >
                {Array.from({ length: 30 }).map((_, j) => (
                  <div key={j}>{MATRIX_CHARS[j]}</div>
                ))}
              </div>
            ))}
          </div>

          <div className="relative z-10 w-full max-w-lg">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="font-display text-3xl font-black text-neon-green glow-green mb-1">
                SOURAV.DEV
              </div>
              <div className="font-mono text-xs text-neon-cyan/60 tracking-widest">
                FULL STACK ENGINEER // CYBERPUNK EDITION
              </div>
            </motion.div>

            {/* Terminal */}
            <div className="glass-panel rounded-lg p-4 mb-6 min-h-[180px] font-mono text-xs">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neon-green/10">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-slate-500 text-[10px]">boot.sh — portfolio-init</span>
              </div>
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-neon-green/80 leading-6"
                >
                  {line}
                </motion.div>
              ))}
              {phase === 'boot' && (
                <span className="inline-block w-2 h-4 bg-neon-green/80 animate-type-cursor" />
              )}
            </div>

            {/* Progress */}
            {phase === 'load' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex justify-between font-mono text-xs mb-2">
                  <span className="text-neon-cyan/60">LOADING PORTFOLIO</span>
                  <span className="text-neon-green">{Math.min(Math.round(progress), 100)}%</span>
                </div>
                <div className="h-1 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #00ff41, #00d4ff)',
                      boxShadow: '0 0 8px #00ff41',
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
