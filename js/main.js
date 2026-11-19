/* Pizzaria Soares — site
   Para alterar preços ou pratos, edite apenas o objeto MENU abaixo.
   Linha normal: [nome, descrição, preço]  ·  ["h", "Título"]  ·  ["note", "Texto pequeno"] */
const MENU = {
  "Pizzas": [["cols", ["Pequena", "Média", "Familiar"]],
    ["Margarita", "Tomate, queijo e orégãos", "9,50 | 11,50 | 15,00"],
    ["Prosciutto", "Tomate, queijo, fiambre e orégãos", "9,50 | 11,50 | 15,50"],
    ["Prosciutto c/ cogumelos", "Tomate, queijo, fiambre, cogumelos e orégãos", "10,00 | 12,00 | 16,00"],
    ["Papagalo", "Tomate, queijo, fiambre, ovo e orégãos", "10,00 | 12,00 | 16,00"],
    ["Chouriço", "Tomate, queijo, chouriço e orégãos", "10,00 | 12,00 | 16,00"],
    ["Bolonhesa", "Tomate, queijo, carne à bolonhesa e orégãos", "10,00 | 12,00 | 16,00"],
    ["Vegetariana", "Tomate, queijo, tomate fresco, milho, cogumelos, azeitonas e orégãos", "10,00 | 12,00 | 16,00"],
    ["Atum", "Tomate, queijo, atum, ananás, cebola, azeitonas, pimentos e orégãos", "11,00 | 13,00 | 17,00"],
    ["Casa", "Tomate, queijo, fiambre, bacon, chouriço, cogumelos, azeitonas e orégãos", "11,00 | 13,00 | 17,00"],
    ["Chefe", "Tomate, queijo, fiambre, bacon, chouriço, cebola, pimento, azeitonas e orégãos", "11,00 | 13,00 | 17,00"],
    ["Quatro Estações", "Tomate, queijo, fiambre, bacon, chouriço, cogumelos, pimento e orégãos", "11,00 | 13,00 | 17,00"],
    ["Mix", "Tomate, queijo, fiambre, bacon, chouriço, presunto, cogumelos, azeitonas e orégãos", "11,00 | 13,00 | 17,00"],
    ["Tropical", "Tomate, queijo, fiambre, bacon, ananás, pêssego, banana e orégãos", "11,00 | 13,00 | 17,00"],
    ["Hot Dog", "Tomate, queijo, fiambre, bacon, chouriço, salsicha, batata palha, ketchup, maionese, mostarda e orégãos", "11,00 | 13,00 | 17,00"],
    ["Camponesa", "Tomate, queijo, presunto, pimento, cebola, azeitonas e orégãos", "11,00 | 13,00 | 17,00"],
    ["Peperonni", "Tomate, queijo, peperonni, cebola, pimentos e orégãos", "11,00 | 13,00 | 17,00"],
    ["Rústica", "Tomate, queijo, presunto, rúcula, tomate cherry e orégãos", "11,00 | 13,00 | 17,00"],
    ["Calzone", "Fechada: tomate, queijo, fiambre, chouriço, bacon, ananás, cogumelos e orégãos", "11,00 | 13,00 | 17,00"],
    ["Calzone da Casa", "Fechada: tomate, queijo, fiambre, carne à bolonhesa, chouriço, salsicha picante e orégãos", "11,00 | 13,00 | 17,00"],
    ["Atlântica", "Tomate, queijo, camarão, delícias do mar, mexilhão, miolo de camarão, ananás e orégãos", "12,00 | 15,00 | 18,00"],
    ["Kebab", "Tomate, queijo, carne kebab, molho pita e orégãos", "12,00 | 14,00 | 18,00"]],
  "Hambúrgueres": [["note", "Todos com batata frita. Pão brioche, bolo do caco ou pita, à escolha."],
    ["Penafiel", "100 g de carne de novilho, ketchup e maionese", "8,50"],
    ["Porto", "100 g de carne de novilho, queijo cheddar, ketchup e maionese", "9,00"],
    ["Lisboa", "140 g de carne de novilho, cheddar, bacon, alface, tomate, ketchup e maionese", "11,50"],
    ["Madrid", "140 g de carne de novilho, flamengo, cogumelos salteados, alface, tomate e mostarda", "11,50"],
    ["Paris", "140 g de carne de novilho, cheddar, ovo, cebola frita, alface e molho barbecue", "11,50"],
    ["Barcelona", "140 g de carne de novilho, cheddar, bacon, alface, cebola frita, ovo e molho de alho", "12,00"],
    ["Londres", "140 g de carne de novilho, flamengo, bacon, cogumelos salteados, alface, tomate, cebola e molho cocktail", "12,00"],
    ["Nova Iorque", "140 g de carne de novilho, cheddar, chouriço, bacon, fiambre, cebola frita, cogumelos, ketchup e maionese", "12,00"],
    ["São Paulo", "110 g de carne de frango, cheddar, abacaxi grelhado, alface, tomate e maionese", "12,00"],
    ["México", "Carne de frango, cheddar, bacon, cebola frita, alface, maionese e ketchup", "12,00"]],
  "Francesinhas": [
    ["Francesinha simples", "", "11,00"], ["Francesinha c/ batata ou ovo", "", "12,00"],
    ["Francesinha c/ batata e ovo", "", "13,00"], ["½ Francesinha", "", "9,00"],
    ["Jaquelina", "Com batata e ovo", "12,00"], ["Borguesinha", "", "14,00"],
    ["Cachorro especial", "", "9,50"], ["Cachorro à casa", "", "12,00"], ["Tosta mista especial", "", "9,00"]],
  "Pregos & Snack": [["h", "Pregos"],
    ["Prego no pão", "", "5,00"], ["Prego no bolo do caco", "", "10,00"],
    ["Prego no prato", "Bife ou fêvera", "14,00"], ["Fêvera no prato", "", "11,00"],
    ["h", "Snack-bar"], ["Alheira", "", "12,00"], ["Pica-pau", "", "12,50"], ["Menu infantil", "", "7,50"],
    ["h", "Kebab"], ["Kebab no pão pita", "", "8,50"], ["Kebab no prato", "", "13,00"],
    ["h", "Baguetes e tostas"], ["Mista", "", "8,00"], ["Frango", "", "8,00"], ["Atum", "", "8,00"],
    ["Delícias do mar", "", "8,00"], ["Americana", "", "8,00"], ["Presunto", "", "8,00"], ["Cachorro", "", "8,00"]],
  "Massas, saladas e omeletes": [["h", "Massas"],
    ["Bolonhesa", "", "11,00"], ["Carbonara", "", "11,00"], ["Do mar", "", "12,00"],
    ["h", "Saladas"], ["Mista", "", "4,00"], ["Atum", "", "10,00"], ["Frango", "", "10,00"],
    ["Caesar", "", "10,00"], ["Marisco", "", "11,00"], ["Salmão", "", "13,00"],
    ["h", "Omeletes"], ["Queijo ou fiambre", "", "8,00"], ["Mista", "", "9,00"], ["Presunto e queijo", "", "10,00"]],
  "Fim de semana": [["note", "Ao sábado e domingo."], ["cols", ["Dose", "Travessa"]],
    ["h", "Peixe"], ["Bacalhau Zé do Pipo", "", "21,00 | 39,00"], ["Bacalhau c/ broa", "", "21,00 | 39,00"], ["Bacalhau à Narcisa", "", "21,00 | 39,00"],
    ["h", "Carne"], ["Lombo", "", "12,50 | 24,00"], ["Vitela", "", "12,50 | 24,00"], ["Cabrito", "", "18,00 | 35,00"],
    ["Cozido", "", "18,00 | 35,00"], ["Bife c/ molho de cogumelos", "", "14,00 | 26,00"],
    ["Naco de vitela", "Novidade", "32,00"], ["Naco c/ queijo", "Novidade", "34,00"], ["Costeleta de vitela", "Novidade", "35,00"]],
  "Sobremesas": [
    ["Bolo de bolacha", "", "5,00"], ["Bolo de chocolate", "", "5,00"], ["Mousse de chocolate", "", "4,50"],
    ["Pudim", "", "4,50"], ["Natas do céu", "", "4,50"], ["Mousse de Oreo", "", "4,50"],
    ["Cheesecake", "", "6,00"], ["Petit gâteau", "", "6,00"], ["Tarte de whisky", "", "6,50"],
    ["Romântica", "", "6,50"], ["Vienetta", "", "5,00"], ["Haribo", "", "5,00"]],
  "Bebidas e vinhos": [["h", "Bebidas"], ["Sangria de espumante", "", "25,00"],
    ["h", "Verde branco"], ["Verde branco da casa", "", "7,50"], ["Foral de Felgueiras", "", "10,00"], ["Gazela", "", "10,00"],
    ["Casal Garcia", "", "10,00"], ["Aveleda seco / Fonte", "", "11,00"], ["Muralhas", "", "11,00"],
    ["h", "Maduro branco"], ["Maduro branco da casa", "", "7,50"], ["Monte Velho", "", "11,00"], ["Caiado", "", "11,00"],
    ["Ermelinda Reserva", "", "22,00"], ["Duas Quintas", "", "25,00"], ["Grainha", "", "26,50"], ["Adega Mayor Reserva", "", "27,00"],
    ["note", "Tintos, cervejas, refrigerantes e cafés: pergunte ao empregado."]]
};

