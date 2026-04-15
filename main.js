/* ============================================
   DEV FURNITURE WORLD – MAIN JAVASCRIPT
   Enhanced: Real images, Enquire Now buttons,
   WhatsApp +91 7069269665
   ============================================ */

const WA_NUMBER = '917069269665';
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

// ─── PRODUCT DATA with real Unsplash images ───
const PRODUCTS = [
  // SOFAS
  {
    id: 1, cat: 'sofa', name: 'Royal Chesterfield Sofa',
    desc: 'Classic 3-seater with deep button tufting, velvet fabric. Available in 8 colors.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    featured: true
  },
  {
    id: 2, cat: 'sofa', name: 'Modern L-Shaped Sofa',
    desc: 'Spacious sectional sofa with chaise lounge. Perfect for large living rooms.',
    img: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80',
    featured: true
  },
  {
    id: 3, cat: 'sofa', name: 'Compact 2-Seater Love Seat',
    desc: 'Space-saving design with premium fabric. Ideal for small apartments.',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
    featured: false
  },
  {
    id: 4, cat: 'sofa', name: 'Recliner Sofa Set (3+1+1)',
    desc: 'Full recliner set with USB charging ports. Maximum comfort guaranteed.',
    img: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&q=80',
    featured: false
  },
  {
    id: 5, cat: 'sofa', name: 'Scandinavian Wooden Sofa',
    desc: 'Minimalist design with sheesham wood frame and soft linen cushions.',
    img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
    featured: false
  },
  {
    id: 6, cat: 'sofa', name: 'Ottoman Sofa with Storage',
    desc: 'Smart design with hidden storage beneath the seat. Leatherette finish.',
    img: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&q=80',
    featured: false
  },
  // BEDS
  {
    id: 7, cat: 'bed', name: 'King Size Platform Bed',
    desc: 'Low-profile king platform bed with solid wood frame and LED under-lighting.',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    featured: true
  },
  {
    id: 8, cat: 'bed', name: 'Queen Upholstered Bed',
    desc: 'Padded headboard with diamond tufting. Comes with orthopedic mattress support.',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
    featured: true
  },
  {
    id: 9, cat: 'bed', name: 'Hydraulic Storage Bed',
    desc: 'Queen size with massive under-bed hydraulic storage. Perfect for small rooms.',
    img: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80',
    featured: false
  },
  {
    id: 10, cat: 'bed', name: 'Bunk Bed with Desk',
    desc: 'Space-saving bunk bed with study desk below. Ideal for children\'s rooms.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    featured: false
  },
  {
    id: 11, cat: 'bed', name: 'Luxury Poster Bed',
    desc: 'Royal four-poster king bed in polished sheesham wood. Statement furniture.',
    img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80',
    featured: false
  },
  {
    id: 12, cat: 'bed', name: 'Floating Wall Bed',
    desc: 'Modern wall-mounted bed with side shelves. Saves floor space beautifully.',
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80',
    featured: false
  },
  // DINING
  {
    id: 13, cat: 'dining', name: '6-Seater Dining Set',
    desc: 'Solid sheesham wood table with 6 cushioned chairs. Classic and durable.',
    img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80',
    featured: true
  },
  {
    id: 14, cat: 'dining', name: 'Glass Top Dining Table',
    desc: '4-seater with tempered glass top and powder-coated metal legs. Modern style.',
    img: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&q=80',
    featured: true
  },
  {
    id: 15, cat: 'dining', name: '8-Seater Extendable Table',
    desc: 'Expands from 6 to 8 seats. Perfect for family gatherings. Oak finish.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    featured: false
  },
  {
    id: 16, cat: 'dining', name: 'Round Dining Table Set',
    desc: '4-seater round table. No sharp corners – great for families with kids.',
    img: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80',
    featured: false
  },
  {
    id: 17, cat: 'dining', name: 'Bar Height Dining Set',
    desc: 'Counter-height 4-seater with bar stools. Trendy café-style dining.',
    img: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&q=80',
    featured: false
  },
  {
    id: 18, cat: 'dining', name: 'Marble Top Dining Table',
    desc: 'Luxurious Italian marble finish with brass-plated legs. 6-seater.',
    img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80',
    featured: false
  },
  // OFFICE
  {
    id: 19, cat: 'office', name: 'Executive Director Desk',
    desc: 'Large L-shaped executive desk with cable management and lockable drawers.',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    featured: true
  },
  {
    id: 20, cat: 'office', name: 'Ergonomic Office Chair',
    desc: 'Mesh back, adjustable lumbar, armrests, and headrest. 8-hour comfort guarantee.',
    img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80',
    featured: true
  },
  {
    id: 21, cat: 'office', name: 'Office Workstation Cluster',
    desc: '4-seat cluster workstation with privacy screens. Ideal for open-plan offices.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    featured: false
  },
  {
    id: 22, cat: 'office', name: 'Standing Desk (Height Adjustable)',
    desc: 'Electric height-adjustable desk. Sit-to-stand with memory presets.',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    featured: false
  },
  {
    id: 23, cat: 'office', name: 'Conference Room Table',
    desc: '12-seater oval conference table in dark walnut. Professional appearance.',
    img: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&q=80',
    featured: false
  },
  {
    id: 24, cat: 'office', name: 'Bookcase & Storage Combo',
    desc: 'Modular 5-tier bookcase with file drawers below. Home and office use.',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
    featured: false
  }
];

