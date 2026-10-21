/* Картинки бренда: превью для ссылок (img/og-ru.png, img/og-en.png), favicon.svg / favicon.ico, apple-touch-icon.png.
   Рисуются из HTML в Google Chrome без окна: cd _tools && node images.mjs */
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = process.env.CHROME || [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome"
].find(p => fs.existsSync(p));
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), "arh-img-"));

/* Знак: пиксельная «Λ» из 8 квадратов на сетке 5×4 (строки: середина / 2 и 4 / края / края и середина).
   Рисуется белым по центру холста 64×64, cell — размер квадрата */
const PIXELS = [[2,0],[1,1],[3,1],[0,2],[4,2],[0,3],[2,3],[4,3]];
const mark = cell => {
  const x0 = 32 - cell * 2.5, y0 = 32 - cell * 2;
  return `<g fill="#ffffff" shape-rendering="crispEdges">${PIXELS.map(([x, y]) => `<rect x="${x0 + x * cell}" y="${y0 + y * cell}" width="${cell}" height="${cell}"/>`).join("")}</g>`;
};
/* Фон — красная плашка сайта: #e8241c, оранжевый свет сверху справа, тёмно-красный снизу слева; на крупных иконках ещё белая сетка */
const plate = (rx = 0, grid = false) => `<defs>
<radialGradient id="o" cx="85%" cy="0%" r="90%"><stop offset="0" stop-color="#ff6a3d"/><stop offset=".6" stop-color="#ff6a3d" stop-opacity="0"/></radialGradient>
<radialGradient id="d" cx="0%" cy="100%" r="80%"><stop offset="0" stop-color="#b5101a"/><stop offset=".65" stop-color="#b5101a" stop-opacity="0"/></radialGradient>
<clipPath id="c"><rect width="64" height="64" rx="${rx}"/></clipPath></defs>
<g clip-path="url(#c)"><rect width="64" height="64" fill="#e8241c"/><rect width="64" height="64" fill="url(#o)"/><rect width="64" height="64" fill="url(#d)"/>${grid
  ? `<g stroke="#fff" stroke-opacity=".12" stroke-width=".25">${[8, 16, 24, 32, 40, 48, 56].map(p => `<path d="M${p} 0V64M0 ${p}H64"/>`).join("")}</g>` : ""}</g>`;
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${plate(14)}${mark(8)}</svg>`;
/* Android: maskable-иконка — фон на всю форму, знак внутри безопасного круга (80% диаметра) */
const maskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${plate(0, true)}${mark(5.2)}</svg>`;
const touch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${plate(0, true)}${mark(6.4)}</svg>`;

/* Версия иконок в адресах (?v=…): картинки кэшируются на 30+ дней, а с новым адресом браузер и Android берут свежие */
const V = crypto.createHash("sha1").update(favicon + touch + maskable).digest("hex").slice(0, 8);

const FONTS = `<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;900&family=JetBrains+Mono:wght@400;500&display=block" rel="stylesheet">`;
const og = (lang) => {
  const t = lang === "ru"
    ? { meta: "<b>ИИ-агентство</b><br>полного цикла", line: "Рекламные ИИ-видео · Креативы · Сайты · Telegram ИИ-боты", tag: "Первый креатив — бесплатно" }
    : { meta: "<b>Full-cycle</b><br>AI agency", line: "AI ad videos · Creatives · Websites · Telegram AI bots", tag: "Your first creative is free" };
  return `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:630px;background:#050507;color:#f4f4f2;font-family:"Inter Tight",sans-serif;overflow:hidden}
body{position:relative;padding:64px 72px}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(244,244,242,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(244,244,242,.07) 1px,transparent 1px);background-size:75px 75px;-webkit-mask-image:radial-gradient(ellipse 75% 75% at 50% 35%,#000 25%,transparent 80%)}
.glow{position:absolute;inset:0;background:radial-gradient(40% 45% at 22% 62%,rgba(232,36,28,.22),transparent 70%),radial-gradient(45% 40% at 62% 0%,rgba(255,255,255,.08),transparent 70%)}
.c{position:absolute;width:26px;height:26px;border:2px solid #ff3b30}
.sq{display:inline-block;width:12px;height:12px;background:#ff3b30;margin-right:6px}
.c1{top:28px;left:28px;border-right:0;border-bottom:0}.c2{top:28px;right:28px;border-left:0;border-bottom:0}
.c3{bottom:28px;left:28px;border-right:0;border-top:0}.c4{bottom:28px;right:28px;border-left:0;border-top:0}
.mono{font-family:"JetBrains Mono",monospace;font-size:17px;letter-spacing:.1em;text-transform:uppercase}
.top{position:relative;display:flex;justify-content:space-between;color:rgba(244,244,242,.6)}
.top b{color:#f4f4f2;font-weight:500}
.brand{position:relative;margin-top:44px;font-weight:900;letter-spacing:-.035em;line-height:.84;font-size:var(--fs)}
.row{display:flex;align-items:flex-end;gap:28px}
.g{background:radial-gradient(70% 90% at 85% 0%,#ff6a3d 0%,transparent 60%),radial-gradient(60% 80% at 0% 100%,#b5101a 0%,transparent 65%),#e8241c;-webkit-background-clip:text;color:transparent}
.rule{flex:1;height:3px;background:linear-gradient(90deg,#e8241c,transparent);margin-bottom:.16em}
.meta{margin-bottom:.12em;text-align:right;line-height:1.6;color:rgba(244,244,242,.6);font-size:20px}
.meta b{color:#ff3b30;font-weight:500}
.logo{display:inline-flex;align-items:center;gap:14px;color:#f4f4f2;font-family:"Inter Tight",sans-serif;font-weight:900;font-size:24px;letter-spacing:-.02em;text-transform:none}
.line{position:absolute;left:72px;right:72px;bottom:64px;font-size:30px;font-weight:500;letter-spacing:-.01em;color:rgba(244,244,242,.8)}
</style></head><body><div class="grid"></div><div class="glow"></div>
<i class="c c1"></i><i class="c c2"></i><i class="c c3"></i><i class="c c4"></i>
<div class="top mono"><span class="logo"><svg width="40" height="32" viewBox="0 0 50 40"><g fill="#ff3b30">${PIXELS.map(([x, y]) => `<rect x="${x * 10}" y="${y * 10}" width="10" height="10"/>`).join("")}</g></svg>ARHITECTOR AI</span><span><i class="sq"></i>${t.tag}</span></div>
<div class="brand" id="b"><div class="row"><span id="w">ARHITECTOR</span></div><div class="row"><span class="g">AI</span><span class="rule"></span><span class="meta mono">${t.meta}</span></div></div>
<div class="line">${t.line}</div>
<script>document.fonts.ready.then(()=>{const w=document.getElementById("w"),b=document.getElementById("b");b.style.setProperty("--fs","100px");b.style.setProperty("--fs",(100*1056/w.getBoundingClientRect().width)+"px")})</script>
</body></html>`;
};

