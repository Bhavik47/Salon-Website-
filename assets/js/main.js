/* ==========================================================================
   Saloniaz — site script
   Everything the salon will want to edit lives in SALON below.
   ========================================================================== */

const SALON = {
  name: 'Saloniaz',
  // WhatsApp number: country code + number, digits only (no +, spaces or dashes)
  whatsapp: '919810000000',
  phone: '+919810000000',
  phoneDisplay: '+91 98100 00000',
  email: 'hello@saloniaz.in',
  instagram: 'https://instagram.com/saloniaz',
  // Paste your Google Business Profile links here
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Saloniaz+Delhi+NCR',
  googleWriteReviewUrl: 'https://www.google.com/maps/search/?api=1&query=Saloniaz+Delhi+NCR',
  hours: { open: 10, close: 21, label: '10 AM – 9 PM' }, // 24h clock, India time
  timeZone: 'Asia/Kolkata',
};

const STUDIOS = [
  {
    id: 'gurugram',
    tab: 'Gurugram',
    kicker: 'Flagship studio',
    name: 'Golf Course Road',
    address: 'Ground Floor, Golf Course Road, Sector 54, Gurugram, Haryana 122011',
    landmark: 'Near Sector 54 Chowk Rapid Metro',
    mapQuery: 'Golf Course Road Sector 54 Gurugram',
    perks: 'Valet parking · 6 styling chairs · Bridal suite',
  },
  {
    id: 'south-delhi',
    tab: 'South Delhi',
    kicker: 'Atelier',
    name: 'Greater Kailash II',
    address: 'M-Block Market, Greater Kailash II, New Delhi, Delhi 110048',
    landmark: 'Opposite the M-Block park',
    mapQuery: 'M Block Market Greater Kailash 2 New Delhi',
    perks: 'Parking available · Private colour lounge',
  },
  {
    id: 'noida',
    tab: 'Noida',
    kicker: 'Studio',
    name: 'Sector 18',
    address: 'Sector 18 Market, Noida, Uttar Pradesh 201301',
    landmark: '3 mins from Sector 18 Metro Station',
    mapQuery: 'Sector 18 Market Noida',
    perks: 'Mall parking · Nail & skin bar',
  },
];

