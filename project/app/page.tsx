'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Users, BookOpen, Calendar } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import EventCard from '@/components/EventCard';
import { events } from '@/data';
import { useRef, useEffect, useState } from 'react';

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const highlights = [
  { icon: Calendar, title: 'Events', description: 'Workshops, hackathons, and industry seminars designed to accelerate your technical skills.', color: '#2563EB' },
  { icon: Users, title: 'Community', description: 'Connect with like-minded peers, senior mentors, and industry professionals in AI and data science.', color: '#06B6D4' },
  { icon: BookOpen, title: 'Learning', description: 'Structured learning paths, research opportunities, and hands-on project experience.', color: '#4F46E5' },
];

export default function HomePage() {
  const upcomingEvents = events.filter(e => e.status === 'upcoming').slice(0, 3);
  const about = useVisible();
  const eventsSection = useVisible();
  const cta = useVisible();

  return (
    <main className="min-h-screen" style={{ background: '#030712' }}>
      <HeroSection />

      {/* About Preview */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={about.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="transition-all duration-700"
              style={{ opacity: about.visible ? 1 : 0, transform: about.visible ? 'translateX(0)' : 'translateX(-30px)' }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>
                About DatAInspire
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Shaping Sri Lanka's Next Generation of AI Leaders
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9CA3AF' }}>
                DatAInspire is the premier AI & Data Science student club at General Sir John Kotelawala Defence University. We are a community of passionate learners, researchers, and innovators committed to advancing AI knowledge and practice.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#9CA3AF' }}>
                From hands-on workshops to industry collaborations and inter-university hackathons, we create opportunities for students to grow beyond the classroom and build the skills of tomorrow.
              </p>
              <Link
                href="/overview"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#2563EB' }}
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>

            <div
              className="grid grid-cols-1 gap-4 transition-all duration-700 delay-100"
              style={{ opacity: about.visible ? 1 : 0, transform: about.visible ? 'translateX(0)' : 'translateX(30px)' }}
            >
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 hover:translate-x-1"
                  style={{ background: 'rgba(17,24,39,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${h.color}18`, border: `1px solid ${h.color}30` }}>
                    <h.icon size={18} style={{ color: h.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 text-white">{h.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Upcoming Events */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={eventsSection.ref}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 transition-all duration-700"
            style={{ opacity: eventsSection.visible ? 1 : 0, transform: eventsSection.visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: '#2563EB' }}>
                What's Next
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Upcoming Events</h2>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-105"
              style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', color: '#60A5FA' }}
            >
              View All Events <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={cta.ref}
            className="transition-all duration-700"
            style={{ opacity: cta.visible ? 1 : 0, transform: cta.visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', color: '#60A5FA' }}>
              <Zap size={12} />
              Ready to Join?
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Be Part of the <span className="text-gradient">AI Revolution</span>
            </h2>
            <p className="text-base sm:text-lg mb-10" style={{ color: '#9CA3AF' }}>
              Join a community of forward-thinking students pushing the boundaries of artificial intelligence and data science at KDU.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', boxShadow: '0 0 40px rgba(37,99,235,0.3)' }}
              >
                Join the Community
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#D1D5DB' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
