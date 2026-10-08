/* ==========================================================================
   Saloniaz — site script
   Everything the salon will want to edit lives in the config blocks below.
   ========================================================================== */

const SALON = {
  name: 'Saloniaz',
  // Set to false once real reviews & contact details are in (also remove the robots noindex tag in index.html)
  preview: true,
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
  lastSlot: 20, // latest bookable start hour
  timeZone: 'Asia/Kolkata',
};

/* ---------- Photos ----------
   Stock placeholders from Unsplash, referenced by name everywhere below.
   To use your own photos, put files in assets/img/ and change the value, e.g.
   bridalSignature: 'assets/img/signature-bride.jpg'                         */
const IMAGES = {
  salonStyling: 'photo-1560066984-138dadb4c035',
  salonInterior: 'photo-1521590832167-7bcbfaa6381f',
  hairStyling: 'photo-1522337360788-8b13dee7a37e',
  hairColour: 'photo-1562322140-8baeececf3df',
  makeupGlam: 'photo-1487412947147-5cebf100ffc2',
  makeupArtist: 'photo-1516975080664-ed2fc6a32937',
  makeupPortrait: 'photo-1519699047748-de8e457a634e',
  makeupProducts: 'photo-1522335789203-aabd1fc54bc9',
  wedding: 'photo-1519741497674-611481863552',
  facial: 'photo-1570172619644-dfd03ed5d881',
  faceMask: 'photo-1515377905703-c4788e51af15',
  skincare: 'photo-1556228578-8c89e6adf883',
  spa: 'photo-1544161515-4ab6ce6db874',
  spaStones: 'photo-1540555700478-4be289fbecef',
  nails: 'photo-1604654894610-df63bc536371',
  nailsArt: 'photo-1610992015732-2449b76344bc',
  manicure: 'photo-1519014816548-bf5fe059798b',
  barber: 'photo-1503951914875-452162b0f3f1',
  beard: 'photo-1599351431202-1e0f0137899a',
  glossyHair: 'photo-1529626455594-4ff0802cfb7e',
  portraitA: 'photo-1524504388940-b1c1722653e1',
  portraitB: 'photo-1517841905240-472988babdf9',
  portraitC: 'photo-1531123897727-8f129e1688ce',
};
const img = (key, w = 900) => {
  const v = IMAGES[key] || key;
  return v.startsWith('photo-') ? `https://images.unsplash.com/${v}?auto=format&fit=crop&w=${w}&q=78` : v;
};

const STUDIOS = [
  {
    id: 'gurugram', tab: 'Gurugram', kicker: 'Flagship studio', name: 'Golf Course Road', img: 'salonInterior',
    address: 'Ground Floor, Golf Course Road, Sector 54, Gurugram, Haryana 122011',
    landmark: 'Near Sector 54 Chowk Rapid Metro',
    mapQuery: 'Golf Course Road Sector 54 Gurugram',
    perks: 'Valet parking · Bridal suite',
  },
  {
    id: 'south-delhi', tab: 'South Delhi', kicker: 'Atelier', name: 'Greater Kailash II', img: 'salonStyling',
    address: 'M-Block Market, Greater Kailash II, New Delhi, Delhi 110048',
    landmark: 'Opposite the M-Block park',
    mapQuery: 'M Block Market Greater Kailash 2 New Delhi',
    perks: 'Parking · Private colour lounge',
  },
  {
    id: 'noida', tab: 'Noida', kicker: 'Studio', name: 'Sector 18', img: 'hairStyling',
    address: 'Sector 18 Market, Noida, Uttar Pradesh 201301',
    landmark: '3 mins from Sector 18 Metro Station',
    mapQuery: 'Sector 18 Market Noida',
    perks: 'Mall parking · Nail & skin bar',
  },
];

const ARTISTS = ['Aanya Kapoor', 'Rohan Mehra', 'Ishita Arora', 'Meher Sethi'];