const U = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=78`;

// Service menu. No prices on purpose — guests get a personal quote on WhatsApp.
const SERVICES = [
  {
    id: 'hair', label: 'Hair', title: 'Cuts &amp; styling', img: U('photo-1562322140-8baeececf3df', 900),
    intro: 'Precision cuts designed around your face, texture and how much time you really spend on your hair.',
    items: [
      { name: 'Signature Haircut', desc: 'Consultation, wash, precision cut & blow-dry finish', dur: '60 min', tag: 'Bestseller' },
      { name: 'Blow-dry & Styling', desc: 'Bouncy blowouts, glossy waves, sleek straight', dur: '45 min' },
      { name: 'Keratin & Hair Botox', desc: 'Frizz-free, smooth and manageable for months', dur: '2–4 hrs' },
      { name: 'Hair Spa Rituals', desc: 'Deep-conditioning masks matched to your scalp', dur: '60 min' },
      { name: 'Updos & Occasion Hair', desc: 'Buns, braids and red-carpet styling', dur: '60 min' },
    ],
  },
  {
    id: 'colour', label: 'Colour', title: 'Colour studio', img: U('photo-1522337360788-8b13dee7a37e', 900),
    intro: 'Dimensional, healthy colour with bond-protection in every service. Patch test always included.',
    items: [
      { name: 'Balayage & Ombré', desc: 'Hand-painted, sun-kissed dimension', dur: '3–4 hrs', tag: 'Most requested' },
      { name: 'Global Colour', desc: 'Rich, even, ammonia-free options available', dur: '2 hrs' },
      { name: 'Highlights & Babylights', desc: 'From subtle brightness to bold contrast', dur: '2–3 hrs' },
      { name: 'Colour Correction', desc: 'Fixing brassiness, banding and box-dye', dur: 'By consult' },
      { name: 'Grey Blending & Root Touch-up', desc: 'Soft, natural coverage', dur: '75 min' },
    ],
  },
  {
    id: 'skin', label: 'Skin', title: 'Skin clinic', img: U('photo-1570172619644-dfd03ed5d881', 900),
    intro: 'Results-led facials by trained therapists — from instant glow to targeted treatments for pigmentation and acne.',
    items: [
      { name: 'HydraFacial', desc: 'Cleanse, extract & hydrate — zero downtime', dur: '60 min', tag: 'Bestseller' },
      { name: 'Signature Glow Facial', desc: 'Our cult facial with lymphatic massage', dur: '75 min' },
      { name: 'Korean Glass-Skin Facial', desc: 'Multi-layer hydration for dewy skin', dur: '75 min' },
      { name: 'Chemical Peels', desc: 'For pigmentation, texture and acne marks', dur: '45 min' },
      { name: 'Waxing & Threading', desc: 'Rica & chocolate wax, precise brow shaping', dur: '15–60 min' },
    ],
  },
  {
    id: 'nails', label: 'Nails', title: 'Nail bar', img: U('photo-1604654894610-df63bc536371', 900),
    intro: 'Clean, long-lasting nails with single-use files and buffers for every guest.',
    items: [
      { name: 'Gel Extensions', desc: 'Almond, coffin, square — your shape, your length', dur: '90 min', tag: 'Trending' },
      { name: 'Nail Art', desc: 'Chrome, French, ombré, hand-painted minimalist', dur: '30–60 min' },
      { name: 'Luxury Manicure', desc: 'Soak, cuticle care, massage & polish', dur: '45 min' },
      { name: 'Spa Pedicure', desc: 'Scrub, mask, hot-towel massage', dur: '60 min' },
    ],
  },
  {
    id: 'bridal', label: 'Bridal & Makeup', title: 'Makeup &amp; bridal', img: U('photo-1487412947147-5cebf100ffc2', 900),
    intro: 'From soft-glam cocktail looks to full bridal couture — skin-first makeup that photographs beautifully and lasts all night.',
    items: [
      { name: 'Bridal Makeup', desc: 'HD or airbrush, with trial and draping', dur: '3 hrs', tag: 'Signature' },
      { name: 'Engagement & Reception Looks', desc: 'Glam that holds up under every light', dur: '2 hrs' },
      { name: 'Party & Occasion Makeup', desc: 'Soft glam, smoky or editorial', dur: '75 min' },
      { name: 'Saree & Dupatta Draping', desc: 'Pleats that stay put all evening', dur: '30 min' },
    ],
  },
  {
    id: 'men', label: 'Men', title: "Men's grooming", img: U('photo-1503951914875-452162b0f3f1', 900),
    intro: 'Sharp cuts, sculpted beards and skin care that actually fits into a busy week.',
    items: [
      { name: 'Cut & Style', desc: 'Fades, textured crops, classic tapers', dur: '45 min', tag: 'Bestseller' },
      { name: 'Beard Sculpting & Hot Towel Shave', desc: 'Line-up, trim, oils & balm', dur: '30 min' },
      { name: 'Colour & Grey Camouflage', desc: 'Natural-looking coverage in 20 minutes', dur: '45 min' },
      { name: 'De-tan & Clean-up Facial', desc: 'Fresh, even skin before the big meeting', dur: '45 min' },
    ],
  },
  {
    id: 'spa', label: 'Spa', title: 'Spa &amp; body', img: U('photo-1544161515-4ab6ce6db874', 900),
    intro: 'Slow down. Head-spa rituals and body treatments in our calm, candle-lit rooms.',
    items: [
      { name: 'Japanese Head Spa', desc: 'Scalp cleanse, steam & deep pressure massage', dur: '60 min', tag: 'New' },
      { name: 'Aromatherapy Massage', desc: 'Full-body, with oils chosen for you', dur: '60–90 min' },
      { name: 'Body Polishing', desc: 'Scrub, wrap & glow — perfect before events', dur: '75 min' },
      { name: 'Foot Reflexology', desc: 'Pressure-point relief for tired feet', dur: '30 min' },
    ],
  },
];

// Our work — replace with your own photos (keep the category ids).
const WORK = [
  { cat: 'colour', title: 'Honey balayage', by: 'Rohan · GK II', img: 'photo-1522337360788-8b13dee7a37e', h: 1.25 },
  { cat: 'bridal', title: 'Soft glam bride', by: 'Ishita · Gurugram', img: 'photo-1487412947147-5cebf100ffc2', h: 1.4 },
  { cat: 'nails', title: 'Milky chrome almonds', by: 'Nail bar · Noida', img: 'photo-1604654894610-df63bc536371', h: 0.85 },
  { cat: 'hair', title: 'Glossy blowout', by: 'Aanya · Gurugram', img: 'photo-1560066984-138dadb4c035', h: 1.1 },
  { cat: 'skin', title: 'HydraFacial glow', by: 'Meher · GK II', img: 'photo-1570172619644-dfd03ed5d881', h: 1.3 },
  { cat: 'hair', title: 'Textured lob', by: 'Aanya · Gurugram', img: 'photo-1562322140-8baeececf3df', h: 1.35 },
  { cat: 'bridal', title: 'Reception glam', by: 'Ishita · On location', img: 'photo-1516975080664-ed2fc6a32937', h: 1 },
  { cat: 'colour', title: 'Copper melt', by: 'Rohan · Gurugram', img: 'photo-1519699047748-de8e457a634e', h: 1.25 },
  { cat: 'nails', title: 'French with a twist', by: 'Nail bar · Gurugram', img: 'photo-1610992015732-2449b76344bc', h: 1.15 },
  { cat: 'skin', title: 'Pre-bridal ritual', by: 'Meher · Noida', img: 'photo-1515377905703-c4788e51af15', h: 0.9 },
  { cat: 'hair', title: 'Studio, Golf Course Rd', by: 'Our flagship', img: 'photo-1521590832167-7bcbfaa6381f', h: 0.8 },
  { cat: 'bridal', title: 'Editorial bridal edit', by: 'Ishita · Gurugram', img: 'photo-1522335789203-aabd1fc54bc9', h: 1.2 },
];

// SAMPLE reviews for layout — replace with real reviews copied from your Google Business Profile
// (or connect a Google reviews widget). Never publish reviews that aren't real.
const REVIEWS = [
  { name: 'Ritika Malhotra', when: '2 weeks ago', service: 'Balayage', text: "The best balayage I've had in Delhi. Rohan actually listened, showed me references and the colour is exactly what I wanted — soft, expensive-looking and zero brassiness." },
  { name: 'Sneha Batra', when: '1 month ago', service: 'Bridal makeup', text: 'Ishita did my wedding makeup and I have never felt more like myself. It lasted through the pheras, the photos, and a lot of crying. Every aunty asked for her number.' },
  { name: 'Arjun Khanna', when: '3 weeks ago', service: 'Haircut & beard', text: 'Finally a salon that is on time. Great cut, proper hot towel shave, and they remembered my preferences on the second visit. Booked over WhatsApp in a minute.' },
  { name: 'Priya Venkat', when: '5 days ago', service: 'HydraFacial', text: 'Spotless studio, single-use kits opened in front of me, and Meher explained everything she was doing. My skin is glowing — this is my place now.' },
  { name: 'Kavya Singh', when: '2 months ago', service: 'Gel extensions', text: 'Nails have lasted four weeks without a single lift. The nail bar team is so precise and the designs are gorgeous. Worth every rupee.' },
  { name: 'Neha Aggarwal', when: '1 week ago', service: 'Keratin', text: 'Warm welcome, kahwa, a genuinely relaxing head massage and hair that now takes 10 minutes to style. Lovely people.' },
];

const AVATAR_COLORS = ['#a8835a', '#7a5c49', '#b06f5a', '#5e6b58', '#8a6f8e', '#4f6b7d'];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const waLink = (msg) => `https://wa.me/${SALON.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`;
const strip = (html) => html.replace(/&amp;/g, '&');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const icon = (id, cls = 'ico') => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;

