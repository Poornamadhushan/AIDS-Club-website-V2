'use client';

import { Github, Linkedin, Brain, Cloud, Shield, Code, BarChart, Atom } from 'lucide-react';
import { TeamMember } from '@/types';
import { useRef, useState, useEffect } from 'react';
import { assetPath } from '@/lib/assets';

const interestIcons: Record<string, React.ReactNode> = {
  'AI': <Brain size={11} />, 'AI Research': <Brain size={11} />, 'Deep Learning': <Brain size={11} />,
  'ML': <Brain size={11} />, 'NLP': <Brain size={11} />, 'LLMs': <Brain size={11} />,
  'Cloud': <Cloud size={11} />, 'MLOps': <Cloud size={11} />, 'DevOps': <Cloud size={11} />,
  'Cyber Security': <Shield size={11} />, 'Security': <Shield size={11} />,
  'Web Dev': <Code size={11} />, 'Python': <Code size={11} />,
  'Data Science': <BarChart size={11} />, 'Data Viz': <BarChart size={11} />,
  'Quantum ML': <Atom size={11} />,
};

export default function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const imageSrc = member.image.startsWith('http') ? member.image : assetPath(member.image);

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
      className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--surface-glass-strong)',
        border: '1px solid var(--border-color)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${(index % 4) * 0.08}s, transform 0.5s ease ${(index % 4) * 0.08}s`,
      }}
    >
      {/* Top gradient line on hover */}
      <div className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #2563EB, #06B6D4)' }} />

      <div className="p-5 flex flex-col items-center text-center gap-3">
        {/* Image */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-transparent group-hover:ring-blue-500/30 transition-all duration-300">
            <img src={imageSrc} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        </div>

        {/* Name & Position */}
        <div>
          <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{member.name}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
            style={{ background: 'rgba(37,99,235,0.15)', color: '#60A5FA', border: '1px solid rgba(37,99,235,0.2)' }}>
            {member.position}
          </span>
        </div>

        {/* Bio */}
        <p className="text-xs leading-relaxed line-clamp-3" style={{ color: 'var(--text-muted)' }}>{member.funFact}</p>

        {/* Interests */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {member.interests.slice(0, 3).map((interest) => (
            <span
              key={interest}
              className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
            >
              {interestIcons[interest] || <Brain size={11} />}
              {interest}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3 w-full justify-center pt-3" style={{ borderTop: '1px solid var(--border-color)' }}>
          <a
            href={member.github} target="_blank" rel="noopener noreferrer"
            aria-label={`${member.name} GitHub`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 hover:scale-105"
            style={{ background: 'var(--surface-soft)', color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
          >
            <Github size={12} /><span>GitHub</span>
          </a>
          <a
            href={member.linkedin} target="_blank" rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 hover:scale-105"
            style={{ background: 'rgba(37,99,235,0.1)', color: '#60A5FA', border: '1px solid rgba(37,99,235,0.2)' }}
          >
            <Linkedin size={12} /><span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
