# Portfolio Website

Personal portfolio website for Sachin Jain, built with React, Vite, and Tailwind CSS, hosted on GitHub Pages.

## Sections

- **Hero** — Introduction and social links
- **About** — Professional bio
- **Skills** — Technical skills categorized (Languages, Frameworks, Tools, Databases, Soft Skills)
- **Projects** — Project cards from GitHub and personal explorations
- **Experience** — Work history timeline
- **Education** — Academic background
- **Contact** — Email, phone, LinkedIn, GitHub, and message form

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- lucide-react (icons)
- GitHub Actions + GitHub Pages (deployment)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site and deploys to GitHub Pages.

Site URL: `https://Sachin-Jain-98.github.io/portfolio/`

## Content Notes

Skills, experience, and education are drafted from the resume at `C:\Users\ASUS\Downloads\Sachin_Jain_Resume.pdf`. Project data in `src/data/projects.json` is a starter set — update with your actual GitHub repositories.
