const INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    category: "식비",
    place: "청년다방청년다방청년다방청년다방청년다방청년다방",
    price: -26500,
  },
  {
    category: "식비",
    place: "빽다방",
    price: -7000,
  },
  {
    category: "교통",
    place: "신한체크교통",
    price: -83350,
  },
  {
    category: "월급",
    place: "(주)뫄뫄랩스",
    price: +5000000,
  },
];

// 상수 데이터를 통해 내역 리스트 렌더링
function makeListElement(category, place, price) {
  const categorySpan = document.createElement("span");
  categorySpan.textContent = category;
  categorySpan.className = "category";
  const placeSpan = document.createElement("span");
  placeSpan.textContent = place;
  placeSpan.className = "place";
  const priceSpan = document.createElement("span");
  priceSpan.textContent = (price > 0 ? "+" : "") + price.toLocaleString();
  priceSpan.className = price < 0 ? "minus_price" : "plus_price";

  const closeIcon = document.createElement("i");
  closeIcon.textContent = "x";
  closeIcon.className = "close_btn";

  const li = document.createElement("li");
  li.appendChild(categorySpan);
  li.appendChild(placeSpan);
  li.appendChild(priceSpan);
  li.appendChild(closeIcon);

  const ul = document.querySelector("ul");
  ul.appendChild(li);
}

HISTORY_LIST.forEach((el) => {
  makeListElement(el.category, el.place, el.price);
});
