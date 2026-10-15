# Abdullrazak Mohammed Mojahed — Personal Portfolio

A production-ready personal portfolio website for **Abdullrazak Mohammed Mojahed**, Full-Stack Developer specializing in Laravel, NestJS, and React. Built using Next.js (App Router), TypeScript, and Tailwind CSS. Deploy-ready for Vercel.

---

## 🌟 Key Features

- **Multi-page Architecture (Next.js App Router):**
  - `/` (Home): Personal introduction, one-line pitch, verified highlights (20,000+ users on Crunchy Fruits, 1,500+ orders, 7+ production apps at Sunrise IT), 3 featured projects, and quick CTAs.
  - `/about`: Detailed biography, categorized technical skills (Back-end, Front-end, Engineering Practices, Languages/Mobile), education at Damascus University (expected 2027), and spoken languages.
  - `/experience`: Vertical chronological timeline of all 10 roles (Alpha Clinic AI, Sunrise IT Center, Zain-Aldar, Crunchy Fruits, Namir Agency, Noqati, Darak Real Estate, Talklink, Bearshop, Food Blogger).
  - `/projects`: Interactive showcase with live category filtering, search, and links to live platforms.
  - `/projects/[slug]`: Dedicated architectural case studies with static generation (`generateStaticParams`), detailed breakdowns, and technology badges.
  - `/contact`: Direct contact details (Email, Phone, Location in Damascus, LinkedIn) and an interactive contact form with mailto fallback.
- **Typed Content Structure:** All data is strictly separated into typed data files in `src/data/*.ts` (`personal.ts`, `skills.ts`, `experience.ts`, `projects.ts`, `navigation.ts`).
- **Dark & Light Mode:** System-aware theme toggle (Light / Dark / System) utilizing `next-themes` and a tailored dark navy (`#1E2B3C`) and teal (`#157F85`) palette.
- **Typography & Aesthetics:** Strong modern typography with `Sora` for headings and `Manrope` for body via `next/font/google`. Generous whitespace, subtle glassmorphic elements, and accessible contrast.
- **SEO & Social Cards:** Comprehensive per-page metadata, OpenGraph tags, dynamic XML sitemap (`/sitemap.xml`), and search engine crawling rules (`/robots.txt`).
- **Accessibility & Motion:** Visible focus rings (`focus-visible:ring-2 focus-visible:ring-teal-500`), skip-to-content link, semantic HTML, and respect for `prefers-reduced-motion`.
- **Photo Placeholder & Fallback:** Uses `next/image` at `/public/photo.jpg` with an automatic fallback to the "AM" initials badge if the image is missing or fails to load.
- **i18n-Ready:** Content and layout structures designed for future RTL Arabic localization.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Fonts:** [Sora](https://fonts.google.com/specimen/Sora) & [Manrope](https://fonts.google.com/specimen/Manrope) via `next/font`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)

---

## 📁 Project Directory Structure

```text
├── public/
│   ├── photo.jpg          # Profile portrait with fallback to AM initials
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── about/         # /about page
│   │   ├── contact/       # /contact page & ContactForm component
│   │   ├── experience/    # /experience vertical timeline page
│   │   ├── projects/      # /projects grid page & /projects/[slug] detail pages
│   │   ├── globals.css    # Tailwind theme, CSS variables, reduced motion
│   │   ├── layout.tsx     # RootLayout, fonts, metadata, ThemeProvider
│   │   ├── page.tsx       # Home page
│   │   ├── robots.ts      # Generates robots.txt
│   │   ├── sitemap.ts     # Generates sitemap.xml
│   │   └── not-found.tsx  # Custom 404 page
│   ├── components/
│   │   ├── footer.tsx     # Global site footer
│   │   ├── navbar.tsx     # Global responsive navbar with mobile drawer
│   │   ├── profile-photo.tsx # next/image avatar with AM initials fallback
│   │   ├── project-card.tsx  # Project showcase card
│   │   ├── section-heading.tsx # Section titles and eyebrow badges
│   │   ├── theme-provider.tsx # ThemeProvider wrapper
│   │   └── theme-toggle.tsx   # Theme switch button (Light/Dark/System)
│   └── data/
│       ├── experience.ts  # Typed timeline items (10 roles)
│       ├── navigation.ts  # Nav links & site configuration
│       ├── personal.ts    # Bio, education, languages, contact info
│       ├── projects.ts    # Projects database (10 projects)
│       └── skills.ts      # Categorized skills (Backend, Frontend, etc.)
```

---

## 🚀 Running Locally

### 1. Prerequisites
Ensure you have **Node.js 18.17+** (Node 20 or 22 recommended) and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run start
```

---

## 🚢 Deploying to Vercel

This portfolio is 100% pre-configured for zero-config deployment on **Vercel**:

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/aboodm.com.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Select your `aboodm.com` repository.
5. Vercel automatically detects Next.js:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
6. Click **Deploy**. Your portfolio will be live in under a minute with continuous deployment on every `git push`.

### Option B: Via Vercel CLI
```bash
npx vercel
```
Follow the prompt instructions to link and deploy the project.

---

## 📝 Customization

- **Updating Bio, Education, or Contact Details:** Edit [`src/data/personal.ts`](file:///e:/My%20Projects/aboodm.com/src/data/personal.ts).
- **Adding or Editing Projects:** Edit [`src/data/projects.ts`](file:///e:/My%20Projects/aboodm.com/src/data/projects.ts).
- **Updating Skills:** Edit [`src/data/skills.ts`](file:///e:/My%20Projects/aboodm.com/src/data/skills.ts).
- **Updating Career Timeline:** Edit [`src/data/experience.ts`](file:///e:/My%20Projects/aboodm.com/src/data/experience.ts).
- **Profile Photo:** Replace `/public/photo.jpg` with any image. If removed, the application automatically displays the initials **AM** badge.

---

## 📄 License
MIT © Abdullrazak Mohammed Mojahed
