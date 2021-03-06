// *******************************************
// Javascript to get layout data from server
// *******************************************

const getAppliedLayoutJSON = () => {
  let http = new XMLHttpRequest();
  let url = "/widget/get-applied-layout/";
  let params = "";
  http.open("GET", url, false);
  json = "[]";
  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      json = http.responseText;
    }
  };
  http.send(params);
  console.log(json);
  return json;
};

const initMainBoard = () => {
  document.querySelector('.main-board').innerHTML ="";
}

const renderAppliedLayout = () => {
  initMainBoard();
  const JSON_STR = getAppliedLayoutJSON();
  console.log(JSON_STR);
  let json = JSON.parse(JSON_STR);
  let financeIndex = 0;
  let stickyNoteIndex = 0;
  let searchingIndex = 0;
  let ddayIndex = 0;
  let timerIndex = 0;
  let timer2Index = 0;
  let weatherIndex = 0;
  let bookIndex =0;
  let githubIndex = 0;

  for (let i = 0; i < json.length; i++) {
    console.log(i + "th widget");
    let type = json[i].type;
    let contents = json[i].contents;

    if (type === "background") {
      // document.querySelector('.main-board').style.background="url('/main/media/yellow2.mp4')";
    } else if (type === "finance") {
      finance(contents, financeIndex);
      financeIndex++;
    } else if (type === "stickynote") {
      stickynote(contents, stickyNoteIndex);
      stickyNoteIndex++;
    } else if (type === "searching") {
      searching(contents, searchingIndex);
      searchingIndex++;
    } else if (type === "dday") {
      dday(contents, ddayIndex);
      ddayIndex++;
    } else if (type === "timer") {
      timer(contents, timerIndex);
      timerIndex++;
    } else if (type === "timer2") {
      timer2(contents, timer2Index);
      timer2Index++;
    } else if (type === "book") {
      book(contents, bookIndex);
      bookIndex++;
    } else if (type === "weather") {
      weather(contents, weatherIndex);
      weatherIndex++;
    }
  }
  console.log("All widgets are rendered");
};

window.onload = () => {
  renderAppliedLayout();
};
