'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const pct = Math.min(Math.round(100 * (1 - Math.exp((-3.5 * current) / steps))), 100);
      setProgress(pct);
      if (current >= steps) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => setFading(true), 300);
        setTimeout(() => setVisible(false), 900);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const statusText = progress < 30 ? 'Loading neural networks...'
    : progress < 55 ? 'Processing data pipelines...'
    : progress < 75 ? 'Calibrating AI models...'
    : progress < 90 ? 'Initializing interface...'
    : progress < 99 ? 'Almost ready...'
    : 'Launching DatAInspire...';

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'var(--bg-primary)',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.6s ease-in-out',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.08) 50%, transparent 70%)' }}
      />

      {/* Floating nodes */}
      <FloatingNodes />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8" style={{ animation: 'fadeSlideUp 0.6s ease-out forwards' }}>
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl border border-blue-500/30 animate-pulse" />
            <div className="absolute inset-0 rounded-2xl" style={{ background: 'rgba(37,99,235,0.08)' }} />
            <Image
              src="/AIclub3d.png"
              alt="DatAInspire Logo"
              width={56}
              height={56}
              className="object-contain"
              style={{ filter: 'drop-shadow(0 0 12px rgba(37,99,235,0.8))' }}
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>DatAInspire</h1>
            <p className="text-xs tracking-[0.25em] uppercase mt-0.5" style={{ color: 'var(--text-subtle)' }}>
              KDU · AI & Data Science Club
            </p>
          </div>
        </div>

        {/* Scanning bar */}
        <div className="w-48 h-px relative overflow-hidden" style={{ background: 'var(--control-bg)' }}>
          <div className="absolute top-0 left-0 h-full scan-bar"
            style={{ background: 'linear-gradient(90deg, transparent, #2563EB, #06B6D4, transparent)', width: '40%' }} />
        </div>

        {/* Progress */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-64 h-1 rounded-full overflow-hidden" style={{ background: 'var(--control-bg)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #2563EB, #06B6D4)',
                boxShadow: '0 0 12px rgba(37,99,235,0.6)',
                transition: 'width 0.05s linear',
              }}
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{statusText}</span>
            <span className="font-mono text-xs font-semibold" style={{ color: '#06B6D4' }}>{progress}%</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanMove {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(500%); }
        }
        .scan-bar {
          animation: scanMove 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function FloatingNodes() {
  const nodes = [
    { left: '10%', top: '20%', size: 6, blue: true },
    { left: '85%', top: '15%', size: 4, blue: false },
    { left: '75%', top: '70%', size: 8, blue: true },
    { left: '15%', top: '75%', size: 5, blue: false },
    { left: '50%', top: '8%', size: 4, blue: false },
    { left: '90%', top: '45%', size: 6, blue: true },
    { left: '5%', top: '50%', size: 5, blue: false },
  ];

  return (
    <>
      {nodes.map((n, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            left: n.left, top: n.top,
            width: n.size, height: n.size,
            background: n.blue ? 'rgba(37,99,235,0.5)' : 'rgba(6,182,212,0.4)',
            boxShadow: n.blue ? '0 0 8px rgba(37,99,235,0.6)' : '0 0 8px rgba(6,182,212,0.6)',
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </>
  );
}
