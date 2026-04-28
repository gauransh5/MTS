# Demo Page — Feature Catalogue

This document is the source of truth for the demo/marketing website.
An AI agent should use it to build feature tiles, screenshots, and copy.

**Screenshot folder:** all `*.png` paths below are relative to this file's directory.  
**Docs folder:** all `docs/` paths are relative to the project root (`quote-management-system/`).

---

## Business Workflow

End-to-end lifecycle every quote follows. Useful for a "How it works" section on the demo page.

```
1. Lead arrives        →  Webhook from website form  OR  sales rep creates manually
2. Quote is built      →  Sales adds line items, tax, notes, sections
3. Quote finalised     →  System generates a unique, unguessable shareable link
4. Link sent to client →  Sales copies the default message + link, pastes into email
5. Client views quote  →  Branded public page — no login required
6. Client accepts      →  Types name as e-signature, clicks Accept
7. Deal closed         →  Admin + sales rep receive email notification; dashboard updates
```

---

## Quote Status Lifecycle

Every quote moves through these statuses in order. Useful for a status-flow diagram tile.

| Status | Who triggers it | What it means |
|--------|----------------|---------------|
| `REQUEST` | Webhook / manual creation | Inbound lead, no quote built yet |
| `DRAFT` | Sales rep | Quote is being built |
| `FINALISED` | Sales rep | Line items locked; unique link generated |
| `CHANGES_REQUESTED` | Customer (via public page) | Client flagged items to revise |
| `ACCEPTED` | Customer (via public page) | Client signed and accepted |
| `REJECTED` | Sales rep | Quote explicitly declined |
| `EXPIRED` | System / sales rep | Quote past its validity period |

---

## Feature Tiles

Each feature below maps to one demo tile. Fields:
- **tile_title** — short name shown on the tile
- **tile_subtitle** — one punchy sentence shown below the title
- **description** — full explanation for the AI to use as copy or tooltip
- **screenshot** — filename in this folder, or `null`
- **screenshot_caption** — what the screenshot shows (for alt text and captions)
- **docs_ref** — path to the relevant section in the project docs for context

---

### 1. Inbound Lead Capture

- **tile_title:** Inbound Lead Capture
- **tile_subtitle:** Every enquiry lands in one place — from your website or entered manually.
- **description:** Quote requests arrive automatically via a secure webhook that accepts POST payloads from any external form or CRM. Each submission creates a lead in the portal instantly. Sales reps can also create leads by hand in the Leads tab using a simple form — capturing name, email, phone, service, cities, lead source, and a notes field. Duplicate submissions are handled gracefully with optional idempotency keys. Webhook requests are verified using HMAC-SHA256 so only trusted sources are accepted.
- **screenshot:** `Create Lead.png`
- **screenshot_caption:** The "Create Lead Manually" form on the Leads tab. Shows fields for name, email, phone, lead source (dropdown), service, cities, and a notes/message field. The bottom of the page shows the empty state message explaining that leads also arrive automatically from the webhook.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Quote request ingestion"

---

### 2. Quote Builder

- **tile_title:** Powerful Quote Builder
- **tile_subtitle:** Build detailed, professional quotes with line items, taxes, and custom notes.
- **description:** The quote builder lets sales reps compose a quote from scratch or from a template. Each quote has a lead source, optional project address, and expected completion date. Line items support a description, quantity, and unit price. Billing type can be standard (quantity × price) or hourly (schedule of date/time ranges with automatic hour calculation). Tax rates for two configurable tax types (e.g. GST and PST) are entered as percentages. All subtotals, tax amounts, and totals are calculated server-side — immune to browser manipulation. A free-text Notes field adds context visible on the public quote page.
- **screenshot:** `Create Quote.png`
- **screenshot_caption:** A new draft quote (QT-2026-002) in DRAFT status. Shows the original request details at the top, followed by lead source and project address fields, the activity log (Quote created by Admin), and the line items table with a standard billing row, quantity, unit price, subtotal column, and tax totals (GST + PST) at the bottom. The "+ Add Item" and "Load Template…" buttons are visible.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Quote fields", `docs/DESIGN-hourly-service-and-pst.md`

