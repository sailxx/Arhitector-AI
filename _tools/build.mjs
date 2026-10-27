/* Сборка готовых страниц для поисковиков.
   Берёт _src/index.html, выполняет его скрипт (как браузер) и сохраняет уже заполненный текстом HTML:
     index.html     — русская версия  (https://arhitector-ai.ru/)
     en/index.html  — английская версия (https://arhitector-ai.ru/en/)
   Плюс страницы услуг из _src/services.mjs (/<slug>/index.html) и sitemap.xml.
   Править нужно только _src/, потом: cd _tools && npm install && node build.mjs */
import { JSDOM, ResourceLoader } from "jsdom";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://arhitector-ai.ru";
const template = fs.readFileSync(path.join(SITE, "_src/index.html"), "utf8");

const PAGES = {
  ru: { out: "index.html", url: "/", locale: "ru_RU",
        desc: "ARHITECTOR AI | рекламные ИИ-видео и креативы, сайты под ключ, автоматизация бизнеса с ИИ и Telegram ИИ-боты. Россия, СНГ и весь мир.",
        ogDesc: "Рекламные ИИ-видео и креативы, сайты под ключ, автоматизация и Telegram ИИ-боты. Первый креатив бесплатно." },
  en: { out: "en/index.html", url: "/en/", locale: "en_US",
        desc: "ARHITECTOR AI | AI ad videos and creatives, turnkey websites, AI business automation and Telegram AI bots. Worldwide.",
        ogDesc: "AI ad videos and creatives, turnkey websites, automation and Telegram AI bots. Your first creative is free." }
};

/* Отдаёт скрипты сайта с диска, остальное (шрифты и т. п.) не грузит */
class Local extends ResourceLoader {
  fetch(url) {
    const u = new URL(url);
    if (u.origin === ORIGIN && u.pathname.endsWith(".js")) return Promise.resolve(fs.readFileSync(path.join(SITE, u.pathname)));
    return null;
  }
}

async function build(lang) {
  const p = PAGES[lang];
  const html = template.replace('<html lang="ru">', `<html lang="${lang}">`);
  const dom = new JSDOM(html, {
    url: ORIGIN + p.url, runScripts: "dangerously", resources: new Local({ userAgent: "Mozilla/5.0 (prerender)" }), pretendToBeVisual: true,
    beforeParse(w) {
      w.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
    }
  });
  await new Promise(r => dom.window.addEventListener("load", r));
  const d = dom.window.document;

  /* head под язык страницы */
  const set = (sel, attr, v) => d.querySelector(sel).setAttribute(attr, v);
  d.querySelector("title").textContent = d.title;
  set('meta[name="description"]', "content", p.desc);
  set('link[rel="canonical"]', "href", ORIGIN + p.url);
  set('meta[property="og:url"]', "content", ORIGIN + p.url);
  set('meta[property="og:locale"]', "content", p.locale);
  set('meta[property="og:title"]', "content", d.title);
  set('meta[property="og:description"]', "content", p.ogDesc);
  set('meta[property="og:image"]', "content", `${ORIGIN}/img/og-${lang}.png`);

  /* убрать следы выполнения скрипта, которые на клиенте всё равно появятся заново */
  d.querySelectorAll(".rv").forEach(el => el.removeAttribute("style"));
  d.documentElement.classList.remove("has-cursor", "cur-on");
  if (!d.documentElement.className) d.documentElement.removeAttribute("class");

  const out = dom.serialize().replace("<!DOCTYPE html>", "<!doctype html>\n<!-- Сгенерировано _tools/build.mjs из _src/index.html. Правьте исходник, а не этот файл. -->");
  fs.mkdirSync(path.dirname(path.join(SITE, p.out)), { recursive: true });
  fs.writeFileSync(path.join(SITE, p.out), out);
  console.log(`${p.out}: ${(out.length / 1024).toFixed(0)} KB, «${d.title}»`);
  dom.window.close();
}

for (const lang of Object.keys(PAGES)) await build(lang);

/* страницы услуг */
const { SERVICES, page } = await import(pathToFileURL(path.join(SITE, "_src/services.mjs")).href);
for (const s of SERVICES) {
  fs.mkdirSync(path.join(SITE, s.slug), { recursive: true });
  fs.writeFileSync(path.join(SITE, s.slug, "index.html"), page(s));
  console.log(`${s.slug}/index.html`);
}

/* sitemap: главная RU/EN с hreflang, услуги, оферта */
const today = new Date().toISOString().slice(0, 10);
const hreflang = [["ru", "/"], ["en", "/en/"], ["x-default", "/"]]
  .map(([l, u]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${ORIGIN}${u}"/>\n`).join("");
const urls = [["/", hreflang], ["/en/", hreflang], ...SERVICES.map(s => [`/${s.slug}/`, ""]), ["/offer.html", ""]];
fs.writeFileSync(path.join(SITE, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(([u, h]) => `  <url>\n    <loc>${ORIGIN}${u}</loc>\n${h}    <lastmod>${today}</lastmod>\n  </url>`).join("\n")}
</urlset>
`);
console.log(`sitemap.xml: ${urls.length} адресов`);
