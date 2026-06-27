import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/overview', label: 'Overview' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-auto"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #2563EB, #06B6D4, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* KDU University Logo */}
          <div className="flex flex-col items-start gap-4">
            <div
              className="p-3 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)' }}
            >
              <div className="relative w-28 h-24">
                <Image
                  src="/assets/KDU-LOGO-ORIGINAL-5x4-inch-copy-1.png"
                  alt="General Sir John Kotelawala Defence University"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-subtle)' }}>
              General Sir John Kotelawala<br />Defence University
            </p>
          </div>

          {/* Club Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image src="/assets/AIclub3d.png" alt="DatAInspire" fill className="object-contain" />
              </div>
              <div>
                <div className="font-bold text-lg text-white">DatAInspire</div>
                <div className="text-[9px] tracking-widest uppercase" style={{ color: 'var(--text-subtle)' }}>AI & Data Science Club</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-subtle)' }}>
              Empowering the next generation of AI innovators at KDU.
            </p>
            <a
              href="mailto:datainspire@kdu.ac.lk"
              className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: 'var(--text-muted)' }}
            >
              <Mail size={14} />
              datainspire@kdu.ac.lk
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--text-subtle)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Connect</h4>
            <div className="flex gap-3 flex-wrap">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'var(--control-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,99,235,0.4)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(37,99,235,0.15)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--control-bg)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.12)' }}>
              <p className="text-xs font-medium mb-1" style={{ color: '#60A5FA' }}>Faculty of Technology</p>
              <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                Ratmalana, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-subtle)' }}
        >
          <span>© 2026 DatAInspire – AI & Data Science Club, KDU. All Rights Reserved.</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