let toastTimer;
function toast(msg) {
  const t = $('[data-toast]');
  t.textContent = msg;
  t.classList.add('is-show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('is-show'), 2200);
}

/* ---------- contact links ---------- */
function hydrateLinks(root = document) {
  $$('[data-wa]', root).forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = '_blank';
    a.rel = 'noopener';
  });
  $$('[data-call]', root).forEach((a) => (a.href = `tel:${SALON.phone}`));
}
function hydrateStatic() {
  hydrateLinks();
  $$('[data-phone-text]').forEach((el) => (el.textContent = SALON.phoneDisplay));
  $$('[data-email]').forEach((a) => { a.href = `mailto:${SALON.email}`; a.textContent = SALON.email; });
  $$('[data-instagram]').forEach((a) => (a.href = SALON.instagram));
  $$('[data-google-reviews]').forEach((a) => (a.href = SALON.googleReviewsUrl));
  $$('[data-google-write]').forEach((a) => (a.href = SALON.googleWriteReviewUrl));
  $$('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
}

/* ---------- open / closed status (India time) ---------- */
function indiaNow() {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: SALON.timeZone, hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
  const get = (t) => Number(parts.find((p) => p.type === t).value);
  return { h: get('hour') % 24, m: get('minute') };
}
function fmtHour(h) { const s = h >= 12 ? 'PM' : 'AM'; const x = h % 12 || 12; return `${x} ${s}`; }
function openStatus() {
  const el = $('[data-open-status]');
  if (!el) return;
  const { h, m } = indiaNow();
  const now = h + m / 60;
  const { open, close } = SALON.hours;
  const text = $('.status__text', el);
  if (now >= open && now < close) {
    const left = close - now;
    text.textContent = left <= 1 ? `Open now · closes soon (${fmtHour(close)})` : `Open now · until ${fmtHour(close)}`;
    el.classList.remove('is-closed');
  } else {
    text.textContent = `Closed now · opens ${now < open ? 'today' : 'tomorrow'} at ${fmtHour(open)}`;
    el.classList.add('is-closed');
  }
}

/* ---------- header, menu, announcement ---------- */
function headerUI() {
  const header = $('#header');
  const bar = $('.action-bar');
  const hero = $('.hero');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 10);
    if (bar) bar.classList.toggle('is-visible', y > hero.offsetHeight * 0.55);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const burger = $('.burger');
  const menu = $('#mobile-menu');
  const setMenu = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });

  const announce = $('#announce');
  try { if (localStorage.getItem('sz-announce') === 'off') announce.remove(); } catch (_) {}
  $('.announce__close')?.addEventListener('click', () => {
    announce.remove();
    try { localStorage.setItem('sz-announce', 'off'); } catch (_) {}
  });

  // Active nav link
  const links = $$('.nav a');
  const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting && map.has(en.target.id)) {
        links.forEach((l) => l.classList.remove('is-active'));
        map.get(en.target.id).classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });

  // FAB tip shows once after a while
  const fab = $('.fab');
  setTimeout(() => { fab?.classList.add('show-tip'); setTimeout(() => fab?.classList.remove('show-tip'), 4500); }, 6000);
}