function getCatLabel(cat) {
  const labels = { sofa: 'Sofa', bed: 'Bed', dining: 'Dining Table', office: 'Office Furniture' };
  return labels[cat] || cat;
}

// ─── PRODUCT CARD HTML – Enquire Now button only ───
function createProductCard(product) {
  const waMsg = encodeURIComponent(`Hello Dev Furniture World, I am interested in ${product.name}. Please share details and pricing.`);
  const waLink = `${WA_BASE}?text=${waMsg}`;
  return `
    <div class="product-card fade-in" data-cat="${product.cat}">
      <div class="product-img" onclick="openLightbox(${product.id})">
        <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="img-fallback" style="display:none">${getCatLabel(product.cat)}</div>
        <div class="img-overlay"><span>🔍 View</span></div>
      </div>
      <div class="product-body">
        <span class="product-cat">${getCatLabel(product.cat)}</span>
        <div class="product-name">${product.name}</div>
        <p class="product-desc">${product.desc}</p>
        <a href="${waLink}" class="btn btn-enquire btn-full" target="_blank">
          Enquire Now
        </a>
      </div>
    </div>`;
}

// ─── RENDER PRODUCTS ───
function renderProducts(filter = 'all', containerId = 'productsGrid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  let filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  if (containerId === 'featuredGrid') filtered = PRODUCTS.filter(p => p.featured).slice(0, 6);
  grid.innerHTML = filtered.map(createProductCard).join('');
  setTimeout(() => {
    grid.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  }, 50);
}

// ─── FILTER BUTTONS ───
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  let activeFilter = 'all';
  if (urlCat) {
    activeFilter = urlCat;
    btns.forEach(b => b.classList.toggle('active', b.dataset.filter === urlCat));
  }
  renderProducts(activeFilter, 'productsGrid');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter, 'productsGrid');
    });
  });
}

// ─── LIGHTBOX ───
function openLightbox(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  document.getElementById('lightboxName').textContent = product.name;
  document.getElementById('lightboxDesc').textContent = product.desc;
  const imgEl = document.getElementById('lightboxImg');
  imgEl.innerHTML = `<img src="${product.img}" alt="${product.name}" style="width:100%;height:220px;object-fit:cover;border-radius:12px;" />`;
  const waMsg = encodeURIComponent(`Hello Dev Furniture World, I am interested in ${product.name}. Please share details and pricing.`);
  document.getElementById('lightboxWA').href = `${WA_BASE}?text=${waMsg}`;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
}
function initLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const closeBtn = document.getElementById('lightboxClose');
  if (overlay) overlay.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}
window.openLightbox = openLightbox;

// ─── ANIMATED COUNTERS ───
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current).toLocaleString();
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ─── SCROLL EFFECTS ───
function initScrollEffects() {
  const header = document.getElementById('header');
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 60);
    if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
  if (scrollBtn) scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ─── HAMBURGER MENU ───
function initMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ─── CONTACT FORM → WHATSAPP ───
function initContactForm() {
  const sendBtn = document.getElementById('sendWA');
  if (!sendBtn) return;
  sendBtn.addEventListener('click', () => {
    const name = document.getElementById('name')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const interest = document.getElementById('interest')?.value;
    const message = document.getElementById('message')?.value.trim();
    if (!name || !phone) { alert('Please fill in your name and phone number.'); return; }
    let waText = `Hello Dev Furniture World!\n\nName: ${name}\nPhone: ${phone}`;
    if (interest) waText += `\nInterested In: ${interest}`;
    if (message) waText += `\nMessage: ${message}`;
    window.open(`${WA_BASE}?text=${encodeURIComponent(waText)}`, '_blank');
  });
}

// ─── FADE-IN ELEMENTS ───
function initFadeElements() {
  const items = document.querySelectorAll('.why-card, .testi-card, .cat-card, .exp-card, .team-card, .service-block, .step, .contact-method');
  items.forEach(el => el.classList.add('fade-in'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initScrollEffects();
  initCounters();
  initContactForm();
  initFadeElements();
  if (document.getElementById('featuredGrid')) renderProducts('all', 'featuredGrid');
  if (document.getElementById('productsGrid')) { initFilters(); initLightbox(); }
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  if (urlCat && document.getElementById('productsGrid')) renderProducts(urlCat, 'productsGrid');
});
