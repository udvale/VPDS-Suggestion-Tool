# 💡 VPDS Component Suggestion Tool (Frontend)

This web app helps users generate TSX code snippets using **Visa Product Design System (VPDS)** components based on a natural language query. It sends the query to backend API and shows:
- A list of VPDS components used
- A ready-to-copy TSX code snippet

Backend repo: https://github.com/udvale/vpds-rec-backend

---

## My Approach
1. Frontend UI
I used Next.js with App Router and TypeScript to build a modern, typed React app. Tailwind CSS made styling fast and clean, and @visa/nova-react is used for actual VPDS components.

2. Component Logic
After the UI was done, I focused on how to suggest components and generate code. 
- Started by collecting ~30 commonly used VPDS components and writing 1–3 example code snippets for each.
- Used Claude.ai to convert this into a clean JSON file with metadata and tags.
- Tried different approaches for matching a user query to relevant components:
     - First, used simple keyword scoring based on the query and each component’s description/tags.
     - Then tested Hugging Face's pipeline to classify the query, but it wasn’t flexible enough.
     - Finally added OpenAI’s GPT‑4o‑mini to generate code by combining top-ranked components in a natural way.

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

## Assumptions & Shortcuts
- Used AI (Claude, GPT-4o) to speed up metadata generation for components.json.
- Ranking is based on token overlap + simple UI keyword bonuses ("form", "login", etc.).
- Code generation is handled by OpenAI or rule-based assembly, whichever passes a quick validation.

---

## What I'd Improve with More Time
- Expand support to all VPDS components with better metadata coverage.
- Add smarter validation to ensure generated code compiles and looks right.
- Let users pick between multiple layout options (e.g. stacked vs inline forms).
- Tune AI generation to better follow VPDS usage patterns and prop rules.

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

