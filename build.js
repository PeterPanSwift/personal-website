#!/usr/bin/env node
// ============================================================
// 部署建置腳本 — 把 js/data.js 的內容「烤」進 HTML，輸出到 dist/。
//
// 使用方式：在網站資料夾執行
//   node build.js
//
// 產出的 dist/ 資料夾就是可以直接部署的完整網站
// （GitHub Pages、Netlify、Vercel⋯⋯上傳 dist 內容即可）。
// 內容已預先寫進 HTML，對搜尋引擎友善，也不再需要 data.js / render.js。
// ============================================================

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

const siteData = require('./js/data.js');
const buildTemplates = require('./js/templates.js');

// ---- 1. 渲染 HTML ----
let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const t = buildTemplates(siteData);

// 填入各個容器（跟 render.js 做一樣的事，但在建置階段完成）
const fill = (pattern, content, label) => {
  if (!pattern.test(html)) {
    console.error(`❌ 找不到容器：${label} — 請確認 index.html 的骨架沒有被改壞`);
    process.exit(1);
  }
  html = html.replace(pattern, (m, open, close) => open + content + close);
};

fill(/(<nav class="nav-links" id="navLinks">)(<\/nav>)/, t.nav, 'navLinks');
fill(/(<div class="hero-content reveal" id="heroContent">)(<\/div>)/, t.hero, 'heroContent');
fill(/(<div class="container stats-grid reveal" id="statsGrid">)(<\/div>)/, t.stats, 'statsGrid');
for (const id of ['blog', 'classroom', 'tutoring', 'courses', 'books', 'apps', 'essays', 'experience', 'contact']) {
  fill(new RegExp(`(<section[^>]*id="${id}">\\s*<div class="container">)(</div>)`), t[id], `#${id} .container`);
}
fill(/(<p id="footerText">)(<\/p>)/, t.footer, 'footerText');

// 內容已烤進 HTML，不再需要 data / templates / render 三支腳本
html = html
  .replace(/\s*<script src="js\/data\.js"><\/script>/, '')
  .replace(/\s*<script src="js\/templates\.js"><\/script>/, '')
  .replace(/\s*<script src="js\/render\.js"><\/script>/, '')
  .replace('<!-- 頁面內容都在 js/data.js，由 js/render.js 渲染 -->',
           '<!-- 此檔案由 build.js 自動產生，請勿直接編輯；修改內容請編輯 js/data.js 後重新執行 node build.js -->');

// ---- 2. 輸出 dist/ ----
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'js'), { recursive: true });

fs.writeFileSync(path.join(DIST, 'index.html'), html);
fs.writeFileSync(path.join(DIST, '.nojekyll'), '');
fs.cpSync(path.join(ROOT, 'css'), path.join(DIST, 'css'), { recursive: true });
fs.cpSync(path.join(ROOT, 'images'), path.join(DIST, 'images'), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'js', 'main.js'), path.join(DIST, 'js', 'main.js'));

console.log('✅ 建置完成！可部署的網站已輸出到 dist/ 資料夾');