/* ---------- reveal & counters ---------- */
function reveals() {
  const els = $$('.reveal, .reviews__summary');
  if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((e) => io.observe(e));

  const counters = $$('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      cio.unobserve(en.target);
      const el = en.target;
      const end = parseFloat(el.dataset.count);
      const dec = Number(el.dataset.decimals || 0);
      const fmt = (v) => (dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-IN'));
      if (reducedMotion) { el.textContent = fmt(end); return; }
      const t0 = performance.now();
      const dur = 1600;
      const step = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(end * e);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => cio.observe(c));
}

/* ---------- services ---------- */
function services() {
  const tabs = $('[data-services-tabs]');
  const panel = $('[data-services-panel]');
  if (!tabs) return;

  tabs.innerHTML = SERVICES.map((s, i) => `
    <button class="svc-tab" role="tab" id="tab-${s.id}" aria-controls="svc-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-id="${s.id}" type="button">
      <span>${s.label}</span><small>${String(s.items.length).padStart(2, '0')}</small>
    </button>`).join('');
  panel.id = 'svc-panel';
  panel.setAttribute('role', 'tabpanel');

  const render = (id) => {
    const s = SERVICES.find((x) => x.id === id);
    panel.setAttribute('aria-labelledby', `tab-${id}`);
    panel.innerHTML = `
      <div class="svc-panel">
        <figure class="svc-panel__media media"><img src="${s.img}" alt="${strip(s.title)} at Saloniaz" loading="lazy" /></figure>
        <div>
          <div class="svc-panel__head"><h3>${s.title.replace(/(\w+)$/, '<em>$1</em>')}</h3><p>${s.intro}</p></div>
          <ul class="svc-list">
            ${s.items.map((it) => `
              <li><a class="svc-item" data-wa="Hi Saloniaz! I'd like to book: ${it.name}." href="#">
                <span class="svc-item__name">${it.name}${it.tag ? `<span class="svc-item__tag">${it.tag}</span>` : ''}</span>
                <span class="svc-item__desc">${it.desc}</span>
                <span class="svc-item__meta"><span class="svc-item__dur">${icon('i-clock')} ${it.dur}</span><span class="svc-item__go" aria-hidden="true">${icon('i-arrow')}</span></span>
              </a></li>`).join('')}
          </ul>
          <div class="svc-panel__foot">
            <span>Pricing shared on consultation — tailored to your hair &amp; skin.</span>
            <a class="link-arrow" data-wa="Hi Saloniaz! Could you share details for ${strip(s.title)} services?" href="#">Get a quote ${icon('i-arrow')}</a>
          </div>
        </div>
      </div>`;
    hydrateLinks(panel);
  };

  const select = (btn, focus) => {
    $$('.svc-tab', tabs).forEach((b) => { b.setAttribute('aria-selected', 'false'); b.tabIndex = -1; });
    btn.setAttribute('aria-selected', 'true');
    btn.tabIndex = 0;
    if (focus) btn.focus();
    btn.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reducedMotion ? 'auto' : 'smooth' });
    render(btn.dataset.id);
  };

  tabs.addEventListener('click', (e) => { const b = e.target.closest('.svc-tab'); if (b) select(b); });
  tabs.addEventListener('keydown', (e) => {
    const all = $$('.svc-tab', tabs);
    const i = all.indexOf(document.activeElement);
    if (i < 0) return;
    const next = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (next) { e.preventDefault(); select(all[(i + next + all.length) % all.length], true); }
  });
  render(SERVICES[0].id);

  // Feed the booking form's service list
  const sel = $('#f-service');
  if (sel) {
    sel.insertAdjacentHTML('beforeend', SERVICES.map((s) => `
      <optgroup label="${strip(s.title)}">${s.items.map((it) => `<option>${it.name}</option>`).join('')}</optgroup>`).join('') +
      '<optgroup label="Packages"><option>Bridal package</option><option>Pre-Bridal Glow Ritual</option><option>Groom\'s Edit</option><option>Party Ready</option><option>Saloniaz Circle membership</option></optgroup><option>Not sure — need a consultation</option>');
  }
}

