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
    h3.innerText = getto
      ? money.toLocaleString()
      : "-" + money.toLocaleString();
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

function myBalance(MoneyList) {
  MoneyList.forEach((data) => {
    const { money, getto } = data;
    INIT_BALANCE += getto ? money : -money;
    h1.innerText = INIT_BALANCE.toLocaleString();
  });
}

myBalance(HISTORY_LIST);

//2.
let IN_MONEY = 0;
let OUT_MONEY = 0;
const plusMoney = document.getElementById("plus_money");
const minusMoney = document.getElementById("minus_money");

HISTORY_LIST.forEach((element) => {
  const { money, getto } = element;
  getto ? (IN_MONEY += money) : (OUT_MONEY += money);
  plusMoney.innerText = IN_MONEY.toLocaleString();
  minusMoney.innerText = OUT_MONEY.toLocaleString();
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

//5.a,b,c
const footerButton = document.querySelector("#modalButton");
const modal = document.getElementById("modal");
const modalBg = document.querySelector(".modal_background");

//심화 3.a
footerButton.addEventListener("click", () => {
  modal.classList.replace(HIDDEN_CLASS, "modalStyle");
  modalBg.classList.remove(HIDDEN_CLASS);
});

const incomeCheck = document.querySelector("#income");
const expenditureCheck = document.querySelector("#expenditure");
const incomeSelect = document.querySelector("#income_select");
const expenditureSelect = document.querySelector("#expenditure_select");
let selectOption = document.querySelector(".modal_select");

//심화 4번 1
let getLocal = window.localStorage.getItem("key");
let getOption = JSON.parse(getLocal);

const plusOptions = getOption.filter((option) => {
  return option.isPlus == true;
});

const minusOptions = getOption.filter((option) => {
  return option.isPlus != true;
});

function optionMaking(options) {
  options.forEach((option) => {
    const { category, isPlus } = option;
    const modalOption = document.createElement("option");
    modalOption.innerText = category;
    modalOption.value = category;

    isPlus
      ? incomeSelect.appendChild(modalOption)
      : expenditureSelect.appendChild(modalOption);
  });
}

optionMaking(plusOptions);
optionMaking(minusOptions);

//모달 옵션
function selectCheck() {
  if (incomeCheck.checked) {
    expenditureSelect.style.display = "none";
    incomeSelect.style.display = "flex";
    selectOption = document.querySelector("#income_select");
  } else if (expenditureCheck.checked) {
    expenditureSelect.style.display = "flex";
    incomeSelect.style.display = "none";
    selectOption = document.querySelector("#expenditure_select");
  }
}
incomeCheck.addEventListener("change", () => selectCheck());
expenditureCheck.addEventListener("change", () => selectCheck());

//5.d
const saveBtn = document.getElementById("save_button");
const howMuchInput = document.getElementById("howmuch_input");
const summaryInput = document.getElementById("summary_input");

//심화 2.b
howMuchInput.addEventListener("input", (e) => {
  if (isNaN(e.target.value.charAt(0))) {
    alert("숫자만 입력 가능합니다");
    howMuchInput.value = null;
    return;
  } else {
    let value = howMuchInput.value.replace(/,/g, "");
    value = addThousnadsSeparator(value);
    howMuchInput.value = value;
    return;
  }
});

//심화 5
function addThousnadsSeparator(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function addList() {
  let selectedOption = selectOption.value;
  let howMuchSummaried = Number(howMuchInput.value);
  let summarySummarized = summaryInput.value;

  let newList = [
    {
      title: selectedOption,
      summary: summarySummarized,
      money: howMuchSummaried.toLocaleString(),
      getto: incomeCheck.checked ? true : false,
    },
  ];

  let ADD_BALANCE = 0;
  let MODAL_INMONEY = 0;
  let MODAL_OUTMONEY = 0;
  newList.forEach((data) => {
    const { money, getto } = data;
    ADD_BALANCE += getto ? money.toLocaleString() : -money.toLocaleString();
    let TOTAL_BALANCE = Number(ADD_BALANCE) + Number(INIT_BALANCE);
    h1.innerText = TOTAL_BALANCE.toLocaleString();

    getto
      ? (MODAL_INMONEY += money.toLocaleString())
      : (MODAL_OUTMONEY += money.toLocaleString());
    let TOTAL_INMONEY = Number(IN_MONEY) + Number(MODAL_INMONEY);
    let TOTAL_OUTMONEY = Number(OUT_MONEY) + Number(MODAL_OUTMONEY);
    plusMoney.innerText = TOTAL_INMONEY.toLocaleString();
    minusMoney.innerText = TOTAL_OUTMONEY.toLocaleString();
  });

  //심화 2.a
  if (howMuchSummaried.length == 0 || summarySummarized.length == 0) {
    alert("모두 입력해주세요");
  } else {
    makeList(newList, list);
    alert("저장되었습니다.");
  }
}

saveBtn.addEventListener("click", () => addList());

//5.e
const closeModalBtn = document.getElementById("close_button");
closeModalBtn.addEventListener("click", () => {
  modal.classList.replace("modalStyle", HIDDEN_CLASS);
  modalBg.classList.add(HIDDEN_CLASS);
});

//심화 1번 + 기본 4번
const deleteButton = document.querySelectorAll(".money_and_btn > button");

const deleteModal = document.getElementById("delte_modal_wrapper");
const deleteListButton = document.getElementById("delete_confirm");
const closeDeleteModalButton = document.getElementById("not_delete_confirm");

deleteButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    deleteModal.classList.replace(HIDDEN_CLASS, "delete_modal");
    const deleteConfirmList = e.target.classList[0];
    deleteListButton.addEventListener("click", () => {
      deleteList(deleteConfirmList);
    });
  });
});

function deleteList(deletedId) {
  const lists = document.querySelectorAll(".list_wrapper");
  lists.forEach((list) => {
    const plusMoney = document.getElementById("plus_money");
    const minusMoney = document.getElementById("minus_money");

    if (list.classList.contains(deletedId)) {
      const h3 = list.querySelector("h3");
      const deletedMoney = parseInt(h3.innerText.replace(/,/g, ""), 10);

      if (h3.classList.contains("plus")) {
        plusMoney.innerText = (
          parseInt(plusMoney.innerText.replace(/,/g, ""), 10) - deletedMoney
        ).toLocaleString();

        h1.innerText = (
          parseInt(h1.innerText.replace(/,/g, ""), 10) - deletedMoney
        ).toLocaleString();
      } else if (h3.classList.contains("minus")) {
        minusMoney.innerText = (
          parseInt(minusMoney.innerText.replace(/,/g, ""), 10) + deletedMoney
        ).toLocaleString();

        h1.innerText = (
          parseInt(h1.innerText.replace(/,/g, ""), 10) - deletedMoney
        ).toLocaleString();
      }
      list.remove();
      deleteModal.classList.replace("delete_modal", HIDDEN_CLASS);
    }
  });
}

closeDeleteModalButton.addEventListener("click", () => {
  deleteModal.classList.replace("delete_modal", HIDDEN_CLASS);
});

const goToManageCategory = document.getElementById("manage_category");
goToManageCategory.addEventListener("click", () => {
  location.href = "category.html";
});
