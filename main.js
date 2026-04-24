// ============================================================
//  main.js — reads CONFIG, builds the page
// ============================================================

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {

  const s = document.documentElement.style;
  s.setProperty('--primary',   CONFIG.theme.primary);
  s.setProperty('--secondary', CONFIG.theme.secondary);
  s.setProperty('--accent',    CONFIG.theme.accent);
  s.setProperty('--dark',      CONFIG.theme.dark);
  s.setProperty('--cream',     CONFIG.theme.cream);
  s.setProperty('--text',      CONFIG.theme.text);
  s.setProperty('--muted',     CONFIG.theme.muted);
  s.setProperty('--border',    CONFIG.theme.border);

  document.querySelectorAll('[data-name]').forEach(el => el.textContent = CONFIG.restaurant.name);
  document.querySelectorAll('[data-tagline]').forEach(el => el.textContent = CONFIG.restaurant.tagline);
  document.title = CONFIG.restaurant.name + ' · Café & Restaurant';

  const heroImg = document.getElementById('hero-bg-img');
  if (CONFIG.images.hero && heroImg) { heroImg.src = CONFIG.images.hero; }

  buildHeroActions();
  buildMenu();
  buildAbout();
  buildContact();

  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

  document.getElementById('hamburger').addEventListener('click', () =>
    document.getElementById('mobile-menu').classList.add('open'));
  document.getElementById('mobile-close').addEventListener('click', () =>
    document.getElementById('mobile-menu').classList.remove('open'));
  document.querySelectorAll('#mobile-menu a').forEach(a =>
    a.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open')));

  initReveal();
});

// ---- Hero buttons ----
function buildHeroActions() {
  const el = document.getElementById('hero-actions');
  CONFIG.locations.forEach(loc => {
    const a = document.createElement('a');
    a.href = `tel:${loc.phone.replace(/\s/g, '')}`;
    a.className = 'btn btn-phone';
    a.innerHTML = `📞 <strong>${loc.name}</strong> &nbsp;${loc.phone}`;
    el.appendChild(a);
  });
  const menu = document.createElement('a');
  menu.href = '#menu';
  menu.className = 'btn btn-primary';
  menu.innerHTML = 'View Menu &nbsp;→';
  el.appendChild(menu);
}

// ---- Menu ----
function buildMenu() {
  const tabsEl  = document.getElementById('menu-tabs');
  const dotsEl  = document.getElementById('menu-dots');
  const total   = CONFIG.menu.length;

  // Build tabs + dots
  CONFIG.menu.forEach((cat, i) => {
    // Tab
    const tab = document.createElement('div');
    tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
    tab.textContent = cat.category;
    tab.dataset.index = i;
    tab.addEventListener('click', () => switchTab(i));
    tabsEl.appendChild(tab);

    // Dot
    const dot = document.createElement('div');
    dot.className = 'menu-dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    dot.addEventListener('click', () => switchTab(i));
    dotsEl.appendChild(dot);
  });

  // Arrow buttons
  const prevBtn = document.getElementById('arrow-prev');
  const nextBtn = document.getElementById('arrow-next');
  prevBtn.addEventListener('click', () => switchTab(Math.max(0, currentIndex - 1)));
  nextBtn.addEventListener('click', () => switchTab(Math.min(total - 1, currentIndex + 1)));

  // Touch swipe on menu panel
  const panel = document.getElementById('menu-panel');
  let touchStartX = 0;
  let touchStartY = 0;
  panel.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  panel.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    // Only trigger if horizontal swipe is dominant and long enough
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) switchTab(Math.min(total - 1, currentIndex + 1)); // swipe left → next
      else         switchTab(Math.max(0, currentIndex - 1));          // swipe right → prev
    }
  }, { passive: true });

  renderItems(0);
}

