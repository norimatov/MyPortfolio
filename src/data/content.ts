/**
 * Barcha sayt matni va ma'lumotlari shu yerda.
 * O'zingizning ma'lumotlaringiz bilan almashtiring — boshqa hech qayerda
 * qattiq kodlangan matn yo'q.
 */

export const profile = {
  name: 'Murodbek Norimatov',
  role: 'Full-stack dasturchi',
  focus: 'Real-vaqt tizimlar va boshqaruv panellari',
  tagline:
    "Ma'lumotni jonli va tushunarli qilib ko'rsatadigan tizimlar quraman — backend'dan WebSocket orqali brauzergacha.",
  location: "Toshkent, O'zbekiston",
  availability: 'Yangi loyihalar uchun ochiq',
  email: 'norimatovmurodbek9@gmail.com',
};

export const principles: { title: string; body: string }[] = [
  {
    title: 'Aniqlik birinchi',
    body: "Har bir interfeys elementi bir vazifani bajaradi. Ortiqcha bezakdan ko'ra aniq holat va aniq javob.",
  },
  {
    title: 'Real vaqt — standart',
    body: "Foydalanuvchi sahifani yangilamasdan ham eng so'nggi holatni ko'rishi kerak, deb hisoblayman.",
  },
  {
    title: 'Ishlab chiqarishga tayyor',
    body: 'Prototip va production orasidagi farq — xatolarni boshqarish, chekka holatlar va monitoring.',
  },
];

export interface SkillGroup {
  label: string;
  level: number; // 0-100
  detail: string;
}

export const skills: SkillGroup[] = [
  { label: 'Frontend (React / TS)', level: 92, detail: 'React, TypeScript, Vite' },
  { label: 'Backend (Node / NestJS)', level: 88, detail: 'NestJS, Express, REST/GraphQL' },
  { label: 'Real-vaqt (WebSocket)', level: 85, detail: 'Socket.io, pub/sub arxitektura' },
  { label: "Ma'lumotlar bazasi", level: 80, detail: 'PostgreSQL, TypeORM, Redis' },
  { label: 'DevOps', level: 68, detail: 'Docker, CI/CD, monitoring' },
];

export interface Project {
  code: string;
  title: string;
  year: string;
  role: string;
  stack: string[];
  description: string;
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    code: 'FIG.01',
    title: 'Pulse — Live Ops Dashboard',
    year: '2026',
    role: 'Full-stack ishlab chiqaruvchi',
    stack: ['NestJS', 'PostgreSQL', 'WebSocket', 'React'],
    description:
      "Buyurtmalar va daromadni real vaqtda kuzatuvchi boshqaruv paneli. WebSocket orqali yangi buyurtmalar sahifani yangilamasdan ko'rinadi.",
    link: '#',
  },
  {
    code: 'FIG.02',
    title: 'Ledger — Moliyaviy hisobot tizimi',
    year: '2025',
    role: 'Backend arxitektor',
    stack: ['NestJS', 'PostgreSQL', 'Redis'],
    description:
      "Ko'p valyutali tranzaksiyalarni qayta ishlaydigan va oylik hisobotlarni avtomatik shakllantiradigan tizim.",
    link: '#',
  },
  {
    code: 'FIG.03',
    title: 'Relay — Jamoa xabar almashish',
    year: '2025',
    role: 'Frontend yetakchisi',
    stack: ['React', 'TypeScript', 'Socket.io'],
    description:
      "Kichik jamoalar uchun soddalashtirilgan, tez ishlaydigan real-vaqt chat ilovasi, o'qilgan/yozilmoqda holatlari bilan.",
    link: '#',
  },
  {
    code: 'FIG.04',
    title: 'Atlas — Ichki API shlyuzi',
    year: '2024',
    role: 'Backend muhandisi',
    stack: ['Node.js', 'GraphQL', 'Docker'],
    description:
      "Kompaniya ichidagi 12 ta mikroservisni yagona GraphQL nuqtasiga birlashtiruvchi shlyuz, avtomatik hujjatlash bilan.",
    link: '#',
  },
];

export const socials: { label: string; value: string; href: string }[] = [
  { label: 'GITHUB', value: 'github.com/norimatov', href: 'https://github.com' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/murodbeknorimatov', href: 'https://linkedin.com' },
  { label: 'TELEGRAM', value: '@norimatov', href: 'https://t.me' },
];