/* ---------- offers ---------- */
function offers() {
  const end = new Date();
  const last = new Date(end.getFullYear(), end.getMonth() + 1, 0);
  $$('[data-month-end]').forEach((el) => (el.textContent = last.toLocaleDateString('en-IN', { day: 'numeric', month: 'long' })));

  $$('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const code = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(code);
      } catch (_) {
        const ta = document.createElement('textarea');
        ta.value = code; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (__) {}
        ta.remove();
      }
      btn.classList.add('is-copied');
      $('.code__hint span', btn).textContent = 'Copied';
      toast(`Code ${code} copied — mention it on WhatsApp`);
      setTimeout(() => { btn.classList.remove('is-copied'); $('.code__hint span', btn).textContent = 'Copy'; }, 2200);
    });
  });
}

/* ---------- packages toggle ---------- */
function packages() {
  const tabs = $$('[data-pkg-tab]');
  const thumb = $('.toggle__thumb');
  const place = (btn) => {
    thumb.style.width = `${btn.offsetWidth}px`;
    thumb.style.transform = `translateX(${btn.offsetLeft - 5}px)`;
  };
  tabs.forEach((btn) => btn.addEventListener('click', () => {
    tabs.forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
    $$('[data-pkg-group]').forEach((g) => g.classList.toggle('is-active', g.dataset.pkgGroup === btn.dataset.pkgTab));
    place(btn);
  }));
  const sync = () => place(tabs.find((b) => b.getAttribute('aria-selected') === 'true'));
  sync();
  window.addEventListener('resize', sync);
  document.fonts?.ready.then(sync);
}

