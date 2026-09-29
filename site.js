// Three languages, one file. The page is complete in English without this script.
(function () {
  var T = {
    zh: {
      'nav.privacy': '隐私政策', 'nav.home': '首页',
      'hero.kicker': 'Claude 与 ChatGPT · 用量',
      'hero.title': '把你的 AI 用量，安静地记下来。',
      'hero.lead': 'Vyntrace 把 Claude 回顾和 ChatGPT 分析里的数字保存在你自己的浏览器里，再把这个月带到 iPhone 上：一株植物，一个大数字，几张小图。',
      'hero.chrome': '获取 Chrome 插件', 'hero.ios': 'iPhone 应用', 'hero.soon': '即将上架',
      'how.title': '三步，没有账号', 'how.sub': '不需要注册。你用自己的 Google 或 iCloud 登录，数据只在你自己的设备和网盘之间走。',
      's1.t': '保存', 's1.p': '插件在你打开 Claude 回顾或 ChatGPT 分析时，把这些报告原样存进浏览器。不会无限膨胀：同一个月只留最新的几份。',
      's2.t': '送出', 's2.p': '点一次“用 Google 登录”，或选一个 iCloud Drive 文件夹。它只写入自己创建的“Vyntrace Sync”文件夹。',
      's3.t': '看见', 's3.p': 'iPhone 应用和小组件读取这个文件夹，画出这个月的用量。手机读到之后，插件里会显示“已到 iPhone”。',
      'own.title': '数据属于你', 'own.sub': '我们没有服务器，也看不到你的任何数据。',
      'f1.k': '没有账号', 'f1.v': '不需要注册或登录 Vyntrace。',
      'f2.k': '只看自己的文件夹', 'f2.v': 'Google 授权范围是 drive.file：只能访问 Vyntrace 自己创建的文件。',
      'f3.k': '随时撤销', 'f3.v': '在 Google 账号的“第三方应用访问权限”里可一键撤销。',
      'f4.k': '不卖数据', 'f4.v': '不出售数据，也不用你的报告来投放广告。',
      'foot.copy': '© Vyntrace'
    },
    da: {
      'nav.privacy': 'Privatliv', 'nav.home': 'Forside',
      'hero.kicker': 'Claude og ChatGPT · forbrug',
      'hero.title': 'Dit AI-forbrug, noteret stille og roligt.',
      'hero.lead': 'Vyntrace gemmer tallene fra Claude Reflect og ChatGPT Analytics i din egen browser og tager måneden med på din iPhone: én plante, ét stort tal og et par små billeder.',
      'hero.chrome': 'Hent Chrome-udvidelsen', 'hero.ios': 'iPhone-app', 'hero.soon': 'kommer snart',
      'how.title': 'Tre skridt, ingen konto', 'how.sub': 'Ingen tilmelding. Du logger ind med din egen Google eller iCloud, og data går kun mellem dine egne enheder og dit eget drev.',
      's1.t': 'Gem', 's1.p': 'Udvidelsen gemmer rapporterne uændret i browseren, når du åbner Claude Reflect eller ChatGPT Analytics. Den vokser ikke uendeligt: kun de nyeste kopier pr. måned beholdes.',
      's2.t': 'Send', 's2.p': 'Tryk én gang på “Log ind med Google”, eller vælg en mappe i iCloud Drive. Den skriver kun i sin egen mappe, “Vyntrace Sync”.',
      's3.t': 'Se', 's3.p': 'iPhone-appen og widgets læser mappen og tegner måneden. Når telefonen har læst den, viser udvidelsen “På din iPhone”.',
      'own.title': 'Dine data er dine', 'own.sub': 'Vi har ingen server og kan ikke se noget af dine data.',
      'f1.k': 'Ingen konto', 'f1.v': 'Du skal ikke oprette eller logge ind hos Vyntrace.',
      'f2.k': 'Kun sin egen mappe', 'f2.v': 'Google-adgangen er drive.file: kun filer, som Vyntrace selv har oprettet.',
      'f3.k': 'Kan trækkes tilbage', 'f3.v': 'Fjern adgangen når som helst under tredjepartsadgang i din Google-konto.',
      'f4.k': 'Ingen salg af data', 'f4.v': 'Vi sælger ikke data og bruger ikke dine rapporter til at målrette annoncer.',
      'foot.copy': '© Vyntrace'
    }
  };
  var lang = 'en';
  try { lang = localStorage.getItem('vyntrace.lang') || ''; } catch (e) {}
  if (!/^(en|zh|da)$/.test(lang)) {
    var n = (navigator.language || 'en').toLowerCase();
    lang = n.indexOf('zh') === 0 ? 'zh' : n.indexOf('da') === 0 ? 'da' : 'en';
  }
  var nodes = [].slice.call(document.querySelectorAll('[data-i]'));
  nodes.forEach(function (el) { el.setAttribute('data-en', el.textContent); });
  function apply(l) {
    lang = l;
    document.documentElement.lang = l === 'zh' ? 'zh-Hans' : l;
    nodes.forEach(function (el) {
      var k = el.getAttribute('data-i');
      el.textContent = l === 'en' ? el.getAttribute('data-en') : ((T[l] && T[l][k]) || el.getAttribute('data-en'));
    });
    [].forEach.call(document.querySelectorAll('.lang button'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-l') === l)); });
    try { localStorage.setItem('vyntrace.lang', l); } catch (e) {}
  }
  [].forEach.call(document.querySelectorAll('.lang button'), function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-l')); });
  });
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  apply(lang);
})();
