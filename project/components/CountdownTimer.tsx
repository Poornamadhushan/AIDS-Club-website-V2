'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  eventTitle: string;
}

export default function CountdownTimer({ targetDate, eventTitle }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calculate();
    const t = setInterval(calculate, 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="rounded-2xl p-8 text-center"
      style={{
        background: 'var(--surface-glass-strong)',
        border: '1px solid rgba(37,99,235,0.2)',
        boxShadow: '0 0 40px rgba(37,99,235,0.1)',
      }}
    >
      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#2563EB' }}>
        Next Major Event
      </p>
      <h3 className="text-lg font-bold text-white mb-6">{eventTitle}</h3>

      <div className="flex items-center justify-center gap-3">
        {units.map(({ label, value }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(37,99,235,0.12)',
                  border: '1px solid rgba(37,99,235,0.25)',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                <span className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {String(value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>{label}</span>
            </div>
            {i < 3 && (
              <span className="text-2xl font-bold mb-5" style={{ color: '#2563EB' }}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