// Service menu. No prices on purpose — guests get a personal quote.
const SERVICES = [
  {
    id: 'hair', label: 'Hair', title: 'Cuts &amp; styling', img: 'hairStyling',
    intro: 'Precision cuts designed around your face, texture and routine.',
    items: [
      { name: 'Signature Haircut', desc: 'Consult, wash, cut & blow-dry', dur: '60 min', tag: 'Bestseller' },
      { name: 'Blow-dry & Styling', desc: 'Bouncy, glossy or sleek', dur: '45 min' },
      { name: 'Keratin & Hair Botox', desc: 'Frizz-free for months', dur: '2–4 hrs' },
      { name: 'Hair Spa Rituals', desc: 'Masks matched to your scalp', dur: '60 min' },
      { name: 'Updos & Occasion Hair', desc: 'Buns, braids, red-carpet', dur: '60 min' },
    ],
  },
  {
    id: 'colour', label: 'Colour', title: 'Colour studio', img: 'hairColour',
    intro: 'Dimensional, healthy colour with bond care in every service.',
    items: [
      { name: 'Balayage & Ombré', desc: 'Hand-painted, sun-kissed', dur: '3–4 hrs', tag: 'Most requested' },
      { name: 'Global Colour', desc: 'Rich, even, ammonia-free options', dur: '2 hrs' },
      { name: 'Highlights & Babylights', desc: 'Subtle to bold', dur: '2–3 hrs' },
      { name: 'Colour Correction', desc: 'Brassiness, banding, box-dye', dur: 'By consult' },
      { name: 'Root Touch-up & Grey Blending', desc: 'Soft, natural coverage', dur: '75 min' },
    ],
  },
  {
    id: 'skin', label: 'Skin', title: 'Skin clinic', img: 'facial',
    intro: 'Results-led facials by trained therapists.',
    items: [
      { name: 'HydraFacial', desc: 'Cleanse, extract, hydrate', dur: '60 min', tag: 'Bestseller' },
      { name: 'Signature Glow Facial', desc: 'With lymphatic massage', dur: '75 min' },
      { name: 'Korean Glass-Skin Facial', desc: 'Layered hydration', dur: '75 min' },
      { name: 'Chemical Peel', desc: 'Pigmentation, texture, acne marks', dur: '45 min' },
      { name: 'Waxing & Threading', desc: 'Rica wax, precise brows', dur: '15–60 min' },
    ],
  },
  {
    id: 'nails', label: 'Nails', title: 'Nail bar', img: 'nails',
    intro: 'Long-lasting nails with single-use tools for every guest.',
    items: [
      { name: 'Gel Extensions', desc: 'Your shape, your length', dur: '90 min', tag: 'Trending' },
      { name: 'Nail Art', desc: 'Chrome, French, hand-painted', dur: '30–60 min' },
      { name: 'Luxury Manicure', desc: 'Soak, cuticle care, polish', dur: '45 min' },
      { name: 'Spa Pedicure', desc: 'Scrub, mask, hot towel', dur: '60 min' },
    ],
  },
  {
    id: 'bridal', label: 'Makeup', title: 'Makeup &amp; bridal', img: 'makeupGlam',
    intro: 'Skin-first makeup that photographs beautifully and lasts all night.',
    items: [
      { name: 'Bridal Makeup', desc: 'HD or airbrush, with draping', dur: '3 hrs', tag: 'Signature' },
      { name: 'Engagement & Reception Look', desc: 'Glam for every light', dur: '2 hrs' },
      { name: 'Party Makeup', desc: 'Soft glam, smoky or editorial', dur: '75 min' },
      { name: 'Saree & Dupatta Draping', desc: 'Pleats that stay put', dur: '30 min' },
    ],
  },
  {
    id: 'men', label: 'Men', title: "Men's grooming", img: 'barber',
    intro: 'Sharp cuts, sculpted beards, no fuss.',
    items: [
      { name: "Men's Cut & Style", desc: 'Fades, crops, classic tapers', dur: '45 min', tag: 'Bestseller' },
      { name: 'Beard Sculpting & Hot Towel Shave', desc: 'Line-up, oils & balm', dur: '30 min' },
      { name: "Men's Colour", desc: 'Natural grey camouflage', dur: '45 min' },
      { name: 'De-tan Facial', desc: 'Fresh, even skin', dur: '45 min' },
    ],
  },
  {
    id: 'spa', label: 'Spa', title: 'Spa &amp; body', img: 'spa',
    intro: 'Slow down in our calm, candle-lit rooms.',
    items: [
      { name: 'Japanese Head Spa', desc: 'Scalp cleanse & deep massage', dur: '60 min', tag: 'New' },
      { name: 'Aromatherapy Massage', desc: 'Oils chosen for you', dur: '60–90 min' },
      { name: 'Body Polishing', desc: 'Scrub, wrap & glow', dur: '75 min' },
      { name: 'Foot Reflexology', desc: 'Relief for tired feet', dur: '30 min' },
    ],
  },
];

const PACKAGES = {
  bridal: [
    {
      name: 'The Classic Bride', tier: 'I · Classic', img: 'makeupPortrait',
      desc: 'Timeless and luminous, for intimate ceremonies.',
      list: ['HD bridal makeup', 'Hairstyling & draping', 'Pre-bridal facial'],
      meta: 'In-studio · 1 function',
    },
    {
      name: 'The Signature Bride', tier: 'II · Signature', img: 'makeupGlam', feature: 'Most loved',
      desc: 'Our most-booked bridal experience, led by a senior artist.',
      list: ['Airbrush makeup', 'Complimentary trial', '4-session pre-bridal plan', 'Extensions & touch-up kit'],
      meta: 'Studio or venue · 2 functions',
    },
    {
      name: 'The Couture Wedding', tier: 'III · Couture', img: 'wedding',
      desc: 'A dedicated team for every function, wherever you are.',
      list: ['Looks for every function', '8-week pre-bridal ritual', 'Family & bridesmaids'],
      meta: 'On-location · All functions',
    },
  ],
  rituals: [
    {
      name: 'Pre-Bridal Glow Ritual', tier: '4 weeks', img: 'facial',
      desc: 'Skin and hair that peak on the big day.',
      list: ['Custom facials', 'Hair gloss & spa', 'Body polishing'],
    },
    {
      name: "The Groom's Edit", tier: 'For him', img: 'barber',
      desc: 'Sharp, natural, camera-ready.',
      list: ['Cut & beard sculpt', 'De-tan facial', 'Day-of styling'],
    },
    {
      name: 'Saloniaz Circle', tier: 'Monthly membership', img: 'glossyHair', feature: 'Best value',
      desc: 'Look effortlessly kept, all year.',
      list: ['Monthly blow-dry & facial', 'Priority weekend slots', 'Member-only prices'],
    },
    {
      name: 'Party Ready', tier: 'Occasions', img: 'makeupArtist',
      desc: 'For sangeets, cocktails and every big night.',
      list: ['Party makeup & lashes', 'Blow-dry or updo', 'Express glow facial'],
    },
  ],
};

