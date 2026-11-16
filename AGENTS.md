# AGENTS.md

## Project
DUU Speakers & Stage (S&S) website: a multi-page site for browsing upcoming and past speaker events, learning about the committee, and submitting speaker suggestions and interest forms. Maintained by the S&S committee of the Duke University Union. Read docs/brief.md for the full brief and page structure before starting any task.

## Stack
- Vite project. Check package.json before assuming framework details.
- docs/sketches/ contains the hand-drawn layout references. Treat them as the layout source of truth.

## Structure
- src/pages/: one file per route (Home, Events, PastSpeakers, About, GetInvolved, NotFound)
- src/components/: reusable UI (Header, Footer, EventCard, SpeakerCard, TeamCard, ThemeChip, forms)
- src/content/: all events, speakers, team members, and links as JSON. Edit content here, not in components.
- src/styles/tokens.css: brand colors and type scale. Use these variables everywhere. Never hardcode hex values.
- public/images/: images. Use labeled placeholders until real photos are supplied.
- docs/: brief and sketches. Do not edit unless the task says so.

## Commands
Verify these against package.json. If a script does not exist, say so in the PR description. Do not invent one.
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Test: `npm test`

Run build and lint (and test, if it exists) before declaring a task done.

## Content rules
- Registration URLs stay as placeholders until the committee confirms the platform. DukeGroups is the likely platform.
- Never invent speakers, dates, quotes, testimonials, photos, or registration URLs.
- Use placeholders such as [Speaker Name], [Date], [Venue], and [Event Title] when content is missing.
- Mission text must match docs/brief.md exactly.
- Social links: Instagram https://www.instagram.com/duu_ss/ and Facebook https://www.facebook.com/dukespeakersandstage/

## Design rules
- Colors come from src/styles/tokens.css only.
- Theme colors: Comedy = Salmon, Social Issues = Purple, Sports = Teal, Inspiring Conversations = Cyan.
- Text must meet WCAG AA contrast. Check every text-on-background pairing with a contrast checker before using it. Teal and Salmon backgrounds often fail with light text, and Cyan and Green usually need dark text.
- Mobile first. Hamburger menu below 768px. Every page must work at 375px wide.
- Style is editorial and energetic, like a live-event poster. Avoid corporate dashboard styling.
### Brand assets
- S&S logo: `public/images/ss-logo.png`. Use it unchanged. Do not redraw, recolor, or stretch it.
- Logo background is dark navy. Any text placed on it must be Off White (#F1F0F0).
## Prototype rules
- No login, ticketing, payments, chatbots, or embedded social feeds. Link out to social media instead.
- Forms must validate input and show a confirmation state.
- Forms must not send data unless a backend is configured in src/config/api.ts. That file does not exist yet. Without a backend, show: "Prototype only. This form has not been submitted."
- Never imply that a submission, registration, or RSVP actually happened.

## Scope discipline
- Keep changes within the scope of the task. Do not reformat, rename, or move files outside it.
- If a task needs a file outside its scope, stop and list it in the PR description as a question.
- Do not modify docs/brief.md or docs/sketches/ unless the task asks you to.

## Secrets
- Never commit .env files, API keys, or tokens.

## Git
- Branch names: `codex/<short-task-name>`. Never push to `main`.
- One task per branch.
- PR description must list: changed files, what was tested and how, and anything left unfinished.