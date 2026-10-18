/* Картинки бренда: превью для ссылок (img/og-ru.png, img/og-en.png), favicon.svg / favicon.ico, apple-touch-icon.png.
   Рисуются из HTML в Google Chrome без окна: cd _tools && node images.mjs */
import { execFileSync } from "node:child_process";
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

/* Знак: «Λ» без перекладины и квадрат-узел на её месте (вариант 41 из brand/logo-min). Сетка 64, центр 32 */
const mark = (k = 1) => `<g transform="translate(32 32) scale(${k}) translate(-32 -32)" fill="#f4f4f2"><path d="M22 44L30.2 20H33.8L42 44H38.4L32 25.27L25.6 44Z"/><rect x="30.6" y="35" width="2.8" height="2.8"/></g>`;
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#050505"/>${mark(1.5)}</svg>`;
/* Android: maskable-иконка — фон на всю форму, знак внутри безопасного круга (80% диаметра) */
const maskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#050505"/>${mark(1)}</svg>`;
const touch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#050505"/>${mark(1.3)}</svg>`;

const FONTS = `<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;900&family=JetBrains+Mono:wght@400;500&display=block" rel="stylesheet">`;
const og = (lang) => {
  const t = lang === "ru"
    ? { meta: "<b>ИИ-агентство</b><br>полного цикла", line: "Рекламные ИИ-видео · Креативы · Сайты · Telegram ИИ-боты", tag: "Первый креатив — бесплатно" }
    : { meta: "<b>Full-cycle</b><br>AI agency", line: "AI ad videos · Creatives · Websites · Telegram AI bots", tag: "Your first creative is free" };
  return `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:630px;background:#050505;color:#f4f4f2;font-family:"Inter Tight",sans-serif;overflow:hidden}
body{position:relative;padding:64px 72px}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(244,244,242,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(244,244,242,.07) 1px,transparent 1px);background-size:75px 75px;-webkit-mask-image:radial-gradient(ellipse 75% 75% at 50% 35%,#000 25%,transparent 80%)}
.glow{position:absolute;width:900px;height:900px;left:50%;top:-55%;transform:translateX(-50%);background:radial-gradient(circle,rgba(244,244,242,.12),transparent 60%)}
.c{position:absolute;width:26px;height:26px;border:2px solid #f4f4f2}
.c1{top:28px;left:28px;border-right:0;border-bottom:0}.c2{top:28px;right:28px;border-left:0;border-bottom:0}
.c3{bottom:28px;left:28px;border-right:0;border-top:0}.c4{bottom:28px;right:28px;border-left:0;border-top:0}
.mono{font-family:"JetBrains Mono",monospace;font-size:17px;letter-spacing:.1em;text-transform:uppercase}
.top{position:relative;display:flex;justify-content:space-between;color:rgba(244,244,242,.6)}
.top b{color:#f4f4f2;font-weight:500}
.brand{position:relative;margin-top:44px;font-weight:900;letter-spacing:-.035em;line-height:.84;font-size:var(--fs)}
.row{display:flex;align-items:flex-end;gap:28px}
.g{background:linear-gradient(180deg,#f4f4f2 10%,rgba(244,244,242,.14) 95%);-webkit-background-clip:text;color:transparent}
.rule{flex:1;height:2px;background:rgba(244,244,242,.25);margin-bottom:.16em}
.meta{margin-bottom:.12em;text-align:right;line-height:1.6;color:rgba(244,244,242,.6);font-size:20px}
.meta b{color:#f4f4f2;font-weight:500}
.line{position:absolute;left:72px;right:72px;bottom:64px;font-size:30px;font-weight:500;letter-spacing:-.01em;color:rgba(244,244,242,.8)}
</style></head><body><div class="grid"></div><div class="glow"></div>
<i class="c c1"></i><i class="c c2"></i><i class="c c3"></i><i class="c c4"></i>
<div class="top mono"><span><b>●</b>&nbsp; ${t.tag}</span><span><b>arhitector-ai.ru</b></span></div>
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
  background_color: "#050505", theme_color: "#050505",
  icons: [192, 512].flatMap(s => [
    { src: `/img/icon-${s}.png`, sizes: `${s}x${s}`, type: "image/png", purpose: "any" },
    { src: `/img/icon-maskable-${s}.png`, sizes: `${s}x${s}`, type: "image/png", purpose: "maskable" }
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
fs.rmSync(TMP, { recursive: true, force: true });
