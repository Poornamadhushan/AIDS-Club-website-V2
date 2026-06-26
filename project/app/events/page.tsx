'use client';

import { useState, useRef, useEffect } from 'react';
import EventCard from '@/components/EventCard';
import CountdownTimer from '@/components/CountdownTimer';
import { events, galleryImages } from '@/data';

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

export default function EventsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [animating, setAnimating] = useState(false);
  const header = useVisible();
  const gallery = useVisible();

  const upcoming = events.filter(e => e.status === 'upcoming');
  const past = events.filter(e => e.status === 'past');
  const nextEvent = upcoming[0];

  const switchTab = (t: 'upcoming' | 'past') => {
    if (t === tab) return;
    setAnimating(true);
    setTimeout(() => { setTab(t); setAnimating(false); }, 200);
  };

  return (
    <main className="min-h-screen pt-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.12) 0%, transparent 60%)' }} />
        <div
          ref={header.ref}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>
            What&apos;s Happening
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Club <span className="text-gradient">Events</span>
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            Workshops, hackathons, seminars, and industry sessions designed to elevate your AI journey.
          </p>
        </div>
      </section>

      {/* Countdown */}
      {nextEvent && (
        <section className="pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <CountdownTimer targetDate={nextEvent.date} eventTitle={nextEvent.title} />
          </div>
        </section>
      )}

      {/* Tabs */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-10 p-1 rounded-xl w-fit"
            style={{ background: 'var(--surface-glass-strong)', border: '1px solid var(--border-color)' }}>
            {(['upcoming', 'past'] as const).map(t => (
              <button
                key={t}
                onClick={() => switchTab(t)}
                className="relative px-6 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all duration-200"
                style={{
                  color: tab === t ? 'var(--text-primary)' : 'var(--text-muted)',
                  background: tab === t ? 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(6,182,212,0.2))' : 'transparent',
                  border: tab === t ? '1px solid rgba(37,99,235,0.3)' : '1px solid transparent',
                }}
              >
                {t} Events
                <span
                  className="ml-2 px-1.5 py-0.5 rounded-full text-xs"
                  style={{
                    background: tab === t ? 'rgba(37,99,235,0.3)' : 'var(--control-bg)',
                    color: tab === t ? '#93C5FD' : 'var(--text-subtle)',
                  }}
                >
                  {t === 'upcoming' ? upcoming.length : past.length}
                </span>
              </button>
            ))}
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-200"
            style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(10px)' : 'translateY(0)' }}
          >
            {(tab === 'upcoming' ? upcoming : past).map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={gallery.ref}
            className="text-center mb-12 transition-all duration-700"
            style={{ opacity: gallery.visible ? 1 : 0, transform: gallery.visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>
              Memories
            </span>
            <h2 className="text-3xl font-bold text-white">Event Gallery</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden aspect-video"
                style={{
                  opacity: gallery.visible ? 1 : 0,
                  transform: gallery.visible ? 'scale(1)' : 'scale(0.95)',
                  transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-end p-3"
                  style={{ background: 'linear-gradient(to top, rgba(3,7,18,0.8) 0%, transparent 50%)' }}
                >
                  <span className="text-xs font-medium text-white">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
