# Murphy Tech Studio — Owner Action Items

Ordered by impact. Work through these before going live.

---

## 1. Quote tool screenshot
**What:** Drop a screenshot of the quote management tool at:
```
public/work/quote-tool.png
```
The project card in the Work section will pick it up automatically.
**Why first:** The Work section currently shows a broken image. This is the most visible gap.

---

## 2. Name the client (True Grit Concrete Group)?
**What:** Decide whether to name the client publicly on the Work section.
- **Named:** "Built for True Grit Concrete Group (Perth, WA)" — stronger trust signal, links to a real business
- **Anonymous:** "Perth concrete contractor" — keeps it safe if you haven't asked them
**Required:** If yes → confirm with Jossa/the client first, then tell me and I'll update the copy + add their site link.

---

## 3. Real testimonial from True Grit
**What:** Get a quote from your client — even a casual one (WhatsApp message, email, text) that you can clean up slightly.
**Why:** The current testimonial card is anonymized placeholder copy. One real sentence from a real person beats any polished fake.
**Tip:** Ask Jossa something like: "Hey, I'm building my studio site — would you mind if I used a short quote about what we built together?"

---

## 4. Your location
**What:** Tell me your city/country so I can add "Based in [city], working globally" to the footer or contact section.
**Why:** International clients hiring remote freelancers want to know you're a real person in a real place. It builds trust.

---

## 5. Deploy the site
**What:** Push to Vercel (or your preferred host) and connect your domain.
- If you don't have a domain yet — decide on one (e.g. `murphytechstudio.com` or `mts.dev`)
- Vercel free tier handles this stack perfectly
**Steps when ready:**
1. `git init && git add . && git commit -m "initial"`
2. Push to GitHub
3. Import repo on vercel.com → it auto-detects Next.js
4. Add custom domain in Vercel dashboard

---

## Done ✓
- [x] Cal.eu embed wired up (`gauransh5/30min`)
- [x] Contact form wired to Formspree (`mwvadkga`)
- [x] Intro section redesigned (two-column, sharper copy)
- [x] "Book a discovery call" CTA button restyled
- [x] Favicon added (`app/icon.png` + `app/icon.svg`)
- [x] True Grit Concrete Group named publicly with live site link
- [x] Testimonial updated with Gauransh's name
- [x] Work section copy describes True Grit's job type accurately
- [x] Process section (4-step how we work)
- [x] Testimonial + guarantees cards
- [x] Footer/metadata typo fixed ("Murhy" → "Murphy")
- [x] Nav trimmed to 4 items
