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

const historyList = HISTORY_LIST;

// 상수 데이터를 통해 내역 리스트 렌더링 함수
function makeListElement(id, category, place, price) {
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
  closeIcon.className = `close_btn ${id}`;
  // 삭제하기 기능 추가
  closeIcon.addEventListener("click", function () {
    handleDelete(id);
  });

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
  historyList.forEach((el) => {
    el.price > 0 ? (plus += el.price) : (minus -= el.price);
  });

  const myAssetH2 = document.createElement("h2");
  myAssetH2.textContent = "나의 자산";

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
  myAssetElement.innerHTML = ""; // 한번 초기화 후 다시 생성
  myAssetElement.appendChild(myAssetH2);
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

// 삭제하기
function handleDelete(id) {
  const deleteModal = document.querySelectorAll(".modal_bg")[0];
  deleteModal.style.display = "flex"; // 모달 띄우기

  const deleteYesBtn = document.querySelectorAll(".delete_yes")[0];
  const deleteNoBtn = document.querySelectorAll(".delete_no")[0];
  deleteYesBtn.onclick = function () {
    //id요소 하나 삭제
    historyList.forEach((el, idx) => {
      el.id === id && historyList.splice(idx, 1);
    });
    deleteModal.style.display = "none";
    render();
  };
  deleteNoBtn.onclick = function () {
    deleteModal.style.display = "none";
  };
}

// 추가하기
function handleAddFilter(idx) {
  const addFilterBtns = document.querySelectorAll(".add_filter_btn>button");
  const selectTag = document.querySelector("#category");
  selectTag.innerHTML = "";

  if (idx === 0) {
    // 수입
    addFilterBtns[0].className = "selected_button";
    addFilterBtns[1].className = "unselected_button";

    const tags = ["월급", "꽁돈"];
    tags.forEach((el) => {
      const optionTag = document.createElement("option");
      optionTag.value = el;
      optionTag.textContent = el;
      selectTag.appendChild(optionTag);
    });
  } else {
    addFilterBtns[1].className = "selected_button";
    addFilterBtns[0].className = "unselected_button";

    const tags = ["식비", "교통"];
    tags.forEach((el) => {
      const optionTag = document.createElement("option");
      optionTag.value = el;
      optionTag.textContent = el;
      selectTag.appendChild(optionTag);
    });
  }
}

function handleAddSheet() {
  let selected_idx = 0; // 수입인지 지출인지
  const addSheet = document.querySelectorAll(".add_sheet_bg")[0];
  addSheet.innerHTML = `
  <section class="add_sheet">
        <h2>내역 추가</h2>
        <div class="add_filter_btn">
          <button type="button" class="selected_button">수입</button>
          <button type="button" class="unselected_button">지출</button>
        </div>
        <form>
          <label for="category">종류</label>
          <select id="category">
            <option value="월급">월급</option>
            <option value="꽁돈">꽁돈</option>
          </select>
          <label for="add_price">금액</label>
          <input type="number" id="add_price" />
          <label for="add_data">내용</label>
          <input type="text" id="add_data" />
        </form>
        <button type="button" class="add_save_btn">저장하기</button>
        <button type="button" class="add_close_btn">닫기</button>
      </section>
  `;
  addSheet.style.display = "flex";

  const addFilterBtns = document.querySelectorAll(".add_filter_btn>button");
  addFilterBtns.forEach((btn, idx) => {
    btn.addEventListener("click", function () {
      selected_idx = idx;
      handleAddFilter(selected_idx);
    });
  });

  const addSaveBtn = document.querySelectorAll(".add_save_btn")[0];
  const addCloseBtn = document.querySelectorAll(".add_close_btn")[0];
  addSaveBtn.addEventListener("click", function () {
    const select = document.querySelector("#category");
    const option = select.options[select.selectedIndex].value;
    let price = document.querySelector("#add_price").value;
    const data = document.querySelector("#add_data").value;
    price = selected_idx === 1 ? -price : +price; //지출일 경우, 가격 음수처리

    historyList.push({
      id: historyList.length,
      category: option,
      place: data,
      price: price,
    });
    render();
    alert("저장되었습니다");
  });
  addCloseBtn.addEventListener("click", function () {
    addSheet.style.display = "none";
  });
}

const footerBtn = document.querySelector("footer>button");
footerBtn.addEventListener("click", handleAddSheet);

// 실제 렌더링
function render() {
  makeMyAssetElement();
  document.querySelector("ul").innerHTML = ""; // 리스트 초기화

  historyList.forEach((el) => {
    makeListElement(el.id, el.category, el.place, el.price);
  });
}

// 실제 렌더링
render();
