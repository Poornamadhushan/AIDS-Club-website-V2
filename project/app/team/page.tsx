'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import TeamCard from '@/components/TeamCard';
import SearchBar from '@/components/SearchBar';
import { teamMembers } from '@/data';
import { Users, Lightbulb, BookOpen, Heart } from 'lucide-react';

function useVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const cultureItems = [
  { icon: Users, title: 'Collaboration First', desc: 'We work together across disciplines, combining diverse skills to tackle complex AI challenges.', color: '#2563EB' },
  { icon: Lightbulb, title: 'Innovation Mindset', desc: 'We question assumptions, experiment boldly, and celebrate both successes and lessons learned.', color: '#06B6D4' },
  { icon: BookOpen, title: 'Always Learning', desc: "We invest in each other's growth through mentorship, knowledge sharing, and continuous education.", color: '#4F46E5' },
  { icon: Heart, title: 'Community Spirit', desc: 'We support each other beyond academics, building friendships and professional networks for life.', color: '#10b981' },
];

export default function TeamPage() {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('All');
  const header = useVisible();
  const culture = useVisible();

  const filtered = useMemo(() => {
    return teamMembers.filter(m => {
      const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.position.toLowerCase().includes(search.toLowerCase()) ||
        m.interests.some(i => i.toLowerCase().includes(search.toLowerCase()));
      const matchRole = role === 'All' || m.position === role;
      return matchSearch && matchRole;
    });
  }, [search, role]);

  return (
    <main className="min-h-screen pt-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, rgba(6,182,212,0.1) 0%, transparent 60%)' }} />
        <div
          ref={header.ref}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#06B6D4' }}>
            The People Behind DatAInspire
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            {teamMembers.length} passionate cadets and students building the future of AI together.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-72">
              <SearchBar value={search} onChange={setSearch} placeholder="Search by name or interest..." />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['All', 'President', 'Vice President', 'Committee Member'].map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                  style={{
                    background: role === r ? 'rgba(37,99,235,0.2)' : 'var(--surface-glass-strong)',
                    border: role === r ? '1px solid rgba(37,99,235,0.4)' : '1px solid var(--border-color)',
                    color: role === r ? '#60A5FA' : 'var(--text-muted)',
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          {filtered.length < teamMembers.length && (
            <p className="mt-4 text-sm" style={{ color: 'var(--text-subtle)' }}>
              Showing {filtered.length} of {teamMembers.length} members
            </p>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((member, i) => (
                <TeamCard key={member.id} member={member} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-base" style={{ color: 'var(--text-muted)' }}>No members found for your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 pb-24" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={culture.ref}
            className="text-center mb-12 transition-all duration-700"
            style={{ opacity: culture.visible ? 1 : 0, transform: culture.visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>
              Our Culture
            </span>
            <h2 className="text-3xl font-bold text-white">How We Work Together</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cultureItems.map((item, i) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--surface-glass-strong)',
                  border: '1px solid var(--border-color)',
                  opacity: culture.visible ? 1 : 0,
                  transform: culture.visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}>
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white mb-2">{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
