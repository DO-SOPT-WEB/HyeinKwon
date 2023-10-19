import { HISTORY_LIST } from "./DATA.js";

// 1.b
let INIT_BALANCE = 0;
const list = document.querySelector("#list");
const h1 = document.querySelector("#my_money > h1");

HISTORY_LIST.forEach((data) => {
  const { title, summary, money, getto } = data;

  const listWrapper = document.createElement("article");
  listWrapper.classList.add("list_wrapper");

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
  button.innerText = "x";
  div.appendChild(button);
  div.appendChild(h3);

  listWrapper.append(h5, h4, div);
  list.appendChild(listWrapper);

  //총합
  INIT_BALANCE += getto ? money : -money;
  h1.innerText = INIT_BALANCE;
});

//2
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
