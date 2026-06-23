'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/overview', label: 'Overview' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(3,7,18,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transform: mounted ? 'translateY(0)' : 'translateY(-80px)',
          opacity: mounted ? 1 : 0,
          transition: 'transform 0.5s ease, opacity 0.5s ease, background 0.3s, border 0.3s',
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image src="/assets/AIclub3d.png" alt="DatAInspire" fill className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-base text-white tracking-tight">DatAInspire</span>
              <span className="text-[9px] tracking-widest uppercase" style={{ color: '#6B7280' }}>KDU</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                  style={{
                    color: isActive ? '#F9FAFB' : '#9CA3AF',
                    background: isActive ? 'rgba(37,99,235,0.15)' : 'transparent',
                    border: isActive ? '1px solid rgba(37,99,235,0.25)' : '1px solid transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#F9FAFB';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#9CA3AF';
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold rounded-lg text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
                boxShadow: '0 0 20px rgba(37,99,235,0.3)',
                display: 'inline-block',
              }}
            >
              Join Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg"
            style={{ background: 'rgba(255,255,255,0.06)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} color="#F9FAFB" /> : <Menu size={18} color="#F9FAFB" />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col p-6"
        style={{
          background: '#0f172a',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8">
              <Image src="/assets/AIclub3d.png" alt="DatAInspire" fill className="object-contain" />
            </div>
            <span className="font-bold text-white">DatAInspire</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <X size={16} color="#9CA3AF" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{
                  color: isActive ? '#F9FAFB' : '#9CA3AF',
                  background: isActive ? 'rgba(37,99,235,0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(37,99,235,0.2)' : '1px solid transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="mt-4 w-full py-3 text-center text-sm font-semibold rounded-xl text-white"
          style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
        >
          Join the Community
        </Link>
      </div>
    </>
  );
}
