'use client';

import Link from 'next/link';
import { Target, Eye, Lightbulb, Users, Award, BookOpen, Rocket, Link2 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

function useVisible(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return { ref, visible };
}

const missions = [
  { icon: Lightbulb, text: 'Promote AI education and awareness across all university faculties' },
  { icon: Rocket, text: 'Encourage research, innovation, and entrepreneurship in technology' },
  { icon: Users, text: 'Build a strong technical community and collaborative culture' },
  { icon: BookOpen, text: 'Support academic and industrial research in AI and data science' },
  { icon: Link2, text: 'Connect students with industry mentors and career opportunities' },
];

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We challenge conventional thinking and explore new frontiers in AI.', color: '#2563EB' },
  { icon: Users, title: 'Collaboration', desc: 'We believe great ideas emerge from diverse, inclusive teams.', color: '#06B6D4' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest technical and ethical standards.', color: '#4F46E5' },
  { icon: Target, title: 'Leadership', desc: 'We develop the next generation of AI leaders and innovators.', color: '#10b981' },
  { icon: BookOpen, title: 'Research', desc: 'We value rigorous inquiry and data-driven decision-making.', color: '#f59e0b' },
  { icon: Rocket, title: 'Continuous Learning', desc: 'We stay curious, embrace change, and never stop growing.', color: '#8b5cf6' },
];

export default function OverviewPage() {
  const hero = useVisible();
  const story = useVisible();
  const vision = useVisible();
  const missionSection = useVisible();
  const valuesSection = useVisible();

  return (
    <main className="min-h-screen pt-24" style={{ background: '#030712' }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.15) 0%, transparent 60%)' }} />
        <div ref={hero.ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'translateY(0)' : 'translateY(30px)' }}>
          <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>Who We Are</span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">DatAInspire</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#9CA3AF' }}>
            DatAInspire is the official AI & Data Science Club at General Sir John Kotelawala Defence University. Founded by passionate students and faculty, we are a community committed to exploring, learning, and innovating in the fields of artificial intelligence, machine learning, and data science.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={story.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="transition-all duration-700"
              style={{ opacity: story.visible ? 1 : 0, transform: story.visible ? 'translateX(0)' : 'translateX(-30px)' }}>
              <h2 className="text-3xl font-bold text-white mb-5">Our Story</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9CA3AF' }}>
                Established within the Faculty of Technology at KDU, DatAInspire bridges the gap between academic knowledge and real-world application. We operate at the intersection of cutting-edge research and practical skill development.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9CA3AF' }}>
                Our members are cadets, officer cadets, and civilian students who share a deep interest in how AI and data science are reshaping the world — from defence intelligence to healthcare, finance, and beyond.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#9CA3AF' }}>
                Through events, workshops, and collaborative projects, we create a platform for students to grow into confident, capable technologists ready for the challenges of the 21st century.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 transition-all duration-700 delay-100"
              style={{ opacity: story.visible ? 1 : 0, transform: story.visible ? 'translateX(0)' : 'translateX(30px)' }}>
              {[
                { label: 'Founded', value: '2023', color: '#2563EB' },
                { label: 'University', value: 'KDU', color: '#06B6D4' },
                { label: 'Faculty', value: 'Technology', color: '#4F46E5' },
                { label: 'Focus', value: 'AI & DS', color: '#10b981' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 p-6 rounded-2xl text-center transition-all hover:scale-[1.03] cursor-default"
                  style={{ background: 'rgba(17,24,39,0.7)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="text-2xl font-bold" style={{ color: item.color }}>{item.value}</span>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 relative">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={vision.ref} className="text-center mb-10 transition-all duration-700"
            style={{ opacity: vision.visible ? 1 : 0, transform: vision.visible ? 'translateY(0)' : 'translateY(20px)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>Our Vision</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Where We&apos;re Headed</h2>
          </div>
          <div className="relative p-8 rounded-2xl text-center transition-all duration-700 delay-100"
            style={{
              background: 'rgba(17,24,39,0.7)',
              border: '1px solid rgba(37,99,235,0.2)',
              boxShadow: '0 0 60px rgba(37,99,235,0.08)',
              opacity: vision.visible ? 1 : 0,
              transform: vision.visible ? 'translateY(0)' : 'translateY(20px)',
            }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}>
              <Eye size={24} style={{ color: '#2563EB' }} />
            </div>
            <blockquote className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
              To become the <span className="text-gradient">leading student community</span> driving innovation in Artificial Intelligence and Data Science — producing graduates who shape the future of technology in Sri Lanka and beyond.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={missionSection.ref} className="text-center mb-12 transition-all duration-700"
            style={{ opacity: missionSection.visible ? 1 : 0, transform: missionSection.visible ? 'translateY(0)' : 'translateY(20px)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What Drives Us</h2>
          </div>
          <div className="flex flex-col gap-4">
            {missions.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:translate-x-1"
                style={{
                  background: 'rgba(17,24,39,0.6)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  opacity: missionSection.visible ? 1 : 0,
                  transform: missionSection.visible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.25)' }}>
                  <m.icon size={18} style={{ color: '#2563EB' }} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>{m.text}</p>
                <div className="ml-auto flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(37,99,235,0.2)' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={valuesSection.ref} className="text-center mb-12 transition-all duration-700"
            style={{ opacity: valuesSection.visible ? 1 : 0, transform: valuesSection.visible ? 'translateY(0)' : 'translateY(20px)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">The Principles We Live By</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(17,24,39,0.7)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  opacity: valuesSection.visible ? 1 : 0,
                  transform: valuesSection.visible ? 'translateY(0)' : 'translateY(25px)',
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${v.color}18`, border: `1px solid ${v.color}30` }}>
                  <v.icon size={20} style={{ color: v.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{v.desc}</p>
                </div>
                <div className="h-0.5 w-12 rounded-full mt-auto" style={{ background: `${v.color}60` }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