function switchTab(index) {
  currentIndex = index;
  const total = CONFIG.menu.length;

  // Tabs
  document.querySelectorAll('.menu-tab').forEach((t, i) =>
    t.classList.toggle('active', i === index));

  // Dots
  document.querySelectorAll('.menu-dot').forEach((d, i) =>
    d.classList.toggle('active', i === index));

  // Arrows
  const prevBtn = document.getElementById('arrow-prev');
  const nextBtn = document.getElementById('arrow-next');
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === total - 1;

  // Scroll active tab into view (mobile)
  const activeTab = document.querySelector('.menu-tab.active');
  if (activeTab) {
    activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  renderItems(index);
}

function renderItems(index) {
  const cat     = CONFIG.menu[index];
  const coverEl = document.getElementById('menu-cover');
  const itemsEl = document.getElementById('menu-items');
  const titleEl = document.getElementById('menu-panel-title');
  const countEl = document.getElementById('menu-panel-count');

  if (cat.cover) {
    coverEl.src = cat.cover;
    coverEl.alt = cat.category;
    coverEl.style.display = 'block';
  } else {
    coverEl.style.display = 'none';
  }

  if (titleEl) titleEl.textContent = cat.category;
  if (countEl) countEl.textContent = cat.items.length + ' items';

  itemsEl.style.animation = 'none';
  itemsEl.offsetHeight; // reflow to restart animation
  itemsEl.style.animation = '';

  itemsEl.innerHTML = cat.items.map(item => `
    <div class="menu-item">
      <div class="item-name">${item.name}</div>
      <div class="item-desc">${item.description}</div>
    </div>
  `).join('');
}

// ---- About ----
function buildAbout() {
  const img = document.getElementById('about-img');
  if (CONFIG.images.about && img) { img.src = CONFIG.images.about; img.alt = CONFIG.restaurant.name; }

  document.getElementById('about-text').textContent = CONFIG.restaurant.about;

  const statsEl = document.getElementById('about-stats');
  CONFIG.stats.forEach(stat => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="stat-number">${stat.number}</div><div class="stat-label">${stat.label}</div>`;
    statsEl.appendChild(div);
  });

  const igEl = document.getElementById('about-ig');
  if (igEl && CONFIG.social.instagram) {
    igEl.href = CONFIG.social.instagram;
    igEl.style.display = 'inline-flex';
  }
}

// ---- Contact ----
function buildContact() {
  const locGrid = document.getElementById('locations-grid');

  CONFIG.locations.forEach(loc => {
    const card = document.createElement('div');
    card.className = 'location-card reveal';
    card.innerHTML = `
      <div class="location-card-header">
        <div class="location-card-name">${loc.name} Location</div>
        <div class="location-tag">${loc.name}</div>
      </div>
      ${loc.mapEmbed ? `
      <div class="location-map-wrap">
        <iframe src="${loc.mapEmbed}" class="location-map"
          allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map for ${loc.name} location">
        </iframe>
      </div>` : ''}
      <div class="location-card-body">
        <div class="location-detail">
          <span class="location-detail-icon">📍</span>
          <div>
            <div class="location-detail-label">Address</div>
            <div class="location-detail-value">${loc.address}</div>
          </div>
        </div>
        <div class="location-detail">
          <span class="location-detail-icon">📞</span>
          <div>
            <div class="location-detail-label">Phone</div>
            <div class="location-detail-value">${loc.phone}</div>
          </div>
        </div>
        <a class="location-maps-btn" href="${loc.googleMaps}" target="_blank" rel="noopener">
          🗺️ &nbsp; Open in Google Maps
        </a>
      </div>
    `;
    locGrid.appendChild(card);
  });

  document.getElementById('hours-text').innerHTML =
    `<strong>⏰ Hours:</strong> &nbsp;${CONFIG.restaurant.hours}`;

  const deliveryEl = document.getElementById('delivery-buttons');
  CONFIG.delivery.forEach(d => {
    const a = document.createElement('a');
    a.href = d.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.className = 'delivery-btn';
    a.innerHTML = `<span class="delivery-emoji">${d.emoji}</span><span>${d.name}</span><span class="delivery-arrow">→</span>`;
    deliveryEl.appendChild(a);
  });
}

// ---- Scroll Reveal ----
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
