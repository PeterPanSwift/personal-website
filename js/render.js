// ============================================================
// 渲染程式 — 用 js/templates.js 的模板把 js/data.js 的內容填進頁面。
// 一般情況不需要修改這個檔案，改內容請編輯 js/data.js。
// ============================================================

(() => {
  const t = buildTemplates(siteData);

  document.getElementById('navLinks').innerHTML = t.nav;
  document.getElementById('heroContent').innerHTML = t.hero;
  document.getElementById('statsGrid').innerHTML = t.stats;

  ['blog', 'classroom', 'tutoring', 'courses', 'books', 'apps', 'essays', 'experience', 'contact']
    .forEach((id) => {
      document.querySelector(`#${id} .container`).innerHTML = t[id];
    });

  document.getElementById('footerText').innerHTML = t.footer;
})();