/* ---------- gallery + lightbox ---------- */
function gallery() {
  const wrap = $('[data-gallery]');
  if (!wrap) return;
  let current = [];
  const render = (filter) => {
    current = WORK.filter((w) => filter === 'all' || w.cat === filter);
    wrap.innerHTML = current.map((w, i) => `
      <button class="shot" type="button" data-i="${i}" style="animation-delay:${i * 0.04}s" aria-label="View ${w.title}">
        <span class="media" style="display:block;aspect-ratio:1/${w.h}"><img src="${U(w.img, 700)}" alt="${w.title} by ${w.by}" loading="lazy" /></span>
        <span class="shot__cap"><span><strong>${w.title}</strong><small>${w.by}</small></span>${icon('i-arrow-ne')}</span>
      </button>`).join('');
  };
  render('all');

  $('[data-work-filters]').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip', e.currentTarget).forEach((c) => c.classList.toggle('is-active', c === chip));
    render(chip.dataset.filter);
  });

  const lb = $('[data-lightbox]');
  const img = $('[data-lb-img]');
  const cap = $('[data-lb-cap]');
  let idx = 0;
  let lastFocus;
  const show = (i) => {
    idx = (i + current.length) % current.length;
    const w = current[idx];
    img.parentElement.classList.remove('is-fallback');
    img.src = U(w.img, 1600);
    img.alt = `${w.title} by ${w.by}`;
    cap.innerHTML = `${w.title}<small>${w.by}</small>`;
  };
  const open = (i) => { lastFocus = document.activeElement; show(i); lb.hidden = false; document.body.style.overflow = 'hidden'; $('[data-lb-close]').focus(); };
  const close = () => { lb.hidden = true; document.body.style.overflow = ''; lastFocus?.focus(); };

  wrap.addEventListener('click', (e) => { const s = e.target.closest('.shot'); if (s) open(Number(s.dataset.i)); });
  $('[data-lb-close]').addEventListener('click', close);
  $('[data-lb-prev]').addEventListener('click', () => show(idx - 1));
  $('[data-lb-next]').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  let sx = null;
  lb.addEventListener('touchstart', (e) => (sx = e.touches[0].clientX), { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    sx = null;
  });
}

