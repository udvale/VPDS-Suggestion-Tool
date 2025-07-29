# 💡 VPDS Component Suggestion Tool (Frontend)

This is the frontend of the **Visa Product Design System (VPDS) Suggestion Tool**, a web app that allows users to input a query (e.g., "login form with email input") and receive a generated JSX code snippet using components from Visa's design system.

The frontend is built with **Next.js (App Router)**, **TypeScript**, and styled using **Tailwind CSS** along with **Nova React Components** from Visa. Communicates with the backend at: https://github.com/udvale/vpds-rec-backend

---

## Features
- ⚡️ Input UI for freeform component descriptions
- 🧠 Fetches generated component suggestions from the backend (AI or rule-based)
- 📦 Uses actual VPDS components for preview (Nova UI)
- 📋 Displays both:
  - The list of components used
  - The JSX snippet for copy-paste usage
- 🧪 Handles errors and loading gracefully

---

## Tech Stack

| Tech                | Reason                                                                 |
|---------------------|------------------------------------------------------------------------|
| **Next.js (App Router)** | Full-stack React framework with routing and SSR capabilities        |
| **TypeScript**       | Type safety across the app for better development experience          |
| **Tailwind CSS**     | Rapid and utility-first styling for clean responsive design            |
| **@visa/nova-react** | Official VPDS component library from Visa for real-world component usage |
| **Vercel**           | Hosting platform for frontend deployment                              |

---

## 📁 Project Structure
```├── app/ # Next.js pages and routing (App Router)
│ └── page.tsx # Main UI page with query input and display
├── components/ # Custom reusable components
│ ├── HeroSection.tsx # Header/hero banner
│ ├── ComponentList.tsx # Displays components used
│ └── CodeBlock.tsx # Shows syntax-highlighted JSX snippet
├── public/ # Static assets (if any)
├── styles/ # Global styling (if extended)
└── tailwind.config.js # Tailwind setup
```

---

## ⚙️ Run Locally
1. **Clone the project**
```bash
git clone https://github.com/yourusername/vpds-rec-frontend.git
cd vpds-rec-frontend
```
2. **Install dependencies**
```bash
npm install
```
3. **Run the development server**
```bash
npm run dev
```
4. **Visit the app**
```bash
http://localhost:3000
```


