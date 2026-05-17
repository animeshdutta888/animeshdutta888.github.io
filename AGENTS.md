# AGENTS.md — Portfolio Website Builder

## Goal
Build a polished personal portfolio website for Animesh Dutta, hosted on GitHub Pages, using my LinkedIn and resume as source material.

The portfolio should position me for:
- AI Engineer roles
- Forward Deployed Engineer roles
- Backend / Platform Engineering roles
- Agentic AI / LLM infrastructure opportunities

## Inputs I will provide
- Resume
- LinkedIn profile text or URL
- GitHub profile / project links
- Optional profile image

## Tech Stack
Use:
- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion for subtle animations
- GitHub Pages deployment

GitHub Pages supports static site hosting and custom domains. For Vite on GitHub Pages, ensure the `base` path is configured correctly for the repository name. :contentReference[oaicite:0]{index=0}

## Site Structure

Create a single-page portfolio with these sections:

1. Hero
   - Name: Animesh Dutta
   - Title: AI Engineer / Forward Deployed Engineer
   - Short positioning line:
     “I build production-grade AI systems, agentic workflows, and scalable backend platforms.”
   - CTA buttons:
     - View Projects
     - Download Resume
     - GitHub
     - LinkedIn

2. About
   - Concise professional summary from resume + LinkedIn
   - Focus on AI systems, backend engineering, deployment, product thinking, and customer-facing engineering

3. Experience
   - Timeline layout
   - Highlight Qualcomm experience strongly
   - Convert bullets into outcome-driven impact statements
   - Emphasize:
     - Edge AI
     - SNPE
     - ML QA framework
     - model conversion / quantization
     - Python tooling
     - production validation
     - debugging and optimization

4. Projects
   Feature these prominently:
   - Chronicle / Codebase Memory Map
   - Nudge
   - Agentic AI orchestration projects
   - Databricks / dashboard / MCP related work if present

   Each project card should include:
   - Problem
   - Solution
   - Tech stack
   - Impact
   - GitHub/demo link

5. Skills
   Group into:
   - AI / ML Systems
   - Agentic AI / LLMs
   - Backend
   - Cloud / DevOps
   - Data / Databricks
   - Tools

6. Resume
   - Download button
   - Optional embedded preview if PDF exists

7. Contact
   - Email
   - LinkedIn
   - GitHub
   - Simple contact CTA

## Design Direction
Make it look like a premium engineer portfolio, not a generic resume page.

Style:
- Dark modern theme
- Clean typography
- Subtle gradients
- Card-based sections
- Good spacing
- Mobile responsive
- Smooth scroll
- No clutter
- No excessive animations

The visual tone should feel:
- technical
- trustworthy
- startup/product oriented
- suitable for OpenAI, Databricks, AI infra startups, FDE roles

## Content Rules
- Do not copy resume bullets blindly.
- Rewrite content into strong portfolio language.
- Prefer measurable impact wherever available.
- Do not exaggerate beyond the provided resume/LinkedIn.
- If data is missing, add TODO comments instead of inventing.
- Keep text sharp and recruiter-friendly.

## Implementation Requirements
- Create a clean component structure:
  - `Hero.tsx`
  - `About.tsx`
  - `Experience.tsx`
  - `Projects.tsx`
  - `Skills.tsx`
  - `Contact.tsx`
  - `Navbar.tsx`
  - `Footer.tsx`
- Store portfolio data in a separate file:
  - `src/data/profile.ts`
- Use reusable components:
  - `Section`
  - `ProjectCard`
  - `ExperienceCard`
  - `SkillBadge`

## Deployment Requirements
Add GitHub Pages deployment.

Include:
- Correct `vite.config.ts` base path
- GitHub Actions workflow at:
  `.github/workflows/deploy.yml`
- Build command:
  `npm run build`
- Deploy from `dist`

If repo name is not known, add a clear TODO:
`base: "/REPO_NAME/"`

## Quality Bar
Before finishing:
- Run build
- Fix TypeScript errors
- Check mobile responsiveness
- Ensure all links are configurable
- Ensure resume download path works
- Ensure there is no placeholder text visible except intentional TODOs

## Final Output
Provide:
- Complete working code
- Setup instructions
- Deployment instructions
- Notes on what content still needs to be added from LinkedIn/resume