import { HISTORY_LIST } from "./DATA.js";

// 1.b
const list = document.querySelector("#list");

function makeList(MoneyList, container) {
  MoneyList.forEach((data, index) => {
    const { title, summary, money, getto } = data;

    const listWrapper = document.createElement("article");
    listWrapper.classList.add("list_wrapper");
    listWrapper.classList.add(
      getto ? "plus_list_wrapper" : "minus_list_wrapper"
    );

    const h5 = document.createElement("h5");
    h5.innerText = title;

    const h4 = document.createElement("h4");
    h4.innerText = summary;

    const h3 = document.createElement("h3");
    h3.textContent = getto ? money : "-" + money;
    h3.classList.add(getto ? "plus" : "minus");

    const div = document.createElement("div");
    div.classList.add("money_and_btn");
    const button = document.createElement("button");
    button.classList.add(index);
    listWrapper.classList.add(index);
    button.innerText = "x";
    div.appendChild(button);
    div.appendChild(h3);

    listWrapper.append(h5, h4, div);
    container.appendChild(listWrapper);
  });
}

makeList(HISTORY_LIST, list);

//나의 자신 반영
let INIT_BALANCE = 0;
const h1 = document.querySelector("#my_money > h1");

HISTORY_LIST.forEach((data) => {
  const { money, getto } = data;
  INIT_BALANCE += getto ? money : -money;
  h1.innerText = INIT_BALANCE;
});

//2.
let IN_MONEY = 0;
let OUT_MONEY = 0;
const plusMoney = document.getElementById("plus_money");
const minusMoney = document.getElementById("minus_money");

HISTORY_LIST.forEach((element) => {
  const { money, getto } = element;
  getto ? (IN_MONEY += money) : (OUT_MONEY += money);
  plusMoney.innerText = IN_MONEY;
  minusMoney.innerText = OUT_MONEY;
});

//3.
//버튼 불러오기
const inputPlus = document.getElementById("input_plus");
const inputMinus = document.getElementById("input_minus");
const HIDDEN_CLASS = "hidden";

//리스트 필터
function filterList() {
  const plusListWrapper = document.querySelectorAll(".plus_list_wrapper");
  const minusListWrapper = document.querySelectorAll(".minus_list_wrapper");

  if (inputPlus.checked) {
    showList(plusListWrapper);
  } else {
    hiddenList(plusListWrapper);
  }

  if (inputMinus.checked) {
    showList(minusListWrapper);
  } else {
    hiddenList(minusListWrapper);
  }
}

//리스트 보여주기
function showList(listWrapper) {
  listWrapper.forEach((element) => {
    element.classList.remove(HIDDEN_CLASS);
  });
}

//리스트 숨기기
function hiddenList(listWrapper) {
  listWrapper.forEach((element) => {
    element.classList.add(HIDDEN_CLASS);
  });
}

//event 붙이기
inputPlus.addEventListener("change", () => filterList());
inputMinus.addEventListener("change", () => filterList());

//4.
const deleteButton = document.querySelectorAll(".money_and_btn > button");

function deleteList(deleteId) {
  const listWrapper = document.querySelectorAll(".list_wrapper");
  listWrapper.forEach((list) => {
    if (list.classList.contains(deleteId)) {
      list.remove();
    }
  });
}

deleteButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clickedButton = e.currentTarget.classList[0];
    deleteList(clickedButton);
  });
});

//5