---

### 3. Hourly & Schedule-Based Billing

- **tile_title:** Hourly & Schedule Billing
- **tile_subtitle:** Price by the hour with date/time schedules — the system calculates the rest.
- **description:** For services billed by time, sales reps switch a line item to "Hourly" billing type. This reveals a schedule builder where they add one row per shift: date, start time, and end time. The server computes total hours from the schedule and multiplies by the hourly rate to produce a subtotal. Multiple schedule rows per item are supported. Schedule data is shown on the public quote page as a breakdown so clients can see exactly what they are paying for.
- **screenshot:** `null`
- **screenshot_caption:** null — no screenshot captured yet. Use a generic illustration or placeholder. See `docs/DESIGN-hourly-service-and-pst.md` for the full data model and calculation logic.
- **docs_ref:** `docs/DESIGN-hourly-service-and-pst.md`, `docs/REQUIREMENTS.md` → "Quote finalisation and sharing"

---

### 4. Product & Service Catalog

- **tile_title:** Product Catalog
- **tile_subtitle:** Build a reusable catalog of your services — pick and pre-fill quotes in one click.
- **description:** Admins manage a catalog of products and services via the Products page. Each entry has a name, optional SKU, optional description, category, default price, and unit of measure (unit, hour, month, day). When a sales rep adds a line item to a quote, they see a product picker dropdown showing all active catalog items. Selecting one pre-fills the description, unit price, and billing type (hourly if unit is "hour"). All fields remain editable after selection. A "Custom item" option is always available for one-off entries. Products can be deactivated (soft-deleted) and reactivated without data loss.
- **screenshot:** `Products Page.png`
- **screenshot_caption:** The Products admin page showing an empty catalog with the table headers (Name, SKU, Category, Default Price, Unit, Actions) and the "Add Product" button. The empty state message reads "No products yet. Add your first product above."
- **docs_ref:** `docs/REQUIREMENTS.md` → "Product catalog", `docs/ARCHITECTURE.md` → "Product Catalog"

---

### 5. Quote Templates

- **tile_title:** Quote Templates
- **tile_subtitle:** Save your best quotes as templates and re-use them with one click.
- **description:** Admins build a library of named quote templates — each template is a preset collection of line items (description, quantity, unit price, billing type). When a sales rep opens a draft quote, a "Load Template" dropdown lists all available templates. Selecting one replaces the current line items (after a confirmation prompt if items already exist). All fields remain editable after loading. Any quote — draft or finalised — has a "Save as Template" button that lets reps turn it into a reusable template by giving it a name. Admins can edit and delete templates from the Templates page.
- **screenshot:** `Quote Templates.png`
- **screenshot_caption:** The Quote Templates admin page listing one template ("Basic Package", 2 items, last updated 05/04/2026) with Edit and Delete action buttons. The "New Template" button is visible in the top-right corner.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Quote templates", `docs/ARCHITECTURE.md` → "Quote Templates"

---

### 6. Rich-Text Custom Sections

- **tile_title:** Custom Quote Sections
- **tile_subtitle:** Add Terms & Conditions, inclusions, or any custom block — with rich formatting.
- **description:** Sales reps and admins can attach any number of named rich-text sections to a quote. Each section has a heading (e.g. "Terms & Conditions", "Inclusions", "Scope of Work") and a body with full rich-text formatting: bold, italic, bullet lists, and numbered lists (powered by Tiptap). Sections are shown on the public quote page below the notes block, rendered with clean typography. They are reordered via sort order and cascade-deleted with the quote.
- **screenshot:** `Edit Quote.png`
- **screenshot_caption:** The bottom of the quote detail page showing the Sections editor. A "Terms and Conditions" section is expanded with a heading and a bulleted rich-text body. The "+ Add Section" control is visible below. Above the sections area, the Notes field is also shown.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Quote fields" (rich-text sections), `docs/ARCHITECTURE.md` → Data Model (QuoteSection)