const RITUAL = [
  { title: 'Consult', text: 'A free one-to-one about your hair, skin and the look you want.', img: 'salonStyling' },
  { title: 'Curate', text: 'A clear plan for time, upkeep and cost before anything begins.', img: 'makeupProducts' },
  { title: 'Craft', text: 'Unrushed, with professional-only products.', img: 'hairColour' },
  { title: 'Care', text: 'Home-care notes and a follow-up a week later.', img: 'skincare' },
];

// Our work — replace with your own photos. size: big | tall | wide | (normal)
const WORK = [
  { cat: 'colour', title: 'Honey balayage', by: 'Rohan · GK II', img: 'hairColour', size: 'big', service: 'Balayage & Ombré' },
  { cat: 'bridal', title: 'Soft glam bride', by: 'Ishita · Gurugram', img: 'makeupGlam', size: 'tall', service: 'Bridal Makeup' },
  { cat: 'nails', title: 'Milky chrome almonds', by: 'Nail bar · Noida', img: 'nails', service: 'Gel Extensions' },
  { cat: 'hair', title: 'Glossy blowout', by: 'Aanya · Gurugram', img: 'glossyHair', service: 'Blow-dry & Styling' },
  { cat: 'skin', title: 'HydraFacial glow', by: 'Meher · GK II', img: 'facial', size: 'wide', service: 'HydraFacial' },
  { cat: 'hair', title: 'Soft layers', by: 'Aanya · Gurugram', img: 'portraitA', size: 'tall', service: 'Signature Haircut' },
  { cat: 'bridal', title: 'Reception glam', by: 'Ishita · On location', img: 'makeupArtist', service: 'Engagement & Reception Look' },
  { cat: 'colour', title: 'Copper melt', by: 'Rohan · Gurugram', img: 'makeupPortrait', service: 'Global Colour' },
  { cat: 'nails', title: 'French with a twist', by: 'Nail bar · Gurugram', img: 'nailsArt', size: 'wide', service: 'Nail Art' },
  { cat: 'skin', title: 'Pre-bridal ritual', by: 'Meher · Noida', img: 'faceMask', service: 'Signature Glow Facial' },
  { cat: 'hair', title: 'Effortless waves', by: 'Studio team', img: 'portraitB', service: 'Blow-dry & Styling' },
  { cat: 'bridal', title: 'Editorial bride', by: 'Ishita · Gurugram', img: 'portraitC', size: 'tall', service: 'Bridal Makeup' },
];

// SAMPLE reviews for layout — replace with real reviews copied from your Google Business Profile
// (or connect a Google reviews widget). Never publish reviews that aren't real.
const REVIEWS = [
  { name: 'Ritika Malhotra', when: '2 weeks ago', service: 'Balayage', text: "The best balayage I've had in Delhi. Rohan actually listened, and the colour is exactly what I wanted: soft, expensive-looking, zero brassiness." },
  { name: 'Sneha Batra', when: '1 month ago', service: 'Bridal makeup', text: 'Ishita did my wedding makeup and I have never felt more like myself. It lasted through the pheras, the photos, and a lot of crying.' },
  { name: 'Arjun Khanna', when: '3 weeks ago', service: 'Haircut & beard', text: 'Finally a salon that is on time. Great cut, proper hot towel shave, and they remembered my preferences on my second visit.' },
  { name: 'Priya Venkat', when: '5 days ago', service: 'HydraFacial', text: 'Spotless studio, single-use kits opened in front of me, and Meher explained everything. My skin is glowing.' },
  { name: 'Kavya Singh', when: '2 months ago', service: 'Gel extensions', text: 'Nails have lasted four weeks without a single lift. The designs are gorgeous. Worth every rupee.' },
  { name: 'Neha Aggarwal', when: '1 week ago', service: 'Keratin', text: 'Warm welcome, kahwa, a relaxing head massage, and hair that now takes 10 minutes to style.' },
];

const AVATAR_COLORS = ['#a8835a', '#7a5c49', '#b06f5a', '#5e6b58', '#8a6f8e', '#4f6b7d'];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const waLink = (msg) => `https://wa.me/${SALON.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`;
const strip = (html) => html.replace(/&amp;/g, '&');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const icon = (id, cls = 'ico') => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
const pic = (key, w, alt = '', extra = '') => `<img src="${img(key, w)}" alt="${esc(alt)}" loading="lazy" ${extra}/>`;

