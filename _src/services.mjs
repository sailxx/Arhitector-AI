/* Страницы услуг (RU) для поиска по конкретным запросам.
   Тексты — в SERVICES ниже, оформление — в page(). Собирает _tools/build.mjs → /<slug>/index.html.
   Цены держите такими же, как PRICES в _src/index.html. */

export const ORIGIN = "https://arhitector-ai.ru";
const TG = "https://t.me/arkhitkov";

export const SERVICES = [
  {
    slug: "ii-video", nav: "ИИ-видео",
    title: "Рекламные ИИ-видео для бизнеса — от 3 900 ₽ | ARHITECTOR AI",
    desc: "Создаём рекламные видео нейросетями: ролики для таргета, Reels, Shorts и маркетплейсов без съёмок. От 3 900 ₽, от 2 дней. Первый тест — бесплатно.",
    h1: "Рекламные ИИ-видео<br><span class='o'>для бизнеса</span>",
    name: "Рекламные ИИ-видео",
    lead: "Ролики для таргета, Reels, Shorts и карточек маркетплейсов — без съёмочной группы, студии и актёров. Пишем сценарий, генерируем видео нейросетями, монтируем и озвучиваем под ключ.",
    price: "3 900 ₽", term: "от 2 дней",
    includes: [
      ["Сценарий и хук", "Первые 2 секунды решают, досмотрят ли ролик. Придумываем зацепку и структуру под вашу аудиторию и площадку."],
      ["ИИ-генерация", "Создаём сцены в видео-нейросетях в стиле вашего бренда: товар в движении, атмосфера, люди, локации."],
      ["Монтаж и звук", "Собираем ролик, добавляем музыку, озвучку, субтитры и титры с оффером и призывом к действию."],
      ["Все форматы", "9:16 для Reels, Shorts и Stories, 1:1 и 4:5 для ленты, 16:9 для YouTube и сайта."],
      ["Правки включены", "Два круга правок входят в цену. Показываем промежуточные версии, чтобы не переделывать с нуля."],
      ["Готовые файлы", "Отдаём исходные ролики в нужном разрешении — используете в любой рекламе и на любых площадках."]
    ],
    who: [
      ["Селлерам Wildberries и Ozon", "Видео в карточку товара повышает внимание к ней в выдаче."],
      ["Таргет и посевы", "Ролики для VK Рекламы, Telegram Ads, Яндекс Директа и зарубежных площадок."],
      ["Блогам и брендам", "Регулярные Reels и Shorts без ежедневных съёмок."],
      ["Запуск продукта", "Видео нового товара, которого ещё нет на фото, — по описанию или эскизу."]
    ],
    faq: [
      ["Сколько стоит рекламное ИИ-видео?", "Ролик до 15 секунд — от 3 900 ₽. Цена зависит от длины, количества сцен и сложности: озвучка, персонажи, анимация товара. Точную стоимость называем до старта и не меняем по ходу работы."],
      ["Чем ИИ-видео лучше обычной съёмки?", "Не нужны студия, оператор, актёры и локации, поэтому ролик выходит в разы дешевле и быстрее — от 2 дней вместо нескольких недель. И можно сделать несколько вариантов для тестов вместо одного."],
      ["Можно сделать видео с моим товаром?", "Да. Пришлите фото товара с нескольких ракурсов — встроим его в сцены. Чем лучше исходные фото, тем точнее результат."],
      ["Будет заметно, что это нейросеть?", "Мы делаем ролики с режиссурой: отбираем лучшие генерации, дорабатываем в монтаже и следим за деталями. Стиль подбираем так, чтобы видео выглядело как дорогая реклама, а не как эксперимент."],
      ["Кому принадлежат права на ролик?", "Вам. После оплаты вы получаете готовые файлы и используете их в рекламе без ограничений."]
    ]
  },
  {
    slug: "kreativy", nav: "Креативы",
    title: "ИИ-креативы для рекламы и маркетплейсов — от 990 ₽ | ARHITECTOR AI",
    desc: "Рекламные креативы и карточки товаров с помощью нейросетей: баннеры для таргета, инфографика для Wildberries и Ozon, предметная ИИ-съёмка. От 990 ₽, от 24 часов.",
    h1: "ИИ-креативы для рекламы<br><span class='o'>и маркетплейсов</span>",
    name: "Креативы для рекламы",
    lead: "Баннеры для таргета, карточки товаров с инфографикой и предметная съёмка без фотостудии. Делаем десятки вариантов для тестов — вы оставляете те, что приносят клики и продажи.",
    price: "990 ₽", term: "от 24 часов",
    includes: [
      ["Баннеры для таргета", "Креативы для VK Рекламы, Telegram Ads, Яндекс Директа и соцсетей — с оффером и понятным призывом."],
      ["Карточки WB и Ozon", "Главное фото и слайды с инфографикой: преимущества, размеры, состав, сравнение."],
      ["Предметная ИИ-съёмка", "Ваш товар в студийном свете, на подиуме, в интерьере или в руках у модели — по обычному фото с телефона."],
      ["Визуал для соцсетей", "Посты, сторис и обложки в едином стиле бренда."],
      ["Пачки для тестов", "Несколько подходов и формулировок сразу, чтобы найти рабочую связку быстрее."],
      ["Все размеры", "Адаптируем каждый креатив под нужные площадки и форматы."]
    ],
    who: [
      ["Селлерам маркетплейсов", "Карточки, которые выделяются в выдаче и объясняют товар за секунды."],
      ["Таргетологам и агентствам", "Быстрый поток креативов для тестов без своего дизайнера."],
      ["Малому бизнесу", "Реклама кафе, салона, студии или магазина без фотосессии."],
      ["Экспертам и блогерам", "Обложки, анонсы и рекламные посты в одном стиле."]
    ],
    faq: [
      ["Сколько стоит рекламный креатив?", "От 990 ₽. Пачка креативов для тестов выходит дешевле в пересчёте на один. В пакете «Реклама» — 15 креативов и видео."],
      ["Что нужно от меня?", "Фото товара (подойдёт снимок на телефон), ссылка на карточку или сайт и пара слов о вашей аудитории. Остальное — тексты, идеи, визуал — делаем мы."],
      ["Подойдут ли карточки под требования маркетплейсов?", "Делаем в нужных размерах и по правилам оформления Wildberries и Ozon. Модерацию проводит сама площадка, поэтому перед работой сверяемся с её актуальными правилами."],
      ["Как быстро будут готовы креативы?", "Первые варианты — от 24 часов после брифа. Большие пачки и карточки с инфографикой — 2–3 дня."],
      ["Можно сначала посмотреть качество?", "Да. Первый креатив делаем бесплатно, чтобы вы увидели результат до оплаты."]
    ]
  },
  {
    slug: "sajt-pod-klyuch", nav: "Сайт под ключ",
    title: "Сайт под ключ — продающий лендинг от 7 900 ₽ | ARHITECTOR AI",
    desc: "Создание сайта под ключ: структура, тексты, дизайн, адаптив, заявки в Telegram и подключение к Яндексу. Лендинг от 7 900 ₽, от 5 дней.",
    h1: "Сайт под ключ<br><span class='o'>для вашего бизнеса</span>",
    name: "Сайт под ключ",
    lead: "Продающий лендинг или сайт услуг: продумываем структуру, пишем тексты, рисуем дизайн и запускаем. Заявки приходят сразу вам в Telegram — без сложных админок.",
    price: "7 900 ₽", term: "от 5 дней",
    includes: [
      ["Структура и тексты", "Разбираем ваш бизнес и пишем тексты, которые отвечают на вопросы клиента и ведут к заявке."],
      ["Дизайн", "Современный дизайн под ваш стиль: чистый, быстрый и понятный на любом экране."],
      ["Адаптив", "Сайт одинаково удобен на телефоне, планшете и компьютере — большинство клиентов приходят с телефона."],
      ["Заявки в Telegram", "Кнопки и формы ведут в ваш Telegram, WhatsApp или CRM — ни одна заявка не теряется."],
      ["Базовое SEO", "Мета-теги, карта сайта, быстрая загрузка, подключение к Яндекс Вебмастеру и Google."],
      ["Домен и запуск", "Поможем купить домен на ваше имя, подключим его и опубликуем сайт."]
    ],
    who: [
      ["Кафе, салонам, студиям", "Меню, прайс, запись и контакты в одном месте вместо «цены в директ»."],
      ["Экспертам и специалистам", "Сайт-визитка с услугами, отзывами и записью на консультацию."],
      ["Под рекламу", "Лендинг под одну услугу или товар, чтобы реклама окупалась."],
      ["Новому бизнесу", "Быстрый старт: от идеи до работающего сайта за неделю."]
    ],
    faq: [
      ["Сколько стоит сайт под ключ?", "Лендинг — от 7 900 ₽. Цена зависит от количества блоков и страниц, текстов и интеграций. Точную сумму называем после короткого разбора задачи."],
      ["Сколько времени занимает разработка?", "Лендинг — от 5 дней. Сайт из нескольких страниц — 1–2 недели. Сроки фиксируем до старта."],
      ["Кто платит за домен и хостинг?", "Домен оформляется на вас, обычно это несколько сотен рублей в год. Для простого лендинга хостинг может быть бесплатным или стоить совсем немного — подберём вариант заранее."],
      ["Сайт будет моим?", "Да. Домен и сайт принадлежат вам, исходные файлы передаём после оплаты."],
      ["Сайт будет находиться в Яндексе?", "Делаем техническую основу для поиска и подключаем Яндекс Вебмастер. Позиции зависят от конкуренции и содержания, поэтому для продвижения можно добавить отдельные страницы под каждую услугу."]
    ]
  },
  {
    slug: "telegram-ii-bot", nav: "ИИ-бот",
    title: "Telegram ИИ-бот для бизнеса — от 4 900 ₽ | ARHITECTOR AI",
    desc: "Разработка Telegram-ботов с искусственным интеллектом: отвечают клиентам 24/7, принимают заявки и записывают. Автоматизация заявок, CRM и отчётов. От 4 900 ₽.",
    h1: "Telegram ИИ-бот<br><span class='o'>и автоматизация бизнеса</span>",
    name: "Telegram ИИ-бот",
    lead: "Бот с искусственным интеллектом отвечает клиентам за секунды в любое время, рассказывает о ценах, принимает заявки и записывает. А рутину — заявки, таблицы, отчёты — забирает автоматизация.",
    price: "4 900 ₽", term: "от 5 дней",
    includes: [
      ["Ответы 24/7", "Бот отвечает на вопросы по вашему прайсу, услугам и правилам — по базе знаний, которую мы собираем вместе."],
      ["Заявки и запись", "Собирает контакты, предлагает свободное время и записывает клиента без участия менеджера."],
      ["Передача человеку", "Сложные вопросы бот передаёт вам или менеджеру вместе с историей переписки."],
      ["Уведомления", "Напоминания о записи, рассылки по базе, новые заявки — вам в Telegram."],
      ["Таблицы и CRM", "Заявки сразу попадают в Google Таблицы, amoCRM, Bitrix24 или другую систему."],
      ["Автоматизация рутины", "Связываем сервисы через n8n или Make: отчёты, обработка заявок, перенос данных."]
    ],
    who: [
      ["Салонам и студиям", "Запись клиентов вечером и в выходные, когда администратор не на связи."],
      ["Онлайн-школам и экспертам", "Ответы на типовые вопросы и сбор заявок на курсы и консультации."],
      ["Магазинам", "Консультации по товарам, статус заказа, сбор заказов."],
      ["Любому бизнесу с заявками", "Ни одна заявка не теряется и не ждёт ответа до утра."]
    ],
    faq: [
      ["Сколько стоит Telegram ИИ-бот?", "От 4 900 ₽ за бота с ответами по базе знаний и приёмом заявок. Запись по расписанию, интеграции с CRM и автоматизации считаем отдельно — сумму называем до старта."],
      ["Есть ли ежемесячные расходы?", "Да, небольшие: оплата нейросети (API) и сервера идёт напрямую на ваш аккаунт. Обычно это немного, расчёт под ваш объём сообщений покажем заранее."],
      ["Не будет ли бот отвечать ерунду?", "Бот отвечает только по вашей базе знаний и правилам. Если вопрос вне её — честно говорит об этом и передаёт диалог человеку."],
      ["Можно бота для WhatsApp или VK?", "Основная специализация — Telegram. Другие мессенджеры обсуждаем индивидуально."],
      ["Что нужно от меня?", "Прайс, ответы на частые вопросы клиентов и правила записи. Если их нет в готовом виде — поможем собрать."]
    ]
  }
];

