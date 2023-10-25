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
