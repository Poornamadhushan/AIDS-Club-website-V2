export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  github: string;
  linkedin: string;
  interests: string[];
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  category: string;
  image: string;
  status: 'upcoming' | 'past';
  registerUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
