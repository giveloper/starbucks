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
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,   
      display: 'none'   // none 처리 안해주면 opacity 0 돼더라도 클릭이 됨
    });
  } else {
    // 배지 보이기
    badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
  
}, 300));   // _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,    // 0.7, 1.4, 2.1, 2.7 초 후에 노출됨
    opacity: 1
  })
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',   // 이것만 넣어도 동작함. 마우스 드래그로 하면됨.
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,  // 한번에 보여줄 슬라이드 개수
	spaceBetween: 10,  // 슬라이드 사이 여백
	centeredSlides: true,  // 1번 슬라이드가 가운데 보이기 
	loop: true,
	autoplay: {
		delay: 5000
	},
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    nextEl: '.promotion .swiper-custom-button-next',
    prevEl: '.promotion .swiper-custom-button-prev'
  }
});