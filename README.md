# Sharan R – Developer Portfolio

React + Vite + Tailwind CSS portfolio.

## Run locally
```bash
npm install
npm run dev        # opens http://localhost:5173
```

## Edit content
All text, links, projects and certificates live in **`src/data/profile.js`**.
- Add a project's GitHub link: set `repo: "https://github.com/sharanraikoti/<repo-name>"` – a **GitHub** button appears automatically.
- Add a live demo: set `demo: "https://..."` – a **Live Demo** button appears.
- Add a certificate link: set `url` on that certificate – a **Verify credential** link appears.
- Replace the resume: put the new PDF at `public/Sharan_R_Resume.pdf` (same name).

## Deploy (free)
**Vercel / Netlify:** push this folder to a GitHub repo → import the repo → build command `npm run build`, output folder `dist`.

**Render (Static Site):** New → Static Site → connect the repo → Build Command `npm install && npm run build`, Publish Directory `dist`.

## Contact form
There is no backend: the form checks the fields and opens the visitor's email app with the message filled in. Nothing is sent by the website itself.
