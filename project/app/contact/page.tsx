'use client';

import { useState, useRef, useEffect } from 'react';
import { Mail, Github, Linkedin, MapPin, ChevronDown } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { faqs } from '@/data';

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

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useVisible();

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden transition-all duration-500"
      style={{
        border: '1px solid var(--border-color)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(15px)',
        transitionDelay: `${index * 0.07}s`,
      }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left transition-colors"
        style={{ background: open ? 'rgba(37,99,235,0.08)' : 'var(--surface-glass)' }}
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold pr-4" style={{ color: 'var(--text-primary)' }}>{question}</span>
        <div style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease', flexShrink: 0 }}>
          <ChevronDown size={16} style={{ color: 'var(--text-subtle)' }} />
        </div>
      </button>
      <div style={{
        maxHeight: open ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        background: 'var(--surface-soft)',
      }}>
        <p className="px-5 py-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)' }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'datainspire@kdu.ac.lk', href: 'mailto:datainspire@kdu.ac.lk' },
  { icon: Github, label: 'GitHub', value: 'github.com/datainspire-kdu', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/company/datainspire', href: 'https://linkedin.com' },
  { icon: MapPin, label: 'University', value: 'KDU, Ratmalana, Sri Lanka', href: '#' },
];

const socials = [
  { label: 'GitHub', color: 'var(--text-primary)', href: 'https://github.com', bg: 'var(--control-bg)' },
  { label: 'LinkedIn', color: '#0A66C2', href: 'https://linkedin.com', bg: 'rgba(10,102,194,0.12)' },
  { label: 'Facebook', color: '#1877F2', href: 'https://facebook.com', bg: 'rgba(24,119,242,0.12)' },
  { label: 'Instagram', color: '#E1306C', href: 'https://instagram.com', bg: 'rgba(225,48,108,0.12)' },
];

export default function ContactPage() {
  const header = useVisible();
  const formSection = useVisible();
  const faqHeader = useVisible();

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
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Contact <span className="text-gradient">DatAInspire</span>
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            Have a question, want to join, or interested in collaboration? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={formSection.ref} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div
              className="lg:col-span-3 p-8 rounded-2xl transition-all duration-700"
              style={{
                background: 'var(--surface-glass-strong)',
                border: '1px solid var(--border-color)',
                opacity: formSection.visible ? 1 : 0,
                transform: formSection.visible ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div
              className="lg:col-span-2 flex flex-col gap-5 transition-all duration-700 delay-100"
              style={{
                opacity: formSection.visible ? 1 : 0,
                transform: formSection.visible ? 'translateX(0)' : 'translateX(20px)',
              }}
            >
              <div className="p-6 rounded-2xl flex flex-col gap-4"
                style={{ background: 'var(--surface-glass-strong)', border: '1px solid var(--border-color)' }}>
                <h3 className="font-bold text-base text-white">Contact Information</h3>
                <div className="flex flex-col gap-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-blue-500/20"
                        style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}>
                        <Icon size={15} style={{ color: '#60A5FA' }} />
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>{label}</p>
                        <p className="text-sm font-medium transition-colors group-hover:text-white" style={{ color: 'var(--text-muted)' }}>{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl"
                style={{ background: 'var(--surface-glass-strong)', border: '1px solid var(--border-color)' }}>
                <h3 className="font-bold text-base text-white mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center py-2.5 rounded-xl text-xs font-semibold transition-all hover:scale-105"
                      style={{ background: s.bg, border: `1px solid ${s.color}20`, color: s.color }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 pb-24" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={faqHeader.ref}
            className="text-center mb-12 transition-all duration-700"
            style={{ opacity: faqHeader.visible ? 1 : 0, transform: faqHeader.visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#2563EB' }}>FAQ</span>
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
