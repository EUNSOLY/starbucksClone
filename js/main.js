const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
  // set : 무엇인가 지정한다 atrr: html태그의 속성
});
// focus 가 없어졌을 때
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 일정 구간에서 사라지게, 스크롤
// 외부 소스참조
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // gsap.to(요소, 지속시간, 옵션)
      // 애니메이션처리해주는 라이브러리에서 지원해주는 메소드
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 탑버튼보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 탑버튼숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수, 시간)

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
// console.log(fadeEls);
fadeEls.forEach(function (item, i) {
  gsap.to(item, 1, {
    delay: (i + 1) * 0.7,
    opacity: 1,
  });
});

// 공지사항 슬라이드
// new Swiper (선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    // 페이지 번호 사용 여부
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
    nextEl: ".promotion .swiper-next", // 다음 버튼 선택자
  },
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});
const promotionEl = document.querySelector(".promotion");
const promotionToogleBtn = document.querySelector(".toggle-promotion");
// console.log(promotionToogleBtn);
let isHidePromotion = false;
promotionToogleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add("hide");
  } else {
    // 보임처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selectio, delay, size) {
  gsap.to(
    selectio, // 선택자
    random(1.5, 2.5), //애니메이션 동작시간
    {
      // 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// 스크롤매직

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl, i) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8, //내가 감시하는 요소가 어느 지점에 왔는지 뷰포트 기준 상단 0 하단 1
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
