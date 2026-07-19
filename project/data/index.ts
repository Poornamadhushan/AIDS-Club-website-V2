import { TeamMember, Event, FAQ, Stat } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Minuka Wickramasinghe',
    position: 'President',
    funFact: 'I am passionate about AI, data science, and project management, and I enjoy leading initiatives that bring people together. Outside of that, Im always up for good music, great company, and memorable eventsh.',
    image: '/assets/1.jpeg',
    github: 'https://github.com/Minuka8',
    linkedin: 'https://www.linkedin.com/in/minuka-wickramasinghe?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    
  },
  {
    id: 2,
    name: 'Sanjaya Gunasekare ',
    position: 'Vice President',
    funFact: 'By day, crunches data for his Data Science degree. By weekend, crunches gravel on Sri Lankan hiking trails. Certified traveler, aspiring data wizard',
    image: '/assets/2.jpeg',
    github: 'https://github.com/Sanjaya0028',
    linkedin: 'https://www.linkedin.com/in/sanjaya-gunasekare?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    
  },
  {
    id: 3,
    name: 'seshan Perera',
    position: 'Vice President',
    funFact: 'I enjoy building things through coding and love working with electronics and mechanical systems, always looking for opportunities to solve real-world problems. Outside of academics, I have represented my university in cricket, swimming, and water polo, which has strengthened my teamwork, discipline, and leadership skills.',
    image: '/assets/3.jpg',
    github: 'https://github.com/seshanperera2004',
    linkedin: 'https://www.linkedin.com/in/seshan-perera-51b79832b',
   
  },
  {
    id: 4,
    name: 'Ravindu prabhashana ',
    position: 'Event coordinator ',
    funFact: 'Ai enthusias.',
    image: '/assets/4.jpg',
    github: 'https://github.com/ravindu57',
    linkedin: 'https://www.linkedin.com/in/ravindu-prabhashana-97123634b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    
  },
  {
    id: 5,
    name: 'Cassandra Delima',
    position: 'editor',
    funFact: 'Cloud architect and MLOps specialist experienced in deploying AI solutions on Azure and AWS. Drives the club\'s cloud-first technology strategy.',
    image: '/assets/5.jpg',
    github: 'https://github.com/Cassandra-Delima',
    linkedin: 'https://www.linkedin.com/in/a-a-cassandra-delima-69542234b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    
  },
  {
    id: 6,
    name: 'Chamudi Nanayakkara ',
    position: 'Assistant Membership Director',
    funFact: 'I enjoy exploring data science and AI projects in my free time and am always eager to learn new technologies..',
    image: '/assets/6.jpg',
    github: 'https://github.com/chamudinanayakkara2004-rgb',
    linkedin: 'www.linkedin.com/in/chamudi-nanayakkara-155759228',
   
  },
  {
    id: 7,
    name: 'Githma Wickramasooriya',
    position: 'Membership director',
    funFact: 'I am a passionate chess player who enjoys strategic thinking and problem-solving. My enthusiasm for AI and Data Science motivates me to explore innovative solutions and continuously expand my knowledge..',
    image: '/assets/7.jpeg',
    github: 'https://github.com/githmawickramasooriya',
    linkedin: 'https://www.linkedin.com/in/githma-wickramasooriya-68a94b336/',
  
  },
  {
    id: 8,
    name: 'Vidushi Subasingha',
    position: 'Assistant Event Coordinator',
    funFact: 'I enjoy working with people, organizing meaningful events, and continuously learning new skills. I am always excited to take on new challenges that help me grow personally and professionally.',
    image: '/assets/8.jpeg',
    github: 'https://github.com/vidu-subasingha',
    linkedin: 'linkedin.com/in/vidushi-subasingha-516138339',
   
  },
  {
    id: 9,
    name: 'Rashida Ramsani',
    position: 'Secretary',
    funFact: 'I can spend the same day debugging an AI model, planning a national-level data science event, and rewriting a sponsorship email until every word feels right ;-).',
    image: '/assets/9.jpeg',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    
  },
  {
    id: 10,
    name: 'Ashfa Naseerdeen',
    position: 'Vice secretary',
    funFact: 'I perform my best under pressure and stay calm in challenging situations. I enjoy learning and growing through new experiences.',
    image: 'https://github.com/user-attachments/assets/19209ae9-4ce6-488c-8611-907012848e08',
    github: 'https://github.com/Asfanaseerdeen',
    linkedin: 'https://www.linkedin.com/in/asfa-naseerdeen-4329a5321',
 
  },
  {
    id: 11,
    name: 'Dehan Desandu Godage',
    position: 'Assistance sergeant at arms ',
    funFact: 'Iam a friendly and approachable person who enjoys playing video games in my free time. I also played sports such as badminton, chess, karate, cricket, boxing, and rugby, which keep me active and competitive. I enjoy both strategic thinking and staying physically active in a balanced and fun way.',
    image: '/assets/11.jpg',
    github: 'https://github.com/desandudehan9',
    linkedin: 'https://www.linkedin.com/in/godage-dehan-desandu-464366373?utm_source=share_via&utm_content=profile&utm_medium=member_android',
 
  },
  {
    id: 12,
    name: 'Vishmi Hasara',
    position: 'Assistant PR director',
    funFact: 'I love using sleek, tech-themed design elements to shape the club visual narrative, turning complex technical concepts into compelling promotional content..',
    image: '/assets/12.jpg',
    github: 'https://github.com/Hasara-V',
    linkedin: 'www.linkedin.com/in/vishmi-hasara-68290530a',
   
  },
  {
    id: 13,
    name: 'KML KAVIHARA',
    position: 'Treasure',
    funFact: 'I enjoy exploring AI, data analytics, and programming while building practical projects. Outside of work and studies, I like to relax, listening music, and spend quality time unwinding with friends.',
    image: '/assets/13.png',
    github: 'https://github.com/lasiru01',
    linkedin: 'https://www.linkedin.com/in/lasiru-kavihara/',
   
  },

  {
    id: 15,
    name: 'Umayangani T. Chandrasiri',
    position: 'Assistance Web Master',
    funFact: 'U.Ts™ | Beyond the OrdinaryI dont chase trends; I create my own trajectory. Through intelligence, innovation, and curiosity, I shape a future where possibilities become reality.A mind driven by data. A vision inspired by the skies. A journey defined by excellence.',
    image: '/assets/15.jpeg',
    github: 'https://github.com/umayanganithewsarani2121-afk',
    linkedin: 'https://www.linkedin.com/in/umayangani-t-chandrasiri/',
    
  },
  {
    id: 16,
    name: 'Induharsha Isadhara',
    position: 'Public Relations Director ',
    funFact: 'Applied Data Science undergraduate with a passion for creativity and innovation.I enjoy capturing memorable moments through photography and exploring data-driven solutions..',
    image: '/assets/16.jpeg',
    github: 'https://github.com/Indu222325',
    linkedin: 'https://www.linkedin.com/in/induharsha-isadhara-8461973b1?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    
  },
  {
    id: 17,
    name: 'K.S.R.M. Fernando ',
    position: 'Assistant Treasurer',
    funFact: 'I love turning data into stories and ideas into reality. Whether it’s exploring AI, organizing events, or solving challenges with creativity, I enjoy finding unique ways to connect people, technology, and innovation. I combine my interest in numbers with teamwork and leadership.',
    image: '/assets/17.jpeg',
    github: 'https://github.com/sanithma',
    linkedin: 'https://www.linkedin.com/in/sanithma-fernando-b83451355?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  
  },
  {
    id: 18,
    name: 'Inuka Prasad Mahaliyana',
    position: 'Sergeant at Arms',
    funFact: 'I believe good organization and discipline are important for a successful team.',
    image: '/assets/18.jpeg',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/inuka-prasad-06847b372',
    
  },
  {
    id: 19,
    name: 'Poorna Madhushan',
    position: 'Web master',
    funFact: 'Python wasnt named after the snake. It was named after the British comedy show Monty Python and the Holy Grail.',
    image: '/assets/19.jpeg',
    github: 'https://github.com/Poornamadhushan',
    linkedin: 'https://www.linkedin.com/in/poorna-madhushan/',
    
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: 'Data Odyssey 2025',
    date: '2025-10-15',
    time: '9:00 AM',
    venue: 'FMSH',
    description: 'An inter-faculty competition that brought together the brightest minds across faculties to compete in data science and AI challenges.',
    category: 'Competition',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'past',
  },
  {
    id: 2,
    title: 'Data Dash Cricket Championship 2025',
    date: '2025-09-15',
    time: '8:30 AM',
    venue: 'KDU - Soccer Ground',
    description: 'A soft ball cricket tournament bringing club members together for a day of sport, teamwork, and friendly competition.',
    category: 'Sports',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'past',
  },
  {
    id: 3,
    title: 'Data Connect',
    date: '2026-04-04',
    time: '7:00 PM',
    venue: 'Online',
    description: 'The launch of the Data Connect Online Series organized by AI & Data Science Club, starting with an insightful session on AI Fundamentals with Microsoft AI.',
    category: 'Online Series',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'past',
  },
  {
    id: 4,
    title: 'Data Renaissance',
    date: '2026-07-22',
    time: '3:00 PM',
    venue: 'FDSS Auditorium',
    description: 'The official Club Installation ceremony, marking the beginning of a new chapter for DatAInspire.',
    category: 'Ceremony',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'upcoming',
  },
  {
    id: 5,
    title: 'Data Day 2026',
    date: '2026-08-18',
    time: 'TBA',
    venue: 'FGS',
    description: 'A seminar day with expert sessions, panel discussions, and networking — the final lead-up before the Grand Finale.',
    category: 'Seminar',
    image: '/AIDS-Club-website-V2/assets/data-day-2026.PNG',
    status: 'upcoming',
  },
  {
    id: 6,
    title: 'Data Odyssey 2026',
    date: '2026-08-21',
    time: '9:00 AM',
    venue: 'FMSH',
    description: 'An inter-university competition bringing together top talent from across the country to compete in data science and AI challenges.',
    category: 'Competition',
    image: '/AIDS-Club-website-V2/assets/data-odyssey-2026.jpeg',
    status: 'upcoming',
    registerUrl: 'https://poornamadhushan.github.io/dataodssey/',
  },
  {
    id: 7,
    title: 'Data Dash Cricket Championship 2026',
    date: '2026-10-15',
    time: 'TBA',
    venue: 'TBA',
    description: 'A soft ball cricket tournament bringing club members together for a day of sport, teamwork, and friendly competition.',
    category: 'Sports',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'upcoming',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How do I join DatAInspire?',
    answer: 'All KDU undergraduate students are welcome to join. Simply fill out the membership form through the Contact page or attend any of our events. Membership is open at the start of each academic semester.',
  },
  {
    question: 'Do I need prior AI or data science experience?',
    answer: 'Not at all! We welcome students at all skill levels — from complete beginners to advanced practitioners. Our workshops and events are designed to accommodate diverse backgrounds and learning stages.',
  },
  {
    question: 'Can first-year students join?',
    answer: 'Absolutely! First-year students are especially encouraged to join early. Getting involved in the club from day one gives you access to mentorship, workshops, and a network of peers and seniors to learn from.',
  },
  {
    question: 'How can I participate in events and workshops?',
    answer: 'All upcoming events are listed on our Events page. You can register directly through the event registration link or contact us via email. Most events are free for KDU students.',
  },
  {
    question: 'Is this club only for IT students?',
    answer: 'While the club is rooted in the Faculty of Technology, students from all faculties at KDU are welcome. AI and Data Science are multidisciplinary fields that benefit from diverse perspectives.',
  },
  {
    question: 'How can I contribute or collaborate with the club?',
    answer: 'You can contribute by volunteering for events, proposing workshop topics, joining the committee, or connecting us with industry partners. Reach out through our Contact page with your idea.',
  },
];

export const stats: Stat[] = [
  { label: 'Active Members', value: 19, suffix: '+' },
  { label: 'Events Conducted', value: 25, suffix: '+' },
  { label: 'Projects Built', value: 10, suffix: '+' },
  { label: 'Community Reach', value: 1000, suffix: '+' },
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Team Workshop' },
  { src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Hackathon' },
  { src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'AI Bootcamp' },
  { src: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Coding Session' },
  { src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Collaboration' },
  { src: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Python Workshop' },
];
