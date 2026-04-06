# NovaMark Agency - Digital Marketing Website

A modern, fully responsive multi-page digital marketing agency website
built with Next.js 14, TailwindCSS v4, and TypeScript.

## 🚀 Live Demo
[View Live Site](https://marketing-agency-eosin.vercel.app/)

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **UI Components:** Shadcn/UI
- **Email:** Nodemailer
- **Deployment:** Vercel

## ✨ Features
- Multi-page layout with active navigation
- Fully responsive (mobile, tablet, desktop)
- Home page with Hero, Stats, Services, Why Us, Testimonials
- Full Services page with pricing
- About page with team and values
- Contact page with working enquiry form
- SEO optimised metadata per page
- Fast loading and clean code

## 📁 Project Structure
\`\`\`
marketing-agency/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── home/
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── Services.tsx
│       ├── WhyUs.tsx
│       └── Testimonials.tsx
└── public/
\`\`\`

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/walidaitbaha/marketing-agency.git

# Move into the folder
cd marketing-agency

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📸 Pages
- **Home** — Hero, Stats, Services preview, Why Us, Testimonials
- **Services** — Full services list with pricing
- **About** — Story, values, team members
- **Contact** — Enquiry form with email integration

## 📄 License
MIT License — free to use for personal and commercial projects.
