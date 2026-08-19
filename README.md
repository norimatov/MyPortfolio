# Norimatov Murodbek — Portfolio ("Terminal" dizayn)

React + TypeScript (Vite) asosida qurilgan Full-Stack Developer portfolio sayti.

## Ishga tushirish

```bash
npm install
npm run dev
```

`http://localhost:5173` da ochiladi.

## Production build

```bash
npm run build
npm run preview
```

## Kontentni tahrirlash

Barcha ma'lumotlar **`src/data/portfolio.ts`** faylida:
- `profile` — ism, kasb, telefon, Telegram, GitHub
- `aboutParagraphs` — "Men haqimda" matni
- `skillGroups` — ko'nikmalar
- `projects` — loyihalar (Portfolio, Marketplace, Music Player)
- `experience` — ta'lim (Najot Ta'lim bootcamp)

## Eslatma

- LinkedIn havolasi berilmagani uchun ijtimoiy tarmoqlar qatoridan olib tashlandi — qo'shmoqchi bo'lsangiz, `profile.linkedin` maydonini to'ldiring va `Contact.tsx`dagi `socials` ro'yxatiga qaytaring.
- `profile.resumeUrl` hozircha `#` (bo'sh) — PDF rezyume faylingizni yuklab, shu maydonga havolasini kiriting.
- Loyiha havolalari (marketplace, music-player) CV'dagi manzillar asosida kiritildi — noto'g'ri bo'lsa `projects` massivida tuzating.
