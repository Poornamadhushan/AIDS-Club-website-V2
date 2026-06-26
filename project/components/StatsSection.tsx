'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data';

function CounterItem({ label, value, suffix, index }: { label: string; value: number; suffix: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [animVisible, setAnimVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setAnimVisible(true), index * 80);
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.round(current));
    }, duration / steps);
    return () => { clearTimeout(t); clearInterval(timer); };
  }, [visible, value, index]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 p-6 rounded-2xl transition-all duration-500 hover:scale-[1.03] cursor-default"
      style={{
        background: 'var(--surface-glass)',
        border: '1px solid var(--border-color)',
        opacity: animVisible ? 1 : 0,
        transform: animVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
      }}
    >
      <span
        className="text-4xl lg:text-5xl font-bold tabular-nums"
        style={{ color: 'var(--text-primary)', fontFamily: 'JetBrains Mono, monospace' }}
      >
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm font-medium text-center" style={{ color: 'var(--text-muted)' }}>{label}</span>
      <div className="w-8 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #2563EB, #06B6D4)' }} />
    </div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="text-center mb-12 transition-all duration-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>
            By the Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Impact</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <CounterItem key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
