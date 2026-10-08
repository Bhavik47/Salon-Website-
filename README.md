# Saloniaz — Luxury Salon Website (Delhi NCR)

A fast, dependency-free single-page website for **Saloniaz**: plain HTML, CSS and JavaScript. No build step, so it can be hosted anywhere (Netlify, Vercel, GitHub Pages, cPanel).

## Features

- **Book on WhatsApp** everywhere: header, hero, every service row, every offer, package and artist. Each one opens WhatsApp with a message already written for that item.
- **Booking form** (name, service, studio, date, time slot, notes) that sends one tidy booking message on WhatsApp. Nothing is stored on the site.
- **Click to call** in the header, hero, studio cards, footer and the mobile action bar.
- **Live "Open now / Closed" status** worked out from India time.
- **Services menu** with 7 categories and tabs. Shows durations, not prices, with a "Get a quote" link in each category.
- **Offers** shown as tickets with copy-to-clipboard codes. The "valid until" date updates every month on its own.
- **Packages**: three bridal tiers, plus rituals and memberships, each with a "Request a quote" link.
- **Our Work** gallery with filters and a lightbox (keyboard and swipe), plus a draggable before/after slider.
- **Google reviews**: rating summary, rating bars, a review carousel, and "Read all on Google" and "Write a review" links.
- **Studios**: three NCR locations with a switcher, an embedded Google Map, a directions link, and per-studio call and WhatsApp buttons.
- FAQ, Instagram strip, artist profiles, and a hygiene and promises section.
- On mobile, a sticky bar with **Call · Book on WhatsApp · Directions**. On desktop, a floating WhatsApp button.
- SEO: meta and Open Graph tags, plus `BeautySalon` structured data (JSON-LD).
- Accessibility: keyboard support, focus styles, ARIA tabs, and support for reduced-motion settings.

## Customise (before going live)

1. **Contact details**: edit the `SALON` object at the top of `assets/js/main.js` (WhatsApp number, phone, email, Instagram, Google review links, hours). Every button picks these up.
   Also update the fallback numbers in `index.html` (search for `919810000000`) and the JSON-LD block in `<head>`.
2. **Studios**: edit `STUDIOS` in `main.js` (address, landmark, map search text).
3. **Services**: edit `SERVICES` in `main.js`. The booking form's dropdown is built from this list.
4. **Reviews**: ⚠️ the reviews in `REVIEWS` and the 4.9 / 1,240+ figures are **placeholders**. Replace them with real reviews from your Google Business Profile, or embed a Google reviews widget. Don't publish reviews that aren't real.
5. **Stats and claims**: years, guests, brides, artist bios and brand names are sample copy. Make them true for your salon.
6. **Photos**: the site uses Unsplash stock images as placeholders. Replace them with your own work, especially in **Our Work**, the before/after slider and the team. If an image fails to load, its frame shows a branded "S" placeholder instead of a broken-image icon.
7. **Offers**: edit the ticket cards in the `#offers` section of `index.html`.

## Run locally

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open http://localhost:8000.
