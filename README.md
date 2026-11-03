# Community Support Foundation - Web Application

**Student Name:** Omphile Maja  
**Student Identification:** ST: 10526039  
**Group:** Group 4  
**Module:** Web Development (Introduction) - WEDE5020  

---

## Project Overview
This project is a multi-page web application designed for the **Community Support Foundation**, a non-profit organization dedicated to community outreach, educational workshops, and food distribution.

---

## Page Structure
1. `index.html` - Homepage with hero banner and core mission statement.
2. `about.html` - Background history, organizational vision, and key team members.
3. `services.html` - Display cards outlining community assistance programs.
4. `enquiry.html` - Interactive form allowing visitors to apply as volunteers or corporate sponsors.
5. `contact.html` - Contact details for two physical branch locations alongside an embedded Google Map.

---

## Changelog
* **Phase 1 Initial Release:** Built primary HTML structure for 5 pages with semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<footer>`).
* **Styling Integration:** Linked external `style.css` stylesheet for navigation layout, card grid alignment, hero banners, and form field formatting.

---

## References
* The Independent Institute of Education (Pty) Ltd. 2026. *Web Development (Introduction) [WEDE5020 Module Guide]*. Independent Institute of Education.
* Unsplash. 2026. *Free High-Resolution Technology & Office Photos*. Available at: https://unsplash.com [Accessed 17 August 2026].
## Feedback Implementation (Part 1 Revisions)

Based on the feedback received for Part 1, the following updates were implemented across the project:
* **HTML Validation & Semantics:** Corrected missing closing tags, wrapped major content blocks inside semantic `<main>` and `<section>` tags, and removed inline styles[cite: 3, 5].
* **Accessibility:** Added missing descriptive `alt` attributes to all images across all pages[cite: 3, 5].
* **Form Enhancements:** Added proper `<label>` elements and structural grouping to `enquiry.html` for better browser validation and user accessibility[cite: 3, 5].

---

## Part 2 - Visual Design & Responsive Implementation

### Overview
Integrated a centralized external stylesheet (`css/style.css`) utilizing CSS custom variables, Flexbox for navigation, CSS Grid for card-based layouts, and responsive media queries (`900px` tablet and `600px` mobile breakpoints)[cite: 3, 5].

### Responsive Screenshots Evidence
* **Desktop View (1200px):** `screenshots/desktop.png`
* **Tablet View (768px):** `screenshots/tablet.png`[cite: 6]
* **Mobile View (375px):** `screenshots/mobile.png`[cite: 6]

### Updated Changelog

| Date | Version | Summary of Changes | Author |
| :--- | :--- | :--- | :--- |
| 2026-09-02 | v1.1.0 | Corrected Part 1 feedback: Fixed HTML semantics, added image `alt` attributes, and updated form inputs[cite: 5, 6]. | Omphile Maja |
| 2026-09-18 | v2.0.0 | Implemented central `style.css`, Flexbox navbar, CSS Grid layout cards, mobile media queries, and screenshot evidence[cite: 3, 5, 6]. | Omphile Maja |
## Part 3 - Enhancing Functionality, SEO & Deployment

### Deployed Web Application Links
* **Live Deployed Website:** https://communitysupport.netlify.app
* **GitHub Repository:** https://github.com/OmphileMaja/ri-pta-wede5020-part1-part2-part3[cite: 14]

### Feedback Adjustments & Part 3 Changelog
* **Part 2 Feedback Revisions:** Refined header layout to feature the logo on the top left and verified mobile responsive breakpoints[cite: 5, 17].
* **JavaScript Interactivity:** Integrated regex client-side form validation (`enquiry.html` & `contact.html`), mailto email compilation, dynamic live search filtering (`services.html`), image lightbox gallery (`index.html`), interactive accordions (`about.html`), and Leaflet.js interactive mapping (`contact.html`)[cite: 6, 7, 11, 12, 13].
* **SEO Strategies:** Added On-Page meta descriptions, semantic header tags, `robots.txt`, and `sitemap.xml`[cite: 8, 9].
* **Cloud Deployment:** Published live on Netlify.

| Date | Version | Summary of Changes | Author |
| :--- | :--- | :--- | :--- |
| 2026-10-30 | v3.0.0 | Added top-left logo, JS form validation, live search, Leaflet interactive map, gallery lightbox, SEO configurations, and Netlify deployment[cite: 4, 6, 7, 8, 9, 11, 12, 13, 14, 17]. | Omphile Maja |

## References & Bibliography
* Duckett, J., 2011. *HTML and CSS: Design and Build Websites*. Indianapolis: John Wiley & Sons.
* Leaflet JS, 2026. *An Open-Source JavaScript Library for Mobile-Friendly Interactive Maps*. [online] Available at: <https://leafletjs.com/> [Accessed 30 October 2026].
* MDN Web Docs, 2026. *JavaScript Guide*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide> [Accessed 30 October 2026].
* W3C, 2023. *Web Content Accessibility Guidelines (WCAG) 2.1 Overview*. [online] Available at: <https://www.w3.org/WAI/standards-guidelines/wcag/> [Accessed 30 October 2026].