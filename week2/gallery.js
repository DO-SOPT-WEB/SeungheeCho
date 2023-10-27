const handleScrollPosition = () => {
  const scrollPos =
    window.scrollY / (document.body.clientHeight - window.innerHeight);

  const toTopBtn = document.querySelector("#toTop");
  toTopBtn.style.opacity = scrollPos;
};

window.addEventListener("scroll", handleScrollPosition);

// 더보기 버튼
const moreBtn = document.querySelectorAll(".moreBtn");
const handleMoreBtn = (e) => {
  const descriptionParagraph = e.target.parentElement.querySelector("p");
  const currentMoreBtn = e.target.parentElement.querySelector("button");
  descriptionParagraph.style.overflow = "visible";
  currentMoreBtn.style.display = "none";
};
moreBtn.forEach((btn) => (btn.onclick = handleMoreBtn));

// preview 화살표 버튼
const leftBtn = document.querySelector("#preview>i:first-child");
const rightBtn = document.querySelector("#preview>i:last-child");
const preview = document.querySelector("#preview");
leftBtn.addEventListener("click", function () {
  preview.scrollTo({ left: 0, behavior: "smooth" });
});
rightBtn.addEventListener("click", function () {
  preview.scrollTo({ left: 999, behavior: "smooth" });
});
