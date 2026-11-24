// 카드 스크롤 등장
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.card').forEach((c) => io.observe(c));

// 각주 원 <-> 각주 텍스트 연동
function setActive(card, on) {
  card.querySelector('.ring')?.classList.toggle('is-active', on);
  card.querySelector('.note')?.classList.toggle('is-active', on);
}
document.querySelectorAll('.card').forEach((card) => {
  const ring = card.querySelector('.ring');
  const note = card.querySelector('.note');
  [ring, note].forEach((el) => {
    el.addEventListener('mouseenter', () => setActive(card, true));
    el.addEventListener('mouseleave', () => setActive(card, false));
  });
  ring.addEventListener('focus', () => setActive(card, true));
  ring.addEventListener('blur', () => setActive(card, false));
  // 터치: 탭하면 토글
  ring.addEventListener('click', () => {
    const on = !note.classList.contains('is-active');
    setActive(card, on);
  });
});


// 스크롤 후 상단 네비 등장 / ?static 이면 모든 카드 즉시 표시(스크린샷용)
const onScroll = () => document.body.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.3);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
if (new URLSearchParams(location.search).has('static')) {
  document.body.classList.add('static');
  document.querySelectorAll('.card').forEach((c) => c.classList.add('is-visible'));
}
