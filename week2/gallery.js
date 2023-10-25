const handleScrollPosition = () => {
  const scrollPos =
    window.scrollY / (document.body.clientHeight - window.innerHeight);

  const toTopBtn = document.querySelector("#toTop");
  toTopBtn.style.opacity = scrollPos;
};

window.addEventListener("scroll", handleScrollPosition);