/* ---------- before / after ---------- */
function beforeAfter() {
  $$('[data-ba]').forEach((ba) => {
    const range = $('.ba__range', ba);
    const set = () => ba.style.setProperty('--pos', `${range.value}%`);
    range.addEventListener('input', set);
    set();
  });
}

/* ---------- reviews ---------- */
function reviews() {
  const track = $('[data-reviews]');
  if (!track) return;
  const stars = Array.from({ length: 5 }, () => '<svg><use href="#i-star"/></svg>').join('');
  track.innerHTML = REVIEWS.map((r, i) => `
    <article class="review">
      <div class="review__top">
        <span class="review__avatar" style="background:${AVATAR_COLORS[i % AVATAR_COLORS.length]}">${r.name[0]}</span>
        <span class="review__who"><strong>${r.name}</strong><small>${r.when}</small></span>
        <svg class="g-logo" aria-label="Google review"><use href="#g-logo"/></svg>
      </div>
      <div class="stars" aria-label="5 out of 5 stars">${stars}</div>
      <p class="review__text">“${r.text}”</p>
      <div class="review__foot"><span class="review__service">${r.service}</span><span>Google review</span></div>
    </article>`).join('');

  const by = (dir) => {
    const card = $('.review', track);
    const step = card ? card.offsetWidth + 18 : 320;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (dir > 0 && atEnd) track.scrollTo({ left: 0 });
    else track.scrollBy({ left: dir * step });
  };
  $('[data-rev-prev]').addEventListener('click', () => by(-1));
  $('[data-rev-next]').addEventListener('click', () => by(1));

  // Gentle autoplay, paused on interaction
  if (!reducedMotion) {
    let paused = false;
    ['pointerenter', 'focusin', 'touchstart'].forEach((ev) => track.addEventListener(ev, () => (paused = true), { passive: true }));
    track.addEventListener('pointerleave', () => (paused = false));
    setInterval(() => {
      const r = track.getBoundingClientRect();
      if (!paused && r.top < innerHeight && r.bottom > 0) by(1);
    }, 5500);
  }
}

/* ---------- booking form ---------- */
function bookingForm() {
  const form = $('#book-form');
  if (!form) return;
  const studio = $('#f-studio');
  studio.innerHTML = STUDIOS.map((s) => `<option value="${s.tab} — ${s.name}">${s.tab} · ${s.name}</option>`).join('');

  const date = $('#f-date');
  const toISO = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const today = new Date();
  date.min = toISO(today);
  date.value = toISO(today);

  const check = (input) => {
    const field = input.closest('.field');
    const ok = input.value.trim() !== '';
    field.classList.toggle('is-invalid', !ok);
    return ok;
  };
  $$('[required]', form).forEach((el) => el.addEventListener('input', () => el.closest('.field').classList.remove('is-invalid')));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const req = $$('[required]', form);
    const results = req.map(check);
    if (results.includes(false)) {
      req[results.indexOf(false)].focus();
      return;
    }
    const d = new FormData(form);
    const niceDate = new Date(`${d.get('date')}T00:00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
    const lines = [
      `Hi ${SALON.name}! I'd like to book an appointment.`,
      '',
      `• Name: ${d.get('name').trim()}`,
      `• Service: ${d.get('service')}`,
      `• Studio: ${d.get('studio')}`,
      `• Date: ${niceDate}`,
      `• Time: ${d.get('time')}`,
    ];
    const notes = d.get('notes').trim();
    if (notes) lines.push(`• Notes: ${notes}`);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
    toast('Opening WhatsApp…');
  });

  // Prefill service from any "book this" link that targets the form
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-prefill]');
    if (!a) return;
    $('#f-service').value = a.dataset.prefill;
  });
}