let toastTimer;
function toast(msg) {
  const t = $('[data-toast]');
  t.textContent = msg;
  t.classList.add('is-show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('is-show'), 2400);
}

/* ---------- contact links ---------- */
function hydrateLinks(root = document) {
  $$('[data-wa]', root).forEach((a) => { a.href = waLink(a.dataset.wa); a.target = '_blank'; a.rel = 'noopener'; });
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
  $$('[data-preview-note]').forEach((el) => (el.hidden = !SALON.preview));
}

/* ---------- time in India ---------- */
function indiaParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: SALON.timeZone, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false,
  }).formatToParts(date);
  const get = (t) => Number(parts.find((p) => p.type === t).value);
  return { y: get('year'), mo: get('month'), d: get('day'), h: get('hour') % 24, m: get('minute') };
}
const fmtHour = (h) => `${h % 12 || 12}${h % 1 ? ':30' : ':00'} ${h >= 12 ? 'PM' : 'AM'}`;
const fmtHourShort = (h) => `${h % 12 || 12} ${h >= 12 ? 'PM' : 'AM'}`;

function openStatus() {
  const el = $('[data-open-status]');
  if (!el) return;
  const { h, m } = indiaParts();
  const now = h + m / 60;
  const { open, close } = SALON.hours;
  const text = $('.status__text', el);
  if (now >= open && now < close) {
    text.textContent = close - now <= 1 ? `Open now · closes soon (${fmtHourShort(close)})` : `Open now · until ${fmtHourShort(close)}`;
    el.classList.remove('is-closed');
  } else {
    text.textContent = `Closed now · opens ${now < open ? 'today' : 'tomorrow'} at ${fmtHourShort(open)}`;
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
  $$('a, button', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });

  const announce = $('#announce');
  try { if (localStorage.getItem('sz-announce') === 'off') announce.remove(); } catch (_) {}
  $('.announce__close')?.addEventListener('click', () => {
    announce.remove();
    try { localStorage.setItem('sz-announce', 'off'); } catch (_) {}
  });

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

  const fab = $('.fab');
  setTimeout(() => { fab?.classList.add('show-tip'); setTimeout(() => fab?.classList.remove('show-tip'), 4500); }, 6000);
}