---

### 7. One-Click Quote Finalisation & Shareable Link

- **tile_title:** Unique Shareable Link
- **tile_subtitle:** Finalise a quote and get a secure, unguessable link to send to your client.
- **description:** When a quote is ready, the sales rep clicks "Finalise Quote". The system locks the line items and generates a cryptographically random 32-byte token — the public quote link. The portal displays the full link alongside a pre-written default message (using the company name). A single "Copy Message" button copies the entire message including the link to the clipboard. The sales rep pastes it into their email client and sends manually. The token is unguessable — no sequential IDs, no customer data in the URL.
- **screenshot:** `Edit Quote.png`
- **screenshot_caption:** The "Public Quote Link" section on the quote detail page (visible in the Changes Requested state). Shows the full unique URL, the "Copy Message" button, and a "Preview" link. A "Preview default message" expandable section is visible below.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Quote finalisation and sharing"

---

### 8. Branded Public Quote Page

- **tile_title:** Branded Client Quote Page
- **tile_subtitle:** Your client opens a beautiful, branded page — no login, no app download.
- **description:** When a customer opens the unique link, they land on a fully branded HTML page showing: the company logo and name in the header (with optional tagline, phone, and website for premium accounts), the quote number and date, expected completion date, a "Prepared for" block with the customer's details, a "Prepared by" block with the sales rep's name, title, and profile photo, a full line-item table with schedule breakdowns and tax totals, and the notes and custom sections. The page uses the company's configured brand colors throughout. No login is required — just the link.
- **screenshot:** `Quote link preview.png`
- **screenshot_caption:** The public customer-facing quote page opened in a browser (URL: murphyquote.com/q/…). Shows the company logo in the top-left, quote number QT-2026-002, date April 28 2026, expected completion May 1 2026, "Prepared for" block with customer name and contact details, "Prepared by" block with the sales rep (Admin), a line items table (Static Guard Shift, 1 × $35.00), subtotal, GST @ 5%, PST @ 2.5%, and a Total of $37.63. The "Download / Print this quote" link is below the totals. The "Accept This Quote" form with name, title, and checkbox is at the bottom.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Public quote page (by link)"

---

### 9. Electronic Signature & Accept Flow

- **tile_title:** Electronic Signature
- **tile_subtitle:** Clients sign and accept with their name — no DocuSign required.
- **description:** At the bottom of the public quote page, the customer fills in their full name and job title, checks "I accept this quote and agree to the terms. I understand that my typed name above serves as my electronic signature.", and clicks "Accept Quote". The system records the typed name as the e-signature, stores the customer's IP address and timestamp, updates the quote status to ACCEPTED, and fires notification emails to the admin and the assigned sales rep. The portal dashboard immediately reflects the new status.
- **screenshot:** `Quote link preview.png`
- **screenshot_caption:** The "Accept This Quote" form at the bottom of the public quote page. Shows "Your Name" and "Your Title" input fields, the acceptance checkbox with legal copy, and the "Accept Quote" button.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Public quote page (by link)" → Accept flow

---

### 10. Request Changes Flow

- **tile_title:** Request Changes
- **tile_subtitle:** Clients can flag revisions directly from their quote link — no email ping-pong.
- **description:** Below the Accept form on the public quote page, the customer can click "Request Changes" to flag that something needs revision. They enter a reason or note. This updates the quote status to CHANGES_REQUESTED and notifies the sales team. The portal shows the customer's feedback prominently on the quote detail page (highlighted in an amber/warning block) so the sales rep knows exactly what to fix before re-finalising and re-sharing the link.
- **screenshot:** `Edit Quote.png`
- **screenshot_caption:** The quote detail page (QT-2026-001) in CHANGES_REQUESTED status. The "Customer Feedback (2)" block at the top shows two customer notes: "Need to revisit" and "More discount" — each with a timestamp. The status badge in the header reads "Changes Requested" in amber.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Public quote page (by link)", `docs/ARCHITECTURE.md` → API Routes (`/api/quotes/[id]/request-changes`)