/* Horário (0 = domingo). Mantenha em sincronia com o HTML e o JSON-LD. */
const HOURS = { 0: [690, 1350], 1: [690, 930], 2: null, 3: [690, 1350], 4: [690, 1350], 5: [690, 1350], 6: [690, 1350] };
const DAY = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* Ementa */
(function menu() {
  const tabs = $("#tabs"), board = $("#board");
  if (!tabs || !board) return;
  const keys = Object.keys(MENU);
  function render(cat, focus) {
    let cols = 0;
    board.innerHTML = MENU[cat].map(r => {
      if (r[0] === "h") return `<h3>${esc(r[1])}</h3>`;
      if (r[0] === "note") return `<p class="note">${esc(r[1])}</p>`;
      if (r[0] === "cols") { cols = r[1].length; return `<div class="row head c${cols}"><span></span>${r[1].map(c => `<span class="p">${esc(c)}</span>`).join("")}</div>`; }
      const prices = r[2].split("|").map(x => x.trim());
      const pc = prices.length > 1 ? prices.map(x => `<span class="p">${esc(x)}</span>`).join("")
        : (cols ? `<span class="p span">${esc(prices[0])}</span>` : `<span class="p">${esc(prices[0])} €</span>`);
      const c = prices.length > 1 || cols ? ` c${cols || prices.length}` : "";
      return `<div class="row${c}"><span class="n">${esc(r[0])}${r[1] ? `<small>${esc(r[1])}</small>` : ""}</span>${pc}</div>`;
    }).join("");
    [...tabs.children].forEach(b => {
      const on = b.dataset.cat === cat;
      b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1;
      if (on) { board.setAttribute("aria-labelledby", b.id); if (focus) b.focus(); }
    });
  }
  keys.forEach((k, i) => {
    const b = document.createElement("button");
    Object.assign(b, { className: "tab", type: "button", id: "tab-" + i, textContent: k });
    b.setAttribute("role", "tab"); b.dataset.cat = k;
    b.addEventListener("click", () => render(k));
    b.addEventListener("keydown", e => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) { e.preventDefault(); render(keys[(i + d + keys.length) % keys.length], true); }
    });
    tabs.appendChild(b);
  });
  render(keys[0]);
})();

