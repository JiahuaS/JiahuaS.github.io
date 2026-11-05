# Jiahua Song — Academic Website Starter

A dependency-free multi-page academic website, ready to publish on GitHub Pages. Includes Home, Research, Notes, Teaching, and CV; mobile layout; and a light/dark theme toggle.

## 1. Preview locally

Double-click `index.html` to open it in your browser. The five pages link to one another. No build tool is needed.

## 2. Replace your profile photo

Copy your original `self.jpeg` into `assets/self.jpeg`. Until then, the initials `JS` appear automatically. Use the exact lowercase filename on GitHub.

## 3. Copy your PDF notes

Put these files inside the `papers/` folder, if you want their links to work:
- `M381C.pdf`
- `M383C.pdf`
- `M383D.pdf`
- `M387C.pdf`

The PDFs are not bundled. The Notes page already links to these locations. Remove a link if you do not want to publish that PDF.

## 4. Publish to GitHub Pages

If you already have a GitHub Pages repository, **back up your existing files first**. Then upload all of the website files and folders into the repository root, replacing `index.md` if that was your existing homepage. Do not delete custom-domain settings or a CNAME file if you use them.

If you do not have a repository, create one named exactly `<your-username>.github.io` (replace `<your-username>` with your GitHub username). Upload this folder's **contents**, not the outer folder.

At GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save**.

After deployment, visit `https://<your-username>.github.io/`. GitHub Pages generally needs a short time to publish after a new push.

## 5. Update content

- `index.html` — homepage and research overview
- `research.html` — detailed projects
- `notes.html` — notes and PDF links
- `teaching.html` — teaching and mentoring
- `cv.html` — education and CV
- `assets/style.css` — site colors and layout
- `assets/site.js` — theme toggle and portrait fallback

All navigation links are relative, so the site can work as a user site or under a project path.

## Important notes

- This is static HTML/CSS/JavaScript, **not Hugo**, so it is especially easy to publish. It can be migrated to Hugo later if you want to write many Markdown blog posts.
- The example site intentionally does not contain any original portrait image, course PDFs, or a CV file.
- Before publishing, review the research descriptions and any details you would not want publicly searchable.
