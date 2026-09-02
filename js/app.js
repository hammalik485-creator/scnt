/* ============================================================
   SCNT — App logic: cart, rendering, checkout
   ============================================================ */

const money = n => "SAR " + Number(n).toLocaleString("en-US");
const enc = p => encodeURI(p);                       // safe image src (spaces -> %20)
const ALL = [...PRODUCTS, ...PACKS];
const findItem = id => ALL.find(p => p.id === id);

/* ---------- SVG icon set ---------- */
const IC = {
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M6 6L5 3H2"/></svg>',
  bag:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 7h12l1 13H5z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12l5 5L20 6"/></svg>',
  wa:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 1 1 12 20zm4.6-6c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 6 8.6c0 1.7 1.2 3.3 1.4 3.5s2.4 3.6 5.7 4.9c2.1.8 2.6.6 3.1.6s1.5-.6 1.7-1.2.2-1.1.2-1.2-.2-.2-.5-.3z"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 19c8 2 14-4 14-14-8 0-14 4-14 14z"/><path d="M5 19c3-6 7-8 10-9"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l7 3v6c0 5-3 7-7 9-4-2-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 9h16v11H4z"/><path d="M2 9h20v3H2zM12 9v11M12 9S9 4 6.5 5.5 9 9 12 9zm0 0s3-5 5.5-3.5S15 9 12 9z"/></svg>',
  ig:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/></svg>',
  fb:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg>',
  tt:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.3 1.7 3.9 4 4v3c-1.5 0-2.9-.4-4-1.1V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z"/></svg>'
};

/* ---------- Star rating ---------- */
function stars(r) {
  const full = Math.round(r);
  return `<span class="stars">${"★".repeat(full)}${"☆".repeat(5-full)} <small>${r.toFixed(1)}</small></span>`;
}

/* ---------- Product card ---------- */
function card(p) {
  const badges = [];
  if (p.bestseller) badges.push('<span class="badge best">Bestseller</span>');
  else if (p.premium) badges.push('<span class="badge lux">Luxury</span>');
  if (p.was) badges.push(`<span class="badge save">Save ${money(p.was - p.price)}</span>`);
  const priceHtml = p.was
    ? `<span class="price"><span class="was">${money(p.was)}</span>${money(p.price)}</span>`
    : `<span class="price">${money(p.price)}</span>`;
  const img2 = p.images[1] || p.images[0];
  return `
  <article class="card reveal" data-id="${p.id}">
    ${badges.join("")}
    <a class="card-media" href="product.html?id=${p.id}" aria-label="${p.name}">
      <img class="main" src="${enc(p.images[0])}" alt="${p.name}" loading="lazy">
      <img class="alt"  src="${enc(img2)}" alt="${p.name} alternate" loading="lazy">
    </a>
    <div class="card-quick">
      <button class="btn btn-dark btn-block add-btn" data-id="${p.id}">Add to Bag · ${money(p.price)}</button>
    </div>
    <div class="card-body">
      <span class="card-gender">${p.gender}${p.count ? " · "+p.count+" Pack" : ""}</span>
      <h3 class="card-title"><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <p class="card-insp">${p.inspired || p.desc.split(".")[0]}</p>
      ${p.notes ? `<p class="card-notes">${p.notes.join(" · ")}</p>` : ""}
      <div class="card-foot">
        ${priceHtml}
        ${p.rating ? stars(p.rating) : `<button class="add-mini add-btn" data-id="${p.id}">Add +</button>`}
      </div>
    </div>
  </article>`;
}

function renderGrid(el, list) {
  el.innerHTML = list.map(card).join("");
  observeReveals();
}

/* ============================================================
   CART  (localStorage)
   ============================================================ */
const CART_KEY = "scnt_cart_v1";
let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}
function addToCart(id, qty = 1) {
  const line = cart.find(l => l.id === id);
  if (line) line.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  toast(`${findItem(id).name} added to bag`);
  openDrawer();
}
function setQty(id, qty) {
  const line = cart.find(l => l.id === id);
  if (!line) return;
  line.qty = qty;
  if (line.qty <= 0) cart = cart.filter(l => l.id !== id);
  saveCart();
}
function removeFromCart(id) { cart = cart.filter(l => l.id !== id); saveCart(); }
function cartCount() { return cart.reduce((s, l) => s + l.qty, 0); }
function cartTotal() { return cart.reduce((s, l) => s + (findItem(l.id)?.price || 0) * l.qty, 0); }

