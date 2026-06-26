'use client';

import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { events } from '@/data';
import { useRef, useState, useEffect } from 'react';

const categoryColors: Record<string, string> = {
  Workshop: '#2563EB',
  Hackathon: '#06B6D4',
  Seminar: '#4F46E5',
  Symposium: '#10b981',
};

export default function EventCard({ event, index = 0 }: { event: (typeof events)[0]; index?: number }) {
  const color = categoryColors[event.category] || '#2563EB';
  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--surface-glass-strong)',
        border: '1px solid var(--border-color)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      {/* Banner */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, var(--image-scrim) 100%)' }} />
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold text-white"
          style={{ background: `${color}cc`, backdropFilter: 'blur(8px)' }}
        >
          {event.category}
        </span>
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold"
          style={{
            background: event.status === 'upcoming' ? 'rgba(16,185,129,0.2)' : 'rgba(107,114,128,0.3)',
            border: event.status === 'upcoming' ? '1px solid rgba(16,185,129,0.4)' : '1px solid rgba(107,114,128,0.4)',
            color: event.status === 'upcoming' ? '#34d399' : 'var(--text-muted)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-bold text-base leading-snug" style={{ color: 'var(--text-primary)' }}>{event.title}</h3>
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-muted)' }}>{event.description}</p>

        <div className="flex flex-col gap-2 mt-auto pt-3" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-subtle)' }}>
            <Calendar size={12} /><span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-subtle)' }}>
            <Clock size={12} /><span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-subtle)' }}>
            <MapPin size={12} /><span className="line-clamp-1">{event.venue}</span>
          </div>
        </div>

        {event.status === 'upcoming' && event.registerUrl && (
          <Link
            href={event.registerUrl}
            className="mt-2 w-full py-2.5 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-all duration-200 hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${color}, #06B6D4)`, color: '#fff' }}
          >
            Register Now <ArrowRight size={12} />
          </Link>
        )}
      </div>
    </div>
  );
}
