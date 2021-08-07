const URL_OBJ = {
  'GOOGLE': "https://www.google.com/search?q=",
  'NAVER': "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=",
  'DAUM': "https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q="
}

const searching = (contents) => {
  let engine = contents.engine;
  let width = contents.width;
  let height = contents.height;
  let mainColor = contents.bgColor;
  document.querySelector('.widget-search').style.top = contents.posY;
  document.querySelector('.widget-search').style.left = contents.posX;
  document.querySelector('.searching').style.width = width;
  document.querySelector('.searching').style.height = height;
  document.querySelector('.searching').style.fontSize = (pixelToInt(height)-40) + "px";
  document.querySelector('.searching').style.borderColor = mainColor;
  document.querySelector('.searching').style.color = mainColor;
  document.querySelector('.searchBtn-container').style.width = (pixelToInt(height) + 8) + "px";
  document.querySelector('.searchBtn-container').style.height = (pixelToInt(height) + 8) + "px"; // height is same with width
  document.querySelector('.searchBtn-container').style.backgroundColor = mainColor;
  document.querySelector('.searchBtn-container').style.borderTopRightRadius = "20px";
  document.querySelector('.searchBtn-container').style.borderBottomRightRadius = "20px";
  document.querySelector('.searchBtn-container img').style.top = "50%";
  document.querySelector('.searchBtn-container img').style.left = "50%";
  document.querySelector('.searchBtn-container img').style.transform = "translate(-50%, -50%)";
  document.querySelector('.searching').style.borderRadius = "20px";
  const ENGINE = engine.toUpperCase();
  const QUERY_URL = URL_OBJ[ENGINE];
  document.querySelector('.searchBtn-container').addEventListener('click', () => {
    searchAction(QUERY_URL);
  })
}

const pixelToInt = (pixel) => {
  let result = "";
  for(let i=0; i<pixel.length-2; i++) {
    result += pixel[i];
  }
  return parseInt(result);
}

const searchAction = (QUERY_URL) => {
  topic = document.querySelector('.searching').value;
  const URL = QUERY_URL + topic;
  location.href = URL;
}
