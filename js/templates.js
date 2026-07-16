// ============================================================
// 共用模板 — 把 siteData 轉成各區塊的 HTML 字串。
// 瀏覽器（render.js）和建置腳本（build.js）都使用這個檔案，
// 平常不需要修改，改內容請編輯 js/data.js。
// ============================================================

(function (global) {
  const ext = 'target="_blank" rel="noopener"';

  function buildTemplates(d) {
    // 講座課程依開始時間由新到舊排序（從 date 欄位開頭解析日期，
    // 支援 2026/7/13、2026/7、2026/2 ~ 2026/6 等格式；只有年月視為該月 1 號）
    const courseStartTime = (course) => {
      const m = course.date.match(/(\d{4})\/(\d{1,2})(?:\/(\d{1,2}))?/);
      return m ? new Date(+m[1], +m[2] - 1, +(m[3] || 1)).getTime() : 0;
    };
    const featuredSorted = [...d.courses.featured].sort((a, b) => courseStartTime(b) - courseStartTime(a));

    return {

      nav: d.nav.map((item) =>
        `<a href="${item.href}"${item.cta ? ' class="nav-cta"' : ''}>${item.text}</a>`
      ).join(''),

      hero: `
    <img src="${d.hero.avatar}" alt="彼得潘" class="hero-avatar">
    <p class="hero-eyebrow">${d.hero.eyebrow}</p>
    <h1>${d.hero.titleHTML}</h1>
    <p class="hero-job">${d.hero.job}</p>
    <p class="hero-sub">${d.hero.sub}</p>`,

      stats: d.stats.map((s) =>
        `<div class="stat"><span class="stat-num">${s.num}${s.plus ? '<em>+</em>' : ''}</span><span class="stat-label">${s.label}</span></div>`
      ).join(''),

      blog: `
    <p class="eyebrow reveal">${d.blog.eyebrow}</p>
    <h2 class="reveal">${d.blog.title}</h2>
    <p class="section-lead reveal">${d.blog.lead}</p>
    <div class="blog-card reveal">
      <div class="blog-body">
        <h3>${d.blog.heading}</h3>
        <p>${d.blog.text}</p>
        <a class="btn btn-primary" href="${d.blog.url}" ${ext}>${d.blog.buttonText}</a>
      </div>
      <a href="${d.blog.url}" ${ext}><img src="${d.blog.image}" alt="${d.blog.title}" loading="lazy"></a>
    </div>`,

      classroom: `
    <p class="eyebrow reveal">${d.classroom.eyebrow}</p>
    <h2 class="reveal">${d.classroom.title}</h2>
    <p class="section-lead reveal">${d.classroom.lead}</p>
    <div class="classroom-card reveal">
      <img src="${d.classroom.card.image}" alt="${d.classroom.card.heading}" loading="lazy">
      <div class="classroom-body">
        <h3>${d.classroom.card.heading}</h3>
        <p>${d.classroom.card.text}</p>
        <div class="btn-row">
          ${d.classroom.card.buttons.map((b) => `<a class="btn btn-primary" href="${b.url}" ${ext}>${b.text}</a>`).join('')}
        </div>
      </div>
    </div>
    <h3 class="sub-heading reveal">${d.classroom.qaTitle}</h3>
    <div class="qa-grid">
      ${d.classroom.qa.map((q) => `<a class="qa-card reveal" href="${q.url}" ${ext}><span>${q.icon}</span>${q.text}</a>`).join('')}
    </div>`,

      tutoring: `
    <p class="eyebrow reveal">${d.tutoring.eyebrow}</p>
    <h2 class="reveal">${d.tutoring.title}</h2>
    <div class="tutor-grid">
      ${d.tutoring.items.map((t) => `
      <div class="tutor-card reveal">
        <div class="tutor-icon">${t.icon}</div>
        <h3><a href="${t.url}" ${ext}>${t.title}</a></h3>
        <p>${t.text}</p>
        <a class="tutor-link" href="${t.url}" ${ext}>了解更多 →</a>
      </div>`).join('')}
    </div>`,

      courses: `
    <p class="eyebrow reveal">${d.courses.eyebrow}</p>
    <h2 class="reveal">${d.courses.title}</h2>
    <p class="section-lead reveal">${d.courses.leadText}<a href="${d.courses.leadLinkUrl}" ${ext}>${d.courses.leadLinkText}</a></p>
    <div class="course-grid">
      ${featuredSorted.map((c) => `
      <div class="course-card reveal">
        <span class="course-tag">${c.tag}</span>
        <h3>${c.title}</h3>
        <p class="course-date">${c.date}</p>
        <p>${c.text}</p>
      </div>`).join('')}
    </div>
    <h3 class="sub-heading reveal">${d.courses.historyTitle}</h3>
    <div class="timeline">
      ${d.courses.history.map((group) => `
      <details class="timeline-group reveal">
        <summary>${group.period}</summary>
        <ul>
          ${group.items.map((item) => `
          <li><strong>${item.title}</strong><span>${item.date}</span>${item.note ? `<p>${item.note}</p>` : ''}</li>`).join('')}
        </ul>
      </details>`).join('')}
    </div>
    <h3 class="sub-heading reveal">${d.courses.galleryTitle}</h3>
    <div class="gallery">
      ${d.courses.gallery.map((src, i) => `<img src="${src}" alt="課程合影 ${i + 1}" loading="lazy" class="reveal">`).join('')}
    </div>`,

      books: `
    <p class="eyebrow reveal">${d.books.eyebrow}</p>
    <h2 class="reveal">${d.books.title}</h2>
    <div class="book-grid">
      ${d.books.items.map((b) => `
      <div class="book-card reveal">
        <img src="${b.image}" alt="${b.title}" loading="lazy">
        <div class="book-body">
          <h3>${b.title}</h3>
          <p class="book-date">${b.dateHTML}</p>
          <p class="book-award">${b.award}</p>
        </div>
      </div>`).join('')}
    </div>`,

      apps: `
    <p class="eyebrow reveal">${d.apps.eyebrow}</p>
    <h2 class="reveal">${d.apps.title}</h2>
    <div class="app-grid">
      ${d.apps.items.map((a) => `
      <div class="app-card reveal">
        <div class="app-shot"><img src="${a.image}" alt="${a.name}" loading="lazy"></div>
        <div class="app-body">
          <h3>${a.url ? `<a href="${a.url}" ${ext}>${a.name}</a>` : a.name}</h3>
          <p class="app-meta">${a.meta}</p>
          ${a.award ? `<p class="app-award">${a.award}</p>` : ''}
          <p>${a.desc}</p>
        </div>
      </div>`).join('')}
    </div>`,

      essays: `
    <p class="eyebrow reveal">${d.essays.eyebrow}</p>
    <h2 class="reveal">${d.essays.title}</h2>
    <p class="section-lead reveal"><a href="${d.essays.leadLinkUrl}" ${ext}>${d.essays.leadLinkText}</a></p>
    <div class="essay-list">
      ${d.essays.items.map((e) => `
      <a class="essay reveal" href="${e.url}" ${ext}><time>${e.date}</time><h3>${e.title}</h3></a>`).join('')}
    </div>
    <div class="column-card reveal">
      <div>
        <h3>${d.essays.column.title}</h3>
        <p>${d.essays.column.text}</p>
      </div>
      <a class="btn btn-ghost" href="${d.essays.column.url}" ${ext}>${d.essays.column.buttonText}</a>
    </div>`,

      experience: `
    <p class="eyebrow reveal">${d.experience.eyebrow}</p>
    <h2 class="reveal">${d.experience.title}</h2>
    <p class="section-lead reveal"><a href="${d.experience.leadLinkUrl}" ${ext}>${d.experience.leadLinkText}</a></p>
    <div class="exp-grid">
      <div class="exp-card reveal">
        <h3>${d.experience.nowTitle}</h3>
        <ul>${d.experience.now.map((li) => `<li>${li}</li>`).join('')}</ul>
      </div>
      <div class="exp-card reveal">
        <h3>${d.experience.pastTitle}</h3>
        <ul>${d.experience.past.map((li) => `<li>${li}</li>`).join('')}</ul>
        <h3 style="margin-top:1.6rem">${d.experience.educationTitle}</h3>
        <ul>${d.experience.education.map((li) => `<li>${li}</li>`).join('')}</ul>
      </div>
    </div>`,

      contact: `
    <p class="eyebrow reveal">${d.contact.eyebrow}</p>
    <h2 class="reveal">${d.contact.title}</h2>
    <p class="section-lead reveal">${d.contact.lead}</p>
    <div class="contact-grid">
      ${d.contact.cards.map((c) => {
        const inner = `<span class="contact-icon">${c.icon}</span><h3>${c.title}</h3><p>${c.textHTML}</p>`;
        return c.url
          ? `<a class="contact-card reveal" href="${c.url}"${c.url.startsWith('http') ? ` ${ext}` : ''}>${inner}</a>`
          : `<div class="contact-card reveal">${inner}</div>`;
      }).join('')}
    </div>`,

      footer: d.footer,
    };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = buildTemplates;
  } else {
    global.buildTemplates = buildTemplates;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
