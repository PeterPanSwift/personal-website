// 捲動進場動畫（任何已進入或越過視窗的元素都會顯示，跳轉捲動也不會漏掉）
const revealEls = Array.from(document.querySelectorAll('.reveal'));
let lastCheck = 0;

function revealCheck() {
  const limit = window.innerHeight - 40;
  for (let i = revealEls.length - 1; i >= 0; i--) {
    if (revealEls[i].getBoundingClientRect().top < limit) {
      revealEls[i].classList.add('visible');
      revealEls.splice(i, 1);
    }
  }
}

function onScroll() {
  const now = Date.now();
  if (now - lastCheck > 80) {
    lastCheck = now;
    revealCheck();
  } else {
    clearTimeout(onScroll._t);
    onScroll._t = setTimeout(revealCheck, 100);
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
revealCheck();

// 後備機制：即使捲動事件被瀏覽器節流，也會定期檢查（全部顯示後自動停止）
const revealFallback = setInterval(() => {
  revealCheck();
  if (revealEls.length === 0) clearInterval(revealFallback);
}, 300);

// 手機版選單
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});
