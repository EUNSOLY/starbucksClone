console.log("js");

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

// 일정 구간에서 배지사라지게
// 외부 소스참조
const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// _.throttle(함수, 시간)