---

### 11. Email Notifications

- **tile_title:** Automatic Email Notifications
- **tile_subtitle:** Your team gets notified the moment a client accepts or requests changes.
- **description:** When a quote is accepted or when a client requests changes, the system automatically sends notification emails via Resend. The admin notification address and the assigned sales rep both receive the email. All email identities are configurable — sender display name, sender address, and admin notification address are set in the Settings page. The email body uses the configured company name. No coding required to change who receives notifications.
- **screenshot:** `null`
- **screenshot_caption:** null — no screenshot captured yet. Use a generic email illustration or the Settings screenshot showing the Email Notifications section. See `Customisation Settings.png` for the configurable email fields.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Public quote page (by link)" → On accept, `docs/ARCHITECTURE.md` → Tenant Configuration (email fields)

---

### 12. Download & Print to PDF

- **tile_title:** Print-Ready PDF
- **tile_subtitle:** Clients can save a clean, print-ready PDF — no extra software needed.
- **description:** The public quote page includes a "Download / Print this quote" link that triggers the browser's native print dialog. The page has dedicated `@media print` CSS that hides the Accept form, navigation, and interactive elements, and formats the quote content as a clean, professional printable document — logo, line items, totals, sections, and all. The result is a PDF-quality document that can be saved or forwarded, with no server-side PDF generation required.
- **screenshot:** `null`
- **screenshot_caption:** null — no screenshot captured yet. Use a generic PDF/print illustration or show the "Download / Print this quote" link from `Quote link preview.png`.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Public quote page (by link)" → Download/Print, `docs/ARCHITECTURE.md` → Tech Stack (PDF row)

---

### 13. Dashboard & Analytics

- **tile_title:** Sales Dashboard
- **tile_subtitle:** See your pipeline at a glance — estimate total, accepted total, conversion rate.
- **description:** The dashboard gives admins and sales reps a snapshot of the current month's performance. It shows the Estimate Total (sum of all finalised quotes this month), the Accepted Total (sum of all accepted quotes), the number of quotes finalised, the number accepted, and the conversion rate (accepted ÷ finalised). A Recent Activity table lists the latest quotes with customer name, sales rep, total, and current status. Clicking any quote in the list navigates directly to its detail page.
- **screenshot:** `Dashboard.png`
- **screenshot_caption:** The Dashboard page for April 2026. Shows two large KPI cards: "Estimate total — April 2026: $32.07" and "Accepted total — April 2026: $0.00". Below are three stat tiles: Quotes finalised this month (1), Quotes accepted this month (0), Conversion rate (0% — Accepted ÷ finalised). The Recent Activity table shows one row: QT-2026-001, customer Gauransh, sales rep Admin, total $32.07, status "Changes Requested".
- **docs_ref:** `docs/REQUIREMENTS.md` → "Dashboard"

---

### 14. Quote List with Search, Filters & Sort

- **tile_title:** Searchable Quote Pipeline
- **tile_subtitle:** Find any quote instantly — filter by status, search by name, sort any column.
- **description:** The Quotes page lists all leads and quotes in one place with two tabs: Leads (inbound requests not yet quoted) and Quotes (active quotes). Status filter chips let users narrow by Draft, Finalised, Changes Requested, Accepted, or Rejected. A full-text search bar filters by customer name, email, quote number, service, and cities in real time. Every column is sortable. Filters can be combined — e.g. show only Finalised quotes for a specific city created this month. The list shows customer contact details, assigned sales rep, total, status badge, and quote date.
- **screenshot:** `Quote View.png`
- **screenshot_caption:** The Quotes list page showing the All tab (1 item) with the search bar at the top, the Leads (0) and Quotes (1) sub-tabs, and the status filter chips (All, Draft, Finalised, Changes Requested, Accepted, Rejected). One quote card is visible: customer Gauransh, email and phone, status badge "Changes Requested", quote number QT-2026-001 as a link, sales rep Admin, total $32.07, and date Apr 5 2026.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Portal quote list"

