const timer = (contents) => {
  let elem = getTimerElements();
  document.querySelector('.main-board').innerHTML += elem;
  const eventName = contents.event;
  document.querySelector('.event').innerHTML = eventName + ": ";
  document.querySelector('.widget-timer').style.color = contents.bgColor;
  document.querySelector('.widget-timer').style.left = contents.posX;
  document.querySelector('.widget-timer').style.top = contents.posY;
  document.querySelector('.widget-timer').style.fontSize = contents.fontSize;
  document.querySelector('.widget-timer .remain-time').style.fontSize = (pixelToInt(contents.fontSize)+4) + "px";;
  const time = contents.time;
  let hours = time.split(':')[0];
  let minutes = time.split(':')[1];
  let seconds = time.split(':')[2];
  renderRemainTime(hours, minutes, seconds);
  const renderTimeInterveral = setInterval(()=>{
    renderRemainTime(hours, minutes, seconds);
  }, 1000);
}

const renderRemainTime = (hours, minutes, seconds) => {
  let now = new Date();
  let targetTime = getTargetDate(hours, minutes, seconds);
  let timeleft = targetTime - now;
  if (timeleft <= 0) {
    document.querySelector('.remain-time').innerHTML = "It's over! 🌟";
    return true;
  }
  let remainHour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let twoDigitHour = intToTwoDigit(remainHour);
  let remainMin = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let twoDigitMin = intToTwoDigit(remainMin);
  let remainSec = Math.floor((timeleft % (1000 * 60)) / 1000);
  let twoDigitSec = intToTwoDigit(remainSec);

  let timeStr = twoDigitHour + ":" + twoDigitMin + ":" + twoDigitSec;
  document.querySelector('.remain-time').innerHTML = timeStr;
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