/* Aberto agora (hora de Lisboa) */
(function status() {
  let now;
  try {
    const p = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Lisbon", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false })
      .formatToParts(new Date()).map(x => [x.type, x.value]));
    now = { d: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(p.weekday), m: (+p.hour % 24) * 60 + +p.minute };
  } catch (e) { const t = new Date(); now = { d: t.getDay(), m: t.getHours() * 60 + t.getMinutes() }; }
  const fmt = m => `${Math.floor(m / 60)}h${String(m % 60).padStart(2, "0")}`;
  const today = HOURS[now.d];
  let open = false, text;
  if (today && now.m >= today[0] && now.m < today[1]) { open = true; text = `Aberto agora, fecha às ${fmt(today[1])}`; }
  else {
    for (let i = 0; i < 8; i++) {
      const d = (now.d + i) % 7, h = HOURS[d];
      if (!h || (i === 0 && now.m >= h[0])) continue;
      text = `Fechado, abre ${i === 0 ? "hoje" : i === 1 ? "amanhã" : DAY[d]} às ${fmt(h[0])}`; break;
    }
  }
  document.querySelectorAll("[data-status]").forEach(el => { el.textContent = text; el.classList.add(open ? "open" : "closed"); el.hidden = false; });
  $(`#hours li[data-d="${now.d}"]`)?.classList.add("today");
})();

/* Navegação no telemóvel */
(function nav() {
  const btn = $("#menuBtn"), links = $("#navLinks");
  if (!btn || !links) return;
  const set = v => { links.classList.toggle("open", v); btn.setAttribute("aria-expanded", v); };
  btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  links.addEventListener("click", e => { if (e.target.closest("a")) set(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") set(false); });
})();

/* Carrossel de avaliações */
(function reviews() {
  const rail = $("#rail"); if (!rail) return;
  const step = () => rail.querySelector(".review").getBoundingClientRect().width + 16;
  $("#revPrev").addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
  $("#revNext").addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
})();

/* Mapa: só carrega o Google Maps depois de o visitante aceitar (RGPD) */
(function map() {
  const btn = $("#loadMap"); if (!btn) return;
  btn.addEventListener("click", () => {
    const f = document.createElement("iframe");
    f.src = "https://www.google.com/maps?q=Pizzaria+Soares,+Cabe%C3%A7a+Santa,+Penafiel&output=embed";
    f.title = "Mapa: Pizzaria Soares, Cabeça Santa, Penafiel";
    f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade";
    $("#map").replaceChildren(f);
  });
})();

/* Copiar número */
document.querySelectorAll(".copy").forEach(b => b.addEventListener("click", () => {
  const done = () => { b.textContent = "Copiado"; setTimeout(() => (b.textContent = "Copiar"), 1600); };
  navigator.clipboard?.writeText(b.dataset.copy).then(done).catch(() => {});
}));

$("#year") && ($("#year").textContent = new Date().getFullYear());
