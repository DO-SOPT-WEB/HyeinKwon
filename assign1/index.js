import DATA from "./DATA.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// 1.a /b
// const firstImages = $(".first_pic_wrapper img");
const firstImages = document.querySelectorAll(".first_section_pic");

firstImages.forEach((pic, index) => {
  const h2 = document.createElement("h2");
  h2.classList.add("title");
  const p = document.createElement("p");
  p.classList.add("summary");
  const { title, summary } = DATA[index];
  pic.addEventListener("mouseover", function () {
    pic.childNodes[1].classList.add("addTitle");
    pic.classList.add("addTitle");
    h2.innerText = title;
    pic.appendChild(h2);
    p.innerText = summary;
    pic.appendChild(p);
  });

  pic.addEventListener("mouseleave", function () {
    pic.classList.remove("addTitle");
    h2.innerText = "";
    p.innerText = "";
  });
});

//2.a
const gotopBtn = document.getElementById("gotop_btn");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.clientHeight - window.innerHeight; // 최대 스크롤 위치

  // 스크롤 위치에 따라 투명도 조절
  const opacity = scrollY / maxScroll;
  gotopBtn.style.opacity = opacity;
});
