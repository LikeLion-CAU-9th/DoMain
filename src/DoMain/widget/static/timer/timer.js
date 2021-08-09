const timer = (contents, index) => {
  let elem = getTimerElements();
  document.querySelector('.main-board').innerHTML += elem;
  let widgetObj = {};
  widgetObj['type'] = 'timer';
  widgetObj['contents'] = contents;
  document.querySelectorAll('.timerHidden')[index].value = JSON.stringify(widgetObj);
  const eventName = contents.event;
  document.querySelectorAll('.event')[index].innerHTML = eventName + ": ";
  document.querySelectorAll('.widget-timer')[index].style.color = contents.bgColor;
  document.querySelectorAll('.widget-timer')[index].style.left = contents.posX;
  document.querySelectorAll('.widget-timer')[index].style.top = contents.posY;
  document.querySelectorAll('.widget-timer')[index].style.fontSize = contents.fontSize;
  document.querySelectorAll('.widget-timer .remain-time')[index].style.fontSize = (pixelToInt(contents.fontSize)+4) + "px";;
  const time = contents.time;
  let hours = time.split(':')[0];
  let minutes = time.split(':')[1];
  let seconds = time.split(':')[2];
  renderRemainTime(index, hours, minutes, seconds);
  const renderTimeInterveral = setInterval(()=>{
    renderRemainTime(index, hours, minutes, seconds);
  }, 1000);
}

const renderRemainTime = (index, hours, minutes, seconds) => {
  let now = new Date();
  let targetTime = getTargetDate(hours, minutes, seconds);
  let timeleft = targetTime - now;
  if (timeleft <= 0) {
    document.querySelectorAll('.remain-time')[index].innerHTML = "It's over! 🌟";
    return true;
  }
  let remainHour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let twoDigitHour = intToTwoDigit(remainHour);
  let remainMin = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let twoDigitMin = intToTwoDigit(remainMin);
  let remainSec = Math.floor((timeleft % (1000 * 60)) / 1000);
  let twoDigitSec = intToTwoDigit(remainSec);

  let timeStr = twoDigitHour + ":" + twoDigitMin + ":" + twoDigitSec;
  document.querySelectorAll('.remain-time')[index].innerHTML = timeStr;
}

const getTargetDate = (hours, minutes, seconds) => {
  const YEAR = new Date().getFullYear();
  const MONTH_INDEX = new Date().getMonth();
  const DAY = new Date().getDate();
  return new Date(YEAR, MONTH_INDEX, DAY, hours, minutes, seconds);
}

const intToTwoDigit = (num) => {
  let strNum = num.toString();
  let result = strNum;
  if(strNum.length === 1)
    result = "0" + strNum;
  return result
}
