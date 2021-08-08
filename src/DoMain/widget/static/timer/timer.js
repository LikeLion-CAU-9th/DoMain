const timer = (contents) => {
  const eventName = contents.event;
  document.querySelector('.event').innerHTML = eventName + ": ";
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
  console.log("now: ", now);
  console.log("tar: ", targetTime);
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

window.onload = () => {
  let timerObj = {
    'event': '자정',
    'time': '23:59:00'
  }
  timer(timerObj);
}