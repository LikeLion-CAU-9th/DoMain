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
  if(scrollTop>40) {
    document.querySelector('.sticky').style.width = "100%";
    document.querySelector('.sticky').style.left = "0";
    document.querySelector('.sticky').style.backgroundColor = "rgba(0, 0, 0, .8)";
  } else {
    document.querySelector('.sticky').style.width = "60%";
    document.querySelector('.sticky').style.left = "20%";
    document.querySelector('.sticky').style.backgroundColor = "transparent";
  }

  if (scrollTop > 1790 && scrollTop < 3300) {
      landingContents.style.position = "sticky";
      landingContents.style.opacity = "1";
      landingContents.style.transitionProperty = "opacity";
      landingContents.style.transitionDuration = "1s";
    }
    if (scrollTop >= 3300 && scrollTop <= 5700) {
      landingContents.style.position = "sticky";
      landingContents.style.opacity = "0";
      landingContents.style.transitionProperty = "opacity";
      landingContents.style.transitionDuration = "1s";
    }
    if (scrollTop > 5700 && scrollTop < 7200) {
      landingContents.style.position = "absolute";
      landingContents3.style.position = "sticky";
      landingContents3.style.opacity = "1";
      landingContents3.style.transitionProperty = "opacity";
      landingContents3.style.transitionDuration = "1s";
    }
    if (scrollTop >= 7200 && scrollTop <= 9900) {
      landingContents3.style.position = "sticky";
      landingContents3.style.opacity = "0";
      landingContents3.style.transitionProperty = "opacity";
      landingContents3.style.transitionDuration = "1s";
    }
    if (scrollTop > 9900 && scrollTop < 11500) {
      landingContents3.style.position = "absolute";
      landingContents4.style.position = "sticky";
      landingContents4.style.opacity = "1";
      landingContents4.style.transitionProperty = "opacity";
      landingContents4.style.transitionDuration = "1s";
    }
    if (scrollTop >= 11500 && scrollTop <= 13900) {
      landingContents4.style.position = "sticky";
      landingContents4.style.opacity = "0";
      landingContents4.style.transitionProperty = "opacity";
      landingContents4.style.transitionDuration = "1s";
    }
    if (scrollTop > 13900 && scrollTop < 15500) {
      landingContents4.style.position = "absolute";
      landingContents5.style.position = "sticky";
      landingContents5.style.opacity = "1";
      landingContents5.style.transitionProperty = "opacity";
      landingContents5.style.transitionDuration = "1s";
    }
    if (scrollTop >= 15500 && scrollTop <= 18900) {
      landingContents5.style.position = "sticky";
      landingContents5.style.opacity = "0";
      landingContents5.style.transitionProperty = "opacity";
      landingContents5.style.transitionDuration = "1s";
    }
    if (scrollTop > 18900 && scrollTop < 20500) {
      landingContents5.style.position = "absolute";
      landingContents6.style.position = "sticky";
      landingContents6.style.opacity = "1";
      landingContents6.style.transitionProperty = "opacity";
      landingContents6.style.transitionDuration = "1s";
    }
    if (scrollTop >= 20500 && scrollTop <= 22300) {
      landingContents6.style.position = "sticky";
      landingContents6.style.opacity = "0";
      landingContents6.style.transitionProperty = "opacity";
      landingContents6.style.transitionDuration = "1s";
    }
    if (scrollTop > 22300 && scrollTop < 23900) {
      landingContents6.style.position = "absolute";
      landingContents7.style.position = "sticky";
      landingContents7.style.opacity = "1";
      landingContents7.style.transitionProperty = "opacity";
      landingContents7.style.transitionDuration = "1s";
    }
    if (scrollTop >= 23900) {
      landingContents7.style.position = "sticky";
      landingContents7.style.opacity = "0";
      landingContents7.style.transitionProperty = "opacity";
    }
});
