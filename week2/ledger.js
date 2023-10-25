const INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    id: 0,
    category: "식비",
    place: "청년다방청년다방청년다방청년다방청년다방청년다방",
    price: -26500,
  },
  {
    id: 1,
    category: "식비",
    place: "빽다방",
    price: -7000,
  },
  {
    id: 2,
    category: "교통",
    place: "신한체크교통",
    price: -83350,
  },
  {
    id: 3,
    category: "월급",
    place: "(주)뫄뫄랩스",
    price: +5000000,
  },
];

// 상수 데이터를 통해 내역 리스트 렌더링 함수
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
  li.className = price < 0 ? "minus_item" : "plus_item";
  li.appendChild(categorySpan);
  li.appendChild(placeSpan);
  li.appendChild(priceSpan);
  li.appendChild(closeIcon);

  const ul = document.querySelector("ul");
  ul.appendChild(li);
}

// 상수 데이터를 통해 나의 자산 렌더링 함수
function makeMyAssetElement() {
  let plus = 0;
  let minus = 0;
  HISTORY_LIST.forEach((el) => {
    el.price > 0 ? (plus += el.price) : (minus -= el.price);
  });

  const myTotalAsset = document.createElement("p");
  myTotalAsset.textContent = (plus - minus).toLocaleString();

  const myAssetDiv = document.createElement("div");
  myAssetDiv.className = "detail";

  const plusBtn = document.createElement("i");
  plusBtn.textContent = "+";
  const plusSpan = document.createElement("span");
  plusSpan.textContent = plus.toLocaleString();
  plusSpan.className = "plus";
  const minusBtn = document.createElement("i");
  minusBtn.textContent = "-";
  const minusSpan = document.createElement("span");
  minusSpan.textContent = minus.toLocaleString();
  minusSpan.className = "minus";

  myAssetDiv.appendChild(plusBtn);
  myAssetDiv.appendChild(plusSpan);
  myAssetDiv.appendChild(minusBtn);
  myAssetDiv.appendChild(minusSpan);

  const myAssetElement = document.querySelectorAll(".my_asset")[0];
  myAssetElement.append(myTotalAsset);
  myAssetElement.append(myAssetDiv);
}

// 수입/지출 필터링 함수
// input박스의 checked 값을 받아오는 방식 -> flag변수 사용 방식으로 변경
let plusChecked = true;
let minusChecked = true;

function handleFilter() {
  const plusItems = document.querySelectorAll(".plus_item");
  const minusItems = document.querySelectorAll(".minus_item");
  plusItems.forEach((item) => {
    item.style.display = plusChecked ? "flex" : "none";
  });
  minusItems.forEach((item) => {
    item.style.display = minusChecked ? "flex" : "none";
  });
}

const plusFilter = document.querySelector('label[for="plus_p"]');
plusFilter.addEventListener("click", function () {
  plusChecked = !plusChecked;
  handleFilter();
});
const minusFilter = document.querySelector('label[for="minus_p"]');
minusFilter.addEventListener("click", function () {
  minusChecked = !minusChecked;
  handleFilter();
});

// 실제 렌더링
makeMyAssetElement();
HISTORY_LIST.forEach((el) => {
  makeListElement(el.category, el.place, el.price);
});
