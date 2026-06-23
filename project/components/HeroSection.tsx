'use client';

import Link from 'next/link';
import { ArrowRight, ChevronDown, Cpu, Database, Network } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(37,99,235,0.2) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }} />
        <div className="absolute top-1/4 left-0 w-72 h-72"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)' }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full animate-float"
          style={{ width: 320, height: 320, left: '75%', top: '15%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full animate-float-delay"
          style={{ width: 200, height: 200, left: '10%', top: '60%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full animate-float"
          style={{ width: 160, height: 160, left: '85%', top: '65%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)' }} />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {[
          { Icon: Cpu, x: '8%', y: '30%', delay: '0s' },
          { Icon: Database, x: '88%', y: '25%', delay: '1s' },
          { Icon: Network, x: '92%', y: '70%', delay: '2s' },
        ].map(({ Icon, x, y, delay }, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{ left: x, top: y, animationDelay: delay }}
          >
            <div className="p-2 rounded-xl" style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}>
              <Icon size={18} style={{ color: '#2563EB', opacity: 0.7 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8 transition-all duration-700"
          style={{
            background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', color: '#60A5FA',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          KDU AI & Data Science Club
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 transition-all duration-700 delay-100"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <span style={{ color: '#F9FAFB' }}>Empowering </span>
          <span className="text-gradient">Future Innovators</span>
          <br />
          <span style={{ color: '#F9FAFB' }}>in </span>
          <span className="text-gradient">AI & Data Science</span>
        </h1>

        {/* Logo */}
        <div
          className="flex justify-center mb-6 transition-all duration-700 delay-150"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.8)' }}
        >
          <div className="relative">
            <div className="absolute inset-0 blur-2xl rounded-full" style={{ background: 'rgba(37,99,235,0.3)' }} />
            <Image
              src="/assets/AIclub3d.png"
              alt="DatAInspire"
              width={80}
              height={80}
              className="relative object-contain animate-float"
              style={{ filter: 'drop-shadow(0 0 20px rgba(37,99,235,0.7))' }}
            />
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200"
          style={{
            color: '#9CA3AF',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          A student-driven community exploring Artificial Intelligence, Machine Learning, Data Science, Research, and Emerging Technologies at KDU.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', boxShadow: '0 0 30px rgba(37,99,235,0.35)' }}
          >
            Join Community
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#D1D5DB' }}
          >
            Explore Events
            <ArrowRight size={16} style={{ opacity: 0.6 }} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs tracking-widest uppercase" style={{ color: '#4B5563' }}>Scroll</span>
        <ChevronDown size={16} style={{ color: '#4B5563' }} />
      </div>
    </section>
  );
}
