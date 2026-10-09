/* Демо-сцены для блока «До / После».
   Каждая сцена: before(p, lang) и after(p, lang) → строка SVG 800×600.
   p — уникальный префикс для id градиентов, lang — "ru" | "en".
   Когда появятся реальные работы, укажи картинки в CASES (index.html) — сцены не понадобятся. */
(function(){
const F = "'Inter Tight',Arial,sans-serif";
const svg = body => `<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img">${body}</svg>`;
const grain = p => `<filter id="${p}gr"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>`;
const grainLayer = (p, o) => `<rect width="800" height="600" filter="url(#${p}gr)" opacity="${o}"/>`;
const tr = (L, ru, en) => L === "ru" ? ru : en;

/* ---------- 1. Креатив: флакон духов ---------- */
function bottle(p, a){
  return `
  <rect x="370" y="182" width="60" height="52" rx="6" fill="${a ? `url(#${p}gold)` : "#4d4b48"}"/>
  <rect x="386" y="232" width="28" height="24" fill="${a ? `url(#${p}gold)` : "#9a958c"}"/>
  <rect x="332" y="252" width="136" height="180" rx="20" fill="${a ? `url(#${p}glass)` : "#c4b49a"}"/>
  ${a ? `<rect x="348" y="268" width="12" height="148" rx="6" fill="#fff" opacity=".55"/><rect x="446" y="282" width="5" height="120" rx="2.5" fill="#fff" opacity=".3"/>`
      : `<ellipse cx="364" cy="300" rx="9" ry="26" fill="#fff" opacity=".4"/>`}
  <rect x="356" y="316" width="88" height="62" rx="3" fill="${a ? "#140904" : "#ece8e0"}"/>
  <text x="400" y="348" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="${a ? "#f2d58a" : "#8a857c"}">AURA</text>
  <text x="400" y="365" text-anchor="middle" font-family="${F}" font-size="7" letter-spacing="2" fill="${a ? "#e9c77a" : "#a5a097"}">EAU DE PARFUM</text>`;
}
const product = {
  before: (p) => svg(`
    <defs><linearGradient id="${p}w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfc9bf"/><stop offset="1" stop-color="#b3aca0"/></linearGradient>${grain(p)}</defs>
    <rect width="800" height="600" fill="url(#${p}w)"/>
    <rect y="410" width="800" height="190" fill="#a39a8c"/>
    <path d="M0 410H800" stroke="#8d8477" stroke-width="2"/>
    <rect x="90" y="330" width="70" height="85" rx="8" fill="#8f8a83"/><path d="M160 350q30 0 30 25t-30 25" fill="none" stroke="#8f8a83" stroke-width="10"/>
    <path d="M560 600C600 520 700 560 760 470" stroke="#55514b" stroke-width="5" fill="none"/>
    <ellipse cx="425" cy="438" rx="95" ry="14" fill="#6f675c" opacity=".55"/>
    <g transform="rotate(-4 400 340)">${bottle(p, false)}</g>
    <rect width="800" height="600" fill="#7d8ea3" opacity=".14"/>
    ${grainLayer(p, .1)}`),
  after: (p, L) => svg(`
    <defs>
      <radialGradient id="${p}bg" cx=".55" cy=".45" r=".8"><stop offset="0" stop-color="#ffcf7a"/><stop offset=".35" stop-color="#e0761c"/><stop offset=".72" stop-color="#5a1f06"/><stop offset="1" stop-color="#1c0902"/></radialGradient>
      <linearGradient id="${p}glass" x1="0" x2="1"><stop offset="0" stop-color="#5a2806"/><stop offset=".25" stop-color="#c86d14"/><stop offset=".45" stop-color="#ffc463"/><stop offset=".55" stop-color="#ffe2a3"/><stop offset=".75" stop-color="#d17a1a"/><stop offset="1" stop-color="#4a2005"/></linearGradient>
      <linearGradient id="${p}gold" x1="0" x2="1"><stop offset="0" stop-color="#8a6420"/><stop offset=".3" stop-color="#f7e3a1"/><stop offset=".55" stop-color="#b8862b"/><stop offset=".8" stop-color="#f2d58a"/><stop offset="1" stop-color="#8a6420"/></linearGradient>
      <linearGradient id="${p}pod" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3e2c7"/><stop offset="1" stop-color="#9c6d3c"/></linearGradient>
      <radialGradient id="${p}glow"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#${p}bg)"/>
    <circle cx="400" cy="300" r="230" fill="url(#${p}glow)" opacity=".55"/>
    <ellipse cx="400" cy="500" rx="200" ry="30" fill="#1c0902" opacity=".5"/>
    <rect x="230" y="430" width="340" height="60" fill="url(#${p}pod)"/>
    <ellipse cx="400" cy="490" rx="170" ry="24" fill="#9c6d3c"/>
    <ellipse cx="400" cy="430" rx="170" ry="24" fill="#f8ead3"/>
    <ellipse cx="400" cy="432" rx="80" ry="8" fill="#c79a62" opacity=".5"/>
    ${bottle(p, true)}
    <g fill="none" stroke="#fff" stroke-opacity=".55"><circle cx="292" cy="228" r="9"/><circle cx="508" cy="196" r="5"/><circle cx="520" cy="300" r="11"/><circle cx="276" cy="338" r="4"/><circle cx="470" cy="150" r="6"/></g>
    <path d="M300 150l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#fff" opacity=".8"/>
    <rect x="560" y="74" width="158" height="34" rx="17" fill="#140904"/>
    <text x="639" y="96" text-anchor="middle" font-family="${F}" font-weight="700" font-size="13" letter-spacing="1.5" fill="#fff">${tr(L, "ХИТ ПРОДАЖ", "BESTSELLER")}</text>
    <text x="560" y="172" font-family="Georgia,serif" font-size="56" fill="#fff">AURA</text>
    <text x="562" y="214" font-family="Georgia,serif" font-style="italic" font-size="36" fill="#ffd9a0">No.5</text>
    <text font-family="${F}" font-size="17" fill="#fff" opacity=".88"><tspan x="562" y="252">${tr(L, "Аромат, который", "A scent people")}</tspan><tspan x="562" y="274">${tr(L, "запоминают", "remember")}</tspan></text>
    <circle cx="690" cy="342" r="44" fill="#fff"/>
    <text x="690" y="351" text-anchor="middle" font-family="${F}" font-weight="900" font-size="25" fill="#140904">−30%</text>
    <rect x="470" y="512" width="300" height="60" rx="14" fill="#140904" opacity=".72"/>
    <g font-family="${F}" fill="#fff" text-anchor="middle">
      <text x="520" y="539" font-weight="800" font-size="15">100 ${tr(L, "мл", "ml")}</text><text x="520" y="557" font-size="10" opacity=".65">${tr(L, "объём", "volume")}</text>
      <text x="620" y="539" font-weight="800" font-size="15">12 ${tr(L, "ч", "h")}</text><text x="620" y="557" font-size="10" opacity=".65">${tr(L, "стойкость", "lasting")}</text>
      <text x="720" y="539" font-weight="800" font-size="15">1 ${tr(L, "день", "day")}</text><text x="720" y="557" font-size="10" opacity=".65">${tr(L, "доставка", "delivery")}</text>
    </g>`)
};

/* ---------- 2. Видео: кроссовок ---------- */
function sneaker(upper, sole, stripe, lace){
  return `
  <path d="M248 392H560Q566 418 540 424H272Q246 422 248 392Z" fill="${sole}"/>
  <path d="M262 392L268 338Q276 304 318 302L352 300Q372 262 414 262L436 268Q470 302 522 330Q556 350 554 392Z" fill="${upper}"/>
  <path d="M300 386Q410 368 512 316" stroke="${stripe}" stroke-width="12" stroke-linecap="round" fill="none"/>
  <path d="M268 340Q262 320 276 306" stroke="${lace}" stroke-width="5" fill="none"/>
  <g stroke="${lace}" stroke-width="4" stroke-linecap="round"><path d="M380 284l20 16"/><path d="M394 276l20 16"/><path d="M408 270l20 16"/></g>`;
}
const video = {
  before: (p) => svg(`
    <defs><linearGradient id="${p}w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a6a6a6"/><stop offset="1" stop-color="#8c8c8c"/></linearGradient>${grain(p)}</defs>
    <rect width="800" height="600" fill="url(#${p}w)"/>
    <rect y="420" width="800" height="180" fill="#7a7a7a"/>
    <ellipse cx="405" cy="428" rx="170" ry="14" fill="#5e5e5e" opacity=".7"/>
    ${sneaker("#e3e3e3", "#c2c2c2", "#cfcfcf", "#a9a9a9")}
    ${grainLayer(p, .12)}`),
  after: (p, L) => svg(`
    <defs>
      <radialGradient id="${p}m"><stop offset="0" stop-color="#ff2e88" stop-opacity=".75"/><stop offset="1" stop-color="#ff2e88" stop-opacity="0"/></radialGradient>
      <radialGradient id="${p}c"><stop offset="0" stop-color="#22d3ee" stop-opacity=".6"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></radialGradient>
      <linearGradient id="${p}up" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d9d9e3"/></linearGradient>
      <linearGradient id="${p}ml" x1="0" x2="1"><stop offset="0" stop-color="#ff2e88" stop-opacity="0"/><stop offset="1" stop-color="#ff2e88"/></linearGradient>
      <linearGradient id="${p}ml2" x1="0" x2="1"><stop offset="0" stop-color="#22d3ee" stop-opacity="0"/><stop offset="1" stop-color="#22d3ee"/></linearGradient>
    </defs>
    <rect width="800" height="600" fill="#07040f"/>
    <circle cx="240" cy="220" r="300" fill="url(#${p}m)"/>
    <circle cx="620" cy="400" r="300" fill="url(#${p}c)"/>
    <g stroke="#22d3ee" stroke-opacity=".28"><path d="M0 440H800M0 465H800M0 500H800M0 548H800"/><path d="M400 430L400 600M400 430L240 600M400 430L80 600M400 430L560 600M400 430L720 600M400 430L-80 600M400 430L880 600"/></g>
    <ellipse cx="405" cy="440" rx="190" ry="18" fill="#22d3ee" opacity=".35"/>
    <g stroke-width="6" stroke-linecap="round"><path d="M110 318H240" stroke="url(#${p}ml)"/><path d="M70 346H230" stroke="url(#${p}ml2)"/><path d="M130 374H236" stroke="url(#${p}ml)"/><path d="M90 402H232" stroke="url(#${p}ml2)"/></g>
    <g transform="rotate(-8 405 360)">${sneaker(`url(#${p}up)`, "#111", "#ff2e88", "#7a7a8c")}<path d="M262 404H546" stroke="#22d3ee" stroke-width="3"/></g>
    <text x="566" y="150" font-family="${F}" font-weight="900" font-size="58" letter-spacing="-2" fill="#fff">${tr(L, "БЕГИ", "RUN")}</text>
    <text x="566" y="206" font-family="${F}" font-weight="900" font-size="46" letter-spacing="-2" fill="#22d3ee">${tr(L, "БЫСТРЕЕ", "FASTER")}</text>
    <text x="568" y="240" font-family="${F}" font-size="16" fill="#fff" opacity=".82">${tr(L, "Новая коллекция · −20%", "New collection · −20%")}</text>
    <rect x="568" y="262" width="132" height="38" rx="19" fill="#ff2e88"/>
    <text x="634" y="286" text-anchor="middle" font-family="${F}" font-weight="700" font-size="14" fill="#fff">${tr(L, "Купить", "Shop now")}</text>
    <text x="40" y="540" font-family="'JetBrains Mono',monospace" font-size="13" fill="#fff" opacity=".8">0:06 / 0:15</text>
    <rect x="40" y="556" width="720" height="4" rx="2" fill="#fff" opacity=".22"/>
    <rect x="40" y="556" width="290" height="4" rx="2" fill="#fff"/>
    <circle cx="330" cy="558" r="7" fill="#fff"/>
    <path d="M736 528v14h6l8 7v-28l-8 7z" fill="#fff" opacity=".85"/>`)
};

/* ---------- 3. Сайт: кофейня ---------- */
function browser(bg, bar, url, urlFill, dots){
  return `<rect x="70" y="60" width="660" height="480" rx="14" fill="${bg}"/>
    <path d="M70 74a14 14 0 0 1 14-14h632a14 14 0 0 1 14 14v24H70z" fill="${bar}"/>
    <g fill="${dots}"><circle cx="92" cy="79" r="5"/><circle cx="110" cy="79" r="5"/><circle cx="128" cy="79" r="5"/></g>
    <rect x="290" y="68" width="220" height="22" rx="11" fill="${urlFill}"/>
    <text x="400" y="83" text-anchor="middle" font-family="${F}" font-size="11" fill="${dots}">${url}</text>`;
}
const site = {
  before: (p, L) => svg(`
    <defs>${grain(p)}</defs>
    <rect width="800" height="600" fill="#9b9b9b"/>
    ${browser("#efefef", "#d5d5d5", "instagram.com/coffee_point", "#e6e6e6", "#9a9a9a")}
    <circle cx="150" cy="160" r="36" fill="#c9c9c9"/>
    <text x="204" y="152" font-family="${F}" font-weight="700" font-size="18" fill="#555">coffee_point</text>
    <text x="204" y="176" font-family="${F}" font-size="14" fill="#8a8a8a">${tr(L, "Меню и цены — в директ", "Menu and prices — DM us")}</text>
    <rect x="560" y="140" width="130" height="34" rx="8" fill="#d9d9d9"/><text x="625" y="162" text-anchor="middle" font-family="${F}" font-size="13" fill="#777">${tr(L, "Написать", "Message")}</text>
    <g fill="#d2d2d2"><rect x="110" y="220" width="186" height="148"/><rect x="307" y="220" width="186" height="148" fill="#c6c6c6"/><rect x="504" y="220" width="186" height="148"/><rect x="110" y="378" width="186" height="148" fill="#c9c9c9"/><rect x="307" y="378" width="186" height="148"/><rect x="504" y="378" width="186" height="148" fill="#c4c4c4"/></g>
    ${grainLayer(p, .06)}`),
  after: (p, L) => svg(`
    <defs>
      <radialGradient id="${p}bg" cx=".3" cy=".4" r=".9"><stop offset="0" stop-color="#5b3a22"/><stop offset="1" stop-color="#140d08"/></radialGradient>
      <linearGradient id="${p}cup" x1="0" x2="1"><stop offset="0" stop-color="#d9d2c8"/><stop offset=".4" stop-color="#fff"/><stop offset="1" stop-color="#bdb4a8"/></linearGradient>
      <radialGradient id="${p}cof"><stop offset="0" stop-color="#c88a52"/><stop offset="1" stop-color="#6b3a17"/></radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#${p}bg)"/>
    ${browser("#120c08", "#221911", "coffeepoint.ru", "#2e2218", "#a08a73")}
    <text x="100" y="128" font-family="${F}" font-weight="800" font-size="14" letter-spacing="2" fill="#f3e6d6">COFFEE POINT</text>
    <g font-family="${F}" font-size="12" fill="#c9b8a5"><text x="520" y="128">${tr(L, "Меню", "Menu")}</text><text x="572" y="128">${tr(L, "О нас", "About")}</text><text x="628" y="128">${tr(L, "Контакты", "Contact")}</text></g>
    <g opacity=".6" stroke="#f3e6d6" stroke-width="3" fill="none" stroke-linecap="round"><path d="M200 196q-12-16 0-30t0-30"/><path d="M228 196q-12-16 0-30t0-30"/><path d="M256 196q-12-16 0-30t0-30"/></g>
    <ellipse cx="228" cy="330" rx="118" ry="22" fill="#3a2a1e"/>
    <ellipse cx="228" cy="324" rx="118" ry="22" fill="url(#${p}cup)"/>
    <path d="M146 222h164l-14 92q-4 18-22 18h-92q-18 0-22-18z" fill="url(#${p}cup)"/>
    <path d="M308 236q40 0 36 34t-42 30" fill="none" stroke="#e9e3da" stroke-width="12"/>
    <ellipse cx="228" cy="222" rx="82" ry="14" fill="url(#${p}cof)"/>
    <path d="M228 230c-14-8-22-14-14-20 6-4 12 0 14 4 2-4 8-8 14-4 8 6 0 12-14 20z" fill="#f6e7d2"/>
    <text x="424" y="214" font-family="${F}" font-weight="800" font-size="30" letter-spacing="-1" fill="#f6ead9">${tr(L, "Кофе, который", "Coffee that")}</text>
    <text x="424" y="252" font-family="${F}" font-weight="800" font-size="30" letter-spacing="-1" fill="#e9a25b">${tr(L, "будит город", "wakes the city")}</text>
    <text x="424" y="282" font-family="${F}" font-size="13" fill="#c9b8a5">${tr(L, "Свежая обжарка · доставка за 20 мин", "Fresh roast · delivery in 20 min")}</text>
    <rect x="424" y="304" width="164" height="44" rx="22" fill="#e9a25b"/>
    <text x="506" y="331" text-anchor="middle" font-family="${F}" font-weight="700" font-size="14" fill="#1a110a">${tr(L, "Заказать онлайн", "Order online")}</text>
    <rect x="600" y="304" width="96" height="44" rx="22" fill="none" stroke="#e9a25b"/>
    <text x="648" y="331" text-anchor="middle" font-family="${F}" font-weight="600" font-size="14" fill="#e9a25b">${tr(L, "Меню", "Menu")}</text>
    ${[[tr(L, "Капучино", "Cappuccino"), tr(L, "250 ₽", "$3")], [tr(L, "Латте", "Latte"), tr(L, "270 ₽", "$3.5")], [tr(L, "Раф", "Raf"), tr(L, "290 ₽", "$4")]].map((c,i) => `
      <rect x="${104 + i*202}" y="388" width="190" height="122" rx="12" fill="#1f1610" stroke="#3a2a1e"/>
      <circle cx="${134 + i*202}" cy="420" r="14" fill="#e9a25b" opacity=".9"/>
      <text x="${120 + i*202}" y="468" font-family="${F}" font-weight="700" font-size="16" fill="#f6ead9">${c[0]}</text>
      <text x="${120 + i*202}" y="492" font-family="${F}" font-weight="800" font-size="15" fill="#e9a25b">${c[1]}</text>`).join("")}`)
};

/* ---------- 4. ИИ-бот: салон красоты в Telegram (вид со стороны салона) ---------- */
function bubble(x, y, w, h, fill, lines, color, time, tcolor){
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${fill}"/>
    <text font-family="${F}" font-size="15" fill="${color}">${lines.map((l,i) => `<tspan x="${x+16}" y="${y+28+i*21}">${l}</tspan>`).join("")}</text>
    ${time ? `<text x="${x+w-12}" y="${y+h-10}" text-anchor="end" font-family="${F}" font-size="10" fill="${tcolor}">${time}</text>` : ""}`;
}
function chatHead(bg, avatar, name, status, statusFill, nameFill){
  return `<rect y="62" width="800" height="62" fill="${bg}"/>
    <circle cx="66" cy="93" r="20" fill="${avatar}"/>
    <text x="66" y="99" text-anchor="middle" font-family="${F}" font-weight="800" font-size="16" fill="#fff">A</text>
    <text x="98" y="88" font-family="${F}" font-weight="700" font-size="16" fill="${nameFill}">${name}</text>
    <text x="98" y="108" font-family="${F}" font-size="12" fill="${statusFill}">${status}</text>`;
}
const bot = {
  before: (p, L) => svg(`
    <rect width="800" height="600" fill="#1c1e21"/>
    ${chatHead("#26292d", "#4a4d52", tr(L, "Анна · клиентка", "Anna · client"), tr(L, "в сети", "online"), "#7d8085", "#d0d0d0")}
    ${bubble(50, 150, 330, 50, "#2e3136", [tr(L, "Здравствуйте! Есть запись на завтра?", "Hi! Any slots for tomorrow?")], "#c8ccd2", "21:47", "#7d8592")}
    ${bubble(50, 214, 250, 50, "#2e3136", [tr(L, "Сколько стоит маникюр?", "How much is a manicure?")], "#c8ccd2", "21:52", "#7d8592")}
    ${bubble(50, 278, 120, 50, "#2e3136", [tr(L, "Ау?", "Hello?")], "#c8ccd2", "23:10", "#7d8592")}
    ${bubble(50, 342, 290, 50, "#2e3136", [tr(L, "Ладно, запишусь в другой", "Never mind, I'll book elsewhere")], "#c8ccd2", "23:24", "#7d8592")}
    <rect x="50" y="420" width="290" height="34" rx="17" fill="#2c2f33"/>
    <text x="195" y="442" text-anchor="middle" font-family="${F}" font-size="13" fill="#868a90">${tr(L, "Менеджер ответит утром…", "Manager replies in the morning…")}</text>
    <rect x="40" y="520" width="720" height="48" rx="24" fill="#26292d"/>
    <text x="68" y="549" font-family="${F}" font-size="14" fill="#6a6d72">${tr(L, "Сообщение", "Message")}</text>`),
  after: (p, L) => svg(`
    <defs><linearGradient id="${p}av" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f472b6"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
    <rect width="800" height="600" fill="#0e1621"/>
    ${chatHead("#17212b", `url(#${p}av)`, tr(L, "Анна · клиентка", "Anna · client"), tr(L, "отвечает ИИ-ассистент", "AI assistant is replying"), "#4fbcff", "#fff")}
    ${bubble(50, 146, 220, 50, "#182533", [tr(L, "Есть запись на завтра?", "Any slots tomorrow?")], "#fff", "21:47", "#6d8299")}
    ${bubble(330, 206, 420, 74, "#2b5278", [tr(L, "Да! Свободные окна на завтра:", "Yes! Free slots tomorrow:"), tr(L, "Маникюр + покрытие — 2 500 ₽", "Manicure + gel — $30")], "#fff", "21:47 ✓✓", "#8fc1ea")}
    ${["10:00", "12:30", "15:00", "18:00"].map((t,i) => `<rect x="${330 + i*106}" y="288" width="100" height="38" rx="10" fill="${i===2 ? "#4fbcff" : "#1f3a55"}"/><text x="${380 + i*106}" y="312" text-anchor="middle" font-family="${F}" font-weight="700" font-size="14" fill="${i===2 ? "#0e1621" : "#cfe6fa"}">${t}</text>`).join("")}
    ${bubble(50, 342, 100, 50, "#182533", ["15:00"], "#fff", "21:47", "#6d8299")}
    ${bubble(330, 404, 420, 74, "#2b5278", [tr(L, "✓ Готово! Записала вас на завтра в 15:00.", "✓ Done! You're booked for 3 pm tomorrow."), tr(L, "Напомню за 2 часа до визита.", "I'll remind you 2 hours before.")], "#fff", "21:47 ✓✓", "#8fc1ea")}
    <rect x="550" y="510" width="200" height="40" rx="20" fill="#4fbcff"/>
    <text x="650" y="535" text-anchor="middle" font-family="${F}" font-weight="700" font-size="14" fill="#0e1621">${tr(L, "⚡ ответ за 2 сек · 24/7", "⚡ 2 sec reply · 24/7")}</text>`)
};

window.SCENES = { product, video, site, bot };
})();
