/* ===== Sugar & Crumb Bakery — app logic (frontend only) ===== */
(function () {
  "use strict";

  /* ---------- Mock data ---------- */
  const IMG = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

  const PRODUCTS = [
    { id: 1, name: "Chocolate Cake", category: "Cakes", price: 450, rating: 5, emoji: "🍫",
      img: IMG("photo-1578985545062-69928b1d9587"),
      desc: "Three layers of moist cocoa sponge filled with Belgian dark chocolate ganache and finished with chocolate curls." },
    { id: 2, name: "Red Velvet Cake", category: "Cakes", price: 550, rating: 5, emoji: "🍰",
      img: IMG("photo-1586985289906-406988974504"),
      desc: "Classic red velvet with a tangy cream cheese frosting, baked fresh with buttermilk and real cocoa." },
    { id: 3, name: "Black Forest Cake", category: "Cakes", price: 500, rating: 4,
      img: IMG("photo-1565958011703-44f9829ba187"), emoji: "🎂",
      desc: "Chocolate sponge layered with whipped cream and cherries, topped with shaved dark chocolate." },
    { id: 4, name: "Vanilla Cake", category: "Cakes", price: 400, rating: 4, emoji: "🧁",
      img: IMG("photo-1464349095431-e9a21285b5f3"),
      desc: "Feather-light Madagascar vanilla sponge with silky vanilla buttercream — a timeless celebration cake." },
    { id: 5, name: "Chocolate Cupcake", category: "Cupcakes", price: 80, rating: 5, emoji: "🧁",
      img: IMG("photo-1486427944299-d1955d23e34d"),
      desc: "Rich cocoa cupcake crowned with a swirl of chocolate fudge frosting and sprinkles." },
    { id: 6, name: "Butter Cookies", category: "Cookies", price: 120, rating: 4, emoji: "🍪",
      img: IMG("photo-1499636136210-6f4ee915583e"),
      desc: "Crisp, buttery Danish-style cookies baked in small batches. Pack of 12." },
    { id: 7, name: "Cream Bun", category: "Buns", price: 40, rating: 4, emoji: "🥯",
      img: IMG("photo-1509440159596-0249088772ff"),
      desc: "Soft milk bun split and filled generously with fresh vanilla whipped cream." },
    { id: 8, name: "Chocolate Donut", category: "Donuts", price: 90, rating: 5, emoji: "🍩",
      img: IMG("photo-1551024506-0bccd828d307"),
      desc: "Pillowy ring donut dipped in glossy chocolate glaze and finished with crunchy sprinkles." },
    { id: 9, name: "Croissant", category: "Pastries", price: 100, rating: 5, emoji: "🥐",
      img: IMG("photo-1555507036-ab1f4038808a"),
      desc: "Laminated 27 times with French butter for an impossibly flaky, honeycomb crumb." },
    { id: 10, name: "Brownie", category: "Desserts", price: 120, rating: 5, emoji: "🍫",
      img: IMG("photo-1606313564200-e75d5e30476c"),
      desc: "Fudgy dark chocolate brownie with a crackled top and toasted walnuts." },
    { id: 11, name: "Sourdough Bread", category: "Breads", price: 180, rating: 5, emoji: "🍞",
      img: IMG("photo-1585478259715-876acc5be8eb"),
      desc: "48-hour naturally leavened sourdough with a blistered crust and open, chewy crumb." },
    { id: 12, name: "Blueberry Muffin", category: "Cupcakes", price: 95, rating: 4, emoji: "🫐",
      img: IMG("photo-1607958996333-41aef7caefaa"),
      desc: "Buttery muffin loaded with juicy blueberries and a crunchy demerara sugar top." },
    { id: 13, name: "Choco Chip Cookies", category: "Cookies", price: 140, rating: 5, emoji: "🍪",
      img: IMG("photo-1558961363-fa8fdf82db35"),
      desc: "Gooey centre, crisp edges, generous chunks of couverture chocolate. Pack of 6." },
    { id: 14, name: "Garlic Bread Loaf", category: "Breads", price: 150, rating: 4, emoji: "🧄",
      img: IMG("photo-1549931319-a545dcf3bc73"),
      desc: "Soft loaf brushed with garlic herb butter and baked golden. Best served warm." },
    { id: 15, name: "Fruit Danish Pastry", category: "Pastries", price: 130, rating: 4, emoji: "🥧",
      img: IMG("photo-1509365465985-25d11c17e812"),
      desc: "Buttery danish with vanilla custard and seasonal glazed fruit." },
    { id: 16, name: "Birthday Cake Special", category: "Cakes", price: 750, rating: 5, emoji: "🎉",
      img: IMG("photo-1535141192574-5d4897c12636"),
      desc: "Custom two-tier celebration cake with your message piped by hand. Choose any flavour." },
    { id: 17, name: "Strawberry Tart", category: "Desserts", price: 200, rating: 5, emoji: "🍓",
      img: IMG("photo-1488477181946-6428a0291777"),
      desc: "Crisp sweet pastry shell, vanilla crème pâtissière and glazed fresh strawberries." },
    { id: 18, name: "Honey Glazed Bun", category: "Buns", price: 60, rating: 4, emoji: "🍯",
      img: IMG("photo-1608198093002-ad4e005484ec"),
      desc: "Soft brioche bun brushed with wildflower honey glaze while still warm." }
  ];

  const CATEGORIES = ["All", "Cakes", "Cupcakes", "Cookies", "Breads", "Buns", "Pastries", "Donuts", "Desserts"];

  const REVIEWS = [
    { name: "Ananya Iyer", rating: 5, text: "The red velvet cake for my daughter's birthday was unreal. Moist, fresh and delivered right on time." },
    { name: "Rahul Menon", rating: 5, text: "I order the sourdough every weekend. Best crust in the city, hands down." },
    { name: "Priya Sharma", rating: 4, text: "Croissants are genuinely flaky and buttery. Ordering online took less than a minute." },
    { name: "Karthik Raj", rating: 5, text: "Custom birthday cake matched my sketch exactly. Everyone at the office asked where it was from." }
  ];

  const DELIVERY_FEE = 40;
  const FREE_ABOVE = 999;

  /* ---------- State ---------- */
  const LS_CART = "sc_cart_v1";
  const LS_FAV = "sc_fav_v1";

  const read = (key, fallback) => {
    try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; }
    catch (e) { return fallback; }
  };
  const write = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} };

  let cart = read(LS_CART, []);       // [{id, qty}]
  let favorites = read(LS_FAV, []);   // [id]
  let activeCategory = "All";
  let searchTerm = "";

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const rupees = (n) => "₹" + n.toLocaleString("en-IN");
  const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);
  const byId = (id) => PRODUCTS.find((p) => p.id === id);

  /* ---------- Toast ---------- */
  function toast(msg) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    $("#toasts").appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }

  /* ---------- Image fallback ---------- */
  function attachFallback(img, emoji) {
    img.addEventListener("error", function () {
      const div = document.createElement("div");
      div.className = "imgfallback";
      div.textContent = emoji || "🍞";
      if (img.parentNode) img.parentNode.replaceChild(div, img);
    }, { once: true });
  }

  /* ---------- Rendering ---------- */
  function renderCategories() {
    const wrap = $("#categoryChips");
    wrap.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const b = document.createElement("button");
      b.className = "chip" + (cat === activeCategory ? " active" : "");
      b.type = "button";
      b.textContent = cat;
      b.addEventListener("click", () => {
        activeCategory = cat;
        renderCategories();
        renderProducts();
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
      });
      wrap.appendChild(b);
    });

    const fc = $("#footerCats");
    fc.innerHTML = "";
    CATEGORIES.slice(1).forEach((cat) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#menu";
      a.textContent = cat;
      a.addEventListener("click", () => { activeCategory = cat; renderCategories(); renderProducts(); });
      li.appendChild(a);
      fc.appendChild(li);
    });
  }

  function visibleProducts() {
    const q = searchTerm.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const catOk = activeCategory === "All" || p.category === activeCategory;
      const qOk = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }

  function productCard(p) {
    const card = document.createElement("article");
    card.className = "card product";

    const media = document.createElement("div");
    media.className = "product__media";
    const img = document.createElement("img");
    img.src = p.img; img.alt = p.name; img.loading = "lazy";
    attachFallback(img, p.emoji);
    media.appendChild(img);

    const tag = document.createElement("span");
    tag.className = "product__tag";
    tag.textContent = p.category;
    media.appendChild(tag);

    const fav = document.createElement("button");
    fav.className = "product__fav";
    fav.type = "button";
    fav.setAttribute("aria-label", "Toggle favorite for " + p.name);
    fav.textContent = favorites.includes(p.id) ? "❤️" : "🤍";
    fav.addEventListener("click", () => toggleFavorite(p.id));
    media.appendChild(fav);

    const body = document.createElement("div");
    body.className = "product__body";
    body.innerHTML =
      '<h3>' + p.name + '</h3>' +
      '<div class="rating">' + stars(p.rating) + " <span>(" + p.rating + ".0)</span></div>" +
      '<div class="price">' + rupees(p.price) + "</div>";

    const btns = document.createElement("div");
    btns.className = "product__btns";
    const addBtn = document.createElement("button");
    addBtn.className = "btn btn--primary";
    addBtn.type = "button";
    addBtn.textContent = "Add to Cart";
    addBtn.addEventListener("click", () => addToCart(p.id, 1));
    const viewBtn = document.createElement("button");
    viewBtn.className = "btn btn--ghost";
    viewBtn.type = "button";
    viewBtn.textContent = "View Details";
    viewBtn.addEventListener("click", () => openDetails(p.id));
    btns.append(addBtn, viewBtn);
    body.appendChild(btns);

    card.append(media, body);
    return card;
  }

  function renderProducts() {
    const grid = $("#productGrid");
    const list = visibleProducts();
    grid.innerHTML = "";
    list.forEach((p) => grid.appendChild(productCard(p)));
    $("#emptyState").hidden = list.length !== 0;
    $("#resultCount").textContent =
      list.length + (list.length === 1 ? " product" : " products") +
      (activeCategory !== "All" ? " in " + activeCategory : "") +
      (searchTerm ? ' matching "' + searchTerm + '"' : "");
  }

  function renderTestimonials() {
    const wrap = $("#testimonials");
    wrap.innerHTML = "";
    REVIEWS.forEach((r) => {
      const d = document.createElement("article");
      d.className = "tcard";
      d.innerHTML = '<div class="rating">' + stars(r.rating) + "</div><p>“" + r.text + "”</p><strong>" + r.name + "</strong>";
      wrap.appendChild(d);
    });
  }

  /* ---------- Cart ---------- */
  function saveCart() { write(LS_CART, cart); updateCounts(); renderCart(); }

  function addToCart(id, qty) {
    const line = cart.find((c) => c.id === id);
    if (line) line.qty += qty; else cart.push({ id: id, qty: qty });
    saveCart();
    toast("🛒 " + byId(id).name + " added to cart");
  }
  function changeQty(id, delta) {
    const line = cart.find((c) => c.id === id);
    if (!line) return;
    line.qty += delta;
    if (line.qty <= 0) cart = cart.filter((c) => c.id !== id);
    saveCart();
  }
  function removeFromCart(id) {
    cart = cart.filter((c) => c.id !== id);
    saveCart();
    toast("Removed from cart");
  }
  function cartSubtotal() {
    return cart.reduce((s, c) => { const p = byId(c.id); return p ? s + p.price * c.qty : s; }, 0);
  }
  function deliveryFee() {
    const sub = cartSubtotal();
    return sub === 0 || sub >= FREE_ABOVE ? 0 : DELIVERY_FEE;
  }
  function cartTotal() { return cartSubtotal() + deliveryFee(); }

  function renderCart() {
    const box = $("#cartItems");
    box.innerHTML = "";
    if (cart.length === 0) {
      box.innerHTML = '<p class="empty">Your cart is empty 🥐<br /><small>Add something sweet from the menu.</small></p>';
    } else {
      cart.forEach((c) => {
        const p = byId(c.id);
        if (!p) return;
        const row = document.createElement("div");
        row.className = "citem";

        const img = document.createElement("img");
        img.src = p.img; img.alt = p.name;
        attachFallback(img, p.emoji);

        const mid = document.createElement("div");
        mid.innerHTML = '<h4>' + p.name + '</h4><div class="price">' + rupees(p.price * c.qty) + "</div>";
        const qty = document.createElement("div");
        qty.className = "citem__qty";
        const minus = document.createElement("button"); minus.type = "button"; minus.textContent = "−";
        minus.setAttribute("aria-label", "Decrease quantity");
        minus.addEventListener("click", () => changeQty(p.id, -1));
        const num = document.createElement("span"); num.textContent = c.qty;
        const plus = document.createElement("button"); plus.type = "button"; plus.textContent = "+";
        plus.setAttribute("aria-label", "Increase quantity");
        plus.addEventListener("click", () => changeQty(p.id, 1));
        qty.append(minus, num, plus);
        mid.appendChild(qty);

        const rm = document.createElement("button");
        rm.className = "remove"; rm.type = "button"; rm.textContent = "🗑️";
        rm.setAttribute("aria-label", "Remove " + p.name);
        rm.addEventListener("click", () => removeFromCart(p.id));

        row.append(img, mid, rm);
        box.appendChild(row);
      });
    }
    $("#cartSubtotal").textContent = rupees(cartSubtotal());
    $("#cartDelivery").textContent = deliveryFee() === 0 ? "Free" : rupees(deliveryFee());
    $("#cartTotal").textContent = rupees(cartTotal());
    $("#checkoutTotal").textContent = rupees(cartTotal());
  }

  function updateCounts() {
    $("#cartCount").textContent = cart.reduce((s, c) => s + c.qty, 0);
    $("#favCount").textContent = favorites.length;
  }

  /* ---------- Favorites ---------- */
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      favorites = favorites.filter((f) => f !== id);
      toast("💔 Removed from favorites");
    } else {
      favorites.push(id);
      toast("❤️ Added to favorites");
    }
    write(LS_FAV, favorites);
    updateCounts();
    renderProducts();
    renderFavorites();
  }

  function renderFavorites() {
    const box = $("#favItems");
    box.innerHTML = "";
    if (favorites.length === 0) {
      box.innerHTML = '<p class="empty">No favorites yet 🤍<br /><small>Tap the heart on any product.</small></p>';
      return;
    }
    favorites.forEach((id) => {
      const p = byId(id);
      if (!p) return;
      const row = document.createElement("div");
      row.className = "citem";
      const img = document.createElement("img");
      img.src = p.img; img.alt = p.name;
      attachFallback(img, p.emoji);
      const mid = document.createElement("div");
      mid.innerHTML = '<h4>' + p.name + '</h4><div class="price">' + rupees(p.price) + "</div>";
      const add = document.createElement("button");
      add.className = "btn btn--sm"; add.type = "button"; add.textContent = "Add";
      add.addEventListener("click", () => addToCart(p.id, 1));
      const rm = document.createElement("button");
      rm.className = "remove"; rm.type = "button"; rm.textContent = "✕";
      rm.setAttribute("aria-label", "Remove favorite");
      rm.addEventListener("click", () => toggleFavorite(p.id));
      mid.appendChild(add);
      row.append(img, mid, rm);
      box.appendChild(row);
    });
  }

  /* ---------- Overlays ---------- */
  function openOverlay(el) { el.hidden = false; document.body.style.overflow = "hidden"; }
  function closeOverlay(el) { el.hidden = true; document.body.style.overflow = ""; }
  function closeAll() {
    ["#detailsOverlay", "#cartOverlay", "#favOverlay", "#checkoutOverlay"].forEach((s) => { $(s).hidden = true; });
    document.body.style.overflow = "";
  }

  /* ---------- Details modal ---------- */
  function openDetails(id) {
    const p = byId(id);
    if (!p) return;
    let qty = 1;
    const body = $("#detailsBody");
    body.innerHTML = "";

    const left = document.createElement("div");
    const img = document.createElement("img");
    img.src = p.img; img.alt = p.name;
    attachFallback(img, p.emoji);
    left.appendChild(img);

    const info = document.createElement("div");
    info.className = "modal__info";
    info.innerHTML =
      '<p class="eyebrow">' + p.category + "</p>" +
      '<h3 id="dName">' + p.name + "</h3>" +
      '<div class="rating">' + stars(p.rating) + " (" + p.rating + ".0)</div>" +
      "<p>" + p.desc + "</p>" +
      '<div class="price">' + rupees(p.price) + "</div>";

    const qtyBox = document.createElement("div");
    qtyBox.className = "qty";
    const minus = document.createElement("button"); minus.type = "button"; minus.textContent = "−";
    const num = document.createElement("span"); num.textContent = "1";
    const plus = document.createElement("button"); plus.type = "button"; plus.textContent = "+";
    minus.addEventListener("click", () => { if (qty > 1) { qty--; num.textContent = qty; } });
    plus.addEventListener("click", () => { qty++; num.textContent = qty; });
    qtyBox.append(minus, num, plus);

    const actions = document.createElement("div");
    actions.className = "product__btns";
    const add = document.createElement("button");
    add.className = "btn btn--primary"; add.type = "button"; add.textContent = "Add to Cart";
    add.addEventListener("click", () => { addToCart(p.id, qty); closeOverlay($("#detailsOverlay")); });
    const favBtn = document.createElement("button");
    favBtn.className = "btn btn--ghost"; favBtn.type = "button";
    favBtn.textContent = favorites.includes(p.id) ? "❤️ Favorited" : "🤍 Favorite";
    favBtn.addEventListener("click", () => {
      toggleFavorite(p.id);
      favBtn.textContent = favorites.includes(p.id) ? "❤️ Favorited" : "🤍 Favorite";
    });
    actions.append(add, favBtn);

    info.append(qtyBox, actions);
    body.append(left, info);
    openOverlay($("#detailsOverlay"));
  }

  /* ---------- Validation helpers ---------- */
  const setErr = (id, msg) => { const el = $(id); if (el) el.textContent = msg || ""; };
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v);

  function validateCheckout() {
    let ok = true;
    const name = $("#fName").value.trim();
    const phone = $("#fPhone").value.trim();
    const email = $("#fEmail").value.trim();
    const city = $("#fCity").value.trim();
    const addr = $("#fAddress").value.trim();
    const pin = $("#fPin").value.trim();
    const pay = $("#fPay").value;

    setErr("#fNameErr", ""); setErr("#fPhoneErr", ""); setErr("#fEmailErr", "");
    setErr("#fCityErr", ""); setErr("#fAddressErr", ""); setErr("#fPinErr", ""); setErr("#fPayErr", "");

    if (name.length < 3) { setErr("#fNameErr", "Please enter your full name (min 3 characters)."); ok = false; }
    if (!/^[6-9]\d{9}$/.test(phone)) { setErr("#fPhoneErr", "Enter a valid 10-digit mobile number."); ok = false; }
    if (!isEmail(email)) { setErr("#fEmailErr", "Enter a valid email address."); ok = false; }
    if (city.length < 2) { setErr("#fCityErr", "City is required."); ok = false; }
    if (addr.length < 10) { setErr("#fAddressErr", "Address must be at least 10 characters."); ok = false; }
    if (!/^\d{6}$/.test(pin)) { setErr("#fPinErr", "Pincode must be 6 digits."); ok = false; }
    if (!pay) { setErr("#fPayErr", "Choose a payment method."); ok = false; }
    return ok;
  }

  function makeOrderId() {
    return "SC-" + Date.now().toString(36).toUpperCase().slice(-5) +
      "-" + Math.floor(1000 + Math.random() * 9000);
  }

  /* ---------- Wiring ---------- */
  function init() {
    renderCategories();
    renderProducts();
    renderTestimonials();
    renderCart();
    renderFavorites();
    updateCounts();
    $("#year").textContent = new Date().getFullYear();

    const heroImg = document.querySelector(".hero__img");
    if (heroImg) attachFallback(heroImg, "🎂");
    $$(".about__art img").forEach((i) => attachFallback(i, "🥖"));

    // Nav
    const links = $("#navLinks");
    $("#hamburger").addEventListener("click", function () {
      const open = links.classList.toggle("open");
      this.setAttribute("aria-expanded", String(open));
      this.textContent = open ? "✕" : "☰";
    });
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        $("#hamburger").textContent = "☰";
      }
    });

    // Search
    const input = $("#searchInput");
    $("#searchToggle").addEventListener("click", () => {
      document.getElementById("searchSection").scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => input.focus(), 350);
    });
    input.addEventListener("input", (e) => { searchTerm = e.target.value; renderProducts(); });
    $("#clearSearch").addEventListener("click", () => { input.value = ""; searchTerm = ""; renderProducts(); });

    // Hero
    $("#orderNowBtn").addEventListener("click", () => {
      document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
      toast("🍰 Pick your favourites and check out!");
    });

    // Drawers / modals
    $("#cartToggle").addEventListener("click", () => { renderCart(); openOverlay($("#cartOverlay")); });
    $("#favToggle").addEventListener("click", () => { renderFavorites(); openOverlay($("#favOverlay")); });
    $$("[data-close-cart]").forEach((b) => b.addEventListener("click", () => closeOverlay($("#cartOverlay"))));
    $$("[data-close-fav]").forEach((b) => b.addEventListener("click", () => closeOverlay($("#favOverlay"))));
    $$("[data-close-details]").forEach((b) => b.addEventListener("click", () => closeOverlay($("#detailsOverlay"))));
    $$("[data-close-checkout]").forEach((b) => b.addEventListener("click", () => closeOverlay($("#checkoutOverlay"))));
    $$(".overlay").forEach((ov) => ov.addEventListener("click", (e) => { if (e.target === ov) closeOverlay(ov); }));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

    // Cart actions
    $("#clearCartBtn").addEventListener("click", () => {
      if (cart.length === 0) { toast("Cart is already empty"); return; }
      cart = []; saveCart(); toast("🧹 Cart cleared");
    });
    $("#checkoutBtn").addEventListener("click", () => {
      if (cart.length === 0) { toast("Add something to your cart first 🥐"); return; }
      closeOverlay($("#cartOverlay"));
      $("#checkoutView").hidden = false;
      $("#successView").hidden = true;
      $("#checkoutTotal").textContent = rupees(cartTotal());
      openOverlay($("#checkoutOverlay"));
    });

    // Checkout form
    $("#checkoutForm").addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validateCheckout()) { toast("⚠️ Please fix the highlighted fields"); return; }
      const id = makeOrderId();
      $("#orderId").textContent = id;
      $("#checkoutView").hidden = true;
      $("#successView").hidden = false;
      cart = []; saveCart();
      $("#checkoutForm").reset();
      toast("🎉 Order placed successfully!");
    });

    // Contact form
    $("#contactForm").addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      const n = $("#cName").value.trim(), em = $("#cEmail").value.trim(), ms = $("#cMessage").value.trim();
      setErr("#cNameErr", ""); setErr("#cEmailErr", ""); setErr("#cMessageErr", "");
      if (n.length < 3) { setErr("#cNameErr", "Please enter your name."); ok = false; }
      if (!isEmail(em)) { setErr("#cEmailErr", "Enter a valid email address."); ok = false; }
      if (ms.length < 10) { setErr("#cMessageErr", "Message must be at least 10 characters."); ok = false; }
      if (!ok) { $("#contactSuccess").hidden = true; return; }
      $("#contactForm").reset();
      $("#contactSuccess").hidden = false;
      toast("✅ Message sent — we'll be in touch!");
      setTimeout(() => { $("#contactSuccess").hidden = true; }, 6000);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
