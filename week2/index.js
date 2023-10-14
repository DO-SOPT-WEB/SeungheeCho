// 망고 만들기
const mango = document.createElement("li");
const mangoText = document.createTextNode("mango");
mango.appendChild(mangoText);
// -> <li>mango</li>

// ul 가져오기
const fruitList = document.querySelector("ul");
fruitList.appendChild(mango);

const redFruits = document.querySelectorAll(".red");
redFruits.forEach((fruit) => {
  fruit.remove();
});

const thirdFruit = document.querySelector("li:nth-child(3)");
thirdFruit.classList.add("blue");

const allList = document.querySelectorAll("li");
const lengthButton = document.querySelector("button.count");
const showLength = () => {
  alert(`과일 개수는 ${allList.length}개입니다`);
};
lengthButton.addEventListener("click", showLength);
