const URL_OBJ = {
  'GOOGLE': "https://www.google.com/search?q=",
  'NAVER': "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=",
  'DAUM': "https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q="
}

const searching = (contents, index) => {
  let elem = getSearchingElements();
  document.querySelector('.main-board').innerHTML += elem;
  let widgetObj = {};
  widgetObj['type'] = 'searching';
  widgetObj['contents'] = contents;
  document.querySelectorAll('.searchingHidden')[index].value = JSON.stringify(widgetObj);
  let engine = contents.engine;
  let width = contents.width;
  let height = contents.height;
  let mainColor = contents.bgColor;
  document.querySelectorAll('.widget-search')[index].style.top = contents.posY;
  document.querySelectorAll('.widget-search')[index].style.left = contents.posX;
  document.querySelectorAll('.widget-search')[index].style.width = width;
  document.querySelectorAll('.searching')[index].style.width = width;
  document.querySelectorAll('.searching')[index].style.height = height;
  document.querySelectorAll('.searching')[index].style.fontSize = (pixelToInt(height)-40) + "px";
  document.querySelectorAll('.searching')[index].style.borderColor = mainColor;
  document.querySelectorAll('.searching')[index].style.color = mainColor;
  document.querySelectorAll('.searchBtn-container')[index].style.width = (pixelToInt(height)+ 8) + "px";
  document.querySelectorAll('.searchBtn-container')[index].style.height = (pixelToInt(height)+ 8) + "px"; // height is same with width
  document.querySelectorAll('.searchBtn-container')[index].style.backgroundColor = mainColor;
  document.querySelectorAll('.searchBtn-container')[index].style.borderTopRightRadius = "20px";
  document.querySelectorAll('.searchBtn-container')[index].style.borderBottomRightRadius = "20px";
  document.querySelectorAll('.searchBtn-container')[index].style.left = (pixelToInt(width) - 50) + "px";
  document.querySelectorAll('.searchBtn-container img')[index].style.top = "50%";
  document.querySelectorAll('.searchBtn-container img')[index].style.left = "50%";
  document.querySelectorAll('.searchBtn-container img')[index].style.transform = "translate(-50%, -50%)";
  document.querySelectorAll('.searching')[index].style.borderRadius = "20px";
  const ENGINE = engine.toUpperCase();
  const QUERY_URL = URL_OBJ[ENGINE];
  setTimeout(()=>{
    document.querySelectorAll('.searchBtn-container')[index].addEventListener('click', () => {
      searchAction(QUERY_URL, index);
    });
    console.log("searching event added")
  }, 1000)
}

const pixelToInt = (pixel) => {
  let result = "";
  for(let i=0; i<pixel.length-2; i++) {
    result += pixel[i];
  }
  return parseInt(result);
}

const searchAction = (QUERY_URL, index) => {
  console.log("searchAction")
  topic = document.querySelectorAll('.searching')[index].value;
  const URL = QUERY_URL + topic;
  let openNewWindow = window.open("about:blank");
  openNewWindow.location.href = URL;
}