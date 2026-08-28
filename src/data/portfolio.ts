// Barcha kontentni shu faylda tahrirlang — komponentlarga tegishning hojati yo'q.

export const profile = {
  name: 'Murodbek Norimatov',
  role: 'Full-Stack Developer',
  tagline: "Natijaviy ishlanma va samarali jarayon — mening asosiy ustuvorliklarim. 2 yillik Fullstack tajribasi bilan mustaqil loyihalarda ishlab kelaman.",
  location: "Xorazm, O'zbekiston",
  phone: '+998 50 057 21 11',
  telegram: 'https://t.me/norimatov',
  github: 'https://github.com/norimatov',
  linkedin: '',
  resumeUrl: '#',
  yearsExperience: 2,
  availability: 'Yangi imkoniyatlarga ochiqman',
  english: 'B2 — Intermediate',
  stats: [
    { num: '2', label: 'yil tajriba' },
    { num: '10+', label: 'loyiha' },
    { num: 'B2', label: 'ingliz tili' },
  ],
};

export const aboutParagraphs = [
  "Men 2 yillik Fullstack ishlanma tajribasiga ega Middle Developer'man — mustaqil loyihalar, freelance buyurtmalar va shaxsiy pet-projects orqali o'z ko'nikmalarimni rivojlantirganman.",
  "Frontend (React/Next.js) va backend (Node.js/NestJS) yo'nalishlarida teng darajada ishlayman, to'liq funksional veb-ilovalarni noldan yaratish, API loyihalash va ma'lumotlar bazalari bilan ishlash bo'yicha amaliy tajribaga egaman.",
  "Kompaniyada rasmiy ishlamagan bo'lsam-da, real buyurtmalar va jamoa loyihalarida ishtirok etganman — mas'uliyatni o'z zimmasiga olish, sifatli kod yozish va murakkab vazifalarni mustaqil hal qilish odatimga aylangan.",
];

