# 💡 VPDS Component Suggestion Tool (Frontend)

This is the frontend of the **Visa Product Design System (VPDS) Suggestion Tool**, a web app that allows users to input a query (e.g., "login form with email input") and receive a generated JSX code snippet using components from Visa's design system. 
(Soon will add class diagram)

Communicates with the backend at: https://github.com/udvale/vpds-rec-backend

---

## Features
- Input UI for freeform component descriptions
- Fetches generated component suggestions from the backend (AI or rule-based)
- 📋 Displays both:
  - The list of components used
  - The TSX snippet for copy-paste usage

---

## Assumptions
- The prototype uses 33 Nova React components (hand‑picked, each with 1‑3 showcase variants). 
- For every query we run a lightweight semantic scorer (retriever.py). It token‑matches the query against each component’s name, description, and tags, adds small bonuses for UI‑pattern cues (“login”, “form”, etc.), then returns the top‑3 ranked components (k = 3).
- Try GPT‑4o‑mini for smart merge, fall back to regex; if code passes a quick sanity check, save to cache for next time.

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

---

## AI Usage
Used Curser.ai and Claude.ai for debugging and logic handling for the back-end. 

---