---

### 15. Full Audit Trail

- **tile_title:** Audit Trail
- **tile_subtitle:** Every action on every quote is logged — know exactly what happened and when.
- **description:** Every significant event on a quote is recorded in an immutable audit log — who created the quote, who finalised it, when the customer viewed it, when they requested changes and what they wrote, when it was accepted and by whom. The activity log is displayed chronologically on the quote detail page under an "Activity" heading. Log entries include the action name, the actor (sales rep name or "by customer"), and a precise timestamp. This gives sales managers full visibility into the lifecycle of every deal.
- **screenshot:** `Edit Quote.png`
- **screenshot_caption:** The Activity section on the quote detail page (QT-2026-001). Shows a long chronological log including: Customer requested changes (by customer), Quote finalised (by Admin), Reverted to draft (by Admin) — repeated multiple times — and Quote created (by Admin) at the bottom. Each entry has an action label and a timestamp.
- **docs_ref:** `docs/ARCHITECTURE.md` → Data Model (AuditLog), `docs/REQUIREMENTS.md` → "Non-Functional Requirements" → Audit

---

### 16. White-Label Branding

- **tile_title:** White-Label Branding
- **tile_subtitle:** Your logo, your colors, your company name — everywhere, without touching code.
- **description:** The Settings page lets admins configure every visual identity element without a developer. Company name, logo URL (with live preview), logo size, and the option to show the company name alongside the logo are all configurable. A primary color picker styles the portal sidebar, action buttons, and the public quote page header. Tax labels (GST/PST, HST, VAT, Sales Tax) are fully configurable per region. Locale (language/region) and currency are set from validated international options — no hardcoded lists. All changes take effect immediately on the next page load.
- **screenshot:** `Customisation Settings.png`
- **screenshot_caption:** The Settings page showing the Company Identity section with Company Name field ("Murphy Quotes"), Logo URL input, a live logo preview (bee logo), logo size controls, "Also show company name alongside logo" checkbox, and a Primary Color picker. Below is the Tax & Locale section with Tax 1 Label (GST), Tax 2 Label (PST), Locale (en-US), and Currency (USD) dropdowns.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Tenant configuration", `docs/ARCHITECTURE.md` → "Tenant Configuration"

---

### 17. Premium Theme & Full Color Palette

- **tile_title:** Full Theme Control (Premium)
- **tile_subtitle:** Set every color — navbar, body, buttons, fonts — and extract a palette from your logo.
- **description:** Premium accounts unlock five independent color controls: Primary (portal sidebar + fallback header), Secondary/Accent (buttons, active nav highlights), Font Color on Brand Surfaces (auto-computed for WCAG contrast if left blank), Navbar/Header Background (the public quote page header bar, independent from body), and Body Background (the page behind the quote content). An "Extract Palette from Logo" button loads the logo into a canvas and uses color-thief to extract six dominant colors — the admin assigns extracted colors to any field with a swatch target dropdown. Premium also unlocks company tagline, phone number, website URL, and footer text on the public quote page. Non-premium accounts see the section greyed out with an "Upgrade to Premium" indicator.
- **screenshot:** `Customisation Settings.png`
- **screenshot_caption:** The Premium Branding section of the Settings page (shown as "Disabled"). Displays the Theme Colors subsection with "Extract Palette from Logo" button, Secondary/Accent Color picker, Font Color on Brand Surfaces picker, Navbar/Header Background picker, and Body Background picker. Below is the Company Info section with Tagline, Phone, Website, and Footer Text fields — all currently empty/placeholder.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Tenant configuration" (branding tiers), `docs/ARCHITECTURE.md` → "Theme colors (premium)"

---

### 18. Logo Color Extraction

