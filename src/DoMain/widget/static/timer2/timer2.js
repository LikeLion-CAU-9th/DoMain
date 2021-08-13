const timer2 = (contents, index) => {
  let elem = getTimer2Elements();
  document.querySelector('.main-board').innerHTML += elem;
  let widgetObj = {};
  widgetObj['type'] = 'timer2';
  widgetObj['contents'] = contents;
  document.querySelectorAll('.timer2Hidden')[index].value = JSON.stringify(widgetObj);
  const eventName = contents.event;
  document.querySelectorAll('.event2')[index].innerHTML = eventName;
  document.querySelectorAll('.widget-timer2')[index].style.left = contents.posX;
  document.querySelectorAll('.widget-timer2')[index].style.top = contents.posY;

  document.querySelectorAll('.widget-timer2')[index].style.backgroundColor = contents.bgColor;
  document.querySelectorAll('.widget-timer2')[index].style.backgroundImage = contents.bgImage;

  const time = contents.time;
  let hours = time.split(':')[0];
  let minutes = time.split(':')[1];
  let seconds = time.split(':')[2];
  renderRemainTime2(index, hours, minutes, seconds);
  const renderTimeInterveral = setInterval(()=>{
    renderRemainTime2(index, hours, minutes, seconds);
  }, 1000);
}

const renderRemainTime2 = (index, hours, minutes, seconds) => {
  let now = new Date();
  let targetTime = getTargetDate(hours, minutes, seconds);
  let timeleft = targetTime - now;
  if (timeleft <= 0) {
    document.querySelectorAll('.remain-time_H')[index].innerHTML = "It's";
    document.querySelectorAll('.remain-time_M')[index].innerHTML = "ov";
    document.querySelectorAll('.remain-time_S')[index].innerHTML = "er";
    return true;
  }
  let remainHour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let twoDigitHour = intToTwoDigit(remainHour);
  let remainMin = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let twoDigitMin = intToTwoDigit(remainMin);
  let remainSec = Math.floor((timeleft % (1000 * 60)) / 1000);
  let twoDigitSec = intToTwoDigit(remainSec);

  document.querySelectorAll('.remain-time_H')[index].innerHTML = twoDigitHour;
  document.querySelectorAll('.remain-time_M')[index].innerHTML = twoDigitMin;
  document.querySelectorAll('.remain-time_S')[index].innerHTML = twoDigitSec;
}