export interface SkillGroup {
  category: string;
  packageName: string;
  version: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    packageName: 'languages',
    version: 'core',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C'],
  },
  {
    category: 'Frameworks',
    packageName: 'frameworks',
    version: 'web',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'NestJS', 'Telegram Bot API'],
  },
  {
    category: 'Databases',
    packageName: 'databases',
    version: 'storage',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    packageName: 'tools',
    version: 'devops',
    skills: ['Git', 'Docker', 'PM2', 'Linux (Ubuntu)'],
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  status: 'production' | 'in-progress' | 'archived';
  metric: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'novacrm',
    name: 'NovaCRM',
    description:
      "Mijozlar bilan ishlashni avtomatlashtiruvchi CRM tizimi — buyurtmalar, tranzaksiyalar va mijozlar bazasini boshqarish imkonini beradi.",
    stack: ['React', 'NestJS', 'PostgreSQL'],
    status: 'production',
    metric: 'CRM avtomatlashtirish loyihasi',
    repoUrl: profile.github,
  },
  {
    id: 'pulse',
    name: 'Pulse',
    description:
      "WebSocket orqali real-vaqtli yangilanadigan monitoring va statistika boshqaruv paneli — buyurtmalar va daromadni jonli kuzatish.",
    stack: ['NestJS', 'PostgreSQL', 'WebSocket', 'React'],
    status: 'production',
    metric: 'Real-time dashboard',
    repoUrl: profile.github,
  },
  {
    id: 'marketplace',
    name: 'Marketplace',
    description:
      "Mahsulotlarni ko'rish, qidirish va xarid qilish imkoniyatini beruvchi onlayn marketplace ilovasi.",
    stack: ['Next.js', 'Tailwind CSS', 'React'],
    status: 'production',
    metric: 'Vercel platformasida joylashtirilgan',
    liveUrl: 'http://marketplace-silk-nine.vercel.app/',
  },
  {
    id: 'music-player',
    name: 'Music Player',
    description:
      "Qo'shiqlarni qidirish, tinglash va pleylist boshqarish imkonini beruvchi interaktiv musiqa pleyeri ilovasi.",
    stack: ['React', 'JavaScript', 'CSS'],
    status: 'production',
    metric: 'Vercel platformasida joylashtirilgan',
    liveUrl: 'https://music-player-bd3rv3sgk-murodbeks-projects-444501fe.vercel.app/',
  },
  {
    id: 'oqishu',
    name: 'OqishU',
    description:
      "O'quvchilar uchun kurslar va o'quv jarayonini boshqarish platformasi — darslar, topshiriqlar va progress kuzatuvi.",
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    status: 'production',
    metric: "Ta'lim platformasi",
    repoUrl: profile.github,
  },
  {
    id: 'ustoz',
    name: 'Ustoz',
    description:
      "O'qituvchi va o'quvchilarni bog'lovchi mentorlik platformasi — dars jadvali, aloqa va progress monitoring.",
    stack: ['React', 'Express', 'PostgreSQL'],
    status: 'production',
    metric: 'Mentorlik platformasi',
    repoUrl: profile.github,
  },
  {
    id: 'uzbektour',
    name: 'UzbekTour',
    description:
      "O'zbekiston bo'ylab sayohat yo'nalishlari, mehmonxonalar va turistik joylarni ko'rsatuvchi turizm platformasi.",
    stack: ['Next.js', 'Tailwind CSS', 'Node.js'],
    status: 'production',
    metric: 'Turizm platformasi',
    repoUrl: profile.github,
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio Website',
    description:
      "Next.js va Tailwind CSS yordamida qurilgan shaxsiy portfolio sayti — toza UI va zamonaviy dizayn tamoyillari asosida.",
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    status: 'production',
    metric: "Onlayn joylashtirilgan",
    repoUrl: profile.github,
  },
  {
    id: 'taskflow',
    name: 'TaskFlow',
    description:
      "Jamoalar uchun vazifalarni rejalashtirish va nazorat qilish tizimi — ustunlar bo'yicha (Kanban) boshqaruv.",
    stack: ['React', 'Express', 'MySQL'],
    status: 'production',
    metric: 'Vazifa boshqaruv tizimi',
    repoUrl: profile.github,
  },
  {
    id: 'telegram-bot',
    name: 'SkillBot',
    description:
      "Telegram orqali o'quv materiallari va testlarni yetkazib beruvchi bot — foydalanuvchi progressini kuzatadi.",
    stack: ['Node.js', 'Telegram Bot API', 'MongoDB'],
    status: 'production',
    metric: 'Telegram bot',
    repoUrl: profile.github,
  },
  {
    id: 'weathernow',
    name: 'WeatherNow',
    description:
      "Ochiq API'lar asosida joriy ob-havo va 5 kunlik prognozni ko'rsatuvchi minimalist veb-ilova.",
    stack: ['React', 'TypeScript', 'REST API'],
    status: 'production',
    metric: 'Ob-havo ilovasi',
    repoUrl: profile.github,
  },
];

export interface ExperienceEntry {
  hash: string;
  company: string;
  role: string;
  period: string;
  message: string;
  details: string[];
}

export const experience: ExperienceEntry[] = [
  {
    hash: 'f1a9c02',
    company: "Najot Ta'lim IT Learning Center",
    role: 'Foundation & Full-Stack (Node.js) Bootcamp',
    period: '2024-yil oktabr — 2025-yil oktabr · Xorazm, O\'zbekiston',
    message: "feat: Foundation darajasidan Full-Stack Bootcamp'gacha o'sish",
    details: [
      "Foundation bosqichida dasturlash asoslari va algoritmlarni chuqur o'rgandim",
      "Full-Stack (Node.js) Bootcamp davomida veb-ilovalar qurishda amaliy tajriba oldim",
      "React, Node.js, Express va PostgreSQL asosida bir nechta loyihalar ustida ishladim",
    ],
  },
];