- **tile_title:** Extract Colors from Your Logo
- **tile_subtitle:** One click to pull your brand palette straight from your logo image.
- **description:** On the Settings page (premium), the "Extract Palette from Logo" button loads the company logo image into an HTML canvas element and runs color-thief to extract the six most dominant colors. The dominant color is auto-assigned to Primary Color and the second to Secondary/Accent. The font color is auto-computed using the WCAG 2.1 relative luminance formula to ensure readable contrast. The admin can then fine-tune all extracted colors with individual pickers or use a swatch target dropdown to assign any extracted color to any theme field. A "Reset to defaults" option is available if the palette needs to be discarded.
- **screenshot:** `Customisation Settings.png`
- **screenshot_caption:** The "Extract Palette from Logo" button is visible at the top of the Theme Colors subsection within the Premium Branding section of the Settings page.
- **docs_ref:** `docs/ARCHITECTURE.md` → "Color extraction" and "readableFontColor"

---

### 19. User Management

- **tile_title:** Team & User Management
- **tile_subtitle:** Add your whole sales team in minutes — set roles, names, and titles.
- **description:** Admins can create, edit, and deactivate sales team members from the Users page. Each user has a name, job title, email, password, and role (Sales or Admin). Sales users appear as the "Prepared by" contact on the public quote pages they own. Admins can reset any user's password and toggle their active status (soft-delete — deactivated users cannot log in but their data is preserved). There is no limit on the number of users.
- **screenshot:** `Create User page.png`
- **screenshot_caption:** The Users admin page with the "Create New User" form open. Shows fields for Name ("Jane Smith"), Title ("Sales Representative"), Email, Password, Confirm Password, and a Role radio group (Sales selected, Admin option visible). An existing user row is shown below the form: "Admin" with the ADMIN badge, email admin@example.com, created Apr 5 2026, and a pencil edit icon.
- **docs_ref:** `docs/REQUIREMENTS.md` → "Authentication and user management"

---

### 20. Role-Based Access Control

- **tile_title:** Role-Based Permissions
- **tile_subtitle:** Admins control everything; sales reps focus on what matters — their quotes.
- **description:** The portal enforces two roles. Sales reps can log in, view and manage their own quotes, build and finalise quotes, and generate shareable links. They cannot create or delete other users, access the product catalog or template management, or change tenant settings. Admins have all sales capabilities plus full access to user management, product catalog, quote templates, and the Settings page. All admin-only API routes reject non-admin sessions with 403 responses.
- **screenshot:** `Create User page.png`
- **screenshot_caption:** The Role selector in the Create New User form showing the "Sales" radio button selected and "Admin" as an alternative option.
- **docs_ref:** `docs/REQUIREMENTS.md` → "User Roles and Capabilities"

---

### 21. Multi-Region Locale & Currency

- **tile_title:** Multi-Region Ready
- **tile_subtitle:** Set your currency, locale, and tax labels — GST/PST, HST, VAT, or anything else.
- **description:** The system is not tied to any specific country or tax regime. Tax labels are free-text fields (Tax 1 Label, Tax 2 Label) so "GST/PST", "HST", "VAT/Sales Tax", or any other pair works without code changes. Locale is selected from the full `Intl.getCanonicalLocales()` list with human-readable labels. Currency is selected from `Intl.supportedValuesOf('currency')` — covering every ISO 4217 currency. All monetary values on the public quote page, dashboard, and emails are formatted using `Intl.NumberFormat` with the configured locale and currency — no hardcoded symbols.
- **screenshot:** `Customisation Settings.png`
- **screenshot_caption:** The Tax & Locale section of the Settings page showing Tax 1 Label (GST), Tax 2 Label (PST), Locale dropdown (en-US), and Currency dropdown (USD).
- **docs_ref:** `docs/REQUIREMENTS.md` → "Tenant configuration" (locale/currency), `docs/ARCHITECTURE.md` → Tenant Configuration table

---

### 22. User Profile & Password Management