/* ---------- reveal & counters ---------- */
let revealIO;
function observeReveals(root = document) {
  const els = $$('.reveal:not(.is-in), .reviews__summary', root);
  if (!revealIO) { els.forEach((e) => e.classList.add('is-in')); return; }
  els.forEach((e) => revealIO.observe(e));
}
function reveals() {
  if ('IntersectionObserver' in window) {
    revealIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); revealIO.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }
  observeReveals();

  const counters = $$('[data-count]');
  if (!('IntersectionObserver' in window)) return;
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
      const step = (t) => {
        const p = Math.min(1, (t - t0) / 1600);
        el.textContent = fmt(end * (1 - Math.pow(1 - p, 3)));
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
    <button class="cat" role="tab" id="tab-${s.id}" aria-controls="svc-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-id="${s.id}" type="button">
      <span class="cat__img media">${pic(s.img, 400)}</span>
      <span class="cat__label">${s.label}</span>
    </button>`).join('');
  panel.id = 'svc-panel';
  panel.setAttribute('role', 'tabpanel');

  const render = (id) => {
    const s = SERVICES.find((x) => x.id === id);
    panel.setAttribute('aria-labelledby', `tab-${id}`);
    panel.innerHTML = `
      <div class="svc-panel">
        <figure class="svc-panel__media media">
          ${pic(s.img, 1100, `${strip(s.title)} at Saloniaz`)}
          <figcaption><span>${s.items.length} treatments</span><strong>${s.title}</strong></figcaption>
        </figure>
        <div class="svc-panel__body">
          <p class="svc-panel__intro">${s.intro}</p>
          <ul class="svc-list">
            ${s.items.map((it) => `
              <li><button class="svc-item" type="button" data-book data-service="${esc(it.name)}">
                <span class="svc-item__name">${it.name}${it.tag ? `<span class="svc-item__tag">${it.tag}</span>` : ''}</span>
                <span class="svc-item__desc">${it.desc}</span>
                <span class="svc-item__meta"><span class="svc-item__dur">${icon('i-clock')} ${it.dur}</span><span class="svc-item__go">Book</span></span>
              </button></li>`).join('')}
          </ul>
          <p class="svc-panel__foot">Pricing shared on consultation, tailored to your hair &amp; skin.</p>
        </div>
      </div>`;
  };

  const select = (btn, focus) => {
    $$('.cat', tabs).forEach((b) => { b.setAttribute('aria-selected', 'false'); b.tabIndex = -1; });
    btn.setAttribute('aria-selected', 'true');
    btn.tabIndex = 0;
    if (focus) btn.focus();
    const r = tabs.getBoundingClientRect();
    const b = btn.getBoundingClientRect();
    if (b.left < r.left || b.right > r.right) tabs.scrollBy({ left: b.left - r.left - r.width / 2 + b.width / 2, behavior: reducedMotion ? 'auto' : 'smooth' });
    render(btn.dataset.id);
  };

  tabs.addEventListener('click', (e) => { const b = e.target.closest('.cat'); if (b) select(b); });
  tabs.addEventListener('keydown', (e) => {
    const all = $$('.cat', tabs);
    const i = all.indexOf(document.activeElement);
    if (i < 0) return;
    const next = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (next) { e.preventDefault(); select(all[(i + next + all.length) % all.length], true); }
  });
  render(SERVICES[0].id);
}

/* ---------- offers ---------- */
function offers() {
  const now = new Date();
  const last = new Date(now.getFullYear(), now.getMonth() + 1, 0);
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
      toast(`Code ${code} copied`);
      setTimeout(() => { btn.classList.remove('is-copied'); $('.code__hint span', btn).textContent = 'Copy'; }, 2200);
    });
  });
}

/* ---------- packages ---------- */
function packages() {
  const wrap = $('[data-packages]');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(PACKAGES).map(([group, list], gi) => `
    <div class="pkg-group pkg-group--${group}${gi === 0 ? ' is-active' : ''}" data-pkg-group="${group}">
      ${list.map((p) => `
        <article class="pkg${p.feature ? ' pkg--feature' : ''}">
          <div class="pkg__media media">
            ${pic(p.img, 900, p.name)}
            ${p.feature ? `<span class="pkg__flag">${p.feature}</span>` : ''}
            <p class="pkg__tier">${p.tier}</p>
          </div>
          <div class="pkg__body">
            <h3 class="pkg__name">${p.name}</h3>
            <p class="pkg__desc">${p.desc}</p>
            <ul class="pkg__list">${p.list.map((li) => `<li>${li}</li>`).join('')}</ul>
            ${p.meta ? `<p class="pkg__meta">${icon('i-pin')} ${p.meta}</p>` : ''}
            <button class="btn ${p.feature ? 'btn--light' : 'btn--outline'} btn--block" type="button" data-book data-service="${esc(p.name)}">${group === 'bridal' ? 'Request a quote' : 'Book this'}</button>
          </div>
        </article>`).join('')}
    </div>`).join('');

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

/* ---------- ritual ---------- */
function ritual() {
  const el = $('[data-steps]');
  if (!el) return;
  el.innerHTML = RITUAL.map((r, i) => `
    <li class="step reveal" style="--d:${i * 0.08}s">
      <div class="step__img media">${pic(r.img, 700, r.title)}<span class="step__num">0${i + 1}</span></div>
      <h3>${r.title}</h3>
      <p>${r.text}</p>
    </li>`).join('');
}

/* ---------- gallery + lightbox ---------- */
function gallery() {
  const wrap = $('[data-gallery]');
  if (!wrap) return;
  let current = [];
  const render = (filter) => {
    current = WORK.filter((w) => filter === 'all' || w.cat === filter);
    wrap.innerHTML = current.map((w, i) => `
      <button class="shot media${w.size && filter === 'all' ? ` shot--${w.size}` : ''}" type="button" data-i="${i}" style="animation-delay:${i * 0.04}s" aria-label="View ${esc(w.title)}">
        ${pic(w.img, w.size === 'big' ? 1200 : 800, `${w.title} by ${w.by}`)}
        <span class="shot__cap"><span><strong>${w.title}</strong><small>${w.by}</small></span>${icon('i-arrow-ne')}</span>
      </button>`).join('');
    wrap.classList.toggle('bento--filtered', filter !== 'all');
  };
  render('all');

  $('[data-work-filters]').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip', e.currentTarget).forEach((c) => c.classList.toggle('is-active', c === chip));
    render(chip.dataset.filter);
  });

  const lb = $('[data-lightbox]');
  const image = $('[data-lb-img]');
  const cap = $('[data-lb-cap]');
  const bookBtn = $('[data-lb-book]');
  let idx = 0;
  let lastFocus;
  const show = (i) => {
    idx = (i + current.length) % current.length;
    const w = current[idx];
    image.parentElement.classList.remove('is-fallback');
    image.src = img(w.img, 1600);
    image.alt = `${w.title} by ${w.by}`;
    cap.innerHTML = `${w.title}<small>${w.by}</small>`;
    bookBtn.dataset.service = w.service;
  };
  const open = (i) => { lastFocus = document.activeElement; show(i); lb.hidden = false; document.body.classList.add('no-scroll'); $('[data-lb-close]').focus(); };
  const close = () => { lb.hidden = true; document.body.classList.remove('no-scroll'); lastFocus?.focus(); };

  wrap.addEventListener('click', (e) => { const s = e.target.closest('.shot'); if (s) open(Number(s.dataset.i)); });
  $('[data-lb-close]').addEventListener('click', close);
  $('[data-lb-prev]').addEventListener('click', () => show(idx - 1));
  $('[data-lb-next]').addEventListener('click', () => show(idx + 1));
  bookBtn.addEventListener('click', () => { close(); Booking.open({ service: bookBtn.dataset.service }); });
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

  if (!reducedMotion) {
    let paused = false;
    ['pointerenter', 'focusin', 'touchstart'].forEach((ev) => track.addEventListener(ev, () => (paused = true), { passive: true }));
    track.addEventListener('pointerleave', () => (paused = false));
    setInterval(() => {
      const r = track.getBoundingClientRect();
      if (!paused && !document.body.classList.contains('no-scroll') && r.top < innerHeight && r.bottom > 0) by(1);
    }, 5500);
  }
}

/* ==========================================================================
   Booking sheet — the single path to WhatsApp.
   Any element with [data-book] opens it. Optional pre-fills:
   data-service="Exact service or package name"  data-offer="CODE"
   data-artist="Artist name"  data-studio="studio id"
   ========================================================================== */
const Booking = (() => {
  const CATS = [
    ...SERVICES.map((s) => ({ id: s.id, label: s.label, img: s.img, items: s.items.map((i) => i.name) })),
    { id: 'packages', label: 'Packages', img: 'makeupPortrait', items: [...PACKAGES.bridal, ...PACKAGES.rituals].map((p) => p.name) },
  ];
  const catOf = (name) => CATS.find((c) => c.items.includes(name));

  const state = { services: [], cat: CATS[0].id, studio: STUDIOS[0].id, day: null, time: null };
  let sheet, form, lastFocus, days = [], sent = false;

  const els = {};

  function buildDays() {
    const { y, mo, d, h, m } = indiaParts();
    const base = Date.UTC(y, mo - 1, d);
    const nowH = h + m / 60;
    const list = [];
    for (let i = 0; i < 14; i++) {
      const dt = new Date(base + i * 864e5);
      const label = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : dt.toLocaleDateString('en-IN', { weekday: 'short', timeZone: 'UTC' });
      list.push({
        key: dt.toISOString().slice(0, 10),
        label,
        num: dt.getUTCDate(),
        mon: dt.toLocaleDateString('en-IN', { month: 'short', timeZone: 'UTC' }),
        long: dt.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }),
        minHour: i === 0 ? Math.ceil(nowH + 1) : SALON.hours.open,
      });
    }
    // Drop today if no slots are left
    return list.filter((x) => x.minHour <= SALON.lastSlot);
  }

  function slotsFor(day) {
    const out = [];
    for (let hr = SALON.hours.open; hr <= SALON.lastSlot; hr++) out.push({ h: hr, disabled: hr < day.minHour });
    return out;
  }

  function renderCats() {
    els.cats.innerHTML = CATS.map((c) => {
      const n = state.services.filter((s) => c.items.includes(s)).length;
      return `<button type="button" class="bk-cat" role="tab" aria-selected="${c.id === state.cat}" data-cat="${c.id}">
        <span class="bk-cat__img media">${pic(c.img, 240)}</span>
        <span class="bk-cat__label">${c.label}</span>
        ${n ? `<span class="bk-cat__count">${n}</span>` : ''}
      </button>`;
    }).join('');
  }

  function renderServices() {
    const c = CATS.find((x) => x.id === state.cat);
    els.services.innerHTML = c.items.map((name) => {
      const on = state.services.includes(name);
      return `<label class="bk-opt${on ? ' is-on' : ''}"><input type="checkbox" value="${esc(name)}" ${on ? 'checked' : ''} /><span>${on ? icon('i-check') : icon('i-plus')}${esc(name)}</span></label>`;
    }).join('');
  }

  function renderPicked() {
    els.picked.innerHTML = state.services.length
      ? `<span class="bk__picked-label">Selected</span>${state.services.map((s) => `<button type="button" class="bk-pill" data-remove="${esc(s)}" aria-label="Remove ${esc(s)}">${esc(s)} ${icon('i-close')}</button>`).join('')}`
      : '';
  }

  function renderStudios() {
    els.studios.innerHTML = STUDIOS.map((s) => `
      <label class="bk-studio${s.id === state.studio ? ' is-on' : ''}">
        <input type="radio" name="studio" value="${s.id}" ${s.id === state.studio ? 'checked' : ''} />
        <span class="bk-studio__img media">${pic(s.img, 300)}</span>
        <span class="bk-studio__txt"><strong>${s.tab}</strong><small>${s.name}</small></span>
      </label>`).join('');
  }

  function renderDays() {
    els.days.innerHTML = days.map((d) => `
      <label class="bk-day${d.key === state.day ? ' is-on' : ''}">
        <input type="radio" name="day" value="${d.key}" ${d.key === state.day ? 'checked' : ''} />
        <span><small>${d.label}</small><strong>${d.num}</strong><small>${d.mon}</small></span>
      </label>`).join('');
  }

  function renderTimes() {
    const day = days.find((d) => d.key === state.day);
    if (!day) { els.times.innerHTML = ''; return; }
    const slots = slotsFor(day);
    if (state.time !== null && slots.find((s) => s.h === state.time)?.disabled) state.time = null;
    const group = (label, from, to) => {
      const g = slots.filter((s) => s.h >= from && s.h < to);
      if (!g.length) return '';
      return `<div class="bk-times__group"><span class="bk-times__label">${label}</span><div class="bk-times__row">${g.map((s) => `
        <label class="bk-time${s.h === state.time ? ' is-on' : ''}${s.disabled ? ' is-off' : ''}">
          <input type="radio" name="time" value="${s.h}" ${s.h === state.time ? 'checked' : ''} ${s.disabled ? 'disabled' : ''} />
          <span>${fmtHour(s.h)}</span>
        </label>`).join('')}</div></div>`;
    };
    els.times.innerHTML = group('Morning', 0, 12) + group('Afternoon', 12, 17) + group('Evening', 17, 24);
  }

  function renderSummary() {
    const studio = STUDIOS.find((s) => s.id === state.studio);
    const day = days.find((d) => d.key === state.day);
    const n = state.services.length;
    const what = n === 0 ? 'Nothing selected yet' : n === 1 ? state.services[0] : `${state.services[0]} + ${n - 1} more`;
    const when = [day ? day.long : null, state.time !== null ? fmtHour(state.time) : null, studio.tab].filter(Boolean).join(' · ');
    els.summary.innerHTML = `<strong>${esc(what)}</strong><span>${n ? esc(when) : 'Pick a service to begin'}</span>`;
  }

  function renderAll() {
    renderCats(); renderServices(); renderPicked(); renderStudios(); renderDays(); renderTimes(); renderSummary();
  }

  function toggleService(name, on) {
    const has = state.services.includes(name);
    if (on && !has) state.services.push(name);
    if (!on && has) state.services = state.services.filter((s) => s !== name);
    $('[data-step="services"]', form).classList.remove('has-error');
    renderCats(); renderServices(); renderPicked(); renderSummary();
  }

  function message() {
    const d = new FormData(form);
    const studio = STUDIOS.find((s) => s.id === state.studio);
    const day = days.find((x) => x.key === state.day);
    const lines = [
      `Hi ${SALON.name}! I'd like to book an appointment.`,
      '',
      `*Services:* ${state.services.join(', ')}`,
      `*Studio:* ${studio.tab} (${studio.name})`,
      `*Date:* ${day.long}`,
      `*Time:* ${fmtHour(state.time)}`,
    ];
    const artist = d.get('artist');
    if (artist) lines.push(`*Artist:* ${artist}`);
    const offer = String(d.get('offer') || '').trim().toUpperCase();
    if (offer) lines.push(`*Offer code:* ${offer}`);
    lines.push(`*Name:* ${String(d.get('name')).trim()}`);
    const notes = String(d.get('notes') || '').trim();
    if (notes) lines.push(`*Notes:* ${notes}`);
    lines.push('', 'Please confirm availability. Thank you!');
    return lines.join('\n');
  }

  function validate() {
    const name = form.elements.name.value.trim();
    const checks = [
      ['services', state.services.length > 0],
      ['when', !!state.day && state.time !== null],
      ['details', !!name],
    ];
    let first = null;
    checks.forEach(([step, ok]) => {
      const el = $(`[data-step="${step}"]`, form);
      el.classList.toggle('has-error', !ok);
      if (!ok && !first) first = el;
    });
    if (first) {
      first.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
      if (first.dataset.step === 'details') form.elements.name.focus({ preventScroll: true });
      return false;
    }
    return true;
  }

  function trapFocus(e) {
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    const f = $$('button:not([disabled]), [href], input:not([disabled]), select, textarea', sheet.querySelector('.sheet__panel'))
      .filter((x) => x.offsetParent !== null && !x.closest('[hidden]'));
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function open(opts = {}) {
    lastFocus = document.activeElement;
    days = buildDays();
    if (!days.find((d) => d.key === state.day)) state.day = days[0]?.key || null;
    $('[data-bk-done]', form).hidden = true;
    form.classList.remove('is-done');
    if (sent) {
      // Fresh start after a booking was sent
      sent = false;
      Object.assign(state, { services: [], cat: CATS[0].id, time: null });
      ['offer', 'notes', 'artist'].forEach((n) => (form.elements[n].value = ''));
    }
    $$('.has-error', form).forEach((e) => e.classList.remove('has-error'));

    if (opts.service) {
      const c = catOf(opts.service);
      if (c) { state.cat = c.id; if (!state.services.includes(opts.service)) state.services.push(opts.service); }
    }
    if (opts.offer) form.elements.offer.value = opts.offer;
    if (opts.artist) form.elements.artist.value = opts.artist;
    if (opts.studio && STUDIOS.find((s) => s.id === opts.studio)) state.studio = opts.studio;
    const c = CATS.find((x) => x.id === state.cat);
    $('[data-sheet-img]').src = img(c.img, 900);
    try { if (!form.elements.name.value) form.elements.name.value = localStorage.getItem('sz-name') || ''; } catch (_) {}

    renderAll();
    sheet.hidden = false;
    document.body.classList.add('no-scroll');
    requestAnimationFrame(() => {
      sheet.classList.add('is-open');
      const on = $('.bk-cat[aria-selected="true"]', els.cats);
      if (on) els.cats.scrollLeft = on.offsetLeft - els.cats.clientWidth / 2 + on.offsetWidth / 2;
    });
    els.body.scrollTop = 0;
    setTimeout(() => (opts.service ? $('[data-step="when"]', form) : els.cats).querySelector('input:checked, button, input')?.focus({ preventScroll: true }), 50);
    document.addEventListener('keydown', trapFocus);
  }

  function close() {
    sheet.classList.remove('is-open');
    document.removeEventListener('keydown', trapFocus);
    document.body.classList.remove('no-scroll');
    setTimeout(() => { sheet.hidden = true; }, reducedMotion ? 0 : 350);
    lastFocus?.focus?.();
  }

  function init() {
    sheet = $('[data-sheet]');
    form = $('#booking');
    if (!sheet) return;
    Object.assign(els, {
      body: $('[data-bk-body]', form), cats: $('[data-bk-cats]', form), services: $('[data-bk-services]', form),
      picked: $('[data-bk-picked]', form), studios: $('[data-bk-studios]', form), days: $('[data-bk-days]', form),
      times: $('[data-bk-times]', form), summary: $('[data-bk-summary]', form),
    });
    $('[data-bk-artist]', form).innerHTML = `<option value="">Any available artist</option>${ARTISTS.map((a) => `<option>${a}</option>`).join('')}`;

    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-book]');
      if (!t) return;
      e.preventDefault();
      open({ service: t.dataset.service, offer: t.dataset.offer, artist: t.dataset.artist, studio: t.dataset.studio });
    });
    $$('[data-sheet-close]', sheet).forEach((b) => b.addEventListener('click', close));

    els.cats.addEventListener('click', (e) => {
      const b = e.target.closest('.bk-cat');
      if (!b) return;
      state.cat = b.dataset.cat;
      $('[data-sheet-img]').src = img(CATS.find((c) => c.id === state.cat).img, 900);
      renderCats(); renderServices();
    });
    els.services.addEventListener('change', (e) => toggleService(e.target.value, e.target.checked));
    els.picked.addEventListener('click', (e) => { const b = e.target.closest('[data-remove]'); if (b) toggleService(b.dataset.remove, false); });
    els.studios.addEventListener('change', (e) => { state.studio = e.target.value; renderStudios(); renderSummary(); });
    els.days.addEventListener('change', (e) => { state.day = e.target.value; renderDays(); renderTimes(); renderSummary(); });
    els.times.addEventListener('change', (e) => {
      state.time = Number(e.target.value);
      $('[data-step="when"]', form).classList.remove('has-error');
      renderTimes(); renderSummary();
    });
    form.elements.name.addEventListener('input', () => $('[data-step="details"]', form).classList.remove('has-error'));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) return;
      const url = waLink(message());
      try { localStorage.setItem('sz-name', form.elements.name.value.trim()); } catch (_) {}
      window.open(url, '_blank', 'noopener');
      $('[data-bk-resend]', form).href = url;
      $('[data-bk-done]', form).hidden = false;
      form.classList.add('is-done');
      sent = true;
    });
  }

  return { init, open, close };
})();