function shot(html, out, w, h) {
  const file = path.join(TMP, path.basename(out) + ".html");
  fs.writeFileSync(file, html);
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    `--window-size=${w},${h}`, "--virtual-time-budget=8000", "--default-background-color=00000000",
    `--screenshot=${out}`, "file:///" + file.replace(/\\/g, "/")], { stdio: "ignore" });
  console.log(path.relative(SITE, out), `${w}×${h}`);
}
const svgPage = (svg, size) => `<!doctype html><style>*{margin:0}body{width:${size}px;height:${size}px;overflow:hidden;background:transparent}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`;

if (!CHROME) throw new Error("Не нашёл Chrome — укажите путь в переменной CHROME");
fs.mkdirSync(path.join(SITE, "img"), { recursive: true });
fs.writeFileSync(path.join(SITE, "favicon.svg"), favicon + "\n");
for (const lang of ["ru", "en"]) shot(og(lang), path.join(SITE, `img/og-${lang}.png`), 1200, 630);
shot(svgPage(touch, 180), path.join(SITE, "apple-touch-icon.png"), 180, 180);
for (const s of [192, 512]) {
  shot(svgPage(touch, s), path.join(SITE, `img/icon-${s}.png`), s, s);
  shot(svgPage(maskable, s), path.join(SITE, `img/icon-maskable-${s}.png`), s, s);
}
fs.writeFileSync(path.join(SITE, "manifest.webmanifest"), JSON.stringify({
  id: "/", name: "ARHITECTOR AI", short_name: "ARHITECTOR", description: "ИИ-агентство полного цикла",
  lang: "ru", start_url: "/", scope: "/", display: "standalone",
  background_color: "#050507", theme_color: "#050507",
  icons: [192, 512].flatMap(s => [
    { src: `/img/icon-${s}.png?v=${V}`, sizes: `${s}x${s}`, type: "image/png", purpose: "any" },
    { src: `/img/icon-maskable-${s}.png?v=${V}`, sizes: `${s}x${s}`, type: "image/png", purpose: "maskable" }
  ])
}, null, 2) + "\n");
/* квадратный логотип для аватарок: Яндекс Бизнес, Kwork, Profi.ru, Авито, Telegram */
shot(svgPage(touch, 1024), path.join(SITE, "img/logo-1024.png"), 1024, 1024);

/* favicon.ico: PNG 16, 32 и 48 px внутри одного .ico (для Яндекса и старых браузеров) */
const sizes = [16, 32, 48];
const pngs = sizes.map(s => { const p = path.join(TMP, `fav${s}.png`); shot(svgPage(favicon, s), p, s, s); return fs.readFileSync(p); });
const head = Buffer.alloc(6 + 16 * sizes.length);
head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
let offset = head.length;
sizes.forEach((s, i) => {
  const e = 6 + 16 * i;
  head.writeUInt8(s, e); head.writeUInt8(s, e + 1); head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
  head.writeUInt32LE(pngs[i].length, e + 8); head.writeUInt32LE(offset, e + 12);
  offset += pngs[i].length;
});
fs.writeFileSync(path.join(SITE, "favicon.ico"), Buffer.concat([head, ...pngs]));
console.log("favicon.ico", sizes.join("/"));
/* Ссылки на иконки и manifest во всех страницах — с той же версией */
const pages = ["index.html", "offer.html", "_src/index.html", "_src/services.mjs", ...fs.readdirSync(SITE).filter(d => fs.existsSync(path.join(SITE, d, "index.html")) && d !== "_src").map(d => d + "/index.html")];
for (const f of new Set(pages)) {
  const file = path.join(SITE, f), html = fs.readFileSync(file, "utf8");
  const out = html.replace(/(href="\/(?:favicon\.ico|favicon\.svg|apple-touch-icon\.png|manifest\.webmanifest))(?:\?v=[0-9a-f]+)?"/g, `$1?v=${V}"`);
  if (out !== html) fs.writeFileSync(file, out);
}
console.log("icons v=" + V, [...new Set(pages)].length, "pages");
fs.rmSync(TMP, { recursive: true, force: true });
