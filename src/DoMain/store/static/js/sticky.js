const landingContents = document.querySelector(".landingContent2");
const landingContents3 = document.querySelector(".landingContent3");
const landingContents4 = document.querySelector(".landingContent4");
const landingContents5 = document.querySelector(".landingContent5");
const landingContents6 = document.querySelector(".landingContent6");
const landingContents7 = document.querySelector(".landingContent7");

console.log(landingContents.style.position);
window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  console.log(scrollTop);

  if (scrollTop > 1790 && scrollTop < 4000) {
    landingContents.style.position = "sticky";
    landingContents.style.opacity = "1";
    landingContents.style.transitionProperty = "opacity";
    landingContents.style.transitionDuration = "1s";
  }
  if (scrollTop >= 4000 && scrollTop <= 7100) {
    landingContents.style.position = "sticky";
    landingContents.style.opacity = "0";
    landingContents.style.transitionProperty = "opacity";
    landingContents.style.transitionDuration = "1s";
  }
  if (scrollTop > 7100 && scrollTop < 9200) {
    landingContents.style.position = "absolute";
    landingContents3.style.position = "sticky";
    landingContents3.style.opacity = "1";
    landingContents3.style.transitionProperty = "opacity";
    landingContents3.style.transitionDuration = "1s";
  }
  if (scrollTop >= 9200 && scrollTop <= 10900) {
    landingContents3.style.position = "sticky";
    landingContents3.style.opacity = "0";
    landingContents3.style.transitionProperty = "opacity";
    landingContents3.style.transitionDuration = "1s";
  }
  if (scrollTop > 10900 && scrollTop < 14500) {
    landingContents3.style.position = "absolute";
    landingContents4.style.position = "sticky";
    landingContents4.style.opacity = "1";
    landingContents4.style.transitionProperty = "opacity";
    landingContents4.style.transitionDuration = "1s";
  }
  if (scrollTop >= 14500 && scrollTop <= 16900) {
    landingContents4.style.position = "sticky";
    landingContents4.style.opacity = "0";
    landingContents4.style.transitionProperty = "opacity";
    landingContents4.style.transitionDuration = "1s";
  }
  if (scrollTop > 16900 && scrollTop < 18500) {
    landingContents4.style.position = "absolute";
    landingContents5.style.position = "sticky";
    landingContents5.style.opacity = "1";
    landingContents5.style.transitionProperty = "opacity";
    landingContents5.style.transitionDuration = "1s";
  }
  if (scrollTop >= 18500 && scrollTop <= 21900) {
    landingContents5.style.position = "sticky";
    landingContents5.style.opacity = "0";
    landingContents5.style.transitionProperty = "opacity";
    landingContents5.style.transitionDuration = "1s";
  }
  if (scrollTop > 21900 && scrollTop < 24500) {
    landingContents5.style.position = "absolute";
    landingContents6.style.position = "sticky";
    landingContents6.style.opacity = "1";
    landingContents6.style.transitionProperty = "opacity";
    landingContents6.style.transitionDuration = "1s";
  }
  if (scrollTop >= 24500 && scrollTop <= 26800) {
    landingContents6.style.position = "sticky";
    landingContents6.style.opacity = "0";
    landingContents6.style.transitionProperty = "opacity";
    landingContents6.style.transitionDuration = "1s";
  }
  if (scrollTop > 26800 && scrollTop < 28900) {
    landingContents6.style.position = "absolute";
    landingContents7.style.position = "sticky";
    landingContents7.style.opacity = "1";
    landingContents7.style.transitionProperty = "opacity";
    landingContents7.style.transitionDuration = "1s";
  }
  if (scrollTop >= 28900) {
    landingContents7.style.position = "sticky";
    landingContents7.style.opacity = "0";
    landingContents7.style.transitionProperty = "opacity";
    landingContents7.style.transitionDuration = "1s";
  }
});