/* ---------- studios / map ---------- */
function studios() {
  const tabs = $('[data-studio-tabs]');
  const info = $('[data-studio-info]');
  const map = $('[data-studio-map]');
  if (!tabs) return;

  tabs.innerHTML = STUDIOS.map((s, i) => `<button type="button" class="chip${i === 0 ? ' is-active' : ''}" role="tab" aria-selected="${i === 0}" data-studio-tab="${s.id}">${s.tab}</button>`).join('');
  $('[data-footer-studios]').innerHTML = STUDIOS.map((s) => `<li><a href="#visit" data-studio-link="${s.id}">${s.tab} · ${s.name}</a></li>`).join('');

  let mapLive = !('IntersectionObserver' in window);
  const render = (id) => {
    const s = STUDIOS.find((x) => x.id === id);
    const dir = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.mapQuery)}`;
    info.innerHTML = `
      <div class="visit__img media">${pic(s.img, 900, `Saloniaz ${s.tab} studio`)}<p class="visit__kicker">${s.kicker}</p></div>
      <div class="visit__body">
        <h3 class="visit__name">${s.name} <em>${s.tab}</em></h3>
        <ul class="visit__rows">
          <li>${icon('i-pin')}<div><strong>${s.address}</strong><span>${s.landmark}</span></div></li>
          <li>${icon('i-clock')}<div><strong>Open daily · ${SALON.hours.label}</strong><span>${s.perks}</span></div></li>
        </ul>
        <div class="visit__btns">
          <button class="btn btn--light btn--sm" type="button" data-book data-studio="${s.id}">${icon('i-calendar')} Book here</button>
          <a class="btn btn--ghost-light btn--sm" href="${dir}" target="_blank" rel="noopener">${icon('i-pin')} Directions</a>
          <a class="btn btn--ghost-light btn--sm" data-call href="#">${icon('i-phone')} Call</a>
        </div>
      </div>`;
    hydrateLinks(info);
    const src = `https://www.google.com/maps?q=${encodeURIComponent(s.mapQuery)}&z=15&output=embed`;
    if (mapLive) map.src = src; else map.dataset.src = src;
    map.title = `Map of Saloniaz ${s.tab}`;
    $$('[data-directions]').forEach((a) => { a.href = dir; a.target = '_blank'; a.rel = 'noopener'; });
  };

  const select = (id) => {
    $$('.chip', tabs).forEach((c) => { const on = c.dataset.studioTab === id; c.classList.toggle('is-active', on); c.setAttribute('aria-selected', String(on)); });
    render(id);
  };
  tabs.addEventListener('click', (e) => { const c = e.target.closest('.chip'); if (c) select(c.dataset.studioTab); });
  document.addEventListener('click', (e) => { const l = e.target.closest('[data-studio-link]'); if (l) select(l.dataset.studioLink); });

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
  const pics = ['salonStyling', 'nails', 'makeupGlam', 'facial', 'hairStyling', 'barber'];
  el.innerHTML = pics.map((p) => `<a class="insta__tile media" href="${SALON.instagram}" target="_blank" rel="noopener" aria-label="Saloniaz on Instagram">${pic(p, 500)}</a>`).join('');
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
  ritual();
  gallery();
  beforeAfter();
  reviews();
  Booking.init();
  studios();
  insta();
  reveals();
  if (location.hash === '#book-now') Booking.open();
});