const esc = s => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const strip = s => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
/* Пиксельный знак «Λ» (8 квадратов на сетке 5×4), как в шапке главной */
const PIXELS = [[2,0],[1,1],[3,1],[0,2],[4,2],[0,3],[2,3],[4,3]].map(([x, y]) => `<rect x="${x * 10}" y="${y * 10}" width="10" height="10"/>`).join("");
const MARK = (fill, w) => `<svg aria-hidden="true" width="${w}" height="${w * .8}" viewBox="0 0 50 40"><g fill="${fill}">${PIXELS}</g></svg>`;

export function page(s) {
  const url = `${ORIGIN}/${s.slug}/`;
  const others = SERVICES.filter(x => x !== s);
  const ld = [
    { "@context": "https://schema.org", "@type": "Service", name: s.name, description: strip(s.lead), url,
      areaServed: ["RU", "Worldwide"], provider: { "@type": "Organization", name: "ARHITECTOR AI", url: ORIGIN + "/" },
      offers: { "@type": "Offer", priceCurrency: "RUB", price: s.price.replace(/\D/g, ""), url } },
    { "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: s.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: ORIGIN + "/" },
      { "@type": "ListItem", position: 2, name: s.name, item: url } ] }
  ];
  return `<!doctype html>
<!-- Сгенерировано _tools/build.mjs из _src/services.mjs. Правьте исходник, а не этот файл. -->
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(s.title)}</title>
<meta name="description" content="${esc(s.desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="ARHITECTOR AI">
<meta property="og:locale" content="ru_RU">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(s.title)}">
<meta property="og:description" content="${esc(s.desc)}">
<meta property="og:image" content="${ORIGIN}/img/og-ru.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#050507">
<link rel="icon" href="/favicon.ico?v=d7b9df2c" sizes="48x48">
<link rel="icon" href="/favicon.svg?v=d7b9df2c" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=d7b9df2c">
<link rel="manifest" href="/manifest.webmanifest?v=d7b9df2c">
<link rel="preload" href="/fonts/inter-tight-cyrillic-0.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/fonts/fonts.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script>/* тема до первой отрисовки, как на главной */try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}</script>
<style>
:root{--bg:#050507;--bg-2:#0b0b0d;--fg:#f5f4f2;--muted:rgba(245,244,242,.6);--faint:rgba(245,244,242,.36);--line:rgba(245,244,242,.09);--line-2:rgba(245,244,242,.2);--card:#111115;--grid:rgba(255,255,255,.055);--red:#ff3b30;--glow:rgba(232,36,28,.16);
  --plashka:radial-gradient(70% 90% at 85% 0%,#ff6a3d 0%,transparent 60%),radial-gradient(60% 80% at 0% 100%,#b5101a 0%,transparent 65%),#e8241c;
  --mono:"JetBrains Mono",ui-monospace,monospace;--serif:"Instrument Serif",Georgia,"Times New Roman",serif;--pad:clamp(16px,4vw,48px)}
[data-theme="light"]{--bg:#f7f6f3;--bg-2:#efeeea;--fg:#0b0b0d;--muted:rgba(11,11,13,.62);--faint:rgba(11,11,13,.42);--line:rgba(11,11,13,.1);--line-2:rgba(11,11,13,.22);--card:#fff;--grid:rgba(0,0,0,.065);--red:#d42a20;--glow:rgba(212,42,32,.1)}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{background:var(--bg);color:var(--fg);font-family:"Inter Tight",system-ui,-apple-system,"Segoe UI",sans-serif;font-size:16px;line-height:1.55;overflow-x:hidden;-webkit-font-smoothing:antialiased;transition:background-color .4s,color .4s}
a{color:inherit;text-decoration:none}
::selection{background:#e8241c;color:#fff}
.wrap{max-width:1240px;margin:0 auto;padding:0 var(--pad)}
.mono{font-family:var(--mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase}
.r{color:var(--red)}
.redtext{background:var(--plashka);-webkit-background-clip:text;background-clip:text;color:transparent}
.sq{display:inline-block;width:7px;height:7px;background:var(--red);flex:none}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;height:58px;padding:0 30px;border-radius:999px;font-weight:600;font-size:16px;white-space:nowrap;transition:transform .2s,border-color .2s}
.btn:hover{transform:translateY(-2px)}
.btn-red{background:var(--plashka);color:#fff;box-shadow:0 20px 60px -20px rgba(255,59,48,.7)}
.btn-ghost{border:1px solid var(--line-2)}
.btn-ghost:hover{border-color:var(--fg)}
header{position:sticky;top:0;z-index:20;background:color-mix(in srgb,var(--bg) 82%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.nav{display:flex;align-items:center;justify-content:space-between;gap:20px;height:72px}
.logo{display:inline-flex;align-items:center;gap:12px;font-weight:900;font-size:19px;letter-spacing:-.03em}
.nav-links{display:flex;gap:24px}
.nav-links a{color:var(--muted);transition:color .2s}
.nav-links a:hover,.nav-links a[aria-current]{color:var(--fg)}
.nav-links a[aria-current]{color:var(--red)}
.nav-right{display:flex;align-items:center;gap:12px}
.theme{width:58px;height:44px;border:0;background:none;cursor:pointer;display:flex;align-items:center}
.theme span{position:relative;display:block;width:58px;height:30px;border-radius:999px;border:1px solid var(--line-2)}
.theme span::after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--fg);transition:transform .35s cubic-bezier(.2,.7,.2,1)}
[data-theme="light"] .theme span::after{transform:translateX(28px)}
.theme:focus-visible span{outline:2px solid var(--red);outline-offset:2px}
.nav .btn{height:44px;padding:0 20px;font-family:var(--mono);font-size:13px;letter-spacing:.08em;font-weight:700}
.hero{position:relative;isolation:isolate;overflow:hidden;padding:clamp(32px,5vw,56px) 0 clamp(64px,8vw,104px)}
.layer{position:absolute;inset:0;pointer-events:none;z-index:-1}
.grid-bg{background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px);background-size:112px 112px}
.glow{background:radial-gradient(45% 50% at 20% 60%,var(--glow),transparent 70%)}
.scan{position:absolute;left:0;right:0;top:0;height:120px;background:linear-gradient(180deg,transparent,rgba(255,59,48,.06) 85%,rgba(255,59,48,.3) 100%);animation:scan 7s cubic-bezier(.6,0,.4,1) infinite}
@keyframes scan{from{transform:translateY(-120px)}to{transform:translateY(900px)}}
.crumbs{color:var(--faint)}
.crumbs a:hover{color:var(--fg)}
.tag{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--line-2);border-radius:999px;padding:10px 18px;margin:48px 0 32px}
h1{font-size:clamp(44px,8vw,120px);line-height:.9;letter-spacing:-.055em;font-weight:900;max-width:1100px}
h1 .o{display:inline-block;font-family:var(--serif);font-style:italic;font-weight:400;letter-spacing:-.01em;padding-right:.08em;background:var(--plashka);-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{margin-top:32px;font-size:clamp(19px,1.9vw,25px);line-height:1.35;font-weight:500;letter-spacing:-.015em;max-width:760px}
.offer{margin-top:48px;padding-top:32px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;align-items:center;gap:20px 32px}
.price{font-size:clamp(40px,4.6vw,60px);font-weight:900;letter-spacing:-.05em;line-height:1}
.price small{font-size:18px;font-weight:600;margin-right:8px}
.term{color:var(--muted);margin-top:8px}
.cta{display:flex;flex-wrap:wrap;gap:12px;margin-left:auto}
section.block{padding:clamp(72px,9vw,128px) 0}
.head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:20px 48px;margin-bottom:48px}
.head .mono{display:block;color:var(--red);margin-bottom:18px}
h2{font-size:clamp(38px,5.6vw,84px);line-height:.88;letter-spacing:-.055em;font-weight:900;text-transform:uppercase}
h2 .o{font-family:var(--serif);font-style:italic;font-weight:400;text-transform:none;letter-spacing:-.01em;font-size:1.05em;color:var(--muted)}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.cell{position:relative;isolation:isolate;overflow:hidden;min-height:240px;padding:30px 28px;border:1px solid var(--line);border-radius:20px;background:var(--card);display:flex;flex-direction:column;gap:12px;transition:transform .35s cubic-bezier(.2,.7,.2,1),border-color .3s,color .3s}
.cell::before{content:"";position:absolute;inset:0;z-index:-1;opacity:0;transition:opacity .35s;background:var(--plashka)}
.cell:hover{transform:translateY(-6px);border-color:transparent;color:#fff}
.cell:hover::before{opacity:1}
.cell .n{font-family:var(--mono);font-size:12px;color:var(--red);margin-bottom:auto;transition:color .3s}
.cell:hover .n{color:#0b0b0d}
.cell h3{font-size:24px;letter-spacing:-.035em;font-weight:800;line-height:1.1;margin-top:28px}
.cell p{color:var(--muted);font-size:15px;transition:color .3s}
.cell:hover p{color:rgba(255,255,255,.86)}
.who{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line)}
.who div{padding:28px 28px 28px 0;border-bottom:1px solid var(--line);display:flex;gap:16px}
.who div::before{content:"";flex:none;width:8px;height:8px;margin-top:10px;background:var(--red)}
.who b{display:block;font-size:22px;letter-spacing:-.03em;font-weight:800;margin-bottom:6px}
.who span{color:var(--muted)}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;counter-reset:s}
.steps div{display:flex;flex-direction:column;gap:10px}
.steps div::before{counter-increment:s;content:"0" counter(s);font-size:96px;font-weight:900;letter-spacing:-.06em;line-height:.8;color:transparent;-webkit-text-stroke:1.5px var(--fg);margin-bottom:16px}
.steps div:last-child::before{color:var(--red);-webkit-text-stroke:0}
.steps b{font-size:21px;letter-spacing:-.03em;font-weight:800}
.steps span{color:var(--muted);font-size:15px}
.faq{border-top:1px solid var(--line);counter-reset:q}
.faq details{border-bottom:1px solid var(--line)}
.faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:16px;padding:26px 0;font-size:clamp(18px,1.8vw,23px);font-weight:700;letter-spacing:-.02em;transition:color .2s}
.faq summary:hover{color:var(--red)}
.faq summary::before{counter-increment:q;content:"0" counter(q);width:28px;flex:none;font-family:var(--mono);font-size:12px;font-weight:400;color:var(--red)}
.faq summary::-webkit-details-marker{display:none}
.faq .q{flex:1}
.faq .pm{flex:none;width:44px;height:44px;border:1px solid var(--line-2);border-radius:50%;display:grid;place-items:center;font-size:22px;font-weight:300;color:var(--fg);transition:transform .35s,background .3s,border-color .3s,color .3s}
.faq details[open] .pm{transform:rotate(45deg);background:#e8241c;border-color:#e8241c;color:#fff}
.faq details p{padding:0 72px 26px 44px;color:var(--muted);max-width:860px;font-size:17px}
.more{border-top:1px solid var(--line)}
.more a{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:28px 0;border-bottom:1px solid var(--line);font-weight:800;font-size:clamp(24px,3vw,40px);letter-spacing:-.04em;transition:color .25s}
.more a span{font-size:.8em;transition:transform .35s cubic-bezier(.2,.7,.2,1)}
.more a:hover{color:var(--red)}
.more a:hover span{transform:translateX(10px)}
.final-card{position:relative;isolation:isolate;overflow:hidden;border-radius:28px;background:var(--plashka);color:#fff;padding:56px 48px 40px;display:flex;flex-direction:column;gap:44px;box-shadow:0 40px 120px -30px rgba(255,59,48,.55)}
.final-card::before{content:"";position:absolute;inset:0;z-index:-1;background-image:linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 40%);mask-image:linear-gradient(90deg,transparent,#000 40%)}
.final-card .mark{position:absolute;right:48px;top:48px;width:260px;height:208px;opacity:.16;z-index:-1}
.badge{align-self:flex-start;display:inline-flex;align-items:center;gap:10px;padding:9px 16px;border-radius:999px;background:#0b0b0d}
.big{display:flex;align-items:center;gap:.12em;font-weight:900;font-size:clamp(52px,10vw,150px);line-height:.82;letter-spacing:-.065em;text-transform:uppercase}
.big span{display:inline-block;transition:transform .4s cubic-bezier(.2,.7,.2,1)}
.big:hover span{transform:translate(.08em,-.08em)}
.meta{display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;padding-top:24px;border-top:1px solid rgba(255,255,255,.35);font-weight:500}
footer{padding:48px 0 56px}
.foot{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:20px 40px;padding-bottom:28px;border-bottom:1px solid var(--line)}
.foot-links{display:flex;flex-wrap:wrap;gap:12px 28px}
.foot-links a:hover{color:var(--red)}
.legal{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:24px;padding-top:28px;font-size:14px;line-height:1.6;color:var(--muted)}
.legal b{color:var(--fg);font-weight:600}
.legal a{text-decoration:underline;text-underline-offset:3px}
.legal .mono{font-size:11px;max-width:420px;text-align:right;line-height:1.7}
@media (prefers-reduced-motion:reduce){.scan{animation:none}html{scroll-behavior:auto}}
@media (max-width:1000px){.nav-links{display:none}.grid{grid-template-columns:repeat(2,1fr)}.steps{grid-template-columns:repeat(2,1fr)}.cta{margin-left:0}}
@media (max-width:700px){.grid,.who{grid-template-columns:1fr}.steps{grid-template-columns:1fr}.faq details p{padding:0 0 24px 44px}.cta,.cta .btn{width:100%}.logo{font-size:17px}.final-card{padding:40px 24px 28px;gap:32px}.final-card .mark{display:none}.legal .mono{text-align:left}}
@media (max-width:440px){.nav .btn{display:none}}
</style>
</head>
<body>
<header>
  <div class="wrap nav">
    <a href="/" class="logo" aria-label="ARHITECTOR AI — на главную">${MARK("#ff3b30", 30)}ARHITECTOR AI</a>
    <nav class="nav-links mono" aria-label="Услуги">
      ${SERVICES.map(x => `<a href="/${x.slug}/"${x === s ? ' aria-current="page"' : ""}>/${x.nav}</a>`).join("\n      ")}
      <a href="/#faq">/FAQ</a>
    </nav>
    <div class="nav-right">
      <button class="theme" type="button" id="theme" role="switch" aria-checked="false" aria-label="Светлая тема"><span></span></button>
      <a class="btn btn-red" href="${TG}" target="_blank" rel="noopener">Обсудить ↪</a>
    </div>
  </div>
</header>

<main>
  <section class="hero">
    <div class="layer grid-bg"></div>
    <div class="layer glow"></div>
    <div class="layer" style="overflow:hidden"><div class="scan"></div></div>
    <div class="wrap">
      <nav class="crumbs mono" aria-label="Навигация"><a href="/">Главная</a> / <a href="/#services">Услуги</a> / <span>${s.name}</span></nav>
      <div class="tag mono"><span class="sq"></span>Услуга · ARHITECTOR AI</div>
      <h1>${s.h1}</h1>
      <p class="lead">${s.lead}</p>
      <div class="offer">
        <div><div class="price redtext"><small>от</small>${s.price}</div><div class="term mono">${s.term}</div></div>
        <div class="cta">
          <a class="btn btn-red" href="${TG}" target="_blank" rel="noopener">Обсудить задачу ↗</a>
          <a class="btn btn-ghost" href="/#services">Все услуги</a>
        </div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <div class="head"><div><span class="mono">/Что входит</span><h2>Делаем под ключ<br><span class="o">от идеи до результата</span></h2></div></div>
      <div class="grid">
        ${s.includes.map(([h, p], i) => `<div class="cell"><span class="n">0${i + 1}</span><h3>${h}</h3><p>${p}</p></div>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="block" style="padding-top:0">
    <div class="wrap">
      <div class="head"><div><span class="mono">/Кому подходит</span><h2>Для кого<br><span class="o">эта услуга</span></h2></div></div>
      <div class="who">
        ${s.who.map(([b, t]) => `<div><p><b>${b}</b><span>${t}</span></p></div>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="block" style="padding-top:0">
    <div class="wrap">
      <div class="head"><div><span class="mono">/Как работаем</span><h2>Четыре шага<br><span class="o">без лишних согласований</span></h2></div></div>
      <div class="steps">
        <div><b>Бесплатный разбор</b><span>Обсуждаем задачу в Telegram и делаем бесплатный тест.</span></div>
        <div><b>Цена и сроки</b><span>Фиксируем объём, стоимость и дату сдачи до старта.</span></div>
        <div><b>Работа и правки</b><span>Показываем промежуточные версии и вносим правки.</span></div>
        <div><b>Сдача и чек</b><span>Отдаём результат и официальный чек самозанятого.</span></div>
      </div>
    </div>
  </section>

  <section class="block" style="padding-top:0">
    <div class="wrap">
      <div class="head"><div><span class="mono">/FAQ</span><h2>Частые<br><span class="o">вопросы</span></h2></div></div>
      <div class="faq">
        ${s.faq.map(([q, a], i) => `<details${i === 0 ? " open" : ""}><summary><span class="q">${q}</span><span class="pm" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="block" style="padding-top:0">
    <div class="wrap">
      <div class="head"><div><span class="mono">/Ещё услуги</span><h2>Работают<br><span class="o">и в связке</span></h2></div></div>
      <div class="more">
        ${others.map(x => `<a href="/${x.slug}/">${x.name}<span>→</span></a>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="block" style="padding-top:0">
    <div class="wrap">
      <div class="final-card">
        <svg class="mark" aria-hidden="true" viewBox="0 0 50 40"><g fill="#fff">${PIXELS}</g></svg>
        <span class="badge mono"><span class="sq" style="background:#ff3b30"></span>Первый тест — бесплатно</span>
        <a class="big" href="${TG}" target="_blank" rel="noopener">Написать <span>↗</span></a>
        <div class="meta mono"><span>Telegram @arkhitkov</span><span>Ответ в течение 1 часа</span><span>Оплата 50 / 50</span></div>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <div class="foot">
      <a href="/" class="logo">${MARK("#ff3b30", 30)}arhitector-ai<span style="color:var(--muted)">.ru</span></a>
      <nav class="foot-links mono">
        <a href="${TG}" target="_blank" rel="noopener">/Telegram @arkhitkov</a>
        <a href="/#services">/Услуги</a>
        <a href="/#faq">/FAQ</a>
        <a href="/offer.html">/Договор-оферта</a>
      </nav>
      <span class="mono" style="color:var(--muted)">© 2026 ARHITECTOR AI</span>
    </div>
    <div class="legal">
      <div><span class="mono r">/Исполнитель</span><br><b>Архитьков Владислав Александрович · самозанятый</b><br>ИНН 245731471943<br><a href="mailto:vladislav.arkhitkov@gmail.com">vladislav.arkhitkov@gmail.com</a></div>
      <span class="mono">Сайт не собирает персональные данные и не использует cookie</span>
    </div>
  </div>
</footer>
<script>
/* переключатель темы — та же настройка, что на главной */
(function(){
  const b = document.getElementById("theme"), root = document.documentElement;
  const sync = () => b.setAttribute("aria-checked", root.dataset.theme === "light");
  b.onclick = () => {
    const light = root.dataset.theme !== "light";
    if (light) root.dataset.theme = "light"; else delete root.dataset.theme;
    try{ localStorage.setItem("theme", light ? "light" : "dark"); }catch(e){}
    sync();
  };
  sync();
})();
</script>
</body>
</html>
`;
}