function updateCartUI() {
  const count = cartCount();
  document.querySelectorAll(".cart-count").forEach(c => {
    c.textContent = count; c.style.display = count ? "flex" : "none";
  });
  const box = document.getElementById("drawerItems");
  const foot = document.getElementById("drawerFoot");
  if (!box) return;

  if (!cart.length) {
    box.innerHTML = `<div class="drawer-empty">${IC.bag}<p>Your bag is empty.</p>
      <a class="btn btn-outline" href="shop.html" style="margin-top:1rem">Shop Fragrances</a></div>`;
    if (foot) foot.style.display = "none";
    return;
  }
  box.innerHTML = cart.map(l => {
    const p = findItem(l.id); if (!p) return "";
    return `<div class="cart-row">
      <div class="cart-row-img"><img src="${enc(p.images[0])}" alt="${p.name}"></div>
      <div class="cart-row-info">
        <h4>${p.name}</h4>
        <small>${p.gender}${p.count ? " · "+p.count+" Pack" : ""}</small>
        <div class="qty">
          <button data-dec="${p.id}">−</button><span>${l.qty}</span><button data-inc="${p.id}">+</button>
        </div>
      </div>
      <div class="cart-row-end">
        <span class="price">${money(p.price * l.qty)}</span>
        <button class="remove" data-rm="${p.id}">Remove</button>
      </div>
    </div>`;
  }).join("");

  if (foot) {
    foot.style.display = "block";
    const total = cartTotal();
    foot.querySelector("#subTotal").textContent = money(total);
    const hint = foot.querySelector("#shipHint");
    hint.textContent = "🚚 Free Delivery All Over Saudi Arabia 🇸🇦";
  }
}

/* ---------- WhatsApp checkout ---------- */
function checkout() {
  if (!cart.length) return;
  // Build the message as plain text with real newlines, then URL-encode the WHOLE
  // thing so special characters ( & ' × spaces , etc.) can't break the wa.me link.
  let msg = `*New Order — ${SITE.brand}*\n\n`;
  cart.forEach(l => {
    const p = findItem(l.id);
    if (!p) return;
    msg += `• ${p.name} (${p.gender})\n   Qty ${l.qty} × ${money(p.price)} = ${money(p.price * l.qty)}\n`;
  });
  const total = cartTotal();
  msg += `\n*Total: ${money(total)}*`;
  msg += `\nDelivery: FREE (all over Saudi Arabia)`;
  msg += `\n\n💵 Cash on Delivery Available\n\nName:\nAddress:\nPhone:`;
  window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ============================================================
   DRAWER / OVERLAY / TOAST / MOBILE NAV
   ============================================================ */
function openDrawer() { document.getElementById("cartDrawer")?.classList.add("open"); document.getElementById("overlay")?.classList.add("open"); }
function closeDrawer() { document.getElementById("cartDrawer")?.classList.remove("open"); document.getElementById("overlay")?.classList.remove("open"); closeMobileNav(); closeSearch(); }
function openMobileNav() { document.getElementById("mobileNav")?.classList.add("open"); document.getElementById("overlay")?.classList.add("open"); }
function closeMobileNav() { document.getElementById("mobileNav")?.classList.remove("open"); }

let toastTimer;
function toast(text) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
  t.innerHTML = IC.check + "<span>" + text + "</span>";
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- Reveal on scroll ---------- */
let revObserver;
function observeReveals() {
  revObserver = revObserver || new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revObserver.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revObserver.observe(el));
}

/* ============================================================
   SHARED HEADER / FOOTER injection
   ============================================================ */