/* ---------- studios / map ---------- */
function studios() {
  const tabs = $('[data-studio-tabs]');
  const info = $('[data-studio-info]');
  const map = $('[data-studio-map]');
  if (!tabs) return;

  tabs.innerHTML = STUDIOS.map((s, i) => `<button type="button" class="chip${i === 0 ? ' is-active' : ''}" role="tab" aria-selected="${i === 0}" data-studio="${s.id}">${s.tab}</button>`).join('');
  $('[data-footer-studios]').innerHTML = STUDIOS.map((s) => `<li><a href="#visit" data-studio-link="${s.id}">${s.tab} · ${s.name}</a></li>`).join('');

  const render = (id) => {
    const s = STUDIOS.find((x) => x.id === id);
    const dir = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.mapQuery)}`;
    info.innerHTML = `
      <p class="visit__kicker">${s.kicker}</p>
      <h3 class="visit__name">${s.name}<br /><em>${s.tab}</em></h3>
      <ul class="visit__rows">
        <li>${icon('i-pin')}<div><strong>${s.address}</strong><span>${s.landmark}</span></div></li>
        <li>${icon('i-clock')}<div><strong>Open daily · ${SALON.hours.label}</strong><span>Bridal appointments from 5 AM</span></div></li>
        <li>${icon('i-spark')}<div><strong>At this studio</strong><span>${s.perks}</span></div></li>
      </ul>
      <div class="visit__btns">
        <a class="btn btn--light btn--sm" href="${dir}" target="_blank" rel="noopener">${icon('i-pin')} Get directions</a>
        <a class="btn btn--ghost-light btn--sm" data-call href="#">${icon('i-phone')} Call</a>
        <a class="btn btn--ghost-light btn--sm" data-wa="Hi Saloniaz! I'd like to book at your ${s.tab} (${s.name}) studio." href="#">${icon('i-wa')} WhatsApp</a>
      </div>`;
    hydrateLinks(info);
    const src = `https://www.google.com/maps?q=${encodeURIComponent(s.mapQuery)}&z=15&output=embed`;
    if (mapLive) map.src = src; else map.dataset.src = src;
    map.title = `Map of Saloniaz ${s.tab}`;
    $$('[data-directions]').forEach((a) => { a.href = dir; a.target = '_blank'; a.rel = 'noopener'; });
  };

  const select = (id) => {
    $$('.chip', tabs).forEach((c) => { const on = c.dataset.studio === id; c.classList.toggle('is-active', on); c.setAttribute('aria-selected', String(on)); });
    render(id);
  };
  tabs.addEventListener('click', (e) => { const c = e.target.closest('.chip'); if (c) select(c.dataset.studio); });
  document.addEventListener('click', (e) => { const l = e.target.closest('[data-studio-link]'); if (l) select(l.dataset.studioLink); });

  // Load the map only when it's about to be seen
  let mapLive = !('IntersectionObserver' in window);
  render(STUDIOS[0].id);
  if (!mapLive) {
    const io = new IntersectionObserver((en) => {
      if (!en[0].isIntersecting) return;
      mapLive = true;
      map.src = map.dataset.src;
      io.disconnect();
    }, { rootMargin: '400px' });
    io.observe(map);
  }
}

/* ---------- instagram strip ---------- */
function insta() {
  const el = $('[data-insta]');
  if (!el) return;
  const pics = ['photo-1560066984-138dadb4c035', 'photo-1604654894610-df63bc536371', 'photo-1487412947147-5cebf100ffc2', 'photo-1570172619644-dfd03ed5d881', 'photo-1522337360788-8b13dee7a37e', 'photo-1503951914875-452162b0f3f1'];
  el.innerHTML = pics.map((p) => `<a class="insta__tile media" href="${SALON.instagram}" target="_blank" rel="noopener" aria-label="Saloniaz on Instagram"><img src="${U(p, 500)}" alt="" loading="lazy" /></a>`).join('');
}

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  hydrateStatic();
  openStatus();
  setInterval(openStatus, 60000);
  headerUI();
  services();
  offers();
  packages();
  gallery();
  beforeAfter();
  reviews();
  bookingForm();
  studios();
  insta();
  reveals();
});
