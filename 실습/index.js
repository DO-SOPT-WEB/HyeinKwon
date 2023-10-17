//망고추가
const mango = document.createElement("li");
const mangoText = document.createTextNode("mango");
mango.appendChild(mangoText);
//mango.innerText = 'mango';
const fruitList = document.querySelector("ul");
fruitList.appendChild(mango);

//class가 red인 애들만 삭제
const redfruit = document.querySelectorAll(".red");
redfruit.forEach((fruit) => {
  fruit.remove();
});

+
//세번째 과일 파란색 만들기
const thirdFruit = document.querySelector("li:nth-child(3)");
thirdFruit.classList.add("blue");

//버튼 누르면 과일 개수 알려주기
const lengthButton = document.querySelector("button.count");
function showLength() {
  const allList = document.querySelectorAll("li");
  alert(`과일 개수는 ${allList.length}입니다.`);
}
lengthButton.addEventListener("click", showLength);