function buildChrome(active) {
  const logo = "logos stuff/logo transparent drop shadow.png";
  document.getElementById("site-header").innerHTML = `
    <div class="topbar">Free Delivery All Over Saudi Arabia 🇸🇦 · Cash on Delivery available</div>
    <header class="header">
      <div class="wrap nav">
        <div class="nav-left">
          <button class="icon-btn hamburger" id="hamBtn" aria-label="Menu">${IC.menu}</button>
          <nav class="nav-links">
            <a href="index.html" class="${active==='home'?'active':''}">Home</a>
            <a href="shop.html" class="${active==='shop'?'active':''}">Shop All</a>
            <a href="shop.html?cat=packs">Combo Packs</a>
          </nav>
        </div>
        <a class="brand-logo" href="index.html"><img src="${enc(logo)}" alt="${SITE.brand}" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'brand-word',textContent:'SCNT'}))"></a>
        <div class="nav-right">
          <button class="icon-btn" id="searchBtn" aria-label="Search">${IC.search}</button>
          <button class="icon-btn" id="cartBtn" aria-label="Cart">${IC.cart}<span class="cart-count">0</span></button>
        </div>
      </div>
    </header>`;

  document.getElementById("site-footer").innerHTML = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="brand-word" style="color:var(--gold)">SCNT</div>
            <p>${SITE.tagline}. Luxury-inspired fragrances crafted to last — at a price that makes sense.</p>
            <div class="footer-socials">
              <a href="#" aria-label="Instagram">${IC.ig}</a>
              <a href="#" aria-label="Facebook">${IC.fb}</a>
              <a href="#" aria-label="TikTok">${IC.tt}</a>
            </div>
          </div>
          <div><h4>Shop</h4><ul>
            <li><a href="shop.html">All Fragrances</a></li>
            <li><a href="shop.html?cat=packs">Combo Packs</a></li>
          </ul></div>
          <div><h4>Help</h4><ul>
            <li><a href="https://wa.me/${SITE.whatsapp}" target="_blank">Contact / WhatsApp</a></li>
            <li><a href="shipping.html">Shipping & Returns</a></li>
            <li><a href="faq.html">FAQs</a></li>
            <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          </ul></div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${SITE.brand}. All rights reserved.</span>
          <span>Inspired-by fragrances · Not affiliated with the original brands.</span>
        </div>
      </div>
    </footer>`;

  // Overlay + drawer + mobile nav (once)
  if (!document.getElementById("overlay")) {
    const extra = document.createElement("div");
    extra.innerHTML = `
      <div class="overlay" id="overlay"></div>
      <div class="search-panel" id="searchPanel">
        <div class="wrap search-inner">
          <div class="search-box">
            ${IC.search}
            <input type="text" id="searchInput" placeholder="Search fragrances, notes, brands…" autocomplete="off">
            <button class="icon-btn" id="closeSearch" aria-label="Close search">✕</button>
          </div>
          <div class="search-results" id="searchResults"></div>
        </div>
      </div>
      <aside class="drawer" id="cartDrawer" aria-label="Shopping bag">
        <div class="drawer-head"><h3>Your Bag</h3><button class="icon-btn" id="closeDrawer" aria-label="Close">✕</button></div>
        <div class="drawer-items" id="drawerItems"></div>
        <div class="drawer-foot" id="drawerFoot" style="display:none">
          <div class="drawer-line"><span>Subtotal</span><span id="subTotal"></span></div>
          <div class="ship-hint" id="shipHint"></div>
          <button class="btn wa-btn btn-block btn-lg" id="checkoutBtn">${IC.wa} Order via WhatsApp</button>
          <p style="text-align:center;font-size:.72rem;color:var(--muted);margin-top:.7rem">You'll confirm details in chat · COD available</p>
        </div>
      </aside>
      <nav class="mobile-nav" id="mobileNav">
        <button class="close-x" id="closeMobile" aria-label="Close">✕</button>
        <a href="index.html">Home</a>
        <a href="shop.html">Shop All</a>
        <a href="shop.html?cat=packs">Combo Packs</a>
      </nav>`;
    document.body.appendChild(extra);
  }

  // Wire events
  document.getElementById("cartBtn").onclick = openDrawer;
  document.getElementById("closeDrawer").onclick = closeDrawer;
  document.getElementById("overlay").onclick = closeDrawer;
  document.getElementById("checkoutBtn").onclick = checkout;
  document.getElementById("hamBtn").onclick = openMobileNav;
  document.getElementById("closeMobile").onclick = () => { closeMobileNav(); document.getElementById("overlay").classList.remove("open"); };

  // Search
  document.getElementById("searchBtn").onclick = openSearch;
  document.getElementById("closeSearch").onclick = closeSearch;
  const si = document.getElementById("searchInput");
  si.addEventListener("input", e => runSearch(e.target.value));
  si.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const first = document.querySelector("#searchResults .search-item");
      if (first) window.location.href = first.getAttribute("href");
    }
  });

  updateCartUI();
}

/* ---------- Search ---------- */
function openSearch() {
  document.getElementById("searchPanel")?.classList.add("open");
  document.getElementById("overlay")?.classList.add("open");
  const si = document.getElementById("searchInput");
  runSearch(si.value);
  setTimeout(() => si.focus(), 60);
}
function closeSearch() {
  document.getElementById("searchPanel")?.classList.remove("open");
  document.getElementById("overlay")?.classList.remove("open");
}
function runSearch(q) {
  const box = document.getElementById("searchResults");
  if (!box) return;
  q = (q || "").trim().toLowerCase();
  if (!q) {
    box.innerHTML = `<p class="search-hint">Type to search — try “sauvage”, “oud”, “women” or “rose”.</p>`;
    return;
  }
  const res = ALL.filter(p => {
    const hay = (p.name + " " + (p.inspired || "") + " " + (p.gender || "") + " " + ((p.notes || []).join(" "))).toLowerCase();
    return hay.includes(q);
  }).slice(0, 8);
  if (!res.length) {
    box.innerHTML = `<p class="search-hint">No results for “${q}”. Try another term.</p>`;
    return;
  }
  box.innerHTML = res.map(p => `
    <a class="search-item" href="product.html?id=${p.id}">
      <div class="search-thumb"><img src="${enc(p.images[0])}" alt="${p.name}"></div>
      <div class="search-meta"><h4>${p.name}</h4><span>${p.inspired || (p.gender + (p.count ? " · " + p.count + " Pack" : ""))}</span></div>
      <span class="search-price">${money(p.price)}</span>
    </a>`).join("");
}

/* ---------- Global delegated clicks (add / qty / remove) ---------- */
document.addEventListener("click", (e) => {
  const add = e.target.closest(".add-btn");
  if (add) { e.preventDefault(); addToCart(add.dataset.id); return; }
  const inc = e.target.closest("[data-inc]"); if (inc) { const p = findItem(inc.dataset.inc); setQty(inc.dataset.inc, (cart.find(l=>l.id===inc.dataset.inc)?.qty||0)+1); return; }
  const dec = e.target.closest("[data-dec]"); if (dec) { setQty(dec.dataset.dec, (cart.find(l=>l.id===dec.dataset.dec)?.qty||0)-1); return; }
  const rm  = e.target.closest("[data-rm]");  if (rm)  { removeFromCart(rm.dataset.rm); return; }
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });
