import DATA from "./DATA.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// 1.a , b
// const firstImages = $(".first_pic_wrapper img");
const firstImages = document.querySelectorAll(".first_section_pic");

//더보기 버튼 생성
const moreBtn = document.createElement("button");
moreBtn.classList.add("more_button");
moreBtn.innerText = "더보기";

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

    const div = document.createElement("div");
    div.classList.add("title_summary_wrapper");
    div.appendChild(h2);
    p.innerText = summary;
    div.appendChild(p);
    pic.appendChild(div);

    //심화 1번
    const pHeight = p.clientHeight;
    const summaryHeight = p.scrollHeight;
    if (pHeight < summaryHeight) {
      div.appendChild(moreBtn);
      moreBtn.addEventListener("click", function () {
        p.style.overflow = "visible";
        if ((p.style.overflow = "visible")) {
          moreBtn.style.display = "none";
        }
      });
    }
  });

  pic.addEventListener("mouseleave", function (e) {
    pic.classList.remove("addTitle");
    h2.innerText = "";
    p.innerText = "";
    p.style.overflow = "hidden";
    moreBtn.style.display = "flex";
  });
});

//2.a
const gotopBtn = document.getElementById("gotop_btn");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.clientHeight - window.innerHeight;
  const opacity = scrollY / maxScroll;
  gotopBtn.style.opacity = opacity;
});

//심화 2번
