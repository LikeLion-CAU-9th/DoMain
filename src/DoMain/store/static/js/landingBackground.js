const html = document.documentElement;
const canvas = document.getElementById("apple");
const context = canvas.getContext("2d");

const frameCount = 98;

const currentFrame = index =>
  `../static/image/landingBackground/scene${index
    .toString()
    .padStart(5, "0")}.png`;
console.log(currentFrame);

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = canvas.offsetWidth;
// canvas.width = 1080;
canvas.height = 770;
img.onload = function() {
  context.drawImage(img, 0, 0);
};

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();