- **tile_title:** User Profile
- **tile_subtitle:** Sales reps keep their profile photo current — it shows on every quote they send.
- **description:** Every portal user has a profile page where they can upload a profile photo (stored in Cloudflare R2) and change their own password. The profile photo appears on the public quote page in the "Prepared by" block, adding a personal, professional touch to client-facing quotes. Non-admin users can only edit their own photo; full name, title, email, and role changes are managed by an admin in the Users section. Password changes require the current password for verification.
- **screenshot:** `null`
- **screenshot_caption:** null — no screenshot captured yet. See `docs/REQUIREMENTS.md` → "User profile" for spec. Use a generic profile/avatar illustration or placeholder.
- **docs_ref:** `docs/REQUIREMENTS.md` → "User profile", `docs/ARCHITECTURE.md` → Data Flow (Profile edit, Change password)

---

## Screenshot Coverage Summary

| Screenshot file | Features it covers |
|----------------|--------------------|
| `Dashboard.png` | #13 Dashboard & Analytics |
| `Quote View.png` | #14 Quote List with Search & Filters |
| `Create Lead.png` | #1 Inbound Lead Capture |
| `Create Quote.png` | #2 Quote Builder |
| `Edit Quote.png` | #6 Rich-Text Sections, #7 Shareable Link, #10 Request Changes, #15 Audit Trail |
| `Quote link preview.png` | #8 Branded Public Quote Page, #9 Electronic Signature, #10 Request Changes (customer side) |
| `Customisation Settings.png` | #16 White-Label Branding, #17 Premium Theme, #18 Logo Color Extraction, #21 Multi-Region |
| `Create User page.png` | #19 User Management, #20 Role-Based Access Control |
| `Products Page.png` | #4 Product Catalog (empty state) |
| `Quote Templates.png` | #5 Quote Templates |

---

## Features Without a Screenshot (Need Capture or Placeholder)

| Feature | What to show | Fallback |
|---------|-------------|---------|
| #3 Hourly Billing | Quote builder with Hourly billing type open, showing date/time schedule rows | Generic calendar/clock illustration |
| #11 Email Notifications | Email inbox showing an acceptance notification | Generic email illustration |
| #12 Print to PDF | Browser print preview of the public quote page | Generic PDF/document illustration |
| #22 User Profile | Profile page with photo upload and change-password form | Generic avatar/profile illustration |

---

## Missing Screenshots (Still to Capture)

These pages/states exist in the app but have no screenshot yet. Capture these to fill remaining gaps.

| Priority | What to capture | Route / State |
|----------|----------------|--------------|
| High | Login page with company branding | `/login` |
| High | Leads tab with actual leads listed | `/quotes` → Leads tab |
| High | Quote builder with product picker dropdown open | `/quotes/[id]` (Draft, after adding products) |
| High | Quote builder with hourly line item + schedule rows | `/quotes/[id]` (Draft, billing=Hourly) |
| High | Finalised quote — link section prominent | `/quotes/[id]` (FINALISED status) |
| High | Accepted quote — portal view with signature stored | `/quotes/[id]` (ACCEPTED status) |
| High | Public quote page — post-acceptance confirmation | `/q/[token]` after clicking Accept |
| Medium | Products page with products listed (not empty) | `/products` with 3+ products |
| Medium | Add Product form | `/products` with form open |
| Medium | Template editor with line items | `/templates` with New/Edit form open |
| Medium | Load Template dropdown open in quote builder | `/quotes/[id]` (Draft, dropdown open) |
| Medium | Save as Template modal with name input | `/quotes/[id]` with modal open |
| Medium | Quote list with status filter active (e.g. Accepted) | `/quotes` with filter chip selected |
| Medium | User edit form inline | `/users` with pencil clicked |
| Low | Profile page (photo + change password) | `/profile` |
| Low | Public quote — request changes input | `/q/[token]` clicking Request Changes |
| Low | Public quote — with sales rep profile photo | `/q/[token]` (user has photo set) |
| Low | Public quote — with rich-text sections rendered | `/q/[token]` (quote has sections) |
| Low | Print preview / PDF layout | Cmd+P on `/q/[token]` |
| Low | Public quote — premium branding (all colors + tagline) | `/q/[token]` with premium enabled |
