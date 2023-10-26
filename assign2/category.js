import { HISTORY_LIST } from "./DATA.js";

// 로컬스토리지에 저장
const category = HISTORY_LIST.map((list) => {
  const { title, getto } = list;
  const obj = {
    category: title,
    isPlus: getto,
  };
  return obj;
});

function saveToLocalStorage(data) {
  window.localStorage.setItem("key", JSON.stringify(data));
}

const plusInput = document.getElementById("plus_input");
const minusInput = document.getElementById("minus_input");
const plusCategory = document.getElementById("plus");
const minusCategory = document.getElementById("minus");

const getItem = window.localStorage.getItem("key");
const getCategory = JSON.parse(getItem);

getCategory.forEach((ele) => {
  const { category, isPlus } = ele;
  const h3 = document.createElement("h3");
  h3.innerText = category;
  isPlus ? plusCategory.appendChild(h3) : minusCategory.appendChild(h3);
});

plusInput.addEventListener("keypress", (e) => {
  isEntered(e, true);
});

minusInput.addEventListener("keypress", (e) => {
  isEntered(e, false);
});

function isEntered(e, isPlus) {
  if (e.keyCode === 13) {
    const h3 = document.createElement("h3");
    h3.innerText = e.target.value;

    if (isPlus) {
      plusCategory.appendChild(h3);
      category.push({ category: e.target.value, isPlus: true });
    } else {
      minusCategory.appendChild(h3);
      category.push({
        category: e.target.value,
        isPlus: false,
      });
    }

    e.target.value = "";
    saveToLocalStorage(category);
    return false;
  } else {
    return false;
  }
}

//footer 다시 홈으로
const gotoHome = document.getElementById("goto_home");
gotoHome.addEventListener("click", () => {
  location.href = "index.html";
});
