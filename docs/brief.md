# DUU Speakers & Stage: Website Brief

## About the committee
Speakers and Stage (S&S) is the large-event programming committee of the Duke University Union (DUU) at Duke University.

Mission (use this text exactly):
"The Speakers and Stage committee strives to contribute to the DUU overall mission through large event programming. Our programming consists of contracting a wide range of speakers that is representative of the student body's interests and current events. We are working to organize types of events (keynotes, panelists, small speakers) according to the needs of the campus. The most important goal of the committee is selecting and organizing events reflective of the collective student voice at Duke."

Core idea: students help decide who comes to campus.

## Website goals
1. Show students what's coming up.
2. Show past speakers so the programming feels credible.
3. Make it easy to suggest a speaker or topic and to join the committee.

## Audience
Duke undergraduates. Most will visit on mobile, so design mobile first.

## Navigation
- Header: S&S wordmark, links to Home, Events, Past Speakers, About Us, and Get Involved. Persistent "Suggest a Speaker" button. Hamburger menu below 768px.
- Footer: links to Instagram and Facebook.
- Add a 404 page.

## Pages

### Home (/)
- Hero: large photo placeholder (crowd or stage shot), "Speakers & Stage" wordmark, short tagline, and two buttons: "Explore Events" (to /events) and "Get Involved" (to /get-involved).
- Upcoming events: three event cards. If no events are scheduled, show "Stay tuned for our next event" with links to Instagram and Facebook.
- What We Do: four tiles (Comedy, Social Issues, Sports, Inspiring Conversations). Each tile links to /events filtered by that theme.
- Closing band: "Join the Committee" and "Suggest Our Next Speaker."

### Events (/events)
- Toggle between Upcoming and Past.
- Theme filter chips: Comedy, Social Issues, Sports, Inspiring Conversations.
- Event card fields: title; guest speaker with a one-line intro; date and time; location; description; cover image; Register button (opens in a new tab; placeholder URL until confirmed); additional info line (for example, "Free" or "Duke ID required").
- Clicking a card opens a detail view with the full description.

### Past Speakers (/past-speakers)
- Archive grid, filterable by theme and year.
- Speaker feature view: photo, intro, event name and date, highlight moment, and a "Behind the Scenes" note from a committee member.

### About Us (/about)
- Mission block (text above).
- What We Do: four pillars with icon placeholders: Speakers, Event Planning, Promotion, Hosting.
- Meet the Team: member cards with photo, name, role, and optional fun fact.
- Committee Culture: photo strip with short text.

### Get Involved (/get-involved)
- Four action cards: Join the Committee, Suggest a Speaker or Topic (anchor id: suggest), Collaborate With Us (for student orgs, departments, and partners), and Contact (for questions).
- Suggest a Speaker or Topic form: speaker or topic idea (required); why it matters to students (required); theme (optional); name and email (optional).
- Join the Committee form: name (required); Duke email (required); interest or preferred role (optional).

## Visual direction
- Editorial and energetic, closer to a live-event poster than a corporate dashboard.
- Large photography, dark gradient overlays behind text on images, bold section transitions, generous spacing, card-based layouts.
- Dominant colors: DUU Teal #259A96, DUU Navy #11274B, Off White #F1F0F0.
- Accent colors: Large Events Purple #692F92, Recurring Events Salmon #F7A29A, Media Sky Cyan #B8E3ED, Operations Green #AFDAB6.
- Body text: Off Black #1C1A1D.
- Typography: bold, expressive display headings paired with a clean sans-serif for body text.
- Theme colors: Comedy = Salmon, Social Issues = Purple, Sports = Teal, Inspiring Conversations = Cyan.

## Content status
- Real content: mission text, social media links.
- Placeholder content: all speakers, events, dates, team members, photos, and quotes. Do not replace placeholders with invented content.

## Decisions and open items

Resolved:
- Logo: official S&S logo at `public/images/ss-logo.png`. Use it unchanged in the header, footer, and hero. Do not redraw or recolor it.
- Registration platform: DukeGroups (likely; the committee should confirm before launch). Registration URLs stay as placeholders until confirmed.
- Brand palette: use the DUU palette as the base. The S&S logo uses DUU Navy and a purple that fits the palette. Event theme colors (Comedy, Social Issues, Sports, Inspiring Conversations) are provisional until the committee confirms them.

Open:
- Photos: none are available yet. Photos from S&S social media accounts are not cleared for use on this site. Use labeled placeholders until S&S provides photos with permission to use them.
- Past Speakers in the main navigation: kept per the sketch. The committee should confirm.

## Out of scope
Login, ticketing, payments, chatbots, embedded social feeds, booking systems, and analytics unless a service is configured.