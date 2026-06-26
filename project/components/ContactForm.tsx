'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const inputStyle: CSSProperties = {
  background: 'var(--surface-glass-strong)',
  border: '1px solid var(--border-color)',
  color: 'var(--text-primary)',
};

const errorStyle: CSSProperties = {
  background: 'var(--surface-glass-strong)',
  border: '1px solid rgba(239,68,68,0.5)',
  color: 'var(--text-primary)',
};

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    reset();
    setTimeout(() => setStatus('idle'), 5000);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center"
        style={{ animation: 'fadeIn 0.3s ease-out' }}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
          <CheckCircle size={28} style={{ color: '#10b981' }} />
        </div>
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Thanks for reaching out. We&apos;ll get back to you shortly.</p>
        <style jsx>{`
          @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        `}</style>
      </div>
    );
  }

  const baseClass = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all";
  const focusStyle = { boxShadow: '0 0 0 2px rgba(37,99,235,0.3)' };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Full Name *</label>
          <input
            {...register('name')}
            placeholder="Cadet John Doe"
            className={baseClass}
            style={errors.name ? errorStyle : inputStyle}
            onFocus={e => Object.assign(e.target.style, focusStyle)}
            onBlur={e => e.target.style.boxShadow = ''}
          />
          {errors.name && (
            <span className="text-xs flex items-center gap-1" style={{ color: '#ef4444' }}>
              <AlertCircle size={11} /> {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Email Address *</label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@kdu.ac.lk"
            className={baseClass}
            style={errors.email ? errorStyle : inputStyle}
            onFocus={e => Object.assign(e.target.style, focusStyle)}
            onBlur={e => e.target.style.boxShadow = ''}
          />
          {errors.email && (
            <span className="text-xs flex items-center gap-1" style={{ color: '#ef4444' }}>
              <AlertCircle size={11} /> {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Subject *</label>
        <input
          {...register('subject')}
          placeholder="Membership Inquiry"
          className={baseClass}
          style={errors.subject ? errorStyle : inputStyle}
          onFocus={e => Object.assign(e.target.style, focusStyle)}
          onBlur={e => e.target.style.boxShadow = ''}
        />
        {errors.subject && (
          <span className="text-xs flex items-center gap-1" style={{ color: '#ef4444' }}>
            <AlertCircle size={11} /> {errors.subject.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Message *</label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us about yourself or your inquiry..."
          className={baseClass}
          style={{ ...(errors.message ? errorStyle : inputStyle), resize: 'none' }}
          onFocus={e => Object.assign(e.target.style, focusStyle)}
          onBlur={e => e.target.style.boxShadow = ''}
        />
        {errors.message && (
          <span className="text-xs flex items-center gap-1" style={{ color: '#ef4444' }}>
            <AlertCircle size={11} /> {errors.message.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
        style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <><Send size={15} />Send Message</>
        )}
      </button>
    </form>
  );
}
