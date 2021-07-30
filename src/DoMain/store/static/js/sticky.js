const landingContents = document.querySelector(".landingContent2");

console.log(landingContents.style.position);
window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  console.log(scrollTop);
  if (scrollTop > 1790 && scrollTop < 3300) {
    landingContents.style.position = "sticky";
    // landingContents.style.padding = "20% 0 0 0";
    landingContents.style.opacity = "1";
    landingContents.style.transitionProperty = "opacity";
    landingContents.style.transitionDuration = "1s";

    console.log("a");
  } else if (scrollTop >= 3300) {
    landingContents.style.position = "sticky";
    // landingContents.style.padding = "30% 0 0 0";
    landingContents.style.opacity = "0";
    landingContents.style.transitionProperty = "opacity";
    landingContents.style.transitionDuration = "1s";
  }
});
