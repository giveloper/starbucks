const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function () {
  /* 중요! .search 클래스이면서 .focused 가됨 즉, 클래스명이 2개 */
	/* .search 안에 focused 클래스가 생기는게 아님! */
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // 배지 숨기기 
    badgeEl.style.display = 'none';
  } else {
    // 배지 보이기
    badgeEl.style.display = 'block';
  }
}, 300));   // _.throttle(함수, 시간)