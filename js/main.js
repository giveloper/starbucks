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

    // scrollToTop 버튼 보이기!
    gsap.to('#to-top', .2, {  // CSS 선택자로 넣어줘도 된다.
        x:0
    });
  } else {
    // 배지 보이기
    badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // scrollToTop 버튼 숨기기!
		gsap.to('#to-top', .2, {  // CSS 선택자로 넣어줘도 된다.
			x: 100
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

new Swiper('.awards .swiper', {
	autoplay: true,
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	navigation: {
		prevEl: '.awards .swiper-custom-button-prev',
		nextEl: '.awards .swiper-custom-button-next'
	}
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
	// gsap.to(요소, 시간, 옵션);
	gsap.to(
		selector,  // 선택자
		random(1.5, 2.5),  // 애니메이션 동작 시간
		{  // 옵션 
			y: size,
			repeat: -1,  /* 무한 반복 */
			yoyo: true,  /* 다시 위로 올라가는 애니메이션 적용 */
			ease: "power1.inOut",
			delay: random(0, delay)
		}
	);
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
	new ScrollMagic
		.Scene({  // 특정한 요소를 감시한다.
			triggerElement: spyEl,  // 보여질 여부를 감시할 요소를 지정
			triggerHook: .8  // 뷰포트 가장위가 0 가장 아래가 1이다. 요소가 0.8 지점 걸리면 트리거된다.
		})    
		.setClassToggle(spyEl, 'show')  // 감시되면 해당 메소드 실행. 해당 요소에 class="show" 추가
		.addTo(new ScrollMagic.Controller());
});

// FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // 2024

const toTopEl = document.querySelector('#to-top'); // 위에 버튼 노출 선택자로 넣었는데 맨위에 변수 선언해서 사용하는게 더 효율적이다.
toTopEl.addEventListener('click', function () {
	gsap.to(window, .7, {
		scrollTo: 0  // ScrollToPlugin cdn 추가해야 사용 가능하다.
	});
});